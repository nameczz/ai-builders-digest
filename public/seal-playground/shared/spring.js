export class Spring {
    constructor(stiffness = 175, damping = 9) {
        this.stiffness = stiffness;
        this.damping = damping;
        this.x = 0;
        this.v = 0;
        this.target = 0;
    }
    step(dt) { this.v += (this.stiffness * (this.target - this.x) - this.damping * this.v) * dt; this.x += this.v * dt; if (Math.abs(this.x - this.target) < .0002 && Math.abs(this.v) < .001) {
        this.x = this.target;
        this.v = 0;
    } }
    reset() { this.x = 0; this.v = 0; this.target = 0; }
}
