// One browser listener set across all scenes. Cancelled gestures never score a win.
export function bindInput({ canvas, state, sound, down, move, end, pause }) {
    const controller = new AbortController();
    const options = { signal: controller.signal };
    canvas.addEventListener('pointerdown', (event) => {
        if (state.drag || event.button > 0) return;
        sound.unlock();
        down(event);
        if (state.drag) {
            try { canvas.setPointerCapture(event.pointerId); } catch { /* Synthetic/ended pointer. */ }
            event.preventDefault();
        }
    }, options);
    canvas.addEventListener('pointermove', (event) => {
        const drag = state.drag;
        if (drag && event.pointerId === drag.id) move(event, drag);
    }, options);
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
        canvas.addEventListener(type, (event) => {
            if (event.pointerId === state.drag?.id) end(type !== 'pointerup');
        }, options);
    }
    window.addEventListener('blur', () => { end(true); pause(); }, options);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { end(true); pause(); }
    }, options);
    canvas.addEventListener('contextmenu', (event) => event.preventDefault(), options);
    return () => { end(true); controller.abort(); };
}
