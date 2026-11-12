import { drawFold } from './scenes/fin-fold.js';
import { ASSETS } from './shared/assets.js';
import { clamp, lerp, dist } from './shared/math.js';
import { Spring } from './shared/spring.js';
import { DeformMesh } from './shared/deform-mesh.js';
import { Sound } from './shared/sound.js';
import { bindInput } from './shared/input.js';
import { createRouter } from './shared/router.js';
import { createFeedScene } from './scenes/feed.js';
import { createHomeScene } from './scenes/home.js';
import { createDrawScene } from './scenes/draw.js';
import { createPuzzleScene } from './scenes/puzzle.js';
import { createMusicScene } from './scenes/music.js';

const W = 1648, H = 928, SKY = 0x98d9f7;
const dom = (id) => document.getElementById(id);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Shared v0.11 character rig, renderer and scene lifecycle. Scene game state lives in scenes/.
export async function startPlayground() {
    const app = new PIXI.Application();
    await app.init({ width: W, height: H, background: SKY, antialias: true, resolution: Math.min(devicePixelRatio || 1, 2), autoDensity: true, preference: 'webgl', preserveDrawingBuffer: true, powerPreference: 'low-power' });
    dom('canvas-host').appendChild(app.canvas);
    window.sealApp = app;
    const root = new PIXI.Container(), world = new PIXI.Container(), character = new PIXI.Container(), game = new PIXI.Container();
    app.stage.addChild(root);
    root.addChild(world);
    world.addChild(game);
    world.addChild(character);
    const sound = new Sound();
    const texture = async (name) => { const im = new Image(); im.src = ASSETS[name]; await im.decode(); return PIXI.Texture.from(im); };
    const tex = {};
    const assetNames = ['body-stable', 'hat-smooth', 'eye-left-base', 'eye-right-base', 'eye-left-closed', 'eye-right-closed', 'eye-left-dizzy-large', 'eye-right-dizzy-large', 'mouth-happy', 'mouth-surprise', 'mouth-large', 'mouth-dizzy'];
    assetNames.push(...Object.keys(ASSETS).filter(name => name.startsWith('feed-')));
    await Promise.all(assetNames.map(async (n) => tex[n] = await texture(n)));
    // One immutable body bitmap for ALL states. Only the face has replaceable parts.
    const shadow = new PIXI.Graphics().ellipse(827, 849, 418, 49).fill({ color: 0x4eaae3, alpha: .43 });
    world.addChildAt(shadow, 0);
    const body = new DeformMesh(tex['body-stable'], { x: 380, y: 302, w: 868, h: 584 });
    const hat = new DeformMesh(tex['hat-smooth'], { x: 600, y: 178, w: 590, h: 414 }, 28, 20);
    // A small fur patch covers just the old right-flipper crease as the fin rolls in.
    const finPatch = new DeformMesh(tex['feed-fin-patch'], {x:948,y:625,w:176,h:192}, 9, 11);
    const sideEdge=new PIXI.Graphics(), sideClip=new PIXI.Graphics();
    sideEdge.visible=sideClip.visible=finPatch.visible=false;
    const eyeLeft = new DeformMesh(tex['eye-left-base'], { x: 614, y: 381, w: 135, h: 150 }, 11, 11);
    const eyeRight = new DeformMesh(tex['eye-right-base'], { x: 814, y: 418, w: 142, h: 154 }, 11, 11);
    const mouth = new DeformMesh(tex['mouth-happy'], { x: 711, y: 450, w: 127, h: 148 }, 13, 13);
    body.label = 'Stable seal body';
    hat.label = 'Complete cap — always behind body';
    eyeLeft.label = 'Left eye';
    eyeRight.label = 'Right eye';
    mouth.label = 'Expression mouth';
    character.addChild(hat, sideEdge, body, finPatch, eyeLeft, eyeRight, mouth, sideClip);
    // Rays are deliberately absent from the render tree and asset bundle in v0.5.
    const rays = new PIXI.Container();
    rays.visible = false;
    rays.renderable = false;
    const stableBodyTexture = body.texture;
    const spring = new Spring(170, 8.2), sway = new Spring(120, 10), pullX = new Spring(110, 8), pullY = new Spring(110, 8), capX = new Spring(110, 9), capY = new Spring(110, 9), capAngle = new Spring(110, 9);
    // Intensity and time are independent inputs. They share a single visual routing table.
    const reactionMap = { small: 'surprised_soft', medium: 'surprised_soft', large: 'surprised_large', sustained: 'surprised_soft', sustainedLong: 'surprised_large' };
    const pullConfig = { startDistance: 8, mediumRatio: .13, largeRatio: .25, sustainedAfter: 1.6, largeAfter: 3.2, referenceWidth: 760 };
    const pullState = { active: false, level: 'none', effectiveLevel: 'none', distance: 0, normalizedDistance: 0, duration: 0, sustained: false, expression: 'neutral' };
    const state = { mode: 'home', menu: true, press: false, drag: null, pull: { x: 500, y: 600 }, split: false, rayUntil: 0, time: 0, scale: 1, ox: 0, oy: 0, expression: 'neutral', reactionUntil: 0, reaction: 'neutral', pullFeedback: pullState, peakPull: 'none', pendingDizzy: false, reboundAt: 0, dizzyUntil: 0, dizzyCount: 0 };
    const cap = { mode: 'worn', x: 860, y: 363, angle: 0, vx: 0, vy: 0, spin: 0, detached: false,
        shape: [1, 0, 0, 1], relax: 0, returnAt: 0, returnStarted: 0, fallStarted: 0, snapT: 0, snapDuration: .24, peelProgress: 0,
        snapFrom: { x: 860, y: 363, angle: 0 }, prevAnchor: { x: 860, y: 363 }, snapCount: 0, detachCount: 0, returnCount: 0 };
    // Exact deformed cap pose, relative to its center. It is captured before changing modes.
    let capPose = null;
    const capConfig = { outwardDistance: 86, minimumPeelTime: .65, gravity: 1650, returnDelay: 5, snapDuration: .24, outerStroke: 13.5,
        // Source-space forehead ellipse, not the torso/fin/tail silhouette.
        wearZone: { x: 860, y: 350, rx: 155, ry: 75 } };
    const peelDebug = { outward: 0, required: 86, available: 0, upward: false };
    // Both bean eyes share a bounded gaze vector. No added whites or new eye style.
    const gaze = { x: 0, y: 0, targetX: 0, targetY: 0, active: false, suppressed: false,
        holdUntil: 0, contact: { x: 783, y: 475 }, maxX: 21, maxY: 15 };
    const idleConfig = { leftFin: .052, rightFin: .100, tail: .130 };
    const springs = [spring, sway, pullX, pullY, capAngle];
    const idle = { enabled: !reduced, weight: 1, phase: 0, breath: 0, leftFin: 0, rightFin: 0, tail: 0, blink: 0, blinkStarted: -100, nextBlink: 2.5 + Math.random() * 2.5, doublePending: false, blinkCount: 0 };
    let expressionMix = 0, largeMix = 0, manualExpression = null, lastPullSignal = 'none:false';
    const ranks = { none: 0, small: 1, medium: 2, large: 3 };
    const maxLevel = (a, b) => ranks[a] >= ranks[b] ? a : b;
    function signalPull() { const key = pullState.level + ':' + pullState.effectiveLevel + ':' + pullState.sustained; if (key !== lastPullSignal) {
        lastPullSignal = key;
        window.dispatchEvent(new CustomEvent('seal:pull-state', { detail: { ...pullState } }));
    } }
    function clearPull() { Object.assign(pullState, { active: false, level: 'none', effectiveLevel: 'none', distance: 0, normalizedDistance: 0, duration: 0, sustained: false, expression: 'neutral' }); signalPull(); }
    function updatePull() {
        const d = state.drag;
        if (d?.kind !== 'body' || !d.moved) {
            if (pullState.active)
                clearPull();
            return;
        }
        const distance = dist(d.last, d.start) / state.scale, ratio = distance / pullConfig.referenceWidth;
        const active = distance >= pullConfig.startDistance, level = !active ? 'none' : ratio >= pullConfig.largeRatio ? 'large' : ratio >= pullConfig.mediumRatio ? 'medium' : 'small';
        if (active && d.pullStartedAt === undefined)
            d.pullStartedAt = state.time;
        if (!active)
            d.pullStartedAt = undefined;
        const duration = active ? Math.max(0, state.time - (d.pullStartedAt ?? state.time)) : 0, sustained = active && duration >= pullConfig.sustainedAfter;
        const timedLevel = !active ? 'none' : duration >= pullConfig.largeAfter ? 'large' : sustained ? 'medium' : 'small';
        const effectiveLevel = maxLevel(level, timedLevel);
        Object.assign(pullState, { active, level, effectiveLevel, distance, normalizedDistance: ratio, duration, sustained, expression: active ? reactionMap[effectiveLevel] : 'neutral' });
        state.peakPull = maxLevel(state.peakPull, effectiveLevel);
        signalPull();
    }
    function startBlink() { idle.blinkStarted = state.time; idle.blinkCount++; }
    function cancelRecovery() { state.pendingDizzy = false; state.dizzyUntil = 0; state.reactionUntil = 0; state.peakPull = 'none'; }
    function updateLife(dt) {
        updatePull();
        if (state.pendingDizzy && !state.drag) {
            const elapsed = state.time - state.reboundAt;
            if (elapsed > .48 && (Math.abs(pullX.x) + Math.abs(pullY.x) < 42 && Math.abs(spring.x) < .10 || elapsed > 1.10)) {
                state.pendingDizzy = false;
                state.dizzyUntil = state.time + (reduced ? .65 : 2.0);
                state.dizzyCount++;
                window.dispatchEvent(new CustomEvent('seal:dizzy', { detail: { duration: 2.0 } }));
            }
        }
        const feeding = state.mode === 'feed' ? scenes.feed.face : null;
        let feedingExpression = null;
        if (feeding?.mood === 'sad') feedingExpression = 'disappointed';
        else if (feeding?.open || feeding?.hiccup > .12) feedingExpression = 'surprised_soft';
        else if (feeding?.mood === 'content' || feeding?.mood === 'eager') feedingExpression = 'happy';
        const wanted = feedingExpression ?? manualExpression ?? (pullState.active ? pullState.expression : state.time < state.dizzyUntil ? 'dizzy' : state.time < state.reactionUntil ? state.reaction : state.pendingDizzy ? 'surprised_large' : 'neutral');
        state.expression = wanted;
        const strength = wanted === 'surprised_large' ? 3 : wanted === 'surprised_medium' ? 2 : wanted === 'surprised_soft' ? 1 : 0;
        expressionMix = lerp(expressionMix, strength, 1 - Math.exp(-dt * 20));
        largeMix = lerp(largeMix, pullState.active && pullState.effectiveLevel === 'large' ? 1 : 0, 1 - Math.exp(-dt * 10));
        const mouthName = { disappointed:'mouth-happy', neutral: 'mouth-happy', happy: 'mouth-happy', surprised_soft: 'mouth-surprise', surprised_medium: 'mouth-surprise', surprised_large: 'mouth-large', dizzy: 'mouth-dizzy' };
        const fullRest = feeding?.full && feeding.mood === 'idle' && wanted === 'neutral' && !state.drag;
        const isMeal = feeding?.mood === 'eager' || feeding?.mood === 'content' || fullRest;
        const opened = isMeal && feeding.aperture > .025;
        const eatingEyes = feeding?.burp ? 'burp' : feeding?.mood === 'eager' && !opened ? 'eager' : 'smile';
        const mouthPose = feeding?.burp ? 'burp' : opened ? 'open' : 'closed';
        mouth.setTexture(tex[isMeal ? 'feed-mouth-' + mouthPose : mouthName[wanted]]);
        const eyeState = wanted === 'dizzy' ? 'dizzy-large' : wanted === 'surprised_large' ? 'closed' : 'base';
        eyeLeft.setTexture(tex[isMeal ? 'feed-eye-left-' + eatingEyes : 'eye-left-' + eyeState]);
        eyeRight.setTexture(tex[isMeal ? 'feed-eye-right-' + eatingEyes : 'eye-right-' + eyeState]);
        const active = !!state.drag || Math.abs(spring.x) > .018 || Math.abs(pullX.x) + Math.abs(pullY.x) > 2 || wanted === 'dizzy';
        const target = idle.enabled && !active ? 1 : 0;
        idle.weight = lerp(idle.weight, target, 1 - Math.exp(-dt * (active ? 16 : 3.5)));
        idle.phase += dt;
        const k = idle.weight;
        idle.breath = Math.sin(idle.phase * 2 * Math.PI / 3.2) * .010 * k;
        // Left fin is deliberately quieter; tail/right-fin keep their v0.4 amplitudes.
        idle.leftFin = Math.sin(idle.phase * 2 * Math.PI / 3.9) * idleConfig.leftFin * k;
        idle.rightFin = Math.sin(idle.phase * 2 * Math.PI / 4.7) * idleConfig.rightFin * k;
        const tailCycle = idle.phase % 7.2;
        idle.tail = (tailCycle > 3.9 && tailCycle < 6.5 ? Math.sin((tailCycle - 3.9) / 2.6 * Math.PI) * Math.sin((tailCycle - 3.9) * 4.4) : 0) * idleConfig.tail * k;
        if ((feeding && feeding.mood !== 'idle') || strength > 0 || wanted === 'dizzy' || state.drag) {
            idle.blink = 0;
            idle.blinkStarted = -100;
            idle.nextBlink = Math.max(idle.nextBlink, state.time + .65);
        }
        else {
            if (state.time >= idle.nextBlink) {
                startBlink();
                if (!idle.doublePending && Math.random() < .16) {
                    idle.doublePending = true;
                    idle.nextBlink = state.time + .33;
                }
                else {
                    idle.doublePending = false;
                    idle.nextBlink = state.time + 2.5 + Math.random() * 2.5;
                }
            }
            const elapsed = state.time - idle.blinkStarted;
            idle.blink = elapsed >= 0 && elapsed < .19 ? Math.sin(elapsed / .19 * Math.PI) : 0;
        }
    }
    // Touch-only attention; mouse hover is deliberately ignored. The visual eyes
    // move together in screen-local direction, and return smoothly after release.
    function updateGaze(dt) {
        const d = state.drag, contact = !!d && (d.kind === 'body' || d.kind === 'hat');
        gaze.suppressed = state.expression === 'surprised_large' || state.expression === 'dizzy';
        const fish = state.mode === 'feed' && scenes.feed.face.gazeAt;
        if (contact || fish) {
            gaze.contact = fish || local(d.last);
            gaze.holdUntil = state.time + .16;
        }
        gaze.active = !gaze.suppressed && (contact || state.time < gaze.holdUntil);
        if (gaze.active) {
            const face = warp(783, 475), dx = gaze.contact.x - face.x, dy = gaze.contact.y - face.y;
            const length = Math.hypot(dx, dy), denom = Math.max(120, length + 90);
            gaze.targetX = clamp(dx / denom * gaze.maxX, -gaze.maxX, gaze.maxX);
            gaze.targetY = clamp(dy / denom * gaze.maxY, -gaze.maxY, gaze.maxY);
        }
        else
            gaze.targetX = gaze.targetY = 0;
        if (gaze.suppressed) {
            gaze.x = gaze.y = 0;
            return;
        }
        const k = 1 - Math.exp(-dt * (gaze.active ? 18 : 8));
        gaze.x = lerp(gaze.x, gaze.targetX, k);
        gaze.y = lerp(gaze.y, gaze.targetY, k);
    }
    // Alpha-based hit tests follow the CURRENT warp. Rear cap cannot be grabbed through the seal.
    function alphaSampler(name, rect) {
        const im = tex[name].source.resource, c = document.createElement('canvas');
        c.width = im.width;
        c.height = im.height;
        const ctx = c.getContext('2d');
        ctx.drawImage(im, 0, 0);
        const pixels = ctx.getImageData(0, 0, c.width, c.height).data;
        return (p) => { const x = Math.floor(p.x - rect.x), y = Math.floor(p.y - rect.y); return x >= 0 && y >= 0 && x < c.width && y < c.height && pixels[(y * c.width + x) * 4 + 3] > 80; };
    }
    const bodyAlpha = alphaSampler('body-stable', body.rect), hatAlpha = alphaSampler('hat-smooth', hat.rect);
    const viewport = { scale: 1, offsetX: 0, offsetY: 0, minX: 0, maxX: W, minY: 0, maxY: H, width: W, height: H };
    let frameScale = 1;
    function localView() { return { minX: (viewport.minX - state.ox) / state.scale, maxX: (viewport.maxX - state.ox) / state.scale, minY: (viewport.minY - state.oy) / state.scale, maxY: (viewport.maxY - state.oy) / state.scale }; }
    function resize() {
        if (state.drag)
            endPointer(true);
        const w = innerWidth, h = innerHeight, s = Math.min(w / W, h / H);
        frameScale = s;
        Object.assign(viewport, { scale: s, offsetX: (w - W * s) / 2, offsetY: (h - H * s) / 2, width: w, height: h });
        viewport.minX = -viewport.offsetX / s;
        viewport.maxX = (w - viewport.offsetX) / s;
        viewport.minY = -viewport.offsetY / s;
        viewport.maxY = (h - viewport.offsetY) / s;
        app.renderer.resize(w, h);
        root.scale.set(s);
        root.position.set(viewport.offsetX, viewport.offsetY);
        const shell = dom('shell');
        shell.style.width = w + 'px';
        shell.style.height = h + 'px';
        shell.style.setProperty('--u', s + 'px');
    }
    // Initialize after cap geometry and input helpers below are constructed.
    addEventListener('resize', resize);
    dom('loading').hidden = true;
    function setMenu(group) {
        state.menu = group || false;
        for (const name of ['care','learn']) {
            const open = group === name;
            dom(name).setAttribute('aria-expanded', String(open));
            dom(name+'-options').hidden = !open;
        }
    }
    function bump(strength = .30) { if (reduced)
        strength *= .35; spring.x = clamp(spring.x + strength, -.18, .43); spring.v = -1.8; sway.v += (Math.random() - .5) * .9; state.rayUntil = 0; state.reaction = 'happy'; state.reactionUntil = state.time + .65; sound.tone(350, .34, true); }
    function resetMotion() {
        for (const s of springs)
            s.reset();
        capX.reset();
        capY.reset();
        state.drag = null;
        state.press = false;
        state.split = false;
        state.rayUntil = 0;
        state.reactionUntil = 0;
        state.expression = 'neutral';
        manualExpression = null;
        clearPull();
        cancelRecovery();
        expressionMix = largeMix = 0;
        capPose = null;
        Object.assign(cap, { mode: 'worn', x: 860, y: 363, angle: 0, vx: 0, vy: 0, spin: 0, detached: false, shape: [1, 0, 0, 1], relax: 0, returnAt: 0, snapT: 0, peelProgress: 0, prevAnchor: { x: 860, y: 363 } });
        hat.visible = true;
        Object.assign(gaze, { x: 0, y: 0, targetX: 0, targetY: 0, holdUntil: 0, active: false, suppressed: false, contact: { x: 783, y: 475 } });
        idle.blink = 0;
        idle.blinkStarted = -100;
        idle.nextBlink = state.time + 2.5 + Math.random() * 2.5;
    }
    let scene = null;
    const scenes = {
        home: createHomeScene({ state }),
        feed: createFeedScene({state,world,viewport,warp,sound,puffTexture:tex['feed-puff']}),
        draw: createDrawScene({ state, game, sound, bump, endPointer }),
        puzzle: createPuzzleScene({ state, game, sound, bump }),
        music: createMusicScene({ state, game, sound, bump })
    };
    function activateScene(name) {
        endPointer(true);
        scene?.exit?.();
        sound.stop();
        resetMotion();
        game.removeChildren().forEach((child) => child.destroy?.());
        state.mode = name;
        scene = scenes[name];
        scene.enter();
        const isHome = name === 'home';
        dom('utilities').hidden = isHome;
        dom('draw-tools').hidden = name !== 'draw';
        dom('music-play').hidden = name !== 'music';
        dom('replay').hidden = name === 'feed';
        setMenu(false);
        dom('menu').hidden = !isHome && name !== 'feed';
        document.body.dataset.mode = name;
        document.title = ({ home: '团团游乐场', feed: '喂鱼', draw: '画一画', puzzle: '拼一拼', music: '听一听' })[name] + ' · 团团';
        for (const id of ['draw', 'puzzle', 'music']) {
            if (id === name) dom(id).setAttribute('aria-current', 'page');
            else dom(id).removeAttribute('aria-current');
        }
    }
    const router = createRouter(activateScene);
    function home() { router.navigate('home'); }
    function mode(name) { router.navigate(name); }
    for (const group of ['care','learn'])
        dom(group).addEventListener('click', () => { sound.unlock(); setMenu(state.menu === group ? false : group); });
    for (const name of ['feed','draw','puzzle','music'])
        dom(name).addEventListener('click', () => { sound.unlock(); setMenu(false); mode(name); });
    dom('home').addEventListener('click', home);
    dom('replay').addEventListener('click', () => router.restart());
    dom('music-play').addEventListener('click', () => scenes.music.toggle());
    dom('strength').addEventListener('input', () => { tuning.amplitude = Number(dom('strength').value); bump(tuning.amplitude); });
    const tuning = { amplitude: .34, hold: .40, maxPull: 250 };
    // Stable source-image rig. Idle and touch share one deformation function; no layer swaps.
    function warp(x, y) {
        const q = clamp(spring.x, -.19, .43), weight = clamp((y - 330) / 390, 0, 1), sx = 1 + q * (.64 + .18 * weight), sy = 1 - q;
        let px = 815 + (x - 815) * sx, py = 873 + (y - 873) * sy;
        // Upper body sways more than the ground-contact region.
        const lift = clamp((873 - y) / 660, 0, 1);
        px += sway.x * 110 * lift;
        // A local Gaussian tug makes the flipper/body bend rather than scaling a screenshot.
        const radius = 195 + largeMix * 62, dd = ((x - state.pull.x) ** 2 + (y - state.pull.y) ** 2) / (2 * radius ** 2), w = Math.exp(-dd);
        const stretchBoost = 1 + largeMix * .18;
        px += clamp(pullX.x, -250, 250) * w * stretchBoost;
        py += clamp(pullY.x, -230, 210) * w * stretchBoost;
        if (state.mode === 'feed') {
            const f = scenes.feed.face;
            // Local cheek inflation, throat bob and flipper-to-belly motion share the existing skin.
            if (f.chew) {
                const left = f.chew > 0, cx = left ? 613 : 930, cy = left ? 526 : 578;
                const cheek = Math.exp(-((x-cx)**2/17000 + (y-cy)**2/9600));
                const jaw = Math.exp(-((x-775)**2/32000 + (y-555)**2/12000));
                px -= 32 * f.chew * cheek;
                py += Math.abs(f.chew) * (12*jaw - 11*cheek);
            }
            if (f.pat) py += 4*f.pat*Math.exp(-((x-790)**2/43000+(y-725)**2/11000));
            if (f.fullness) px += .055*f.fullness*(x-813)*Math.exp(-((y-727)**2)/16500);
            if (f.inhale) {
                py -= 22*f.inhale*lift;
                px += .022*f.inhale*(x-810)*Math.exp(-((y-600)**2)/34000);
            }
            if (f.swallow) py += 12*f.swallow*Math.exp(-((y-589)**2+(x-775)**2)/14000);
            py -= f.hiccup * 27 * lift;
        }
        if (state.expression === 'dizzy' && !reduced) {
            px += Math.sin((state.time - state.reboundAt) * 5.2) * 9 * lift;
        }
        // Subtle grounded breathing. Local fin rotations smoothly blend into the torso.
        px = 815 + (px - 815) * (1 - idle.breath * .22);
        py = 873 + (py - 873) * (1 + idle.breath);
        const rotateLocal = (cx, cy, angle, weight) => { const dx = x - cx, dy = y - cy; px += (dx * (Math.cos(angle) - 1) - dy * Math.sin(angle)) * weight; py += (dx * Math.sin(angle) + dy * (Math.cos(angle) - 1)) * weight; };
        rotateLocal(498, 605, idle.leftFin, Math.exp(-((x - 433) ** 2 / (2 * 72 ** 2) + (y - 542) ** 2 / (2 * 98 ** 2))));
        rotateLocal(986, 667, idle.rightFin, Math.exp(-((x - 1054) ** 2 / (2 * 66 ** 2) + (y - 722) ** 2 / (2 * 78 ** 2))));
        rotateLocal(1082, 759, idle.tail, Math.exp(-((x - 1183) ** 2 / (2 * 92 ** 2) + (y - 758) ** 2 / (2 * 83 ** 2))));
        return { x: px, y: py };
    }
    function capAnchor() { return warp(860, 363); }
    // Interpolate the same two triangles per grid cell as the rendered cap mesh.
    // Keeping the full pose avoids replacing a non-linear warp with an affine fit.
    function capPoseOffset(x, y) {
        if (!capPose) {
            const dx = x - 860, dy = y - 363;
            return { x: cap.shape[0] * dx + cap.shape[1] * dy, y: cap.shape[2] * dx + cap.shape[3] * dy };
        }
        const gx = clamp((x - hat.rect.x) / hat.rect.w * (hat.nx - 1), 0, hat.nx - 1), gy = clamp((y - hat.rect.y) / hat.rect.h * (hat.ny - 1), 0, hat.ny - 1);
        const ix = Math.min(hat.nx - 2, Math.floor(gx)), iy = Math.min(hat.ny - 2, Math.floor(gy)), u = gx - ix, v = gy - iy;
        const a = (iy * hat.nx + ix) * 2, b = a + 2, c = a + hat.nx * 2, d = c + 2;
        const channel = (n) => u + v <= 1
            ? capPose[a + n] * (1 - u - v) + capPose[b + n] * u + capPose[c + n] * v
            : capPose[b + n] * (1 - v) + capPose[c + n] * (1 - u) + capPose[d + n] * (u + v - 1);
        return { x: channel(0), y: channel(1) };
    }
    function propOffset(x, y) {
        const dx = x - 860, dy = y - 363, c = Math.cos(cap.angle), s = Math.sin(cap.angle), rigid = { x: dx * c - dy * s, y: dx * s + dy * c };
        const pose = capPoseOffset(x, y);
        return { x: lerp(rigid.x, pose.x, cap.relax), y: lerp(rigid.y, pose.y, cap.relax) };
    }
    function propWarp(x, y) { const p = propOffset(x, y); return { x: cap.x + p.x, y: cap.y + p.y }; }
    function hatWarp(x, y) {
        // No pre-separation compensation: every attached/peeling vertex uses exactly
        // the same warp as the seal, until checkPeel commits the detach transaction.
        if (cap.mode === 'worn' || cap.mode === 'peeling')
            return warp(x, y);
        const p = propWarp(x, y);
        if (cap.mode === 'snapping') {
            const t = clamp(cap.snapT / cap.snapDuration, 0, 1), k = t * t * (3 - 2 * t), target = warp(x, y);
            return { x: lerp(p.x, target.x, k), y: lerp(p.y, target.y, k) };
        }
        return p;
    }
    const capSamples = [];
    for (let y = 190; y < 585; y += 24)
        for (let x = 610; x < 1185; x += 24)
            if (hatAlpha({ x, y }))
                capSamples.push({ x, y });
    const capBoundary = capSamples.filter(p => !hatAlpha({ x: p.x - 24, y: p.y }) || !hatAlpha({ x: p.x + 24, y: p.y }) || !hatAlpha({ x: p.x, y: p.y - 24 }) || !hatAlpha({ x: p.x, y: p.y + 24 }));
    function capBounds() { const pts = capBoundary.map(p => hatWarp(p.x, p.y)); return { minX: Math.min(...pts.map(p => p.x)) - 20, maxX: Math.max(...pts.map(p => p.x)) + 20, minY: Math.min(...pts.map(p => p.y)) - 20, maxY: Math.max(...pts.map(p => p.y)) + 20 }; }
    function captureCapPose(fn = warp) {
        // Snapshot first: fn can read the current prop pose during a re-grab of a snap.
        const p = fn(860, 363), x = fn(910, 363), y = fn(860, 413), pose = new Float32Array(hat.rest.length);
        for (let i = 0; i < hat.rest.length; i += 2) {
            const q = fn(hat.rest[i], hat.rest[i + 1]);
            pose[i] = q.x - p.x;
            pose[i + 1] = q.y - p.y;
        }
        cap.x = p.x;
        cap.y = p.y;
        cap.shape = [(x.x - p.x) / 50, (y.x - p.x) / 50, (x.y - p.y) / 50, (y.y - p.y) / 50];
        cap.relax = 1;
        cap.angle = Math.atan2(x.y - p.y, x.x - p.x);
        capPose = pose;
    }
    function detachCap(d) {
        if (!d.capGrab)
            return;
        // Snapshot the attached mesh FIRST. Retain the pointerdown material-space grip:
        // inverse-warping a far-away pointer here was the original position-reset bug.
        captureCapPose(warp);
        cap.mode = 'held';
        cap.detached = true;
        cap.detachCount++;
        cap.peelProgress = 0;
        d.capPhase = 'held';
        d.peelStartedAt = undefined;
        // Atomic handoff to the current finger; no dwell-phase drift, no post-threshold
        // tether, and no reset to (860,363). Shape is retained; any stretch-limit gap is
        // closed once by translation, not by deforming the hat separately beforehand.
        const finger = local(d.last), offset = propOffset(d.capGrab.x, d.capGrab.y);
        cap.x = finger.x - offset.x;
        cap.y = finger.y - offset.y;
        cap.vx = cap.vy = cap.spin = 0;
        state.press = false;
        state.split = true;
        // Release the body NOW, while the hat may still be held for several seconds.
        pullX.target = pullY.target = 0;
        sway.target = 0;
        spring.target = 0;
    }
    function beginSnap() {
        if (cap.mode === 'worn' || cap.mode === 'snapping')
            return;
        cap.mode = 'snapping';
        cap.snapT = 0;
        cap.snapDuration = reduced ? .12 : .24;
        cap.vx = cap.vy = cap.spin = 0;
        cap.snapCount++;
        cap.snapFrom = { x: cap.x, y: cap.y, angle: cap.angle };
    }
    /** Follow only the upper-head wearing area, including its current deformation.
     * Use a local ellipse basis instead of inverse-warping arbitrary distant points. */
    function wearZoneFrame() {
        const z = capConfig.wearZone, c = warp(z.x, z.y);
        const l = warp(z.x - z.rx, z.y), r = warp(z.x + z.rx, z.y);
        const t = warp(z.x, z.y - z.ry), b = warp(z.x, z.y + z.ry);
        return { c, ux: (r.x - l.x) / 2, uy: (r.y - l.y) / 2, vx: (b.x - t.x) / 2, vy: (b.y - t.y) / 2 };
    }
    function touchingHead() {
        const f = wearZoneFrame(), det = f.ux * f.vy - f.uy * f.vx;
        if (Math.abs(det) < 1)
            return false;
        const unit = (p) => { const x = p.x - f.c.x, y = p.y - f.c.y; return { x: (x * f.vy - y * f.vx) / det, y: (y * f.ux - x * f.uy) / det }; };
        // A long brim grazing the forehead is not enough while the cap center is down
        // beside the cheeks/tail. The complete cap must be near the wearing position.
        const center = unit({ x: cap.x, y: cap.y });
        if (Math.abs(center.x) > 1.65 || Math.abs(center.y) > 2.15)
            return false;
        const inside = (p) => { const q = unit(p); return q.x * q.x + q.y * q.y <= 1; };
        for (const p of capBoundary)
            if (inside(propWarp(p.x, p.y)))
                return true;
        for (let i = 0; i < capSamples.length; i += 3)
            if (inside(propWarp(capSamples[i].x, capSamples[i].y)))
                return true;
        return false;
    }
    function releaseCap(d, cancel) {
        if (d.capPhase === 'peeling') {
            cap.mode = 'worn';
            cap.peelProgress = 0;
            return;
        }
        if (cancel) {
            beginSnap();
            return;
        }
        cap.mode = 'falling';
        cap.fallStarted = state.time;
        cap.vx = clamp(d.vx * .35, -300, 300);
        cap.vy = clamp(d.vy * .35, -180, 650);
        cap.spin = clamp(cap.vx * .001, -.32, .32);
    }
    function updateCap(dt) {
        hat.visible = cap.mode !== 'offscreen';
        state.split = !['worn', 'peeling'].includes(cap.mode);
        if (cap.mode === 'worn' || cap.mode === 'peeling') {
            const a = capAnchor();
            cap.x = a.x;
            cap.y = a.y;
            return;
        }
        if (cap.mode === 'held') {
            cap.relax = Math.max(0, cap.relax - dt * 5);
            const d = state.drag;
            if (d?.kind === 'hat' && d.capPhase === 'held' && d.capGrab) {
                const p = local(d.last), off = propOffset(d.capGrab.x, d.capGrab.y);
                cap.x = p.x - off.x;
                cap.y = p.y - off.y;
            }
            return;
        }
        if (cap.mode === 'snapping') {
            cap.snapT += dt;
            cap.relax = Math.max(0, cap.relax - dt * 6);
            if (cap.snapT >= cap.snapDuration) {
                cap.mode = 'worn';
                cap.detached = false;
                cap.relax = 0;
                cap.angle = 0;
            }
            return;
        }
        if (cap.mode === 'offscreen') {
            if (state.time >= cap.returnAt) {
                cap.mode = 'returnDrop';
                cap.returnCount++;
                cap.relax = 0;
                cap.angle = 0;
                cap.x = capAnchor().x;
                const view = localView();
                cap.y = view.minY - 260;
                cap.vx = 0;
                cap.vy = 60;
                cap.spin = 0;
                hat.visible = true;
                cap.returnStarted = state.time;
            }
            return;
        }
        if (cap.mode === 'falling' || cap.mode === 'returnDrop') {
            cap.relax = Math.max(0, cap.relax - dt * 5);
            if (cap.mode === 'returnDrop')
                cap.x = lerp(cap.x, capAnchor().x, 1 - Math.exp(-dt * 10));
            cap.vy += capConfig.gravity * dt;
            cap.x += cap.vx * dt;
            cap.y += cap.vy * dt;
            cap.angle = clamp(cap.angle + cap.spin * dt, -.45, .45);
            if (touchingHead()) {
                beginSnap();
                return;
            }
            // The returning hat is aimed at the current head, including a moving/deformed one.
            if (cap.mode === 'returnDrop' && cap.y >= capAnchor().y) {
                beginSnap();
                return;
            }
            const b = capBounds(), view = localView();
            if (cap.mode === 'falling' && (b.minY > view.maxY + 24 || b.maxX < view.minX - 40 || b.minX > view.maxX + 40)) {
                cap.mode = 'offscreen';
                hat.visible = false;
                cap.returnAt = state.time + capConfig.returnDelay;
            }
        }
    }
    // Preserve the .65s dwell, but allow upper/upper-left pulls from ANY cap grab.
    // Near viewport edges, the distance gate uses available operation space, not a
    // longer character stretch or a moved body. The body solver stays unchanged.
    function checkPeel() {
        cap.peelProgress = 0;
        const d = state.drag;
        if (d?.kind !== 'hat' || d.capPhase !== 'peeling')
            return;
        const delta = { x: (d.last.x - d.start.x) / state.scale, y: (d.last.y - d.start.y) / state.scale };
        const length = Math.hypot(delta.x, delta.y), at = local(d.start), n = { x: at.x - 815, y: at.y - 540 };
        const radial = (delta.x * n.x + delta.y * n.y) / Math.max(1, Math.hypot(n.x, n.y));
        // The old radial-only test rejected an upward pull from the side/brim.
        // Any clear upper-hemisphere pull may peel; inward/downward motions still don't.
        const upward = delta.y < -8 && -delta.y / Math.max(1, length) >= .18;
        const outward = Math.max(radial, upward ? length : 0);
        const dir = { x: delta.x / Math.max(1, length), y: delta.y / Math.max(1, length) }, view = localView();
        const safe = 2 / (frameScale * state.scale);
        const tx = dir.x > 1e-5 ? (view.maxX - safe - at.x) / dir.x : dir.x < -1e-5 ? (view.minX + safe - at.x) / dir.x : Infinity;
        const ty = dir.y > 1e-5 ? (view.maxY - safe - at.y) / dir.y : dir.y < -1e-5 ? (view.minY + safe - at.y) / dir.y : Infinity;
        const available = Math.max(0, Math.min(tx, ty));
        const required = Math.max(18, Math.min(capConfig.outwardDistance, available * .72));
        Object.assign(peelDebug, { outward, required, available, upward });
        if (outward >= required) {
            d.peelStartedAt ??= state.time;
            cap.peelProgress = clamp((state.time - d.peelStartedAt) / capConfig.minimumPeelTime, 0, 1);
            if (cap.peelProgress >= 1)
                detachCap(d);
        }
        else if (outward < required * .78)
            d.peelStartedAt = undefined;
    }
    function inverse(p, fn) {
        let x = p.x, y = p.y;
        for (let i = 0; i < 7; i++) {
            const a = fn(x, y), b = fn(x + 1, y), c = fn(x, y + 1), ex = p.x - a.x, ey = p.y - a.y;
            const j00 = b.x - a.x, j10 = b.y - a.y, j01 = c.x - a.x, j11 = c.y - a.y, det = j00 * j11 - j01 * j10;
            if (Math.abs(det) < .04)
                break;
            x += (ex * j11 - ey * j01) / det;
            y += (ey * j00 - ex * j10) / det;
            if (Math.abs(ex) + Math.abs(ey) < .05)
                break;
        }
        return { x, y };
    }
    function local(p) { return { x: (p.x - state.ox) / state.scale, y: (p.y - state.oy) / state.scale }; }
    function point(e) { const r = app.canvas.getBoundingClientRect(); return { x: clamp((e.clientX - r.left - viewport.offsetX) / frameScale, viewport.minX + 2 / frameScale, viewport.maxX - 2 / frameScale), y: clamp((e.clientY - r.top - viewport.offsetY) / frameScale, viewport.minY + 2 / frameScale, viewport.maxY - 2 / frameScale) }; }
    function bodyPoint(p) { return bodyAlpha(inverse(p, warp)); }
    function capPoint(p) { if (cap.mode === 'offscreen' || bodyPoint(p))
        return false; const a = inverse(p, hatWarp); return hatAlpha(a) && dist(hatWarp(a.x, a.y), p) < 5; }
    function sealHit(p) { return bodyPoint(p) || capPoint(p); }
    function endPointer(cancel = false) {
        const d = state.drag;
        if (!d)
            return;
        const wasPull = pullState.active, lastReaction = pullState.expression, large = d.kind === 'body' && state.peakPull === 'large';
        if (wasPull && !cancel) {
            state.reaction = lastReaction;
            state.reactionUntil = state.time + .50;
        }
        if (large && !cancel) {
            state.pendingDizzy = true;
            state.reboundAt = state.time;
            state.reaction = 'surprised_large';
            state.reactionUntil = state.time + .48;
        }
        if (cancel)
            cancelRecovery();
        clearPull();
        state.drag = null;
        state.press = false;
        spring.target = 0;
        pullX.target = pullY.target = 0;
        sway.target = 0;
        if (d.kind === 'hat') {
            releaseCap(d, cancel);
            if (!cancel)
                sound.tone(450, .13);
        }
        scene?.pointerEnd?.(d, cancel);
        if (cancel) return;
        // Only an intentional drag earns a release impulse. A tap is not a bounce.
        if (d.kind === 'body' && d.moved) {
            sway.v += clamp((d.last.x - d.start.x) / 200, -1.3, 1.3);
            spring.v -= large ? 1.9 : 1.2;
            sound.tone(310, .32, true);
        }
    }
    function makeDrag(kind, p, local, event) {
        return { kind, id: event.pointerId, start: p, last: p, local, moved: false,
            startedAt: state.time, sampleAt: state.time, vx: 0, vy: 0 };
    }
    bindInput({
        canvas: app.canvas, state, sound,
        down(e) {
            const p = point(e), l = local(p);
            if (scene.pointerDown?.(p, l, e, makeDrag)) {
                if (state.drag?.kind === 'fish') cancelRecovery();
                return;
            }
            if (sealHit(l)) {
                const isHat = capPoint(l);
                state.drag = { kind: isHat ? 'hat' : 'body', id: e.pointerId, start: p, last: p, local: l, moved: false, startedAt: state.time, sampleAt: state.time, vx: 0, vy: 0 };
                state.press = isHat;
                cancelRecovery();
                if (isHat) {
                    const d = state.drag, grip = inverse(l, hatWarp);
                    d.capWasWorn = cap.mode === 'worn' || cap.mode === 'peeling';
                    d.capGrab = grip;
                    if (d.capWasWorn) {
                        d.capPhase = 'peeling';
                        d.peelStartedAt = undefined;
                        cap.mode = 'peeling';
                        state.pull = inverse(l, warp);
                    }
                    else {
                        if (cap.mode === 'snapping')
                            captureCapPose(hatWarp);
                        d.capPhase = 'held';
                        cap.mode = 'held';
                        cap.detached = true;
                        cap.vx = cap.vy = 0;
                        const off = propOffset(grip.x, grip.y);
                        cap.x = l.x - off.x;
                        cap.y = l.y - off.y;
                    }
                    state.split = !d.capWasWorn;
                }
                // Body contact is pending until the existing 8-design-pixel drag gate passes.
                // Preserve gaze/idle, but do not compress the body just for touching it.
                else {
                    state.pull = inverse(l, warp);
                }
            }
        },
        move(e, d) {
            const p = point(e), l = local(p), delta = dist(p, d.start) / state.scale;
            if (!d.moved) d.moved = delta > pullConfig.startDistance;
            const sampleDt = clamp(state.time - d.sampleAt, 1 / 120, .08);
            const vx = (p.x - d.last.x) / state.scale / sampleDt, vy = (p.y - d.last.y) / state.scale / sampleDt;
            d.vx = lerp(d.vx, clamp(vx, -900, 900), .45);
            d.vy = lerp(d.vy, clamp(vy, -900, 900), .45);
            if (d.kind === 'hat') {
                if (d.capPhase === 'peeling') {
                    pullX.target = clamp((p.x - d.start.x) / state.scale, -tuning.maxPull, tuning.maxPull);
                    pullY.target = clamp((p.y - d.start.y) / state.scale, -230, 200);
                    sway.target = pullX.target / 720;
                }
                else {
                    cap.angle = lerp(cap.angle, clamp((p.x - d.start.x) * .00035, -.26, .26), .3);
                    const g = d.capGrab ?? { x: 860, y: 363 }, off = propOffset(g.x, g.y);
                    cap.x = l.x - off.x;
                    cap.y = l.y - off.y;
                    cap.vx = d.vx;
                    cap.vy = d.vy;
                }
            }
            if (d.kind === 'body' && d.moved) {
                state.press = true;
                pullX.target = clamp((p.x - d.start.x) / state.scale, -tuning.maxPull, tuning.maxPull);
                pullY.target = clamp((p.y - d.start.y) / state.scale, -230, 200);
                spring.target = .04;
                sway.target = pullX.target / 720;
            }
            scene.pointerMove?.(d, p);
            d.last = p;
            d.sampleAt = state.time;
            updatePull();
        },
        end(cancel, event) {
            if (!cancel && state.drag?.kind === 'fish' && event) state.drag.last = point(event);
            sway.target = 0; endPointer(cancel);
        },
        pause() { scene?.pause?.(); }
    });
    function renderRig() {
        const tuck = state.mode === 'feed' ? scenes.feed.face.tuck : 0;
        body.deform(warp);
        sideEdge.visible=sideClip.visible=tuck>0;
        if (tuck) {
            drawFold(sideEdge,sideClip,warp);
            if (body.mask!==sideClip) body.mask=sideClip;
        } else if (body.mask) body.mask=null;
        finPatch.visible=tuck>0;
        if (tuck) {
            finPatch.deform(warp);
        }
        hat.deform(hatWarp);
        const blinkScale = 1 - idle.blink * .88, eyeX = 1 + Math.min(expressionMix, 1) * .105;
        const dizzy = state.expression === 'dizzy', closed = state.expression === 'surprised_large';
        const feeding = state.mode === 'feed' ? scenes.feed.face : null;
        const eager = feeding?.mood === 'eager', sad = feeding?.mood === 'sad';
        const mealPose = eager || feeding?.mood === 'content';
        const shine = eager && feeding.aperture <= .025;
        const chew = Math.abs(feeding?.chew || 0);
        const wave = state.time * 4*Math.PI;
        const eyeFn = (cx, cy) => (x, y) => {
            const sx = mealPose ? 1 : sad ? 1.04 : dizzy || closed ? 1 : eyeX;
            const sy = mealPose ? 1-.10*chew : sad ? .72 : dizzy || closed ? 1 : blinkScale*(1-.79*chew);
            let dx=(x-cx)*sx, dy=(y-cy)*sy;
            if (shine) {
                // Only move sampling points inside the iris; eyebrow and eye rim stay pinned.
                const r=(dx/60)**2+((dy-10)/46)**2, k=clamp((1-r)/.52,0,1);
                dx += k*(3.8*Math.sin(wave)+.04*dx*Math.sin(wave-.4));
                dy += k*(2.8*Math.cos(wave)+1.1*Math.sin(2*wave+dx/80));
            }
            const p = warp(cx+dx,cy+dy+(sad ? 9 : 3*chew));
            if (!dizzy && !closed) {
                const track=shine ? .50 : mealPose ? 0 : 1;
                p.x += gaze.x*track;
                p.y += gaze.y*track;
            }
            return p;
        };
        eyeLeft.deform(eyeFn(681, 455));
        eyeRight.deform(eyeFn(885, 495));
        eyeLeft.visible = eyeRight.visible = !(feeding?.grip || feeding?.burp);
        mouth.visible = !(sad || eager || feeding?.open || feeding?.grip || feeding?.burp);
        mouth.deform(warp);
        rays.visible = false;
        rays.renderable = false;
    }
    function tick(dt) {
        dt = clamp(dt, 0, 1 / 30);
        state.time += dt;
        checkPeel();
        if (scene === scenes.feed) scene.update();
        updateLife(dt);
        let left = dt;
        while (left > 0) {
            const h = Math.min(left, 1 / 120);
            for (const s of springs)
                s.step(h);
            updateCap(h);
            left -= h;
        }
        updateGaze(dt);
        renderRig();
        if (scene === scenes.feed) scene.drawDetails();
        else scene?.update?.(dt);
        character.scale.set(state.scale);
        character.position.set(state.ox, state.oy);
        shadow.scale.set(state.scale * (1 + spring.x * .26), state.scale * (1 - spring.x * .12));
        shadow.position.set(state.ox + 827 * state.scale * (1 - (1 + spring.x * .26)), state.oy);
        shadow.alpha = state.mode === 'draw' ? .5 : 1;
    }
    app.ticker.add((ticker) => tick(ticker.deltaMS / 1000));
    resize();
    router.start();
    const debug = { version: PIXI.VERSION, prototypeVersion: '0.11.0', bodyBaseline: '0.5.0', capBaseline: '0.7.0', engine: PIXI.VERSION === 'offline-canvas' ? 'Canvas 2D' : 'PixiJS WebGL', state, warp, hatWarp, bump: () => bump(tuning.amplitude), home, mode, setMenu, path: scenes.draw.debug.path, pieces: scenes.puzzle.debug.pieces, scenes, router, spring, capX, capY, resetMotion, get frameScale() { return frameScale; }, tuning, pullConfig, reactionMap, idle, body, hat, mouth, rays, eyeLeft, eyeRight, character, cap, capConfig, capBounds, capAnchor, updateCap, gaze, idleConfig, pullX, pullY, sway, viewport, point, bodyPoint, capPoint, checkPeel, peelDebug, touchingHead, wearZoneFrame,
        step: (seconds) => { for (let i = 0; i < Math.ceil(seconds * 120); i++)
            tick(Math.min(1 / 120, seconds - i / 120)); app.renderer.render(app.stage); },
        render: () => { renderRig(); app.renderer.render(app.stage); },
        freezeIdle: (freeze = true) => { idle.enabled = !freeze && !reduced; if (freeze) {
            idle.weight = 0;
            idle.breath = idle.leftFin = idle.rightFin = idle.tail = idle.blink = 0;
            idle.nextBlink = Infinity;
        }
        else
            idle.nextBlink = state.time + 3; },
        forceBlink: () => { idle.blinkStarted = state.time; idle.blinkCount++; idle.nextBlink = state.time + 4; },
        setExpression: (e) => { manualExpression = e; },
        get capRigid() { const a = hatWarp(700, 280), b = hatWarp(1000, 280); return Math.abs(dist(a, b) - 300) < .0001; },
        get bodyTextureStable() { return body.texture === stableBodyTexture; },
        get bodyTextureId() { return body.texture.uid; }, get hatBehindBody() { return character.getChildIndex(hat) < character.getChildIndex(body); },
        get meshVertexCount() { return body.nx * body.ny; }, get ready() { return true; } };
    window.sealDebug = debug;
    addEventListener('keydown', (e) => { if (e.key === 'Escape')
        home(); if (e.code === 'Space' && state.mode === 'home') {
        e.preventDefault();
        sound.unlock();
        bump(tuning.amplitude);
    } if (e.key.toLowerCase() === 'd' && e.shiftKey)
        dom('tuning').hidden = !dom('tuning').hidden; });
}
