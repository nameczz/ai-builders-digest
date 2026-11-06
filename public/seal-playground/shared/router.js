export const SCENE_NAMES = Object.freeze(['home', 'draw', 'puzzle', 'music']);

export function sceneFromHash(hash) {
    const name = hash.replace(/^#\/?/, '').replace(/\/$/, '');
    return SCENE_NAMES.includes(name) ? name : 'home';
}

// Hash routing needs no server rewrites and works when served from any subdirectory.
export function createRouter(onChange, browser = window) {
    let current = null;
    function sync() {
        const next = sceneFromHash(browser.location.hash);
        const canonical = '#/' + next;
        if (browser.location.hash !== canonical)
            browser.history.replaceState(null, '', canonical);
        if (next !== current) {
            current = next;
            onChange(next);
        }
    }
    return {
        start() {
            browser.addEventListener('hashchange', sync);
            browser.addEventListener('popstate', sync);
            sync();
        },
        navigate(name) {
            if (!SCENE_NAMES.includes(name)) name = 'home';
            if (name === current) return;
            browser.history.pushState(null, '', '#/' + name);
            sync();
        },
        restart() { if (current) onChange(current); },
        destroy() {
            browser.removeEventListener('hashchange', sync);
            browser.removeEventListener('popstate', sync);
        },
        get current() { return current; }
    };
}
