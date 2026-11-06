export class Sound {
    constructor() {
        this.c = null;
        this.active = new Set();
    }
    unlock() { try {
        this.c ??= new (window.AudioContext || window.webkitAudioContext)();
        if (this.c.state === 'suspended')
            void this.c.resume();
    }
    catch { } }
    tone(f = 330, d = .26, slide = false) { const c = this.c; if (!c || c.state !== 'running')
        return; const o = c.createOscillator(), g = c.createGain(), t = c.currentTime; o.type = 'sine'; o.frequency.setValueAtTime(f, t); if (slide) {
        o.frequency.exponentialRampToValueAtTime(f * .48, t + .09);
        o.frequency.exponentialRampToValueAtTime(f * .85, t + .19);
    } g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.055, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(g); g.connect(c.destination); this.active.add(o); o.start(); o.stop(t + d + .02); o.onended = () => { this.active.delete(o); o.disconnect(); g.disconnect(); }; }
    stop() {
        for (const oscillator of this.active) {
            try { oscillator.stop(); } catch { /* Already ended. */ }
        }
        this.active.clear();
    }
}
