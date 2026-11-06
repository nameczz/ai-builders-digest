export function createHomeScene({ state }) {
    return { enter() { state.scale = 1; state.ox = 0; state.oy = 0; } };
}
