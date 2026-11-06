export function createMusicScene({ state, game, sound, bump }) {
    const progress = { music: false, noteStep: 0, nextNote: 0 };
    let pads, activeNote = -1, noteUntil = 0;
    const freqs = [261.63, 293.66, 329.63, 392, 440], melody = [0, 2, 3, 2, 1, 0, -1, 0, 1, 2, 4, 3, -1, 2, 1, 0];
    function startMusic() { progress.music = false; progress.noteStep = 0; progress.nextNote = state.time; activeNote = -1; noteUntil = 0; state.scale = .63; state.ox = 815 * (1 - .63); state.oy = 30; pads = new PIXI.Graphics(); game.addChild(pads); drawPads(); }
    function drawPads() { pads.clear(); for (let i = 0; i < 5; i++) {
        const x = 470 + i * 190, y = 755 - (activeNote === i ? 20 : 0);
        pads.roundRect(x - 77, y - 90, 154, 180, 45).fill({ color: 0xffffff, alpha: activeNote === i ? .9 : .52 }).stroke({ color: 0xffffff, width: 4 });
        pads.ellipse(x - 4, y + 27, 23, 17).fill([0xe8b925, 0xe5819b, 0x60aaa7, 0x9b80bf, 0x539fc8][i]);
        pads.roundRect(x + 10, y - 37, 10, 70, 4).fill([0xe8b925, 0xe5819b, 0x60aaa7, 0x9b80bf, 0x539fc8][i]);
        pads.moveTo(x + 18, y - 34).bezierCurveTo(x + 48, y - 23, x + 44, y - 10, x + 31, y - 6).stroke({ color: [0xe8b925, 0xe5819b, 0x60aaa7, 0x9b80bf, 0x539fc8][i], width: 9, cap: 'round' });
    } }
    function playNote(i) { sound.tone(freqs[i], .5); activeNote = i; noteUntil = state.time + .25; bump(.16); drawPads(); }

    return {
        enter: startMusic,
        exit() { progress.music = false; sound.stop(); },
        pause() { progress.music = false; sound.stop(); },
        toggle() { sound.unlock(); progress.music = !progress.music; progress.noteStep = 0; progress.nextNote = state.time; },
        pointerDown(p) {
            if (p.y <= 620) return false;
            const i = Math.floor((p.x - 390) / 190);
            if (i >= 0 && i < 5) playNote(i);
            return true;
        },
        update() {
            if (activeNote >= 0 && state.time > noteUntil) {
                activeNote = -1;
                drawPads();
            }
            if (progress.music && state.time >= progress.nextNote) {
                const n = melody[progress.noteStep++ % melody.length];
                if (n >= 0)
                    playNote(n);
                progress.nextNote = state.time + .42;
            }
        },
        debug: { progress, get activeNote() { return activeNote; } }
    };
}
