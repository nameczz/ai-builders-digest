import { clamp, dist, lerp } from '../shared/math.js';

export function createDrawScene({ state, game, sound, bump, endPointer }) {
    const progress = { traceIndex: 0, traceDone: false, traceCelebrated: false, traceRide: 0 };
    // A broad, continuous route: progress survives finger lifts and cannot be skipped.
    const path = Array.from({ length: 121 }, (_, i) => { const t = i / 120; return { x: 330 + t * 1010, y: 540 - 150 * Math.sin(t * Math.PI * 2) * .7 }; });
    let guide, ink, cursor;
    function startTrace() {
        progress.traceIndex = 0;
        progress.traceDone = false;
        progress.traceCelebrated = false;
        progress.traceRide = 0;
        state.scale = .29;
        state.ox = path[0].x - 815 * .29;
        state.oy = path[0].y - 873 * .29;
        guide = new PIXI.Graphics();
        ink = new PIXI.Graphics();
        cursor = new PIXI.Graphics();
        game.addChild(guide, ink, cursor);
        for (let i = 0; i < path.length; i += 3)
            guide.circle(path[i].x, path[i].y, 12).fill({ color: 0xffffff, alpha: .85 });
        guide.circle(path[120].x, path[120].y, 38).fill({ color: 0xffffff, alpha: .30 });
        guide.star(path[120].x, path[120].y, 5, 28, 14).fill(0xffd84d);
        drawTrace();
    }
    function drawTrace() { ink.clear(); if (progress.traceIndex > 0) {
        ink.moveTo(path[0].x, path[0].y);
        for (let i = 1; i <= progress.traceIndex; i++)
            ink.lineTo(path[i].x, path[i].y);
        ink.stroke({ color: 0xffd84d, width: 25, cap: 'round', join: 'round' });
    } cursor.clear(); if (!progress.traceDone) {
        const p = path[progress.traceIndex];
        cursor.circle(p.x, p.y, 33).fill({ color: 0xffffff, alpha: .28 }).circle(p.x, p.y, 20).fill(0xfff9f2).stroke({ color: 0xffd84d, width: 5 });
    } }
    function segmentDistance(p, a, b) { const dx = b.x - a.x, dy = b.y - a.y, t = clamp(((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1), 0, 1); return Math.hypot(p.x - a.x - dx * t, p.y - a.y - dy * t); }
    function advance(p, prev) { if (progress.traceDone)
        return; let last = progress.traceIndex; for (let i = last; i < Math.min(last + 10, path.length); i++) {
        const dd = dist(p, prev) < 140 ? segmentDistance(path[i], prev, p) : dist(p, path[i]);
        if (dd < 55)
            progress.traceIndex = i;
        else
            break;
    } if (progress.traceIndex >= 119) {
        progress.traceIndex = 120;
        progress.traceDone = true;
        progress.traceRide = 0;
        endPointer();
        sound.tone(660, .3);
    } drawTrace(); }

    return {
        enter: startTrace,
        pointerDown(p, local, event, makeDrag) {
            if (progress.traceDone) return false;
            state.drag = makeDrag('trace', p, local, event);
            advance(p, p);
            return true;
        },
        pointerMove(d, p) { if (d.kind === 'trace') advance(p, d.last); },
        update(dt) {
        if (progress.traceDone) {
            progress.traceRide = Math.min(1, progress.traceRide + dt / 2.0);
            const idx = progress.traceRide * 120, j = Math.min(119, Math.floor(idx)), q = { x: lerp(path[j].x, path[j + 1].x, idx - j), y: lerp(path[j].y, path[j + 1].y, idx - j) };
            state.ox = q.x - 815 * state.scale;
            state.oy = q.y - 873 * state.scale;
            if (progress.traceRide === 1 && !progress.traceCelebrated) {
                progress.traceCelebrated = true;
                bump(.16);
            }
        }
        },
        debug: { progress, path }
    };
}
