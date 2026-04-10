#!/usr/bin/env node
/**
 * flatten-digest.js
 *
 * Transforms Claude remix output into the flat card-per-item JSON structure
 * that the website can directly render.
 *
 * Usage:
 *   node flatten-digest.js <remix-output.json> [--output <path>]
 *
 * The remix output is expected to have sections for tweets, podcasts, and blogs.
 * This script flattens them into a single items[] array, one item per card.
 *
 * If --output is not specified, it appends to the current month's JSON file
 * in public/data/ (e.g., public/data/2026-04.json).
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateId(author, date, index) {
  const slug = author.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20);
  return `${slug}-${date}-${index}`;
}

function getMonthKey(dateStr) {
  return dateStr.slice(0, 7); // "2026-04"
}

function flattenRemixOutput(remixData) {
  const items = [];
  const today = new Date().toISOString().slice(0, 10);

  // Process X/Twitter entries
  if (remixData.x && Array.isArray(remixData.x)) {
    for (const builder of remixData.x) {
      if (!builder.tweets) continue;
      builder.tweets.forEach((tweet, i) => {
        items.push({
          id: generateId(builder.name || builder.handle, today, i + 1),
          author: builder.name || builder.handle,
          bio: builder.bio || '',
          content_zh: tweet.summary_zh || tweet.text || '',
          content_en: tweet.summary_en || tweet.text || '',
          source: 'x',
          url: tweet.url || `https://x.com/${builder.handle}/status/${tweet.id}`,
          date: tweet.date || today
        });
      });
    }
  }

  // Process podcast entries
  if (remixData.podcasts && Array.isArray(remixData.podcasts)) {
    for (const podcast of remixData.podcasts) {
      items.push({
        id: generateId(podcast.name || 'podcast', today, 0),
        author: podcast.name || 'Unknown Podcast',
        bio: podcast.bio || 'AI podcast',
        content_zh: podcast.summary_zh || '',
        content_en: podcast.summary_en || '',
        source: 'podcast',
        url: podcast.url || '',
        date: podcast.date || today
      });
    }
  }

  // Process blog entries
  if (remixData.blogs && Array.isArray(remixData.blogs)) {
    for (const blog of remixData.blogs) {
      items.push({
        id: generateId(blog.name || 'blog', today, 0),
        author: blog.name || 'Unknown Blog',
        bio: blog.bio || '',
        content_zh: blog.summary_zh || '',
        content_en: blog.summary_en || '',
        source: 'blog',
        url: blog.url || '',
        date: blog.date || today
      });
    }
  }

  return items;
}

function mergeIntoMonthlyFile(newItems, outputDir) {
  // Group items by month
  const byMonth = {};
  for (const item of newItems) {
    const key = getMonthKey(item.date);
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(item);
  }

  for (const [month, items] of Object.entries(byMonth)) {
    const filePath = path.join(outputDir, `${month}.json`);
    let existing = { items: [] };

    if (fs.existsSync(filePath)) {
      existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    // Deduplicate by id
    const existingIds = new Set(existing.items.map(i => i.id));
    const newUnique = items.filter(i => !existingIds.has(i.id));

    existing.items = [...newUnique, ...existing.items];
    // Sort by date descending
    existing.items.sort((a, b) => b.date.localeCompare(a.date));

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    console.log(`✅ ${filePath}: added ${newUnique.length} items (total: ${existing.items.length})`);
  }
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node flatten-digest.js <remix-output.json> [--output <dir>]');
    console.log('');
    console.log('Transforms remix output into flat card-per-item JSON.');
    console.log('Default output dir: public/data/');
    process.exit(0);
  }

  const inputPath = args[0];
  const outputIdx = args.indexOf('--output');
  const outputDir = outputIdx !== -1 ? args[outputIdx + 1] : path.join(__dirname, '..', 'public', 'data');

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    process.exit(1);
  }

  const remixData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const items = flattenRemixOutput(remixData);

  if (items.length === 0) {
    console.log('⚠️ No items found in remix output.');
    process.exit(0);
  }

  mergeIntoMonthlyFile(items, outputDir);
}

module.exports = { flattenRemixOutput, mergeIntoMonthlyFile };
