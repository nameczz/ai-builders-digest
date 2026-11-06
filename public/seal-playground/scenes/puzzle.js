import { dist } from '../shared/math.js';

export function createPuzzleScene({ state, game, sound, bump }) {
    const progress = { locks: 0 };
    const pieces = [];
    let puzzleGraphics;
    function startPuzzle() { state.scale = .39; state.ox = -185; state.oy = 90; progress.locks = 0; pieces.length = 0; puzzleGraphics = new PIXI.Graphics(); game.addChild(puzzleGraphics); [730, 1010, 1290].forEach((x, i) => pieces.push({ kind: i, pos: { x, y: 729 }, origin: { x, y: 729 }, target: { x, y: 420 }, locked: false })); drawPuzzle(); }
    function shape(g, i, p) { if (i === 0)
        g.circle(p.x, p.y, 73);
    else if (i === 1)
        g.roundRect(p.x - 72, p.y - 72, 144, 144, 23);
    else
        g.poly([p.x, p.y - 82, p.x + 84, p.y + 65, p.x - 84, p.y + 65]); }
    function drawPuzzle() { const g = puzzleGraphics; g.clear(); for (const p of pieces) {
        shape(g, p.kind, p.target);
        g.fill({ color: 0xffffff, alpha: .24 }).stroke({ color: 0xffffff, width: 5 });
        shape(g, p.kind, p.pos);
        g.fill([0xffd84d, 0xffb0c1, 0xae99df][p.kind]).stroke({ color: 0xffffff, width: 5 });
    } }

    return {
        enter: startPuzzle,
        pointerDown(p, local, event, makeDrag) {
            const i = pieces.findIndex(a => !a.locked && dist(a.pos, p) < 100);
            if (i >= 0) {
                state.drag = makeDrag('piece', p, { x: p.x - pieces[i].pos.x, y: p.y - pieces[i].pos.y }, event);
                state.drag.piece = i;
            }
            return true;
        },
        pointerMove(d, p) {
            if (d.kind !== 'piece') return;
            pieces[d.piece].pos = { x: p.x - d.local.x, y: p.y - d.local.y };
            drawPuzzle();
        },
        pointerEnd(d, cancel) {
            if (d.kind !== 'piece') return;
            const piece = pieces[d.piece];
            if (!cancel && dist(piece.pos, piece.target) < 100) {
                piece.locked = true;
                piece.pos = { ...piece.target };
                progress.locks++;
                sound.tone(400 + progress.locks * 100, .25);
                if (progress.locks === 3) bump(.25);
            } else if (!piece.locked) piece.pos = { ...piece.origin };
            drawPuzzle();
        },
        debug: { progress, pieces }
    };
}
