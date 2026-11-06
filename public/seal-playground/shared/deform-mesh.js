export class DeformMesh extends PIXI.ViewContainer {
    constructor(texture, rect, nx = 34, ny = 28) {
        super({ label: 'Source-image spring mesh' });
        this.rect = rect;
        this.renderPipeId = 'mesh';
        this._shader = null;
        this.state = PIXI.State.for2d();
        this.allowChildren = false;
        this.nx = nx;
        this.ny = ny;
        this._texture = texture;
        const positions = new Float32Array(nx * ny * 2), uvs = new Float32Array(positions.length), indices = [];
        for (let y = 0; y < ny; y++)
            for (let x = 0; x < nx; x++) {
                const i = (y * nx + x) * 2;
                positions[i] = rect.x + rect.w * x / (nx - 1);
                positions[i + 1] = rect.y + rect.h * y / (ny - 1);
                uvs[i] = x / (nx - 1);
                uvs[i + 1] = y / (ny - 1);
                if (x < nx - 1 && y < ny - 1) {
                    let j = y * nx + x;
                    indices.push(j, j + 1, j + nx, j + 1, j + nx + 1, j + nx);
                }
            }
        const B = PIXI.Buffer, U = PIXI.BufferUsage;
        this.positions = positions;
        this.rest = positions.slice();
        this.positionBuffer = new B({ data: positions, usage: U.VERTEX | U.COPY_DST });
        this._geometry = new PIXI.Geometry({ attributes: { aPosition: { buffer: this.positionBuffer, format: 'float32x2', stride: 8 }, aUV: { buffer: new B({ data: uvs, usage: U.VERTEX | U.COPY_DST }), format: 'float32x2', stride: 8 } }, indexBuffer: new B({ data: new Uint32Array(indices), usage: U.INDEX | U.COPY_DST }), topology: 'triangle-list' });
        this._geometry.on('update', this.onViewUpdate, this);
        this.roundPixels = false;
    }
    get geometry() { return this._geometry; }
    get texture() { return this._texture; }
    get shader() { return this._shader; }
    get batched() { return false; }
    get bounds() { return this._geometry.bounds; }
    updateBounds() { this._bounds = this._geometry.bounds; }
    deform(fn) { for (let i = 0; i < this.rest.length; i += 2) {
        const p = fn(this.rest[i], this.rest[i + 1]);
        this.positions[i] = p.x;
        this.positions[i + 1] = p.y;
    } this.positionBuffer.update(); this.onViewUpdate(); }
    setTexture(texture) { if (this._texture !== texture) {
        this._texture = texture;
        this.onViewUpdate();
    } }
    containsPoint(p) { return this.bounds.containsPoint(p.x, p.y); }
}
