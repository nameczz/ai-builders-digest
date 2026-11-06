/*!
The MIT License

Copyright (c) 2013-2023 Mathew Groves, Chad Engler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
/*! PixiJS 8.15.0, MIT License, PixiJS contributors. Locally repackaged runtime subset. */
(()=>{const cache=Object.create(null),factories={
"./Index-5qXXq-Tx.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i = exports.e = exports.d = exports.c = exports.b = exports.au = exports.at = exports.as = exports.aq = exports.ap = exports.an = exports.am = exports.ak = exports.ah = exports.ae = exports.ac = exports.a9 = exports.a8 = exports.a7 = exports.a6 = exports.a5 = exports.a4 = exports.a2 = exports.a1 = exports.a0 = exports.a = exports._ = exports.Z = exports.X = exports.W = exports.V = exports.U = exports.T = exports.S = exports.R = exports.P = exports.N = exports.M = exports.L = exports.K = exports.J = exports.H = exports.G = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = exports.$ = void 0;
exports.Geometry = exports.VERSION = exports.Point = exports.Rectangle = exports.State = exports.BufferUsage = exports.Buffer = exports.ViewContainer = exports.Graphics = exports.Texture = exports.Sprite = exports.Container = exports.Application = exports.z = exports.y = exports.x = exports.v = exports.t = exports.s = exports.q = exports.o = exports.m = exports.l = exports.k = exports.j = void 0;
exports.I = mo;
exports.O = Ul;
exports.Q = Zl;
exports.Y = en;
exports.a3 = bo;
exports.aa = Oc;
exports.ab = lu;
exports.ad = gu;
exports.af = xu;
exports.ag = Gi;
exports.ai = ir;
exports.aj = Hn;
exports.al = yn;
exports.ao = vd;
exports.ar = Uh;
exports.f = mn;
exports.g = zc;
exports.h = yr;
exports.n = hu;
exports.p = fu;
exports.r = tl;
exports.u = At;
exports.w = yt;
const __vite__mapDeps = () => [];
const Li = (loader) => loader();
const io = s => s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
var H = (s => (s.Application = "application", s.WebGLPipes = "webgl-pipes", s.WebGLPipesAdaptor = "webgl-pipes-adaptor", s.WebGLSystem = "webgl-system", s.WebGPUPipes = "webgpu-pipes", s.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", s.WebGPUSystem = "webgpu-system", s.CanvasSystem = "canvas-system", s.CanvasPipesAdaptor = "canvas-pipes-adaptor", s.CanvasPipes = "canvas-pipes", s.Asset = "asset", s.LoadParser = "load-parser", s.ResolveParser = "resolve-parser", s.CacheParser = "cache-parser", s.DetectionParser = "detection-parser", s.MaskEffect = "mask-effect", s.BlendMode = "blend-mode", s.TextureSource = "texture-source", s.Environment = "environment", s.ShapeBuilder = "shape-builder", s.Batcher = "batcher", s))(H || {});
exports.E = H;
const Ds = s => { if (typeof s == "function" || typeof s == "object" && s.extension) {
    if (!s.extension)
        throw new Error("Extension class must have an extension object");
    s = { ...typeof s.extension != "object" ? { type: s.extension } : s.extension, ref: s };
} if (typeof s == "object")
    s = { ...s };
else
    throw new Error("Invalid extension type"); return typeof s.type == "string" && (s.type = [s.type]), s; }, fi = (s, t) => Ds(s).priority ?? t, Et = { _addHandlers: {}, _removeHandlers: {}, _queue: {}, remove(...s) { return s.map(Ds).forEach(t => { t.type.forEach(e => this._removeHandlers[e]?.(t)); }), this; }, add(...s) { return s.map(Ds).forEach(t => { t.type.forEach(e => { const i = this._addHandlers, r = this._queue; i[e] ? i[e]?.(t) : (r[e] = r[e] || [], r[e]?.push(t)); }); }), this; }, handle(s, t, e) { const i = this._addHandlers, r = this._removeHandlers; if (i[s] || r[s])
        throw new Error(`Extension type ${s} already has a handler`); i[s] = t, r[s] = e; const n = this._queue; return n[s] && (n[s]?.forEach(o => t(o)), delete n[s]), this; }, handleByMap(s, t) { return this.handle(s, e => { e.name && (t[e.name] = e.ref); }, e => { e.name && delete t[e.name]; }); }, handleByNamedList(s, t, e = -1) { return this.handle(s, i => { t.findIndex(n => n.name === i.name) >= 0 || (t.push({ name: i.name, value: i.ref }), t.sort((n, o) => fi(o.value, e) - fi(n.value, e))); }, i => { const r = t.findIndex(n => n.name === i.name); r !== -1 && t.splice(r, 1); }); }, handleByList(s, t, e = -1) { return this.handle(s, i => { t.includes(i.ref) || (t.push(i.ref), t.sort((r, n) => fi(n, e) - fi(r, e))); }, i => { const r = t.indexOf(i.ref); r !== -1 && t.splice(r, 1); }); }, mixin(s, ...t) { for (const e of t)
        Object.defineProperties(s.prototype, Object.getOwnPropertyDescriptors(e)); } }, Mh = { extension: { type: H.Environment, name: "browser", priority: -1 }, test: () => !0, load: async () => { await Li(() => Promise.resolve().then(() => require("./browserAll-D_MQFbOH.js")), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]), "pixi-local"); } }, Ph = { extension: { type: H.Environment, name: "webworker", priority: 0 }, test: () => typeof self < "u" && self.WorkerGlobalScope !== void 0, load: async () => { await Li(() => Promise.resolve().then(() => require("./webworkerAll-DVlzi99H.js")), __vite__mapDeps([28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]), "pixi-local"); } };
exports.e = Et;
class Rt {
    constructor(t, e, i) { this._x = e || 0, this._y = i || 0, this._observer = t; }
    clone(t) { return new Rt(t ?? this._observer, this._x, this._y); }
    set(t = 0, e = t) { return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this._observer._onUpdate(this)), this; }
    copyFrom(t) { return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this._observer._onUpdate(this)), this; }
    copyTo(t) { return t.set(this._x, this._y), t; }
    equals(t) { return t.x === this._x && t.y === this._y; }
    toString() { return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`; }
    get x() { return this._x; }
    set x(t) { this._x !== t && (this._x = t, this._observer._onUpdate(this)); }
    get y() { return this._y; }
    set y(t) { this._y !== t && (this._y = t, this._observer._onUpdate(this)); }
}
var ns = { exports: {} }, Dr;
function Th() { return Dr || (Dr = 1, (function (s) { var t = Object.prototype.hasOwnProperty, e = "~"; function i() { } Object.create && (i.prototype = Object.create(null), new i().__proto__ || (e = !1)); function r(l, c, u) { this.fn = l, this.context = c, this.once = u || !1; } function n(l, c, u, d, f) { if (typeof u != "function")
    throw new TypeError("The listener must be a function"); var _ = new r(u, d || l, f), p = e ? e + c : c; return l._events[p] ? l._events[p].fn ? l._events[p] = [l._events[p], _] : l._events[p].push(_) : (l._events[p] = _, l._eventsCount++), l; } function o(l, c) { --l._eventsCount === 0 ? l._events = new i : delete l._events[c]; } function h() { this._events = new i, this._eventsCount = 0; } h.prototype.eventNames = function () { var c = [], u, d; if (this._eventsCount === 0)
    return c; for (d in u = this._events)
    t.call(u, d) && c.push(e ? d.slice(1) : d); return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(u)) : c; }, h.prototype.listeners = function (c) { var u = e ? e + c : c, d = this._events[u]; if (!d)
    return []; if (d.fn)
    return [d.fn]; for (var f = 0, _ = d.length, p = new Array(_); f < _; f++)
    p[f] = d[f].fn; return p; }, h.prototype.listenerCount = function (c) { var u = e ? e + c : c, d = this._events[u]; return d ? d.fn ? 1 : d.length : 0; }, h.prototype.emit = function (c, u, d, f, _, p) { var m = e ? e + c : c; if (!this._events[m])
    return !1; var g = this._events[m], y = arguments.length, x, v; if (g.fn) {
    switch (g.once && this.removeListener(c, g.fn, void 0, !0), y) {
        case 1: return g.fn.call(g.context), !0;
        case 2: return g.fn.call(g.context, u), !0;
        case 3: return g.fn.call(g.context, u, d), !0;
        case 4: return g.fn.call(g.context, u, d, f), !0;
        case 5: return g.fn.call(g.context, u, d, f, _), !0;
        case 6: return g.fn.call(g.context, u, d, f, _, p), !0;
    }
    for (v = 1, x = new Array(y - 1); v < y; v++)
        x[v - 1] = arguments[v];
    g.fn.apply(g.context, x);
}
else {
    var b = g.length, C;
    for (v = 0; v < b; v++)
        switch (g[v].once && this.removeListener(c, g[v].fn, void 0, !0), y) {
            case 1:
                g[v].fn.call(g[v].context);
                break;
            case 2:
                g[v].fn.call(g[v].context, u);
                break;
            case 3:
                g[v].fn.call(g[v].context, u, d);
                break;
            case 4:
                g[v].fn.call(g[v].context, u, d, f);
                break;
            default:
                if (!x)
                    for (C = 1, x = new Array(y - 1); C < y; C++)
                        x[C - 1] = arguments[C];
                g[v].fn.apply(g[v].context, x);
        }
} return !0; }, h.prototype.on = function (c, u, d) { return n(this, c, u, d, !1); }, h.prototype.once = function (c, u, d) { return n(this, c, u, d, !0); }, h.prototype.removeListener = function (c, u, d, f) { var _ = e ? e + c : c; if (!this._events[_])
    return this; if (!u)
    return o(this, _), this; var p = this._events[_]; if (p.fn)
    p.fn === u && (!f || p.once) && (!d || p.context === d) && o(this, _);
else {
    for (var m = 0, g = [], y = p.length; m < y; m++)
        (p[m].fn !== u || f && !p[m].once || d && p[m].context !== d) && g.push(p[m]);
    g.length ? this._events[_] = g.length === 1 ? g[0] : g : o(this, _);
} return this; }, h.prototype.removeAllListeners = function (c) { var u; return c ? (u = e ? e + c : c, this._events[u] && o(this, u)) : (this._events = new i, this._eventsCount = 0), this; }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = e, h.EventEmitter = h, s.exports = h; })(ns)), ns.exports; }
var Ih = Th();
const Qt = io(Ih), zh = Math.PI * 2, Eh = 180 / Math.PI, Rh = Math.PI / 180;
exports.a = Qt;
class et {
    constructor(t = 0, e = 0) { this.x = 0, this.y = 0, this.x = t, this.y = e; }
    clone() { return new et(this.x, this.y); }
    copyFrom(t) { return this.set(t.x, t.y), this; }
    copyTo(t) { return t.set(this.x, this.y), t; }
    equals(t) { return t.x === this.x && t.y === this.y; }
    set(t = 0, e = t) { return this.x = t, this.y = e, this; }
    toString() { return `[pixi.js/math:Point x=${this.x} y=${this.y}]`; }
    static get shared() { return os.x = 0, os.y = 0, os; }
}
exports.P = et;
exports.Point = et;
const os = new et;
class rt {
    constructor(t = 1, e = 0, i = 0, r = 1, n = 0, o = 0) { this.array = null, this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o; }
    fromArray(t) { this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]; }
    set(t, e, i, r, n, o) { return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this; }
    toArray(t, e) { this.array || (this.array = new Float32Array(9)); const i = e || this.array; return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i; }
    apply(t, e) { e = e || new et; const i = t.x, r = t.y; return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e; }
    applyInverse(t, e) { e = e || new et; const i = this.a, r = this.b, n = this.c, o = this.d, h = this.tx, l = this.ty, c = 1 / (i * o + n * -r), u = t.x, d = t.y; return e.x = o * c * u + -n * c * d + (l * n - h * o) * c, e.y = i * c * d + -r * c * u + (-l * i + h * r) * c, e; }
    translate(t, e) { return this.tx += t, this.ty += e, this; }
    scale(t, e) { return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this; }
    rotate(t) { const e = Math.cos(t), i = Math.sin(t), r = this.a, n = this.c, o = this.tx; return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this; }
    append(t) { const e = this.a, i = this.b, r = this.c, n = this.d; return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this; }
    appendFrom(t, e) { const i = t.a, r = t.b, n = t.c, o = t.d, h = t.tx, l = t.ty, c = e.a, u = e.b, d = e.c, f = e.d; return this.a = i * c + r * d, this.b = i * u + r * f, this.c = n * c + o * d, this.d = n * u + o * f, this.tx = h * c + l * d + e.tx, this.ty = h * u + l * f + e.ty, this; }
    setTransform(t, e, i, r, n, o, h, l, c) { return this.a = Math.cos(h + c) * n, this.b = Math.sin(h + c) * n, this.c = -Math.sin(h - l) * o, this.d = Math.cos(h - l) * o, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this; }
    prepend(t) { const e = this.tx; if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
        const i = this.a, r = this.c;
        this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
    } return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this; }
    decompose(t) { const e = this.a, i = this.b, r = this.c, n = this.d, o = t.pivot, h = -Math.atan2(-r, n), l = Math.atan2(i, e), c = Math.abs(h + l); return c < 1e-5 || Math.abs(zh - c) < 1e-5 ? (t.rotation = l, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = h, t.skew.y = l), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * e + o.y * r), t.position.y = this.ty + (o.x * i + o.y * n), t; }
    invert() { const t = this.a, e = this.b, i = this.c, r = this.d, n = this.tx, o = t * r - e * i; return this.a = r / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this; }
    isIdentity() { return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0; }
    identity() { return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this; }
    clone() { const t = new rt; return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t; }
    copyTo(t) { return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t; }
    copyFrom(t) { return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this; }
    equals(t) { return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty; }
    toString() { return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`; }
    static get IDENTITY() { return Bh.identity(); }
    static get shared() { return Fh.identity(); }
}
exports.M = rt;
const Fh = new rt, Bh = new rt, me = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], ye = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], xe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], be = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], Us = [], oo = [], pi = Math.sign;
function Lh() { for (let s = 0; s < 16; s++) {
    const t = [];
    Us.push(t);
    for (let e = 0; e < 16; e++) {
        const i = pi(me[s] * me[e] + xe[s] * ye[e]), r = pi(ye[s] * me[e] + be[s] * ye[e]), n = pi(me[s] * xe[e] + xe[s] * be[e]), o = pi(ye[s] * xe[e] + be[s] * be[e]);
        for (let h = 0; h < 16; h++)
            if (me[h] === i && ye[h] === r && xe[h] === n && be[h] === o) {
                t.push(h);
                break;
            }
    }
} for (let s = 0; s < 16; s++) {
    const t = new rt;
    t.set(me[s], ye[s], xe[s], be[s], 0, 0), oo.push(t);
} }
Lh();
const ft = { E: 0, SE: 1, S: 2, SW: 3, W: 4, NW: 5, N: 6, NE: 7, MIRROR_VERTICAL: 8, MAIN_DIAGONAL: 10, MIRROR_HORIZONTAL: 12, REVERSE_DIAGONAL: 14, uX: s => me[s], uY: s => ye[s], vX: s => xe[s], vY: s => be[s], inv: s => s & 8 ? s & 15 : -s & 7, add: (s, t) => Us[s][t], sub: (s, t) => Us[s][ft.inv(t)], rotate180: s => s ^ 4, isVertical: s => (s & 3) === 2, byDirection: (s, t) => Math.abs(s) * 2 <= Math.abs(t) ? t >= 0 ? ft.S : ft.N : Math.abs(t) * 2 <= Math.abs(s) ? s > 0 ? ft.E : ft.W : t > 0 ? s > 0 ? ft.SE : ft.SW : s > 0 ? ft.NE : ft.NW, matrixAppendRotationInv: (s, t, e = 0, i = 0) => { const r = oo[ft.inv(t)]; r.tx = e, r.ty = i, s.append(r); }, transformRectCoords: (s, t, e, i) => { const { x: r, y: n, width: o, height: h } = s, { x: l, y: c, width: u, height: d } = t; return e === ft.E ? (i.set(r + l, n + c, o, h), i) : e === ft.S ? i.set(u - n - h + l, r + c, h, o) : e === ft.W ? i.set(u - r - o + l, d - n - h + c, o, h) : e === ft.N ? i.set(n + l, d - r - o + c, h, o) : i.set(r + l, n + c, o, h); } }, gi = [new et, new et, new et, new et];
class pt {
    constructor(t = 0, e = 0, i = 0, r = 0) { this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r); }
    get left() { return this.x; }
    get right() { return this.x + this.width; }
    get top() { return this.y; }
    get bottom() { return this.y + this.height; }
    isEmpty() { return this.left === this.right || this.top === this.bottom; }
    static get EMPTY() { return new pt(0, 0, 0, 0); }
    clone() { return new pt(this.x, this.y, this.width, this.height); }
    copyFromBounds(t) { return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this; }
    copyFrom(t) { return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this; }
    copyTo(t) { return t.copyFrom(this), t; }
    contains(t, e) { return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height; }
    strokeContains(t, e, i, r = .5) { const { width: n, height: o } = this; if (n <= 0 || o <= 0)
        return !1; const h = this.x, l = this.y, c = i * (1 - r), u = i - c, d = h - c, f = h + n + c, _ = l - c, p = l + o + c, m = h + u, g = h + n - u, y = l + u, x = l + o - u; return t >= d && t <= f && e >= _ && e <= p && !(t > m && t < g && e > y && e < x); }
    intersects(t, e) { if (!e) {
        const z = this.x < t.x ? t.x : this.x;
        if ((this.right > t.right ? t.right : this.right) <= z)
            return !1;
        const T = this.y < t.y ? t.y : this.y;
        return (this.bottom > t.bottom ? t.bottom : this.bottom) > T;
    } const i = this.left, r = this.right, n = this.top, o = this.bottom; if (r <= i || o <= n)
        return !1; const h = gi[0].set(t.left, t.top), l = gi[1].set(t.left, t.bottom), c = gi[2].set(t.right, t.top), u = gi[3].set(t.right, t.bottom); if (c.x <= h.x || l.y <= h.y)
        return !1; const d = Math.sign(e.a * e.d - e.b * e.c); if (d === 0 || (e.apply(h, h), e.apply(l, l), e.apply(c, c), e.apply(u, u), Math.max(h.x, l.x, c.x, u.x) <= i || Math.min(h.x, l.x, c.x, u.x) >= r || Math.max(h.y, l.y, c.y, u.y) <= n || Math.min(h.y, l.y, c.y, u.y) >= o))
        return !1; const f = d * (l.y - h.y), _ = d * (h.x - l.x), p = f * i + _ * n, m = f * r + _ * n, g = f * i + _ * o, y = f * r + _ * o; if (Math.max(p, m, g, y) <= f * h.x + _ * h.y || Math.min(p, m, g, y) >= f * u.x + _ * u.y)
        return !1; const x = d * (h.y - c.y), v = d * (c.x - h.x), b = x * i + v * n, C = x * r + v * n, w = x * i + v * o, k = x * r + v * o; return !(Math.max(b, C, w, k) <= x * h.x + v * h.y || Math.min(b, C, w, k) >= x * u.x + v * u.y); }
    pad(t = 0, e = t) { return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this; }
    fit(t) { const e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height); return this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0), this; }
    ceil(t = 1, e = .001) { const i = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t; return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y, this; }
    scale(t, e = t) { return this.x *= t, this.y *= e, this.width *= t, this.height *= e, this; }
    enlarge(t) { const e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height); return this.x = e, this.width = i - e, this.y = r, this.height = n - r, this; }
    getBounds(t) { return t || (t = new pt), t.copyFrom(this), t; }
    containsRect(t) { if (this.width <= 0 || this.height <= 0)
        return !1; const e = t.x, i = t.y, r = t.x + t.width, n = t.y + t.height; return e >= this.x && e < this.x + this.width && i >= this.y && i < this.y + this.height && r >= this.x && r < this.x + this.width && n >= this.y && n < this.y + this.height; }
    set(t, e, i, r) { return this.x = t, this.y = e, this.width = i, this.height = r, this; }
    toString() { return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`; }
}
exports.W = pt;
exports.Rectangle = pt;
const as = { default: -1 };
function At(s = "default") { return as[s] === void 0 && (as[s] = -1), ++as[s]; }
const Ur = new Set, ct = "8.0.0", Oh = "8.3.4", Ie = { quiet: !1, noColor: !1 }, Z = (s, t, e = 3) => {
    if (Ie.quiet || Ur.has(t))
        return;
    let i = new Error().stack;
    const r = `${t}
Deprecated since v${s}`, n = typeof console.groupCollapsed == "function" && !Ie.noColor;
    typeof i > "u" ? console.warn("PixiJS Deprecation Warning: ", r) : (i = i.split(`
`).splice(e).join(`
`), n ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", r), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", r), console.warn(i))), Ur.add(t);
};
exports.a7 = ct;
exports.a6 = Z;
Object.defineProperties(Z, { quiet: { get: () => Ie.quiet, set: s => { Ie.quiet = s; }, enumerable: !0, configurable: !1 }, noColor: { get: () => Ie.noColor, set: s => { Ie.noColor = s; }, enumerable: !0, configurable: !1 } });
const ao = () => { };
function Gi(s) { return s += s === 0 ? 1 : 0, --s, s |= s >>> 1, s |= s >>> 2, s |= s >>> 4, s |= s >>> 8, s |= s >>> 16, s + 1; }
function Nr(s) { return !(s & s - 1) && !!s; }
function ho(s) { const t = {}; for (const e in s)
    s[e] !== void 0 && (t[e] = s[e]); return t; }
const Wr = Object.create(null);
function Gh(s) { const t = Wr[s]; return t === void 0 && (Wr[s] = At("resource")), t; }
const lo = class co extends Qt {
    constructor(t = {}) { super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = !1, t = { ...co.defaultOptions, ...t }, this.addressMode = t.addressMode, this.addressModeU = t.addressModeU ?? this.addressModeU, this.addressModeV = t.addressModeV ?? this.addressModeV, this.addressModeW = t.addressModeW ?? this.addressModeW, this.scaleMode = t.scaleMode, this.magFilter = t.magFilter ?? this.magFilter, this.minFilter = t.minFilter ?? this.minFilter, this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = t.lodMinClamp, this.lodMaxClamp = t.lodMaxClamp, this.compare = t.compare, this.maxAnisotropy = t.maxAnisotropy ?? 1; }
    set addressMode(t) { this.addressModeU = t, this.addressModeV = t, this.addressModeW = t; }
    get addressMode() { return this.addressModeU; }
    set wrapMode(t) { Z(ct, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t; }
    get wrapMode() { return this.addressMode; }
    set scaleMode(t) { this.magFilter = t, this.minFilter = t, this.mipmapFilter = t; }
    get scaleMode() { return this.magFilter; }
    set maxAnisotropy(t) { this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear"); }
    get maxAnisotropy() { return this._maxAnisotropy; }
    get _resourceId() { return this._sharedResourceId || this._generateResourceId(); }
    update() { this._sharedResourceId = null, this.emit("change", this); }
    _generateResourceId() { const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`; return this._sharedResourceId = Gh(t), this._resourceId; }
    destroy() { this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners(); }
};
lo.defaultOptions = { addressMode: "clamp-to-edge", scaleMode: "linear" };
let Di = lo;
exports.a0 = Di;
const uo = class _o extends Qt {
    constructor(t = {}) { super(), this.options = t, this._gpuData = Object.create(null), this._gcLastUsed = -1, this.uid = At("textureSource"), this._resourceType = "textureSource", this._resourceId = At("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.antialias = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, t = { ..._o.defaultOptions, ...t }, this.label = t.label ?? "", this.resource = t.resource, this.autoGarbageCollect = t.autoGarbageCollect, this._resolution = t.resolution, t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = t.format, this.dimension = t.dimensions, this.mipLevelCount = t.mipLevelCount, this.autoGenerateMipmaps = t.autoGenerateMipmaps, this.sampleCount = t.sampleCount, this.antialias = t.antialias, this.alphaMode = t.alphaMode, this.style = new Di(ho(t)), this.destroyed = !1, this._refreshPOT(); }
    get source() { return this; }
    get style() { return this._style; }
    set style(t) { this.style !== t && (this._style?.off("change", this._onStyleChange, this), this._style = t, this._style?.on("change", this._onStyleChange, this), this._onStyleChange()); }
    set maxAnisotropy(t) { this._style.maxAnisotropy = t; }
    get maxAnisotropy() { return this._style.maxAnisotropy; }
    get addressMode() { return this._style.addressMode; }
    set addressMode(t) { this._style.addressMode = t; }
    get repeatMode() { return this._style.addressMode; }
    set repeatMode(t) { this._style.addressMode = t; }
    get magFilter() { return this._style.magFilter; }
    set magFilter(t) { this._style.magFilter = t; }
    get minFilter() { return this._style.minFilter; }
    set minFilter(t) { this._style.minFilter = t; }
    get mipmapFilter() { return this._style.mipmapFilter; }
    set mipmapFilter(t) { this._style.mipmapFilter = t; }
    get lodMinClamp() { return this._style.lodMinClamp; }
    set lodMinClamp(t) { this._style.lodMinClamp = t; }
    get lodMaxClamp() { return this._style.lodMaxClamp; }
    set lodMaxClamp(t) { this._style.lodMaxClamp = t; }
    _onStyleChange() { this.emit("styleChange", this); }
    update() { if (this.resource) {
        const t = this._resolution;
        if (this.resize(this.resourceWidth / t, this.resourceHeight / t))
            return;
    } this.emit("update", this); }
    destroy() { this.destroyed = !0, this.unload(), this.emit("destroy", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners(); }
    unload() { this._resourceId = At("resource"), this.emit("change", this), this.emit("unload", this); for (const t in this._gpuData)
        this._gpuData[t]?.destroy?.(); this._gpuData = Object.create(null); }
    get resourceWidth() { const { resource: t } = this; return t.naturalWidth || t.videoWidth || t.displayWidth || t.width; }
    get resourceHeight() { const { resource: t } = this; return t.naturalHeight || t.videoHeight || t.displayHeight || t.height; }
    get resolution() { return this._resolution; }
    set resolution(t) { this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t); }
    resize(t, e, i) { i || (i = this._resolution), t || (t = this.width), e || (e = this.height); const r = Math.round(t * i), n = Math.round(e * i); return this.width = r / i, this.height = n / i, this._resolution = i, this.pixelWidth === r && this.pixelHeight === n ? !1 : (this._refreshPOT(), this.pixelWidth = r, this.pixelHeight = n, this.emit("resize", this), this._resourceId = At("resource"), this.emit("change", this), !0); }
    updateMipmaps() { this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this); }
    set wrapMode(t) { this._style.wrapMode = t; }
    get wrapMode() { return this._style.wrapMode; }
    set scaleMode(t) { this._style.scaleMode = t; }
    get scaleMode() { return this._style.scaleMode; }
    _refreshPOT() { this.isPowerOfTwo = Nr(this.pixelWidth) && Nr(this.pixelHeight); }
    static test(t) { throw new Error("Unimplemented"); }
};
uo.defaultOptions = { resolution: 1, format: "bgra8unorm", alphaMode: "premultiply-alpha-on-upload", dimensions: "2d", mipLevelCount: 1, autoGenerateMipmaps: !1, sampleCount: 1, antialias: !1, autoGarbageCollect: !1 };
let qt = uo;
exports.k = qt;
class gr extends qt {
    constructor(t) { const e = t.resource || new Float32Array(t.width * t.height * 4); let i = t.format; i || (e instanceof Float32Array ? i = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? i = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? i = "rgba16uint" : (e instanceof Int8Array, i = "bgra8unorm")), super({ ...t, resource: e, format: i }), this.uploadMethodId = "buffer"; }
    static test(t) { return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array; }
}
gr.extension = H.TextureSource;
const Hr = new rt;
class Dh {
    constructor(t, e) { this.mapCoord = new rt, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, typeof e > "u" ? this.clampMargin = t.width < 10 ? 0 : .5 : this.clampMargin = e, this.isSimple = !1, this.texture = t; }
    get texture() { return this._texture; }
    set texture(t) { this.texture !== t && (this._texture?.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this), this.update()); }
    multiplyUvs(t, e) { e === void 0 && (e = t); const i = this.mapCoord; for (let r = 0; r < t.length; r += 2) {
        const n = t[r], o = t[r + 1];
        e[r] = n * i.a + o * i.c + i.tx, e[r + 1] = n * i.b + o * i.d + i.ty;
    } return e; }
    update() { const t = this._texture; this._updateID++; const e = t.uvs; this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0); const i = t.orig, r = t.trim; r && (Hr.set(i.width / r.width, 0, 0, i.height / r.height, -r.x / r.width, -r.y / r.height), this.mapCoord.append(Hr)); const n = t.source, o = this.uClampFrame, h = this.clampMargin / n._resolution, l = this.clampOffset / n._resolution; return o[0] = (t.frame.x + h + l) / n.width, o[1] = (t.frame.y + h + l) / n.height, o[2] = (t.frame.x + t.frame.width - h + l) / n.width, o[3] = (t.frame.y + t.frame.height - h + l) / n.height, this.uClampOffset[0] = this.clampOffset / n.pixelWidth, this.uClampOffset[1] = this.clampOffset / n.pixelHeight, this.isSimple = t.frame.width === n.width && t.frame.height === n.height && t.rotate === 0, !0; }
}
exports.v = Dh;
class it extends Qt {
    constructor({ source: t, label: e, frame: i, orig: r, trim: n, defaultAnchor: o, defaultBorders: h, rotate: l, dynamic: c } = {}) { if (super(), this.uid = At("texture"), this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }, this.frame = new pt, this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = t?.source ?? new qt, this.noFrame = !i, i)
        this.frame.copyFrom(i);
    else {
        const { width: u, height: d } = this._source;
        this.frame.width = u, this.frame.height = d;
    } this.orig = r || this.frame, this.trim = n, this.rotate = l ?? 0, this.defaultAnchor = o, this.defaultBorders = h, this.destroyed = !1, this.dynamic = c || !1, this.updateUvs(); }
    set source(t) { this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this); }
    get source() { return this._source; }
    get textureMatrix() { return this._textureMatrix || (this._textureMatrix = new Dh(this)), this._textureMatrix; }
    get width() { return this.orig.width; }
    get height() { return this.orig.height; }
    updateUvs() { const { uvs: t, frame: e } = this, { width: i, height: r } = this._source, n = e.x / i, o = e.y / r, h = e.width / i, l = e.height / r; let c = this.rotate; if (c) {
        const u = h / 2, d = l / 2, f = n + u, _ = o + d;
        c = ft.add(c, ft.NW), t.x0 = f + u * ft.uX(c), t.y0 = _ + d * ft.uY(c), c = ft.add(c, 2), t.x1 = f + u * ft.uX(c), t.y1 = _ + d * ft.uY(c), c = ft.add(c, 2), t.x2 = f + u * ft.uX(c), t.y2 = _ + d * ft.uY(c), c = ft.add(c, 2), t.x3 = f + u * ft.uX(c), t.y3 = _ + d * ft.uY(c);
    }
    else
        t.x0 = n, t.y0 = o, t.x1 = n + h, t.y1 = o, t.x2 = n + h, t.y2 = o + l, t.x3 = n, t.y3 = o + l; }
    destroy(t = !1) { this._source && (this._source.off("resize", this.update, this), t && (this._source.destroy(), this._source = null)), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners(); }
    update() { this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this); }
    get baseTexture() { return Z(ct, "Texture.baseTexture is now Texture.source"), this._source; }
}
exports.t = it;
exports.Texture = it;
it.EMPTY = new it({ label: "EMPTY", source: new qt({ label: "EMPTY" }) });
it.EMPTY.destroy = ao;
it.WHITE = new it({ source: new gr({ resource: new Uint8Array([255, 255, 255, 255]), width: 1, height: 1, alphaMode: "premultiply-alpha-on-upload", label: "WHITE" }), label: "WHITE" });
it.WHITE.destroy = ao;
function Uh(s, t, e) { const { width: i, height: r } = e.orig, n = e.trim; if (n) {
    const o = n.width, h = n.height;
    s.minX = n.x - t._x * i, s.maxX = s.minX + o, s.minY = n.y - t._y * r, s.maxY = s.minY + h;
}
else
    s.minX = -t._x * i, s.maxX = s.minX + i, s.minY = -t._y * r, s.maxY = s.minY + r; }
const Vr = new rt;
class Zt {
    constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, r = -1 / 0) { this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Vr, this.minX = t, this.minY = e, this.maxX = i, this.maxY = r; }
    isEmpty() { return this.minX > this.maxX || this.minY > this.maxY; }
    get rectangle() { this._rectangle || (this._rectangle = new pt); const t = this._rectangle; return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t; }
    clear() { return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Vr, this; }
    set(t, e, i, r) { this.minX = t, this.minY = e, this.maxX = i, this.maxY = r; }
    addFrame(t, e, i, r, n) { n || (n = this.matrix); const o = n.a, h = n.b, l = n.c, c = n.d, u = n.tx, d = n.ty; let f = this.minX, _ = this.minY, p = this.maxX, m = this.maxY, g = o * t + l * e + u, y = h * t + c * e + d; g < f && (f = g), y < _ && (_ = y), g > p && (p = g), y > m && (m = y), g = o * i + l * e + u, y = h * i + c * e + d, g < f && (f = g), y < _ && (_ = y), g > p && (p = g), y > m && (m = y), g = o * t + l * r + u, y = h * t + c * r + d, g < f && (f = g), y < _ && (_ = y), g > p && (p = g), y > m && (m = y), g = o * i + l * r + u, y = h * i + c * r + d, g < f && (f = g), y < _ && (_ = y), g > p && (p = g), y > m && (m = y), this.minX = f, this.minY = _, this.maxX = p, this.maxY = m; }
    addRect(t, e) { this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e); }
    addBounds(t, e) { this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e); }
    addBoundsMask(t) { this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY; }
    applyMatrix(t) { const e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, { a: o, b: h, c: l, d: c, tx: u, ty: d } = t; let f = o * e + l * i + u, _ = h * e + c * i + d; this.minX = f, this.minY = _, this.maxX = f, this.maxY = _, f = o * r + l * i + u, _ = h * r + c * i + d, this.minX = f < this.minX ? f : this.minX, this.minY = _ < this.minY ? _ : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = _ > this.maxY ? _ : this.maxY, f = o * e + l * n + u, _ = h * e + c * n + d, this.minX = f < this.minX ? f : this.minX, this.minY = _ < this.minY ? _ : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = _ > this.maxY ? _ : this.maxY, f = o * r + l * n + u, _ = h * r + c * n + d, this.minX = f < this.minX ? f : this.minX, this.minY = _ < this.minY ? _ : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = _ > this.maxY ? _ : this.maxY; }
    fit(t) { return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this; }
    fitBounds(t, e, i, r) { return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < i && (this.minY = i), this.maxY > r && (this.maxY = r), this; }
    pad(t, e = t) { return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this; }
    ceil() { return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this; }
    clone() { return new Zt(this.minX, this.minY, this.maxX, this.maxY); }
    scale(t, e = t) { return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this; }
    get x() { return this.minX; }
    set x(t) { const e = this.maxX - this.minX; this.minX = t, this.maxX = t + e; }
    get y() { return this.minY; }
    set y(t) { const e = this.maxY - this.minY; this.minY = t, this.maxY = t + e; }
    get width() { return this.maxX - this.minX; }
    set width(t) { this.maxX = this.minX + t; }
    get height() { return this.maxY - this.minY; }
    set height(t) { this.maxY = this.minY + t; }
    get left() { return this.minX; }
    get right() { return this.maxX; }
    get top() { return this.minY; }
    get bottom() { return this.maxY; }
    get isPositive() { return this.maxX - this.minX > 0 && this.maxY - this.minY > 0; }
    get isValid() { return this.minX + this.minY !== 1 / 0; }
    addVertexData(t, e, i, r) { let n = this.minX, o = this.minY, h = this.maxX, l = this.maxY; r || (r = this.matrix); const c = r.a, u = r.b, d = r.c, f = r.d, _ = r.tx, p = r.ty; for (let m = e; m < i; m += 2) {
        const g = t[m], y = t[m + 1], x = c * g + d * y + _, v = u * g + f * y + p;
        n = x < n ? x : n, o = v < o ? v : o, h = x > h ? x : h, l = v > l ? v : l;
    } this.minX = n, this.minY = o, this.maxX = h, this.maxY = l; }
    containsPoint(t, e) { return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e; }
    toString() { return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`; }
    copyFrom(t) { return this.minX = t.minX, this.minY = t.minY, this.maxX = t.maxX, this.maxY = t.maxY, this; }
}
exports.J = Zt;
var Nh = { grad: .9, turn: 360, rad: 360 / (2 * Math.PI) }, oe = function (s) { return typeof s == "string" ? s.length > 0 : typeof s == "number"; }, zt = function (s, t, e) { return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * s) / e + 0; }, Yt = function (s, t, e) { return t === void 0 && (t = 0), e === void 0 && (e = 1), s > e ? e : s > t ? s : t; }, fo = function (s) { return (s = isFinite(s) ? s % 360 : 0) > 0 ? s : s + 360; }, Xr = function (s) { return { r: Yt(s.r, 0, 255), g: Yt(s.g, 0, 255), b: Yt(s.b, 0, 255), a: Yt(s.a) }; }, hs = function (s) { return { r: zt(s.r), g: zt(s.g), b: zt(s.b), a: zt(s.a, 3) }; }, Wh = /^#([0-9a-f]{3,8})$/i, mi = function (s) { var t = s.toString(16); return t.length < 2 ? "0" + t : t; }, po = function (s) { var t = s.r, e = s.g, i = s.b, r = s.a, n = Math.max(t, e, i), o = n - Math.min(t, e, i), h = o ? n === t ? (e - i) / o : n === e ? 2 + (i - t) / o : 4 + (t - e) / o : 0; return { h: 60 * (h < 0 ? h + 6 : h), s: n ? o / n * 100 : 0, v: n / 255 * 100, a: r }; }, go = function (s) { var t = s.h, e = s.s, i = s.v, r = s.a; t = t / 360 * 6, e /= 100, i /= 100; var n = Math.floor(t), o = i * (1 - e), h = i * (1 - (t - n) * e), l = i * (1 - (1 - t + n) * e), c = n % 6; return { r: 255 * [i, h, o, o, l, i][c], g: 255 * [l, i, i, h, o, o][c], b: 255 * [o, o, l, i, i, h][c], a: r }; }, Yr = function (s) { return { h: fo(s.h), s: Yt(s.s, 0, 100), l: Yt(s.l, 0, 100), a: Yt(s.a) }; }, jr = function (s) { return { h: zt(s.h), s: zt(s.s), l: zt(s.l), a: zt(s.a, 3) }; }, qr = function (s) { return go((e = (t = s).s, { h: t.h, s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0, v: i + e, a: t.a })); var t, e, i; }, Je = function (s) { return { h: (t = po(s)).h, s: (r = (200 - (e = t.s)) * (i = t.v) / 100) > 0 && r < 200 ? e * i / 100 / (r <= 100 ? r : 200 - r) * 100 : 0, l: r / 2, a: t.a }; var t, e, i, r; }, Hh = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Vh = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Xh = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Yh = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Ns = { string: [[function (s) { var t = Wh.exec(s); return t ? (s = t[1]).length <= 4 ? { r: parseInt(s[0] + s[0], 16), g: parseInt(s[1] + s[1], 16), b: parseInt(s[2] + s[2], 16), a: s.length === 4 ? zt(parseInt(s[3] + s[3], 16) / 255, 2) : 1 } : s.length === 6 || s.length === 8 ? { r: parseInt(s.substr(0, 2), 16), g: parseInt(s.substr(2, 2), 16), b: parseInt(s.substr(4, 2), 16), a: s.length === 8 ? zt(parseInt(s.substr(6, 2), 16) / 255, 2) : 1 } : null : null; }, "hex"], [function (s) { var t = Xh.exec(s) || Yh.exec(s); return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Xr({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null; }, "rgb"], [function (s) { var t = Hh.exec(s) || Vh.exec(s); if (!t)
                return null; var e, i, r = Yr({ h: (e = t[1], i = t[2], i === void 0 && (i = "deg"), Number(e) * (Nh[i] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) }); return qr(r); }, "hsl"]], object: [[function (s) { var t = s.r, e = s.g, i = s.b, r = s.a, n = r === void 0 ? 1 : r; return oe(t) && oe(e) && oe(i) ? Xr({ r: Number(t), g: Number(e), b: Number(i), a: Number(n) }) : null; }, "rgb"], [function (s) { var t = s.h, e = s.s, i = s.l, r = s.a, n = r === void 0 ? 1 : r; if (!oe(t) || !oe(e) || !oe(i))
                return null; var o = Yr({ h: Number(t), s: Number(e), l: Number(i), a: Number(n) }); return qr(o); }, "hsl"], [function (s) { var t = s.h, e = s.s, i = s.v, r = s.a, n = r === void 0 ? 1 : r; if (!oe(t) || !oe(e) || !oe(i))
                return null; var o = (function (h) { return { h: fo(h.h), s: Yt(h.s, 0, 100), v: Yt(h.v, 0, 100), a: Yt(h.a) }; })({ h: Number(t), s: Number(e), v: Number(i), a: Number(n) }); return go(o); }, "hsv"]] }, $r = function (s, t) { for (var e = 0; e < t.length; e++) {
    var i = t[e][0](s);
    if (i)
        return [i, t[e][1]];
} return [null, void 0]; }, jh = function (s) { return typeof s == "string" ? $r(s.trim(), Ns.string) : typeof s == "object" && s !== null ? $r(s, Ns.object) : [null, void 0]; }, ls = function (s, t) { var e = Je(s); return { h: e.h, s: Yt(e.s + 100 * t, 0, 100), l: e.l, a: e.a }; }, cs = function (s) { return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 / 255; }, Kr = function (s, t) { var e = Je(s); return { h: e.h, s: e.s, l: Yt(e.l + 100 * t, 0, 100), a: e.a }; }, Ws = (function () { function s(t) { this.parsed = jh(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 }; } return s.prototype.isValid = function () { return this.parsed !== null; }, s.prototype.brightness = function () { return zt(cs(this.rgba), 2); }, s.prototype.isDark = function () { return cs(this.rgba) < .5; }, s.prototype.isLight = function () { return cs(this.rgba) >= .5; }, s.prototype.toHex = function () { return t = hs(this.rgba), e = t.r, i = t.g, r = t.b, o = (n = t.a) < 1 ? mi(zt(255 * n)) : "", "#" + mi(e) + mi(i) + mi(r) + o; var t, e, i, r, n, o; }, s.prototype.toRgb = function () { return hs(this.rgba); }, s.prototype.toRgbString = function () { return t = hs(this.rgba), e = t.r, i = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + r + ", " + n + ")" : "rgb(" + e + ", " + i + ", " + r + ")"; var t, e, i, r, n; }, s.prototype.toHsl = function () { return jr(Je(this.rgba)); }, s.prototype.toHslString = function () { return t = jr(Je(this.rgba)), e = t.h, i = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + r + "%, " + n + ")" : "hsl(" + e + ", " + i + "%, " + r + "%)"; var t, e, i, r, n; }, s.prototype.toHsv = function () { return t = po(this.rgba), { h: zt(t.h), s: zt(t.s), v: zt(t.v), a: zt(t.a, 3) }; var t; }, s.prototype.invert = function () { return te({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a }); var t; }, s.prototype.saturate = function (t) { return t === void 0 && (t = .1), te(ls(this.rgba, t)); }, s.prototype.desaturate = function (t) { return t === void 0 && (t = .1), te(ls(this.rgba, -t)); }, s.prototype.grayscale = function () { return te(ls(this.rgba, -1)); }, s.prototype.lighten = function (t) { return t === void 0 && (t = .1), te(Kr(this.rgba, t)); }, s.prototype.darken = function (t) { return t === void 0 && (t = .1), te(Kr(this.rgba, -t)); }, s.prototype.rotate = function (t) { return t === void 0 && (t = 15), this.hue(this.hue() + t); }, s.prototype.alpha = function (t) { return typeof t == "number" ? te({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t }) : zt(this.rgba.a, 3); var e; }, s.prototype.hue = function (t) { var e = Je(this.rgba); return typeof t == "number" ? te({ h: t, s: e.s, l: e.l, a: e.a }) : zt(e.h); }, s.prototype.isEqual = function (t) { return this.toHex() === te(t).toHex(); }, s; })(), te = function (s) { return s instanceof Ws ? s : new Ws(s); }, Zr = [], qh = function (s) { s.forEach(function (t) { Zr.indexOf(t) < 0 && (t(Ws, Ns), Zr.push(t)); }); };
function $h(s, t) { var e = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, i = {}; for (var r in e)
    i[e[r]] = r; var n = {}; s.prototype.toName = function (o) { if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
    return "transparent"; var h, l, c = i[this.toHex()]; if (c)
    return c; if (o?.closest) {
    var u = this.toRgb(), d = 1 / 0, f = "black";
    if (!n.length)
        for (var _ in e)
            n[_] = new s(e[_]).toRgb();
    for (var p in e) {
        var m = (h = u, l = n[p], Math.pow(h.r - l.r, 2) + Math.pow(h.g - l.g, 2) + Math.pow(h.b - l.b, 2));
        m < d && (d = m, f = p);
    }
    return f;
} }, t.string.push([function (o) { var h = o.toLowerCase(), l = h === "transparent" ? "#0000" : e[h]; return l ? new s(l).toRgb() : null; }, "name"]); }
qh([$h]);
const Fe = class $e {
    constructor(t = 16777215) { this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t; }
    get red() { return this._components[0]; }
    get green() { return this._components[1]; }
    get blue() { return this._components[2]; }
    get alpha() { return this._components[3]; }
    setValue(t) { return this.value = t, this; }
    set value(t) { if (t instanceof $e)
        this._value = this._cloneSource(t._value), this._int = t._int, this._components.set(t._components);
    else {
        if (t === null)
            throw new Error("Cannot set Color#value to null");
        (this._value === null || !this._isSourceEqual(this._value, t)) && (this._value = this._cloneSource(t), this._normalize(this._value));
    } }
    get value() { return this._value; }
    _cloneSource(t) { return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? { ...t } : t; }
    _isSourceEqual(t, e) { const i = typeof t; if (i !== typeof e)
        return !1; if (i === "number" || i === "string" || t instanceof Number)
        return t === e; if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
        return t.length !== e.length ? !1 : t.every((n, o) => n === e[o]); if (t !== null && e !== null) {
        const n = Object.keys(t), o = Object.keys(e);
        return n.length !== o.length ? !1 : n.every(h => t[h] === e[h]);
    } return t === e; }
    toRgba() { const [t, e, i, r] = this._components; return { r: t, g: e, b: i, a: r }; }
    toRgb() { const [t, e, i] = this._components; return { r: t, g: e, b: i }; }
    toRgbaString() { const [t, e, i] = this.toUint8RgbArray(); return `rgba(${t},${e},${i},${this.alpha})`; }
    toUint8RgbArray(t) { const [e, i, r] = this._components; return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(e * 255), t[1] = Math.round(i * 255), t[2] = Math.round(r * 255), t; }
    toArray(t) { this._arrayRgba || (this._arrayRgba = []), t || (t = this._arrayRgba); const [e, i, r, n] = this._components; return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t; }
    toRgbArray(t) { this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb); const [e, i, r] = this._components; return t[0] = e, t[1] = i, t[2] = r, t; }
    toNumber() { return this._int; }
    toBgrNumber() { const [t, e, i] = this.toUint8RgbArray(); return (i << 16) + (e << 8) + t; }
    toLittleEndianNumber() { const t = this._int; return (t >> 16) + (t & 65280) + ((t & 255) << 16); }
    multiply(t) { const [e, i, r, n] = $e._temp.setValue(t)._components; return this._components[0] *= e, this._components[1] *= i, this._components[2] *= r, this._components[3] *= n, this._refreshInt(), this._value = null, this; }
    premultiply(t, e = !0) { return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this; }
    toPremultiplied(t, e = !0) { if (t === 1)
        return (255 << 24) + this._int; if (t === 0)
        return e ? 0 : this._int; let i = this._int >> 16 & 255, r = this._int >> 8 & 255, n = this._int & 255; return e && (i = i * t + .5 | 0, r = r * t + .5 | 0, n = n * t + .5 | 0), (t * 255 << 24) + (i << 16) + (r << 8) + n; }
    toHex() { const t = this._int.toString(16); return `#${"000000".substring(0, 6 - t.length) + t}`; }
    toHexa() { const e = Math.round(this._components[3] * 255).toString(16); return this.toHex() + "00".substring(0, 2 - e.length) + e; }
    setAlpha(t) { return this._components[3] = this._clamp(t), this; }
    _normalize(t) { let e, i, r, n; if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
        const o = t;
        e = (o >> 16 & 255) / 255, i = (o >> 8 & 255) / 255, r = (o & 255) / 255, n = 1;
    }
    else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
        t = this._clamp(t), [e, i, r, n = 1] = t;
    else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
        t = this._clamp(t, 0, 255), [e, i, r, n = 255] = t, e /= 255, i /= 255, r /= 255, n /= 255;
    else if (typeof t == "string" || typeof t == "object") {
        if (typeof t == "string") {
            const h = $e.HEX_PATTERN.exec(t);
            h && (t = `#${h[2]}`);
        }
        const o = te(t);
        o.isValid() && ({ r: e, g: i, b: r, a: n } = o.rgba, e /= 255, i /= 255, r /= 255);
    } if (e !== void 0)
        this._components[0] = e, this._components[1] = i, this._components[2] = r, this._components[3] = n, this._refreshInt();
    else
        throw new Error(`Unable to convert color ${t}`); }
    _refreshInt() { this._clamp(this._components); const [t, e, i] = this._components; this._int = (t * 255 << 16) + (e * 255 << 8) + (i * 255 | 0); }
    _clamp(t, e = 0, i = 1) { return typeof t == "number" ? Math.min(Math.max(t, e), i) : (t.forEach((r, n) => { t[n] = Math.min(Math.max(r, e), i); }), t); }
    static isColorLike(t) { return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof $e || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0; }
};
Fe.shared = new Fe;
Fe._temp = new Fe;
Fe.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let Pt = Fe;
exports.a1 = Pt;
const Kh = { cullArea: null, cullable: !1, cullableChildren: !0 };
let us = 0;
const Qr = 500;
function yt(...s) { us !== Qr && (us++, us === Qr ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...s)); }
const li = { _registeredResources: new Set, register(s) { this._registeredResources.add(s); }, unregister(s) { this._registeredResources.delete(s); }, release() { this._registeredResources.forEach(s => s.clear()); }, get registeredCount() { return this._registeredResources.size; }, isRegistered(s) { return this._registeredResources.has(s); }, reset() { this._registeredResources.clear(); } };
exports.V = li;
class Zh {
    constructor(t, e) { this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e); }
    prepopulate(t) { for (let e = 0; e < t; e++)
        this._pool[this._index++] = new this._classType; this._count += t; }
    get(t) { let e; return this._index > 0 ? e = this._pool[--this._index] : (e = new this._classType, this._count++), e.init?.(t), e; }
    return(t) { t.reset?.(), this._pool[this._index++] = t; }
    get totalSize() { return this._count; }
    get totalFree() { return this._index; }
    get totalUsed() { return this._count - this._index; }
    clear() { if (this._pool.length > 0 && this._pool[0].destroy)
        for (let t = 0; t < this._index; t++)
            this._pool[t].destroy(); this._pool.length = 0, this._count = 0, this._index = 0; }
}
class Qh {
    constructor() { this._poolsByClass = new Map; }
    prepopulate(t, e) { this.getPool(t).prepopulate(e); }
    get(t, e) { return this.getPool(t).get(e); }
    return(t) { this.getPool(t.constructor).return(t); }
    getPool(t) { return this._poolsByClass.has(t) || this._poolsByClass.set(t, new Zh(t)), this._poolsByClass.get(t); }
    stats() { const t = {}; return this._poolsByClass.forEach(e => { const i = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name; t[i] = { free: e.totalFree, used: e.totalUsed, size: e.totalSize }; }), t; }
    clear() { this._poolsByClass.forEach(t => t.clear()), this._poolsByClass.clear(); }
}
const jt = new Qh;
exports.H = jt;
li.register(jt);
const Jh = { get isCachedAsTexture() { return !!this.renderGroup?.isCachedAsTexture; }, cacheAsTexture(s) { typeof s == "boolean" && s === !1 ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(s === !0 ? {} : s)); }, updateCacheTexture() { this.renderGroup?.updateCacheTexture(); }, get cacheAsBitmap() { return this.isCachedAsTexture; }, set cacheAsBitmap(s) { Z("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(s); } };
function tl(s, t, e) { const i = s.length; let r; if (t >= i || e === 0)
    return; e = t + e > i ? i - t : e; const n = i - e; for (r = t; r < n; ++r)
    s[r] = s[r + e]; s.length = n; }
const el = { allowChildren: !0, removeChildren(s = 0, t) { const e = t ?? this.children.length, i = e - s, r = []; if (i > 0 && i <= e) {
        for (let o = e - 1; o >= s; o--) {
            const h = this.children[o];
            h && (r.push(h), h.parent = null);
        }
        tl(this.children, s, e);
        const n = this.renderGroup || this.parentRenderGroup;
        n && n.removeChildren(r);
        for (let o = 0; o < r.length; ++o) {
            const h = r[o];
            h.parentRenderLayer?.detach(h), this.emit("childRemoved", h, this, o), r[o].emit("removed", this);
        }
        return r.length > 0 && this._didViewChangeTick++, r;
    }
    else if (i === 0 && this.children.length === 0)
        return r; throw new RangeError("removeChildren: numeric values are outside the acceptable range."); }, removeChildAt(s) { const t = this.getChildAt(s); return this.removeChild(t); }, getChildAt(s) { if (s < 0 || s >= this.children.length)
        throw new Error(`getChildAt: Index (${s}) does not exist.`); return this.children[s]; }, setChildIndex(s, t) { if (t < 0 || t >= this.children.length)
        throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`); this.getChildIndex(s), this.addChildAt(s, t); }, getChildIndex(s) { const t = this.children.indexOf(s); if (t === -1)
        throw new Error("The supplied Container must be a child of the caller"); return t; }, addChildAt(s, t) { this.allowChildren || Z(ct, "addChildAt: Only Containers will be allowed to add children in v8.0.0"); const { children: e } = this; if (t < 0 || t > e.length)
        throw new Error(`${s}addChildAt: The index ${t} supplied is out of bounds ${e.length}`); if (s.parent) {
        const r = s.parent.children.indexOf(s);
        if (s.parent === this && r === t)
            return s;
        r !== -1 && s.parent.children.splice(r, 1);
    } t === e.length ? e.push(s) : e.splice(t, 0, s), s.parent = this, s.didChange = !0, s._updateFlags = 15; const i = this.renderGroup || this.parentRenderGroup; return i && i.addChild(s), this.sortableChildren && (this.sortDirty = !0), this.emit("childAdded", s, this, t), s.emit("added", this), s; }, swapChildren(s, t) { if (s === t)
        return; const e = this.getChildIndex(s), i = this.getChildIndex(t); this.children[e] = t, this.children[i] = s; const r = this.renderGroup || this.parentRenderGroup; r && (r.structureDidChange = !0), this._didContainerChangeTick++; }, removeFromParent() { this.parent?.removeChild(this); }, reparentChild(...s) { return s.length === 1 ? this.reparentChildAt(s[0], this.children.length) : (s.forEach(t => this.reparentChildAt(t, this.children.length)), s[0]); }, reparentChildAt(s, t) { if (s.parent === this)
        return this.setChildIndex(s, t), s; const e = s.worldTransform.clone(); s.removeFromParent(), this.addChildAt(s, t); const i = this.worldTransform.clone(); return i.invert(), e.prepend(i), s.setFromMatrix(e), s; }, replaceChild(s, t) { s.updateLocalTransform(), this.addChildAt(t, this.getChildIndex(s)), t.setFromMatrix(s.localTransform), t.updateLocalTransform(), this.removeChild(s); } }, il = { collectRenderables(s, t, e) { this.parentRenderLayer && this.parentRenderLayer !== e || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(s, t, e) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, s) : this.collectRenderablesWithEffects(s, t, e)); }, collectRenderablesSimple(s, t, e) { const i = this.children, r = i.length; for (let n = 0; n < r; n++)
        i[n].collectRenderables(s, t, e); }, collectRenderablesWithEffects(s, t, e) { const { renderPipes: i } = t; for (let r = 0; r < this.effects.length; r++) {
        const n = this.effects[r];
        i[n.pipe].push(n, this, s);
    } this.collectRenderablesSimple(s, t, e); for (let r = this.effects.length - 1; r >= 0; r--) {
        const n = this.effects[r];
        i[n.pipe].pop(n, this, s);
    } } };
class Jr {
    constructor() { this.pipe = "filter", this.priority = 1; }
    destroy() { for (let t = 0; t < this.filters.length; t++)
        this.filters[t].destroy(); this.filters = null, this.filterArea = null; }
}
exports.L = Jr;
class sl {
    constructor() { this._effectClasses = [], this._tests = [], this._initialized = !1; }
    init() { this._initialized || (this._initialized = !0, this._effectClasses.forEach(t => { this.add({ test: t.test, maskClass: t }); })); }
    add(t) { this._tests.push(t); }
    getMaskEffect(t) { this._initialized || this.init(); for (let e = 0; e < this._tests.length; e++) {
        const i = this._tests[e];
        if (i.test(t))
            return jt.get(i.maskClass, t);
    } return t; }
    returnMaskEffect(t) { jt.return(t); }
}
const Hs = new sl;
Et.handleByList(H.MaskEffect, Hs._effectClasses);
const rl = { _maskEffect: null, _maskOptions: { inverse: !1 }, _filterEffect: null, effects: [], _markStructureAsChanged() { const s = this.renderGroup || this.parentRenderGroup; s && (s.structureDidChange = !0); }, addEffect(s) { this.effects.indexOf(s) === -1 && (this.effects.push(s), this.effects.sort((e, i) => e.priority - i.priority), this._markStructureAsChanged(), this._updateIsSimple()); }, removeEffect(s) { const t = this.effects.indexOf(s); t !== -1 && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple()); }, set mask(s) { const t = this._maskEffect; t?.mask !== s && (t && (this.removeEffect(t), Hs.returnMaskEffect(t), this._maskEffect = null), s != null && (this._maskEffect = Hs.getMaskEffect(s), this.addEffect(this._maskEffect))); }, get mask() { return this._maskEffect?.mask; }, setMask(s) { this._maskOptions = { ...this._maskOptions, ...s }, s.mask && (this.mask = s.mask), this._markStructureAsChanged(); }, set filters(s) { !Array.isArray(s) && s && (s = [s]); const t = this._filterEffect || (this._filterEffect = new Jr); s = s; const e = s?.length > 0, i = t.filters?.length > 0, r = e !== i; s = Array.isArray(s) ? s.slice(0) : s, t.filters = Object.freeze(s), r && (e ? this.addEffect(t) : (this.removeEffect(t), t.filters = s ?? null)); }, get filters() { return this._filterEffect?.filters; }, set filterArea(s) { this._filterEffect || (this._filterEffect = new Jr), this._filterEffect.filterArea = s; }, get filterArea() { return this._filterEffect?.filterArea; } }, nl = { label: null, get name() { return Z(ct, "Container.name property has been removed, use Container.label instead"), this.label; }, set name(s) { Z(ct, "Container.name property has been removed, use Container.label instead"), this.label = s; }, getChildByName(s, t = !1) { return this.getChildByLabel(s, t); }, getChildByLabel(s, t = !1) { const e = this.children; for (let i = 0; i < e.length; i++) {
        const r = e[i];
        if (r.label === s || s instanceof RegExp && s.test(r.label))
            return r;
    } if (t)
        for (let i = 0; i < e.length; i++) {
            const n = e[i].getChildByLabel(s, !0);
            if (n)
                return n;
        } return null; }, getChildrenByLabel(s, t = !1, e = []) { const i = this.children; for (let r = 0; r < i.length; r++) {
        const n = i[r];
        (n.label === s || s instanceof RegExp && s.test(n.label)) && e.push(n);
    } if (t)
        for (let r = 0; r < i.length; r++)
            i[r].getChildrenByLabel(s, !0, e); return e; } }, Ot = jt.getPool(rt), ae = jt.getPool(Zt), ol = new rt, al = { getFastGlobalBounds(s, t) { t || (t = new Zt), t.clear(), this._getGlobalBoundsRecursive(!!s, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0); const e = this.renderGroup || this.parentRenderGroup; return t.applyMatrix(e.worldTransform), t; }, _getGlobalBoundsRecursive(s, t, e) { let i = t; if (s && this.parentRenderLayer && this.parentRenderLayer !== e || this.localDisplayStatus !== 7 || !this.measurable)
        return; const r = !!this.effects.length; if ((this.renderGroup || r) && (i = ae.get().clear()), this.boundsArea)
        t.addRect(this.boundsArea, this.worldTransform);
    else {
        if (this.renderPipeId) {
            const o = this.bounds;
            i.addFrame(o.minX, o.minY, o.maxX, o.maxY, this.groupTransform);
        }
        const n = this.children;
        for (let o = 0; o < n.length; o++)
            n[o]._getGlobalBoundsRecursive(s, i, e);
    } if (r) {
        let n = !1;
        const o = this.renderGroup || this.parentRenderGroup;
        for (let h = 0; h < this.effects.length; h++)
            this.effects[h].addBounds && (n || (n = !0, i.applyMatrix(o.worldTransform)), this.effects[h].addBounds(i, !0));
        n && i.applyMatrix(o.worldTransform.copyTo(ol).invert()), t.addBounds(i), ae.return(i);
    }
    else
        this.renderGroup && (t.addBounds(i, this.relativeGroupTransform), ae.return(i)); } };
function mo(s, t, e) { e.clear(); let i, r; return s.parent ? t ? i = s.parent.worldTransform : (r = Ot.get().identity(), i = mr(s, r)) : i = rt.IDENTITY, yo(s, e, i, t), r && Ot.return(r), e.isValid || e.set(0, 0, 0, 0), e; }
function yo(s, t, e, i) { if (!s.visible || !s.measurable)
    return; let r; i ? r = s.worldTransform : (s.updateLocalTransform(), r = Ot.get(), r.appendFrom(s.localTransform, e)); const n = t, o = !!s.effects.length; if (o && (t = ae.get().clear()), s.boundsArea)
    t.addRect(s.boundsArea, r);
else {
    const h = s.bounds;
    h && !h.isEmpty() && (t.matrix = r, t.addBounds(h));
    for (let l = 0; l < s.children.length; l++)
        yo(s.children[l], t, r, i);
} if (o) {
    for (let h = 0; h < s.effects.length; h++)
        s.effects[h].addBounds?.(t);
    n.addBounds(t, rt.IDENTITY), ae.return(t);
} i || Ot.return(r); }
function mr(s, t) { const e = s.parent; return e && (mr(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t; }
function xo(s, t) { if (s === 16777215 || !t)
    return t; if (t === 16777215 || !s)
    return s; const e = s >> 16 & 255, i = s >> 8 & 255, r = s & 255, n = t >> 16 & 255, o = t >> 8 & 255, h = t & 255, l = e * n / 255 | 0, c = i * o / 255 | 0, u = r * h / 255 | 0; return (l << 16) + (c << 8) + u; }
const tn = 16777215;
function en(s, t) { return s === tn ? t : t === tn ? s : xo(s, t); }
function zi(s) { return ((s & 255) << 16) + (s & 65280) + (s >> 16 & 255); }
const hl = { getGlobalAlpha(s) { if (s)
        return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha; let t = this.alpha, e = this.parent; for (; e;)
        t *= e.alpha, e = e.parent; return t; }, getGlobalTransform(s = new rt, t) { if (t)
        return s.copyFrom(this.worldTransform); this.updateLocalTransform(); const e = mr(this, Ot.get().identity()); return s.appendFrom(this.localTransform, e), Ot.return(e), s; }, getGlobalTint(s) { if (s)
        return this.renderGroup ? zi(this.renderGroup.worldColor) : this.parentRenderGroup ? zi(en(this.localColor, this.parentRenderGroup.worldColor)) : this.tint; let t = this.localColor, e = this.parent; for (; e;)
        t = en(t, e.localColor), e = e.parent; return zi(t); } };
function bo(s, t, e) { return t.clear(), e || (e = rt.IDENTITY), vo(s, t, e, s, !0), t.isValid || t.set(0, 0, 0, 0), t; }
function vo(s, t, e, i, r) { let n; if (r)
    n = Ot.get(), n = e.copyTo(n);
else {
    if (!s.visible || !s.measurable)
        return;
    s.updateLocalTransform();
    const l = s.localTransform;
    n = Ot.get(), n.appendFrom(l, e);
} const o = t, h = !!s.effects.length; if (h && (t = ae.get().clear()), s.boundsArea)
    t.addRect(s.boundsArea, n);
else {
    s.renderPipeId && (t.matrix = n, t.addBounds(s.bounds));
    const l = s.children;
    for (let c = 0; c < l.length; c++)
        vo(l[c], t, n, i, !1);
} if (h) {
    for (let l = 0; l < s.effects.length; l++)
        s.effects[l].addLocalBounds?.(t, i);
    o.addBounds(t, rt.IDENTITY), ae.return(t);
} Ot.return(n); }
function wo(s, t) { const e = s.children; for (let i = 0; i < e.length; i++) {
    const r = e[i], n = r.uid, o = (r._didViewChangeTick & 65535) << 16 | r._didContainerChangeTick & 65535, h = t.index;
    (t.data[h] !== n || t.data[h + 1] !== o) && (t.data[t.index] = n, t.data[t.index + 1] = o, t.didChange = !0), t.index = h + 2, r.children.length && wo(r, t);
} return t.didChange; }
const ll = new rt, cl = { _localBoundsCacheId: -1, _localBoundsCacheData: null, _setWidth(s, t) { const e = Math.sign(this.scale.x) || 1; t !== 0 ? this.scale.x = s / t * e : this.scale.x = e; }, _setHeight(s, t) { const e = Math.sign(this.scale.y) || 1; t !== 0 ? this.scale.y = s / t * e : this.scale.y = e; }, getLocalBounds() { this._localBoundsCacheData || (this._localBoundsCacheData = { data: [], index: 1, didChange: !1, localBounds: new Zt }); const s = this._localBoundsCacheData; return s.index = 1, s.didChange = !1, s.data[0] !== this._didViewChangeTick && (s.didChange = !0, s.data[0] = this._didViewChangeTick), wo(this, s), s.didChange && bo(this, s.localBounds, ll), s.localBounds; }, getBounds(s, t) { return mo(this, s, t || new Zt); } }, ul = { _onRender: null, set onRender(s) { const t = this.renderGroup || this.parentRenderGroup; if (!s) {
        this._onRender && t?.removeOnRender(this), this._onRender = null;
        return;
    } this._onRender || t?.addOnRender(this), this._onRender = s; }, get onRender() { return this._onRender; } }, dl = { _zIndex: 0, sortDirty: !1, sortableChildren: !1, get zIndex() { return this._zIndex; }, set zIndex(s) { this._zIndex !== s && (this._zIndex = s, this.depthOfChildModified()); }, depthOfChildModified() { this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0); }, sortChildren() { this.sortDirty && (this.sortDirty = !1, this.children.sort(_l)); } };
function _l(s, t) { return s._zIndex - t._zIndex; }
const fl = { getGlobalPosition(s = new et, t = !1) { return this.parent ? this.parent.toGlobal(this._position, s, t) : (s.x = this._position.x, s.y = this._position.y), s; }, toGlobal(s, t, e = !1) { const i = this.getGlobalTransform(Ot.get(), e); return t = i.apply(s, t), Ot.return(i), t; }, toLocal(s, t, e, i) { t && (s = t.toGlobal(s, e, i)); const r = this.getGlobalTransform(Ot.get(), i); return e = r.applyInverse(s, e), Ot.return(r), e; } };
class ko {
    constructor() { this.uid = At("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0; }
    reset() { this.instructionSize = 0; }
    destroy() { this.instructions.length = 0, this.renderables.length = 0, this.renderPipes = null, this.gcTick = 0; }
    add(t) { this.instructions[this.instructionSize++] = t; }
    log() { this.instructions.length = this.instructionSize, console.table(this.instructions, ["type", "action"]); }
}
let pl = 0;
class gl {
    constructor(t) { this._poolKeyHash = Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this.textureStyle = new Di(this.textureOptions); }
    createTexture(t, e, i) { const r = new qt({ ...this.textureOptions, width: t, height: e, resolution: 1, antialias: i, autoGarbageCollect: !1 }); return new it({ source: r, label: `texturePool_${pl++}` }); }
    getOptimalTexture(t, e, i = 1, r) { let n = Math.ceil(t * i - 1e-6), o = Math.ceil(e * i - 1e-6); n = Gi(n), o = Gi(o); const h = (n << 17) + (o << 1) + (r ? 1 : 0); this._texturePool[h] || (this._texturePool[h] = []); let l = this._texturePool[h].pop(); return l || (l = this.createTexture(n, o, r)), l.source._resolution = i, l.source.width = n / i, l.source.height = o / i, l.source.pixelWidth = n, l.source.pixelHeight = o, l.frame.x = 0, l.frame.y = 0, l.frame.width = t, l.frame.height = e, l.updateUvs(), this._poolKeyHash[l.uid] = h, l; }
    getSameSizeTexture(t, e = !1) { const i = t.source; return this.getOptimalTexture(t.width, t.height, i._resolution, e); }
    returnTexture(t, e = !1) { const i = this._poolKeyHash[t.uid]; e && (t.source.style = this.textureStyle), this._texturePool[i].push(t); }
    clear(t) { if (t = t !== !1, t)
        for (const e in this._texturePool) {
            const i = this._texturePool[e];
            if (i)
                for (let r = 0; r < i.length; r++)
                    i[r].destroy(!0);
        } this._texturePool = {}; }
}
const Be = new gl;
exports.K = Be;
li.register(Be);
class ml {
    constructor() { this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new rt, this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = { list: [], index: 0 }, this.structureDidChange = !0, this.instructionSet = new ko, this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7; }
    init(t) { this.root = t, t._onRender && this.addOnRender(t), t.didChange = !0; const e = t.children; for (let i = 0; i < e.length; i++) {
        const r = e[i];
        r._updateFlags = 15, this.addChild(r);
    } }
    enableCacheAsTexture(t = {}) { this.textureOptions = t, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0; }
    disableCacheAsTexture() { this.isCachedAsTexture = !1, this.texture && (Be.returnTexture(this.texture, !0), this.texture = null); }
    updateCacheTexture() { this.textureNeedsUpdate = !0; const t = this._parentCacheAsTextureRenderGroup; t && !t.textureNeedsUpdate && t.updateCacheTexture(); }
    reset() { this.renderGroupChildren.length = 0; for (const t in this.childrenToUpdate) {
        const e = this.childrenToUpdate[t];
        e.list.fill(null), e.index = 0;
    } this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = !0, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture(); }
    get localTransform() { return this.root.localTransform; }
    addRenderGroupChild(t) { t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t), t.renderGroupParent = this, this.renderGroupChildren.push(t); }
    _removeRenderGroupChild(t) { const e = this.renderGroupChildren.indexOf(t); e > -1 && this.renderGroupChildren.splice(e, 1), t.renderGroupParent = null; }
    addChild(t) { if (this.structureDidChange = !0, t.parentRenderGroup = this, t.updateTick = -1, t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1, t.didChange = !0, this.onChildUpdate(t), t.renderGroup) {
        this.addRenderGroupChild(t.renderGroup);
        return;
    } t._onRender && this.addOnRender(t); const e = t.children; for (let i = 0; i < e.length; i++)
        this.addChild(e[i]); }
    removeChild(t) { if (this.structureDidChange = !0, t._onRender && (t.renderGroup || this.removeOnRender(t)), t.parentRenderGroup = null, t.renderGroup) {
        this._removeRenderGroupChild(t.renderGroup);
        return;
    } const e = t.children; for (let i = 0; i < e.length; i++)
        this.removeChild(e[i]); }
    removeChildren(t) { for (let e = 0; e < t.length; e++)
        this.removeChild(t[e]); }
    onChildUpdate(t) { let e = this.childrenToUpdate[t.relativeRenderGroupDepth]; e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = { index: 0, list: [] }), e.list[e.index++] = t; }
    updateRenderable(t) { t.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t), t.didViewUpdate = !1); }
    onChildViewUpdate(t) { this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t; }
    get isRenderable() { return this.root.localDisplayStatus === 7 && this.worldAlpha > 0; }
    addOnRender(t) { this._onRenderContainers.push(t); }
    removeOnRender(t) { this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1); }
    runOnRender(t) { for (let e = 0; e < this._onRenderContainers.length; e++)
        this._onRenderContainers[e]._onRender(t); }
    destroy() { this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, this.instructionSet = null; }
    getChildren(t = []) { const e = this.root.children; for (let i = 0; i < e.length; i++)
        this._getChildren(e[i], t); return t; }
    _getChildren(t, e = []) { if (e.push(t), t.renderGroup)
        return e; const i = t.children; for (let r = 0; r < i.length; r++)
        this._getChildren(i[r], e); return e; }
    invalidateMatrices() { this._matrixDirty = 7; }
    get inverseWorldTransform() { return (this._matrixDirty & 1) === 0 ? this._inverseWorldTransform : (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new rt), this._inverseWorldTransform.copyFrom(this.worldTransform).invert()); }
    get textureOffsetInverseTransform() { return (this._matrixDirty & 2) === 0 ? this._textureOffsetInverseTransform : (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new rt), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y)); }
    get inverseParentTextureTransform() { if ((this._matrixDirty & 4) === 0)
        return this._inverseParentTextureTransform; this._matrixDirty &= -5; const t = this._parentCacheAsTextureRenderGroup; return t ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new rt), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x, -t._textureBounds.y)) : this.worldTransform; }
    get cacheToLocalTransform() { return this.isCachedAsTexture ? this.textureOffsetInverseTransform : this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null; }
}
exports.a2 = ml;
function yl(s, t, e = {}) { for (const i in t)
    !e[i] && t[i] !== void 0 && (s[i] = t[i]); }
const ds = new Rt(null), yi = new Rt(null), _s = new Rt(null, 1, 1), xi = new Rt(null), sn = 1, xl = 2, fs = 4;
exports._ = sn;
exports.$ = xl;
exports.Z = fs;
class Q extends Qt {
    constructor(t = {}) { super(), this.uid = At("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.parentRenderLayer = null, this.updateTick = -1, this.localTransform = new rt, this.relativeGroupTransform = new rt, this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new Rt(this, 0, 0), this._scale = _s, this._pivot = yi, this._origin = xi, this._skew = ds, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [], yl(this, t, { children: !0, parent: !0, effects: !0 }), t.children?.forEach(e => this.addChild(e)), t.parent?.addChild(this); }
    static mixin(t) { Z("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), Et.mixin(Q, t); }
    set _didChangeId(t) { this._didViewChangeTick = t >> 12 & 4095, this._didContainerChangeTick = t & 4095; }
    get _didChangeId() { return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12; }
    addChild(...t) { if (this.allowChildren || Z(ct, "addChild: Only Containers will be allowed to add children in v8.0.0"), t.length > 1) {
        for (let r = 0; r < t.length; r++)
            this.addChild(t[r]);
        return t[0];
    } const e = t[0], i = this.renderGroup || this.parentRenderGroup; return e.parent === this ? (this.children.splice(this.children.indexOf(e), 1), this.children.push(e), i && (i.structureDidChange = !0), e) : (e.parent && e.parent.removeChild(e), this.children.push(e), this.sortableChildren && (this.sortDirty = !0), e.parent = this, e.didChange = !0, e._updateFlags = 15, i && i.addChild(e), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this), this._didViewChangeTick++, e._zIndex !== 0 && e.depthOfChildModified(), e); }
    removeChild(...t) { if (t.length > 1) {
        for (let r = 0; r < t.length; r++)
            this.removeChild(t[r]);
        return t[0];
    } const e = t[0], i = this.children.indexOf(e); return i > -1 && (this._didViewChangeTick++, this.children.splice(i, 1), this.renderGroup ? this.renderGroup.removeChild(e) : this.parentRenderGroup && this.parentRenderGroup.removeChild(e), e.parentRenderLayer && e.parentRenderLayer.detach(e), e.parent = null, this.emit("childRemoved", e, this, i), e.emit("removed", this)), e; }
    _onUpdate(t) { t && t === this._skew && this._updateSkew(), this._didContainerChangeTick++, !this.didChange && (this.didChange = !0, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this)); }
    set isRenderGroup(t) { !!this.renderGroup !== t && (t ? this.enableRenderGroup() : this.disableRenderGroup()); }
    get isRenderGroup() { return !!this.renderGroup; }
    enableRenderGroup() { if (this.renderGroup)
        return; const t = this.parentRenderGroup; t?.removeChild(this), this.renderGroup = jt.get(ml, this), this.groupTransform = rt.IDENTITY, t?.addChild(this), this._updateIsSimple(); }
    disableRenderGroup() { if (!this.renderGroup)
        return; const t = this.parentRenderGroup; t?.removeChild(this), jt.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, t?.addChild(this), this._updateIsSimple(); }
    _updateIsSimple() { this.isSimple = !this.renderGroup && this.effects.length === 0; }
    get worldTransform() { return this._worldTransform || (this._worldTransform = new rt), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform; }
    get x() { return this._position.x; }
    set x(t) { this._position.x = t; }
    get y() { return this._position.y; }
    set y(t) { this._position.y = t; }
    get position() { return this._position; }
    set position(t) { this._position.copyFrom(t); }
    get rotation() { return this._rotation; }
    set rotation(t) { this._rotation !== t && (this._rotation = t, this._onUpdate(this._skew)); }
    get angle() { return this.rotation * Eh; }
    set angle(t) { this.rotation = t * Rh; }
    get pivot() { return this._pivot === yi && (this._pivot = new Rt(this, 0, 0)), this._pivot; }
    set pivot(t) { this._pivot === yi && (this._pivot = new Rt(this, 0, 0), this._origin !== xi && yt("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t); }
    get skew() { return this._skew === ds && (this._skew = new Rt(this, 0, 0)), this._skew; }
    set skew(t) { this._skew === ds && (this._skew = new Rt(this, 0, 0)), this._skew.copyFrom(t); }
    get scale() { return this._scale === _s && (this._scale = new Rt(this, 1, 1)), this._scale; }
    set scale(t) { this._scale === _s && (this._scale = new Rt(this, 0, 0)), typeof t == "string" && (t = parseFloat(t)), typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t); }
    get origin() { return this._origin === xi && (this._origin = new Rt(this, 0, 0)), this._origin; }
    set origin(t) { this._origin === xi && (this._origin = new Rt(this, 0, 0), this._pivot !== yi && yt("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._origin.set(t) : this._origin.copyFrom(t); }
    get width() { return Math.abs(this.scale.x * this.getLocalBounds().width); }
    set width(t) { const e = this.getLocalBounds().width; this._setWidth(t, e); }
    get height() { return Math.abs(this.scale.y * this.getLocalBounds().height); }
    set height(t) { const e = this.getLocalBounds().height; this._setHeight(t, e); }
    getSize(t) { t || (t = {}); const e = this.getLocalBounds(); return t.width = Math.abs(this.scale.x * e.width), t.height = Math.abs(this.scale.y * e.height), t; }
    setSize(t, e) { const i = this.getLocalBounds(); typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, i.width), e !== void 0 && this._setHeight(e, i.height); }
    _updateSkew() { const t = this._rotation, e = this._skew; this._cx = Math.cos(t + e._y), this._sx = Math.sin(t + e._y), this._cy = -Math.sin(t - e._x), this._sy = Math.cos(t - e._x); }
    updateTransform(t) { return this.position.set(typeof t.x == "number" ? t.x : this.position.x, typeof t.y == "number" ? t.y : this.position.y), this.scale.set(typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x, typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y), this.rotation = typeof t.rotation == "number" ? t.rotation : this.rotation, this.skew.set(typeof t.skewX == "number" ? t.skewX : this.skew.x, typeof t.skewY == "number" ? t.skewY : this.skew.y), this.pivot.set(typeof t.pivotX == "number" ? t.pivotX : this.pivot.x, typeof t.pivotY == "number" ? t.pivotY : this.pivot.y), this.origin.set(typeof t.originX == "number" ? t.originX : this.origin.x, typeof t.originY == "number" ? t.originY : this.origin.y), this; }
    setFromMatrix(t) { t.decompose(this); }
    updateLocalTransform() { const t = this._didContainerChangeTick; if (this._didLocalTransformChangeId === t)
        return; this._didLocalTransformChangeId = t; const e = this.localTransform, i = this._scale, r = this._pivot, n = this._origin, o = this._position, h = i._x, l = i._y, c = r._x, u = r._y, d = -n._x, f = -n._y; e.a = this._cx * h, e.b = this._sx * h, e.c = this._cy * l, e.d = this._sy * l, e.tx = o._x - (c * e.a + u * e.c) + (d * e.a + f * e.c) - d, e.ty = o._y - (c * e.b + u * e.d) + (d * e.b + f * e.d) - f; }
    set alpha(t) { t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= sn, this._onUpdate()); }
    get alpha() { return this.localAlpha; }
    set tint(t) { const i = Pt.shared.setValue(t ?? 16777215).toBgrNumber(); i !== this.localColor && (this.localColor = i, this._updateFlags |= sn, this._onUpdate()); }
    get tint() { return zi(this.localColor); }
    set blendMode(t) { this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= xl, this.localBlendMode = t, this._onUpdate()); }
    get blendMode() { return this.localBlendMode; }
    get visible() { return !!(this.localDisplayStatus & 2); }
    set visible(t) { const e = t ? 2 : 0; (this.localDisplayStatus & 2) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= fs, this.localDisplayStatus ^= 2, this._onUpdate()); }
    get culled() { return !(this.localDisplayStatus & 4); }
    set culled(t) { const e = t ? 0 : 4; (this.localDisplayStatus & 4) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= fs, this.localDisplayStatus ^= 4, this._onUpdate()); }
    get renderable() { return !!(this.localDisplayStatus & 1); }
    set renderable(t) { const e = t ? 1 : 0; (this.localDisplayStatus & 1) !== e && (this._updateFlags |= fs, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate()); }
    get isRenderable() { return this.localDisplayStatus === 7 && this.groupAlpha > 0; }
    destroy(t = !1) { if (this.destroyed)
        return; this.destroyed = !0; let e; if (this.children.length && (e = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._origin = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), (typeof t == "boolean" ? t : t?.children) && e)
        for (let r = 0; r < e.length; ++r)
            e[r].destroy(t); this.renderGroup?.destroy(), this.renderGroup = null; }
}
exports.C = Q;
exports.Container = Q;
Et.mixin(Q, el, al, fl, ul, cl, rl, nl, dl, Kh, Jh, hl, il);
class Ao extends Q {
    constructor(t) { super(t), this.canBundle = !0, this.allowChildren = !1, this._roundPixels = 0, this._lastUsed = -1, this._gpuData = Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this._bounds = new Zt(0, 1, 0, 0), this._boundsDirty = !0, this.autoGarbageCollect = t.autoGarbageCollect ?? !0; }
    get bounds() { return this._boundsDirty ? (this.updateBounds(), this._boundsDirty = !1, this._bounds) : this._bounds; }
    get roundPixels() { return !!this._roundPixels; }
    set roundPixels(t) { this._roundPixels = t ? 1 : 0; }
    containsPoint(t) { const e = this.bounds, { x: i, y: r } = t; return i >= e.minX && i <= e.maxX && r >= e.minY && r <= e.maxY; }
    onViewUpdate() { if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate)
        return; this.didViewUpdate = !0; const t = this.renderGroup || this.parentRenderGroup; t && t.onChildViewUpdate(this); }
    unload() { this.emit("unload", this); for (const t in this._gpuData)
        this._gpuData[t]?.destroy(); this._gpuData = Object.create(null), this.onViewUpdate(); }
    destroy(t) { this.unload(), super.destroy(t), this._bounds = null; }
    collectRenderablesSimple(t, e, i) { const { renderPipes: r } = e; r.blendMode.pushBlendMode(this, this.groupBlendMode, t), r[this.renderPipeId].addRenderable(this, t), this.didViewUpdate = !1; const o = this.children, h = o.length; for (let l = 0; l < h; l++)
        o[l].collectRenderables(t, e, i); r.blendMode.popBlendMode(t); }
}
exports.ViewContainer = Ao;
class ut extends Ao {
    constructor(t = it.EMPTY) { t instanceof it && (t = { texture: t }); const { texture: e = it.EMPTY, anchor: i, roundPixels: r, width: n, height: o, ...h } = t; super({ label: "Sprite", ...h }), this.renderPipeId = "sprite", this.batched = !0, this._visualBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, this._anchor = new Rt({ _onUpdate: () => { this.onViewUpdate(); } }), i ? this.anchor = i : e.defaultAnchor && (this.anchor = e.defaultAnchor), this.texture = e, this.allowChildren = !1, this.roundPixels = r ?? !1, n !== void 0 && (this.width = n), o !== void 0 && (this.height = o); }
    static from(t, e = !1) { return t instanceof it ? new ut(t) : new ut(it.from(t, e)); }
    set texture(t) { t || (t = it.EMPTY); const e = this._texture; e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate()); }
    get texture() { return this._texture; }
    get visualBounds() { return Uh(this._visualBounds, this._anchor, this._texture), this._visualBounds; }
    get sourceBounds() { return Z("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds; }
    updateBounds() { const t = this._anchor, e = this._texture, i = this._bounds, { width: r, height: n } = e.orig; i.minX = -t._x * r, i.maxX = i.minX + r, i.minY = -t._y * n, i.maxY = i.minY + n; }
    destroy(t = !1) { if (super.destroy(t), typeof t == "boolean" ? t : t?.texture) {
        const i = typeof t == "boolean" ? t : t?.textureSource;
        this._texture.destroy(i);
    } this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null; }
    get anchor() { return this._anchor; }
    set anchor(t) { typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t); }
    get width() { return Math.abs(this.scale.x) * this._texture.orig.width; }
    set width(t) { this._setWidth(t, this._texture.orig.width), this._width = t; }
    get height() { return Math.abs(this.scale.y) * this._texture.orig.height; }
    set height(t) { this._setHeight(t, this._texture.orig.height), this._height = t; }
    getSize(t) { return t || (t = {}), t.width = Math.abs(this.scale.x) * this._texture.orig.width, t.height = Math.abs(this.scale.y) * this._texture.orig.height, t; }
    setSize(t, e) { typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, this._texture.orig.width), e !== void 0 && this._setHeight(e, this._texture.orig.height); }
}
exports.N = ut;
exports.Sprite = ut;
const bl = new Zt;
function So(s, t, e) { const i = bl; s.measurable = !0, mo(s, e, i), t.addBoundsMask(i), s.measurable = !1; }
function Co(s, t, e) { const i = ae.get(); s.measurable = !0; const r = Ot.get().identity(), n = Mo(s, e, r); bo(s, i, n), s.measurable = !1, t.addBoundsMask(i), Ot.return(r), ae.return(i); }
function Mo(s, t, e) { return s ? (s !== t && (Mo(s.parent, t, e), s.updateLocalTransform(), e.append(s.localTransform)), e) : (yt("Mask bounds, renderable is not inside the root container"), e); }
class Po {
    constructor(t) { this.priority = 0, this.inverse = !1, this.pipe = "alphaMask", t?.mask && this.init(t.mask); }
    init(t) { this.mask = t, this.renderMaskToTexture = !(t instanceof ut), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1; }
    reset() { this.mask !== null && (this.mask.measurable = !0, this.mask = null); }
    addBounds(t, e) { this.inverse || So(this.mask, t, e); }
    addLocalBounds(t, e) { Co(this.mask, t, e); }
    containsPoint(t, e) { const i = this.mask; return e(i, t); }
    destroy() { this.reset(); }
    static test(t) { return t instanceof ut; }
}
Po.extension = H.MaskEffect;
class To {
    constructor(t) { this.priority = 0, this.pipe = "colorMask", t?.mask && this.init(t.mask); }
    init(t) { this.mask = t; }
    destroy() { }
    static test(t) { return typeof t == "number"; }
}
To.extension = H.MaskEffect;
class Io {
    constructor(t) { this.priority = 0, this.pipe = "stencilMask", t?.mask && this.init(t.mask); }
    init(t) { this.mask = t, this.mask.includeInBuild = !1, this.mask.measurable = !1; }
    reset() { this.mask !== null && (this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null); }
    addBounds(t, e) { So(this.mask, t, e); }
    addLocalBounds(t, e) { Co(this.mask, t, e); }
    containsPoint(t, e) { const i = this.mask; return e(i, t); }
    destroy() { this.reset(); }
    static test(t) { return t instanceof Q; }
}
Io.extension = H.MaskEffect;
const vl = { createCanvas: (s, t) => { const e = document.createElement("canvas"); return e.width = s, e.height = t, e; }, createImage: () => new Image, getCanvasRenderingContext2D: () => CanvasRenderingContext2D, getWebGLRenderingContext: () => WebGLRenderingContext, getNavigator: () => navigator, getBaseUrl: () => document.baseURI ?? window.location.href, getFontFaceSet: () => document.fonts, fetch: (s, t) => fetch(s, t), parseXML: s => new DOMParser().parseFromString(s, "text/xml") };
let rn = vl;
const xt = { get() { return rn; }, set(s) { rn = s; } };
exports.D = xt;
class zo extends qt {
    constructor(t) { t.resource || (t.resource = xt.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity, this.resizeCanvas(), this.transparent = !!t.transparent; }
    resizeCanvas() { this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight); }
    resize(t = this.width, e = this.height, i = this._resolution) { const r = super.resize(t, e, i); return r && this.resizeCanvas(), r; }
    static test(t) { return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas; }
    get context2D() { return this._context2D || (this._context2D = this.resource.getContext("2d")); }
}
exports.j = zo;
zo.extension = H.TextureSource;
class Ae extends qt {
    constructor(t) { super(t), this.uploadMethodId = "image", this.autoGarbageCollect = !0; }
    static test(t) { return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame; }
}
Ae.extension = H.TextureSource;
var Vs = (s => (s[s.INTERACTION = 50] = "INTERACTION", s[s.HIGH = 25] = "HIGH", s[s.NORMAL = 0] = "NORMAL", s[s.LOW = -25] = "LOW", s[s.UTILITY = -50] = "UTILITY", s))(Vs || {});
exports.U = Vs;
class ps {
    constructor(t, e = null, i = 0, r = !1) { this.next = null, this.previous = null, this._destroyed = !1, this._fn = t, this._context = e, this.priority = i, this._once = r; }
    match(t, e = null) { return this._fn === t && this._context === e; }
    emit(t) { this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t)); const e = this.next; return this._once && this.destroy(!0), this._destroyed && (this.next = null), e; }
    connect(t) { this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this; }
    destroy(t = !1) { this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous); const e = this.next; return this.next = t ? null : e, this.previous = null, e; }
}
const Eo = class Nt {
    constructor() { this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new ps(null, null, 1 / 0), this.deltaMS = 1 / Nt.targetFPMS, this.elapsedMS = 1 / Nt.targetFPMS, this._tick = t => { this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick))); }; }
    _requestIfNeeded() { this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick)); }
    _cancelIfNeeded() { this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null); }
    _startIfPossible() { this.started ? this._requestIfNeeded() : this.autoStart && this.start(); }
    add(t, e, i = Vs.NORMAL) { return this._addListener(new ps(t, e, i)); }
    addOnce(t, e, i = Vs.NORMAL) { return this._addListener(new ps(t, e, i, !0)); }
    _addListener(t) { let e = this._head.next, i = this._head; if (!e)
        t.connect(i);
    else {
        for (; e;) {
            if (t.priority > e.priority) {
                t.connect(i);
                break;
            }
            i = e, e = e.next;
        }
        t.previous || t.connect(i);
    } return this._startIfPossible(), this; }
    remove(t, e) { let i = this._head.next; for (; i;)
        i.match(t, e) ? i = i.destroy() : i = i.next; return this._head.next || this._cancelIfNeeded(), this; }
    get count() { if (!this._head)
        return 0; let t = 0, e = this._head; for (; e = e.next;)
        t++; return t; }
    start() { this.started || (this.started = !0, this._requestIfNeeded()); }
    stop() { this.started && (this.started = !1, this._cancelIfNeeded()); }
    destroy() { if (!this._protected) {
        this.stop();
        let t = this._head.next;
        for (; t;)
            t = t.destroy(!0);
        this._head.destroy(), this._head = null;
    } }
    update(t = performance.now()) { let e; if (t > this.lastTime) {
        if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
            const n = t - this._lastFrame | 0;
            if (n < this._minElapsedMS)
                return;
            this._lastFrame = t - n % this._minElapsedMS;
        }
        this.deltaMS = e, this.deltaTime = this.deltaMS * Nt.targetFPMS;
        const i = this._head;
        let r = i.next;
        for (; r;)
            r = r.emit(this);
        i.next || this._cancelIfNeeded();
    }
    else
        this.deltaTime = this.deltaMS = this.elapsedMS = 0; this.lastTime = t; }
    get FPS() { return 1e3 / this.elapsedMS; }
    get minFPS() { return 1e3 / this._maxElapsedMS; }
    set minFPS(t) { const e = Math.min(this.maxFPS, t), i = Math.min(Math.max(0, e) / 1e3, Nt.targetFPMS); this._maxElapsedMS = 1 / i; }
    get maxFPS() { return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0; }
    set maxFPS(t) { if (t === 0)
        this._minElapsedMS = 0;
    else {
        const e = Math.max(this.minFPS, t);
        this._minElapsedMS = 1 / (e / 1e3);
    } }
    static get shared() { if (!Nt._shared) {
        const t = Nt._shared = new Nt;
        t.autoStart = !0, t._protected = !0;
    } return Nt._shared; }
    static get system() { if (!Nt._system) {
        const t = Nt._system = new Nt;
        t.autoStart = !0, t._protected = !0;
    } return Nt._system; }
};
Eo.targetFPMS = .06;
let bi = Eo, gs;
exports.T = bi;
async function Ro() { return gs ?? (gs = (async () => { const t = xt.get().createCanvas(1, 1).getContext("webgl"); if (!t)
    return "premultiply-alpha-on-upload"; const e = await new Promise(o => { const h = document.createElement("video"); h.onloadeddata = () => o(h), h.onerror = () => o(null), h.autoplay = !1, h.crossOrigin = "anonymous", h.preload = "auto", h.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", h.load(); }); if (!e)
    return "premultiply-alpha-on-upload"; const i = t.createTexture(); t.bindTexture(t.TEXTURE_2D, i); const r = t.createFramebuffer(); t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e); const n = new Uint8Array(4); return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(r), t.deleteTexture(i), t.getExtension("WEBGL_lose_context")?.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload"; })()), gs; }
const Vi = class Fo extends qt {
    constructor(t) { super(t), this.isReady = !1, this.uploadMethodId = "video", t = { ...Fo.defaultOptions, ...t }, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== !1 && this.load(); }
    updateFrame() { if (!this.destroyed) {
        if (this._updateFPS) {
            const t = bi.shared.elapsedMS * this.resource.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
        }
        (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
    } }
    _videoFrameRequestCallback() { this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback); }
    get isValid() { return !!this.resource.videoWidth && !!this.resource.videoHeight; }
    async load() { if (this._load)
        return this._load; const t = this.resource, e = this.options; return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, !0)), this.alphaMode = await Ro(), this._load = new Promise((i, r) => { this.isValid ? i(this) : (this._resolve = i, this._reject = r, e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout(() => { this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`)); })), t.load()); }), this._load; }
    _onError(t) { this.resource.removeEventListener("error", this._onError, !0), this.emit("error", t), this._reject && (this._reject(t), this._reject = null, this._resolve = null); }
    _isSourcePlaying() { const t = this.resource; return !t.paused && !t.ended; }
    _isSourceReady() { return this.resource.readyState > 2; }
    _onPlayStart() { this.isValid || this._mediaReady(), this._configureAutoUpdate(); }
    _onPlayStop() { this._configureAutoUpdate(); }
    _onSeeked() { this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0); }
    _onCanPlay() { this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady(); }
    _onCanPlayThrough() { this.resource.removeEventListener("canplaythrough", this._onCanPlay), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady(); }
    _mediaReady() { const t = this.resource; this.isValid && (this.isReady = !0, this.resize(t.videoWidth, t.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play(); }
    destroy() { this._configureAutoUpdate(); const t = this.resource; t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlayThrough), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.destroy(); }
    get autoUpdate() { return this._autoUpdate; }
    set autoUpdate(t) { t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate()); }
    get updateFPS() { return this._updateFPS; }
    set updateFPS(t) { t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate()); }
    _configureAutoUpdate() { this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (bi.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (bi.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (bi.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0)); }
    static test(t) { return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement; }
};
Vi.extension = H.TextureSource;
Vi.defaultOptions = { ...qt.defaultOptions, autoLoad: !0, autoPlay: !0, updateFPS: 0, crossorigin: !0, loop: !1, muted: !0, playsinline: !0, preload: !1 };
Vi.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" };
let ti = Vi;
const Kt = (s, t, e = !1) => (Array.isArray(s) || (s = [s]), t ? s.map(i => typeof i == "string" || e ? t(i) : i) : s);
class wl {
    constructor() { this._parsers = [], this._cache = new Map, this._cacheMap = new Map; }
    reset() { this._cacheMap.clear(), this._cache.clear(); }
    has(t) { return this._cache.has(t); }
    get(t) { const e = this._cache.get(t); return e || yt(`[Assets] Asset id ${t} was not found in the Cache`), e; }
    set(t, e) { const i = Kt(t); let r; for (let l = 0; l < this.parsers.length; l++) {
        const c = this.parsers[l];
        if (c.test(e)) {
            r = c.getCacheableAssets(i, e);
            break;
        }
    } const n = new Map(Object.entries(r || {})); r || i.forEach(l => { n.set(l, e); }); const o = [...n.keys()], h = { cacheKeys: o, keys: i }; i.forEach(l => { this._cacheMap.set(l, h); }), o.forEach(l => { const c = r ? r[l] : e; this._cache.has(l) && this._cache.get(l) !== c && yt("[Cache] already has key:", l), this._cache.set(l, n.get(l)); }); }
    remove(t) { if (!this._cacheMap.has(t)) {
        yt(`[Assets] Asset id ${t} was not found in the Cache`);
        return;
    } const e = this._cacheMap.get(t); e.cacheKeys.forEach(r => { this._cache.delete(r); }), e.keys.forEach(r => { this._cacheMap.delete(r); }); }
    get parsers() { return this._parsers; }
}
const mt = new wl, Xs = [];
exports.ap = mt;
Et.handleByList(H.TextureSource, Xs);
function Bo(s = {}) { const t = s && s.resource, e = t ? s.resource : s, i = t ? s : { resource: s }; for (let r = 0; r < Xs.length; r++) {
    const n = Xs[r];
    if (n.test(e))
        return new n(i);
} throw new Error(`Could not find a source type for resource: ${i.resource}`); }
function kl(s = {}, t = !1) { const e = s && s.resource, i = e ? s.resource : s, r = e ? s : { resource: s }; if (!t && mt.has(i))
    return mt.get(i); const n = new it({ source: Bo(r) }); return n.on("destroy", () => { mt.has(i) && mt.remove(i); }), t || mt.set(i, n), n; }
function Al(s, t = !1) { return typeof s == "string" ? mt.get(s) : s instanceof qt ? new it({ source: s }) : kl(s, t); }
it.from = Al;
qt.from = Bo;
Et.add(Po, To, Io, ti, Ae, zo, gr);
var pe = (s => (s[s.Low = 0] = "Low", s[s.Normal = 1] = "Normal", s[s.High = 2] = "High", s))(pe || {});
function $t(s) { if (typeof s != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(s)}`); }
function We(s) { return s.split("?")[0].split("#")[0]; }
function Sl(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\/* PIXI */"); }
function Cl(s, t, e) { return s.replace(new RegExp(Sl(t), "g"), e); }
function Ml(s, t) { let e = "", i = 0, r = -1, n = 0, o = -1; for (let h = 0; h <= s.length; ++h) {
    if (h < s.length)
        o = s.charCodeAt(h);
    else {
        if (o === 47)
            break;
        o = 47;
    }
    if (o === 47) {
        if (!(r === h - 1 || n === 1))
            if (r !== h - 1 && n === 2) {
                if (e.length < 2 || i !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                    if (e.length > 2) {
                        const l = e.lastIndexOf("/");
                        if (l !== e.length - 1) {
                            l === -1 ? (e = "", i = 0) : (e = e.slice(0, l), i = e.length - 1 - e.lastIndexOf("/")), r = h, n = 0;
                            continue;
                        }
                    }
                    else if (e.length === 2 || e.length === 1) {
                        e = "", i = 0, r = h, n = 0;
                        continue;
                    }
                }
            }
            else
                e.length > 0 ? e += `/${s.slice(r + 1, h)}` : e = s.slice(r + 1, h), i = h - r - 1;
        r = h, n = 0;
    }
    else
        o === 46 && n !== -1 ? ++n : n = -1;
} return e; }
const Vt = { toPosix(s) { return Cl(s, "\\", "/"); }, isUrl(s) { return /^https?:/.test(this.toPosix(s)); }, isDataUrl(s) { return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!/* PIXI */',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(s); }, isBlobUrl(s) { return s.startsWith("blob:"); }, hasProtocol(s) { return /^[^/:]+:/.test(this.toPosix(s)); }, getProtocol(s) { $t(s), s = this.toPosix(s); const t = /^file:\/\/\//.exec(s); if (t)
        return t[0]; const e = /^[^/:]+:\/{0,2}/.exec(s); return e ? e[0] : ""; }, toAbsolute(s, t, e) { if ($t(s), this.isDataUrl(s) || this.isBlobUrl(s))
        return s; const i = We(this.toPosix(t ?? xt.get().getBaseUrl())), r = We(this.toPosix(e ?? this.rootname(i))); return s = this.toPosix(s), s.startsWith("/") ? Vt.join(r, s.slice(1)) : this.isAbsolute(s) ? s : this.join(i, s); }, normalize(s) { if ($t(s), s.length === 0)
        return "."; if (this.isDataUrl(s) || this.isBlobUrl(s))
        return s; s = this.toPosix(s); let t = ""; const e = s.startsWith("/"); this.hasProtocol(s) && (t = this.rootname(s), s = s.slice(t.length)); const i = s.endsWith("/"); return s = Ml(s), s.length > 0 && i && (s += "/"), e ? `/${s}` : t + s; }, isAbsolute(s) { return $t(s), s = this.toPosix(s), this.hasProtocol(s) ? !0 : s.startsWith("/"); }, join(...s) { if (s.length === 0)
        return "."; let t; for (let e = 0; e < s.length; ++e) {
        const i = s[e];
        if ($t(i), i.length > 0)
            if (t === void 0)
                t = i;
            else {
                const r = s[e - 1] ?? "";
                this.joinExtensions.includes(this.extname(r).toLowerCase()) ? t += `/../${i}` : t += `/${i}`;
            }
    } return t === void 0 ? "." : this.normalize(t); }, dirname(s) { if ($t(s), s.length === 0)
        return "."; s = this.toPosix(s); let t = s.charCodeAt(0); const e = t === 47; let i = -1, r = !0; const n = this.getProtocol(s), o = s; s = s.slice(n.length); for (let h = s.length - 1; h >= 1; --h)
        if (t = s.charCodeAt(h), t === 47) {
            if (!r) {
                i = h;
                break;
            }
        }
        else
            r = !1; return i === -1 ? e ? "/" : this.isUrl(o) ? n + s : n : e && i === 1 ? "//" : n + s.slice(0, i); }, rootname(s) { $t(s), s = this.toPosix(s); let t = ""; if (s.startsWith("/") ? t = "/" : t = this.getProtocol(s), this.isUrl(s)) {
        const e = s.indexOf("/", t.length);
        e !== -1 ? t = s.slice(0, e) : t = s, t.endsWith("/") || (t += "/");
    } return t; }, basename(s, t) { $t(s), t && $t(t), s = We(this.toPosix(s)); let e = 0, i = -1, r = !0, n; if (t !== void 0 && t.length > 0 && t.length <= s.length) {
        if (t.length === s.length && t === s)
            return "";
        let o = t.length - 1, h = -1;
        for (n = s.length - 1; n >= 0; --n) {
            const l = s.charCodeAt(n);
            if (l === 47) {
                if (!r) {
                    e = n + 1;
                    break;
                }
            }
            else
                h === -1 && (r = !1, h = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = h));
        }
        return e === i ? i = h : i === -1 && (i = s.length), s.slice(e, i);
    } for (n = s.length - 1; n >= 0; --n)
        if (s.charCodeAt(n) === 47) {
            if (!r) {
                e = n + 1;
                break;
            }
        }
        else
            i === -1 && (r = !1, i = n + 1); return i === -1 ? "" : s.slice(e, i); }, extname(s) { $t(s), s = We(this.toPosix(s)); let t = -1, e = 0, i = -1, r = !0, n = 0; for (let o = s.length - 1; o >= 0; --o) {
        const h = s.charCodeAt(o);
        if (h === 47) {
            if (!r) {
                e = o + 1;
                break;
            }
            continue;
        }
        i === -1 && (r = !1, i = o + 1), h === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    } return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === e + 1 ? "" : s.slice(t, i); }, parse(s) { $t(s); const t = { root: "", dir: "", base: "", ext: "", name: "" }; if (s.length === 0)
        return t; s = We(this.toPosix(s)); let e = s.charCodeAt(0); const i = this.isAbsolute(s); let r; t.root = this.rootname(s), i || this.hasProtocol(s) ? r = 1 : r = 0; let n = -1, o = 0, h = -1, l = !0, c = s.length - 1, u = 0; for (; c >= r; --c) {
        if (e = s.charCodeAt(c), e === 47) {
            if (!l) {
                o = c + 1;
                break;
            }
            continue;
        }
        h === -1 && (l = !1, h = c + 1), e === 46 ? n === -1 ? n = c : u !== 1 && (u = 1) : n !== -1 && (u = -1);
    } return n === -1 || h === -1 || u === 0 || u === 1 && n === h - 1 && n === o + 1 ? h !== -1 && (o === 0 && i ? t.base = t.name = s.slice(1, h) : t.base = t.name = s.slice(o, h)) : (o === 0 && i ? (t.name = s.slice(1, n), t.base = s.slice(1, h)) : (t.name = s.slice(o, n), t.base = s.slice(o, h)), t.ext = s.slice(n, h)), t.dir = this.dirname(s), t; }, sep: "/", delimiter: ":", joinExtensions: [".html"] };
function Lo(s, t, e, i, r) { const n = t[e]; for (let o = 0; o < n.length; o++) {
    const h = n[o];
    e < t.length - 1 ? Lo(s.replace(i[e], h), t, e + 1, i, r) : r.push(s.replace(i[e], h));
} }
function Pl(s) { const t = /\{(.*?)\}/g, e = s.match(t), i = []; if (e) {
    const r = [];
    e.forEach(n => { const o = n.substring(1, n.length - 1).split(","); r.push(o); }), Lo(s, r, 0, e, i);
}
else
    i.push(s); return i; }
const Ui = s => !Array.isArray(s);
class Ge {
    constructor() { this._defaultBundleIdentifierOptions = { connector: "-", createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`, extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "") }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {}; }
    setBundleIdentifier(t) { if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
        throw new Error("[Resolver] GenerateBundleAssetId are not working correctly"); }
    prefer(...t) { t.forEach(e => { this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params)); }), this._resolverHash = {}; }
    set basePath(t) { this._basePath = t; }
    get basePath() { return this._basePath; }
    set rootPath(t) { this._rootPath = t; }
    get rootPath() { return this._rootPath; }
    get parsers() { return this._parsers; }
    reset() { this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null; }
    setDefaultSearchParams(t) { if (typeof t == "string")
        this._defaultSearchParams = t;
    else {
        const e = t;
        this._defaultSearchParams = Object.keys(e).map(i => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&");
    } }
    getAlias(t) { const { alias: e, src: i } = t; return Kt(e || i, n => typeof n == "string" ? n : Array.isArray(n) ? n.map(o => o?.src ?? o) : n?.src ? n.src : n, !0); }
    addManifest(t) { this._manifest && yt("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach(e => { this.addBundle(e.name, e.assets); }); }
    addBundle(t, e) { const i = []; let r = e; Array.isArray(e) || (r = Object.entries(e).map(([n, o]) => typeof o == "string" || Array.isArray(o) ? { alias: n, src: o } : { alias: n, ...o })), r.forEach(n => { const o = n.src, h = n.alias; let l; if (typeof h == "string") {
        const c = this._createBundleAssetId(t, h);
        i.push(c), l = [h, c];
    }
    else {
        const c = h.map(u => this._createBundleAssetId(t, u));
        i.push(...c), l = [...h, ...c];
    } this.add({ ...n, alias: l, src: o }); }), this._bundles[t] = i; }
    add(t) { const e = []; Array.isArray(t) ? e.push(...t) : e.push(t); let i; i = n => { this.hasKey(n) && yt(`[Resolver] already has key: ${n} overwriting`); }, Kt(e).forEach(n => { const { src: o } = n; let { data: h, format: l, loadParser: c, parser: u } = n; const d = Kt(o).map(m => typeof m == "string" ? Pl(m) : Array.isArray(m) ? m : [m]), f = this.getAlias(n); Array.isArray(f) ? f.forEach(i) : i(f); const _ = [], p = m => ({ ...this._parsers.find(y => y.test(m))?.parse(m), src: m }); d.forEach(m => { m.forEach(g => { let y = {}; if (typeof g != "object" ? y = p(g) : (h = g.data ?? h, l = g.format ?? l, (g.loadParser || g.parser) && (c = g.loadParser ?? c, u = g.parser ?? u), y = { ...p(g.src), ...g }), !f)
        throw new Error(`[Resolver] alias is undefined for this asset: ${y.src}`); y = this._buildResolvedAsset(y, { aliases: f, data: h, format: l, loadParser: c, parser: u, progressSize: n.progressSize }), _.push(y); }); }), f.forEach(m => { this._assetMap[m] = _; }); }); }
    resolveBundle(t) { const e = Ui(t); t = Kt(t); const i = {}; return t.forEach(r => { const n = this._bundles[r]; if (n) {
        const o = this.resolve(n), h = {};
        for (const l in o) {
            const c = o[l];
            h[this._extractAssetIdFromBundle(r, l)] = c;
        }
        i[r] = h;
    } }), e ? i[t[0]] : i; }
    resolveUrl(t) { const e = this.resolve(t); if (typeof t != "string") {
        const i = {};
        for (const r in e)
            i[r] = e[r].src;
        return i;
    } return e.src; }
    resolve(t) { const e = Ui(t); t = Kt(t); const i = {}; return t.forEach(r => { if (!this._resolverHash[r])
        if (this._assetMap[r]) {
            let n = this._assetMap[r];
            const o = this._getPreferredOrder(n);
            o?.priority.forEach(h => { o.params[h].forEach(l => { const c = n.filter(u => u[h] ? u[h] === l : !1); c.length && (n = c); }); }), this._resolverHash[r] = n[0];
        }
        else
            this._resolverHash[r] = this._buildResolvedAsset({ alias: [r], src: r }, {}); i[r] = this._resolverHash[r]; }), e ? i[t[0]] : i; }
    hasKey(t) { return !!this._assetMap[t]; }
    hasBundle(t) { return !!this._bundles[t]; }
    _getPreferredOrder(t) { for (let e = 0; e < t.length; e++) {
        const i = t[e], r = this._preferredOrder.find(n => n.params.format.includes(i.format));
        if (r)
            return r;
    } return this._preferredOrder[0]; }
    _appendDefaultSearchParams(t) { if (!this._defaultSearchParams)
        return t; const e = /\?/.test(t) ? "&" : "?"; return `${t}${e}${this._defaultSearchParams}`; }
    _buildResolvedAsset(t, e) { const { aliases: i, data: r, loadParser: n, parser: o, format: h, progressSize: l } = e; return (this._basePath || this._rootPath) && (t.src = Vt.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = i ?? t.alias ?? [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = { ...r || {}, ...t.data }, t.loadParser = n ?? t.loadParser, t.parser = o ?? t.parser, t.format = h ?? t.format ?? Tl(t.src), l !== void 0 && (t.progressSize = l), t; }
}
Ge.RETINA_PREFIX = /@([0-9\.]+)x/;
function Tl(s) { return s.split(".").pop().split("?").shift().split("#").shift(); }
const Ys = (s, t) => { const e = t.split("?")[1]; return e && (s += `?${e}`), s; }, Oo = class Ke {
    constructor(t, e) { this.linkedSheets = []; let i = t; t?.source instanceof qt && (i = { texture: t, data: e }); const { texture: r, data: n, cachePrefix: o = "" } = i; this.cachePrefix = o, this._texture = r instanceof it ? r : null, this.textureSource = r.source, this.textures = {}, this.animations = {}, this.data = n; const h = parseFloat(n.meta.scale); h ? (this.resolution = h, r.source.resolution = this.resolution) : this.resolution = r.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null; }
    parse() { return new Promise(t => { this._callback = t, this._batchIndex = 0, this._frameKeys.length <= Ke.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch(); }); }
    _processFrames(t) { let e = t; const i = Ke.BATCH_SIZE; for (; e - t < i && e < this._frameKeys.length;) {
        const r = this._frameKeys[e], n = this._frames[r], o = n.frame;
        if (o) {
            let h = null, l = null;
            const c = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame, u = new pt(0, 0, Math.floor(c.w) / this.resolution, Math.floor(c.h) / this.resolution);
            n.rotated ? h = new pt(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : h = new pt(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), n.trimmed !== !1 && n.spriteSourceSize && (l = new pt(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[r] = new it({ source: this.textureSource, frame: h, orig: u, trim: l, rotate: n.rotated ? 2 : 0, defaultAnchor: n.anchor, defaultBorders: n.borders, label: r.toString() });
        }
        e++;
    } }
    _processAnimations() { const t = this.data.animations || {}; for (const e in t) {
        this.animations[e] = [];
        for (let i = 0; i < t[e].length; i++) {
            const r = t[e][i];
            this.animations[e].push(this.textures[r]);
        }
    } }
    _parseComplete() { const t = this._callback; this._callback = null, this._batchIndex = 0, t.call(this, this.textures); }
    _nextBatch() { this._processFrames(this._batchIndex * Ke.BATCH_SIZE), this._batchIndex++, setTimeout(() => { this._batchIndex * Ke.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete()); }, 0); }
    destroy(t = !1) { for (const e in this.textures)
        this.textures[e].destroy(); this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (this._texture?.destroy(), this.textureSource.destroy()), this._texture = null, this.textureSource = null, this.linkedSheets = []; }
};
Oo.BATCH_SIZE = 1e3;
let nn = Oo;
const Il = ["jpg", "png", "jpeg", "avif", "webp", "basis", "etc2", "bc7", "bc6h", "bc5", "bc4", "bc3", "bc2", "bc1", "eac", "astc"];
function Go(s, t, e) { const i = {}; if (s.forEach(r => { i[r] = t; }), Object.keys(t.textures).forEach(r => { i[`${t.cachePrefix}${r}`] = t.textures[r]; }), !e) {
    const r = Vt.dirname(s[0]);
    t.linkedSheets.forEach((n, o) => { const h = Go([`${r}/${t.data.meta.related_multi_packs[o]}`], n, !0); Object.assign(i, h); });
} return i; }
const zl = { extension: H.Asset, cache: { test: s => s instanceof nn, getCacheableAssets: (s, t) => Go(s, t, !1) }, resolver: { extension: { type: H.ResolveParser, name: "resolveSpritesheet" }, test: s => { const e = s.split("?")[0].split("."), i = e.pop(), r = e.pop(); return i === "json" && Il.includes(r); }, parse: s => { const t = s.split("."); return { resolution: parseFloat(Ge.RETINA_PREFIX.exec(s)?.[1] ?? "1"), format: t[t.length - 2], src: s }; } }, loader: { name: "spritesheetLoader", id: "spritesheet", extension: { type: H.LoadParser, priority: pe.Normal, name: "spritesheetLoader" }, async testParse(s, t) { return Vt.extname(t.src).toLowerCase() === ".json" && !!s.frames; }, async parse(s, t, e) { const { texture: i, imageFilename: r, textureOptions: n, cachePrefix: o } = t?.data ?? {}; let h = Vt.dirname(t.src); h && h.lastIndexOf("/") !== h.length - 1 && (h += "/"); let l; if (i instanceof it)
            l = i;
        else {
            const d = Ys(h + (r ?? s.meta.image), t.src);
            l = (await e.load([{ src: d, data: n }]))[d];
        } const c = new nn({ texture: l.source, data: s, cachePrefix: o }); await c.parse(); const u = s?.meta?.related_multi_packs; if (Array.isArray(u)) {
            const d = [];
            for (const _ of u) {
                if (typeof _ != "string")
                    continue;
                let p = h + _;
                t.data?.ignoreMultiPack || (p = Ys(p, t.src), d.push(e.load({ src: p, data: { textureOptions: n, ignoreMultiPack: !0 } })));
            }
            const f = await Promise.all(d);
            c.linkedSheets = f, f.forEach(_ => { _.linkedSheets = [c].concat(c.linkedSheets.filter(p => p !== _)); });
        } return c; }, async unload(s, t, e) { await e.unload(s.textureSource._sourceOrigin), s.destroy(!1); } } };
Et.add(zl);
const ms = Object.create(null), on = Object.create(null);
function yr(s, t) { let e = on[s]; return e === void 0 && (ms[t] === void 0 && (ms[t] = 1), on[s] = e = ms[t]++), e; }
let vi;
function Do() { return (!vi || vi?.isContextLost()) && (vi = xt.get().createCanvas().getContext("webgl", {})), vi; }
let wi;
function El() { if (!wi) {
    wi = "mediump";
    const s = Do();
    s && s.getShaderPrecisionFormat && (wi = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision ? "highp" : "mediump");
} return wi; }
function Rl(s, t, e) {
    return t ? s : e ? (s = s.replace("out vec4 finalColor;", ""), `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${s}
        `) : `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${s}
        `;
}
function Fl(s, t, e) {
    const i = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
    if (s.substring(0, 9) !== "precision") {
        let r = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
        return r === "highp" && i !== "highp" && (r = "mediump"), `precision ${r} float;
${s}`;
    }
    else if (i !== "highp" && s.substring(0, 15) === "precision highp")
        return s.replace("precision highp", "precision mediump");
    return s;
}
function Bl(s, t) {
    return t ? `#version 300 es
${s}` : s;
}
const Ll = {}, Ol = {};
function Gl(s, { name: t = "pixi-program" }, e = !0) {
    t = t.replace(/\s+/g, "-"), t += e ? "-fragment" : "-vertex";
    const i = e ? Ll : Ol;
    return i[t] ? (i[t]++, t += `-${i[t]}`) : i[t] = 1, s.indexOf("#define SHADER_NAME") !== -1 ? s : `${`#define SHADER_NAME ${t}`}
${s}`;
}
function Dl(s, t) { return t ? s.replace("#version 300 es", "") : s; }
const ys = { stripVersion: Dl, ensurePrecision: Fl, addProgramDefines: Rl, setProgramName: Gl, insertVersion: Bl }, He = Object.create(null), Uo = class js {
    constructor(t) { t = { ...js.defaultOptions, ...t }; const e = t.fragment.indexOf("#version 300 es") !== -1, i = { stripVersion: e, ensurePrecision: { requestedFragmentPrecision: t.preferredFragmentPrecision, requestedVertexPrecision: t.preferredVertexPrecision, maxSupportedVertexPrecision: "highp", maxSupportedFragmentPrecision: El() }, setProgramName: { name: t.name }, addProgramDefines: e, insertVersion: e }; let r = t.fragment, n = t.vertex; Object.keys(ys).forEach(o => { const h = i[o]; r = ys[o](r, h, !0), n = ys[o](n, h, !1); }), this.fragment = r, this.vertex = n, this.transformFeedbackVaryings = t.transformFeedbackVaryings, this._key = yr(`${this.vertex}:${this.fragment}`, "gl-program"); }
    destroy() { this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null, He[this._cacheKey] = null; }
    static from(t) { const e = `${t.vertex}:${t.fragment}`; return He[e] || (He[e] = new js(t), He[e]._cacheKey = e), He[e]; }
};
Uo.defaultOptions = { preferredVertexPrecision: "highp", preferredFragmentPrecision: "mediump" };
let Le = Uo;
exports.y = Le;
const an = { uint8x2: { size: 2, stride: 2, normalised: !1 }, uint8x4: { size: 4, stride: 4, normalised: !1 }, sint8x2: { size: 2, stride: 2, normalised: !1 }, sint8x4: { size: 4, stride: 4, normalised: !1 }, unorm8x2: { size: 2, stride: 2, normalised: !0 }, unorm8x4: { size: 4, stride: 4, normalised: !0 }, snorm8x2: { size: 2, stride: 2, normalised: !0 }, snorm8x4: { size: 4, stride: 4, normalised: !0 }, uint16x2: { size: 2, stride: 4, normalised: !1 }, uint16x4: { size: 4, stride: 8, normalised: !1 }, sint16x2: { size: 2, stride: 4, normalised: !1 }, sint16x4: { size: 4, stride: 8, normalised: !1 }, unorm16x2: { size: 2, stride: 4, normalised: !0 }, unorm16x4: { size: 4, stride: 8, normalised: !0 }, snorm16x2: { size: 2, stride: 4, normalised: !0 }, snorm16x4: { size: 4, stride: 8, normalised: !0 }, float16x2: { size: 2, stride: 4, normalised: !1 }, float16x4: { size: 4, stride: 8, normalised: !1 }, float32: { size: 1, stride: 4, normalised: !1 }, float32x2: { size: 2, stride: 8, normalised: !1 }, float32x3: { size: 3, stride: 12, normalised: !1 }, float32x4: { size: 4, stride: 16, normalised: !1 }, uint32: { size: 1, stride: 4, normalised: !1 }, uint32x2: { size: 2, stride: 8, normalised: !1 }, uint32x3: { size: 3, stride: 12, normalised: !1 }, uint32x4: { size: 4, stride: 16, normalised: !1 }, sint32: { size: 1, stride: 4, normalised: !1 }, sint32x2: { size: 2, stride: 8, normalised: !1 }, sint32x3: { size: 3, stride: 12, normalised: !1 }, sint32x4: { size: 4, stride: 16, normalised: !1 } };
function Ul(s) { return an[s] ?? an.float32; }
const Nl = { f32: "float32", "vec2<f32>": "float32x2", "vec3<f32>": "float32x3", "vec4<f32>": "float32x4", vec2f: "float32x2", vec3f: "float32x3", vec4f: "float32x4", i32: "sint32", "vec2<i32>": "sint32x2", "vec3<i32>": "sint32x3", "vec4<i32>": "sint32x4", u32: "uint32", "vec2<u32>": "uint32x2", "vec3<u32>": "uint32x3", "vec4<u32>": "uint32x4", bool: "uint32", "vec2<bool>": "uint32x2", "vec3<bool>": "uint32x3", "vec4<bool>": "uint32x4" };
function Wl({ source: s, entryPoint: t }) { const e = {}, i = s.indexOf(`fn ${t}`); if (i !== -1) {
    const r = s.indexOf("->", i);
    if (r !== -1) {
        const n = s.substring(i, r), o = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
        let h;
        for (; (h = o.exec(n)) !== null;) {
            const l = Nl[h[3]] ?? "float32";
            e[h[2]] = { location: parseInt(h[1], 10), format: l, stride: Ul(l).stride, offset: 0, instance: !1, start: 0 };
        }
    }
} return e; }
function xs(s) { const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, e = /@group\((\d+)\)/, i = /@binding\((\d+)\)/, r = /var(<[^>]+>)? (\w+)/, n = /:\s*(\w+)/, o = /struct\s+(\w+)\s*{([^}]+)}/g, h = /(\w+)\s*:\s*([\w\<\>]+)/g, l = /struct\s+(\w+)/, c = s.match(t)?.map(d => ({ group: parseInt(d.match(e)[1], 10), binding: parseInt(d.match(i)[1], 10), name: d.match(r)[2], isUniform: d.match(r)[1] === "<uniform>", type: d.match(n)[1] })); if (!c)
    return { groups: [], structs: [] }; const u = s.match(o)?.map(d => { const f = d.match(l)[1], _ = d.match(h).reduce((p, m) => { const [g, y] = m.split(":"); return p[g.trim()] = y.trim(), p; }, {}); return _ ? { name: f, members: _ } : null; }).filter(({ name: d }) => c.some(f => f.type === d)) ?? []; return { groups: c, structs: u }; }
var Ze = (s => (s[s.VERTEX = 1] = "VERTEX", s[s.FRAGMENT = 2] = "FRAGMENT", s[s.COMPUTE = 4] = "COMPUTE", s))(Ze || {});
function Hl({ groups: s }) { const t = []; for (let e = 0; e < s.length; e++) {
    const i = s[e];
    t[i.group] || (t[i.group] = []), i.isUniform ? t[i.group].push({ binding: i.binding, visibility: Ze.VERTEX | Ze.FRAGMENT, buffer: { type: "uniform" } }) : i.type === "sampler" ? t[i.group].push({ binding: i.binding, visibility: Ze.FRAGMENT, sampler: { type: "filtering" } }) : i.type === "texture_2d" && t[i.group].push({ binding: i.binding, visibility: Ze.FRAGMENT, texture: { sampleType: "float", viewDimension: "2d", multisampled: !1 } });
} return t; }
function Vl({ groups: s }) { const t = []; for (let e = 0; e < s.length; e++) {
    const i = s[e];
    t[i.group] || (t[i.group] = {}), t[i.group][i.name] = i.binding;
} return t; }
function Xl(s, t) { const e = new Set, i = new Set, r = [...s.structs, ...t.structs].filter(o => e.has(o.name) ? !1 : (e.add(o.name), !0)), n = [...s.groups, ...t.groups].filter(o => { const h = `${o.name}-${o.binding}`; return i.has(h) ? !1 : (i.add(h), !0); }); return { structs: r, groups: n }; }
const Ve = Object.create(null);
class fe {
    constructor(t) { this._layoutKey = 0, this._attributeLocationsKey = 0; const { fragment: e, vertex: i, layout: r, gpuLayout: n, name: o } = t; if (this.name = o, this.fragment = e, this.vertex = i, e.source === i.source) {
        const h = xs(e.source);
        this.structsAndGroups = h;
    }
    else {
        const h = xs(i.source), l = xs(e.source);
        this.structsAndGroups = Xl(h, l);
    } this.layout = r ?? Vl(this.structsAndGroups), this.gpuLayout = n ?? Hl(this.structsAndGroups), this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0, this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0, this._generateProgramKey(); }
    _generateProgramKey() { const { vertex: t, fragment: e } = this, i = t.source + e.source + t.entryPoint + e.entryPoint; this._layoutKey = yr(i, "program"); }
    get attributeData() { return this._attributeData ?? (this._attributeData = Wl(this.vertex)), this._attributeData; }
    destroy() { this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null, Ve[this._cacheKey] = null; }
    static from(t) { const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`; return Ve[e] || (Ve[e] = new fe(t), Ve[e]._cacheKey = e), Ve[e]; }
}
exports.x = fe;
const No = ["f32", "i32", "vec2<f32>", "vec3<f32>", "vec4<f32>", "mat2x2<f32>", "mat3x3<f32>", "mat4x4<f32>", "mat3x2<f32>", "mat4x2<f32>", "mat2x3<f32>", "mat4x3<f32>", "mat2x4<f32>", "mat3x4<f32>", "vec2<i32>", "vec3<i32>", "vec4<i32>"], Yl = No.reduce((s, t) => (s[t] = !0, s), {});
function jl(s, t) { switch (s) {
    case "f32": return 0;
    case "vec2<f32>": return new Float32Array(2 * t);
    case "vec3<f32>": return new Float32Array(3 * t);
    case "vec4<f32>": return new Float32Array(4 * t);
    case "mat2x2<f32>": return new Float32Array([1, 0, 0, 1]);
    case "mat3x3<f32>": return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4x4<f32>": return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
} return null; }
const Wo = class Ho {
    constructor(t, e) { this._touched = 0, this.uid = At("uniform"), this._resourceType = "uniformGroup", this._resourceId = At("resource"), this.isUniformGroup = !0, this._dirtyId = 0, this.destroyed = !1, e = { ...Ho.defaultOptions, ...e }, this.uniformStructures = t; const i = {}; for (const r in t) {
        const n = t[r];
        if (n.name = r, n.size = n.size ?? 1, !Yl[n.type]) {
            const o = n.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
            if (o) {
                const [, h, l] = o;
                throw new Error(`Uniform type ${n.type} is not supported. Use type: '${h}', size: ${l} instead.`);
            }
            throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${No.join(", ")}`);
        }
        n.value ?? (n.value = jl(n.type, n.size)), i[r] = n.value;
    } this.uniforms = i, this._dirtyId = 1, this.ubo = e.ubo, this.isStatic = e.isStatic, this._signature = yr(Object.keys(i).map(r => `${r}-${t[r].type}`).join("-"), "uniform-group"); }
    update() { this._dirtyId++; }
};
Wo.defaultOptions = { ubo: !1, isStatic: !1 };
let Vo = Wo;
exports.l = Vo;
class Ei {
    constructor(t) { this.resources = Object.create(null), this._dirty = !0; let e = 0; for (const i in t) {
        const r = t[i];
        this.setResource(r, e++);
    } this._updateKey(); }
    _updateKey() { if (!this._dirty)
        return; this._dirty = !1; const t = []; let e = 0; for (const i in this.resources)
        t[e++] = this.resources[i]._resourceId; this._key = t.join("|"); }
    setResource(t, e) { const i = this.resources[e]; t !== i && (i && t.off?.("change", this.onResourceChange, this), t.on?.("change", this.onResourceChange, this), this.resources[e] = t, this._dirty = !0); }
    getResource(t) { return this.resources[t]; }
    _touch(t, e) { const i = this.resources; for (const r in i)
        i[r]._gcLastUsed = t, i[r]._touched = e; }
    destroy() { const t = this.resources; for (const e in t)
        t[e]?.off?.("change", this.onResourceChange, this); this.resources = null; }
    onResourceChange(t) { if (this._dirty = !0, t.destroyed) {
        const e = this.resources;
        for (const i in e)
            e[i] === t && (e[i] = null);
    }
    else
        this._updateKey(); }
}
exports.d = Ei;
var qs = (s => (s[s.WEBGL = 1] = "WEBGL", s[s.WEBGPU = 2] = "WEBGPU", s[s.BOTH = 3] = "BOTH", s))(qs || {});
exports.R = qs;
class Xi extends Qt {
    constructor(t) { super(), this.uid = At("shader"), this._uniformBindMap = Object.create(null), this._ownedBindGroups = [], this._destroyed = !1; let { gpuProgram: e, glProgram: i, groups: r, resources: n, compatibleRenderers: o, groupMap: h } = t; this.gpuProgram = e, this.glProgram = i, o === void 0 && (o = 0, e && (o |= qs.WEBGPU), i && (o |= qs.WEBGL)), this.compatibleRenderers = o; const l = {}; if (!n && !r && (n = {}), n && r)
        throw new Error("[Shader] Cannot have both resources and groups"); if (!e && r && !h)
        throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead."); if (!e && r && h)
        for (const c in h)
            for (const u in h[c]) {
                const d = h[c][u];
                l[d] = { group: c, binding: u, name: d };
            }
    else if (e && r && !h) {
        const c = e.structsAndGroups.groups;
        h = {}, c.forEach(u => { h[u.group] = h[u.group] || {}, h[u.group][u.binding] = u.name, l[u.name] = u; });
    }
    else if (n) {
        r = {}, h = {}, e && e.structsAndGroups.groups.forEach(d => { h[d.group] = h[d.group] || {}, h[d.group][d.binding] = d.name, l[d.name] = d; });
        let c = 0;
        for (const u in n)
            l[u] || (r[99] || (r[99] = new Ei, this._ownedBindGroups.push(r[99])), l[u] = { group: 99, binding: c, name: u }, h[99] = h[99] || {}, h[99][c] = u, c++);
        for (const u in n) {
            const d = u;
            let f = n[u];
            !f.source && !f._resourceType && (f = new Vo(f));
            const _ = l[d];
            _ && (r[_.group] || (r[_.group] = new Ei, this._ownedBindGroups.push(r[_.group])), r[_.group].setResource(f, _.binding));
        }
    } this.groups = r, this._uniformBindMap = h, this.resources = this._buildResourceAccessor(r, l); }
    addResource(t, e, i) { var r, n; (r = this._uniformBindMap)[e] || (r[e] = {}), (n = this._uniformBindMap[e])[i] || (n[i] = t), this.groups[e] || (this.groups[e] = new Ei, this._ownedBindGroups.push(this.groups[e])); }
    _buildResourceAccessor(t, e) { const i = {}; for (const r in e) {
        const n = e[r];
        Object.defineProperty(i, n.name, { get() { return t[n.group].getResource(n.binding); }, set(o) { t[n.group].setResource(o, n.binding); } });
    } return i; }
    destroy(t = !1) { this._destroyed || (this._destroyed = !0, this.emit("destroy", this), t && (this.gpuProgram?.destroy(), this.glProgram?.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach(e => { e.destroy(); }), this._ownedBindGroups = null, this.resources = null, this.groups = null); }
    static from(t) { const { gpu: e, gl: i, ...r } = t; let n, o; return e && (n = fe.from(e)), i && (o = Le.from(i)), new Xi({ gpuProgram: n, glProgram: o, ...r }); }
}
exports.s = Xi;
const ql = { normal: 0, add: 1, multiply: 2, screen: 3, overlay: 4, erase: 5, "normal-npm": 6, "add-npm": 7, "screen-npm": 8, min: 9, max: 10 }, bs = 0, vs = 1, ws = 2, ks = 3, As = 4, Ss = 5, $s = class Xo {
    constructor() { this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0; }
    get blend() { return !!(this.data & 1 << bs); }
    set blend(t) { !!(this.data & 1 << bs) !== t && (this.data ^= 1 << bs); }
    get offsets() { return !!(this.data & 1 << vs); }
    set offsets(t) { !!(this.data & 1 << vs) !== t && (this.data ^= 1 << vs); }
    set cullMode(t) { if (t === "none") {
        this.culling = !1;
        return;
    } this.culling = !0, this.clockwiseFrontFace = t === "front"; }
    get cullMode() { return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none"; }
    get culling() { return !!(this.data & 1 << ws); }
    set culling(t) { !!(this.data & 1 << ws) !== t && (this.data ^= 1 << ws); }
    get depthTest() { return !!(this.data & 1 << ks); }
    set depthTest(t) { !!(this.data & 1 << ks) !== t && (this.data ^= 1 << ks); }
    get depthMask() { return !!(this.data & 1 << Ss); }
    set depthMask(t) { !!(this.data & 1 << Ss) !== t && (this.data ^= 1 << Ss); }
    get clockwiseFrontFace() { return !!(this.data & 1 << As); }
    set clockwiseFrontFace(t) { !!(this.data & 1 << As) !== t && (this.data ^= 1 << As); }
    get blendMode() { return this._blendMode; }
    set blendMode(t) { this.blend = t !== "none", this._blendMode = t, this._blendModeId = ql[t] || 0; }
    get polygonOffset() { return this._polygonOffset; }
    set polygonOffset(t) { this.offsets = !!t, this._polygonOffset = t; }
    toString() { return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`; }
    static for2d() { const t = new Xo; return t.depthTest = !1, t.blend = !0, t; }
};
$s.default2d = $s.for2d();
let $l = $s;
exports.S = $l;
exports.State = $l;
const Yo = class Ks extends Xi {
    constructor(t) { t = { ...Ks.defaultOptions, ...t }, super(t), this.enabled = !0, this._state = $l.for2d(), this.blendMode = t.blendMode, this.padding = t.padding, typeof t.antialias == "boolean" ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias, this.resolution = t.resolution, this.blendRequired = t.blendRequired, this.clipToViewport = t.clipToViewport, this.addResource("uTexture", 0, 1), t.blendRequired && this.addResource("uBackTexture", 0, 3); }
    apply(t, e, i, r) { t.applyFilter(this, e, i, r); }
    get blendMode() { return this._state.blendMode; }
    set blendMode(t) { this._state.blendMode = t; }
    static from(t) { const { gpu: e, gl: i, ...r } = t; let n, o; return e && (n = fe.from(e)), i && (o = Le.from(i)), new Ks({ gpuProgram: n, glProgram: o, ...r }); }
};
Yo.defaultOptions = { blendMode: "normal", resolution: 1, padding: 0, antialias: "off", blendRequired: !1, clipToViewport: !0 };
let Zs = Yo;
exports.F = Zs;
const Qs = [];
Et.handleByNamedList(H.Environment, Qs);
async function Kl(s) { if (!s)
    for (let t = 0; t < Qs.length; t++) {
        const e = Qs[t];
        if (e.value.test()) {
            await e.value.load();
            return;
        }
    } }
let Xe;
function Zl() { if (typeof Xe == "boolean")
    return Xe; try {
    Xe = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
}
catch {
    Xe = !1;
} return Xe; }
function hn(s, t, e = 2) { const i = t && t.length, r = i ? t[0] * e : s.length; let n = jo(s, 0, r, e, !0); const o = []; if (!n || n.next === n.prev)
    return o; let h, l, c; if (i && (n = ic(s, t, n, e)), s.length > 80 * e) {
    h = s[0], l = s[1];
    let u = h, d = l;
    for (let f = e; f < r; f += e) {
        const _ = s[f], p = s[f + 1];
        _ < h && (h = _), p < l && (l = p), _ > u && (u = _), p > d && (d = p);
    }
    c = Math.max(u - h, d - l), c = c !== 0 ? 32767 / c : 0;
} return ri(n, o, e, h, l, c, 0), o; }
function jo(s, t, e, i, r) { let n; if (r === _c(s, t, e, i) > 0)
    for (let o = t; o < e; o += i)
        n = ln(o / i | 0, s[o], s[o + 1], n);
else
    for (let o = e - i; o >= t; o -= i)
        n = ln(o / i | 0, s[o], s[o + 1], n); return n && Oe(n, n.next) && (oi(n), n = n.next), n; }
function Se(s, t) { if (!s)
    return s; t || (t = s); let e = s, i; do
    if (i = !1, !e.steiner && (Oe(e, e.next) || wt(e.prev, e, e.next) === 0)) {
        if (oi(e), e = t = e.prev, e === e.next)
            break;
        i = !0;
    }
    else
        e = e.next;
while (i || e !== t); return t; }
function ri(s, t, e, i, r, n, o) { if (!s)
    return; !o && n && ac(s, i, r, n); let h = s; for (; s.prev !== s.next;) {
    const l = s.prev, c = s.next;
    if (n ? Jl(s, i, r, n) : Ql(s)) {
        t.push(l.i, s.i, c.i), oi(s), s = c.next, h = c.next;
        continue;
    }
    if (s = c, s === h) {
        o ? o === 1 ? (s = tc(Se(s), t), ri(s, t, e, i, r, n, 2)) : o === 2 && ec(s, t, e, i, r, n) : ri(Se(s), t, e, i, r, n, 1);
        break;
    }
} }
function Ql(s) { const t = s.prev, e = s, i = s.next; if (wt(t, e, i) >= 0)
    return !1; const r = t.x, n = e.x, o = i.x, h = t.y, l = e.y, c = i.y, u = Math.min(r, n, o), d = Math.min(h, l, c), f = Math.max(r, n, o), _ = Math.max(h, l, c); let p = i.next; for (; p !== t;) {
    if (p.x >= u && p.x <= f && p.y >= d && p.y <= _ && Qe(r, h, n, l, o, c, p.x, p.y) && wt(p.prev, p, p.next) >= 0)
        return !1;
    p = p.next;
} return !0; }
function Jl(s, t, e, i) { const r = s.prev, n = s, o = s.next; if (wt(r, n, o) >= 0)
    return !1; const h = r.x, l = n.x, c = o.x, u = r.y, d = n.y, f = o.y, _ = Math.min(h, l, c), p = Math.min(u, d, f), m = Math.max(h, l, c), g = Math.max(u, d, f), y = Js(_, p, t, e, i), x = Js(m, g, t, e, i); let v = s.prevZ, b = s.nextZ; for (; v && v.z >= y && b && b.z <= x;) {
    if (v.x >= _ && v.x <= m && v.y >= p && v.y <= g && v !== r && v !== o && Qe(h, u, l, d, c, f, v.x, v.y) && wt(v.prev, v, v.next) >= 0 || (v = v.prevZ, b.x >= _ && b.x <= m && b.y >= p && b.y <= g && b !== r && b !== o && Qe(h, u, l, d, c, f, b.x, b.y) && wt(b.prev, b, b.next) >= 0))
        return !1;
    b = b.nextZ;
} for (; v && v.z >= y;) {
    if (v.x >= _ && v.x <= m && v.y >= p && v.y <= g && v !== r && v !== o && Qe(h, u, l, d, c, f, v.x, v.y) && wt(v.prev, v, v.next) >= 0)
        return !1;
    v = v.prevZ;
} for (; b && b.z <= x;) {
    if (b.x >= _ && b.x <= m && b.y >= p && b.y <= g && b !== r && b !== o && Qe(h, u, l, d, c, f, b.x, b.y) && wt(b.prev, b, b.next) >= 0)
        return !1;
    b = b.nextZ;
} return !0; }
function tc(s, t) { let e = s; do {
    const i = e.prev, r = e.next.next;
    !Oe(i, r) && $o(i, e, e.next, r) && ni(i, r) && ni(r, i) && (t.push(i.i, e.i, r.i), oi(e), oi(e.next), e = s = r), e = e.next;
} while (e !== s); return Se(e); }
function ec(s, t, e, i, r, n) { let o = s; do {
    let h = o.next.next;
    for (; h !== o.prev;) {
        if (o.i !== h.i && cc(o, h)) {
            let l = Ko(o, h);
            o = Se(o, o.next), l = Se(l, l.next), ri(o, t, e, i, r, n, 0), ri(l, t, e, i, r, n, 0);
            return;
        }
        h = h.next;
    }
    o = o.next;
} while (o !== s); }
function ic(s, t, e, i) { const r = []; for (let n = 0, o = t.length; n < o; n++) {
    const h = t[n] * i, l = n < o - 1 ? t[n + 1] * i : s.length, c = jo(s, h, l, i, !1);
    c === c.next && (c.steiner = !0), r.push(lc(c));
} r.sort(sc); for (let n = 0; n < r.length; n++)
    e = rc(r[n], e); return e; }
function sc(s, t) { let e = s.x - t.x; if (e === 0 && (e = s.y - t.y, e === 0)) {
    const i = (s.next.y - s.y) / (s.next.x - s.x), r = (t.next.y - t.y) / (t.next.x - t.x);
    e = i - r;
} return e; }
function rc(s, t) { const e = nc(s, t); if (!e)
    return t; const i = Ko(e, s); return Se(i, i.next), Se(e, e.next); }
function nc(s, t) { let e = t; const i = s.x, r = s.y; let n = -1 / 0, o; if (Oe(s, e))
    return e; do {
    if (Oe(s, e.next))
        return e.next;
    if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
        const d = e.x + (r - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
        if (d <= i && d > n && (n = d, o = e.x < e.next.x ? e : e.next, d === i))
            return o;
    }
    e = e.next;
} while (e !== t); if (!o)
    return null; const h = o, l = o.x, c = o.y; let u = 1 / 0; e = o; do {
    if (i >= e.x && e.x >= l && i !== e.x && qo(r < c ? i : n, r, l, c, r < c ? n : i, r, e.x, e.y)) {
        const d = Math.abs(r - e.y) / (i - e.x);
        ni(e, s) && (d < u || d === u && (e.x > o.x || e.x === o.x && oc(o, e))) && (o = e, u = d);
    }
    e = e.next;
} while (e !== h); return o; }
function oc(s, t) { return wt(s.prev, s, t.prev) < 0 && wt(t.next, s, s.next) < 0; }
function ac(s, t, e, i) { let r = s; do
    r.z === 0 && (r.z = Js(r.x, r.y, t, e, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
while (r !== s); r.prevZ.nextZ = null, r.prevZ = null, hc(r); }
function hc(s) { let t, e = 1; do {
    let i = s, r;
    s = null;
    let n = null;
    for (t = 0; i;) {
        t++;
        let o = i, h = 0;
        for (let c = 0; c < e && (h++, o = o.nextZ, !!o); c++)
            ;
        let l = e;
        for (; h > 0 || l > 0 && o;)
            h !== 0 && (l === 0 || !o || i.z <= o.z) ? (r = i, i = i.nextZ, h--) : (r = o, o = o.nextZ, l--), n ? n.nextZ = r : s = r, r.prevZ = n, n = r;
        i = o;
    }
    n.nextZ = null, e *= 2;
} while (t > 1); return s; }
function Js(s, t, e, i, r) { return s = (s - e) * r | 0, t = (t - i) * r | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s | t << 1; }
function lc(s) { let t = s, e = s; do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
while (t !== s); return e; }
function qo(s, t, e, i, r, n, o, h) { return (r - o) * (t - h) >= (s - o) * (n - h) && (s - o) * (i - h) >= (e - o) * (t - h) && (e - o) * (n - h) >= (r - o) * (i - h); }
function Qe(s, t, e, i, r, n, o, h) { return !(s === o && t === h) && qo(s, t, e, i, r, n, o, h); }
function cc(s, t) { return s.next.i !== t.i && s.prev.i !== t.i && !uc(s, t) && (ni(s, t) && ni(t, s) && dc(s, t) && (wt(s.prev, s, t.prev) || wt(s, t.prev, t)) || Oe(s, t) && wt(s.prev, s, s.next) > 0 && wt(t.prev, t, t.next) > 0); }
function wt(s, t, e) { return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y); }
function Oe(s, t) { return s.x === t.x && s.y === t.y; }
function $o(s, t, e, i) { const r = Ai(wt(s, t, e)), n = Ai(wt(s, t, i)), o = Ai(wt(e, i, s)), h = Ai(wt(e, i, t)); return !!(r !== n && o !== h || r === 0 && ki(s, e, t) || n === 0 && ki(s, i, t) || o === 0 && ki(e, s, i) || h === 0 && ki(e, t, i)); }
function ki(s, t, e) { return t.x <= Math.max(s.x, e.x) && t.x >= Math.min(s.x, e.x) && t.y <= Math.max(s.y, e.y) && t.y >= Math.min(s.y, e.y); }
function Ai(s) { return s > 0 ? 1 : s < 0 ? -1 : 0; }
function uc(s, t) { let e = s; do {
    if (e.i !== s.i && e.next.i !== s.i && e.i !== t.i && e.next.i !== t.i && $o(e, e.next, s, t))
        return !0;
    e = e.next;
} while (e !== s); return !1; }
function ni(s, t) { return wt(s.prev, s, s.next) < 0 ? wt(s, t, s.next) >= 0 && wt(s, s.prev, t) >= 0 : wt(s, t, s.prev) < 0 || wt(s, s.next, t) < 0; }
function dc(s, t) { let e = s, i = !1; const r = (s.x + t.x) / 2, n = (s.y + t.y) / 2; do
    e.y > n != e.next.y > n && e.next.y !== e.y && r < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
while (e !== s); return i; }
function Ko(s, t) { const e = tr(s.i, s.x, s.y), i = tr(t.i, t.x, t.y), r = s.next, n = t.prev; return s.next = t, t.prev = s, e.next = r, r.prev = e, i.next = e, e.prev = i, n.next = i, i.prev = n, i; }
function ln(s, t, e, i) { const r = tr(s, t, e); return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r; }
function oi(s) { s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ); }
function tr(s, t, e) { return { i: s, x: t, y: e, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: !1 }; }
function _c(s, t, e, i) { let r = 0; for (let n = t, o = e - i; n < e; n += i)
    r += (s[o] - s[n]) * (s[n + 1] + s[o + 1]), o = n; return r; }
const fc = hn.default || hn;
var Zo = (s => (s[s.NONE = 0] = "NONE", s[s.COLOR = 16384] = "COLOR", s[s.STENCIL = 1024] = "STENCIL", s[s.DEPTH = 256] = "DEPTH", s[s.COLOR_DEPTH = 16640] = "COLOR_DEPTH", s[s.COLOR_STENCIL = 17408] = "COLOR_STENCIL", s[s.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", s[s.ALL = 17664] = "ALL", s))(Zo || {});
exports.i = Zo;
class pc {
    constructor(t) { this.items = [], this._name = t; }
    emit(t, e, i, r, n, o, h, l) { const { name: c, items: u } = this; for (let d = 0, f = u.length; d < f; d++)
        u[d][c](t, e, i, r, n, o, h, l); return this; }
    add(t) { return t[this._name] && (this.remove(t), this.items.push(t)), this; }
    remove(t) { const e = this.items.indexOf(t); return e !== -1 && this.items.splice(e, 1), this; }
    contains(t) { return this.items.indexOf(t) !== -1; }
    removeAll() { return this.items.length = 0, this; }
    destroy() { this.removeAll(), this.items = null, this._name = null; }
    get empty() { return this.items.length === 0; }
    get name() { return this._name; }
}
exports.X = pc;
const gc = ["init", "destroy", "contextChange", "resolutionChange", "resetState", "renderEnd", "renderStart", "render", "update", "postrender", "prerender"], Qo = class Jo extends Qt {
    constructor(t) { super(), this.tick = 0, this.uid = At("renderer"), this.runners = Object.create(null), this.renderPipes = Object.create(null), this._initOptions = {}, this._systemsHash = Object.create(null), this.type = t.type, this.name = t.name, this.config = t; const e = [...gc, ...this.config.runners ?? []]; this._addRunners(...e), this._unsafeEvalCheck(); }
    async init(t = {}) { const e = t.skipExtensionImports === !0 ? !0 : t.manageImports === !1; await Kl(e), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors); for (const i in this._systemsHash)
        t = { ...this._systemsHash[i].constructor.defaultOptions, ...t }; t = { ...Jo.defaultOptions, ...t }, this._roundPixels = t.roundPixels ? 1 : 0; for (let i = 0; i < this.runners.init.items.length; i++)
        await this.runners.init.items[i].init(t); this._initOptions = t; }
    render(t, e) { this.tick++; let i = t; if (i instanceof Q && (i = { container: i }, e && (Z(ct, "passing a second argument is deprecated, please use render options instead"), i.target = e.renderTexture)), i.target || (i.target = this.view.renderTarget), i.target === this.view.renderTarget && (this._lastObjectRendered = i.container, i.clearColor ?? (i.clearColor = this.background.colorRgba), i.clear ?? (i.clear = this.background.clearBeforeRender)), i.clearColor) {
        const r = Array.isArray(i.clearColor) && i.clearColor.length === 4;
        i.clearColor = r ? i.clearColor : Pt.shared.setValue(i.clearColor).toArray();
    } i.transform || (i.container.updateLocalTransform(), i.transform = i.container.localTransform), i.container.visible && (i.container.enableRenderGroup(), this.runners.prerender.emit(i), this.runners.renderStart.emit(i), this.runners.render.emit(i), this.runners.renderEnd.emit(i), this.runners.postrender.emit(i)); }
    resize(t, e, i) { const r = this.view.resolution; this.view.resize(t, e, i), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), i !== void 0 && i !== r && this.runners.resolutionChange.emit(i); }
    clear(t = {}) { const e = this; t.target || (t.target = e.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), t.clear ?? (t.clear = Zo.ALL); const { clear: i, clearColor: r, target: n } = t; Pt.shared.setValue(r ?? this.background.colorRgba), e.renderTarget.clear(n, i, Pt.shared.toArray()); }
    get resolution() { return this.view.resolution; }
    set resolution(t) { this.view.resolution = t, this.runners.resolutionChange.emit(t); }
    get width() { return this.view.texture.frame.width; }
    get height() { return this.view.texture.frame.height; }
    get canvas() { return this.view.canvas; }
    get lastObjectRendered() { return this._lastObjectRendered; }
    get renderingToScreen() { return this.renderTarget.renderingToScreen; }
    get screen() { return this.view.screen; }
    _addRunners(...t) { t.forEach(e => { this.runners[e] = new pc(e); }); }
    _addSystems(t) { let e; for (e in t) {
        const i = t[e];
        this._addSystem(i.value, i.name);
    } }
    _addSystem(t, e) { const i = new t(this); if (this[e])
        throw new Error(`Whoops! The name "${e}" is already in use`); this[e] = i, this._systemsHash[e] = i; for (const r in this.runners)
        this.runners[r].add(i); return this; }
    _addPipes(t, e) { const i = e.reduce((r, n) => (r[n.name] = n.value, r), {}); t.forEach(r => { const n = r.value, o = r.name, h = i[o]; this.renderPipes[o] = new n(this, h ? new h : null), this.runners.destroy.add(this.renderPipes[o]); }); }
    destroy(t = !1) { this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), (t === !0 || typeof t == "object" && t.releaseGlobalResources) && li.release(), Object.values(this.runners).forEach(e => { e.destroy(); }), this._systemsHash = null, this.renderPipes = null; }
    generateTexture(t) { return this.textureGenerator.generateTexture(t); }
    get roundPixels() { return !!this._roundPixels; }
    _unsafeEvalCheck() { if (!Zl())
        throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support."); }
    resetState() { this.runners.resetState.emit(); }
};
Qo.defaultOptions = { resolution: 1, failIfMajorPerformanceCaveat: !1, roundPixels: !1 };
let ta = Qo, Si;
exports.A = ta;
function mc(s) { return Si !== void 0 || (Si = (() => { const t = { stencil: !0, failIfMajorPerformanceCaveat: s ?? ta.defaultOptions.failIfMajorPerformanceCaveat }; try {
    if (!xt.get().getWebGLRenderingContext())
        return !1;
    let i = xt.get().createCanvas().getContext("webgl", t);
    const r = !!i?.getContextAttributes()?.stencil;
    if (i) {
        const n = i.getExtension("WEBGL_lose_context");
        n && n.loseContext();
    }
    return i = null, r;
}
catch {
    return !1;
} })()), Si; }
let Ci;
async function yc(s = {}) { return Ci !== void 0 || (Ci = await (async () => { const t = xt.get().getNavigator().gpu; if (!t)
    return !1; try {
    return await (await t.requestAdapter(s)).requestDevice(), !0;
}
catch {
    return !1;
} })()), Ci; }
const cn = ["webgl", "webgpu", "canvas"];
async function xc(s) { let t = []; s.preference ? (t.push(s.preference), cn.forEach(n => { n !== s.preference && t.push(n); })) : t = cn.slice(); let e, i = {}; for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (o === "webgpu" && await yc()) {
        const { WebGPURenderer: h } = await Li(async () => { const { WebGPURenderer: l } = await Promise.resolve().then(() => require("./WebGPURenderer-CVAMSaC2.js")); return { WebGPURenderer: l }; }, __vite__mapDeps([29, 2, 30, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]), "pixi-local");
        e = h, i = { ...s, ...s.webgpu };
        break;
    }
    else if (o === "webgl" && mc(s.failIfMajorPerformanceCaveat ?? ta.defaultOptions.failIfMajorPerformanceCaveat)) {
        const { WebGLRenderer: h } = await Li(async () => { const { WebGLRenderer: l } = await Promise.resolve().then(() => require("./WebGLRenderer-C8BrupKw.js")); return { WebGLRenderer: l }; }, __vite__mapDeps([31, 2, 30, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]), "pixi-local");
        e = h, i = { ...s, ...s.webgl };
        break;
    }
    else if (o === "canvas")
        throw i = { ...s }, new Error("CanvasRenderer is not yet implemented");
} if (delete i.webgpu, delete i.webgl, !e)
    throw new Error("No available renderer for the current environment"); const r = new e; return await r.init(i), r; }
const ea = "8.15.0";
exports.a5 = ea;
exports.VERSION = ea;
class ia {
    static init() { globalThis.__PIXI_APP_INIT__?.(this, ea); }
    static destroy() { }
}
ia.extension = H.Application;
class bc {
    constructor(t) { this._renderer = t; }
    init() { globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, ea); }
    destroy() { this._renderer = null; }
}
exports.a8 = bc;
bc.extension = { type: [H.WebGLSystem, H.WebGPUSystem], name: "initHook", priority: -10 };
const sa = class er {
    constructor(...t) { this.stage = new Q, t[0] !== void 0 && Z(ct, "Application constructor options are deprecated, please use Application.init() instead."); }
    async init(t) { t = { ...t }, this.stage || (this.stage = new Q), this.renderer = await xc(t), er._plugins.forEach(e => { e.init.call(this, t); }); }
    render() { this.renderer.render({ container: this.stage }); }
    get canvas() { return this.renderer.canvas; }
    get view() { return Z(ct, "Application.view is deprecated, please use Application.canvas instead."), this.renderer.canvas; }
    get screen() { return this.renderer.screen; }
    destroy(t = !1, e = !1) { const i = er._plugins.slice(0); i.reverse(), i.forEach(r => { r.destroy.call(this); }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null; }
};
sa._plugins = [];
let ra = sa;
exports.Application = ra;
Et.handleByList(H.Application, ra._plugins);
Et.add(ia);
class na extends Qt {
    constructor() { super(...arguments), this.chars = Object.create(null), this.lineHeight = 0, this.fontFamily = "", this.fontMetrics = { fontSize: 0, ascent: 0, descent: 0 }, this.baseLineOffset = 0, this.distanceField = { type: "none", range: 0 }, this.pages = [], this.applyFillAsTint = !0, this.baseMeasurementFontSize = 100, this.baseRenderedFontSize = 100; }
    get font() { return Z(ct, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."), this.fontFamily; }
    get pageTextures() { return Z(ct, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages; }
    get size() { return Z(ct, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."), this.fontMetrics.fontSize; }
    get distanceFieldRange() { return Z(ct, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."), this.distanceField.range; }
    get distanceFieldType() { return Z(ct, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."), this.distanceField.type; }
    destroy(t = !1) { this.emit("destroy", this), this.removeAllListeners(); for (const e in this.chars)
        this.chars[e].texture?.destroy(); this.chars = null, t && (this.pages.forEach(e => e.texture.destroy(!0)), this.pages = null); }
}
class vc {
    constructor(t = 0, e = 0, i = !1) { this.first = null, this.items = Object.create(null), this.last = null, this.max = t, this.resetTtl = i, this.size = 0, this.ttl = e; }
    clear() { return this.first = null, this.items = Object.create(null), this.last = null, this.size = 0, this; }
    delete(t) { if (this.has(t)) {
        const e = this.items[t];
        delete this.items[t], this.size--, e.prev !== null && (e.prev.next = e.next), e.next !== null && (e.next.prev = e.prev), this.first === e && (this.first = e.next), this.last === e && (this.last = e.prev);
    } return this; }
    entries(t = this.keys()) { const e = new Array(t.length); for (let i = 0; i < t.length; i++) {
        const r = t[i];
        e[i] = [r, this.get(r)];
    } return e; }
    evict(t = !1) { if (t || this.size > 0) {
        const e = this.first;
        delete this.items[e.key], --this.size === 0 ? (this.first = null, this.last = null) : (this.first = e.next, this.first.prev = null);
    } return this; }
    expiresAt(t) { let e; return this.has(t) && (e = this.items[t].expiry), e; }
    get(t) { const e = this.items[t]; if (e !== void 0) {
        if (this.ttl > 0 && e.expiry <= Date.now()) {
            this.delete(t);
            return;
        }
        return this.moveToEnd(e), e.value;
    } }
    has(t) { return t in this.items; }
    moveToEnd(t) { this.last !== t && (t.prev !== null && (t.prev.next = t.next), t.next !== null && (t.next.prev = t.prev), this.first === t && (this.first = t.next), t.prev = this.last, t.next = null, this.last !== null && (this.last.next = t), this.last = t, this.first === null && (this.first = t)); }
    keys() { const t = new Array(this.size); let e = this.first, i = 0; for (; e !== null;)
        t[i++] = e.key, e = e.next; return t; }
    setWithEvicted(t, e, i = this.resetTtl) { let r = null; if (this.has(t))
        this.set(t, e, !0, i);
    else {
        this.max > 0 && this.size === this.max && (r = { ...this.first }, this.evict(!0));
        let n = this.items[t] = { expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl, key: t, prev: this.last, next: null, value: e };
        ++this.size === 1 ? this.first = n : this.last.next = n, this.last = n;
    } return r; }
    set(t, e, i = !1, r = this.resetTtl) { let n = this.items[t]; return i || n !== void 0 ? (n.value = e, i === !1 && r && (n.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl), this.moveToEnd(n)) : (this.max > 0 && this.size === this.max && this.evict(!0), n = this.items[t] = { expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl, key: t, prev: this.last, next: null, value: e }, ++this.size === 1 ? this.first = n : this.last.next = n, this.last = n), this; }
    values(t = this.keys()) { const e = new Array(t.length); for (let i = 0; i < t.length; i++)
        e[i] = this.get(t[i]); return e; }
}
function oa(s = 1e3, t = 0, e = !1) { if (isNaN(s) || s < 0)
    throw new TypeError("Invalid max value"); if (isNaN(t) || t < 0)
    throw new TypeError("Invalid ttl value"); if (typeof e != "boolean")
    throw new TypeError("Invalid resetTtl value"); return new vc(s, t, e); }
const wc = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
function ir(s) { const t = typeof s.fontSize == "number" ? `${s.fontSize}px` : s.fontSize; let e = s.fontFamily; Array.isArray(s.fontFamily) || (e = s.fontFamily.split(",")); for (let i = e.length - 1; i >= 0; i--) {
    let r = e[i].trim();
    !/([\"\'])[^\'\"]+\1/.test(r) && !wc.includes(r) && (r = `"${r}"`), e[i] = r;
} return `${s.fontStyle} ${s.fontVariant} ${s.fontWeight} ${t} ${e.join(",")}`; }
const Cs = { willReadFrequently: !0 }, Jt = class N {
    static get experimentalLetterSpacingSupported() { let t = N._experimentalLetterSpacingSupported; if (t === void 0) {
        const e = xt.get().getCanvasRenderingContext2D().prototype;
        t = N._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
    } return t; }
    constructor(t, e, i, r, n, o, h, l, c) { this.text = t, this.style = e, this.width = i, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = h, this.maxLineWidth = l, this.fontProperties = c; }
    static measureText(t = " ", e, i = N._canvas, r = e.wordWrap) { const n = `${t}-${e.styleKey}-wordWrap-${r}`; if (N._measurementCache.has(n))
        return N._measurementCache.get(n); const o = ir(e), h = N.measureFont(o); h.fontSize === 0 && (h.fontSize = e.fontSize, h.ascent = e.fontSize); const l = N.__context; l.font = o; const u = (r ? N._wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), d = new Array(u.length); let f = 0; for (let x = 0; x < u.length; x++) {
        const v = N._measureText(u[x], e.letterSpacing, l);
        d[x] = v, f = Math.max(f, v);
    } const _ = e._stroke?.width || 0; let p = f + _; e.dropShadow && (p += e.dropShadow.distance); const m = e.lineHeight || h.fontSize; let g = Math.max(m, h.fontSize + _) + (u.length - 1) * (m + e.leading); e.dropShadow && (g += e.dropShadow.distance); const y = new N(t, e, p, g, u, d, m + e.leading, f, h); return N._measurementCache.set(n, y), y; }
    static _measureText(t, e, i) { let r = !1; N.experimentalLetterSpacingSupported && (N.experimentalLetterSpacing ? (i.letterSpacing = `${e}px`, i.textLetterSpacing = `${e}px`, r = !0) : (i.letterSpacing = "0px", i.textLetterSpacing = "0px")); const n = i.measureText(t); let o = n.width; const h = -n.actualBoundingBoxLeft; let c = n.actualBoundingBoxRight - h; if (o > 0)
        if (r)
            o -= e, c -= e;
        else {
            const u = (N.graphemeSegmenter(t).length - 1) * e;
            o += u, c += u;
        } return Math.max(o, c); }
    static _wordWrap(t, e, i = N._canvas) { const r = i.getContext("2d", Cs); let n = 0, o = "", h = ""; const l = Object.create(null), { letterSpacing: c, whiteSpace: u } = e, d = N._collapseSpaces(u), f = N._collapseNewlines(u); let _ = !d; const p = e.wordWrapWidth + c, m = N._tokenize(t); for (let g = 0; g < m.length; g++) {
        let y = m[g];
        if (N._isNewline(y)) {
            if (!f) {
                h += N._addLine(o), _ = !d, o = "", n = 0;
                continue;
            }
            y = " ";
        }
        if (d) {
            const v = N.isBreakingSpace(y), b = N.isBreakingSpace(o[o.length - 1]);
            if (v && b)
                continue;
        }
        const x = N._getFromCache(y, c, l, r);
        if (x > p)
            if (o !== "" && (h += N._addLine(o), o = "", n = 0), N.canBreakWords(y, e.breakWords)) {
                const v = N.wordWrapSplit(y);
                for (let b = 0; b < v.length; b++) {
                    let C = v[b], w = C, k = 1;
                    for (; v[b + k];) {
                        const S = v[b + k];
                        if (!N.canBreakChars(w, S, y, b, e.breakWords))
                            C += S;
                        else
                            break;
                        w = S, k++;
                    }
                    b += k - 1;
                    const z = N._getFromCache(C, c, l, r);
                    z + n > p && (h += N._addLine(o), _ = !1, o = "", n = 0), o += C, n += z;
                }
            }
            else {
                o.length > 0 && (h += N._addLine(o), o = "", n = 0);
                const v = g === m.length - 1;
                h += N._addLine(y, !v), _ = !1, o = "", n = 0;
            }
        else
            x + n > p && (_ = !1, h += N._addLine(o), o = "", n = 0), (o.length > 0 || !N.isBreakingSpace(y) || _) && (o += y, n += x);
    } return h += N._addLine(o, !1), h; }
    static _addLine(t, e = !0) {
        return t = N._trimRight(t), t = e ? `${t}
` : t, t;
    }
    static _getFromCache(t, e, i, r) { let n = i[t]; return typeof n != "number" && (n = N._measureText(t, e, r) + e, i[t] = n), n; }
    static _collapseSpaces(t) { return t === "normal" || t === "pre-line"; }
    static _collapseNewlines(t) { return t === "normal"; }
    static _trimRight(t) { if (typeof t != "string")
        return ""; for (let e = t.length - 1; e >= 0; e--) {
        const i = t[e];
        if (!N.isBreakingSpace(i))
            break;
        t = t.slice(0, -1);
    } return t; }
    static _isNewline(t) { return typeof t != "string" ? !1 : N._newlines.includes(t.charCodeAt(0)); }
    static isBreakingSpace(t, e) { return typeof t != "string" ? !1 : N._breakingSpaces.includes(t.charCodeAt(0)); }
    static _tokenize(t) {
        const e = [];
        let i = "";
        if (typeof t != "string")
            return e;
        for (let r = 0; r < t.length; r++) {
            const n = t[r], o = t[r + 1];
            if (N.isBreakingSpace(n, o) || N._isNewline(n)) {
                i !== "" && (e.push(i), i = ""), n === "\r" && o === `
` ? (e.push(`\r
`), r++) : e.push(n);
                continue;
            }
            i += n;
        }
        return i !== "" && e.push(i), e;
    }
    static canBreakWords(t, e) { return e; }
    static canBreakChars(t, e, i, r, n) { return !0; }
    static wordWrapSplit(t) { return N.graphemeSegmenter(t); }
    static measureFont(t) { if (N._fonts[t])
        return N._fonts[t]; const e = N._context; e.font = t; const i = e.measureText(N.METRICS_STRING + N.BASELINE_SYMBOL), r = { ascent: i.actualBoundingBoxAscent, descent: i.actualBoundingBoxDescent, fontSize: i.actualBoundingBoxAscent + i.actualBoundingBoxDescent }; return N._fonts[t] = r, r; }
    static clearMetrics(t = "") { t ? delete N._fonts[t] : N._fonts = {}; }
    static get _canvas() { if (!N.__canvas) {
        let t;
        try {
            const e = new OffscreenCanvas(0, 0);
            if (e.getContext("2d", Cs)?.measureText)
                return N.__canvas = e, e;
            t = xt.get().createCanvas();
        }
        catch {
            t = xt.get().createCanvas();
        }
        t.width = t.height = 10, N.__canvas = t;
    } return N.__canvas; }
    static get _context() { return N.__context || (N.__context = N._canvas.getContext("2d", Cs)), N.__context; }
};
Jt.METRICS_STRING = "|ÉqÅ";
Jt.BASELINE_SYMBOL = "M";
Jt.BASELINE_MULTIPLIER = 1.4;
Jt.HEIGHT_MULTIPLIER = 2;
Jt.graphemeSegmenter = (() => { if (typeof Intl?.Segmenter == "function") {
    const s = new Intl.Segmenter;
    return t => { const e = s.segment(t), i = []; let r = 0; for (const n of e)
        i[r++] = n.segment; return i; };
} return s => [...s]; })();
Jt.experimentalLetterSpacing = !1;
Jt._fonts = {};
Jt._newlines = [10, 13];
Jt._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
Jt._measurementCache = oa(1e3);
let Ri = Jt;
exports.ah = Ri;
const un = [{ offset: 0, color: "white" }, { offset: 1, color: "black" }], xr = class sr {
    constructor(...t) { this.uid = At("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = []; let e = kc(t); e = { ...e.type === "radial" ? sr.defaultRadialOptions : sr.defaultLinearOptions, ...ho(e) }, this._textureSize = e.textureSize, this._wrapMode = e.wrapMode, e.type === "radial" ? (this.center = e.center, this.outerCenter = e.outerCenter ?? this.center, this.innerRadius = e.innerRadius, this.outerRadius = e.outerRadius, this.scale = e.scale, this.rotation = e.rotation) : (this.start = e.start, this.end = e.end), this.textureSpace = e.textureSpace, this.type = e.type, e.colorStops.forEach(r => { this.addColorStop(r.offset, r.color); }); }
    addColorStop(t, e) { return this.colorStops.push({ offset: t, color: Pt.shared.setValue(e).toHexa() }), this; }
    buildLinearGradient() { if (this.texture)
        return; let { x: t, y: e } = this.start, { x: i, y: r } = this.end, n = i - t, o = r - e; const h = n < 0 || o < 0; if (this._wrapMode === "clamp-to-edge") {
        if (n < 0) {
            const g = t;
            t = i, i = g, n *= -1;
        }
        if (o < 0) {
            const g = e;
            e = r, r = g, o *= -1;
        }
    } const l = this.colorStops.length ? this.colorStops : un, c = this._textureSize, { canvas: u, context: d } = _n(c, 1), f = h ? d.createLinearGradient(this._textureSize, 0, 0, 0) : d.createLinearGradient(0, 0, this._textureSize, 0); dn(f, l), d.fillStyle = f, d.fillRect(0, 0, c, 1), this.texture = new it({ source: new Ae({ resource: u, addressMode: this._wrapMode }) }); const _ = Math.sqrt(n * n + o * o), p = Math.atan2(o, n), m = new rt; m.scale(_ / c, 1), m.rotate(p), m.translate(t, e), this.textureSpace === "local" && m.scale(c, c), this.transform = m; }
    buildGradient() { this.texture || this._tick++, this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient(); }
    buildRadialGradient() { if (this.texture)
        return; const t = this.colorStops.length ? this.colorStops : un, e = this._textureSize, { canvas: i, context: r } = _n(e, e), { x: n, y: o } = this.center, { x: h, y: l } = this.outerCenter, c = this.innerRadius, u = this.outerRadius, d = h - u, f = l - u, _ = e / (u * 2), p = (n - d) * _, m = (o - f) * _, g = r.createRadialGradient(p, m, c * _, (h - d) * _, (l - f) * _, u * _); dn(g, t), r.fillStyle = t[t.length - 1].color, r.fillRect(0, 0, e, e), r.fillStyle = g, r.translate(p, m), r.rotate(this.rotation), r.scale(1, this.scale), r.translate(-p, -m), r.fillRect(0, 0, e, e), this.texture = new it({ source: new Ae({ resource: i, addressMode: this._wrapMode }) }); const y = new rt; y.scale(1 / _, 1 / _), y.translate(d, f), this.textureSpace === "local" && y.scale(e, e), this.transform = y; }
    destroy() { this.texture?.destroy(!0), this.texture = null, this.transform = null, this.colorStops = [], this.start = null, this.end = null, this.center = null, this.outerCenter = null; }
    get styleKey() { return `fill-gradient-${this.uid}-${this._tick}`; }
};
xr.defaultLinearOptions = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colorStops: [], textureSpace: "local", type: "linear", textureSize: 256, wrapMode: "clamp-to-edge" };
xr.defaultRadialOptions = { center: { x: .5, y: .5 }, innerRadius: 0, outerRadius: .5, colorStops: [], scale: 1, textureSpace: "local", type: "radial", textureSize: 256, wrapMode: "clamp-to-edge" };
let le = xr;
function dn(s, t) { for (let e = 0; e < t.length; e++) {
    const i = t[e];
    s.addColorStop(i.offset, i.color);
} }
function _n(s, t) { const e = xt.get().createCanvas(s, t), i = e.getContext("2d"); return { canvas: e, context: i }; }
function kc(s) { let t = s[0] ?? {}; return (typeof t == "number" || s[1]) && (Z("8.5.2", "use options object instead"), t = { type: "linear", start: { x: s[0], y: s[1] }, end: { x: s[2], y: s[3] }, textureSpace: s[4], textureSize: s[5] ?? le.defaultLinearOptions.textureSize }), t; }
const fn = { repeat: { addressModeU: "repeat", addressModeV: "repeat" }, "repeat-x": { addressModeU: "repeat", addressModeV: "clamp-to-edge" }, "repeat-y": { addressModeU: "clamp-to-edge", addressModeV: "repeat" }, "no-repeat": { addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" } };
class Yi {
    constructor(t, e) { this.uid = At("fillPattern"), this._tick = 0, this.transform = new rt, this.texture = t, this.transform.scale(1 / t.frame.width, 1 / t.frame.height), e && (t.source.style.addressModeU = fn[e].addressModeU, t.source.style.addressModeV = fn[e].addressModeV); }
    setTransform(t) { const e = this.texture; this.transform.copyFrom(t), this.transform.invert(), this.transform.scale(1 / e.frame.width, 1 / e.frame.height), this._tick++; }
    get texture() { return this._texture; }
    set texture(t) { this._texture !== t && (this._texture = t, this._tick++); }
    get styleKey() { return `fill-pattern-${this.uid}-${this._tick}`; }
    destroy() { this.texture.destroy(!0), this.texture = null; }
}
var Ms, pn;
function Ac() { if (pn)
    return Ms; pn = 1, Ms = e; var s = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, t = /([astvzqmhlc])([^astvzqmhlc]*)/ig; function e(n) { var o = []; return n.replace(t, function (h, l, c) { var u = l.toLowerCase(); for (c = r(c), u == "m" && c.length > 2 && (o.push([l].concat(c.splice(0, 2))), u = "l", l = l == "m" ? "l" : "L");;) {
    if (c.length == s[u])
        return c.unshift(l), o.push(c);
    if (c.length < s[u])
        throw new Error("malformed path data");
    o.push([l].concat(c.splice(0, s[u])));
} }), o; } var i = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig; function r(n) { var o = n.match(i); return o ? o.map(Number) : []; } return Ms; }
var Sc = Ac();
const Cc = io(Sc);
function Mc(s, t) { const e = Cc(s), i = []; let r = null, n = 0, o = 0; for (let h = 0; h < e.length; h++) {
    const l = e[h], c = l[0], u = l;
    switch (c) {
        case "M":
            n = u[1], o = u[2], t.moveTo(n, o);
            break;
        case "m":
            n += u[1], o += u[2], t.moveTo(n, o);
            break;
        case "H":
            n = u[1], t.lineTo(n, o);
            break;
        case "h":
            n += u[1], t.lineTo(n, o);
            break;
        case "V":
            o = u[1], t.lineTo(n, o);
            break;
        case "v":
            o += u[1], t.lineTo(n, o);
            break;
        case "L":
            n = u[1], o = u[2], t.lineTo(n, o);
            break;
        case "l":
            n += u[1], o += u[2], t.lineTo(n, o);
            break;
        case "C":
            n = u[5], o = u[6], t.bezierCurveTo(u[1], u[2], u[3], u[4], n, o);
            break;
        case "c":
            t.bezierCurveTo(n + u[1], o + u[2], n + u[3], o + u[4], n + u[5], o + u[6]), n += u[5], o += u[6];
            break;
        case "S":
            n = u[3], o = u[4], t.bezierCurveToShort(u[1], u[2], n, o);
            break;
        case "s":
            t.bezierCurveToShort(n + u[1], o + u[2], n + u[3], o + u[4]), n += u[3], o += u[4];
            break;
        case "Q":
            n = u[3], o = u[4], t.quadraticCurveTo(u[1], u[2], n, o);
            break;
        case "q":
            t.quadraticCurveTo(n + u[1], o + u[2], n + u[3], o + u[4]), n += u[3], o += u[4];
            break;
        case "T":
            n = u[1], o = u[2], t.quadraticCurveToShort(n, o);
            break;
        case "t":
            n += u[1], o += u[2], t.quadraticCurveToShort(n, o);
            break;
        case "A":
            n = u[6], o = u[7], t.arcToSvg(u[1], u[2], u[3], u[4], u[5], n, o);
            break;
        case "a":
            n += u[6], o += u[7], t.arcToSvg(u[1], u[2], u[3], u[4], u[5], n, o);
            break;
        case "Z":
        case "z":
            t.closePath(), i.length > 0 && (r = i.pop(), r ? (n = r.startX, o = r.startY) : (n = 0, o = 0)), r = null;
            break;
        default: yt(`Unknown SVG path command: ${c}`);
    }
    c !== "Z" && c !== "z" && r === null && (r = { startX: n, startY: o }, i.push(r));
} return t; }
class br {
    constructor(t = 0, e = 0, i = 0) { this.type = "circle", this.x = t, this.y = e, this.radius = i; }
    clone() { return new br(this.x, this.y, this.radius); }
    contains(t, e) { if (this.radius <= 0)
        return !1; const i = this.radius * this.radius; let r = this.x - t, n = this.y - e; return r *= r, n *= n, r + n <= i; }
    strokeContains(t, e, i, r = .5) { if (this.radius === 0)
        return !1; const n = this.x - t, o = this.y - e, h = this.radius, l = (1 - r) * i, c = Math.sqrt(n * n + o * o); return c <= h + l && c > h - (i - l); }
    getBounds(t) { return t || (t = new pt), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = this.radius * 2, t.height = this.radius * 2, t; }
    copyFrom(t) { return this.x = t.x, this.y = t.y, this.radius = t.radius, this; }
    copyTo(t) { return t.copyFrom(this), t; }
    toString() { return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`; }
}
class vr {
    constructor(t = 0, e = 0, i = 0, r = 0) { this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = i, this.halfHeight = r; }
    clone() { return new vr(this.x, this.y, this.halfWidth, this.halfHeight); }
    contains(t, e) { if (this.halfWidth <= 0 || this.halfHeight <= 0)
        return !1; let i = (t - this.x) / this.halfWidth, r = (e - this.y) / this.halfHeight; return i *= i, r *= r, i + r <= 1; }
    strokeContains(t, e, i, r = .5) { const { halfWidth: n, halfHeight: o } = this; if (n <= 0 || o <= 0)
        return !1; const h = i * (1 - r), l = i - h, c = n - l, u = o - l, d = n + h, f = o + h, _ = t - this.x, p = e - this.y, m = _ * _ / (c * c) + p * p / (u * u), g = _ * _ / (d * d) + p * p / (f * f); return m > 1 && g <= 1; }
    getBounds(t) { return t || (t = new pt), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = this.halfWidth * 2, t.height = this.halfHeight * 2, t; }
    copyFrom(t) { return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this; }
    copyTo(t) { return t.copyFrom(this), t; }
    toString() { return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`; }
}
function Pc(s, t, e, i, r, n) { const o = s - e, h = t - i, l = r - e, c = n - i, u = o * l + h * c, d = l * l + c * c; let f = -1; d !== 0 && (f = u / d); let _, p; f < 0 ? (_ = e, p = i) : f > 1 ? (_ = r, p = n) : (_ = e + f * l, p = i + f * c); const m = s - _, g = t - p; return m * m + g * g; }
let Tc, Ic;
class ei {
    constructor(...t) { this.type = "polygon"; let e = Array.isArray(t[0]) ? t[0] : t; if (typeof e[0] != "number") {
        const i = [];
        for (let r = 0, n = e.length; r < n; r++)
            i.push(e[r].x, e[r].y);
        e = i;
    } this.points = e, this.closePath = !0; }
    isClockwise() { let t = 0; const e = this.points, i = e.length; for (let r = 0; r < i; r += 2) {
        const n = e[r], o = e[r + 1], h = e[(r + 2) % i], l = e[(r + 3) % i];
        t += (h - n) * (l + o);
    } return t < 0; }
    containsPolygon(t) { const e = this.getBounds(Tc), i = t.getBounds(Ic); if (!e.containsRect(i))
        return !1; const r = t.points; for (let n = 0; n < r.length; n += 2) {
        const o = r[n], h = r[n + 1];
        if (!this.contains(o, h))
            return !1;
    } return !0; }
    clone() { const t = this.points.slice(), e = new ei(t); return e.closePath = this.closePath, e; }
    contains(t, e) { let i = !1; const r = this.points.length / 2; for (let n = 0, o = r - 1; n < r; o = n++) {
        const h = this.points[n * 2], l = this.points[n * 2 + 1], c = this.points[o * 2], u = this.points[o * 2 + 1];
        l > e != u > e && t < (c - h) * ((e - l) / (u - l)) + h && (i = !i);
    } return i; }
    strokeContains(t, e, i, r = .5) { const n = i * i, o = n * (1 - r), h = n - o, { points: l } = this, c = l.length - (this.closePath ? 0 : 2); for (let u = 0; u < c; u += 2) {
        const d = l[u], f = l[u + 1], _ = l[(u + 2) % l.length], p = l[(u + 3) % l.length], m = Pc(t, e, d, f, _, p), g = Math.sign((_ - d) * (e - f) - (p - f) * (t - d));
        if (m <= (g < 0 ? h : o))
            return !0;
    } return !1; }
    getBounds(t) { t || (t = new pt); const e = this.points; let i = 1 / 0, r = -1 / 0, n = 1 / 0, o = -1 / 0; for (let h = 0, l = e.length; h < l; h += 2) {
        const c = e[h], u = e[h + 1];
        i = c < i ? c : i, r = c > r ? c : r, n = u < n ? u : n, o = u > o ? u : o;
    } return t.x = i, t.width = r - i, t.y = n, t.height = o - n, t; }
    copyFrom(t) { return this.points = t.points.slice(), this.closePath = t.closePath, this; }
    copyTo(t) { return t.copyFrom(this), t; }
    toString() { return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t, e) => `${t}, ${e}`, "")}]`; }
    get lastX() { return this.points[this.points.length - 2]; }
    get lastY() { return this.points[this.points.length - 1]; }
    get x() { return Z("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2]; }
    get y() { return Z("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1]; }
    get startX() { return this.points[0]; }
    get startY() { return this.points[1]; }
}
const Mi = (s, t, e, i, r, n, o) => { const h = s - e, l = t - i, c = Math.sqrt(h * h + l * l); return c >= r - n && c <= r + o; };
class wr {
    constructor(t = 0, e = 0, i = 0, r = 0, n = 20) { this.type = "roundedRectangle", this.x = t, this.y = e, this.width = i, this.height = r, this.radius = n; }
    getBounds(t) { return t || (t = new pt), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t; }
    clone() { return new wr(this.x, this.y, this.width, this.height, this.radius); }
    copyFrom(t) { return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this; }
    copyTo(t) { return t.copyFrom(this), t; }
    contains(t, e) { if (this.width <= 0 || this.height <= 0)
        return !1; if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
        const i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
        if (e >= this.y + i && e <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i)
            return !0;
        let r = t - (this.x + i), n = e - (this.y + i);
        const o = i * i;
        if (r * r + n * n <= o || (r = t - (this.x + this.width - i), r * r + n * n <= o) || (n = e - (this.y + this.height - i), r * r + n * n <= o) || (r = t - (this.x + i), r * r + n * n <= o))
            return !0;
    } return !1; }
    strokeContains(t, e, i, r = .5) { const { x: n, y: o, width: h, height: l, radius: c } = this, u = i * (1 - r), d = i - u, f = n + c, _ = o + c, p = h - c * 2, m = l - c * 2, g = n + h, y = o + l; return (t >= n - u && t <= n + d || t >= g - d && t <= g + u) && e >= _ && e <= _ + m || (e >= o - u && e <= o + d || e >= y - d && e <= y + u) && t >= f && t <= f + p ? !0 : t < f && e < _ && Mi(t, e, f, _, c, d, u) || t > g - c && e < _ && Mi(t, e, g - c, _, c, d, u) || t > g - c && e > y - c && Mi(t, e, g - c, y - c, c, d, u) || t < f && e > y - c && Mi(t, e, f, y - c, c, d, u); }
    toString() { return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`; }
}
const aa = {};
function zc(s, t, e) { let i = 2166136261; for (let r = 0; r < t; r++)
    i ^= s[r].uid, i = Math.imul(i, 16777619), i >>>= 0; return aa[i] || Ec(s, t, i, e); }
function Ec(s, t, e, i) { const r = {}; let n = 0; for (let h = 0; h < i; h++) {
    const l = h < t ? s[h] : it.EMPTY.source;
    r[n++] = l.source, r[n++] = l.style;
} const o = new Ei(r); return aa[e] = o, o; }
class gn {
    constructor(t) { typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength; }
    get int8View() { return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View; }
    get uint8View() { return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View; }
    get int16View() { return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View; }
    get int32View() { return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View; }
    get float64View() { return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array; }
    get bigUint64View() { return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array; }
    view(t) { return this[`${t}View`]; }
    destroy() { this.rawBinaryData = null, this.uint32View = null, this.float32View = null, this.uint16View = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._int32View = null, this._float64Array = null, this._bigUint64Array = null; }
    static sizeOf(t) { switch (t) {
        case "int8":
        case "uint8": return 1;
        case "int16":
        case "uint16": return 2;
        case "int32":
        case "uint32":
        case "float32": return 4;
        default: throw new Error(`${t} isn't a valid view type`);
    } }
}
exports.am = gn;
function mn(s, t) { const e = s.byteLength / 8 | 0, i = new Float64Array(s, 0, e); new Float64Array(t, 0, e).set(i); const n = s.byteLength - e * 8; if (n > 0) {
    const o = new Uint8Array(s, e * 8, n);
    new Uint8Array(t, e * 8, n).set(o);
} }
const Rc = { normal: "normal-npm", add: "add-npm", screen: "screen-npm" };
var Fc = (s => (s[s.DISABLED = 0] = "DISABLED", s[s.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", s[s.MASK_ACTIVE = 2] = "MASK_ACTIVE", s[s.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", s[s.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", s[s.NONE = 5] = "NONE", s))(Fc || {});
exports.b = Fc;
function yn(s, t) { return t.alphaMode === "no-premultiply-alpha" && Rc[s] || s; }
const Bc = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function Lc(s) {
    let t = "";
    for (let e = 0; e < s; ++e)
        e > 0 && (t += `
else `), e < s - 1 && (t += `if(test == ${e}.0){}`);
    return t;
}
function Oc(s, t) { if (s === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`"); const e = t.createShader(t.FRAGMENT_SHADER); try {
    for (;;) {
        const i = Bc.replace(/%forloop%/gi, Lc(s));
        if (t.shaderSource(e, i), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS))
            s = s / 2 | 0;
        else
            break;
    }
}
finally {
    t.deleteShader(e);
} return s; }
let Me = null;
function Gc() { if (Me)
    return Me; const s = Do(); return Me = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), Me = Oc(Me, s), s.getExtension("WEBGL_lose_context")?.loseContext(), Me; }
class Dc {
    constructor() { this.ids = Object.create(null), this.textures = [], this.count = 0; }
    clear() { for (let t = 0; t < this.count; t++) {
        const e = this.textures[t];
        this.textures[t] = null, this.ids[e.uid] = null;
    } this.count = 0; }
}
class Uc {
    constructor() { this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new Dc, this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0; }
    destroy() { this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null; }
}
const ii = [];
let Ni = 0;
li.register({ clear: () => { if (ii.length > 0)
        for (const s of ii)
            s && s.destroy(); ii.length = 0, Ni = 0; } });
function xn() { return Ni > 0 ? ii[--Ni] : new Uc; }
function bn(s) { ii[Ni++] = s; }
let Ye = 0;
const ha = class la {
    constructor(t) { this.uid = At("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], t = { ...la.defaultOptions, ...t }, t.maxTextures || (Z("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), t.maxTextures = Gc()); const { maxTextures: e, attributesInitialSize: i, indicesInitialSize: r } = t; this.attributeBuffer = new gn(i * 4), this.indexBuffer = new Uint16Array(r), this.maxTextures = e; }
    begin() { this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0; for (let t = 0; t < this.batchIndex; t++)
        bn(this.batches[t]); this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0; }
    add(t) { this._elements[this.elementSize++] = t, t._indexStart = this.indexSize, t._attributeStart = this.attributeSize, t._batcher = this, this.indexSize += t.indexSize, this.attributeSize += t.attributeSize * this.vertexSize; }
    checkAndUpdateTexture(t, e) { const i = t._batch.textures.ids[e._source.uid]; return !i && i !== 0 ? !1 : (t._textureId = i, t.texture = e, !0); }
    updateElement(t) { this.dirty = !0; const e = this.attributeBuffer; t.packAsQuad ? this.packQuadAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId) : this.packAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId); }
    break(t) { const e = this._elements; if (!e[this.elementStart])
        return; let i = xn(), r = i.textures; r.clear(); const n = e[this.elementStart]; let o = yn(n.blendMode, n.texture._source), h = n.topology; this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize); const l = this.attributeBuffer.float32View, c = this.attributeBuffer.uint32View, u = this.indexBuffer; let d = this._batchIndexSize, f = this._batchIndexStart, _ = "startBatch"; const p = this.maxTextures; for (let m = this.elementStart; m < this.elementSize; ++m) {
        const g = e[m];
        e[m] = null;
        const x = g.texture._source, v = yn(g.blendMode, x), b = o !== v || h !== g.topology;
        if (x._batchTick === Ye && !b) {
            g._textureId = x._textureBindLocation, d += g.indexSize, g.packAsQuad ? (this.packQuadAttributes(g, l, c, g._attributeStart, g._textureId), this.packQuadIndex(u, g._indexStart, g._attributeStart / this.vertexSize)) : (this.packAttributes(g, l, c, g._attributeStart, g._textureId), this.packIndex(g, u, g._indexStart, g._attributeStart / this.vertexSize)), g._batch = i;
            continue;
        }
        x._batchTick = Ye, (r.count >= p || b) && (this._finishBatch(i, f, d - f, r, o, h, t, _), _ = "renderBatch", f = d, o = v, h = g.topology, i = xn(), r = i.textures, r.clear(), ++Ye), g._textureId = x._textureBindLocation = r.count, r.ids[x.uid] = r.count, r.textures[r.count++] = x, g._batch = i, d += g.indexSize, g.packAsQuad ? (this.packQuadAttributes(g, l, c, g._attributeStart, g._textureId), this.packQuadIndex(u, g._indexStart, g._attributeStart / this.vertexSize)) : (this.packAttributes(g, l, c, g._attributeStart, g._textureId), this.packIndex(g, u, g._indexStart, g._attributeStart / this.vertexSize));
    } r.count > 0 && (this._finishBatch(i, f, d - f, r, o, h, t, _), f = d, ++Ye), this.elementStart = this.elementSize, this._batchIndexStart = f, this._batchIndexSize = d; }
    _finishBatch(t, e, i, r, n, o, h, l) { t.gpuBindGroup = null, t.bindGroup = null, t.action = l, t.batcher = this, t.textures = r, t.blendMode = n, t.topology = o, t.start = e, t.size = i, ++Ye, this.batches[this.batchIndex++] = t, h.add(t); }
    finish(t) { this.break(t); }
    ensureAttributeBuffer(t) { t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4); }
    ensureIndexBuffer(t) { t <= this.indexBuffer.length || this._resizeIndexBuffer(t); }
    _resizeAttributeBuffer(t) { const e = Math.max(t, this.attributeBuffer.size * 2), i = new gn(e); mn(this.attributeBuffer.rawBinaryData, i.rawBinaryData), this.attributeBuffer = i; }
    _resizeIndexBuffer(t) { const e = this.indexBuffer; let i = Math.max(t, e.length * 1.5); i += i % 2; const r = i > 65535 ? new Uint32Array(i) : new Uint16Array(i); if (r.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT)
        for (let n = 0; n < e.length; n++)
            r[n] = e[n];
    else
        mn(e.buffer, r.buffer); this.indexBuffer = r; }
    packQuadIndex(t, e, i) { t[e] = i + 0, t[e + 1] = i + 1, t[e + 2] = i + 2, t[e + 3] = i + 0, t[e + 4] = i + 2, t[e + 5] = i + 3; }
    packIndex(t, e, i, r) { const n = t.indices, o = t.indexSize, h = t.indexOffset, l = t.attributeOffset; for (let c = 0; c < o; c++)
        e[i++] = r + n[c + h] - l; }
    destroy(t = {}) { if (this.batches !== null) {
        for (let e = 0; e < this.batchIndex; e++)
            bn(this.batches[e]);
        this.batches = null, this.geometry.destroy(!0), this.geometry = null, t.shader && (this.shader?.destroy(), this.shader = null);
        for (let e = 0; e < this._elements.length; e++)
            this._elements[e] && (this._elements[e]._batch = null);
        this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
    } }
};
ha.defaultOptions = { maxTextures: null, attributesInitialSize: 4, indicesInitialSize: 6 };
let Nc = ha;
var Ut = (s => (s[s.MAP_READ = 1] = "MAP_READ", s[s.MAP_WRITE = 2] = "MAP_WRITE", s[s.COPY_SRC = 4] = "COPY_SRC", s[s.COPY_DST = 8] = "COPY_DST", s[s.INDEX = 16] = "INDEX", s[s.VERTEX = 32] = "VERTEX", s[s.UNIFORM = 64] = "UNIFORM", s[s.STORAGE = 128] = "STORAGE", s[s.INDIRECT = 256] = "INDIRECT", s[s.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", s[s.STATIC = 1024] = "STATIC", s))(Ut || {});
exports.B = Ut;
exports.BufferUsage = Ut;
class ai extends Qt {
    constructor(t) { let { data: e, size: i } = t; const { usage: r, label: n, shrinkToFit: o } = t; super(), this._gpuData = Object.create(null), this._gcLastUsed = -1, this.autoGarbageCollect = !0, this.uid = At("buffer"), this._resourceType = "buffer", this._resourceId = At("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = !0, this.destroyed = !1, e instanceof Array && (e = new Float32Array(e)), this._data = e, i ?? (i = e?.byteLength); const h = !!e; this.descriptor = { size: i, usage: r, mappedAtCreation: h, label: n }, this.shrinkToFit = o ?? !0; }
    get data() { return this._data; }
    set data(t) { this.setDataWithSize(t, t.length, !0); }
    get dataInt32() { return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32; }
    get static() { return !!(this.descriptor.usage & Ut.STATIC); }
    set static(t) { t ? this.descriptor.usage |= Ut.STATIC : this.descriptor.usage &= ~Ut.STATIC; }
    setDataWithSize(t, e, i) { if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) {
        i && this.emit("update", this);
        return;
    } const r = this._data; if (this._data = t, this._dataInt32 = null, !r || r.length !== t.length) {
        !this.shrinkToFit && r && t.byteLength < r.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = At("resource"), this.emit("change", this));
        return;
    } i && this.emit("update", this); }
    update(t) { this._updateSize = t ?? this._updateSize, this._updateID++, this.emit("update", this); }
    unload() { this.emit("unload", this); for (const t in this._gpuData)
        this._gpuData[t]?.destroy(); this._gpuData = Object.create(null); }
    destroy() { this.destroyed = !0, this.unload(), this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners(); }
}
exports.c = ai;
exports.Buffer = ai;
function ca(s, t) { if (!(s instanceof ai)) {
    let e = t ? Ut.INDEX : Ut.VERTEX;
    s instanceof Array && (t ? (s = new Uint32Array(s), e = Ut.INDEX | Ut.COPY_DST) : (s = new Float32Array(s), e = Ut.VERTEX | Ut.COPY_DST)), s = new ai({ data: s, label: t ? "index-mesh-buffer" : "vertex-mesh-buffer", usage: e });
} return s; }
function Wc(s, t, e) { const i = s.getAttribute(t); if (!i)
    return e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0, e; const r = i.buffer.data; let n = 1 / 0, o = 1 / 0, h = -1 / 0, l = -1 / 0; const c = r.BYTES_PER_ELEMENT, u = (i.offset || 0) / c, d = (i.stride || 8) / c; for (let f = u; f < r.length; f += d) {
    const _ = r[f], p = r[f + 1];
    _ > h && (h = _), p > l && (l = p), _ < n && (n = _), p < o && (o = p);
} return e.minX = n, e.minY = o, e.maxX = h, e.maxY = l, e; }
function Hc(s) { return (s instanceof ai || Array.isArray(s) || s.BYTES_PER_ELEMENT) && (s = { buffer: s }), s.buffer = ca(s.buffer, !1), s; }
class Vc extends Qt {
    constructor(t = {}) { super(), this._gpuData = Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = At("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new Zt, this._boundsDirty = !0; const { attributes: e, indexBuffer: i, topology: r } = t; if (this.buffers = [], this.attributes = {}, e)
        for (const n in e)
            this.addAttribute(n, e[n]); this.instanceCount = t.instanceCount ?? 1, i && this.addIndex(i), this.topology = r || "triangle-list"; }
    onBufferUpdate() { this._boundsDirty = !0, this.emit("update", this); }
    getAttribute(t) { return this.attributes[t]; }
    getIndex() { return this.indexBuffer; }
    getBuffer(t) { return this.getAttribute(t).buffer; }
    getSize() { for (const t in this.attributes) {
        const e = this.attributes[t];
        return e.buffer.data.length / (e.stride / 4 || e.size);
    } return 0; }
    addAttribute(t, e) { const i = Hc(e); this.buffers.indexOf(i.buffer) === -1 && (this.buffers.push(i.buffer), i.buffer.on("update", this.onBufferUpdate, this), i.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = i; }
    addIndex(t) { this.indexBuffer = ca(t, !0), this.buffers.push(this.indexBuffer); }
    get bounds() { return this._boundsDirty ? (this._boundsDirty = !1, Wc(this, "aPosition", this._bounds)) : this._bounds; }
    unload() { this.emit("unload", this); for (const t in this._gpuData)
        this._gpuData[t]?.destroy(); this._gpuData = Object.create(null); }
    destroy(t = !1) { this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach(e => e.destroy()), this.unload(), this.indexBuffer?.destroy(), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null; }
}
exports.a9 = Vc;
exports.Geometry = Vc;
const Xc = new Float32Array(1), Yc = new Uint32Array(1);
class jc extends Vc {
    constructor() { const e = new ai({ data: Xc, label: "attribute-batch-buffer", usage: Ut.VERTEX | Ut.COPY_DST, shrinkToFit: !1 }), i = new ai({ data: Yc, label: "index-batch-buffer", usage: Ut.INDEX | Ut.COPY_DST, shrinkToFit: !1 }), r = 24; super({ attributes: { aPosition: { buffer: e, format: "float32x2", stride: r, offset: 0 }, aUV: { buffer: e, format: "float32x2", stride: r, offset: 8 }, aColor: { buffer: e, format: "unorm8x4", stride: r, offset: 16 }, aTextureIdAndRound: { buffer: e, format: "uint16x2", stride: r, offset: 20 } }, indexBuffer: i }); }
}
function vn(s, t, e) { if (s)
    for (const i in s) {
        const r = i.toLocaleLowerCase(), n = t[r];
        if (n) {
            let o = s[i];
            i === "header" && (o = o.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), e && n.push(`//----${e}----//`), n.push(o);
        }
        else
            yt(`${i} placement hook does not exist in shader`);
    } }
const qc = /\{\{(.*?)\}\}/g;
function wn(s) { const t = {}; return (s.match(qc)?.map(i => i.replace(/[{()}]/g, "")) ?? []).forEach(i => { t[i] = []; }), t; }
function kn(s, t) { let e; const i = /@in\s+([^;]+);/g; for (; (e = i.exec(s)) !== null;)
    t.push(e[1]); }
function An(s, t, e = !1) {
    const i = [];
    kn(t, i), s.forEach(h => { h.header && kn(h.header, i); });
    const r = i;
    e && r.sort();
    const n = r.map((h, l) => `       @location(${l}) ${h},`).join(`
`);
    let o = t.replace(/@in\s+[^;]+;\s*/g, "");
    return o = o.replace("{{in}}", `
${n}
`), o;
}
function Sn(s, t) { let e; const i = /@out\s+([^;]+);/g; for (; (e = i.exec(s)) !== null;)
    t.push(e[1]); }
function $c(s) { const e = /\b(\w+)\s*:/g.exec(s); return e ? e[1] : ""; }
function Kc(s) { const t = /@.*?\s+/g; return s.replace(t, ""); }
function Zc(s, t) {
    const e = [];
    Sn(t, e), s.forEach(l => { l.header && Sn(l.header, e); });
    let i = 0;
    const r = e.sort().map(l => l.indexOf("builtin") > -1 ? l : `@location(${i++}) ${l}`).join(`,
`), n = e.sort().map(l => `       var ${Kc(l)};`).join(`
`), o = `return VSOutput(
            ${e.sort().map(l => ` ${$c(l)}`).join(`,
`)});`;
    let h = t.replace(/@out\s+[^;]+;\s*/g, "");
    return h = h.replace("{{struct}}", `
${r}
`), h = h.replace("{{start}}", `
${n}
`), h = h.replace("{{return}}", `
${o}
`), h;
}
function Cn(s, t) {
    let e = s;
    for (const i in t) {
        const r = t[i];
        r.join(`
`).length ? e = e.replace(`{{${i}}}`, `//-----${i} START-----//
${r.join(`
`)}
//----${i} FINISH----//`) : e = e.replace(`{{${i}}}`, "");
    }
    return e;
}
const de = Object.create(null), Ps = new Map;
let Qc = 0;
function Jc({ template: s, bits: t }) { const e = ua(s, t); if (de[e])
    return de[e]; const { vertex: i, fragment: r } = eu(s, t); return de[e] = da(i, r, t), de[e]; }
function tu({ template: s, bits: t }) { const e = ua(s, t); return de[e] || (de[e] = da(s.vertex, s.fragment, t)), de[e]; }
function eu(s, t) { const e = t.map(o => o.vertex).filter(o => !!o), i = t.map(o => o.fragment).filter(o => !!o); let r = An(e, s.vertex, !0); r = Zc(e, r); const n = An(i, s.fragment, !0); return { vertex: r, fragment: n }; }
function ua(s, t) { return t.map(e => (Ps.has(e) || Ps.set(e, Qc++), Ps.get(e))).sort((e, i) => e - i).join("-") + s.vertex + s.fragment; }
function da(s, t, e) { const i = wn(s), r = wn(t); return e.forEach(n => { vn(n.vertex, i, n.name), vn(n.fragment, r, n.name); }), { vertex: Cn(s, i), fragment: Cn(t, r) }; }
const iu = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`, su = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`, ru = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`, nu = `

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`, ou = { name: "global-uniforms-bit", vertex: { header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        ` } }, au = { name: "global-uniforms-bit", vertex: { header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        ` } };
function hu({ bits: s, name: t }) { const e = Jc({ template: { fragment: su, vertex: iu }, bits: [ou, ...s] }); return fe.from({ name: t, vertex: { source: e.vertex, entryPoint: "main" }, fragment: { source: e.fragment, entryPoint: "main" } }); }
function lu({ bits: s, name: t }) { return new Le({ name: t, ...tu({ template: { vertex: ru, fragment: nu }, bits: [au, ...s] }) }); }
const cu = { name: "color-bit", vertex: { header: `
            @in aColor: vec4<f32>;
        `, main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        ` } }, uu = { name: "color-bit", vertex: { header: `
            in vec4 aColor;
        `, main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        ` } }, Ts = {};
exports.o = cu;
exports.ac = uu;
function du(s) {
    const t = [];
    if (s === 1)
        t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
    else {
        let e = 0;
        for (let i = 0; i < s; i++)
            t.push(`@group(1) @binding(${e++}) var textureSource${i + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${e++}) var textureSampler${i + 1}: sampler;`);
    }
    return t.join(`
`);
}
function _u(s) {
    const t = [];
    if (s === 1)
        t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
    else {
        t.push("switch vTextureId {");
        for (let e = 0; e < s; e++)
            e === s - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`), t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
        t.push("}");
    }
    return t.join(`
`);
}
function fu(s) {
    return Ts[s] || (Ts[s] = { name: "texture-batch-bit", vertex: { header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `, main: `
                vTextureId = aTextureIdAndRound.y;
            `, end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            ` }, fragment: { header: `
                @in @interpolate(flat) vTextureId: u32;

                ${du(s)}
            `, main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${_u(s)}
            ` } }), Ts[s];
}
const Is = {};
function pu(s) {
    const t = [];
    for (let e = 0; e < s; e++)
        e > 0 && t.push("else"), e < s - 1 && t.push(`if(vTextureId < ${e}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${e}], vUV);`), t.push("}");
    return t.join(`
`);
}
function gu(s) {
    return Is[s] || (Is[s] = { name: "texture-batch-bit", vertex: { header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `, main: `
                vTextureId = aTextureIdAndRound.y;
            `, end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            ` }, fragment: { header: `
                in float vTextureId;

                uniform sampler2D uTextures[${s}];

            `, main: `

                ${pu(s)}
            ` } }), Is[s];
}
const mu = { name: "round-pixels-bit", vertex: { header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        ` } }, yu = { name: "round-pixels-bit", vertex: { header: `
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        ` } }, Mn = {};
exports.q = mu;
exports.ae = yu;
function xu(s) { let t = Mn[s]; if (t)
    return t; const e = new Int32Array(s); for (let i = 0; i < s; i++)
    e[i] = i; return t = Mn[s] = new Vo({ uTextures: { value: e, type: "i32", size: s } }, { isStatic: !0 }), t; }
class Pn extends Xi {
    constructor(t) { const e = lu({ name: "batch", bits: [uu, gu(t), yu] }), i = hu({ name: "batch", bits: [cu, fu(t), mu] }); super({ glProgram: e, gpuProgram: i, resources: { batchSamplers: xu(t) } }), this.maxTextures = t; }
}
let je = null;
const _a = class fa extends Nc {
    constructor(t) { super(t), this.geometry = new jc, this.name = fa.extension.name, this.vertexSize = 6, je ?? (je = new Pn(t.maxTextures)), this.shader = je; }
    packAttributes(t, e, i, r, n) { const o = n << 16 | t.roundPixels & 65535, h = t.transform, l = h.a, c = h.b, u = h.c, d = h.d, f = h.tx, _ = h.ty, { positions: p, uvs: m } = t, g = t.color, y = t.attributeOffset, x = y + t.attributeSize; for (let v = y; v < x; v++) {
        const b = v * 2, C = p[b], w = p[b + 1];
        e[r++] = l * C + u * w + f, e[r++] = d * w + c * C + _, e[r++] = m[b], e[r++] = m[b + 1], i[r++] = g, i[r++] = o;
    } }
    packQuadAttributes(t, e, i, r, n) { const o = t.texture, h = t.transform, l = h.a, c = h.b, u = h.c, d = h.d, f = h.tx, _ = h.ty, p = t.bounds, m = p.maxX, g = p.minX, y = p.maxY, x = p.minY, v = o.uvs, b = t.color, C = n << 16 | t.roundPixels & 65535; e[r + 0] = l * g + u * x + f, e[r + 1] = d * x + c * g + _, e[r + 2] = v.x0, e[r + 3] = v.y0, i[r + 4] = b, i[r + 5] = C, e[r + 6] = l * m + u * x + f, e[r + 7] = d * x + c * m + _, e[r + 8] = v.x1, e[r + 9] = v.y1, i[r + 10] = b, i[r + 11] = C, e[r + 12] = l * m + u * y + f, e[r + 13] = d * y + c * m + _, e[r + 14] = v.x2, e[r + 15] = v.y2, i[r + 16] = b, i[r + 17] = C, e[r + 18] = l * g + u * y + f, e[r + 19] = d * y + c * g + _, e[r + 20] = v.x3, e[r + 21] = v.y3, i[r + 22] = b, i[r + 23] = C; }
    _updateMaxTextures(t) { this.shader.maxTextures !== t && (je = new Pn(t), this.shader = je); }
    destroy() { this.shader = null, super.destroy(); }
};
_a.extension = { type: [H.Batcher], name: "default" };
let bu = _a;
exports.z = bu;
class vu {
    constructor(t) { this.items = Object.create(null); const { renderer: e, type: i, onUnload: r, priority: n, name: o } = t; this._renderer = e, e.gc.addResourceHash(this, "items", i, n ?? 0), this._onUnload = r, this.name = o; }
    add(t) { return this.items[t.uid] ? !1 : (this.items[t.uid] = t, t.once("unload", this.remove, this), t._gcLastUsed = this._renderer.gc.now, !0); }
    remove(t, ...e) { if (!this.items[t.uid])
        return; const i = t._gpuData[this._renderer.uid]; i && (this._onUnload?.(t, ...e), i.destroy(), t._gpuData[this._renderer.uid] = null, this.items[t.uid] = null); }
    removeAll(...t) { Object.values(this.items).forEach(e => e && this.remove(e, ...t)); }
    destroy(...t) { this.removeAll(...t), this.items = Object.create(null), this._renderer = null, this._onUnload = null; }
}
exports.G = vu;
function wu(s, t, e, i, r, n, o, h = null) { let l = 0; e *= t, r *= n; const c = h.a, u = h.b, d = h.c, f = h.d, _ = h.tx, p = h.ty; for (; l < o;) {
    const m = s[e], g = s[e + 1];
    i[r] = c * m + d * g + _, i[r + 1] = u * m + f * g + p, r += n, e += t, l++;
} }
function ku(s, t, e, i) { let r = 0; for (t *= e; r < i;)
    s[t] = 0, s[t + 1] = 0, t += e, r++; }
function pa(s, t, e, i, r) { const n = t.a, o = t.b, h = t.c, l = t.d, c = t.tx, u = t.ty; e || (e = 0), i || (i = 2), r || (r = s.length / i - e); let d = e * i; for (let f = 0; f < r; f++) {
    const _ = s[d], p = s[d + 1];
    s[d] = n * _ + h * p + c, s[d + 1] = o * _ + l * p + u, d += i;
} }
const Au = new rt;
class ga {
    constructor() { this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null; }
    get uvs() { return this.geometryData.uvs; }
    get positions() { return this.geometryData.vertices; }
    get indices() { return this.geometryData.indices; }
    get blendMode() { return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal"; }
    get color() { const t = this.baseColor, e = t >> 16 | t & 65280 | (t & 255) << 16, i = this.renderable; return i ? xo(e, i.groupColor) + (this.alpha * i.groupAlpha * 255 << 24) : e + (this.alpha * 255 << 24); }
    get transform() { return this.renderable?.groupTransform || Au; }
    copyTo(t) { t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.attributeOffset = this.attributeOffset, t.attributeSize = this.attributeSize, t.baseColor = this.baseColor, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData, t.topology = this.topology; }
    reset() { this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list"; }
    destroy() { this.renderable = null, this.texture = null, this.geometryData = null, this._batcher = null, this._batch = null; }
}
exports.ak = ga;
const hi = { extension: { type: H.ShapeBuilder, name: "circle" }, build(s, t) { let e, i, r, n, o, h; if (s.type === "circle") {
        const b = s;
        if (o = h = b.radius, o <= 0)
            return !1;
        e = b.x, i = b.y, r = n = 0;
    }
    else if (s.type === "ellipse") {
        const b = s;
        if (o = b.halfWidth, h = b.halfHeight, o <= 0 || h <= 0)
            return !1;
        e = b.x, i = b.y, r = n = 0;
    }
    else {
        const b = s, C = b.width / 2, w = b.height / 2;
        e = b.x + C, i = b.y + w, o = h = Math.max(0, Math.min(b.radius, Math.min(C, w))), r = C - o, n = w - h;
    } if (r < 0 || n < 0)
        return !1; const l = Math.ceil(2.3 * Math.sqrt(o + h)), c = l * 8 + (r ? 4 : 0) + (n ? 4 : 0); if (c === 0)
        return !1; if (l === 0)
        return t[0] = t[6] = e + r, t[1] = t[3] = i + n, t[2] = t[4] = e - r, t[5] = t[7] = i - n, !0; let u = 0, d = l * 4 + (r ? 2 : 0) + 2, f = d, _ = c, p = r + o, m = n, g = e + p, y = e - p, x = i + m; if (t[u++] = g, t[u++] = x, t[--d] = x, t[--d] = y, n) {
        const b = i - m;
        t[f++] = y, t[f++] = b, t[--_] = b, t[--_] = g;
    } for (let b = 1; b < l; b++) {
        const C = Math.PI / 2 * (b / l), w = r + Math.cos(C) * o, k = n + Math.sin(C) * h, z = e + w, S = e - w, T = i + k, E = i - k;
        t[u++] = z, t[u++] = T, t[--d] = T, t[--d] = S, t[f++] = S, t[f++] = E, t[--_] = E, t[--_] = z;
    } p = r, m = n + h, g = e + p, y = e - p, x = i + m; const v = i - m; return t[u++] = g, t[u++] = x, t[--_] = v, t[--_] = g, r && (t[u++] = y, t[u++] = x, t[--_] = v, t[--_] = y), !0; }, triangulate(s, t, e, i, r, n) { if (s.length === 0)
        return; let o = 0, h = 0; for (let u = 0; u < s.length; u += 2)
        o += s[u], h += s[u + 1]; o /= s.length / 2, h /= s.length / 2; let l = i; t[l * e] = o, t[l * e + 1] = h; const c = l++; for (let u = 0; u < s.length; u += 2)
        t[l * e] = s[u], t[l * e + 1] = s[u + 1], u > 0 && (r[n++] = l, r[n++] = c, r[n++] = l - 1), l++; r[n++] = c + 1, r[n++] = c, r[n++] = l - 1; } }, Su = { ...hi, extension: { ...hi.extension, name: "ellipse" } }, Cu = { ...hi, extension: { ...hi.extension, name: "roundedRectangle" } }, ma = 1e-4, Tn = 1e-4;
function Mu(s) { const t = s.length; if (t < 6)
    return 1; let e = 0; for (let i = 0, r = s[t - 2], n = s[t - 1]; i < t; i += 2) {
    const o = s[i], h = s[i + 1];
    e += (o - r) * (h + n), r = o, n = h;
} return e < 0 ? -1 : 1; }
function In(s, t, e, i, r, n, o, h) { const l = s - e * r, c = t - i * r, u = s + e * n, d = t + i * n; let f, _; o ? (f = i, _ = -e) : (f = -i, _ = e); const p = l + f, m = c + _, g = u + f, y = d + _; return h.push(p, m), h.push(g, y), 2; }
function ge(s, t, e, i, r, n, o, h) { const l = e - s, c = i - t; let u = Math.atan2(l, c), d = Math.atan2(r - s, n - t); h && u < d ? u += Math.PI * 2 : !h && u > d && (d += Math.PI * 2); let f = u; const _ = d - u, p = Math.abs(_), m = Math.sqrt(l * l + c * c), g = (15 * p * Math.sqrt(m) / Math.PI >> 0) + 1, y = _ / g; if (f += y, h) {
    o.push(s, t), o.push(e, i);
    for (let x = 1, v = f; x < g; x++, v += y)
        o.push(s, t), o.push(s + Math.sin(v) * m, t + Math.cos(v) * m);
    o.push(s, t), o.push(r, n);
}
else {
    o.push(e, i), o.push(s, t);
    for (let x = 1, v = f; x < g; x++, v += y)
        o.push(s + Math.sin(v) * m, t + Math.cos(v) * m), o.push(s, t);
    o.push(r, n), o.push(s, t);
} return g * 2; }
function Pu(s, t, e, i, r, n) { const o = ma; if (s.length === 0)
    return; const h = t; let l = h.alignment; if (t.alignment !== .5) {
    let M = Mu(s);
    l = (l - .5) * M + .5;
} const c = new et(s[0], s[1]), u = new et(s[s.length - 2], s[s.length - 1]), d = i, f = Math.abs(c.x - u.x) < o && Math.abs(c.y - u.y) < o; if (d) {
    s = s.slice(), f && (s.pop(), s.pop(), u.set(s[s.length - 2], s[s.length - 1]));
    const M = (c.x + u.x) * .5, P = (u.y + c.y) * .5;
    s.unshift(M, P), s.push(M, P);
} const _ = r, p = s.length / 2; let m = s.length; const g = _.length / 2, y = h.width / 2, x = y * y, v = h.miterLimit * h.miterLimit; let b = s[0], C = s[1], w = s[2], k = s[3], z = 0, S = 0, T = -(C - k), E = b - w, L = 0, D = 0, R = Math.sqrt(T * T + E * E); T /= R, E /= R, T *= y, E *= y; const U = l, F = (1 - U) * 2, O = U * 2; d || (h.cap === "round" ? m += ge(b - T * (F - O) * .5, C - E * (F - O) * .5, b - T * F, C - E * F, b + T * O, C + E * O, _, !0) + 2 : h.cap === "square" && (m += In(b, C, T, E, F, O, !0, _))), _.push(b - T * F, C - E * F), _.push(b + T * O, C + E * O); for (let M = 1; M < p - 1; ++M) {
    b = s[(M - 1) * 2], C = s[(M - 1) * 2 + 1], w = s[M * 2], k = s[M * 2 + 1], z = s[(M + 1) * 2], S = s[(M + 1) * 2 + 1], T = -(C - k), E = b - w, R = Math.sqrt(T * T + E * E), T /= R, E /= R, T *= y, E *= y, L = -(k - S), D = w - z, R = Math.sqrt(L * L + D * D), L /= R, D /= R, L *= y, D *= y;
    const P = w - b, j = C - k, G = w - z, q = S - k, at = P * G + j * q, V = j * G - q * P, ot = V < 0;
    if (Math.abs(V) < .001 * Math.abs(at)) {
        _.push(w - T * F, k - E * F), _.push(w + T * O, k + E * O), at >= 0 && (h.join === "round" ? m += ge(w, k, w - T * F, k - E * F, w - L * F, k - D * F, _, !1) + 4 : m += 2, _.push(w - L * O, k - D * O), _.push(w + L * F, k + D * F));
        continue;
    }
    const $ = (-T + b) * (-E + k) - (-T + w) * (-E + C), tt = (-L + z) * (-D + k) - (-L + w) * (-D + S), B = (P * tt - G * $) / V, X = (q * $ - j * tt) / V, gt = (B - w) * (B - w) + (X - k) * (X - k), I = w + (B - w) * F, Y = k + (X - k) * F, J = w - (B - w) * O, K = k - (X - k) * O, st = Math.min(P * P + j * j, G * G + q * q), bt = ot ? F : O, Ct = st + bt * bt * x;
    gt <= Ct ? h.join === "bevel" || gt / x > v ? (ot ? (_.push(I, Y), _.push(w + T * O, k + E * O), _.push(I, Y), _.push(w + L * O, k + D * O)) : (_.push(w - T * F, k - E * F), _.push(J, K), _.push(w - L * F, k - D * F), _.push(J, K)), m += 2) : h.join === "round" ? ot ? (_.push(I, Y), _.push(w + T * O, k + E * O), m += ge(w, k, w + T * O, k + E * O, w + L * O, k + D * O, _, !0) + 4, _.push(I, Y), _.push(w + L * O, k + D * O)) : (_.push(w - T * F, k - E * F), _.push(J, K), m += ge(w, k, w - T * F, k - E * F, w - L * F, k - D * F, _, !1) + 4, _.push(w - L * F, k - D * F), _.push(J, K)) : (_.push(I, Y), _.push(J, K)) : (_.push(w - T * F, k - E * F), _.push(w + T * O, k + E * O), h.join === "round" ? ot ? m += ge(w, k, w + T * O, k + E * O, w + L * O, k + D * O, _, !0) + 2 : m += ge(w, k, w - T * F, k - E * F, w - L * F, k - D * F, _, !1) + 2 : h.join === "miter" && gt / x <= v && (ot ? (_.push(J, K), _.push(J, K)) : (_.push(I, Y), _.push(I, Y)), m += 2), _.push(w - L * F, k - D * F), _.push(w + L * O, k + D * O), m += 2);
} b = s[(p - 2) * 2], C = s[(p - 2) * 2 + 1], w = s[(p - 1) * 2], k = s[(p - 1) * 2 + 1], T = -(C - k), E = b - w, R = Math.sqrt(T * T + E * E), T /= R, E /= R, T *= y, E *= y, _.push(w - T * F, k - E * F), _.push(w + T * O, k + E * O), d || (h.cap === "round" ? m += ge(w - T * (F - O) * .5, k - E * (F - O) * .5, w - T * F, k - E * F, w + T * O, k + E * O, _, !1) + 2 : h.cap === "square" && (m += In(w, k, T, E, F, O, !1, _))); const nt = Tn * Tn; for (let M = g; M < m + g - 2; ++M)
    b = _[M * 2], C = _[M * 2 + 1], w = _[(M + 1) * 2], k = _[(M + 1) * 2 + 1], z = _[(M + 2) * 2], S = _[(M + 2) * 2 + 1], !(Math.abs(b * (k - S) + w * (S - C) + z * (C - k)) < nt) && n.push(M, M + 1, M + 2); }
function Tu(s, t, e, i) { const r = ma; if (s.length === 0)
    return; const n = s[0], o = s[1], h = s[s.length - 2], l = s[s.length - 1], c = t || Math.abs(n - h) < r && Math.abs(o - l) < r, u = e, d = s.length / 2, f = u.length / 2; for (let _ = 0; _ < d; _++)
    u.push(s[_ * 2]), u.push(s[_ * 2 + 1]); for (let _ = 0; _ < d - 1; _++)
    i.push(f + _, f + _ + 1); c && i.push(f + d - 1, f); }
function ya(s, t, e, i, r, n, o) { const h = fc(s, t, 2); if (!h)
    return; for (let c = 0; c < h.length; c += 3)
    n[o++] = h[c] + r, n[o++] = h[c + 1] + r, n[o++] = h[c + 2] + r; let l = r * i; for (let c = 0; c < s.length; c += 2)
    e[l] = s[c], e[l + 1] = s[c + 1], l += i; }
const Iu = [], zu = { extension: { type: H.ShapeBuilder, name: "polygon" }, build(s, t) { for (let e = 0; e < s.points.length; e++)
        t[e] = s.points[e]; return !0; }, triangulate(s, t, e, i, r, n) { ya(s, Iu, t, e, i, r, n); } }, Eu = { extension: { type: H.ShapeBuilder, name: "rectangle" }, build(s, t) { const e = s, i = e.x, r = e.y, n = e.width, o = e.height; return n > 0 && o > 0 ? (t[0] = i, t[1] = r, t[2] = i + n, t[3] = r, t[4] = i + n, t[5] = r + o, t[6] = i, t[7] = r + o, !0) : !1; }, triangulate(s, t, e, i, r, n) { let o = 0; i *= e, t[i + o] = s[0], t[i + o + 1] = s[1], o += e, t[i + o] = s[2], t[i + o + 1] = s[3], o += e, t[i + o] = s[6], t[i + o + 1] = s[7], o += e, t[i + o] = s[4], t[i + o + 1] = s[5], o += e; const h = i / e; r[n++] = h, r[n++] = h + 1, r[n++] = h + 2, r[n++] = h + 1, r[n++] = h + 3, r[n++] = h + 2; } }, Ru = { extension: { type: H.ShapeBuilder, name: "triangle" }, build(s, t) { return t[0] = s.x, t[1] = s.y, t[2] = s.x2, t[3] = s.y2, t[4] = s.x3, t[5] = s.y3, !0; }, triangulate(s, t, e, i, r, n) { let o = 0; i *= e, t[i + o] = s[0], t[i + o + 1] = s[1], o += e, t[i + o] = s[2], t[i + o + 1] = s[3], o += e, t[i + o] = s[4], t[i + o + 1] = s[5]; const h = i / e; r[n++] = h, r[n++] = h + 1, r[n++] = h + 2; } }, Fu = new rt, Bu = new pt;
function Lu(s, t, e, i) { const r = t.matrix ? s.copyFrom(t.matrix).invert() : s.identity(); if (t.textureSpace === "local") {
    const o = e.getBounds(Bu);
    t.width && o.pad(t.width);
    const { x: h, y: l } = o, c = 1 / o.width, u = 1 / o.height, d = -h * c, f = -l * u, _ = r.a, p = r.b, m = r.c, g = r.d;
    r.a *= c, r.b *= c, r.c *= u, r.d *= u, r.tx = d * _ + f * m + r.tx, r.ty = d * p + f * g + r.ty;
}
else
    r.translate(t.texture.frame.x, t.texture.frame.y), r.scale(1 / t.texture.source.width, 1 / t.texture.source.height); const n = t.texture.source.style; return !(t.fill instanceof le) && n.addressMode === "clamp-to-edge" && (n.addressMode = "repeat", n.update()), i && r.append(Fu.copyFrom(i).invert()), r; }
const ji = {};
Et.handleByMap(H.ShapeBuilder, ji);
Et.add(Eu, zu, Ru, hi, Su, Cu);
const Ou = new pt, Gu = new rt;
function Du(s, t) { const { geometryData: e, batches: i } = t; i.length = 0, e.indices.length = 0, e.vertices.length = 0, e.uvs.length = 0; for (let r = 0; r < s.instructions.length; r++) {
    const n = s.instructions[r];
    if (n.action === "texture")
        Uu(n.data, i, e);
    else if (n.action === "fill" || n.action === "stroke") {
        const o = n.action === "stroke", h = n.data.path.shapePath, l = n.data.style, c = n.data.hole;
        o && c && zn(c.shapePath, l, !0, i, e), c && (h.shapePrimitives[h.shapePrimitives.length - 1].holes = c.shapePath.shapePrimitives), zn(h, l, o, i, e);
    }
} }
function Uu(s, t, e) { const i = [], r = ji.rectangle, n = Ou; n.x = s.dx, n.y = s.dy, n.width = s.dw, n.height = s.dh; const o = s.transform; if (!r.build(n, i))
    return; const { vertices: h, uvs: l, indices: c } = e, u = c.length, d = h.length / 2; o && pa(i, o), r.triangulate(i, h, 2, d, c, u); const f = s.image, _ = f.uvs; l.push(_.x0, _.y0, _.x1, _.y1, _.x3, _.y3, _.x2, _.y2); const p = jt.get(ga); p.indexOffset = u, p.indexSize = c.length - u, p.attributeOffset = d, p.attributeSize = h.length / 2 - d, p.baseColor = s.style, p.alpha = s.alpha, p.texture = f, p.geometryData = e, t.push(p); }
function zn(s, t, e, i, r) { const { vertices: n, uvs: o, indices: h } = r; s.shapePrimitives.forEach(({ shape: l, transform: c, holes: u }) => { const d = [], f = ji[l.type]; if (!f.build(l, d))
    return; const _ = h.length, p = n.length / 2; let m = "triangle-list"; if (c && pa(d, c), e) {
    const v = l.closePath ?? !0, b = t;
    b.pixelLine ? (Tu(d, v, n, h), m = "line-list") : Pu(d, b, !1, v, n, h);
}
else if (u) {
    const v = [], b = d.slice();
    Nu(u).forEach(w => { v.push(b.length / 2), b.push(...w); }), ya(b, v, n, 2, p, h, _);
}
else
    f.triangulate(d, n, 2, p, h, _); const g = o.length / 2, y = t.texture; if (y !== it.WHITE) {
    const v = Lu(Gu, t, l, c);
    wu(n, 2, p, o, g, 2, n.length / 2 - p, v);
}
else
    ku(o, g, 2, n.length / 2 - p); const x = jt.get(ga); x.indexOffset = _, x.indexSize = h.length - _, x.attributeOffset = p, x.attributeSize = n.length / 2 - p, x.baseColor = t.color, x.alpha = t.alpha, x.texture = y, x.geometryData = r, x.topology = m, i.push(x); }); }
function Nu(s) { const t = []; for (let e = 0; e < s.length; e++) {
    const i = s[e].shape, r = [];
    ji[i.type].build(i, r) && t.push(r);
} return t; }
class Wu {
    constructor() { this.batches = [], this.geometryData = { vertices: [], uvs: [], indices: [] }; }
    reset() { this.batches && this.batches.forEach(t => { jt.return(t); }), this.graphicsData && jt.return(this.graphicsData), this.isBatchable = !1, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null; }
    destroy() { this.reset(), this.batches = null, this.geometryData = null; }
}
class Hu {
    constructor() { this.instructions = new ko; }
    init(t) { const e = t.maxTextures; this.batcher ? this.batcher._updateMaxTextures(e) : this.batcher = new bu({ maxTextures: e }), this.instructions.reset(); }
    get geometry() { return Z(Oh, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry; }
    destroy() { this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null; }
}
const kr = class rr {
    constructor(t) { this._renderer = t, this._managedContexts = new vu({ renderer: t, type: "resource", name: "graphicsContext" }); }
    init(t) { rr.defaultOptions.bezierSmoothness = t?.bezierSmoothness ?? rr.defaultOptions.bezierSmoothness; }
    getContextRenderData(t) { return t._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(t); }
    updateGpuContext(t) { const e = !!t._gpuData[this._renderer.uid], i = t._gpuData[this._renderer.uid] || this._initContext(t); if (t.dirty || !e) {
        e && i.reset(), Du(t, i);
        const r = t.batchMode;
        t.customShader || r === "no-batch" ? i.isBatchable = !1 : r === "auto" ? i.isBatchable = i.geometryData.vertices.length < 400 : i.isBatchable = !0, t.dirty = !1;
    } return i; }
    getGpuContext(t) { return t._gpuData[this._renderer.uid] || this._initContext(t); }
    _initContextRenderData(t) { const e = jt.get(Hu, { maxTextures: this._renderer.limits.maxBatchableTextures }), i = t._gpuData[this._renderer.uid], { batches: r, geometryData: n } = i; i.graphicsData = e; const o = n.vertices.length, h = n.indices.length; for (let d = 0; d < r.length; d++)
        r[d].applyTransform = !1; const l = e.batcher; l.ensureAttributeBuffer(o), l.ensureIndexBuffer(h), l.begin(); for (let d = 0; d < r.length; d++) {
        const f = r[d];
        l.add(f);
    } l.finish(e.instructions); const c = l.geometry; c.indexBuffer.setDataWithSize(l.indexBuffer, l.indexSize, !0), c.buffers[0].setDataWithSize(l.attributeBuffer.float32View, l.attributeSize, !0); const u = l.batches; for (let d = 0; d < u.length; d++) {
        const f = u[d];
        f.bindGroup = zc(f.textures.textures, f.textures.count, this._renderer.limits.maxBatchableTextures);
    } return e; }
    _initContext(t) { const e = new Wu; return e.context = t, t._gpuData[this._renderer.uid] = e, this._managedContexts.add(t), e; }
    destroy() { this._managedContexts.destroy(), this._renderer = null; }
};
kr.extension = { type: [H.WebGLSystem, H.WebGPUSystem, H.CanvasSystem], name: "graphicsContext" };
kr.defaultOptions = { bezierSmoothness: .5 };
let xa = kr;
exports.at = xa;
const Vu = 8, Pi = 11920929e-14, Xu = 1;
function ba(s, t, e, i, r, n, o, h, l, c) { const d = Math.min(.99, Math.max(0, c ?? xa.defaultOptions.bezierSmoothness)); let f = (Xu - d) / 1; return f *= f, Yu(t, e, i, r, n, o, h, l, s, f), s; }
function Yu(s, t, e, i, r, n, o, h, l, c) { nr(s, t, e, i, r, n, o, h, l, c, 0), l.push(o, h); }
function nr(s, t, e, i, r, n, o, h, l, c, u) { if (u > Vu)
    return; const d = (s + e) / 2, f = (t + i) / 2, _ = (e + r) / 2, p = (i + n) / 2, m = (r + o) / 2, g = (n + h) / 2, y = (d + _) / 2, x = (f + p) / 2, v = (_ + m) / 2, b = (p + g) / 2, C = (y + v) / 2, w = (x + b) / 2; if (u > 0) {
    let k = o - s, z = h - t;
    const S = Math.abs((e - o) * z - (i - h) * k), T = Math.abs((r - o) * z - (n - h) * k);
    if (S > Pi && T > Pi) {
        if ((S + T) * (S + T) <= c * (k * k + z * z)) {
            l.push(C, w);
            return;
        }
    }
    else if (S > Pi) {
        if (S * S <= c * (k * k + z * z)) {
            l.push(C, w);
            return;
        }
    }
    else if (T > Pi) {
        if (T * T <= c * (k * k + z * z)) {
            l.push(C, w);
            return;
        }
    }
    else if (k = C - (s + o) / 2, z = w - (t + h) / 2, k * k + z * z <= c) {
        l.push(C, w);
        return;
    }
} nr(s, t, d, f, y, x, C, w, l, c, u + 1), nr(C, w, v, b, m, g, o, h, l, c, u + 1); }
const ju = 8, qu = 11920929e-14, $u = 1;
function Ku(s, t, e, i, r, n, o, h) { const c = Math.min(.99, Math.max(0, h ?? xa.defaultOptions.bezierSmoothness)); let u = ($u - c) / 1; return u *= u, Zu(t, e, i, r, n, o, s, u), s; }
function Zu(s, t, e, i, r, n, o, h) { or(o, s, t, e, i, r, n, h, 0), o.push(r, n); }
function or(s, t, e, i, r, n, o, h, l) { if (l > ju)
    return; const c = (t + i) / 2, u = (e + r) / 2, d = (i + n) / 2, f = (r + o) / 2, _ = (c + d) / 2, p = (u + f) / 2; let m = n - t, g = o - e; const y = Math.abs((i - n) * g - (r - o) * m); if (y > qu) {
    if (y * y <= h * (m * m + g * g)) {
        s.push(_, p);
        return;
    }
}
else if (m = _ - (t + n) / 2, g = p - (e + o) / 2, m * m + g * g <= h) {
    s.push(_, p);
    return;
} or(s, t, e, c, u, _, p, h, l + 1), or(s, _, p, d, f, n, o, h, l + 1); }
function va(s, t, e, i, r, n, o, h) { let l = Math.abs(r - n); (!o && r > n || o && n > r) && (l = 2 * Math.PI - l), h || (h = Math.max(6, Math.floor(6 * Math.pow(i, 1 / 3) * (l / Math.PI)))), h = Math.max(h, 3); let c = l / h, u = r; c *= o ? -1 : 1; for (let d = 0; d < h + 1; d++) {
    const f = Math.cos(u), _ = Math.sin(u), p = t + f * i, m = e + _ * i;
    s.push(p, m), u += c;
} }
function Qu(s, t, e, i, r, n) { const o = s[s.length - 2], l = s[s.length - 1] - e, c = o - t, u = r - e, d = i - t, f = Math.abs(l * d - c * u); if (f < 1e-8 || n === 0) {
    (s[s.length - 2] !== t || s[s.length - 1] !== e) && s.push(t, e);
    return;
} const _ = l * l + c * c, p = u * u + d * d, m = l * u + c * d, g = n * Math.sqrt(_) / f, y = n * Math.sqrt(p) / f, x = g * m / _, v = y * m / p, b = g * d + y * c, C = g * u + y * l, w = c * (y + x), k = l * (y + x), z = d * (g + v), S = u * (g + v), T = Math.atan2(k - C, w - b), E = Math.atan2(S - C, z - b); va(s, b + t, C + e, n, T, E, c * u > d * l); }
const si = Math.PI * 2, zs = { centerX: 0, centerY: 0, ang1: 0, ang2: 0 }, Es = ({ x: s, y: t }, e, i, r, n, o, h, l) => { s *= e, t *= i; const c = r * s - n * t, u = n * s + r * t; return l.x = c + o, l.y = u + h, l; };
function Ju(s, t) { const e = t === -1.5707963267948966 ? -.551915024494 : 1.3333333333333333 * Math.tan(t / 4), i = t === 1.5707963267948966 ? .551915024494 : e, r = Math.cos(s), n = Math.sin(s), o = Math.cos(s + t), h = Math.sin(s + t); return [{ x: r - n * i, y: n + r * i }, { x: o + h * i, y: h - o * i }, { x: o, y: h }]; }
const En = (s, t, e, i) => { const r = s * i - t * e < 0 ? -1 : 1; let n = s * e + t * i; return n > 1 && (n = 1), n < -1 && (n = -1), r * Math.acos(n); }, td = (s, t, e, i, r, n, o, h, l, c, u, d, f) => { const _ = Math.pow(r, 2), p = Math.pow(n, 2), m = Math.pow(u, 2), g = Math.pow(d, 2); let y = _ * p - _ * g - p * m; y < 0 && (y = 0), y /= _ * g + p * m, y = Math.sqrt(y) * (o === h ? -1 : 1); const x = y * r / n * d, v = y * -n / r * u, b = c * x - l * v + (s + e) / 2, C = l * x + c * v + (t + i) / 2, w = (u - x) / r, k = (d - v) / n, z = (-u - x) / r, S = (-d - v) / n, T = En(1, 0, w, k); let E = En(w, k, z, S); h === 0 && E > 0 && (E -= si), h === 1 && E < 0 && (E += si), f.centerX = b, f.centerY = C, f.ang1 = T, f.ang2 = E; };
function ed(s, t, e, i, r, n, o, h = 0, l = 0, c = 0) { if (n === 0 || o === 0)
    return; const u = Math.sin(h * si / 360), d = Math.cos(h * si / 360), f = d * (t - i) / 2 + u * (e - r) / 2, _ = -u * (t - i) / 2 + d * (e - r) / 2; if (f === 0 && _ === 0)
    return; n = Math.abs(n), o = Math.abs(o); const p = Math.pow(f, 2) / Math.pow(n, 2) + Math.pow(_, 2) / Math.pow(o, 2); p > 1 && (n *= Math.sqrt(p), o *= Math.sqrt(p)), td(t, e, i, r, n, o, l, c, u, d, f, _, zs); let { ang1: m, ang2: g } = zs; const { centerX: y, centerY: x } = zs; let v = Math.abs(g) / (si / 4); Math.abs(1 - v) < 1e-7 && (v = 1); const b = Math.max(Math.ceil(v), 1); g /= b; let C = s[s.length - 2], w = s[s.length - 1]; const k = { x: 0, y: 0 }; for (let z = 0; z < b; z++) {
    const S = Ju(m, g), { x: T, y: E } = Es(S[0], n, o, d, u, y, x, k), { x: L, y: D } = Es(S[1], n, o, d, u, y, x, k), { x: R, y: U } = Es(S[2], n, o, d, u, y, x, k);
    ba(s, C, w, T, E, L, D, R, U), C = R, w = U, m += g;
} }
function id(s, t, e) { const i = (o, h) => { const l = h.x - o.x, c = h.y - o.y, u = Math.sqrt(l * l + c * c), d = l / u, f = c / u; return { len: u, nx: d, ny: f }; }, r = (o, h) => { o === 0 ? s.moveTo(h.x, h.y) : s.lineTo(h.x, h.y); }; let n = t[t.length - 1]; for (let o = 0; o < t.length; o++) {
    const h = t[o % t.length], l = h.radius ?? e;
    if (l <= 0) {
        r(o, h), n = h;
        continue;
    }
    const c = t[(o + 1) % t.length], u = i(h, n), d = i(h, c);
    if (u.len < 1e-4 || d.len < 1e-4) {
        r(o, h), n = h;
        continue;
    }
    let f = Math.asin(u.nx * d.ny - u.ny * d.nx), _ = 1, p = !1;
    u.nx * d.nx - u.ny * -d.ny < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, _ = -1, p = !0) : f > 0 && (_ = -1, p = !0);
    const m = f / 2;
    let g, y = Math.abs(Math.cos(m) * l / Math.sin(m));
    y > Math.min(u.len / 2, d.len / 2) ? (y = Math.min(u.len / 2, d.len / 2), g = Math.abs(y * Math.sin(m) / Math.cos(m))) : g = l;
    const x = h.x + d.nx * y + -d.ny * g * _, v = h.y + d.ny * y + d.nx * g * _, b = Math.atan2(u.ny, u.nx) + Math.PI / 2 * _, C = Math.atan2(d.ny, d.nx) - Math.PI / 2 * _;
    o === 0 && s.moveTo(x + Math.cos(b) * g, v + Math.sin(b) * g), s.arc(x, v, g, b, C, p), n = h;
} }
function sd(s, t, e, i) { const r = (h, l) => Math.sqrt((h.x - l.x) ** 2 + (h.y - l.y) ** 2), n = (h, l, c) => ({ x: h.x + (l.x - h.x) * c, y: h.y + (l.y - h.y) * c }), o = t.length; for (let h = 0; h < o; h++) {
    const l = t[(h + 1) % o], c = l.radius ?? e;
    if (c <= 0) {
        h === 0 ? s.moveTo(l.x, l.y) : s.lineTo(l.x, l.y);
        continue;
    }
    const u = t[h], d = t[(h + 2) % o], f = r(u, l);
    let _;
    if (f < 1e-4)
        _ = l;
    else {
        const g = Math.min(f / 2, c);
        _ = n(l, u, g / f);
    }
    const p = r(d, l);
    let m;
    if (p < 1e-4)
        m = l;
    else {
        const g = Math.min(p / 2, c);
        m = n(l, d, g / p);
    }
    h === 0 ? s.moveTo(_.x, _.y) : s.lineTo(_.x, _.y), s.quadraticCurveTo(l.x, l.y, m.x, m.y, i);
} }
const rd = new pt;
class nd {
    constructor(t) { this.shapePrimitives = [], this._currentPoly = null, this._bounds = new Zt, this._graphicsPath2D = t, this.signed = t.checkForHoles; }
    moveTo(t, e) { return this.startPoly(t, e), this; }
    lineTo(t, e) { this._ensurePoly(); const i = this._currentPoly.points, r = i[i.length - 2], n = i[i.length - 1]; return (r !== t || n !== e) && i.push(t, e), this; }
    arc(t, e, i, r, n, o) { this._ensurePoly(!1); const h = this._currentPoly.points; return va(h, t, e, i, r, n, o), this; }
    arcTo(t, e, i, r, n) { this._ensurePoly(); const o = this._currentPoly.points; return Qu(o, t, e, i, r, n), this; }
    arcToSvg(t, e, i, r, n, o, h) { const l = this._currentPoly.points; return ed(l, this._currentPoly.lastX, this._currentPoly.lastY, o, h, t, e, i, r, n), this; }
    bezierCurveTo(t, e, i, r, n, o, h) { this._ensurePoly(); const l = this._currentPoly; return ba(this._currentPoly.points, l.lastX, l.lastY, t, e, i, r, n, o, h), this; }
    quadraticCurveTo(t, e, i, r, n) { this._ensurePoly(); const o = this._currentPoly; return Ku(this._currentPoly.points, o.lastX, o.lastY, t, e, i, r, n), this; }
    closePath() { return this.endPoly(!0), this; }
    addPath(t, e) { this.endPoly(), e && !e.isIdentity() && (t = t.clone(!0), t.transform(e)); const i = this.shapePrimitives, r = i.length; for (let n = 0; n < t.instructions.length; n++) {
        const o = t.instructions[n];
        this[o.action](...o.data);
    } if (t.checkForHoles && i.length - r > 1) {
        let n = null;
        for (let o = r; o < i.length; o++) {
            const h = i[o];
            if (h.shape.type === "polygon") {
                const l = h.shape, c = n?.shape;
                c && c.containsPolygon(l) ? (n.holes || (n.holes = []), n.holes.push(h), i.copyWithin(o, o + 1), i.length--, o--) : n = h;
            }
        }
    } return this; }
    finish(t = !1) { this.endPoly(t); }
    rect(t, e, i, r, n) { return this.drawShape(new pt(t, e, i, r), n), this; }
    circle(t, e, i, r) { return this.drawShape(new br(t, e, i), r), this; }
    poly(t, e, i) { const r = new ei(t); return r.closePath = e, this.drawShape(r, i), this; }
    regularPoly(t, e, i, r, n = 0, o) { r = Math.max(r | 0, 3); const h = -1 * Math.PI / 2 + n, l = Math.PI * 2 / r, c = []; for (let u = 0; u < r; u++) {
        const d = h - u * l;
        c.push(t + i * Math.cos(d), e + i * Math.sin(d));
    } return this.poly(c, !0, o), this; }
    roundPoly(t, e, i, r, n, o = 0, h) { if (r = Math.max(r | 0, 3), n <= 0)
        return this.regularPoly(t, e, i, r, o); const l = i * Math.sin(Math.PI / r) - .001; n = Math.min(n, l); const c = -1 * Math.PI / 2 + o, u = Math.PI * 2 / r, d = (r - 2) * Math.PI / r / 2; for (let f = 0; f < r; f++) {
        const _ = f * u + c, p = t + i * Math.cos(_), m = e + i * Math.sin(_), g = _ + Math.PI + d, y = _ - Math.PI - d, x = p + n * Math.cos(g), v = m + n * Math.sin(g), b = p + n * Math.cos(y), C = m + n * Math.sin(y);
        f === 0 ? this.moveTo(x, v) : this.lineTo(x, v), this.quadraticCurveTo(p, m, b, C, h);
    } return this.closePath(); }
    roundShape(t, e, i = !1, r) { return t.length < 3 ? this : (i ? sd(this, t, e, r) : id(this, t, e), this.closePath()); }
    filletRect(t, e, i, r, n) { if (n === 0)
        return this.rect(t, e, i, r); const o = Math.min(i, r) / 2, h = Math.min(o, Math.max(-o, n)), l = t + i, c = e + r, u = h < 0 ? -h : 0, d = Math.abs(h); return this.moveTo(t, e + d).arcTo(t + u, e + u, t + d, e, d).lineTo(l - d, e).arcTo(l - u, e + u, l, e + d, d).lineTo(l, c - d).arcTo(l - u, c - u, t + i - d, c, d).lineTo(t + d, c).arcTo(t + u, c - u, t, c - d, d).closePath(); }
    chamferRect(t, e, i, r, n, o) { if (n <= 0)
        return this.rect(t, e, i, r); const h = Math.min(n, Math.min(i, r) / 2), l = t + i, c = e + r, u = [t + h, e, l - h, e, l, e + h, l, c - h, l - h, c, t + h, c, t, c - h, t, e + h]; for (let d = u.length - 1; d >= 2; d -= 2)
        u[d] === u[d - 2] && u[d - 1] === u[d - 3] && u.splice(d - 1, 2); return this.poly(u, !0, o); }
    ellipse(t, e, i, r, n) { return this.drawShape(new vr(t, e, i, r), n), this; }
    roundRect(t, e, i, r, n, o) { return this.drawShape(new wr(t, e, i, r, n), o), this; }
    drawShape(t, e) { return this.endPoly(), this.shapePrimitives.push({ shape: t, transform: e }), this; }
    startPoly(t, e) { let i = this._currentPoly; return i && this.endPoly(), i = new ei, i.points.push(t, e), this._currentPoly = i, this; }
    endPoly(t = !1) { const e = this._currentPoly; return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({ shape: e })), this._currentPoly = null, this; }
    _ensurePoly(t = !0) { if (!this._currentPoly && (this._currentPoly = new ei, t)) {
        const e = this.shapePrimitives[this.shapePrimitives.length - 1];
        if (e) {
            let i = e.shape.x, r = e.shape.y;
            if (e.transform && !e.transform.isIdentity()) {
                const n = e.transform, o = i;
                i = n.a * i + n.c * r + n.tx, r = n.b * o + n.d * r + n.ty;
            }
            this._currentPoly.points.push(i, r);
        }
        else
            this._currentPoly.points.push(0, 0);
    } }
    buildPath() { const t = this._graphicsPath2D; this.shapePrimitives.length = 0, this._currentPoly = null; for (let e = 0; e < t.instructions.length; e++) {
        const i = t.instructions[e];
        this[i.action](...i.data);
    } this.finish(); }
    get bounds() { const t = this._bounds; t.clear(); const e = this.shapePrimitives; for (let i = 0; i < e.length; i++) {
        const r = e[i], n = r.shape.getBounds(rd);
        r.transform ? t.addRect(n, r.transform) : t.addRect(n);
    } return t; }
}
class he {
    constructor(t, e = !1) { this.instructions = [], this.uid = At("graphicsPath"), this._dirty = !0, this.checkForHoles = e, typeof t == "string" ? Mc(t, this) : this.instructions = t?.slice() ?? []; }
    get shapePath() { return this._shapePath || (this._shapePath = new nd(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath; }
    addPath(t, e) { return t = t.clone(), this.instructions.push({ action: "addPath", data: [t, e] }), this._dirty = !0, this; }
    arc(...t) { return this.instructions.push({ action: "arc", data: t }), this._dirty = !0, this; }
    arcTo(...t) { return this.instructions.push({ action: "arcTo", data: t }), this._dirty = !0, this; }
    arcToSvg(...t) { return this.instructions.push({ action: "arcToSvg", data: t }), this._dirty = !0, this; }
    bezierCurveTo(...t) { return this.instructions.push({ action: "bezierCurveTo", data: t }), this._dirty = !0, this; }
    bezierCurveToShort(t, e, i, r, n) { const o = this.instructions[this.instructions.length - 1], h = this.getLastPoint(et.shared); let l = 0, c = 0; if (!o || o.action !== "bezierCurveTo")
        l = h.x, c = h.y;
    else {
        l = o.data[2], c = o.data[3];
        const u = h.x, d = h.y;
        l = u + (u - l), c = d + (d - c);
    } return this.instructions.push({ action: "bezierCurveTo", data: [l, c, t, e, i, r, n] }), this._dirty = !0, this; }
    closePath() { return this.instructions.push({ action: "closePath", data: [] }), this._dirty = !0, this; }
    ellipse(...t) { return this.instructions.push({ action: "ellipse", data: t }), this._dirty = !0, this; }
    lineTo(...t) { return this.instructions.push({ action: "lineTo", data: t }), this._dirty = !0, this; }
    moveTo(...t) { return this.instructions.push({ action: "moveTo", data: t }), this; }
    quadraticCurveTo(...t) { return this.instructions.push({ action: "quadraticCurveTo", data: t }), this._dirty = !0, this; }
    quadraticCurveToShort(t, e, i) { const r = this.instructions[this.instructions.length - 1], n = this.getLastPoint(et.shared); let o = 0, h = 0; if (!r || r.action !== "quadraticCurveTo")
        o = n.x, h = n.y;
    else {
        o = r.data[0], h = r.data[1];
        const l = n.x, c = n.y;
        o = l + (l - o), h = c + (c - h);
    } return this.instructions.push({ action: "quadraticCurveTo", data: [o, h, t, e, i] }), this._dirty = !0, this; }
    rect(t, e, i, r, n) { return this.instructions.push({ action: "rect", data: [t, e, i, r, n] }), this._dirty = !0, this; }
    circle(t, e, i, r) { return this.instructions.push({ action: "circle", data: [t, e, i, r] }), this._dirty = !0, this; }
    roundRect(...t) { return this.instructions.push({ action: "roundRect", data: t }), this._dirty = !0, this; }
    poly(...t) { return this.instructions.push({ action: "poly", data: t }), this._dirty = !0, this; }
    regularPoly(...t) { return this.instructions.push({ action: "regularPoly", data: t }), this._dirty = !0, this; }
    roundPoly(...t) { return this.instructions.push({ action: "roundPoly", data: t }), this._dirty = !0, this; }
    roundShape(...t) { return this.instructions.push({ action: "roundShape", data: t }), this._dirty = !0, this; }
    filletRect(...t) { return this.instructions.push({ action: "filletRect", data: t }), this._dirty = !0, this; }
    chamferRect(...t) { return this.instructions.push({ action: "chamferRect", data: t }), this._dirty = !0, this; }
    star(t, e, i, r, n, o, h) { n || (n = r / 2); const l = -1 * Math.PI / 2 + o, c = i * 2, u = Math.PI * 2 / c, d = []; for (let f = 0; f < c; f++) {
        const _ = f % 2 ? n : r, p = f * u + l;
        d.push(t + _ * Math.cos(p), e + _ * Math.sin(p));
    } return this.poly(d, !0, h), this; }
    clone(t = !1) { const e = new he; if (e.checkForHoles = this.checkForHoles, !t)
        e.instructions = this.instructions.slice();
    else
        for (let i = 0; i < this.instructions.length; i++) {
            const r = this.instructions[i];
            e.instructions.push({ action: r.action, data: r.data.slice() });
        } return e; }
    clear() { return this.instructions.length = 0, this._dirty = !0, this; }
    transform(t) { if (t.isIdentity())
        return this; const e = t.a, i = t.b, r = t.c, n = t.d, o = t.tx, h = t.ty; let l = 0, c = 0, u = 0, d = 0, f = 0, _ = 0, p = 0, m = 0; for (let g = 0; g < this.instructions.length; g++) {
        const y = this.instructions[g], x = y.data;
        switch (y.action) {
            case "moveTo":
            case "lineTo":
                l = x[0], c = x[1], x[0] = e * l + r * c + o, x[1] = i * l + n * c + h;
                break;
            case "bezierCurveTo":
                u = x[0], d = x[1], f = x[2], _ = x[3], l = x[4], c = x[5], x[0] = e * u + r * d + o, x[1] = i * u + n * d + h, x[2] = e * f + r * _ + o, x[3] = i * f + n * _ + h, x[4] = e * l + r * c + o, x[5] = i * l + n * c + h;
                break;
            case "quadraticCurveTo":
                u = x[0], d = x[1], l = x[2], c = x[3], x[0] = e * u + r * d + o, x[1] = i * u + n * d + h, x[2] = e * l + r * c + o, x[3] = i * l + n * c + h;
                break;
            case "arcToSvg":
                l = x[5], c = x[6], p = x[0], m = x[1], x[0] = e * p + r * m, x[1] = i * p + n * m, x[5] = e * l + r * c + o, x[6] = i * l + n * c + h;
                break;
            case "circle":
                x[4] = qe(x[3], t);
                break;
            case "rect":
                x[4] = qe(x[4], t);
                break;
            case "ellipse":
                x[8] = qe(x[8], t);
                break;
            case "roundRect":
                x[5] = qe(x[5], t);
                break;
            case "addPath":
                x[0].transform(t);
                break;
            case "poly":
                x[2] = qe(x[2], t);
                break;
            default:
                yt("unknown transform action", y.action);
                break;
        }
    } return this._dirty = !0, this; }
    get bounds() { return this.shapePath.bounds; }
    getLastPoint(t) { let e = this.instructions.length - 1, i = this.instructions[e]; if (!i)
        return t.x = 0, t.y = 0, t; for (; i.action === "closePath";) {
        if (e--, e < 0)
            return t.x = 0, t.y = 0, t;
        i = this.instructions[e];
    } switch (i.action) {
        case "moveTo":
        case "lineTo":
            t.x = i.data[0], t.y = i.data[1];
            break;
        case "quadraticCurveTo":
            t.x = i.data[2], t.y = i.data[3];
            break;
        case "bezierCurveTo":
            t.x = i.data[4], t.y = i.data[5];
            break;
        case "arc":
        case "arcToSvg":
            t.x = i.data[5], t.y = i.data[6];
            break;
        case "addPath":
            i.data[0].getLastPoint(t);
            break;
    } return t; }
}
function qe(s, t) { return s ? s.prepend(t) : t.clone(); }
function kt(s, t, e) { const i = s.getAttribute(t); return i ? Number(i) : e; }
function od(s, t) { const e = s.querySelectorAll("defs"); for (let i = 0; i < e.length; i++) {
    const r = e[i];
    for (let n = 0; n < r.children.length; n++) {
        const o = r.children[n];
        switch (o.nodeName.toLowerCase()) {
            case "lineargradient":
                t.defs[o.id] = ad(o);
                break;
            case "radialgradient":
                t.defs[o.id] = hd();
                break;
        }
    }
} }
function ad(s) { const t = kt(s, "x1", 0), e = kt(s, "y1", 0), i = kt(s, "x2", 1), r = kt(s, "y2", 0), n = s.getAttribute("gradientUnits") || "objectBoundingBox", o = new le(t, e, i, r, n === "objectBoundingBox" ? "local" : "global"); for (let h = 0; h < s.children.length; h++) {
    const l = s.children[h], c = kt(l, "offset", 0), u = Pt.shared.setValue(l.getAttribute("stop-color")).toNumber();
    o.addColorStop(c, u);
} return o; }
function hd(s) { return yt("[SVG Parser] Radial gradients are not yet supported"), new le(0, 0, 1, 0); }
function Rn(s) { const t = s.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i); return t ? t[1] : ""; }
const Fn = { fill: { type: "paint", default: 0 }, "fill-opacity": { type: "number", default: 1 }, stroke: { type: "paint", default: 0 }, "stroke-width": { type: "number", default: 1 }, "stroke-opacity": { type: "number", default: 1 }, "stroke-linecap": { type: "string", default: "butt" }, "stroke-linejoin": { type: "string", default: "miter" }, "stroke-miterlimit": { type: "number", default: 10 }, "stroke-dasharray": { type: "string", default: "none" }, "stroke-dashoffset": { type: "number", default: 0 }, opacity: { type: "number", default: 1 } };
function wa(s, t) { const e = s.getAttribute("style"), i = {}, r = {}, n = { strokeStyle: i, fillStyle: r, useFill: !1, useStroke: !1 }; for (const o in Fn) {
    const h = s.getAttribute(o);
    h && Bn(t, n, o, h.trim());
} if (e) {
    const o = e.split(";");
    for (let h = 0; h < o.length; h++) {
        const l = o[h].trim(), [c, u] = l.split(":");
        Fn[c] && Bn(t, n, c, u.trim());
    }
} return { strokeStyle: n.useStroke ? i : null, fillStyle: n.useFill ? r : null, useFill: n.useFill, useStroke: n.useStroke }; }
function Bn(s, t, e, i) { switch (e) {
    case "stroke":
        if (i !== "none") {
            if (i.startsWith("url(")) {
                const r = Rn(i);
                t.strokeStyle.fill = s.defs[r];
            }
            else
                t.strokeStyle.color = Pt.shared.setValue(i).toNumber();
            t.useStroke = !0;
        }
        break;
    case "stroke-width":
        t.strokeStyle.width = Number(i);
        break;
    case "fill":
        if (i !== "none") {
            if (i.startsWith("url(")) {
                const r = Rn(i);
                t.fillStyle.fill = s.defs[r];
            }
            else
                t.fillStyle.color = Pt.shared.setValue(i).toNumber();
            t.useFill = !0;
        }
        break;
    case "fill-opacity":
        t.fillStyle.alpha = Number(i);
        break;
    case "stroke-opacity":
        t.strokeStyle.alpha = Number(i);
        break;
    case "opacity":
        t.fillStyle.alpha = Number(i), t.strokeStyle.alpha = Number(i);
        break;
} }
function ld(s) { if (s.length <= 2)
    return !0; const t = s.map(h => h.area).sort((h, l) => l - h), [e, i] = t, r = t[t.length - 1], n = e / i, o = i / r; return !(n > 3 && o < 2); }
function cd(s) { return s.split(/(?=[Mm])/).filter(i => i.trim().length > 0); }
function ud(s) { const t = s.match(/[-+]?[0-9]*\.?[0-9]+/g); if (!t || t.length < 4)
    return 0; const e = t.map(Number), i = [], r = []; for (let u = 0; u < e.length; u += 2)
    u + 1 < e.length && (i.push(e[u]), r.push(e[u + 1])); if (i.length === 0 || r.length === 0)
    return 0; const n = Math.min(...i), o = Math.max(...i), h = Math.min(...r), l = Math.max(...r); return (o - n) * (l - h); }
function Ln(s, t) { const e = new he(s, !1); for (const i of e.instructions)
    t.instructions.push(i); }
function dd(s, t) { if (typeof s == "string") {
    const o = document.createElement("div");
    o.innerHTML = s.trim(), s = o.querySelector("svg");
} const e = { context: t, defs: {}, path: new he }; od(s, e); const i = s.children, { fillStyle: r, strokeStyle: n } = wa(s, e); for (let o = 0; o < i.length; o++) {
    const h = i[o];
    h.nodeName.toLowerCase() !== "defs" && ka(h, e, r, n);
} return t; }
function ka(s, t, e, i) { const r = s.children, { fillStyle: n, strokeStyle: o } = wa(s, t); n && e ? e = { ...e, ...n } : n && (e = n), o && i ? i = { ...i, ...o } : o && (i = o); const h = !e && !i; h && (e = { color: 0 }); let l, c, u, d, f, _, p, m, g, y, x, v, b, C, w, k, z; switch (s.nodeName.toLowerCase()) {
    case "path": {
        C = s.getAttribute("d");
        const S = s.getAttribute("fill-rule"), T = cd(C), E = S === "evenodd", L = T.length > 1;
        if (E && L) {
            const R = T.map(F => ({ path: F, area: ud(F) }));
            if (R.sort((F, O) => O.area - F.area), T.length > 3 || !ld(R))
                for (let F = 0; F < R.length; F++) {
                    const O = R[F], nt = F === 0;
                    t.context.beginPath();
                    const M = new he(void 0, !0);
                    Ln(O.path, M), t.context.path(M), nt ? (e && t.context.fill(e), i && t.context.stroke(i)) : t.context.cut();
                }
            else
                for (let F = 0; F < R.length; F++) {
                    const O = R[F], nt = F % 2 === 1;
                    t.context.beginPath();
                    const M = new he(void 0, !0);
                    Ln(O.path, M), t.context.path(M), nt ? t.context.cut() : (e && t.context.fill(e), i && t.context.stroke(i));
                }
        }
        else {
            const R = S ? S === "evenodd" : !0;
            w = new he(C, R), t.context.path(w), e && t.context.fill(e), i && t.context.stroke(i);
        }
        break;
    }
    case "circle":
        p = kt(s, "cx", 0), m = kt(s, "cy", 0), g = kt(s, "r", 0), t.context.ellipse(p, m, g, g), e && t.context.fill(e), i && t.context.stroke(i);
        break;
    case "rect":
        l = kt(s, "x", 0), c = kt(s, "y", 0), k = kt(s, "width", 0), z = kt(s, "height", 0), y = kt(s, "rx", 0), x = kt(s, "ry", 0), y || x ? t.context.roundRect(l, c, k, z, y || x) : t.context.rect(l, c, k, z), e && t.context.fill(e), i && t.context.stroke(i);
        break;
    case "ellipse":
        p = kt(s, "cx", 0), m = kt(s, "cy", 0), y = kt(s, "rx", 0), x = kt(s, "ry", 0), t.context.beginPath(), t.context.ellipse(p, m, y, x), e && t.context.fill(e), i && t.context.stroke(i);
        break;
    case "line":
        u = kt(s, "x1", 0), d = kt(s, "y1", 0), f = kt(s, "x2", 0), _ = kt(s, "y2", 0), t.context.beginPath(), t.context.moveTo(u, d), t.context.lineTo(f, _), i && t.context.stroke(i);
        break;
    case "polygon":
        b = s.getAttribute("points"), v = b.match(/-?\d+/g).map(S => parseInt(S, 10)), t.context.poly(v, !0), e && t.context.fill(e), i && t.context.stroke(i);
        break;
    case "polyline":
        b = s.getAttribute("points"), v = b.match(/-?\d+/g).map(S => parseInt(S, 10)), t.context.poly(v, !1), i && t.context.stroke(i);
        break;
    case "g":
    case "svg": break;
    default: {
        yt(`[SVG parser] <${s.nodeName}> elements unsupported`);
        break;
    }
} h && (e = null); for (let S = 0; S < r.length; S++)
    ka(r[S], t, e, i); }
function _d(s) { return Pt.isColorLike(s); }
function On(s) { return s instanceof Yi; }
function Gn(s) { return s instanceof le; }
function fd(s) { return s instanceof it; }
function pd(s, t, e) { const i = Pt.shared.setValue(t ?? 0); return s.color = i.toNumber(), s.alpha = i.alpha === 1 ? e.alpha : i.alpha, s.texture = it.WHITE, { ...e, ...s }; }
function gd(s, t, e) { return s.texture = t, { ...e, ...s }; }
function Dn(s, t, e) { return s.fill = t, s.color = 16777215, s.texture = t.texture, s.matrix = t.transform, { ...e, ...s }; }
function Un(s, t, e) { return t.buildGradient(), s.fill = t, s.color = 16777215, s.texture = t.texture, s.matrix = t.transform, s.textureSpace = t.textureSpace, { ...e, ...s }; }
function md(s, t) { const e = { ...t, ...s }, i = Pt.shared.setValue(e.color); return e.alpha *= i.alpha, e.color = i.toNumber(), e; }
function we(s, t) { if (s == null)
    return null; const e = {}, i = s; return _d(s) ? pd(e, s, t) : fd(s) ? gd(e, s, t) : On(s) ? Dn(e, s, t) : Gn(s) ? Un(e, s, t) : i.fill && On(i.fill) ? Dn(i, i.fill, t) : i.fill && Gn(i.fill) ? Un(i, i.fill, t) : md(i, t); }
function Wi(s, t) { const { width: e, alignment: i, miterLimit: r, cap: n, join: o, pixelLine: h, ...l } = t, c = we(s, l); return c ? { width: e, alignment: i, miterLimit: r, cap: n, join: o, pixelLine: h, ...c } : null; }
const yd = new et, Nn = new rt, Ar = class ee extends Qt {
    constructor() { super(...arguments), this._gpuData = Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = At("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this.destroyed = !1, this._activePath = new he, this._transform = new rt, this._fillStyle = { ...ee.defaultFillStyle }, this._strokeStyle = { ...ee.defaultStrokeStyle }, this._stateStack = [], this._tick = 0, this._bounds = new Zt, this._boundsDirty = !0; }
    clone() { const t = new ee; return t.batchMode = this.batchMode, t.instructions = this.instructions.slice(), t._activePath = this._activePath.clone(), t._transform = this._transform.clone(), t._fillStyle = { ...this._fillStyle }, t._strokeStyle = { ...this._strokeStyle }, t._stateStack = this._stateStack.slice(), t._bounds = this._bounds.clone(), t._boundsDirty = !0, t; }
    get fillStyle() { return this._fillStyle; }
    set fillStyle(t) { this._fillStyle = we(t, ee.defaultFillStyle); }
    get strokeStyle() { return this._strokeStyle; }
    set strokeStyle(t) { this._strokeStyle = Wi(t, ee.defaultStrokeStyle); }
    setFillStyle(t) { return this._fillStyle = we(t, ee.defaultFillStyle), this; }
    setStrokeStyle(t) { return this._strokeStyle = we(t, ee.defaultStrokeStyle), this; }
    texture(t, e, i, r, n, o) { return this.instructions.push({ action: "texture", data: { image: t, dx: i || 0, dy: r || 0, dw: n || t.frame.width, dh: o || t.frame.height, transform: this._transform.clone(), alpha: this._fillStyle.alpha, style: e ? Pt.shared.setValue(e).toNumber() : 16777215 } }), this.onUpdate(), this; }
    beginPath() { return this._activePath = new he, this; }
    fill(t, e) { let i; const r = this.instructions[this.instructions.length - 1]; return this._tick === 0 && r?.action === "stroke" ? i = r.data.path : i = this._activePath.clone(), i ? (t != null && (e !== void 0 && typeof t == "number" && (Z(ct, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = { color: t, alpha: e }), this._fillStyle = we(t, ee.defaultFillStyle)), this.instructions.push({ action: "fill", data: { style: this.fillStyle, path: i } }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this; }
    _initNextPathLocation() { const { x: t, y: e } = this._activePath.getLastPoint(et.shared); this._activePath.clear(), this._activePath.moveTo(t, e); }
    stroke(t) { let e; const i = this.instructions[this.instructions.length - 1]; return this._tick === 0 && i?.action === "fill" ? e = i.data.path : e = this._activePath.clone(), e ? (t != null && (this._strokeStyle = Wi(t, ee.defaultStrokeStyle)), this.instructions.push({ action: "stroke", data: { style: this.strokeStyle, path: e } }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this; }
    cut() { for (let t = 0; t < 2; t++) {
        const e = this.instructions[this.instructions.length - 1 - t], i = this._activePath.clone();
        if (e && (e.action === "stroke" || e.action === "fill"))
            if (e.data.hole)
                e.data.hole.addPath(i);
            else {
                e.data.hole = i;
                break;
            }
    } return this._initNextPathLocation(), this; }
    arc(t, e, i, r, n, o) { this._tick++; const h = this._transform; return this._activePath.arc(h.a * t + h.c * e + h.tx, h.b * t + h.d * e + h.ty, i, r, n, o), this; }
    arcTo(t, e, i, r, n) { this._tick++; const o = this._transform; return this._activePath.arcTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * i + o.c * r + o.tx, o.b * i + o.d * r + o.ty, n), this; }
    arcToSvg(t, e, i, r, n, o, h) { this._tick++; const l = this._transform; return this._activePath.arcToSvg(t, e, i, r, n, l.a * o + l.c * h + l.tx, l.b * o + l.d * h + l.ty), this; }
    bezierCurveTo(t, e, i, r, n, o, h) { this._tick++; const l = this._transform; return this._activePath.bezierCurveTo(l.a * t + l.c * e + l.tx, l.b * t + l.d * e + l.ty, l.a * i + l.c * r + l.tx, l.b * i + l.d * r + l.ty, l.a * n + l.c * o + l.tx, l.b * n + l.d * o + l.ty, h), this; }
    closePath() { return this._tick++, this._activePath?.closePath(), this; }
    ellipse(t, e, i, r) { return this._tick++, this._activePath.ellipse(t, e, i, r, this._transform.clone()), this; }
    circle(t, e, i) { return this._tick++, this._activePath.circle(t, e, i, this._transform.clone()), this; }
    path(t) { return this._tick++, this._activePath.addPath(t, this._transform.clone()), this; }
    lineTo(t, e) { this._tick++; const i = this._transform; return this._activePath.lineTo(i.a * t + i.c * e + i.tx, i.b * t + i.d * e + i.ty), this; }
    moveTo(t, e) { this._tick++; const i = this._transform, r = this._activePath.instructions, n = i.a * t + i.c * e + i.tx, o = i.b * t + i.d * e + i.ty; return r.length === 1 && r[0].action === "moveTo" ? (r[0].data[0] = n, r[0].data[1] = o, this) : (this._activePath.moveTo(n, o), this); }
    quadraticCurveTo(t, e, i, r, n) { this._tick++; const o = this._transform; return this._activePath.quadraticCurveTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * i + o.c * r + o.tx, o.b * i + o.d * r + o.ty, n), this; }
    rect(t, e, i, r) { return this._tick++, this._activePath.rect(t, e, i, r, this._transform.clone()), this; }
    roundRect(t, e, i, r, n) { return this._tick++, this._activePath.roundRect(t, e, i, r, n, this._transform.clone()), this; }
    poly(t, e) { return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this; }
    regularPoly(t, e, i, r, n = 0, o) { return this._tick++, this._activePath.regularPoly(t, e, i, r, n, o), this; }
    roundPoly(t, e, i, r, n, o) { return this._tick++, this._activePath.roundPoly(t, e, i, r, n, o), this; }
    roundShape(t, e, i, r) { return this._tick++, this._activePath.roundShape(t, e, i, r), this; }
    filletRect(t, e, i, r, n) { return this._tick++, this._activePath.filletRect(t, e, i, r, n), this; }
    chamferRect(t, e, i, r, n, o) { return this._tick++, this._activePath.chamferRect(t, e, i, r, n, o), this; }
    star(t, e, i, r, n = 0, o = 0) { return this._tick++, this._activePath.star(t, e, i, r, n, o, this._transform.clone()), this; }
    svg(t) { return this._tick++, dd(t, this), this; }
    restore() { const t = this._stateStack.pop(); return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this; }
    save() { return this._stateStack.push({ transform: this._transform.clone(), fillStyle: { ...this._fillStyle }, strokeStyle: { ...this._strokeStyle } }), this; }
    getTransform() { return this._transform; }
    resetTransform() { return this._transform.identity(), this; }
    rotate(t) { return this._transform.rotate(t), this; }
    scale(t, e = t) { return this._transform.scale(t, e), this; }
    setTransform(t, e, i, r, n, o) { return t instanceof rt ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, i, r, n, o), this); }
    transform(t, e, i, r, n, o) { return t instanceof rt ? (this._transform.append(t), this) : (Nn.set(t, e, i, r, n, o), this._transform.append(Nn), this); }
    translate(t, e = t) { return this._transform.translate(t, e), this; }
    clear() { return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this; }
    onUpdate() { this._boundsDirty = !0, !this.dirty && (this.emit("update", this, 16), this.dirty = !0); }
    get bounds() { if (!this._boundsDirty)
        return this._bounds; this._boundsDirty = !1; const t = this._bounds; t.clear(); for (let e = 0; e < this.instructions.length; e++) {
        const i = this.instructions[e], r = i.action;
        if (r === "fill") {
            const n = i.data;
            t.addBounds(n.path.bounds);
        }
        else if (r === "texture") {
            const n = i.data;
            t.addFrame(n.dx, n.dy, n.dx + n.dw, n.dy + n.dh, n.transform);
        }
        if (r === "stroke") {
            const n = i.data, o = n.style.alignment, h = n.style.width * (1 - o), l = n.path.bounds;
            t.addFrame(l.minX - h, l.minY - h, l.maxX + h, l.maxY + h);
        }
    } return t; }
    containsPoint(t) { if (!this.bounds.containsPoint(t.x, t.y))
        return !1; const e = this.instructions; let i = !1; for (let r = 0; r < e.length; r++) {
        const n = e[r], o = n.data, h = o.path;
        if (!n.action || !h)
            continue;
        const l = o.style, c = h.shapePath.shapePrimitives;
        for (let u = 0; u < c.length; u++) {
            const d = c[u].shape;
            if (!l || !d)
                continue;
            const f = c[u].transform, _ = f ? f.applyInverse(t, yd) : t;
            if (n.action === "fill")
                i = d.contains(_.x, _.y);
            else {
                const m = l;
                i = d.strokeContains(_.x, _.y, m.width, m.alignment);
            }
            const p = o.hole;
            if (p) {
                const m = p.shapePath?.shapePrimitives;
                if (m)
                    for (let g = 0; g < m.length; g++)
                        m[g].shape.contains(_.x, _.y) && (i = !1);
            }
            if (i)
                return !0;
        }
    } return i; }
    unload() { this.emit("unload", this); for (const t in this._gpuData)
        this._gpuData[t]?.destroy(); this._gpuData = Object.create(null); }
    destroy(t = !1) { if (this.destroyed)
        return; if (this.destroyed = !0, this._stateStack.length = 0, this._transform = null, this.unload(), this.emit("destroy", this), this.removeAllListeners(), typeof t == "boolean" ? t : t?.texture) {
        const i = typeof t == "boolean" ? t : t?.textureSource;
        this._fillStyle.texture && (this._fillStyle.fill && "uid" in this._fillStyle.fill ? this._fillStyle.fill.destroy() : this._fillStyle.texture.destroy(i)), this._strokeStyle.texture && (this._strokeStyle.fill && "uid" in this._strokeStyle.fill ? this._strokeStyle.fill.destroy() : this._strokeStyle.texture.destroy(i));
    } this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null; }
};
Ar.defaultFillStyle = { color: 16777215, alpha: 1, texture: it.WHITE, matrix: null, fill: null, textureSpace: "local" };
Ar.defaultStrokeStyle = { width: 1, color: 16777215, alpha: 1, alignment: .5, miterLimit: 10, cap: "butt", join: "miter", texture: it.WHITE, matrix: null, fill: null, textureSpace: "local", pixelLine: !1 };
let Xt = Ar;
const Sr = class Pe extends Qt {
    constructor(t = {}) { super(), this.uid = At("textStyle"), this._tick = 0, xd(t); const e = { ...Pe.defaultTextStyle, ...t }; for (const i in e) {
        const r = i;
        this[r] = e[i];
    } this.update(), this._tick = 0; }
    get align() { return this._align; }
    set align(t) { this._align !== t && (this._align = t, this.update()); }
    get breakWords() { return this._breakWords; }
    set breakWords(t) { this._breakWords !== t && (this._breakWords = t, this.update()); }
    get dropShadow() { return this._dropShadow; }
    set dropShadow(t) { this._dropShadow !== t && (t !== null && typeof t == "object" ? this._dropShadow = this._createProxy({ ...Pe.defaultDropShadow, ...t }) : this._dropShadow = t ? this._createProxy({ ...Pe.defaultDropShadow }) : null, this.update()); }
    get fontFamily() { return this._fontFamily; }
    set fontFamily(t) { this._fontFamily !== t && (this._fontFamily = t, this.update()); }
    get fontSize() { return this._fontSize; }
    set fontSize(t) { this._fontSize !== t && (typeof t == "string" ? this._fontSize = parseInt(t, 10) : this._fontSize = t, this.update()); }
    get fontStyle() { return this._fontStyle; }
    set fontStyle(t) { this._fontStyle !== t && (this._fontStyle = t.toLowerCase(), this.update()); }
    get fontVariant() { return this._fontVariant; }
    set fontVariant(t) { this._fontVariant !== t && (this._fontVariant = t, this.update()); }
    get fontWeight() { return this._fontWeight; }
    set fontWeight(t) { this._fontWeight !== t && (this._fontWeight = t, this.update()); }
    get leading() { return this._leading; }
    set leading(t) { this._leading !== t && (this._leading = t, this.update()); }
    get letterSpacing() { return this._letterSpacing; }
    set letterSpacing(t) { this._letterSpacing !== t && (this._letterSpacing = t, this.update()); }
    get lineHeight() { return this._lineHeight; }
    set lineHeight(t) { this._lineHeight !== t && (this._lineHeight = t, this.update()); }
    get padding() { return this._padding; }
    set padding(t) { this._padding !== t && (this._padding = t, this.update()); }
    get filters() { return this._filters; }
    set filters(t) { this._filters !== t && (this._filters = Object.freeze(t), this.update()); }
    get trim() { return this._trim; }
    set trim(t) { this._trim !== t && (this._trim = t, this.update()); }
    get textBaseline() { return this._textBaseline; }
    set textBaseline(t) { this._textBaseline !== t && (this._textBaseline = t, this.update()); }
    get whiteSpace() { return this._whiteSpace; }
    set whiteSpace(t) { this._whiteSpace !== t && (this._whiteSpace = t, this.update()); }
    get wordWrap() { return this._wordWrap; }
    set wordWrap(t) { this._wordWrap !== t && (this._wordWrap = t, this.update()); }
    get wordWrapWidth() { return this._wordWrapWidth; }
    set wordWrapWidth(t) { this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.update()); }
    get fill() { return this._originalFill; }
    set fill(t) { t !== this._originalFill && (this._originalFill = t, this._isFillStyle(t) && (this._originalFill = this._createProxy({ ...Xt.defaultFillStyle, ...t }, () => { this._fill = we({ ...this._originalFill }, Xt.defaultFillStyle); })), this._fill = we(t === 0 ? "black" : t, Xt.defaultFillStyle), this.update()); }
    get stroke() { return this._originalStroke; }
    set stroke(t) { t !== this._originalStroke && (this._originalStroke = t, this._isFillStyle(t) && (this._originalStroke = this._createProxy({ ...Xt.defaultStrokeStyle, ...t }, () => { this._stroke = Wi({ ...this._originalStroke }, Xt.defaultStrokeStyle); })), this._stroke = Wi(t, Xt.defaultStrokeStyle), this.update()); }
    update() { this._tick++, this.emit("update", this); }
    reset() { const t = Pe.defaultTextStyle; for (const e in t)
        this[e] = t[e]; }
    get styleKey() { return `${this.uid}-${this._tick}`; }
    clone() { return new Pe({ align: this.align, breakWords: this.breakWords, dropShadow: this._dropShadow ? { ...this._dropShadow } : null, fill: this._fill, fontFamily: this.fontFamily, fontSize: this.fontSize, fontStyle: this.fontStyle, fontVariant: this.fontVariant, fontWeight: this.fontWeight, leading: this.leading, letterSpacing: this.letterSpacing, lineHeight: this.lineHeight, padding: this.padding, stroke: this._stroke, textBaseline: this.textBaseline, whiteSpace: this.whiteSpace, wordWrap: this.wordWrap, wordWrapWidth: this.wordWrapWidth, filters: this._filters ? [...this._filters] : void 0 }); }
    _getFinalPadding() { let t = 0; if (this._filters)
        for (let e = 0; e < this._filters.length; e++)
            t += this._filters[e].padding; return Math.max(this._padding, t); }
    destroy(t = !1) { if (this.removeAllListeners(), typeof t == "boolean" ? t : t?.texture) {
        const i = typeof t == "boolean" ? t : t?.textureSource;
        this._fill?.texture && this._fill.texture.destroy(i), this._originalFill?.texture && this._originalFill.texture.destroy(i), this._stroke?.texture && this._stroke.texture.destroy(i), this._originalStroke?.texture && this._originalStroke.texture.destroy(i);
    } this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null; }
    _createProxy(t, e) { return new Proxy(t, { set: (i, r, n) => (i[r] === n || (i[r] = n, e?.(r, n), this.update()), !0) }); }
    _isFillStyle(t) { return (t ?? null) !== null && !(Pt.isColorLike(t) || t instanceof le || t instanceof Yi); }
};
Sr.defaultDropShadow = { alpha: 1, angle: Math.PI / 6, blur: 0, color: "black", distance: 5 };
Sr.defaultTextStyle = { align: "left", breakWords: !1, dropShadow: null, fill: "black", fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", leading: 0, letterSpacing: 0, lineHeight: 0, padding: 0, stroke: null, textBaseline: "alphabetic", trim: !1, whiteSpace: "pre", wordWrap: !1, wordWrapWidth: 100 };
let Hi = Sr;
exports.as = Hi;
function xd(s) { const t = s; if (typeof t.dropShadow == "boolean" && t.dropShadow) {
    const e = Hi.defaultDropShadow;
    s.dropShadow = { alpha: t.dropShadowAlpha ?? e.alpha, angle: t.dropShadowAngle ?? e.angle, blur: t.dropShadowBlur ?? e.blur, color: t.dropShadowColor ?? e.color, distance: t.dropShadowDistance ?? e.distance };
} if (t.strokeThickness !== void 0) {
    Z(ct, "strokeThickness is now a part of stroke");
    const e = t.stroke;
    let i = {};
    if (Pt.isColorLike(e))
        i.color = e;
    else if (e instanceof le || e instanceof Yi)
        i.fill = e;
    else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill"))
        i = e;
    else
        throw new Error("Invalid stroke value.");
    s.stroke = { ...i, width: t.strokeThickness };
} if (Array.isArray(t.fillGradientStops)) {
    if (Z(ct, "gradient fill is now a fill pattern: `new FillGradient(...)`"), !Array.isArray(t.fill) || t.fill.length === 0)
        throw new Error("Invalid fill value. Expected an array of colors for gradient fill.");
    t.fill.length !== t.fillGradientStops.length && yt("The number of fill colors must match the number of fill gradient stops.");
    const e = new le({ start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, textureSpace: "local" }), i = t.fillGradientStops.slice(), r = t.fill.map(n => Pt.shared.setValue(n).toNumber());
    i.forEach((n, o) => { e.addColorStop(n, r[o]); }), s.fill = { fill: e };
} }
class bd {
    constructor(t) { this._canvasPool = Object.create(null), this.canvasOptions = t || {}, this.enableFullScreen = !1; }
    _createCanvasAndContext(t, e) { const i = xt.get().createCanvas(); i.width = t, i.height = e; const r = i.getContext("2d"); return { canvas: i, context: r }; }
    getOptimalCanvasAndContext(t, e, i = 1) { t = Math.ceil(t * i - 1e-6), e = Math.ceil(e * i - 1e-6), t = Gi(t), e = Gi(e); const r = (t << 17) + (e << 1); this._canvasPool[r] || (this._canvasPool[r] = []); let n = this._canvasPool[r].pop(); return n || (n = this._createCanvasAndContext(t, e)), n; }
    returnCanvasAndContext(t) { const e = t.canvas, { width: i, height: r } = e, n = (i << 17) + (r << 1); t.context.resetTransform(), t.context.clearRect(0, 0, i, r), this._canvasPool[n].push(t); }
    clear() { this._canvasPool = {}; }
}
const ar = new bd;
exports.m = ar;
li.register(ar);
const Wn = 1e5;
function Hn(s, t, e, i = 0) { if (s.texture === it.WHITE && !s.fill)
    return Pt.shared.setValue(s.color).setAlpha(s.alpha ?? 1).toHexa(); if (s.fill) {
    if (s.fill instanceof Yi) {
        const r = s.fill, n = t.createPattern(r.texture.source.resource, "repeat"), o = r.transform.copyTo(rt.shared);
        return o.scale(r.texture.frame.width, r.texture.frame.height), n.setTransform(o), n;
    }
    else if (s.fill instanceof le) {
        const r = s.fill, n = r.type === "linear", o = r.textureSpace === "local";
        let h = 1, l = 1;
        o && e && (h = e.width + i, l = e.height + i);
        let c, u = !1;
        if (n) {
            const { start: d, end: f } = r;
            c = t.createLinearGradient(d.x * h, d.y * l, f.x * h, f.y * l), u = Math.abs(f.x - d.x) < Math.abs((f.y - d.y) * .1);
        }
        else {
            const { center: d, innerRadius: f, outerCenter: _, outerRadius: p } = r;
            c = t.createRadialGradient(d.x * h, d.y * l, f * h, _.x * h, _.y * l, p * h);
        }
        if (u && o && e) {
            const d = e.lineHeight / l;
            for (let f = 0; f < e.lines.length; f++) {
                const _ = (f * e.lineHeight + i / 2) / l;
                r.colorStops.forEach(p => { const m = _ + p.offset * d; c.addColorStop(Math.floor(m * Wn) / Wn, Pt.shared.setValue(p.color).toHex()); });
            }
        }
        else
            r.colorStops.forEach(d => { c.addColorStop(d.offset, Pt.shared.setValue(d.color).toHex()); });
        return c;
    }
}
else {
    const r = t.createPattern(s.texture.source.resource, "repeat"), n = s.matrix.copyTo(rt.shared);
    return n.scale(s.texture.frame.width, s.texture.frame.height), r.setTransform(n), r;
} return yt("FillStyle not recognised", s), "red"; }
const Aa = class Sa extends na {
    constructor(t) { super(), this.resolution = 1, this.pages = [], this._padding = 0, this._measureCache = Object.create(null), this._currentChars = [], this._currentX = 0, this._currentY = 0, this._currentMaxCharHeight = 0, this._currentPageIndex = -1, this._skipKerning = !1; const e = { ...Sa.defaultOptions, ...t }; this._textureSize = e.textureSize, this._mipmap = e.mipmap; const i = e.style.clone(); e.overrideFill && (i._fill.color = 16777215, i._fill.alpha = 1, i._fill.texture = it.WHITE, i._fill.fill = null), this.applyFillAsTint = e.overrideFill; const r = i.fontSize; i.fontSize = this.baseMeasurementFontSize; const n = ir(i); e.overrideSize ? i._stroke && (i._stroke.width *= this.baseRenderedFontSize / r) : i.fontSize = this.baseRenderedFontSize = r, this._style = i, this._skipKerning = e.skipKerning ?? !1, this.resolution = e.resolution ?? 1, this._padding = e.padding ?? 4, e.textureStyle && (this._textureStyle = e.textureStyle instanceof Di ? e.textureStyle : new Di(e.textureStyle)), this.fontMetrics = Ri.measureFont(n), this.lineHeight = i.lineHeight || this.fontMetrics.fontSize || i.fontSize; }
    ensureCharacters(t) {
        const e = Ri.graphemeSegmenter(t).filter(g => !this._currentChars.includes(g)).filter((g, y, x) => x.indexOf(g) === y);
        if (!e.length)
            return;
        this._currentChars = [...this._currentChars, ...e];
        let i;
        this._currentPageIndex === -1 ? i = this._nextPage() : i = this.pages[this._currentPageIndex];
        let { canvas: r, context: n } = i.canvasAndContext, o = i.texture.source;
        const h = this._style;
        let l = this._currentX, c = this._currentY, u = this._currentMaxCharHeight;
        const d = this.baseRenderedFontSize / this.baseMeasurementFontSize, f = this._padding * d;
        let _ = !1;
        const p = r.width / this.resolution, m = r.height / this.resolution;
        for (let g = 0; g < e.length; g++) {
            const y = e[g], x = Ri.measureText(y, h, r, !1);
            x.lineHeight = x.height;
            const v = x.width * d, b = Math.ceil((h.fontStyle === "italic" ? 2 : 1) * v), C = x.height * d, w = b + f * 2, k = C + f * 2;
            if (_ = !1, y !== `
` && y !== "\r" && y !== "	" && y !== " " && (_ = !0, u = Math.ceil(Math.max(k, u))), l + w > p && (c += u, u = k, l = 0, c + u > m)) {
                o.update();
                const S = this._nextPage();
                r = S.canvasAndContext.canvas, n = S.canvasAndContext.context, o = S.texture.source, l = 0, c = 0, u = 0;
            }
            const z = v / d - (h.dropShadow?.distance ?? 0) - (h._stroke?.width ?? 0);
            if (this.chars[y] = { id: y.codePointAt(0), xOffset: -this._padding, yOffset: -this._padding, xAdvance: z, kerning: {} }, _) {
                this._drawGlyph(n, x, l + f, c + f, d, h);
                const S = o.width * d, T = o.height * d, E = new pt(l / S * o.width, c / T * o.height, w / S * o.width, k / T * o.height);
                this.chars[y].texture = new it({ source: o, frame: E }), l += Math.ceil(w);
            }
        }
        o.update(), this._currentX = l, this._currentY = c, this._currentMaxCharHeight = u, this._skipKerning && this._applyKerning(e, n);
    }
    get pageTextures() { return Z(ct, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages; }
    _applyKerning(t, e) { const i = this._measureCache; for (let r = 0; r < t.length; r++) {
        const n = t[r];
        for (let o = 0; o < this._currentChars.length; o++) {
            const h = this._currentChars[o];
            let l = i[n];
            l || (l = i[n] = e.measureText(n).width);
            let c = i[h];
            c || (c = i[h] = e.measureText(h).width);
            let u = e.measureText(n + h).width, d = u - (l + c);
            d && (this.chars[n].kerning[h] = d), u = e.measureText(n + h).width, d = u - (l + c), d && (this.chars[h].kerning[n] = d);
        }
    } }
    _nextPage() { this._currentPageIndex++; const t = this.resolution, e = ar.getOptimalCanvasAndContext(this._textureSize, this._textureSize, t); this._setupContext(e.context, this._style, t); const i = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize), r = new it({ source: new Ae({ resource: e.canvas, resolution: i, alphaMode: "premultiply-alpha-on-upload", autoGenerateMipmaps: this._mipmap }) }); this._textureStyle && (r.source.style = this._textureStyle); const n = { canvasAndContext: e, texture: r }; return this.pages[this._currentPageIndex] = n, n; }
    _setupContext(t, e, i) { e.fontSize = this.baseRenderedFontSize, t.scale(i, i), t.font = ir(e), e.fontSize = this.baseMeasurementFontSize, t.textBaseline = e.textBaseline; const r = e._stroke, n = r?.width ?? 0; if (r && (t.lineWidth = n, t.lineJoin = r.join, t.miterLimit = r.miterLimit, t.strokeStyle = Hn(r, t)), e._fill && (t.fillStyle = Hn(e._fill, t)), e.dropShadow) {
        const o = e.dropShadow, h = Pt.shared.setValue(o.color).toArray(), l = o.blur * i, c = o.distance * i;
        t.shadowColor = `rgba(${h[0] * 255},${h[1] * 255},${h[2] * 255},${o.alpha})`, t.shadowBlur = l, t.shadowOffsetX = Math.cos(o.angle) * c, t.shadowOffsetY = Math.sin(o.angle) * c;
    }
    else
        t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0; }
    _drawGlyph(t, e, i, r, n, o) { const h = e.text, l = e.fontProperties, u = (o._stroke?.width ?? 0) * n, d = i + u / 2, f = r - u / 2, _ = l.descent * n, p = e.lineHeight * n; let m = !1; o.stroke && u && (m = !0, t.strokeText(h, d, f + p - _)); const { shadowBlur: g, shadowOffsetX: y, shadowOffsetY: x } = t; o._fill && (m && (t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0), t.fillText(h, d, f + p - _)), m && (t.shadowBlur = g, t.shadowOffsetX = y, t.shadowOffsetY = x); }
    destroy() { super.destroy(); for (let t = 0; t < this.pages.length; t++) {
        const { canvasAndContext: e, texture: i } = this.pages[t];
        ar.returnCanvasAndContext(e), i.destroy(!0);
    } this.pages = null; }
};
Aa.defaultOptions = { textureSize: 512, style: new Hi, mipmap: !0 };
let Vn = Aa;
function vd(s, t, e, i) {
    const r = { width: 0, height: 0, offsetY: 0, scale: t.fontSize / e.baseMeasurementFontSize, lines: [{ width: 0, charPositions: [], spaceWidth: 0, spacesIndex: [], chars: [] }] };
    r.offsetY = e.baseLineOffset;
    let n = r.lines[0], o = null, h = !0;
    const l = { width: 0, start: 0, index: 0, positions: [], chars: [] }, c = e.baseMeasurementFontSize / t.fontSize, u = t.letterSpacing * c, d = t.wordWrapWidth * c, f = t.lineHeight ? t.lineHeight * c : e.lineHeight, _ = t.wordWrap && t.breakWords, p = y => { const x = n.width; for (let v = 0; v < l.index; v++) {
        const b = y.positions[v];
        n.chars.push(y.chars[v]), n.charPositions.push(b + x);
    } n.width += y.width, h = !1, l.width = 0, l.index = 0, l.chars.length = 0; }, m = () => { let y = n.chars.length - 1; if (i) {
        let x = n.chars[y];
        for (; x === " ";)
            n.width -= e.chars[x].xAdvance, x = n.chars[--y];
    } r.width = Math.max(r.width, n.width), n = { width: 0, charPositions: [], chars: [], spaceWidth: 0, spacesIndex: [] }, h = !0, r.lines.push(n), r.height += f; }, g = y => y - u > d;
    for (let y = 0; y < s.length + 1; y++) {
        let x;
        const v = y === s.length;
        v || (x = s[y]);
        const b = e.chars[x] || e.chars[" "];
        if (/(?:\s)/.test(x) || x === "\r" || x === `
` || v) {
            if (!h && t.wordWrap && g(n.width + l.width) ? (m(), p(l), v || n.charPositions.push(0)) : (l.start = n.width, p(l), v || n.charPositions.push(0)), x === "\r" || x === `
`)
                m();
            else if (!v) {
                const z = b.xAdvance + (b.kerning[o] || 0) + u;
                n.width += z, n.spaceWidth = z, n.spacesIndex.push(n.charPositions.length), n.chars.push(x);
            }
        }
        else {
            const k = b.kerning[o] || 0, z = b.xAdvance + k + u;
            _ && g(n.width + l.width + z) && (p(l), m()), l.positions[l.index++] = l.width + k, l.chars.push(x), l.width += z;
        }
        o = x;
    }
    return m(), t.align === "center" ? wd(r) : t.align === "right" ? kd(r) : t.align === "justify" && Ad(r), r;
}
function wd(s) { for (let t = 0; t < s.lines.length; t++) {
    const e = s.lines[t], i = s.width / 2 - e.width / 2;
    for (let r = 0; r < e.charPositions.length; r++)
        e.charPositions[r] += i;
} }
function kd(s) { for (let t = 0; t < s.lines.length; t++) {
    const e = s.lines[t], i = s.width - e.width;
    for (let r = 0; r < e.charPositions.length; r++)
        e.charPositions[r] += i;
} }
function Ad(s) { const t = s.width; for (let e = 0; e < s.lines.length; e++) {
    const i = s.lines[e];
    let r = 0, n = i.spacesIndex[r++], o = 0;
    const h = i.spacesIndex.length, c = (t - i.width) / h;
    for (let u = 0; u < i.charPositions.length; u++)
        u === n && (n = i.spacesIndex[r++], o += c), i.charPositions[u] += o;
} }
function Sd(s) { if (s === "")
    return []; typeof s == "string" && (s = [s]); const t = []; for (let e = 0, i = s.length; e < i; e++) {
    const r = s[e];
    if (Array.isArray(r)) {
        if (r.length !== 2)
            throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);
        if (r[0].length === 0 || r[1].length === 0)
            throw new Error("[BitmapFont]: Invalid character delimiter.");
        const n = r[0].charCodeAt(0), o = r[1].charCodeAt(0);
        if (o < n)
            throw new Error("[BitmapFont]: Invalid character range.");
        for (let h = n, l = o; h <= l; h++)
            t.push(String.fromCharCode(h));
    }
    else
        t.push(...Array.from(r));
} if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters."); return t; }
let Ti = 0;
class Cd {
    constructor() { this.ALPHA = [["a", "z"], ["A", "Z"], " "], this.NUMERIC = [["0", "9"]], this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], this.ASCII = [[" ", "~"]], this.defaultOptions = { chars: this.ALPHANUMERIC, resolution: 1, padding: 4, skipKerning: !1, textureStyle: null }, this.measureCache = oa(1e3); }
    getFont(t, e) { let i = `${e.fontFamily}-bitmap`, r = !0; if (e._fill.fill && !e._stroke ? (i += e._fill.fill.styleKey, r = !1) : (e._stroke || e.dropShadow) && (i = `${e.styleKey}-bitmap`, r = !1), !mt.has(i)) {
        const o = Object.create(e);
        o.lineHeight = 0;
        const h = new Vn({ style: o, overrideFill: r, overrideSize: !0, ...this.defaultOptions });
        Ti++, Ti > 50 && yt("BitmapText", `You have dynamically created ${Ti} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``), h.once("destroy", () => { Ti--, mt.remove(i); }), mt.set(i, h);
    } const n = mt.get(i); return n.ensureCharacters?.(t), n; }
    getLayout(t, e, i = !0) { const r = this.getFont(t, e), n = `${t}-${e.styleKey}-${i}`; if (this.measureCache.has(n))
        return this.measureCache.get(n); const o = Ri.graphemeSegmenter(t), h = vd(o, e, r, i); return this.measureCache.set(n, h), h; }
    measureText(t, e, i = !0) { return this.getLayout(t, e, i); }
    install(...t) { let e = t[0]; typeof e == "string" && (e = { name: e, style: t[1], chars: t[2]?.chars, resolution: t[2]?.resolution, padding: t[2]?.padding, skipKerning: t[2]?.skipKerning }, Z(ct, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})")); const i = e?.name; if (!i)
        throw new Error("[BitmapFontManager] Property `name` is required."); e = { ...this.defaultOptions, ...e }; const r = e.style, n = r instanceof Hi ? r : new Hi(r), o = e.dynamicFill ?? this._canUseTintForStyle(n), h = new Vn({ style: n, overrideFill: o, skipKerning: e.skipKerning, padding: e.padding, resolution: e.resolution, overrideSize: !1, textureStyle: e.textureStyle }), l = Sd(e.chars); return h.ensureCharacters(l.join("")), mt.set(`${i}-bitmap`, h), h.once("destroy", () => mt.remove(`${i}-bitmap`)), h; }
    uninstall(t) { const e = `${t}-bitmap`, i = mt.get(e); i && i.destroy(); }
    _canUseTintForStyle(t) { return !t._stroke && (!t.dropShadow || t.dropShadow.color === 0) && !t._fill.fill && t._fill.color === 16777215; }
}
const Xn = new Cd;
exports.an = Xn;
class Ca extends na {
    constructor(t, e) { super(); const { textures: i, data: r } = t; Object.keys(r.pages).forEach(n => { const o = r.pages[parseInt(n, 10)], h = i[o.id]; this.pages.push({ texture: h }); }), Object.keys(r.chars).forEach(n => { const o = r.chars[n], { frame: h, source: l, rotate: c } = i[o.page], u = ft.transformRectCoords(o, h, c, new pt), d = new it({ frame: u, orig: new pt(0, 0, o.width, o.height), source: l, rotate: c }); this.chars[n] = { id: n.codePointAt(0), xOffset: o.xOffset, yOffset: o.yOffset, xAdvance: o.xAdvance, kerning: o.kerning ?? {}, texture: d }; }), this.baseRenderedFontSize = r.fontSize, this.baseMeasurementFontSize = r.fontSize, this.fontMetrics = { ascent: 0, descent: 0, fontSize: r.fontSize }, this.baseLineOffset = r.baseLineOffset, this.lineHeight = r.lineHeight, this.fontFamily = r.fontFamily, this.distanceField = r.distanceField ?? { type: "none", range: 0 }, this.url = e; }
    destroy() { super.destroy(); for (let t = 0; t < this.pages.length; t++) {
        const { texture: e } = this.pages[t];
        e.destroy(!0);
    } this.pages = null; }
    static install(t) { Xn.install(t); }
    static uninstall(t) { Xn.uninstall(t); }
}
const Rs = { test(s) { return typeof s == "string" && s.startsWith("info face="); }, parse(s) { const t = s.match(/^[a-z]+\s+.+$/gm), e = { info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: [], distanceField: [] }; for (const d in t) {
        const f = t[d].match(/^[a-z]+/gm)[0], _ = t[d].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), p = {};
        for (const m in _) {
            const g = _[m].split("="), y = g[0], x = g[1].replace(/"/gm, ""), v = parseFloat(x), b = isNaN(v) ? x : v;
            p[y] = b;
        }
        e[f].push(p);
    } const i = { chars: {}, pages: [], lineHeight: 0, fontSize: 0, fontFamily: "", distanceField: null, baseLineOffset: 0 }, [r] = e.info, [n] = e.common, [o] = e.distanceField ?? []; o && (i.distanceField = { range: parseInt(o.distanceRange, 10), type: o.fieldType }), i.fontSize = parseInt(r.size, 10), i.fontFamily = r.face, i.lineHeight = parseInt(n.lineHeight, 10); const h = e.page; for (let d = 0; d < h.length; d++)
        i.pages.push({ id: parseInt(h[d].id, 10) || 0, file: h[d].file }); const l = {}; i.baseLineOffset = i.lineHeight - parseInt(n.base, 10); const c = e.char; for (let d = 0; d < c.length; d++) {
        const f = c[d], _ = parseInt(f.id, 10);
        let p = f.letter ?? f.char ?? String.fromCharCode(_);
        p === "space" && (p = " "), l[_] = p, i.chars[p] = { id: _, page: parseInt(f.page, 10) || 0, x: parseInt(f.x, 10), y: parseInt(f.y, 10), width: parseInt(f.width, 10), height: parseInt(f.height, 10), xOffset: parseInt(f.xoffset, 10), yOffset: parseInt(f.yoffset, 10), xAdvance: parseInt(f.xadvance, 10), kerning: {} };
    } const u = e.kerning || []; for (let d = 0; d < u.length; d++) {
        const f = parseInt(u[d].first, 10), _ = parseInt(u[d].second, 10), p = parseInt(u[d].amount, 10);
        i.chars[l[_]].kerning[l[f]] = p;
    } return i; } }, Yn = { test(s) { const t = s; return typeof t != "string" && "getElementsByTagName" in t && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null; }, parse(s) { const t = { chars: {}, pages: [], lineHeight: 0, fontSize: 0, fontFamily: "", distanceField: null, baseLineOffset: 0 }, e = s.getElementsByTagName("info")[0], i = s.getElementsByTagName("common")[0], r = s.getElementsByTagName("distanceField")[0]; r && (t.distanceField = { type: r.getAttribute("fieldType"), range: parseInt(r.getAttribute("distanceRange"), 10) }); const n = s.getElementsByTagName("page"), o = s.getElementsByTagName("char"), h = s.getElementsByTagName("kerning"); t.fontSize = parseInt(e.getAttribute("size"), 10), t.fontFamily = e.getAttribute("face"), t.lineHeight = parseInt(i.getAttribute("lineHeight"), 10); for (let c = 0; c < n.length; c++)
        t.pages.push({ id: parseInt(n[c].getAttribute("id"), 10) || 0, file: n[c].getAttribute("file") }); const l = {}; t.baseLineOffset = t.lineHeight - parseInt(i.getAttribute("base"), 10); for (let c = 0; c < o.length; c++) {
        const u = o[c], d = parseInt(u.getAttribute("id"), 10);
        let f = u.getAttribute("letter") ?? u.getAttribute("char") ?? String.fromCharCode(d);
        f === "space" && (f = " "), l[d] = f, t.chars[f] = { id: d, page: parseInt(u.getAttribute("page"), 10) || 0, x: parseInt(u.getAttribute("x"), 10), y: parseInt(u.getAttribute("y"), 10), width: parseInt(u.getAttribute("width"), 10), height: parseInt(u.getAttribute("height"), 10), xOffset: parseInt(u.getAttribute("xoffset"), 10), yOffset: parseInt(u.getAttribute("yoffset"), 10), xAdvance: parseInt(u.getAttribute("xadvance"), 10), kerning: {} };
    } for (let c = 0; c < h.length; c++) {
        const u = parseInt(h[c].getAttribute("first"), 10), d = parseInt(h[c].getAttribute("second"), 10), f = parseInt(h[c].getAttribute("amount"), 10);
        t.chars[l[d]].kerning[l[u]] = f;
    } return t; } }, jn = { test(s) { return typeof s == "string" && s.match(/<font(\s|>)/) ? Yn.test(xt.get().parseXML(s)) : !1; }, parse(s) { return Yn.parse(xt.get().parseXML(s)); } }, Md = [".xml", ".fnt"], Pd = { extension: { type: H.CacheParser, name: "cacheBitmapFont" }, test: s => s instanceof Ca, getCacheableAssets(s, t) { const e = {}; return s.forEach(i => { e[i] = t, e[`${i}-bitmap`] = t; }), e[`${t.fontFamily}-bitmap`] = t, e; } }, Td = { extension: { type: H.LoadParser, priority: pe.Normal }, name: "loadBitmapFont", id: "bitmap-font", test(s) { return Md.includes(Vt.extname(s).toLowerCase()); }, async testParse(s) { return Rs.test(s) || jn.test(s); }, async parse(s, t, e) { const i = Rs.test(s) ? Rs.parse(s) : jn.parse(s), { src: r } = t, { pages: n } = i, o = [], h = i.distanceField ? { scaleMode: "linear", alphaMode: "premultiply-alpha-on-upload", autoGenerateMipmaps: !1, resolution: 1 } : {}; for (let d = 0; d < n.length; ++d) {
        const f = n[d].file;
        let _ = Vt.join(Vt.dirname(r), f);
        _ = Ys(_, r), o.push({ src: _, data: h });
    } const l = await e.load(o), c = o.map(d => l[d.src]); return new Ca({ data: i, textures: c }, r); }, async load(s, t) { return await (await xt.get().fetch(s)).text(); }, async unload(s, t, e) { await Promise.all(s.pages.map(i => e.unload(i.texture.source._sourceOrigin))), s.destroy(); } };
class Id {
    constructor(t, e = !1) { this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e; }
    add(t) { t.forEach(e => { this._assetList.push(e); }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next(); }
    async _next() { if (this._assetList.length && this._isActive) {
        this._isLoading = !0;
        const t = [], e = Math.min(this._assetList.length, this._maxConcurrent);
        for (let i = 0; i < e; i++)
            t.push(this._assetList.pop());
        await this._loader.load(t), this._isLoading = !1, this._next();
    } }
    get active() { return this._isActive; }
    set active(t) { this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next()); }
}
const zd = { extension: { type: H.CacheParser, name: "cacheTextureArray" }, test: s => Array.isArray(s) && s.every(t => t instanceof it), getCacheableAssets: (s, t) => { const e = {}; return s.forEach(i => { t.forEach((r, n) => { e[i + (n === 0 ? "" : n + 1)] = r; }); }), e; } };
async function Ma(s) { if ("Image" in globalThis)
    return new Promise(t => { const e = new Image; e.onload = () => { t(!0); }, e.onerror = () => { t(!1); }, e.src = s; }); if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
        const t = await (await fetch(s)).blob();
        await createImageBitmap(t);
    }
    catch {
        return !1;
    }
    return !0;
} return !1; }
const Ed = { extension: { type: H.DetectionParser, priority: 1 }, test: async () => Ma("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="), add: async (s) => [...s, "avif"], remove: async (s) => s.filter(t => t !== "avif") }, qn = ["png", "jpg", "jpeg"], Rd = { extension: { type: H.DetectionParser, priority: -1 }, test: () => Promise.resolve(!0), add: async (s) => [...s, ...qn], remove: async (s) => s.filter(t => !qn.includes(t)) }, Fd = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function qi(s) { return Fd ? !1 : document.createElement("video").canPlayType(s) !== ""; }
const Bd = { extension: { type: H.DetectionParser, priority: 0 }, test: async () => qi("video/mp4"), add: async (s) => [...s, "mp4", "m4v"], remove: async (s) => s.filter(t => t !== "mp4" && t !== "m4v") }, Ld = { extension: { type: H.DetectionParser, priority: 0 }, test: async () => qi("video/ogg"), add: async (s) => [...s, "ogv"], remove: async (s) => s.filter(t => t !== "ogv") }, Od = { extension: { type: H.DetectionParser, priority: 0 }, test: async () => qi("video/webm"), add: async (s) => [...s, "webm"], remove: async (s) => s.filter(t => t !== "webm") }, Gd = { extension: { type: H.DetectionParser, priority: 0 }, test: async () => Ma("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="), add: async (s) => [...s, "webp"], remove: async (s) => s.filter(t => t !== "webp") }, Pa = class Fi {
    constructor() { this.loadOptions = { ...Fi.defaultOptions }, this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, { set: (t, e, i) => (this._parsersValidated = !1, t[e] = i, !0) }), this.promiseCache = {}; }
    reset() { this._parsersValidated = !1, this.promiseCache = {}; }
    _getLoadPromiseAndParser(t, e) { const i = { promise: null, parser: null }; return i.promise = (async () => { let r = null, n = null; if ((e.parser || e.loadParser) && (n = this._parserHash[e.parser || e.loadParser], e.loadParser && yt(`[Assets] "loadParser" is deprecated, use "parser" instead for ${t}`), n || yt(`[Assets] specified load parser "${e.parser || e.loadParser}" not found while loading ${t}`)), !n) {
        for (let o = 0; o < this.parsers.length; o++) {
            const h = this.parsers[o];
            if (h.load && h.test?.(t, e, this)) {
                n = h;
                break;
            }
        }
        if (!n)
            return yt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
    } r = await n.load(t, e, this), i.parser = n; for (let o = 0; o < this.parsers.length; o++) {
        const h = this.parsers[o];
        h.parse && h.parse && await h.testParse?.(r, e, this) && (r = await h.parse(r, e, this) || r, i.parser = h);
    } return r; })(), i; }
    async load(t, e) { this._parsersValidated || this._validateParsers(); const i = typeof e == "function" ? { ...Fi.defaultOptions, ...this.loadOptions, onProgress: e } : { ...Fi.defaultOptions, ...this.loadOptions, ...e || {} }, { onProgress: r, onError: n, strategy: o, retryCount: h, retryDelay: l } = i; let c = 0; const u = {}, d = Ui(t), f = Kt(t, m => ({ alias: [m], src: m, data: {} })), _ = f.reduce((m, g) => m + (g.progressSize || 1), 0), p = f.map(async (m) => { const g = Vt.toAbsolute(m.src); u[m.src] || (await this._loadAssetWithRetry(g, m, { onProgress: r, onError: n, strategy: o, retryCount: h, retryDelay: l }, u), c += m.progressSize || 1, r && r(c / _)); }); return await Promise.all(p), d ? u[f[0].src] : u; }
    async unload(t) { const i = Kt(t, r => ({ alias: [r], src: r })).map(async (r) => { const n = Vt.toAbsolute(r.src), o = this.promiseCache[n]; if (o) {
        const h = await o.promise;
        delete this.promiseCache[n], await o.parser?.unload?.(h, r, this);
    } }); await Promise.all(i); }
    _validateParsers() { this._parsersValidated = !0, this._parserHash = this._parsers.filter(t => t.name || t.id).reduce((t, e) => (!e.name && !e.id ? yt("[Assets] parser should have an id") : (t[e.name] || t[e.id]) && yt(`[Assets] parser id conflict "${e.id}"`), t[e.name] = e, e.id && (t[e.id] = e), t), {}); }
    async _loadAssetWithRetry(t, e, i, r) {
        let n = 0;
        const { onError: o, strategy: h, retryCount: l, retryDelay: c } = i, u = d => new Promise(f => setTimeout(f, d));
        for (;;)
            try {
                this.promiseCache[t] || (this.promiseCache[t] = this._getLoadPromiseAndParser(t, e)), r[e.src] = await this.promiseCache[t].promise;
                return;
            }
            catch (d) {
                delete this.promiseCache[t], delete r[e.src], n++;
                const f = h !== "retry" || n > l;
                if (h === "retry" && !f) {
                    o && o(d, e), await u(c);
                    continue;
                }
                if (h === "skip") {
                    o && o(d, e);
                    return;
                }
                o && o(d, e);
                const _ = new Error(`[Loader.load] Failed to load ${t}.
${d}`);
                throw d instanceof Error && d.stack && (_.stack = d.stack), _;
            }
    }
};
Pa.defaultOptions = { onProgress: void 0, onError: void 0, strategy: "throw", retryCount: 3, retryDelay: 250 };
let Dd = Pa;
function De(s, t) { if (Array.isArray(t)) {
    for (const e of t)
        if (s.startsWith(`data:${e}`))
            return !0;
    return !1;
} return s.startsWith(`data:${t}`); }
function Ue(s, t) { const e = s.split("?")[0], i = Vt.extname(e).toLowerCase(); return Array.isArray(t) ? t.includes(i) : i === t; }
const Ud = ".json", Nd = "application/json", Wd = { extension: { type: H.LoadParser, priority: pe.Low }, name: "loadJson", id: "json", test(s) { return De(s, Nd) || Ue(s, Ud); }, async load(s) { return await (await xt.get().fetch(s)).json(); } }, Hd = ".txt", Vd = "text/plain", Xd = { name: "loadTxt", id: "text", extension: { type: H.LoadParser, priority: pe.Low, name: "loadTxt" }, test(s) { return De(s, Vd) || Ue(s, Hd); }, async load(s) { return await (await xt.get().fetch(s)).text(); } }, Yd = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], jd = [".ttf", ".otf", ".woff", ".woff2"], qd = ["font/ttf", "font/otf", "font/woff", "font/woff2"], $d = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function Kd(s) { const t = Vt.extname(s), r = Vt.basename(s, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(h => h.charAt(0).toUpperCase() + h.slice(1)); let n = r.length > 0; for (const h of r)
    if (!h.match($d)) {
        n = !1;
        break;
    } let o = r.join(" "); return n || (o = `"${o.replace(/[\\"]/g, "\\/* PIXI */")}"`), o; }
const Zd = /^[0-9A-Za-z%:/?#\[\]@!\/* PIXI */'()\*\+,;=\-._~]*$/;
function Qd(s) { return Zd.test(s) ? s : encodeURI(s); }
const Jd = { extension: { type: H.LoadParser, priority: pe.Low }, name: "loadWebFont", id: "web-font", test(s) { return De(s, qd) || Ue(s, jd); }, async load(s, t) { const e = xt.get().getFontFaceSet(); if (e) {
        const i = [], r = t.data?.family ?? Kd(s), n = t.data?.weights?.filter(h => Yd.includes(h)) ?? ["normal"], o = t.data ?? {};
        for (let h = 0; h < n.length; h++) {
            const l = n[h], c = new FontFace(r, `url(${Qd(s)})`, { ...o, weight: l });
            await c.load(), e.add(c), i.push(c);
        }
        return mt.has(`${r}-and-url`) ? mt.get(`${r}-and-url`).entries.push({ url: s, faces: i }) : mt.set(`${r}-and-url`, { entries: [{ url: s, faces: i }] }), i.length === 1 ? i[0] : i;
    } return yt("[loadWebFont] FontFace API is not supported. Skipping loading font"), null; }, unload(s) { const t = Array.isArray(s) ? s : [s], e = t[0].family, i = mt.get(`${e}-and-url`), r = i.entries.find(n => n.faces.some(o => t.indexOf(o) !== -1)); r.faces = r.faces.filter(n => t.indexOf(n) === -1), r.faces.length === 0 && (i.entries = i.entries.filter(n => n !== r)), t.forEach(n => { xt.get().getFontFaceSet().delete(n); }), i.entries.length === 0 && mt.remove(`${e}-and-url`); } };
function Cr(s, t = 1) { const e = Ge.RETINA_PREFIX?.exec(s); return e ? parseFloat(e[1]) : t; }
function Mr(s, t, e) { s.label = e, s._sourceOrigin = e; const i = new it({ source: s, label: e }), r = () => { delete t.promiseCache[e], mt.has(e) && mt.remove(e); }; return i.source.once("destroy", () => { t.promiseCache[e] && (yt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."), r()); }), i.once("destroy", () => { s.destroyed || (yt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), r()); }), i; }
const t_ = ".svg", e_ = "image/svg+xml", i_ = { extension: { type: H.LoadParser, priority: pe.Low, name: "loadSVG" }, name: "loadSVG", id: "svg", config: { crossOrigin: "anonymous", parseAsGraphicsContext: !1 }, test(s) { return De(s, e_) || Ue(s, t_); }, async load(s, t, e) { return t.data?.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext ? r_(s) : s_(s, t, e, this.config.crossOrigin); }, unload(s) { s.destroy(!0); } };
async function s_(s, t, e, i) { const r = await xt.get().fetch(s), n = xt.get().createImage(); n.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`, n.crossOrigin = i, await n.decode(); const o = t.data?.width ?? n.width, h = t.data?.height ?? n.height, l = t.data?.resolution || Cr(s), c = Math.ceil(o * l), u = Math.ceil(h * l), d = xt.get().createCanvas(c, u), f = d.getContext("2d"); f.imageSmoothingEnabled = !0, f.imageSmoothingQuality = "high", f.drawImage(n, 0, 0, o * l, h * l); const { parseAsGraphicsContext: _, ...p } = t.data ?? {}, m = new Ae({ resource: d, alphaMode: "premultiply-alpha-on-upload", resolution: l, ...p }); return Mr(m, e, s); }
async function r_(s) { const e = await (await xt.get().fetch(s)).text(), i = new Xt; return i.svg(e), i; }
const n_ = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;
let Ee = null, hr = class {
    constructor() { Ee || (Ee = URL.createObjectURL(new Blob([n_], { type: "application/javascript" }))), this.worker = new Worker(Ee); }
};
hr.revokeObjectURL = function () { Ee && (URL.revokeObjectURL(Ee), Ee = null); };
const o_ = `(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;
let Re = null;
class Ta {
    constructor() { Re || (Re = URL.createObjectURL(new Blob([o_], { type: "application/javascript" }))), this.worker = new Worker(Re); }
}
Ta.revokeObjectURL = function () { Re && (URL.revokeObjectURL(Re), Re = null); };
let $n = 0, Fs;
class a_ {
    constructor() { this._initialized = !1, this._createdWorkers = 0, this._workerPool = [], this._queue = [], this._resolveHash = {}; }
    isImageBitmapSupported() { return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(t => { const { worker: e } = new hr; e.addEventListener("message", i => { e.terminate(), hr.revokeObjectURL(), t(i.data); }); }), this._isImageBitmapSupported); }
    loadImageBitmap(t, e) { return this._run("loadImageBitmap", [t, e?.data?.alphaMode]); }
    async _initWorkers() { this._initialized || (this._initialized = !0); }
    _getWorker() { Fs === void 0 && (Fs = navigator.hardwareConcurrency || 4); let t = this._workerPool.pop(); return !t && this._createdWorkers < Fs && (this._createdWorkers++, t = new Ta().worker, t.addEventListener("message", e => { this._complete(e.data), this._returnWorker(e.target), this._next(); })), t; }
    _returnWorker(t) { this._workerPool.push(t); }
    _complete(t) { this._resolveHash[t.uuid] && (t.error !== void 0 ? this._resolveHash[t.uuid].reject(t.error) : this._resolveHash[t.uuid].resolve(t.data), delete this._resolveHash[t.uuid]); }
    async _run(t, e) { await this._initWorkers(); const i = new Promise((r, n) => { this._queue.push({ id: t, arguments: e, resolve: r, reject: n }); }); return this._next(), i; }
    _next() { if (!this._queue.length)
        return; const t = this._getWorker(); if (!t)
        return; const e = this._queue.pop(), i = e.id; this._resolveHash[$n] = { resolve: e.resolve, reject: e.reject }, t.postMessage({ data: e.arguments, uuid: $n++, id: i }); }
    reset() { this._workerPool.forEach(t => t.terminate()), this._workerPool.length = 0, Object.values(this._resolveHash).forEach(({ reject: t }) => { t?.(new Error("WorkerManager has been reset before completion")); }), this._resolveHash = {}, this._queue.length = 0, this._initialized = !1, this._createdWorkers = 0; }
}
const Kn = new a_, h_ = [".jpeg", ".jpg", ".png", ".webp", ".avif"], l_ = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function c_(s, t) { const e = await xt.get().fetch(s); if (!e.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${e.status} ${e.statusText}`); const i = await e.blob(); return t?.data?.alphaMode === "premultiplied-alpha" ? createImageBitmap(i, { premultiplyAlpha: "none" }) : createImageBitmap(i); }
const Ia = { name: "loadTextures", id: "texture", extension: { type: H.LoadParser, priority: pe.High, name: "loadTextures" }, config: { preferWorkers: !0, preferCreateImageBitmap: !0, crossOrigin: "anonymous" }, test(s) { return De(s, l_) || Ue(s, h_); }, async load(s, t, e) { let i = null; globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await Kn.isImageBitmapSupported() ? i = await Kn.loadImageBitmap(s, t) : i = await c_(s, t) : i = await new Promise((n, o) => { i = xt.get().createImage(), i.crossOrigin = this.config.crossOrigin, i.src = s, i.complete ? n(i) : (i.onload = () => { n(i); }, i.onerror = o); }); const r = new Ae({ resource: i, alphaMode: "premultiply-alpha-on-upload", resolution: t.data?.resolution || Cr(s), ...t.data }); return Mr(r, e, s); }, unload(s) { s.destroy(!0); } }, u_ = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"];
let Bs, Ls;
function d_(s, t, e) { e === void 0 && !t.startsWith("data:") ? s.crossOrigin = f_(t) : e !== !1 && (s.crossOrigin = typeof e == "string" ? e : "anonymous"); }
function __(s) { return new Promise((t, e) => { s.addEventListener("canplaythrough", i), s.addEventListener("error", r), s.load(); function i() { n(), t(); } function r(o) { n(), e(o); } function n() { s.removeEventListener("canplaythrough", i), s.removeEventListener("error", r); } }); }
function f_(s, t = globalThis.location) { if (s.startsWith("data:"))
    return ""; t || (t = globalThis.location); const e = new URL(s, document.baseURI); return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : ""; }
function p_() { const s = [], t = []; for (const e of u_) {
    const i = ti.MIME_TYPES[e.substring(1)] || `video/${e.substring(1)}`;
    qi(i) && (s.push(e), t.includes(i) || t.push(i));
} return { validVideoExtensions: s, validVideoMime: t }; }
const g_ = { name: "loadVideo", id: "video", extension: { type: H.LoadParser, name: "loadVideo" }, test(s) { if (!Bs || !Ls) {
        const { validVideoExtensions: i, validVideoMime: r } = p_();
        Bs = i, Ls = r;
    } const t = De(s, Ls), e = Ue(s, Bs); return t || e; }, async load(s, t, e) { const i = { ...ti.defaultOptions, resolution: t.data?.resolution || Cr(s), alphaMode: t.data?.alphaMode || await Ro(), ...t.data }, r = document.createElement("video"), n = { preload: i.autoLoad !== !1 ? "auto" : void 0, "webkit-playsinline": i.playsinline !== !1 ? "" : void 0, playsinline: i.playsinline !== !1 ? "" : void 0, muted: i.muted === !0 ? "" : void 0, loop: i.loop === !0 ? "" : void 0, autoplay: i.autoPlay !== !1 ? "" : void 0 }; Object.keys(n).forEach(l => { const c = n[l]; c !== void 0 && r.setAttribute(l, c); }), i.muted === !0 && (r.muted = !0), d_(r, s, i.crossorigin); const o = document.createElement("source"); let h; if (i.mime)
        h = i.mime;
    else if (s.startsWith("data:"))
        h = s.slice(5, s.indexOf(";"));
    else if (!s.startsWith("blob:")) {
        const l = s.split("?")[0].slice(s.lastIndexOf(".") + 1).toLowerCase();
        h = ti.MIME_TYPES[l] || `video/${l}`;
    } return o.src = s, h && (o.type = h), new Promise(l => { const c = async () => { const u = new ti({ ...i, resource: r }); r.removeEventListener("canplay", c), t.data.preload && await __(r), l(Mr(u, e, s)); }; i.preload && !i.autoPlay && r.load(), r.addEventListener("canplay", c), r.appendChild(o); }); }, unload(s) { s.destroy(!0); } }, za = { extension: { type: H.ResolveParser, name: "resolveTexture" }, test: Ia.test, parse: s => ({ resolution: parseFloat(Ge.RETINA_PREFIX.exec(s)?.[1] ?? "1"), format: s.split(".").pop(), src: s }) }, m_ = { extension: { type: H.ResolveParser, priority: -2, name: "resolveJson" }, test: s => Ge.RETINA_PREFIX.test(s) && s.endsWith(".json"), parse: za.parse };
class y_ {
    constructor() { this._detections = [], this._initialized = !1, this.resolver = new Ge, this.loader = new Dd, this.cache = mt, this._backgroundLoader = new Id(this.loader), this._backgroundLoader.active = !0, this.reset(); }
    async init(t = {}) { if (this._initialized) {
        yt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
        return;
    } if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
        let n = t.manifest;
        typeof n == "string" && (n = await this.load(n)), this.resolver.addManifest(n);
    } const e = t.texturePreference?.resolution ?? 1, i = typeof e == "number" ? [e] : e, r = await this._detectFormats({ preferredFormats: t.texturePreference?.format, skipDetections: t.skipDetections, detections: this._detections }); this.resolver.prefer({ params: { format: r, resolution: i } }), t.preferences && this.setPreferences(t.preferences), t.loadOptions && (this.loader.loadOptions = { ...this.loader.loadOptions, ...t.loadOptions }); }
    add(t) { this.resolver.add(t); }
    async load(t, e) { this._initialized || await this.init(); const i = Ui(t), r = Kt(t).map(h => { if (typeof h != "string") {
        const l = this.resolver.getAlias(h);
        return l.some(c => !this.resolver.hasKey(c)) && this.add(h), Array.isArray(l) ? l[0] : l;
    } return this.resolver.hasKey(h) || this.add({ alias: h, src: h }), h; }), n = this.resolver.resolve(r), o = await this._mapLoadToResolve(n, e); return i ? o[r[0]] : o; }
    addBundle(t, e) { this.resolver.addBundle(t, e); }
    async loadBundle(t, e) { this._initialized || await this.init(); let i = !1; typeof t == "string" && (i = !0, t = [t]); const r = this.resolver.resolveBundle(t), n = {}, o = Object.keys(r); let h = 0; const l = [], c = () => { e?.(l.reduce((d, f) => d + f, 0) / h); }, u = o.map((d, f) => { const _ = r[d], p = Object.values(_), g = [...new Set(p.flat())].reduce((y, x) => y + (x.progressSize || 1), 0); return l.push(0), h += g, this._mapLoadToResolve(_, y => { l[f] = y * g, c(); }).then(y => { n[d] = y; }); }); return await Promise.all(u), i ? n[t[0]] : n; }
    async backgroundLoad(t) { this._initialized || await this.init(), typeof t == "string" && (t = [t]); const e = this.resolver.resolve(t); this._backgroundLoader.add(Object.values(e)); }
    async backgroundLoadBundle(t) { this._initialized || await this.init(), typeof t == "string" && (t = [t]); const e = this.resolver.resolveBundle(t); Object.values(e).forEach(i => { this._backgroundLoader.add(Object.values(i)); }); }
    reset() { this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1; }
    get(t) { if (typeof t == "string")
        return mt.get(t); const e = {}; for (let i = 0; i < t.length; i++)
        e[i] = mt.get(t[i]); return e; }
    async _mapLoadToResolve(t, e) { const i = [...new Set(Object.values(t))]; this._backgroundLoader.active = !1; const r = await this.loader.load(i, e); this._backgroundLoader.active = !0; const n = {}; return i.forEach(o => { const h = r[o.src], l = [o.src]; o.alias && l.push(...o.alias), l.forEach(c => { n[c] = h; }), mt.set(l, h); }), n; }
    async unload(t) { this._initialized || await this.init(); const e = Kt(t).map(r => typeof r != "string" ? r.src : r), i = this.resolver.resolve(e); await this._unloadFromResolved(i); }
    async unloadBundle(t) { this._initialized || await this.init(), t = Kt(t); const e = this.resolver.resolveBundle(t), i = Object.keys(e).map(r => this._unloadFromResolved(e[r])); await Promise.all(i); }
    async _unloadFromResolved(t) { const e = Object.values(t); e.forEach(i => { mt.remove(i.src); }), await this.loader.unload(e); }
    async _detectFormats(t) { let e = []; t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]); for (const i of t.detections)
        t.skipDetections || await i.test() ? e = await i.add(e) : t.skipDetections || (e = await i.remove(e)); return e = e.filter((i, r) => e.indexOf(i) === r), e; }
    get detections() { return this._detections; }
    setPreferences(t) { this.loader.parsers.forEach(e => { e.config && Object.keys(e.config).filter(i => i in t).forEach(i => { e.config[i] = t[i]; }); }); }
}
const ke = new y_;
Et.handleByList(H.LoadParser, ke.loader.parsers).handleByList(H.ResolveParser, ke.resolver.parsers).handleByList(H.CacheParser, ke.cache.parsers).handleByList(H.DetectionParser, ke.detections);
Et.add(zd, Rd, Ed, Gd, Bd, Ld, Od, Wd, Xd, Jd, i_, Ia, g_, Td, Pd, za, m_);
const Zn = { loader: H.LoadParser, resolver: H.ResolveParser, cache: H.CacheParser, detection: H.DetectionParser };
Et.handle(H.Asset, s => { const t = s.ref; Object.entries(Zn).filter(([e]) => !!t[e]).forEach(([e, i]) => Et.add(Object.assign(t[e], { extension: t[e].extension ?? i }))); }, s => { const t = s.ref; Object.keys(Zn).filter(e => !!t[e]).forEach(e => Et.remove(t[e])); });
class St extends Ao {
    constructor(t) { t instanceof Xt && (t = { context: t }); const { context: e, roundPixels: i, ...r } = t || {}; super({ label: "Graphics", ...r }), this.renderPipeId = "graphics", e ? this.context = e : (this.context = this._ownedContext = new Xt, this.context.autoGarbageCollect = this.autoGarbageCollect), this.didViewUpdate = !0, this.allowChildren = !1, this.roundPixels = i ?? !1; }
    set context(t) { t !== this._context && (this._context && (this._context.off("update", this.onViewUpdate, this), this._context.off("unload", this.unload, this)), this._context = t, this._context.on("update", this.onViewUpdate, this), this._context.on("unload", this.unload, this), this.onViewUpdate()); }
    get context() { return this._context; }
    get bounds() { return this._context.bounds; }
    updateBounds() { }
    containsPoint(t) { return this._context.containsPoint(t); }
    destroy(t) { this._ownedContext && !t ? this._ownedContext.destroy(t) : (t === !0 || t?.context === !0) && this._context.destroy(t), this._ownedContext = null, this._context = null, super.destroy(t); }
    _onTouch(t) { this._gcLastUsed = t, this._context._gcLastUsed = t; }
    _callContextMethod(t, e) { return this.context[t](...e), this; }
    setFillStyle(...t) { return this._callContextMethod("setFillStyle", t); }
    setStrokeStyle(...t) { return this._callContextMethod("setStrokeStyle", t); }
    fill(...t) { return this._callContextMethod("fill", t); }
    stroke(...t) { return this._callContextMethod("stroke", t); }
    texture(...t) { return this._callContextMethod("texture", t); }
    beginPath() { return this._callContextMethod("beginPath", []); }
    cut() { return this._callContextMethod("cut", []); }
    arc(...t) { return this._callContextMethod("arc", t); }
    arcTo(...t) { return this._callContextMethod("arcTo", t); }
    arcToSvg(...t) { return this._callContextMethod("arcToSvg", t); }
    bezierCurveTo(...t) { return this._callContextMethod("bezierCurveTo", t); }
    closePath() { return this._callContextMethod("closePath", []); }
    ellipse(...t) { return this._callContextMethod("ellipse", t); }
    circle(...t) { return this._callContextMethod("circle", t); }
    path(...t) { return this._callContextMethod("path", t); }
    lineTo(...t) { return this._callContextMethod("lineTo", t); }
    moveTo(...t) { return this._callContextMethod("moveTo", t); }
    quadraticCurveTo(...t) { return this._callContextMethod("quadraticCurveTo", t); }
    rect(...t) { return this._callContextMethod("rect", t); }
    roundRect(...t) { return this._callContextMethod("roundRect", t); }
    poly(...t) { return this._callContextMethod("poly", t); }
    regularPoly(...t) { return this._callContextMethod("regularPoly", t); }
    roundPoly(...t) { return this._callContextMethod("roundPoly", t); }
    roundShape(...t) { return this._callContextMethod("roundShape", t); }
    filletRect(...t) { return this._callContextMethod("filletRect", t); }
    chamferRect(...t) { return this._callContextMethod("chamferRect", t); }
    star(...t) { return this._callContextMethod("star", t); }
    svg(...t) { return this._callContextMethod("svg", t); }
    restore(...t) { return this._callContextMethod("restore", t); }
    save() { return this._callContextMethod("save", []); }
    getTransform() { return this.context.getTransform(); }
    resetTransform() { return this._callContextMethod("resetTransform", []); }
    rotateTransform(...t) { return this._callContextMethod("rotate", t); }
    scaleTransform(...t) { return this._callContextMethod("scale", t); }
    setTransform(...t) { return this._callContextMethod("setTransform", t); }
    transform(...t) { return this._callContextMethod("transform", t); }
    translateTransform(...t) { return this._callContextMethod("translate", t); }
    clear() { return this._callContextMethod("clear", []); }
    get fillStyle() { return this._context.fillStyle; }
    set fillStyle(t) { this._context.fillStyle = t; }
    get strokeStyle() { return this._context.strokeStyle; }
    set strokeStyle(t) { this._context.strokeStyle = t; }
    clone(t = !1) { return t ? new St(this._context.clone()) : (this._ownedContext = null, new St(this._context)); }
    lineStyle(t, e, i) { Z(ct, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style."); const r = {}; return t && (r.width = t), e && (r.color = e), i && (r.alpha = i), this.context.strokeStyle = r, this; }
    beginFill(t, e) { Z(ct, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."); const i = {}; return t !== void 0 && (i.color = t), e !== void 0 && (i.alpha = e), this.context.fillStyle = i, this; }
    endFill() { Z(ct, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill(); const t = this.context.strokeStyle; return (t.width !== Xt.defaultStrokeStyle.width || t.color !== Xt.defaultStrokeStyle.color || t.alpha !== Xt.defaultStrokeStyle.alpha) && this.context.stroke(), this; }
    drawCircle(...t) { return Z(ct, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", t); }
    drawEllipse(...t) { return Z(ct, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", t); }
    drawPolygon(...t) { return Z(ct, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", t); }
    drawRect(...t) { return Z(ct, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", t); }
    drawRoundedRect(...t) { return Z(ct, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", t); }
    drawStar(...t) { return Z(ct, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", t); }
}
exports.aq = St;
exports.Graphics = St;
class Lt extends it {
    static create(t) { const { dynamic: e, ...i } = t; return new Lt({ source: new qt(i), dynamic: e ?? !1 }); }
    resize(t, e, i) { return this.source.resize(t, e, i), this; }
}
exports.a4 = Lt;
var lr = (s => (s.CLAMP = "clamp-to-edge", s.REPEAT = "repeat", s.MIRRORED_REPEAT = "mirror-repeat", s))(lr || {});
new Proxy(lr, { get(s, t) { return Z(ct, `DRAW_MODES.${t} is deprecated, use '${lr[t]}' instead`), s[t]; } });
var cr = (s => (s.NEAREST = "nearest", s.LINEAR = "linear", s))(cr || {});
const Qn = new Proxy(cr, { get(s, t) { return Z(ct, `DRAW_MODES.${t} is deprecated, use '${cr[t]}' instead`), s[t]; } });
Et.add(Mh, Ph);

},
"./SharedSystems-tBvOkzj9.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u = exports.t = exports.f = exports.d = exports.b = exports.a = exports.U = exports.S = exports.R = exports.G = exports.B = void 0;
exports.c = Ot;
exports.e = Dt;
const Index_5qXXq_Tx_js_1 = require("./Index-5qXXq-Tx.js");
const colorToUniform_3MxHuUz8_js_1 = require("./colorToUniform-3MxHuUz8.js");
var rt = `in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    float a = alphaMul * masky.r * npmAlpha * clip;

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`, st = `in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`, re = `struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);

    var a: f32 = alphaMul * mask.r * uAlpha * clip;

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`;
class at extends Index_5qXXq_Tx_js_1.F {
    constructor(e) { const { sprite: t, ...r } = e, s = new Index_5qXXq_Tx_js_1.v(t.texture), a = new Index_5qXXq_Tx_js_1.l({ uFilterMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uMaskClamp: { value: s.uClampFrame, type: "vec4<f32>" }, uAlpha: { value: 1, type: "f32" }, uInverse: { value: e.inverse ? 1 : 0, type: "f32" } }), i = Index_5qXXq_Tx_js_1.x.from({ vertex: { source: re, entryPoint: "mainVertex" }, fragment: { source: re, entryPoint: "mainFragment" } }), o = Index_5qXXq_Tx_js_1.y.from({ vertex: st, fragment: rt, name: "mask-filter" }); super({ ...r, gpuProgram: i, glProgram: o, clipToViewport: !1, resources: { filterUniforms: a, uMaskTexture: t.texture.source } }), this.sprite = t, this._textureMatrix = s; }
    set inverse(e) { this.resources.filterUniforms.uniforms.uInverse = e ? 1 : 0; }
    get inverse() { return this.resources.filterUniforms.uniforms.uInverse === 1; }
    apply(e, t, r, s) { this._textureMatrix.texture = this.sprite.texture, e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord), this.resources.uMaskTexture = this.sprite.texture.source, e.applyFilter(this, t, r, s); }
}
const V = class pe {
    constructor(e, t) { this.state = Index_5qXXq_Tx_js_1.S.for2d(), this._batchersByInstructionSet = Object.create(null), this._activeBatches = Object.create(null), this.renderer = e, this._adaptor = t, this._adaptor.init?.(this); }
    static getBatcher(e) { return new this._availableBatchers[e]; }
    buildStart(e) { let t = this._batchersByInstructionSet[e.uid]; t || (t = this._batchersByInstructionSet[e.uid] = Object.create(null), t.default || (t.default = new Index_5qXXq_Tx_js_1.z({ maxTextures: this.renderer.limits.maxBatchableTextures }))), this._activeBatches = t, this._activeBatch = this._activeBatches.default; for (const r in this._activeBatches)
        this._activeBatches[r].begin(); }
    addToBatch(e, t) { if (this._activeBatch.name !== e.batcherName) {
        this._activeBatch.break(t);
        let r = this._activeBatches[e.batcherName];
        r || (r = this._activeBatches[e.batcherName] = pe.getBatcher(e.batcherName), r.begin()), this._activeBatch = r;
    } this._activeBatch.add(e); }
    break(e) { this._activeBatch.break(e); }
    buildEnd(e) { this._activeBatch.break(e); const t = this._activeBatches; for (const r in t) {
        const s = t[r], a = s.geometry;
        a.indexBuffer.setDataWithSize(s.indexBuffer, s.indexSize, !0), a.buffers[0].setDataWithSize(s.attributeBuffer.float32View, s.attributeSize, !1);
    } }
    upload(e) { const t = this._batchersByInstructionSet[e.uid]; for (const r in t) {
        const s = t[r], a = s.geometry;
        s.dirty && (s.dirty = !1, a.buffers[0].update(s.attributeSize * 4));
    } }
    execute(e) { if (e.action === "startBatch") {
        const t = e.batcher, r = t.geometry, s = t.shader;
        this._adaptor.start(this, r, s);
    } this._adaptor.execute(this, e); }
    destroy() { this.state = null, this.renderer = null, this._adaptor = null; for (const e in this._activeBatches)
        this._activeBatches[e].destroy(); this._activeBatches = null; }
};
V.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "batch" };
V._availableBatchers = Object.create(null);
let me = V;
Index_5qXXq_Tx_js_1.e.handleByMap(Index_5qXXq_Tx_js_1.E.Batcher, me._availableBatchers);
Index_5qXXq_Tx_js_1.e.add(Index_5qXXq_Tx_js_1.z);
const At = { name: "texture-bit", vertex: { header: `

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `, main: `
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        ` }, fragment: { header: `
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;


        `, main: `
            outColor = textureSample(uTexture, uSampler, vUV);
        ` } }, It = { name: "texture-bit", vertex: { header: `
            uniform mat3 uTextureMatrix;
        `, main: `
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        ` }, fragment: { header: `
        uniform sampler2D uTexture;


        `, main: `
            outColor = texture(uTexture, vUV);
        ` } }, nt = new Index_5qXXq_Tx_js_1.J;
exports.t = At;
exports.f = It;
class it extends Index_5qXXq_Tx_js_1.L {
    constructor() { super(), this.filters = [new at({ sprite: new Index_5qXXq_Tx_js_1.N(Index_5qXXq_Tx_js_1.t.EMPTY), inverse: !1, resolution: "inherit", antialias: "inherit" })]; }
    get sprite() { return this.filters[0].sprite; }
    set sprite(e) { this.filters[0].sprite = e; }
    get inverse() { return this.filters[0].inverse; }
    set inverse(e) { this.filters[0].inverse = e; }
}
class ge {
    constructor(e) { this._activeMaskStage = [], this._renderer = e; }
    push(e, t, r) { const s = this._renderer; if (s.renderPipes.batch.break(r), r.add({ renderPipeId: "alphaMask", action: "pushMaskBegin", mask: e, inverse: t._maskOptions.inverse, canBundle: !1, maskedContainer: t }), e.inverse = t._maskOptions.inverse, e.renderMaskToTexture) {
        const a = e.mask;
        a.includeInBuild = !0, a.collectRenderables(r, s, null), a.includeInBuild = !1;
    } s.renderPipes.batch.break(r), r.add({ renderPipeId: "alphaMask", action: "pushMaskEnd", mask: e, maskedContainer: t, inverse: t._maskOptions.inverse, canBundle: !1 }); }
    pop(e, t, r) { this._renderer.renderPipes.batch.break(r), r.add({ renderPipeId: "alphaMask", action: "popMaskEnd", mask: e, inverse: t._maskOptions.inverse, canBundle: !1 }); }
    execute(e) { const t = this._renderer, r = e.mask.renderMaskToTexture; if (e.action === "pushMaskBegin") {
        const s = Index_5qXXq_Tx_js_1.H.get(it);
        if (s.inverse = e.inverse, r) {
            e.mask.mask.measurable = !0;
            const a = (0, Index_5qXXq_Tx_js_1.I)(e.mask.mask, !0, nt);
            e.mask.mask.measurable = !1, a.ceil();
            const i = t.renderTarget.renderTarget.colorTexture.source, o = Index_5qXXq_Tx_js_1.K.getOptimalTexture(a.width, a.height, i._resolution, i.antialias);
            t.renderTarget.push(o, !0), t.globalUniforms.push({ offset: a, worldColor: 4294967295 });
            const l = s.sprite;
            l.texture = o, l.worldTransform.tx = a.minX, l.worldTransform.ty = a.minY, this._activeMaskStage.push({ filterEffect: s, maskedContainer: e.maskedContainer, filterTexture: o });
        }
        else
            s.sprite = e.mask.mask, this._activeMaskStage.push({ filterEffect: s, maskedContainer: e.maskedContainer });
    }
    else if (e.action === "pushMaskEnd") {
        const s = this._activeMaskStage[this._activeMaskStage.length - 1];
        r && (t.type === Index_5qXXq_Tx_js_1.R.WEBGL && t.renderTarget.finishRenderPass(), t.renderTarget.pop(), t.globalUniforms.pop()), t.filter.push({ renderPipeId: "filter", action: "pushFilter", container: s.maskedContainer, filterEffect: s.filterEffect, canBundle: !1 });
    }
    else if (e.action === "popMaskEnd") {
        t.filter.pop();
        const s = this._activeMaskStage.pop();
        r && Index_5qXXq_Tx_js_1.K.returnTexture(s.filterTexture), Index_5qXXq_Tx_js_1.H.return(s.filterEffect);
    } }
    destroy() { this._renderer = null, this._activeMaskStage = null; }
}
ge.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "alphaMask" };
class _e {
    constructor(e) { this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = e; }
    buildStart() { this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15; }
    push(e, t, r) { this._renderer.renderPipes.batch.break(r); const a = this._colorStack; a[this._colorStackIndex] = a[this._colorStackIndex - 1] & e.mask; const i = this._colorStack[this._colorStackIndex]; i !== this._currentColor && (this._currentColor = i, r.add({ renderPipeId: "colorMask", colorMask: i, canBundle: !1 })), this._colorStackIndex++; }
    pop(e, t, r) { this._renderer.renderPipes.batch.break(r); const a = this._colorStack; this._colorStackIndex--; const i = a[this._colorStackIndex - 1]; i !== this._currentColor && (this._currentColor = i, r.add({ renderPipeId: "colorMask", colorMask: i, canBundle: !1 })); }
    execute(e) { this._renderer.colorMask.setMask(e.colorMask); }
    destroy() { this._renderer = null, this._colorStack = null; }
}
_e.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "colorMask" };
class ve {
    constructor(e) { this._maskStackHash = {}, this._maskHash = new WeakMap, this._renderer = e; }
    push(e, t, r) { var s; const a = e, i = this._renderer; i.renderPipes.batch.break(r), i.renderPipes.blendMode.setBlendMode(a.mask, "none", r), r.add({ renderPipeId: "stencilMask", action: "pushMaskBegin", mask: e, inverse: t._maskOptions.inverse, canBundle: !1 }); const o = a.mask; o.includeInBuild = !0, this._maskHash.has(a) || this._maskHash.set(a, { instructionsStart: 0, instructionsLength: 0 }); const l = this._maskHash.get(a); l.instructionsStart = r.instructionSize, o.collectRenderables(r, i, null), o.includeInBuild = !1, i.renderPipes.batch.break(r), r.add({ renderPipeId: "stencilMask", action: "pushMaskEnd", mask: e, inverse: t._maskOptions.inverse, canBundle: !1 }); const d = r.instructionSize - l.instructionsStart - 1; l.instructionsLength = d; const c = i.renderTarget.renderTarget.uid; (s = this._maskStackHash)[c] ?? (s[c] = 0); }
    pop(e, t, r) { const s = e, a = this._renderer; a.renderPipes.batch.break(r), a.renderPipes.blendMode.setBlendMode(s.mask, "none", r), r.add({ renderPipeId: "stencilMask", action: "popMaskBegin", inverse: t._maskOptions.inverse, canBundle: !1 }); const i = this._maskHash.get(e); for (let o = 0; o < i.instructionsLength; o++)
        r.instructions[r.instructionSize++] = r.instructions[i.instructionsStart++]; r.add({ renderPipeId: "stencilMask", action: "popMaskEnd", canBundle: !1 }); }
    execute(e) { var t; const r = this._renderer, s = r.renderTarget.renderTarget.uid; let a = (t = this._maskStackHash)[s] ?? (t[s] = 0); e.action === "pushMaskBegin" ? (r.renderTarget.ensureDepthStencil(), r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.RENDERING_MASK_ADD, a), a++, r.colorMask.setMask(0)) : e.action === "pushMaskEnd" ? (e.inverse ? r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.INVERSE_MASK_ACTIVE, a) : r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.MASK_ACTIVE, a), r.colorMask.setMask(15)) : e.action === "popMaskBegin" ? (r.colorMask.setMask(0), a !== 0 ? r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.RENDERING_MASK_REMOVE, a) : (r.renderTarget.clear(null, Index_5qXXq_Tx_js_1.i.STENCIL), r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.DISABLED, a)), a--) : e.action === "popMaskEnd" && (e.inverse ? r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.INVERSE_MASK_ACTIVE, a) : r.stencil.setStencilMode(Index_5qXXq_Tx_js_1.b.MASK_ACTIVE, a), r.colorMask.setMask(15)), this._maskStackHash[s] = a; }
    destroy() { this._renderer = null, this._maskStackHash = null, this._maskHash = null; }
}
ve.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "stencilMask" };
function Dt(n, e) { for (const t in n.attributes) {
    const r = n.attributes[t], s = e[t];
    s ? (r.format ?? (r.format = s.format), r.offset ?? (r.offset = s.offset), r.instance ?? (r.instance = s.instance)) : (0, Index_5qXXq_Tx_js_1.w)(`Attribute ${t} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);
} ot(n); }
function ot(n) { const { buffers: e, attributes: t } = n, r = {}, s = {}; for (const a in e) {
    const i = e[a];
    r[i.uid] = 0, s[i.uid] = 0;
} for (const a in t) {
    const i = t[a];
    r[i.buffer.uid] += (0, Index_5qXXq_Tx_js_1.O)(i.format).stride;
} for (const a in t) {
    const i = t[a];
    i.stride ?? (i.stride = r[i.buffer.uid]), i.start ?? (i.start = s[i.buffer.uid]), s[i.buffer.uid] += (0, Index_5qXXq_Tx_js_1.O)(i.format).stride;
} }
const b = [];
exports.G = b;
b[Index_5qXXq_Tx_js_1.b.NONE] = void 0;
b[Index_5qXXq_Tx_js_1.b.DISABLED] = { stencilWriteMask: 0, stencilReadMask: 0 };
b[Index_5qXXq_Tx_js_1.b.RENDERING_MASK_ADD] = { stencilFront: { compare: "equal", passOp: "increment-clamp" }, stencilBack: { compare: "equal", passOp: "increment-clamp" } };
b[Index_5qXXq_Tx_js_1.b.RENDERING_MASK_REMOVE] = { stencilFront: { compare: "equal", passOp: "decrement-clamp" }, stencilBack: { compare: "equal", passOp: "decrement-clamp" } };
b[Index_5qXXq_Tx_js_1.b.MASK_ACTIVE] = { stencilWriteMask: 0, stencilFront: { compare: "equal", passOp: "keep" }, stencilBack: { compare: "equal", passOp: "keep" } };
b[Index_5qXXq_Tx_js_1.b.INVERSE_MASK_ACTIVE] = { stencilWriteMask: 0, stencilFront: { compare: "not-equal", passOp: "keep" }, stencilBack: { compare: "not-equal", passOp: "keep" } };
class Et {
    constructor(e) { this._syncFunctionHash = Object.create(null), this._adaptor = e, this._systemCheck(); }
    _systemCheck() { if (!(0, Index_5qXXq_Tx_js_1.Q)())
        throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support."); }
    ensureUniformGroup(e) { const t = this.getUniformGroupData(e); e.buffer || (e.buffer = new Index_5qXXq_Tx_js_1.c({ data: new Float32Array(t.layout.size / 4), usage: Index_5qXXq_Tx_js_1.B.UNIFORM | Index_5qXXq_Tx_js_1.B.COPY_DST })); }
    getUniformGroupData(e) { return this._syncFunctionHash[e._signature] || this._initUniformGroup(e); }
    _initUniformGroup(e) { const t = e._signature; let r = this._syncFunctionHash[t]; if (!r) {
        const s = Object.keys(e.uniformStructures).map(o => e.uniformStructures[o]), a = this._adaptor.createUboElements(s), i = this._generateUboSync(a.uboElements);
        r = this._syncFunctionHash[t] = { layout: a, syncFunction: i };
    } return this._syncFunctionHash[t]; }
    _generateUboSync(e) { return this._adaptor.generateUboSync(e); }
    syncUniformGroup(e, t, r) { const s = this.getUniformGroupData(e); e.buffer || (e.buffer = new Index_5qXXq_Tx_js_1.c({ data: new Float32Array(s.layout.size / 4), usage: Index_5qXXq_Tx_js_1.B.UNIFORM | Index_5qXXq_Tx_js_1.B.COPY_DST })); let a = null; return t || (t = e.buffer.data, a = e.buffer.dataInt32), r || (r = 0), s.syncFunction(e.uniforms, t, a, r), !0; }
    updateUniformGroup(e) { if (e.isStatic && !e._dirtyId)
        return !1; e._dirtyId = 0; const t = this.syncUniformGroup(e); return e.buffer.update(), t; }
    destroy() { this._syncFunctionHash = null; }
}
exports.U = Et;
const C = [{ type: "mat3x3<f32>", test: n => n.value.a !== void 0, ubo: `
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `, uniform: `
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        ` }, { type: "vec4<f32>", test: n => n.type === "vec4<f32>" && n.size === 1 && n.value.width !== void 0, ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `, uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        ` }, { type: "vec2<f32>", test: n => n.type === "vec2<f32>" && n.size === 1 && n.value.x !== void 0, ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `, uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        ` }, { type: "vec4<f32>", test: n => n.type === "vec4<f32>" && n.size === 1 && n.value.red !== void 0, ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `, uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        ` }, { type: "vec3<f32>", test: n => n.type === "vec3<f32>" && n.size === 1 && n.value.red !== void 0, ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `, uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        ` }];
exports.d = C;
function Ot(n, e, t, r) {
    const s = [`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `];
    let a = 0;
    for (let o = 0; o < n.length; o++) {
        const l = n[o], d = l.data.name;
        let c = !1, h = 0;
        for (let p = 0; p < C.length; p++)
            if (C[p].test(l.data)) {
                h = l.offset / 4, s.push(`name = "${d}";`, `offset += ${h - a};`, C[p][e] || C[p].ubo), c = !0;
                break;
            }
        if (!c)
            if (l.data.size > 1)
                h = l.offset / 4, s.push(t(l, h - a));
            else {
                const p = r[l.data.type];
                h = l.offset / 4, s.push(`
                    v = uv.${d};
                    offset += ${h - a};
                    ${p};
                `);
            }
        a = h;
    }
    const i = s.join(`
`);
    return new Function("uv", "data", "dataInt32", "offset", i);
}
function _(n, e) {
    return `
        for (let i = 0; i < ${n * e}; i++) {
            data[offset + (((i / ${n})|0) * 4) + (i % ${n})] = v[i];
        }
    `;
}
const lt = { f32: `
        data[offset] = v;`, i32: `
        dataInt32[offset] = v;`, "vec2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];`, "vec3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`, "vec4<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`, "vec2<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`, "vec3<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`, "vec4<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`, "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`, "mat3x3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`, "mat4x4<f32>": `
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`, "mat3x2<f32>": _(3, 2), "mat4x2<f32>": _(4, 2), "mat2x3<f32>": _(2, 3), "mat4x3<f32>": _(4, 3), "mat2x4<f32>": _(2, 4), "mat3x4<f32>": _(3, 4) }, Ft = { ...lt, "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    ` };
exports.b = lt;
exports.u = Ft;
function ut(n, e, t, r, s, a) { const i = a ? 1 : -1; return n.identity(), n.a = 1 / r * 2, n.d = i * (1 / s * 2), n.tx = -1 - e * n.a, n.ty = -i - t * n.d, n; }
const x = new Map;
Index_5qXXq_Tx_js_1.V.register(x);
function xe(n, e) { if (!x.has(n)) {
    const t = new Index_5qXXq_Tx_js_1.t({ source: new Index_5qXXq_Tx_js_1.j({ resource: n, ...e }) }), r = () => { x.get(n) === t && x.delete(n); };
    t.once("destroy", r), t.source.once("destroy", r), x.set(n, t);
} return x.get(n); }
function dt(n) { const e = n.colorTexture.source.resource; return globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement && document.body.contains(e); }
const be = class ye {
    constructor(e = {}) { if (this.uid = (0, Index_5qXXq_Tx_js_1.u)("renderTarget"), this.colorTextures = [], this.dirtyId = 0, this.isRoot = !1, this._size = new Float32Array(2), this._managedColorTextures = !1, e = { ...ye.defaultOptions, ...e }, this.stencil = e.stencil, this.depth = e.depth, this.isRoot = e.isRoot, typeof e.colorTextures == "number") {
        this._managedColorTextures = !0;
        for (let t = 0; t < e.colorTextures; t++)
            this.colorTextures.push(new Index_5qXXq_Tx_js_1.k({ width: e.width, height: e.height, resolution: e.resolution, antialias: e.antialias }));
    }
    else {
        this.colorTextures = [...e.colorTextures.map(r => r.source)];
        const t = this.colorTexture.source;
        this.resize(t.width, t.height, t._resolution);
    } this.colorTexture.source.on("resize", this.onSourceResize, this), (e.depthStencilTexture || this.stencil) && (e.depthStencilTexture instanceof Index_5qXXq_Tx_js_1.t || e.depthStencilTexture instanceof Index_5qXXq_Tx_js_1.k ? this.depthStencilTexture = e.depthStencilTexture.source : this.ensureDepthStencilTexture()); }
    get size() { const e = this._size; return e[0] = this.pixelWidth, e[1] = this.pixelHeight, e; }
    get width() { return this.colorTexture.source.width; }
    get height() { return this.colorTexture.source.height; }
    get pixelWidth() { return this.colorTexture.source.pixelWidth; }
    get pixelHeight() { return this.colorTexture.source.pixelHeight; }
    get resolution() { return this.colorTexture.source._resolution; }
    get colorTexture() { return this.colorTextures[0]; }
    onSourceResize(e) { this.resize(e.width, e.height, e._resolution, !0); }
    ensureDepthStencilTexture() { this.depthStencilTexture || (this.depthStencilTexture = new Index_5qXXq_Tx_js_1.k({ width: this.width, height: this.height, resolution: this.resolution, format: "depth24plus-stencil8", autoGenerateMipmaps: !1, antialias: !1, mipLevelCount: 1 })); }
    resize(e, t, r = this.resolution, s = !1) { this.dirtyId++, this.colorTextures.forEach((a, i) => { s && i === 0 || a.source.resize(e, t, r); }), this.depthStencilTexture && this.depthStencilTexture.source.resize(e, t, r); }
    destroy() { this.colorTexture.source.off("resize", this.onSourceResize, this), this._managedColorTextures && this.colorTextures.forEach(e => { e.destroy(); }), this.depthStencilTexture && (this.depthStencilTexture.destroy(), delete this.depthStencilTexture); }
};
be.defaultOptions = { width: 0, height: 0, resolution: 1, colorTextures: 1, stencil: !1, depth: !1, antialias: !1, isRoot: !1 };
let D = be;
class Lt {
    constructor(e) { this.rootViewPort = new Index_5qXXq_Tx_js_1.W, this.viewport = new Index_5qXXq_Tx_js_1.W, this.onRenderTargetChange = new Index_5qXXq_Tx_js_1.X("onRenderTargetChange"), this.projectionMatrix = new Index_5qXXq_Tx_js_1.M, this.defaultClearColor = [0, 0, 0, 0], this._renderSurfaceToRenderTargetHash = new Map, this._gpuRenderTargetHash = Object.create(null), this._renderTargetStack = [], this._renderer = e, e.renderableGC.addManagedHash(this, "_gpuRenderTargetHash"); }
    finishRenderPass() { this.adaptor.finishRenderPass(this.renderTarget); }
    renderStart({ target: e, clear: t, clearColor: r, frame: s }) { this._renderTargetStack.length = 0, this.push(e, t, r, s), this.rootViewPort.copyFrom(this.viewport), this.rootRenderTarget = this.renderTarget, this.renderingToScreen = dt(this.rootRenderTarget), this.adaptor.prerender?.(this.rootRenderTarget); }
    postrender() { this.adaptor.postrender?.(this.rootRenderTarget); }
    bind(e, t = !0, r, s) { const a = this.getRenderTarget(e), i = this.renderTarget !== a; this.renderTarget = a, this.renderSurface = e; const o = this.getGpuRenderTarget(a); (a.pixelWidth !== o.width || a.pixelHeight !== o.height) && (this.adaptor.resizeGpuRenderTarget(a), o.width = a.pixelWidth, o.height = a.pixelHeight); const l = a.colorTexture, d = this.viewport, c = l.pixelWidth, h = l.pixelHeight; if (!s && e instanceof Index_5qXXq_Tx_js_1.t && (s = e.frame), s) {
        const p = l._resolution;
        d.x = s.x * p + .5 | 0, d.y = s.y * p + .5 | 0, d.width = s.width * p + .5 | 0, d.height = s.height * p + .5 | 0;
    }
    else
        d.x = 0, d.y = 0, d.width = c, d.height = h; return ut(this.projectionMatrix, 0, 0, d.width / l.resolution, d.height / l.resolution, !a.isRoot), this.adaptor.startRenderPass(a, t, r, d), i && this.onRenderTargetChange.emit(a), a; }
    clear(e, t = Index_5qXXq_Tx_js_1.i.ALL, r) { t && (e && (e = this.getRenderTarget(e)), this.adaptor.clear(e || this.renderTarget, t, r, this.viewport)); }
    contextChange() { this._gpuRenderTargetHash = Object.create(null); }
    push(e, t = Index_5qXXq_Tx_js_1.i.ALL, r, s) { const a = this.bind(e, t, r, s); return this._renderTargetStack.push({ renderTarget: a, frame: s }), a; }
    pop() { this._renderTargetStack.pop(); const e = this._renderTargetStack[this._renderTargetStack.length - 1]; this.bind(e.renderTarget, !1, null, e.frame); }
    getRenderTarget(e) { return e.isTexture && (e = e.source), this._renderSurfaceToRenderTargetHash.get(e) ?? this._initRenderTarget(e); }
    copyToTexture(e, t, r, s, a) { r.x < 0 && (s.width += r.x, a.x -= r.x, r.x = 0), r.y < 0 && (s.height += r.y, a.y -= r.y, r.y = 0); const { pixelWidth: i, pixelHeight: o } = e; return s.width = Math.min(s.width, i - r.x), s.height = Math.min(s.height, o - r.y), this.adaptor.copyToTexture(e, t, r, s, a); }
    ensureDepthStencil() { this.renderTarget.stencil || (this.renderTarget.stencil = !0, this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport)); }
    destroy() { this._renderer = null, this._renderSurfaceToRenderTargetHash.forEach((e, t) => { e !== t && e.destroy(); }), this._renderSurfaceToRenderTargetHash.clear(), this._gpuRenderTargetHash = Object.create(null); }
    _initRenderTarget(e) { let t = null; return Index_5qXXq_Tx_js_1.j.test(e) && (e = xe(e).source), e instanceof D ? t = e : e instanceof Index_5qXXq_Tx_js_1.k && (t = new D({ colorTextures: [e] }), e.source instanceof Index_5qXXq_Tx_js_1.j && (t.isRoot = !0), e.once("destroy", () => { t.destroy(), this._renderSurfaceToRenderTargetHash.delete(e); const r = this._gpuRenderTargetHash[t.uid]; r && (this._gpuRenderTargetHash[t.uid] = null, this.adaptor.destroyGpuRenderTarget(r)); })), this._renderSurfaceToRenderTargetHash.set(e, t), t; }
    getGpuRenderTarget(e) { return this._gpuRenderTargetHash[e.uid] || (this._gpuRenderTargetHash[e.uid] = this.adaptor.initGpuRenderTarget(e)); }
    resetState() { this.renderTarget = null, this.renderSurface = null; }
}
exports.R = Lt;
class Ht extends Index_5qXXq_Tx_js_1.a {
    constructor({ buffer: e, offset: t, size: r }) { super(), this.uid = (0, Index_5qXXq_Tx_js_1.u)("buffer"), this._resourceType = "bufferResource", this._touched = 0, this._resourceId = (0, Index_5qXXq_Tx_js_1.u)("resource"), this._bufferResource = !0, this.destroyed = !1, this.buffer = e, this.offset = t | 0, this.size = r, this.buffer.on("change", this.onBufferChange, this); }
    onBufferChange() { this._resourceId = (0, Index_5qXXq_Tx_js_1.u)("resource"), this.emit("change", this); }
    destroy(e = !1) { this.destroyed = !0, e && this.buffer.destroy(), this.emit("change", this), this.buffer = null, this.removeAllListeners(); }
}
exports.B = Ht;
class Te {
    constructor(e) { this._renderer = e; }
    updateRenderable() { }
    destroyRenderable() { }
    validateRenderable() { return !1; }
    addRenderable(e, t) { this._renderer.renderPipes.batch.break(t), t.add(e); }
    execute(e) { e.isRenderable && e.render(this._renderer); }
    destroy() { this._renderer = null; }
}
Te.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "customRender" };
function E(n, e) { const t = n.instructionSet, r = t.instructions; for (let s = 0; s < t.instructionSize; s++) {
    const a = r[s];
    e[a.renderPipeId].execute(a);
} }
const ct = new Index_5qXXq_Tx_js_1.M;
class ke {
    constructor(e) { this._renderer = e; }
    addRenderGroup(e, t) { e.isCachedAsTexture ? this._addRenderableCacheAsTexture(e, t) : this._addRenderableDirect(e, t); }
    execute(e) { e.isRenderable && (e.isCachedAsTexture ? this._executeCacheAsTexture(e) : this._executeDirect(e)); }
    destroy() { this._renderer = null; }
    _addRenderableDirect(e, t) { this._renderer.renderPipes.batch.break(t), e._batchableRenderGroup && (Index_5qXXq_Tx_js_1.H.return(e._batchableRenderGroup), e._batchableRenderGroup = null), t.add(e); }
    _addRenderableCacheAsTexture(e, t) { const r = e._batchableRenderGroup ?? (e._batchableRenderGroup = Index_5qXXq_Tx_js_1.H.get(colorToUniform_3MxHuUz8_js_1.B)); r.renderable = e.root, r.transform = e.root.relativeGroupTransform, r.texture = e.texture, r.bounds = e._textureBounds, t.add(e), this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, t), this._renderer.renderPipes.batch.addToBatch(r, t), this._renderer.renderPipes.blendMode.popBlendMode(t); }
    _executeCacheAsTexture(e) { if (e.textureNeedsUpdate) {
        e.textureNeedsUpdate = !1;
        const t = ct.identity().translate(-e._textureBounds.x, -e._textureBounds.y);
        this._renderer.renderTarget.push(e.texture, !0, null, e.texture.frame), this._renderer.globalUniforms.push({ worldTransformMatrix: t, worldColor: 4294967295, offset: { x: 0, y: 0 } }), E(e, this._renderer.renderPipes), this._renderer.renderTarget.finishRenderPass(), this._renderer.renderTarget.pop(), this._renderer.globalUniforms.pop();
    } e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup), e._batchableRenderGroup._batcher.geometry.buffers[0].update(); }
    _executeDirect(e) { this._renderer.globalUniforms.push({ worldTransformMatrix: e.inverseParentTextureTransform, worldColor: e.worldColorAlpha }), E(e, this._renderer.renderPipes), this._renderer.globalUniforms.pop(); }
}
ke.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "renderGroup" };
function O(n, e) { e || (e = 0); for (let t = e; t < n.length && n[t]; t++)
    n[t] = null; }
const ht = new Index_5qXXq_Tx_js_1.C, se = Index_5qXXq_Tx_js_1.Z | Index_5qXXq_Tx_js_1._ | Index_5qXXq_Tx_js_1.$;
function Ce(n, e = !1) { ft(n); const t = n.childrenToUpdate, r = n.updateTick++; for (const s in t) {
    const a = Number(s), i = t[s], o = i.list, l = i.index;
    for (let d = 0; d < l; d++) {
        const c = o[d];
        c.parentRenderGroup === n && c.relativeRenderGroupDepth === a && Me(c, r, 0);
    }
    O(o, l), i.index = 0;
} if (e)
    for (let s = 0; s < n.renderGroupChildren.length; s++)
        Ce(n.renderGroupChildren[s], e); }
function ft(n) { const e = n.root; let t; if (n.renderGroupParent) {
    const r = n.renderGroupParent;
    n.worldTransform.appendFrom(e.relativeGroupTransform, r.worldTransform), n.worldColor = (0, Index_5qXXq_Tx_js_1.Y)(e.groupColor, r.worldColor), t = e.groupAlpha * r.worldAlpha;
}
else
    n.worldTransform.copyFrom(e.localTransform), n.worldColor = e.localColor, t = e.localAlpha; t = t < 0 ? 0 : t > 1 ? 1 : t, n.worldAlpha = t, n.worldColorAlpha = n.worldColor + ((t * 255 | 0) << 24); }
function Me(n, e, t) { if (e === n.updateTick)
    return; n.updateTick = e, n.didChange = !1; const r = n.localTransform; n.updateLocalTransform(); const s = n.parent; if (s && !s.renderGroup ? (t |= n._updateFlags, n.relativeGroupTransform.appendFrom(r, s.relativeGroupTransform), t & se && ae(n, s, t)) : (t = n._updateFlags, n.relativeGroupTransform.copyFrom(r), t & se && ae(n, ht, t)), !n.renderGroup) {
    const a = n.children, i = a.length;
    for (let d = 0; d < i; d++)
        Me(a[d], e, t);
    const o = n.parentRenderGroup, l = n;
    l.renderPipeId && !o.structureDidChange && o.updateRenderable(l);
} }
function ae(n, e, t) { if (t & Index_5qXXq_Tx_js_1._) {
    n.groupColor = (0, Index_5qXXq_Tx_js_1.Y)(n.localColor, e.groupColor);
    let r = n.localAlpha * e.groupAlpha;
    r = r < 0 ? 0 : r > 1 ? 1 : r, n.groupAlpha = r, n.groupColorAlpha = n.groupColor + ((r * 255 | 0) << 24);
} t & Index_5qXXq_Tx_js_1.$ && (n.groupBlendMode = n.localBlendMode === "inherit" ? e.groupBlendMode : n.localBlendMode), t & Index_5qXXq_Tx_js_1.Z && (n.globalDisplayStatus = n.localDisplayStatus & e.globalDisplayStatus), n._updateFlags = 0; }
function pt(n, e) { const { list: t } = n.childrenRenderablesToUpdate; let r = !1; for (let s = 0; s < n.childrenRenderablesToUpdate.index; s++) {
    const a = t[s];
    if (r = e[a.renderPipeId].validateRenderable(a), r)
        break;
} return n.structureDidChange = r, r; }
const mt = new Index_5qXXq_Tx_js_1.M;
class Se {
    constructor(e) { this._renderer = e; }
    render({ container: e, transform: t }) { const r = e.parent, s = e.renderGroup.renderGroupParent; e.parent = null, e.renderGroup.renderGroupParent = null; const a = this._renderer, i = mt; t && (i.copyFrom(e.renderGroup.localTransform), e.renderGroup.localTransform.copyFrom(t)); const o = a.renderPipes; this._updateCachedRenderGroups(e.renderGroup, null), this._updateRenderGroups(e.renderGroup), a.globalUniforms.start({ worldTransformMatrix: t ? e.renderGroup.localTransform : e.renderGroup.worldTransform, worldColor: e.renderGroup.worldColorAlpha }), E(e.renderGroup, o), o.uniformBatch && o.uniformBatch.renderEnd(), t && e.renderGroup.localTransform.copyFrom(i), e.parent = r, e.renderGroup.renderGroupParent = s; }
    destroy() { this._renderer = null; }
    _updateCachedRenderGroups(e, t) { if (e._parentCacheAsTextureRenderGroup = t, e.isCachedAsTexture) {
        if (!e.textureNeedsUpdate)
            return;
        t = e;
    } for (let r = e.renderGroupChildren.length - 1; r >= 0; r--)
        this._updateCachedRenderGroups(e.renderGroupChildren[r], t); if (e.invalidateMatrices(), e.isCachedAsTexture) {
        if (e.textureNeedsUpdate) {
            const r = e.root.getLocalBounds();
            r.ceil();
            const s = e.texture;
            e.texture && Index_5qXXq_Tx_js_1.K.returnTexture(e.texture, !0);
            const a = this._renderer, i = e.textureOptions.resolution || a.view.resolution, o = e.textureOptions.antialias ?? a.view.antialias, l = e.textureOptions.scaleMode ?? "linear", d = Index_5qXXq_Tx_js_1.K.getOptimalTexture(r.width, r.height, i, o);
            d._source.style = new Index_5qXXq_Tx_js_1.a0({ scaleMode: l }), e.texture = d, e._textureBounds || (e._textureBounds = new Index_5qXXq_Tx_js_1.J), e._textureBounds.copyFrom(r), s !== e.texture && e.renderGroupParent && (e.renderGroupParent.structureDidChange = !0);
        }
    }
    else
        e.texture && (Index_5qXXq_Tx_js_1.K.returnTexture(e.texture, !0), e.texture = null); }
    _updateRenderGroups(e) { const t = this._renderer, r = t.renderPipes; if (e.runOnRender(t), e.instructionSet.renderPipes = r, e.structureDidChange ? O(e.childrenRenderablesToUpdate.list, 0) : pt(e, r), Ce(e), e.structureDidChange ? (e.structureDidChange = !1, this._buildInstructions(e, t)) : this._updateRenderables(e), e.childrenRenderablesToUpdate.index = 0, t.renderPipes.batch.upload(e.instructionSet), !(e.isCachedAsTexture && !e.textureNeedsUpdate))
        for (let s = 0; s < e.renderGroupChildren.length; s++)
            this._updateRenderGroups(e.renderGroupChildren[s]); }
    _updateRenderables(e) { const { list: t, index: r } = e.childrenRenderablesToUpdate; for (let s = 0; s < r; s++) {
        const a = t[s];
        a.didViewUpdate && e.updateRenderable(a);
    } O(t, r); }
    _buildInstructions(e, t) { const r = e.root, s = e.instructionSet; s.reset(); const a = t.renderPipes ? t : t.batch.renderer, i = a.renderPipes; i.batch.buildStart(s), i.blendMode.buildStart(), i.colorMask.buildStart(), r.sortableChildren && r.sortChildren(), r.collectRenderablesWithEffects(s, a, null), i.batch.buildEnd(s), i.blendMode.buildEnd(s); }
}
Se.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "renderGroup" };
class Re {
    constructor(e) { this._renderer = e; }
    addRenderable(e, t) { const r = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, r), this._renderer.renderPipes.batch.addToBatch(r, t); }
    updateRenderable(e) { const t = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t); }
    validateRenderable(e) { const t = this._getGpuSprite(e); return !t._batcher.checkAndUpdateTexture(t, e._texture); }
    _updateBatchableSprite(e, t) { t.bounds = e.visualBounds, t.texture = e._texture; }
    _getGpuSprite(e) { return e._gpuData[this._renderer.uid] || this._initGPUSprite(e); }
    _initGPUSprite(e) { const t = new colorToUniform_3MxHuUz8_js_1.B; return t.renderable = e, t.transform = e.groupTransform, t.texture = e._texture, t.bounds = e.visualBounds, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, t; }
    destroy() { this._renderer = null; }
}
Re.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "sprite" };
const N = class we {
    constructor() { this.clearBeforeRender = !0, this._backgroundColor = new Index_5qXXq_Tx_js_1.a1(0), this.color = this._backgroundColor, this.alpha = 1; }
    init(e) { e = { ...we.defaultOptions, ...e }, this.clearBeforeRender = e.clearBeforeRender, this.color = e.background || e.backgroundColor || this._backgroundColor, this.alpha = e.backgroundAlpha, this._backgroundColor.setAlpha(e.backgroundAlpha); }
    get color() { return this._backgroundColor; }
    set color(e) { Index_5qXXq_Tx_js_1.a1.shared.setValue(e).alpha < 1 && this._backgroundColor.alpha === 1 && (0, Index_5qXXq_Tx_js_1.w)("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."), this._backgroundColor.setValue(e); }
    get alpha() { return this._backgroundColor.alpha; }
    set alpha(e) { this._backgroundColor.setAlpha(e); }
    get colorRgba() { return this._backgroundColor.toArray(); }
    destroy() { }
};
N.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "background", priority: 0 };
N.defaultOptions = { backgroundAlpha: 1, backgroundColor: 0, clearBeforeRender: !0 };
let gt = N;
const T = {};
Index_5qXXq_Tx_js_1.e.handle(Index_5qXXq_Tx_js_1.E.BlendMode, n => { if (!n.name)
    throw new Error("BlendMode extension must have a name property"); T[n.name] = n.ref; }, n => { delete T[n.name]; });
class Pe {
    constructor(e) { this._blendModeStack = [], this._isAdvanced = !1, this._filterHash = Object.create(null), this._renderer = e, this._renderer.runners.prerender.add(this); }
    prerender() { this._activeBlendMode = "normal", this._isAdvanced = !1; }
    pushBlendMode(e, t, r) { this._blendModeStack.push(t), this.setBlendMode(e, t, r); }
    popBlendMode(e) { this._blendModeStack.pop(); const t = this._blendModeStack[this._activeBlendMode.length - 1] ?? "normal"; this.setBlendMode(null, t, e); }
    setBlendMode(e, t, r) { const s = e instanceof Index_5qXXq_Tx_js_1.a2; if (this._activeBlendMode === t) {
        this._isAdvanced && e && !s && this._renderableList?.push(e);
        return;
    } this._isAdvanced && this._endAdvancedBlendMode(r), this._activeBlendMode = t, e && (this._isAdvanced = !!T[t], this._isAdvanced && this._beginAdvancedBlendMode(e, r)); }
    _beginAdvancedBlendMode(e, t) { this._renderer.renderPipes.batch.break(t); const r = this._activeBlendMode; if (!T[r]) {
        (0, Index_5qXXq_Tx_js_1.w)(`Unable to assign BlendMode: '${r}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);
        return;
    } const s = this._ensureFilterEffect(r), a = e instanceof Index_5qXXq_Tx_js_1.a2, i = { renderPipeId: "filter", action: "pushFilter", filterEffect: s, renderables: a ? null : [e], container: a ? e.root : null, canBundle: !1 }; this._renderableList = i.renderables, t.add(i); }
    _ensureFilterEffect(e) { let t = this._filterHash[e]; return t || (t = this._filterHash[e] = new Index_5qXXq_Tx_js_1.L, t.filters = [new T[e]]), t; }
    _endAdvancedBlendMode(e) { this._isAdvanced = !1, this._renderableList = null, this._renderer.renderPipes.batch.break(e), e.add({ renderPipeId: "filter", action: "popFilter", canBundle: !1 }); }
    buildStart() { this._isAdvanced = !1; }
    buildEnd(e) { this._isAdvanced && this._endAdvancedBlendMode(e); }
    destroy() { this._renderer = null, this._renderableList = null; for (const e in this._filterHash)
        this._filterHash[e].destroy(); this._filterHash = null; }
}
Pe.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "blendMode" };
const B = { png: "image/png", jpg: "image/jpeg", webp: "image/webp" }, j = class Ue {
    constructor(e) { this._renderer = e; }
    _normalizeOptions(e, t = {}) { return e instanceof Index_5qXXq_Tx_js_1.C || e instanceof Index_5qXXq_Tx_js_1.t ? { target: e, ...t } : { ...t, ...e }; }
    async image(e) { const t = Index_5qXXq_Tx_js_1.D.get().createImage(); return t.src = await this.base64(e), t; }
    async base64(e) { e = this._normalizeOptions(e, Ue.defaultImageOptions); const { format: t, quality: r } = e, s = this.canvas(e); if (s.toBlob !== void 0)
        return new Promise((a, i) => { s.toBlob(o => { if (!o) {
            i(new Error("ICanvas.toBlob failed!"));
            return;
        } const l = new FileReader; l.onload = () => a(l.result), l.onerror = i, l.readAsDataURL(o); }, B[t], r); }); if (s.toDataURL !== void 0)
        return s.toDataURL(B[t], r); if (s.convertToBlob !== void 0) {
        const a = await s.convertToBlob({ type: B[t], quality: r });
        return new Promise((i, o) => { const l = new FileReader; l.onload = () => i(l.result), l.onerror = o, l.readAsDataURL(a); });
    } throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented"); }
    canvas(e) { e = this._normalizeOptions(e); const t = e.target, r = this._renderer; if (t instanceof Index_5qXXq_Tx_js_1.t)
        return r.texture.generateCanvas(t); const s = r.textureGenerator.generateTexture(e), a = r.texture.generateCanvas(s); return s.destroy(!0), a; }
    pixels(e) { e = this._normalizeOptions(e); const t = e.target, r = this._renderer, s = t instanceof Index_5qXXq_Tx_js_1.t ? t : r.textureGenerator.generateTexture(e), a = r.texture.getPixels(s); return t instanceof Index_5qXXq_Tx_js_1.C && s.destroy(!0), a; }
    texture(e) { return e = this._normalizeOptions(e), e.target instanceof Index_5qXXq_Tx_js_1.t ? e.target : this._renderer.textureGenerator.generateTexture(e); }
    download(e) { e = this._normalizeOptions(e); const t = this.canvas(e), r = document.createElement("a"); r.download = e.filename ?? "image.png", r.href = t.toDataURL("image/png"), document.body.appendChild(r), r.click(), document.body.removeChild(r); }
    log(e) { const t = e.width ?? 200; e = this._normalizeOptions(e); const r = this.canvas(e), s = r.toDataURL(); console.log(`[Pixi Texture] ${r.width}px ${r.height}px`); const a = ["font-size: 1px;", `padding: ${t}px 300px;`, `background: url(${s}) no-repeat;`, "background-size: contain;"].join(" "); console.log("%c ", a); }
    destroy() { this._renderer = null; }
};
j.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "extract" };
j.defaultImageOptions = { format: "png", quality: 1 };
let _t = j;
const vt = new Index_5qXXq_Tx_js_1.W, xt = new Index_5qXXq_Tx_js_1.J, bt = [0, 0, 0, 0];
class Be {
    constructor(e) { this._renderer = e; }
    generateTexture(e) { e instanceof Index_5qXXq_Tx_js_1.C && (e = { target: e, frame: void 0, textureSourceOptions: {}, resolution: void 0 }); const t = e.resolution || this._renderer.resolution, r = e.antialias || this._renderer.view.antialias, s = e.target; let a = e.clearColor; a ? a = Array.isArray(a) && a.length === 4 ? a : Index_5qXXq_Tx_js_1.a1.shared.setValue(a).toArray() : a = bt; const i = e.frame?.copyTo(vt) || (0, Index_5qXXq_Tx_js_1.a3)(s, xt).rectangle; i.width = Math.max(i.width, 1 / t) | 0, i.height = Math.max(i.height, 1 / t) | 0; const o = Index_5qXXq_Tx_js_1.a4.create({ ...e.textureSourceOptions, width: i.width, height: i.height, resolution: t, antialias: r }), l = Index_5qXXq_Tx_js_1.M.shared.translate(-i.x, -i.y); return this._renderer.render({ container: s, transform: l, target: o, clearColor: a }), o.source.updateMipmaps(), o; }
    destroy() { this._renderer = null; }
}
Be.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "textureGenerator" };
const q = class Ge {
    constructor(e) { this._managedResources = [], this._managedResourceHashes = [], this._ready = !1, this._renderer = e; }
    init(e) { e = { ...Ge.defaultOptions, ...e }, this.maxUnusedTime = e.gcMaxUnusedTime, this._frequency = e.gcFrequency, this.enabled = e.gcActive, this.now = performance.now(); }
    get enabled() { return !!this._handler; }
    set enabled(e) { this.enabled !== e && (e ? this._handler = this._renderer.scheduler.repeat(() => { this._ready = !0; }, this._frequency, !1) : (this._renderer.scheduler.cancel(this._handler), this._handler = 0)); }
    prerender({ container: e }) { this.now = performance.now(), e.renderGroup.gcTick = this._renderer.tick++, this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick); }
    postrender() { !this._ready || !this.enabled || (this.run(), this._ready = !1); }
    _updateInstructionGCTick(e, t) { e.instructionSet.gcTick = t; for (const r of e.renderGroupChildren)
        this._updateInstructionGCTick(r, t); }
    addResource(e, t) { if (e._gcLastUsed !== -1) {
        e._gcLastUsed = this.now, e._onTouch?.(this.now);
        return;
    } const r = this._managedResources.length; e._gcData = { index: r, type: t }, e._gcLastUsed = this.now, e._onTouch?.(this.now), e.once("unload", this.removeResource, this), this._managedResources.push(e); }
    removeResource(e) { const t = e._gcData; if (!t)
        return; const r = t.index, s = this._managedResources.length - 1; if (r !== s) {
        const a = this._managedResources[s];
        this._managedResources[r] = a, a._gcData.index = r;
    } this._managedResources.length--, e._gcData = null, e._gcLastUsed = -1; }
    addResourceHash(e, t, r, s = 0) { this._managedResourceHashes.push({ context: e, hash: t, type: r, priority: s }), this._managedResourceHashes.sort((a, i) => a.priority - i.priority); }
    run() { const e = performance.now(), t = this._managedResourceHashes; for (const s of t)
        this.runOnHash(s, e); let r = 0; for (let s = 0; s < this._managedResources.length; s++) {
        const a = this._managedResources[s];
        r = this.runOnResource(a, e, r);
    } this._managedResources.length = r; }
    updateRenderableGCTick(e, t) { const r = e.renderGroup ?? e.parentRenderGroup, s = r?.instructionSet?.gcTick ?? -1; (r?.gcTick ?? 0) === s && (e._gcLastUsed = t, e._onTouch?.(t)); }
    runOnResource(e, t, r) { const s = e._gcData; return s.type === "renderable" && this.updateRenderableGCTick(e, t), t - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect ? (this._managedResources[r] = e, s.index = r, r++) : (e.unload(), e._gcData = null, e._gcLastUsed = -1, e.off("unload", this.removeResource, this)), r; }
    _createHashClone(e, t) { const r = Object.create(null); for (const s in e) {
        if (s === t)
            break;
        e[s] !== null && (r[s] = e[s]);
    } return r; }
    runOnHash(e, t) { const { context: r, hash: s, type: a } = e, i = r[s]; let o = null, l = 0; for (const d in i) {
        const c = i[d];
        if (c === null) {
            l++, l === 1e4 && !o && (o = this._createHashClone(i, d));
            continue;
        }
        if (c._gcLastUsed === -1) {
            c._gcLastUsed = t, c._onTouch?.(t), o && (o[d] = c);
            continue;
        }
        a === "renderable" && this.updateRenderableGCTick(c, t), !(t - c._gcLastUsed < this.maxUnusedTime) && c.autoGarbageCollect ? (o || (l + 1 !== 1e4 ? (i[d] = null, l++) : o = this._createHashClone(i, d)), c.unload(), c._gcData = null, c._gcLastUsed = -1) : o && (o[d] = c);
    } o && (r[s] = o); }
    destroy() { this.enabled = !1, this._managedResources.forEach(e => { e.off("unload", this.removeResource, this); }), this._managedResources.length = 0, this._managedResourceHashes.length = 0, this._renderer = null; }
};
q.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "gc", priority: 0 };
q.defaultOptions = { gcActive: !0, gcMaxUnusedTime: 6e4, gcFrequency: 3e4 };
let yt = q;
class Ae {
    constructor(e) { this._stackIndex = 0, this._globalUniformDataStack = [], this._uniformsPool = [], this._activeUniforms = [], this._bindGroupPool = [], this._activeBindGroups = [], this._renderer = e; }
    reset() { this._stackIndex = 0; for (let e = 0; e < this._activeUniforms.length; e++)
        this._uniformsPool.push(this._activeUniforms[e]); for (let e = 0; e < this._activeBindGroups.length; e++)
        this._bindGroupPool.push(this._activeBindGroups[e]); this._activeUniforms.length = 0, this._activeBindGroups.length = 0; }
    start(e) { this.reset(), this.push(e); }
    bind({ size: e, projectionMatrix: t, worldTransformMatrix: r, worldColor: s, offset: a }) { const i = this._renderer.renderTarget.renderTarget, o = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : { worldTransformMatrix: new Index_5qXXq_Tx_js_1.M, worldColor: 4294967295, offset: new Index_5qXXq_Tx_js_1.P }, l = { projectionMatrix: t || this._renderer.renderTarget.projectionMatrix, resolution: e || i.size, worldTransformMatrix: r || o.worldTransformMatrix, worldColor: s || o.worldColor, offset: a || o.offset, bindGroup: null }, d = this._uniformsPool.pop() || this._createUniforms(); this._activeUniforms.push(d); const c = d.uniforms; c.uProjectionMatrix = l.projectionMatrix, c.uResolution = l.resolution, c.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix), c.uWorldTransformMatrix.tx -= l.offset.x, c.uWorldTransformMatrix.ty -= l.offset.y, (0, colorToUniform_3MxHuUz8_js_1.c)(l.worldColor, c.uWorldColorAlpha, 0), d.update(); let h; this._renderer.renderPipes.uniformBatch ? h = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d, !1) : (h = this._bindGroupPool.pop() || new Index_5qXXq_Tx_js_1.d, this._activeBindGroups.push(h), h.setResource(d, 0)), l.bindGroup = h, this._currentGlobalUniformData = l; }
    push(e) { this.bind(e), this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData; }
    pop() { this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1], this._renderer.type === Index_5qXXq_Tx_js_1.R.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update(); }
    get bindGroup() { return this._currentGlobalUniformData.bindGroup; }
    get globalUniformData() { return this._currentGlobalUniformData; }
    get uniformGroup() { return this._currentGlobalUniformData.bindGroup.resources[0]; }
    _createUniforms() { return new Index_5qXXq_Tx_js_1.l({ uProjectionMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uWorldTransformMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uWorldColorAlpha: { value: new Float32Array(4), type: "vec4<f32>" }, uResolution: { value: [0, 0], type: "vec2<f32>" } }, { isStatic: !0 }); }
    destroy() { this._renderer = null, this._globalUniformDataStack.length = 0, this._uniformsPool.length = 0, this._activeUniforms.length = 0, this._bindGroupPool.length = 0, this._activeBindGroups.length = 0, this._currentGlobalUniformData = null; }
}
Ae.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "globalUniforms" };
let Tt = 1;
class Ie {
    constructor() { this._tasks = [], this._offset = 0; }
    init() { Index_5qXXq_Tx_js_1.T.system.add(this._update, this); }
    repeat(e, t, r = !0) { const s = Tt++; let a = 0; return r && (this._offset += 1e3, a = this._offset), this._tasks.push({ func: e, duration: t, start: performance.now(), offset: a, last: performance.now(), repeat: !0, id: s }), s; }
    cancel(e) { for (let t = 0; t < this._tasks.length; t++)
        if (this._tasks[t].id === e) {
            this._tasks.splice(t, 1);
            return;
        } }
    _update() { const e = performance.now(); for (let t = 0; t < this._tasks.length; t++) {
        const r = this._tasks[t];
        if (e - r.offset - r.last >= r.duration) {
            const s = e - r.start;
            r.func(s), r.last = e;
        }
    } }
    destroy() { Index_5qXXq_Tx_js_1.T.system.remove(this._update, this), this._tasks.length = 0; }
}
Ie.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "scheduler", priority: 0 };
let ne = !1;
function kt(n) {
    if (!ne) {
        if (Index_5qXXq_Tx_js_1.D.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
            const e = [`%c  %c  %c  %c  %c PixiJS %c v${Index_5qXXq_Tx_js_1.a5} (${n}) http://www.pixijs.com/

`, "background: #E72264; padding:5px 0;", "background: #6CA2EA; padding:5px 0;", "background: #B5D33D; padding:5px 0;", "background: #FED23F; padding:5px 0;", "color: #FFFFFF; background: #E72264; padding:5px 0;", "color: #E72264; background: #FFFFFF; padding:5px 0;"];
            globalThis.console.log(...e);
        }
        else
            globalThis.console && globalThis.console.log(`PixiJS ${Index_5qXXq_Tx_js_1.a5} - ${n} - http://www.pixijs.com/`);
        ne = !0;
    }
}
class $ {
    constructor(e) { this._renderer = e; }
    init(e) { if (e.hello) {
        let t = this._renderer.name;
        this._renderer.type === Index_5qXXq_Tx_js_1.R.WEBGL && (t += ` ${this._renderer.context.webGLVersion}`), kt(t);
    } }
}
$.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "hello", priority: -2 };
$.defaultOptions = { hello: !1 };
function Ct(n) { let e = !1; for (const r in n)
    if (n[r] == null) {
        e = !0;
        break;
    } if (!e)
    return n; const t = Object.create(null); for (const r in n) {
    const s = n[r];
    s && (t[r] = s);
} return t; }
function Mt(n) { let e = 0; for (let t = 0; t < n.length; t++)
    n[t] == null ? e++ : n[t - e] = n[t]; return n.length -= e, n; }
let St = 0;
const K = class De {
    constructor(e) { this._managedRenderables = [], this._managedHashes = [], this._managedArrays = [], this._renderer = e; }
    init(e) { e = { ...De.defaultOptions, ...e }, this.maxUnusedTime = e.renderableGCMaxUnusedTime, this._frequency = e.renderableGCFrequency, this.enabled = e.renderableGCActive; }
    get enabled() { return !!this._handler; }
    set enabled(e) { this.enabled !== e && (e ? (this._handler = this._renderer.scheduler.repeat(() => this.run(), this._frequency, !1), this._hashHandler = this._renderer.scheduler.repeat(() => { for (const t of this._managedHashes)
        t.context[t.hash] = Ct(t.context[t.hash]); }, this._frequency), this._arrayHandler = this._renderer.scheduler.repeat(() => { for (const t of this._managedArrays)
        Mt(t.context[t.hash]); }, this._frequency)) : (this._renderer.scheduler.cancel(this._handler), this._renderer.scheduler.cancel(this._hashHandler), this._renderer.scheduler.cancel(this._arrayHandler))); }
    addManagedHash(e, t) { this._managedHashes.push({ context: e, hash: t }); }
    addManagedArray(e, t) { this._managedArrays.push({ context: e, hash: t }); }
    prerender({ container: e }) { this._now = performance.now(), e.renderGroup.gcTick = St++, this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick); }
    addRenderable(e) { this.enabled && (e._lastUsed === -1 && (this._managedRenderables.push(e), e.once("destroyed", this._removeRenderable, this)), e._lastUsed = this._now); }
    run() { const e = this._now, t = this._managedRenderables, r = this._renderer.renderPipes; let s = 0; for (let a = 0; a < t.length; a++) {
        const i = t[a];
        if (i === null) {
            s++;
            continue;
        }
        const o = i.renderGroup ?? i.parentRenderGroup, l = o?.instructionSet?.gcTick ?? -1;
        if ((o?.gcTick ?? 0) === l && (i._lastUsed = e), e - i._lastUsed > this.maxUnusedTime) {
            if (!i.destroyed) {
                const d = r;
                o && (o.structureDidChange = !0), d[i.renderPipeId].destroyRenderable(i);
            }
            i._lastUsed = -1, s++, i.off("destroyed", this._removeRenderable, this);
        }
        else
            t[a - s] = i;
    } t.length -= s; }
    destroy() { this.enabled = !1, this._renderer = null, this._managedRenderables.length = 0, this._managedHashes.length = 0, this._managedArrays.length = 0; }
    _removeRenderable(e) { const t = this._managedRenderables.indexOf(e); t >= 0 && (e.off("destroyed", this._removeRenderable, this), this._managedRenderables[t] = null); }
    _updateInstructionGCTick(e, t) { e.instructionSet.gcTick = t; for (const r of e.renderGroupChildren)
        this._updateInstructionGCTick(r, t); }
};
K.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "renderableGC", priority: 0 };
K.defaultOptions = { renderableGCActive: !0, renderableGCMaxUnusedTime: 6e4, renderableGCFrequency: 3e4 };
let Rt = K;
const Y = class R {
    get count() { return this._renderer.tick; }
    get checkCount() { return this._checkCount; }
    set checkCount(e) { (0, Index_5qXXq_Tx_js_1.a6)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._checkCount = e; }
    get maxIdle() { return this._renderer.gc.maxUnusedTime / 1e3 * 60; }
    set maxIdle(e) { (0, Index_5qXXq_Tx_js_1.a6)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.maxUnusedTime = e / 60 * 1e3; }
    get checkCountMax() { return Math.floor(this._renderer.gc._frequency / 1e3); }
    set checkCountMax(e) { (0, Index_5qXXq_Tx_js_1.a6)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."); }
    get active() { return this._renderer.gc.enabled; }
    set active(e) { (0, Index_5qXXq_Tx_js_1.a6)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.enabled = e; }
    constructor(e) { this._renderer = e, this._checkCount = 0; }
    init(e) { e.textureGCActive !== R.defaultOptions.textureGCActive && (this.active = e.textureGCActive), e.textureGCMaxIdle !== R.defaultOptions.textureGCMaxIdle && (this.maxIdle = e.textureGCMaxIdle), e.textureGCCheckCountMax !== R.defaultOptions.textureGCCheckCountMax && (this.checkCountMax = e.textureGCCheckCountMax); }
    run() { (0, Index_5qXXq_Tx_js_1.a6)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run(); }
    destroy() { this._renderer = null; }
};
Y.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "textureGC" };
Y.defaultOptions = { textureGCActive: !0, textureGCAMaxIdle: null, textureGCMaxIdle: 3600, textureGCCheckCountMax: 600 };
let wt = Y;
const J = class Ee {
    get autoDensity() { return this.texture.source.autoDensity; }
    set autoDensity(e) { this.texture.source.autoDensity = e; }
    get resolution() { return this.texture.source._resolution; }
    set resolution(e) { this.texture.source.resize(this.texture.source.width, this.texture.source.height, e); }
    init(e) { e = { ...Ee.defaultOptions, ...e }, e.view && ((0, Index_5qXXq_Tx_js_1.a6)(Index_5qXXq_Tx_js_1.a7, "ViewSystem.view has been renamed to ViewSystem.canvas"), e.canvas = e.view), this.screen = new Index_5qXXq_Tx_js_1.W(0, 0, e.width, e.height), this.canvas = e.canvas || Index_5qXXq_Tx_js_1.D.get().createCanvas(), this.antialias = !!e.antialias, this.texture = xe(this.canvas, e), this.renderTarget = new D({ colorTextures: [this.texture], depth: !!e.depth, isRoot: !0 }), this.texture.source.transparent = e.backgroundAlpha < 1, this.resolution = e.resolution; }
    resize(e, t, r) { this.texture.source.resize(e, t, r), this.screen.width = this.texture.frame.width, this.screen.height = this.texture.frame.height; }
    destroy(e = !1) { (typeof e == "boolean" ? e : e?.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.texture.destroy(); }
};
J.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "view", priority: 0 };
J.defaultOptions = { width: 800, height: 600, autoDensity: !1, antialias: !1 };
let Pt = J;
const Wt = [gt, Ae, $, Pt, Se, yt, wt, Be, _t, Index_5qXXq_Tx_js_1.a8, Rt, Ie], zt = [Pe, me, Re, ke, ge, ve, _e, Te];
exports.S = Wt;
exports.a = zt;

},
"./WebGLRenderer-C8BrupKw.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebGLRenderer = void 0;
const Index_5qXXq_Tx_js_1 = require("./Index-5qXXq-Tx.js");
const colorToUniform_3MxHuUz8_js_1 = require("./colorToUniform-3MxHuUz8.js");
const SharedSystems_tBvOkzj9_js_1 = require("./SharedSystems-tBvOkzj9.js");
class J {
    constructor() { this._tempState = Index_5qXXq_Tx_js_1.S.for2d(), this._didUploadHash = {}; }
    init(e) { e.renderer.runners.contextChange.add(this); }
    contextChange() { this._didUploadHash = {}; }
    start(e, r, s) { const n = e.renderer, i = this._didUploadHash[s.uid]; n.shader.bind(s, i), i || (this._didUploadHash[s.uid] = !0), n.shader.updateUniformGroup(n.globalUniforms.uniformGroup), n.geometry.bind(r, s.glProgram); }
    execute(e, r) { const s = e.renderer; this._tempState.blendMode = r.blendMode, s.state.set(this._tempState); const n = r.textures.textures; for (let i = 0; i < r.textures.count; i++)
        s.texture.bind(n[i], i); s.geometry.draw(r.topology, r.size, r.start); }
}
J.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipesAdaptor], name: "batch" };
var x = (t => (t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", t))(x || {});
class Ve {
    constructor(e, r) { this._lastBindBaseLocation = -1, this._lastBindCallId = -1, this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.type = r; }
    destroy() { this.buffer = null, this.updateID = -1, this.byteLength = -1, this.type = -1, this._lastBindBaseLocation = -1, this._lastBindCallId = -1; }
}
class ee {
    constructor(e) { this._boundBufferBases = Object.create(null), this._minBaseLocation = 0, this._nextBindBaseIndex = this._minBaseLocation, this._bindCallId = 0, this._renderer = e, this._managedBuffers = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "resource", onUnload: this.onBufferUnload.bind(this), name: "glBuffer" }); }
    destroy() { this._managedBuffers.destroy(), this._renderer = null, this._gl = null, this._boundBufferBases = {}; }
    contextChange() { this._gl = this._renderer.gl, this.destroyAll(!0), this._maxBindings = this._renderer.limits.maxUniformBindings; }
    getGlBuffer(e) { return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this.createGLBuffer(e); }
    bind(e) { const { _gl: r } = this, s = this.getGlBuffer(e); r.bindBuffer(s.type, s.buffer); }
    bindBufferBase(e, r) { const { _gl: s } = this; this._boundBufferBases[r] !== e && (this._boundBufferBases[r] = e, e._lastBindBaseLocation = r, s.bindBufferBase(s.UNIFORM_BUFFER, r, e.buffer)); }
    nextBindBase(e) { this._bindCallId++, this._minBaseLocation = 0, e && (this._boundBufferBases[0] = null, this._minBaseLocation = 1, this._nextBindBaseIndex < 1 && (this._nextBindBaseIndex = 1)); }
    freeLocationForBufferBase(e) { let r = this.getLastBindBaseLocation(e); if (r >= this._minBaseLocation)
        return e._lastBindCallId = this._bindCallId, r; let s = 0, n = this._nextBindBaseIndex; for (; s < 2;) {
        n >= this._maxBindings && (n = this._minBaseLocation, s++);
        const i = this._boundBufferBases[n];
        if (i && i._lastBindCallId === this._bindCallId) {
            n++;
            continue;
        }
        break;
    } return r = n, this._nextBindBaseIndex = n + 1, s >= 2 ? -1 : (e._lastBindCallId = this._bindCallId, this._boundBufferBases[r] = null, r); }
    getLastBindBaseLocation(e) { const r = e._lastBindBaseLocation; return this._boundBufferBases[r] === e ? r : -1; }
    bindBufferRange(e, r, s, n) { const { _gl: i } = this; s || (s = 0), r || (r = 0), this._boundBufferBases[r] = null, i.bindBufferRange(i.UNIFORM_BUFFER, r || 0, e.buffer, s * 256, n || 256); }
    updateBuffer(e) { const { _gl: r } = this, s = this.getGlBuffer(e); if (e._updateID === s.updateID)
        return s; s.updateID = e._updateID, r.bindBuffer(s.type, s.buffer); const n = e.data, i = e.descriptor.usage & Index_5qXXq_Tx_js_1.B.STATIC ? r.STATIC_DRAW : r.DYNAMIC_DRAW; return n ? s.byteLength >= n.byteLength ? r.bufferSubData(s.type, 0, n, 0, e._updateSize / n.BYTES_PER_ELEMENT) : (s.byteLength = n.byteLength, r.bufferData(s.type, n, i)) : (s.byteLength = e.descriptor.size, r.bufferData(s.type, s.byteLength, i)), s; }
    destroyAll(e = !1) { this._managedBuffers.removeAll(e); }
    onBufferUnload(e, r = !1) { const s = e._gpuData[this._renderer.uid]; s && (r || this._gl.deleteBuffer(s.buffer)); }
    createGLBuffer(e) { const { _gl: r } = this; let s = x.ARRAY_BUFFER; e.descriptor.usage & Index_5qXXq_Tx_js_1.B.INDEX ? s = x.ELEMENT_ARRAY_BUFFER : e.descriptor.usage & Index_5qXXq_Tx_js_1.B.UNIFORM && (s = x.UNIFORM_BUFFER); const n = new Ve(r.createBuffer(), s); return e._gpuData[this._renderer.uid] = n, this._managedBuffers.add(e), n; }
    resetState() { this._boundBufferBases = Object.create(null); }
}
ee.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "buffer" };
const P = class te {
    constructor(e) { this.supports = { uint32Indices: !0, uniformBufferObject: !0, vertexArrayObject: !0, srgbTextures: !0, nonPowOf2wrapping: !0, msaa: !0, nonPowOf2mipmaps: !0 }, this._renderer = e, this.extensions = Object.create(null), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this); }
    get isLost() { return !this.gl || this.gl.isContextLost(); }
    contextChange(e) { this.gl = e, this._renderer.gl = e; }
    init(e) { e = { ...te.defaultOptions, ...e }; let r = this.multiView = e.multiView; if (e.context && r && ((0, Index_5qXXq_Tx_js_1.w)("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."), r = !1), r ? this.canvas = Index_5qXXq_Tx_js_1.D.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height) : this.canvas = this._renderer.view.canvas, e.context)
        this.initFromContext(e.context);
    else {
        const s = this._renderer.background.alpha < 1, n = e.premultipliedAlpha ?? !0, i = e.antialias && !this._renderer.backBuffer.useBackBuffer;
        this.createContext(e.preferWebGLVersion, { alpha: s, premultipliedAlpha: n, antialias: i, stencil: !0, preserveDrawingBuffer: e.preserveDrawingBuffer, powerPreference: e.powerPreference ?? "default" });
    } }
    ensureCanvasSize(e) { if (!this.multiView) {
        e !== this.canvas && (0, Index_5qXXq_Tx_js_1.w)("multiView is disabled, but targetCanvas is not the main canvas");
        return;
    } const { canvas: r } = this; (r.width < e.width || r.height < e.height) && (r.width = Math.max(e.width, e.width), r.height = Math.max(e.height, e.height)); }
    initFromContext(e) { this.gl = e, this.webGLVersion = e instanceof Index_5qXXq_Tx_js_1.D.get().getWebGLRenderingContext() ? 1 : 2, this.getExtensions(), this.validateContext(e), this._renderer.runners.contextChange.emit(e); const r = this._renderer.view.canvas; r.addEventListener("webglcontextlost", this.handleContextLost, !1), r.addEventListener("webglcontextrestored", this.handleContextRestored, !1); }
    createContext(e, r) { let s; const n = this.canvas; if (e === 2 && (s = n.getContext("webgl2", r)), !s && (s = n.getContext("webgl", r), !s))
        throw new Error("This browser does not support WebGL. Try using the canvas renderer"); this.gl = s, this.initFromContext(this.gl); }
    getExtensions() { const { gl: e } = this, r = { anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"), etc: e.getExtension("WEBGL_compressed_texture_etc"), etc1: e.getExtension("WEBGL_compressed_texture_etc1"), pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), atc: e.getExtension("WEBGL_compressed_texture_atc"), astc: e.getExtension("WEBGL_compressed_texture_astc"), bptc: e.getExtension("EXT_texture_compression_bptc"), rgtc: e.getExtension("EXT_texture_compression_rgtc"), loseContext: e.getExtension("WEBGL_lose_context") }; if (this.webGLVersion === 1)
        this.extensions = { ...r, drawBuffers: e.getExtension("WEBGL_draw_buffers"), depthTexture: e.getExtension("WEBGL_depth_texture"), vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"), uint32ElementIndex: e.getExtension("OES_element_index_uint"), floatTexture: e.getExtension("OES_texture_float"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), textureHalfFloat: e.getExtension("OES_texture_half_float"), textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear"), vertexAttribDivisorANGLE: e.getExtension("ANGLE_instanced_arrays"), srgb: e.getExtension("EXT_sRGB") };
    else {
        this.extensions = { ...r, colorBufferFloat: e.getExtension("EXT_color_buffer_float") };
        const s = e.getExtension("WEBGL_provoking_vertex");
        s && s.provokingVertexWEBGL(s.FIRST_VERTEX_CONVENTION_WEBGL);
    } }
    handleContextLost(e) { e.preventDefault(), this._contextLossForced && (this._contextLossForced = !1, setTimeout(() => { this.gl.isContextLost() && this.extensions.loseContext?.restoreContext(); }, 0)); }
    handleContextRestored() { this.getExtensions(), this._renderer.runners.contextChange.emit(this.gl); }
    destroy() { const e = this._renderer.view.canvas; this._renderer = null, e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext?.loseContext(); }
    forceContextLoss() { this.extensions.loseContext?.loseContext(), this._contextLossForced = !0; }
    validateContext(e) { const r = e.getContextAttributes(); r && !r.stencil && (0, Index_5qXXq_Tx_js_1.w)("Provided WebGL context does not have a stencil buffer, masks may not render correctly"); const s = this.supports, n = this.webGLVersion === 2, i = this.extensions; s.uint32Indices = n || !!i.uint32ElementIndex, s.uniformBufferObject = n, s.vertexArrayObject = n || !!i.vertexArrayObject, s.srgbTextures = n || !!i.srgb, s.nonPowOf2wrapping = n, s.nonPowOf2mipmaps = n, s.msaa = n, s.uint32Indices || (0, Index_5qXXq_Tx_js_1.w)("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly"); }
};
P.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "context" };
P.defaultOptions = { context: null, premultipliedAlpha: !0, preserveDrawingBuffer: !1, powerPreference: void 0, preferWebGLVersion: 2, multiView: !1 };
let Xe = P;
var D = (t => (t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", t))(D || {}), re = (t => (t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", t))(re || {}), f = (t => (t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT", t))(f || {});
const H = { uint8x2: f.UNSIGNED_BYTE, uint8x4: f.UNSIGNED_BYTE, sint8x2: f.BYTE, sint8x4: f.BYTE, unorm8x2: f.UNSIGNED_BYTE, unorm8x4: f.UNSIGNED_BYTE, snorm8x2: f.BYTE, snorm8x4: f.BYTE, uint16x2: f.UNSIGNED_SHORT, uint16x4: f.UNSIGNED_SHORT, sint16x2: f.SHORT, sint16x4: f.SHORT, unorm16x2: f.UNSIGNED_SHORT, unorm16x4: f.UNSIGNED_SHORT, snorm16x2: f.SHORT, snorm16x4: f.SHORT, float16x2: f.HALF_FLOAT, float16x4: f.HALF_FLOAT, float32: f.FLOAT, float32x2: f.FLOAT, float32x3: f.FLOAT, float32x4: f.FLOAT, uint32: f.UNSIGNED_INT, uint32x2: f.UNSIGNED_INT, uint32x3: f.UNSIGNED_INT, uint32x4: f.UNSIGNED_INT, sint32: f.INT, sint32x2: f.INT, sint32x3: f.INT, sint32x4: f.INT };
function We(t) { return H[t] ?? H.float32; }
const je = { "point-list": 0, "line-list": 1, "line-strip": 3, "triangle-list": 4, "triangle-strip": 5 };
class Ke {
    constructor() { this.vaoCache = Object.create(null); }
    destroy() { this.vaoCache = Object.create(null); }
}
class se {
    constructor(e) { this._renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this._managedGeometries = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "resource", onUnload: this.onGeometryUnload.bind(this), name: "glGeometry" }); }
    contextChange() { const e = this.gl = this._renderer.gl; if (!this._renderer.context.supports.vertexArrayObject)
        throw new Error("[PixiJS] Vertex Array Objects are not supported on this device"); this.destroyAll(!0); const r = this._renderer.context.extensions.vertexArrayObject; r && (e.createVertexArray = () => r.createVertexArrayOES(), e.bindVertexArray = n => r.bindVertexArrayOES(n), e.deleteVertexArray = n => r.deleteVertexArrayOES(n)); const s = this._renderer.context.extensions.vertexAttribDivisorANGLE; s && (e.drawArraysInstanced = (n, i, a, o) => { s.drawArraysInstancedANGLE(n, i, a, o); }, e.drawElementsInstanced = (n, i, a, o, c) => { s.drawElementsInstancedANGLE(n, i, a, o, c); }, e.vertexAttribDivisor = (n, i) => s.vertexAttribDivisorANGLE(n, i)), this._activeGeometry = null, this._activeVao = null; }
    bind(e, r) { const s = this.gl; this._activeGeometry = e; const n = this.getVao(e, r); this._activeVao !== n && (this._activeVao = n, s.bindVertexArray(n)), this.updateBuffers(); }
    resetState() { this.unbind(); }
    updateBuffers() { const e = this._activeGeometry, r = this._renderer.buffer; for (let s = 0; s < e.buffers.length; s++) {
        const n = e.buffers[s];
        r.updateBuffer(n);
    } e._gcLastUsed = this._renderer.gc.now; }
    checkCompatibility(e, r) { const s = e.attributes, n = r._attributeData; for (const i in n)
        if (!s[i])
            throw new Error(`shader and geometry incompatible, geometry missing the "${i}" attribute`); }
    getSignature(e, r) { const s = e.attributes, n = r._attributeData, i = ["g", e.uid]; for (const a in s)
        n[a] && i.push(a, n[a].location); return i.join("-"); }
    getVao(e, r) { return e._gpuData[this._renderer.uid]?.vaoCache[r._key] || this.initGeometryVao(e, r); }
    initGeometryVao(e, r, s = !0) { const n = this._renderer.gl, i = this._renderer.buffer; this._renderer.shader._getProgramData(r), this.checkCompatibility(e, r); const a = this.getSignature(e, r), o = new Ke; e._gpuData[this._renderer.uid] = o, this._managedGeometries.add(e); const c = o.vaoCache; let u = c[a]; if (u)
        return c[r._key] = u, u; (0, SharedSystems_tBvOkzj9_js_1.e)(e, r._attributeData); const _ = e.buffers; u = n.createVertexArray(), n.bindVertexArray(u); for (let h = 0; h < _.length; h++) {
        const l = _[h];
        i.bind(l);
    } return this.activateVao(e, r), c[r._key] = u, c[a] = u, n.bindVertexArray(null), u; }
    onGeometryUnload(e, r = !1) { const s = e._gpuData[this._renderer.uid]; if (!s)
        return; const n = s.vaoCache; if (!r)
        for (const i in n)
            this._activeVao !== n[i] && this.resetState(), this.gl.deleteVertexArray(n[i]); }
    destroyAll(e = !1) { this._managedGeometries.removeAll(e); }
    activateVao(e, r) { const s = this._renderer.gl, n = this._renderer.buffer, i = e.attributes; e.indexBuffer && n.bind(e.indexBuffer); let a = null; for (const o in i) {
        const c = i[o], u = c.buffer, _ = n.getGlBuffer(u), h = r._attributeData[o];
        if (h) {
            a !== _ && (n.bind(u), a = _);
            const l = h.location;
            s.enableVertexAttribArray(l);
            const E = (0, Index_5qXXq_Tx_js_1.O)(c.format), L = We(c.format);
            if (h.format?.substring(1, 4) === "int" ? s.vertexAttribIPointer(l, E.size, L, c.stride, c.offset) : s.vertexAttribPointer(l, E.size, L, E.normalised, c.stride, c.offset), c.instance)
                if (this.hasInstance) {
                    const Te = c.divisor ?? 1;
                    s.vertexAttribDivisor(l, Te);
                }
                else
                    throw new Error("geometry error, GPU Instancing is not supported on this device");
        }
    } }
    draw(e, r, s, n) { const { gl: i } = this._renderer, a = this._activeGeometry, o = je[e || a.topology]; if (n ?? (n = a.instanceCount), a.indexBuffer) {
        const c = a.indexBuffer.data.BYTES_PER_ELEMENT, u = c === 2 ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
        n !== 1 ? i.drawElementsInstanced(o, r || a.indexBuffer.data.length, u, (s || 0) * c, n) : i.drawElements(o, r || a.indexBuffer.data.length, u, (s || 0) * c);
    }
    else
        n !== 1 ? i.drawArraysInstanced(o, s || 0, r || a.getSize(), n) : i.drawArrays(o, s || 0, r || a.getSize()); return this; }
    unbind() { this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null; }
    destroy() { this._managedGeometries.destroy(), this._renderer = null, this.gl = null, this._activeVao = null, this._activeGeometry = null; }
}
se.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "geometry" };
const $e = new Index_5qXXq_Tx_js_1.a9({ attributes: { aPosition: [-1, -1, 3, -1, -1, 3] } }), M = class ne {
    constructor(e) { this.useBackBuffer = !1, this._useBackBufferThisRender = !1, this._renderer = e; }
    init(e = {}) {
        const { useBackBuffer: r, antialias: s } = { ...ne.defaultOptions, ...e };
        this.useBackBuffer = r, this._antialias = s, this._renderer.context.supports.msaa || ((0, Index_5qXXq_Tx_js_1.w)("antialiasing, is not supported on when using the back buffer"), this._antialias = !1), this._state = Index_5qXXq_Tx_js_1.S.for2d();
        const n = new Index_5qXXq_Tx_js_1.y({ vertex: `
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`, fragment: `
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`, name: "big-triangle" });
        this._bigTriangleShader = new Index_5qXXq_Tx_js_1.s({ glProgram: n, resources: { uTexture: Index_5qXXq_Tx_js_1.t.WHITE.source } });
    }
    renderStart(e) { const r = this._renderer.renderTarget.getRenderTarget(e.target); if (this._useBackBufferThisRender = this.useBackBuffer && !!r.isRoot, this._useBackBufferThisRender) {
        const s = this._renderer.renderTarget.getRenderTarget(e.target);
        this._targetTexture = s.colorTexture, e.target = this._getBackBufferTexture(s.colorTexture);
    } }
    renderEnd() { this._presentBackBuffer(); }
    _presentBackBuffer() { const e = this._renderer; e.renderTarget.finishRenderPass(), this._useBackBufferThisRender && (e.renderTarget.bind(this._targetTexture, !1), this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source, e.encoder.draw({ geometry: $e, shader: this._bigTriangleShader, state: this._state })); }
    _getBackBufferTexture(e) { return this._backBufferTexture = this._backBufferTexture || new Index_5qXXq_Tx_js_1.t({ source: new Index_5qXXq_Tx_js_1.k({ width: e.width, height: e.height, resolution: e._resolution, antialias: this._antialias }) }), this._backBufferTexture.source.resize(e.width, e.height, e._resolution), this._backBufferTexture; }
    destroy() { this._backBufferTexture && (this._backBufferTexture.destroy(), this._backBufferTexture = null); }
};
M.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "backBuffer", priority: 1 };
M.defaultOptions = { useBackBuffer: !1 };
let ze = M;
class ie {
    constructor(e) { this._colorMaskCache = 15, this._renderer = e; }
    setMask(e) { this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.gl.colorMask(!!(e & 8), !!(e & 4), !!(e & 2), !!(e & 1))); }
}
ie.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "colorMask" };
class ae {
    constructor(e) { this.commandFinished = Promise.resolve(), this._renderer = e; }
    setGeometry(e, r) { this._renderer.geometry.bind(e, r.glProgram); }
    finishRenderPass() { }
    draw(e) { const r = this._renderer, { geometry: s, shader: n, state: i, skipSync: a, topology: o, size: c, start: u, instanceCount: _ } = e; r.shader.bind(n, a), r.geometry.bind(s, r.shader._activeProgram), i && r.state.set(i), r.geometry.draw(o, c, u, _ ?? s.instanceCount); }
    destroy() { this._renderer = null; }
}
ae.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "encoder" };
class oe {
    constructor(e) { this._renderer = e; }
    contextChange() { const e = this._renderer.gl; this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxBatchableTextures = (0, Index_5qXXq_Tx_js_1.aa)(this.maxTextures, e); const r = this._renderer.context.webGLVersion === 2; this.maxUniformBindings = r ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0; }
    destroy() { }
}
oe.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "limits" };
class Ye {
    constructor() { this.width = -1, this.height = -1, this.msaa = !1, this.msaaRenderBuffer = []; }
}
class ce {
    constructor(e) { this._stencilCache = { enabled: !1, stencilReference: 0, stencilMode: Index_5qXXq_Tx_js_1.b.NONE }, this._renderTargetStencilState = Object.create(null), e.renderTarget.onRenderTargetChange.add(this); }
    contextChange(e) { this._gl = e, this._comparisonFuncMapping = { always: e.ALWAYS, never: e.NEVER, equal: e.EQUAL, "not-equal": e.NOTEQUAL, less: e.LESS, "less-equal": e.LEQUAL, greater: e.GREATER, "greater-equal": e.GEQUAL }, this._stencilOpsMapping = { keep: e.KEEP, zero: e.ZERO, replace: e.REPLACE, invert: e.INVERT, "increment-clamp": e.INCR, "decrement-clamp": e.DECR, "increment-wrap": e.INCR_WRAP, "decrement-wrap": e.DECR_WRAP }, this.resetState(); }
    onRenderTargetChange(e) { if (this._activeRenderTarget === e)
        return; this._activeRenderTarget = e; let r = this._renderTargetStencilState[e.uid]; r || (r = this._renderTargetStencilState[e.uid] = { stencilMode: Index_5qXXq_Tx_js_1.b.DISABLED, stencilReference: 0 }), this.setStencilMode(r.stencilMode, r.stencilReference); }
    resetState() { this._stencilCache.enabled = !1, this._stencilCache.stencilMode = Index_5qXXq_Tx_js_1.b.NONE, this._stencilCache.stencilReference = 0; }
    setStencilMode(e, r) { const s = this._renderTargetStencilState[this._activeRenderTarget.uid], n = this._gl, i = SharedSystems_tBvOkzj9_js_1.G[e], a = this._stencilCache; if (s.stencilMode = e, s.stencilReference = r, e === Index_5qXXq_Tx_js_1.b.DISABLED) {
        this._stencilCache.enabled && (this._stencilCache.enabled = !1, n.disable(n.STENCIL_TEST));
        return;
    } this._stencilCache.enabled || (this._stencilCache.enabled = !0, n.enable(n.STENCIL_TEST)), (e !== a.stencilMode || a.stencilReference !== r) && (a.stencilMode = e, a.stencilReference = r, n.stencilFunc(this._comparisonFuncMapping[i.stencilBack.compare], r, 255), n.stencilOp(n.KEEP, n.KEEP, this._stencilOpsMapping[i.stencilBack.passOp])); }
}
ce.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "stencil" };
const ue = { f32: 4, i32: 4, "vec2<f32>": 8, "vec3<f32>": 12, "vec4<f32>": 16, "vec2<i32>": 8, "vec3<i32>": 12, "vec4<i32>": 16, "mat2x2<f32>": 32, "mat3x3<f32>": 48, "mat4x4<f32>": 64 };
function qe(t) { const e = t.map(i => ({ data: i, offset: 0, size: 0 })), r = 16; let s = 0, n = 0; for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (s = ue[a.data.type], !s)
        throw new Error(`Unknown type ${a.data.type}`);
    a.data.size > 1 && (s = Math.max(s, r) * a.data.size);
    const o = s === 12 ? 16 : s;
    a.size = s;
    const c = n % r;
    c > 0 && r - c < o ? n += (r - c) % 16 : n += (s - c % s) % s, a.offset = n, n += s;
} return n = Math.ceil(n / 16) * 16, { uboElements: e, size: n }; }
function Ze(t, e) {
    const r = Math.max(ue[t.data.type] / 16, 1), s = t.data.value.length / t.data.size, n = (4 - s % 4) % 4, i = t.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return `
        v = uv.${t.data.name};
        offset += ${e};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${t.data.size * r}; i++)
        {
            for(var j = 0; j < ${s}; j++)
            {
                ${i}[arrayOffset++] = v[t++];
            }
            ${n !== 0 ? `arrayOffset += ${n};` : ""}
        }
    `;
}
function Qe(t) { return (0, SharedSystems_tBvOkzj9_js_1.c)(t, "uboStd40", Ze, SharedSystems_tBvOkzj9_js_1.b); }
class _e extends SharedSystems_tBvOkzj9_js_1.U {
    constructor() { super({ createUboElements: qe, generateUboSync: Qe }); }
}
_e.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "ubo" };
class Je {
    constructor() { this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new Index_5qXXq_Tx_js_1.W; }
    init(e, r) { this._renderer = e, this._renderTargetSystem = r, e.runners.contextChange.add(this); }
    contextChange() { this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new Index_5qXXq_Tx_js_1.W; const e = this._renderer.gl; this._drawBuffersCache = []; for (let r = 1; r <= 16; r++)
        this._drawBuffersCache[r] = Array.from({ length: r }, (s, n) => e.COLOR_ATTACHMENT0 + n); }
    copyToTexture(e, r, s, n, i) { const a = this._renderTargetSystem, o = this._renderer, c = a.getGpuRenderTarget(e), u = o.gl; return this.finishRenderPass(e), u.bindFramebuffer(u.FRAMEBUFFER, c.resolveTargetFramebuffer), o.texture.bind(r, 0), u.copyTexSubImage2D(u.TEXTURE_2D, 0, i.x, i.y, s.x, s.y, n.width, n.height), r; }
    startRenderPass(e, r = !0, s, n) { const i = this._renderTargetSystem, a = e.colorTexture, o = i.getGpuRenderTarget(e); let c = n.y; e.isRoot && (c = a.pixelHeight - n.height - n.y), e.colorTextures.forEach(h => { this._renderer.texture.unbind(h); }); const u = this._renderer.gl; u.bindFramebuffer(u.FRAMEBUFFER, o.framebuffer), e.colorTextures.length > 1 && this._setDrawBuffers(e, u); const _ = this._viewPortCache; (_.x !== n.x || _.y !== c || _.width !== n.width || _.height !== n.height) && (_.x = n.x, _.y = c, _.width = n.width, _.height = n.height, u.viewport(n.x, c, n.width, n.height)), !o.depthStencilRenderBuffer && (e.stencil || e.depth) && this._initStencil(o), this.clear(e, r, s); }
    finishRenderPass(e) { const s = this._renderTargetSystem.getGpuRenderTarget(e); if (!s.msaa)
        return; const n = this._renderer.gl; n.bindFramebuffer(n.FRAMEBUFFER, s.resolveTargetFramebuffer), n.bindFramebuffer(n.READ_FRAMEBUFFER, s.framebuffer), n.blitFramebuffer(0, 0, s.width, s.height, 0, 0, s.width, s.height, n.COLOR_BUFFER_BIT, n.NEAREST), n.bindFramebuffer(n.FRAMEBUFFER, s.framebuffer); }
    initGpuRenderTarget(e) { const s = this._renderer.gl, n = new Ye; return e.colorTexture instanceof Index_5qXXq_Tx_js_1.j ? (this._renderer.context.ensureCanvasSize(e.colorTexture.resource), n.framebuffer = null, n) : (this._initColor(e, n), s.bindFramebuffer(s.FRAMEBUFFER, null), n); }
    destroyGpuRenderTarget(e) { const r = this._renderer.gl; e.framebuffer && (r.deleteFramebuffer(e.framebuffer), e.framebuffer = null), e.resolveTargetFramebuffer && (r.deleteFramebuffer(e.resolveTargetFramebuffer), e.resolveTargetFramebuffer = null), e.depthStencilRenderBuffer && (r.deleteRenderbuffer(e.depthStencilRenderBuffer), e.depthStencilRenderBuffer = null), e.msaaRenderBuffer.forEach(s => { r.deleteRenderbuffer(s); }), e.msaaRenderBuffer = null; }
    clear(e, r, s) { if (!r)
        return; const n = this._renderTargetSystem; typeof r == "boolean" && (r = r ? Index_5qXXq_Tx_js_1.i.ALL : Index_5qXXq_Tx_js_1.i.NONE); const i = this._renderer.gl; if (r & Index_5qXXq_Tx_js_1.i.COLOR) {
        s ?? (s = n.defaultClearColor);
        const a = this._clearColorCache, o = s;
        (a[0] !== o[0] || a[1] !== o[1] || a[2] !== o[2] || a[3] !== o[3]) && (a[0] = o[0], a[1] = o[1], a[2] = o[2], a[3] = o[3], i.clearColor(o[0], o[1], o[2], o[3]));
    } i.clear(r); }
    resizeGpuRenderTarget(e) { if (e.isRoot)
        return; const s = this._renderTargetSystem.getGpuRenderTarget(e); this._resizeColor(e, s), (e.stencil || e.depth) && this._resizeStencil(s); }
    _initColor(e, r) { const s = this._renderer, n = s.gl, i = n.createFramebuffer(); if (r.resolveTargetFramebuffer = i, n.bindFramebuffer(n.FRAMEBUFFER, i), r.width = e.colorTexture.source.pixelWidth, r.height = e.colorTexture.source.pixelHeight, e.colorTextures.forEach((o, c) => { const u = o.source; u.antialias && (s.context.supports.msaa ? r.msaa = !0 : (0, Index_5qXXq_Tx_js_1.w)("[RenderTexture] Antialiasing on textures is not supported in WebGL1")), s.texture.bindSource(u, 0); const h = s.texture.getGlSource(u).texture; n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + c, 3553, h, 0); }), r.msaa) {
        const o = n.createFramebuffer();
        r.framebuffer = o, n.bindFramebuffer(n.FRAMEBUFFER, o), e.colorTextures.forEach((c, u) => { const _ = n.createRenderbuffer(); r.msaaRenderBuffer[u] = _; });
    }
    else
        r.framebuffer = i; this._resizeColor(e, r); }
    _resizeColor(e, r) { const s = e.colorTexture.source; if (r.width = s.pixelWidth, r.height = s.pixelHeight, e.colorTextures.forEach((n, i) => { i !== 0 && n.source.resize(s.width, s.height, s._resolution); }), r.msaa) {
        const n = this._renderer, i = n.gl, a = r.framebuffer;
        i.bindFramebuffer(i.FRAMEBUFFER, a), e.colorTextures.forEach((o, c) => { const u = o.source; n.texture.bindSource(u, 0); const h = n.texture.getGlSource(u).internalFormat, l = r.msaaRenderBuffer[c]; i.bindRenderbuffer(i.RENDERBUFFER, l), i.renderbufferStorageMultisample(i.RENDERBUFFER, 4, h, u.pixelWidth, u.pixelHeight), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + c, i.RENDERBUFFER, l); });
    } }
    _initStencil(e) { if (e.framebuffer === null)
        return; const r = this._renderer.gl, s = r.createRenderbuffer(); e.depthStencilRenderBuffer = s, r.bindRenderbuffer(r.RENDERBUFFER, s), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, s), this._resizeStencil(e); }
    _resizeStencil(e) { const r = this._renderer.gl; r.bindRenderbuffer(r.RENDERBUFFER, e.depthStencilRenderBuffer), e.msaa ? r.renderbufferStorageMultisample(r.RENDERBUFFER, 4, r.DEPTH24_STENCIL8, e.width, e.height) : r.renderbufferStorage(r.RENDERBUFFER, this._renderer.context.webGLVersion === 2 ? r.DEPTH24_STENCIL8 : r.DEPTH_STENCIL, e.width, e.height); }
    prerender(e) { const r = e.colorTexture.resource; this._renderer.context.multiView && Index_5qXXq_Tx_js_1.j.test(r) && this._renderer.context.ensureCanvasSize(r); }
    postrender(e) { if (this._renderer.context.multiView && Index_5qXXq_Tx_js_1.j.test(e.colorTexture.resource)) {
        const r = this._renderer.context.canvas, s = e.colorTexture;
        s.context2D.drawImage(r, 0, s.pixelHeight - r.height);
    } }
    _setDrawBuffers(e, r) { const s = e.colorTextures.length, n = this._drawBuffersCache[s]; if (this._renderer.context.webGLVersion === 1) {
        const i = this._renderer.context.extensions.drawBuffers;
        i ? i.drawBuffersWEBGL(n) : (0, Index_5qXXq_Tx_js_1.w)("[RenderTexture] This WebGL1 context does not support rendering to multiple targets");
    }
    else
        r.drawBuffers(n); }
}
class fe extends SharedSystems_tBvOkzj9_js_1.R {
    constructor(e) { super(e), this.adaptor = new Je, this.adaptor.init(e, this); }
}
fe.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "renderTarget" };
function et(t, e) {
    const r = [], s = [`
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `];
    let n = !1, i = 0;
    const a = e._getProgramData(t.glProgram);
    for (const c in t.groups) {
        const u = t.groups[c];
        r.push(`
            resources = g[${c}].resources;
        `);
        for (const _ in u.resources) {
            const h = u.resources[_];
            if (h instanceof Index_5qXXq_Tx_js_1.l)
                if (h.ubo) {
                    const l = t._uniformBindMap[c][Number(_)];
                    r.push(`
                        sS.bindUniformBlock(
                            resources[${_}],
                            '${l}',
                            ${t.glProgram._uniformBlockData[l].index}
                        );
                    `);
                }
                else
                    r.push(`
                        ugS.updateUniformGroup(resources[${_}], p, sD);
                    `);
            else if (h instanceof SharedSystems_tBvOkzj9_js_1.B) {
                const l = t._uniformBindMap[c][Number(_)];
                r.push(`
                    sS.bindUniformBlock(
                        resources[${_}],
                        '${l}',
                        ${t.glProgram._uniformBlockData[l].index}
                    );
                `);
            }
            else if (h instanceof Index_5qXXq_Tx_js_1.k) {
                const l = t._uniformBindMap[c][_], E = a.uniformData[l];
                E && (n || (n = !0, s.push(`
                        var tS = r.texture;
                        `)), e._gl.uniform1i(E.location, i), r.push(`
                        tS.bind(resources[${_}], ${i});
                    `), i++);
            }
        }
    }
    const o = [...s, ...r].join(`
`);
    return new Function("r", "s", "sD", o);
}
class tt {
    constructor(e, r) { this.program = e, this.uniformData = r, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBlockBindings = {}; }
    destroy() { this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBlockBindings = null, this.program = null; }
}
function k(t, e, r) { const s = t.createShader(e); return t.shaderSource(s, r), t.compileShader(s), s; }
function y(t) { const e = new Array(t); for (let r = 0; r < e.length; r++)
    e[r] = !1; return e; }
function he(t, e) { switch (t) {
    case "float": return 0;
    case "vec2": return new Float32Array(2 * e);
    case "vec3": return new Float32Array(3 * e);
    case "vec4": return new Float32Array(4 * e);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray": return 0;
    case "ivec2": return new Int32Array(2 * e);
    case "ivec3": return new Int32Array(3 * e);
    case "ivec4": return new Int32Array(4 * e);
    case "uvec2": return new Uint32Array(2 * e);
    case "uvec3": return new Uint32Array(3 * e);
    case "uvec4": return new Uint32Array(4 * e);
    case "bool": return !1;
    case "bvec2": return y(2 * e);
    case "bvec3": return y(3 * e);
    case "bvec4": return y(4 * e);
    case "mat2": return new Float32Array([1, 0, 0, 1]);
    case "mat3": return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4": return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
} return null; }
let g = null;
const V = { FLOAT: "float", FLOAT_VEC2: "vec2", FLOAT_VEC3: "vec3", FLOAT_VEC4: "vec4", INT: "int", INT_VEC2: "ivec2", INT_VEC3: "ivec3", INT_VEC4: "ivec4", UNSIGNED_INT: "uint", UNSIGNED_INT_VEC2: "uvec2", UNSIGNED_INT_VEC3: "uvec3", UNSIGNED_INT_VEC4: "uvec4", BOOL: "bool", BOOL_VEC2: "bvec2", BOOL_VEC3: "bvec3", BOOL_VEC4: "bvec4", FLOAT_MAT2: "mat2", FLOAT_MAT3: "mat3", FLOAT_MAT4: "mat4", SAMPLER_2D: "sampler2D", INT_SAMPLER_2D: "sampler2D", UNSIGNED_INT_SAMPLER_2D: "sampler2D", SAMPLER_CUBE: "samplerCube", INT_SAMPLER_CUBE: "samplerCube", UNSIGNED_INT_SAMPLER_CUBE: "samplerCube", SAMPLER_2D_ARRAY: "sampler2DArray", INT_SAMPLER_2D_ARRAY: "sampler2DArray", UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray" }, rt = { float: "float32", vec2: "float32x2", vec3: "float32x3", vec4: "float32x4", int: "sint32", ivec2: "sint32x2", ivec3: "sint32x3", ivec4: "sint32x4", uint: "uint32", uvec2: "uint32x2", uvec3: "uint32x3", uvec4: "uint32x4", bool: "uint32", bvec2: "uint32x2", bvec3: "uint32x3", bvec4: "uint32x4" };
function le(t, e) { if (!g) {
    const r = Object.keys(V);
    g = {};
    for (let s = 0; s < r.length; ++s) {
        const n = r[s];
        g[t[n]] = V[n];
    }
} return g[e]; }
function st(t, e) { const r = le(t, e); return rt[r] || "float32"; }
function nt(t, e, r = !1) { const s = {}, n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES); for (let a = 0; a < n; a++) {
    const o = e.getActiveAttrib(t, a);
    if (o.name.startsWith("gl_"))
        continue;
    const c = st(e, o.type);
    s[o.name] = { location: 0, format: c, stride: (0, Index_5qXXq_Tx_js_1.O)(c).stride, offset: 0, instance: !1, start: 0 };
} const i = Object.keys(s); if (r) {
    i.sort((a, o) => a > o ? 1 : -1);
    for (let a = 0; a < i.length; a++)
        s[i[a]].location = a, e.bindAttribLocation(t, a, i[a]);
    e.linkProgram(t);
}
else
    for (let a = 0; a < i.length; a++)
        s[i[a]].location = e.getAttribLocation(t, i[a]); return s; }
function it(t, e) { if (!e.ACTIVE_UNIFORM_BLOCKS)
    return {}; const r = {}, s = e.getProgramParameter(t, e.ACTIVE_UNIFORM_BLOCKS); for (let n = 0; n < s; n++) {
    const i = e.getActiveUniformBlockName(t, n), a = e.getUniformBlockIndex(t, i), o = e.getActiveUniformBlockParameter(t, n, e.UNIFORM_BLOCK_DATA_SIZE);
    r[i] = { name: i, index: a, size: o };
} return r; }
function at(t, e) { const r = {}, s = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let n = 0; n < s; n++) {
    const i = e.getActiveUniform(t, n), a = i.name.replace(/\[.*?\]$/, ""), o = !!i.name.match(/\[.*?\]$/), c = le(e, i.type);
    r[a] = { name: a, index: n, type: c, size: i.size, isArray: o, value: he(c, i.size) };
} return r; }
function X(t, e) {
    const r = t.getShaderSource(e).split(`
`).map((u, _) => `${_}: ${u}`), s = t.getShaderInfoLog(e), n = s.split(`
`), i = {}, a = n.map(u => parseFloat(u.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(u => u && !i[u] ? (i[u] = !0, !0) : !1), o = [""];
    a.forEach(u => { r[u - 1] = `%c${r[u - 1]}%c`, o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px"); });
    const c = r.join(`
`);
    o[0] = c, console.error(s), console.groupCollapsed("click to view full shader code"), console.warn(...o), console.groupEnd();
}
function ot(t, e, r, s) { t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || X(t, r), t.getShaderParameter(s, t.COMPILE_STATUS) || X(t, s), console.error("PixiJS Error: Could not initialize shader."), t.getProgramInfoLog(e) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e))); }
function ct(t, e) { const r = k(t, t.VERTEX_SHADER, e.vertex), s = k(t, t.FRAGMENT_SHADER, e.fragment), n = t.createProgram(); t.attachShader(n, r), t.attachShader(n, s); const i = e.transformFeedbackVaryings; i && (typeof t.transformFeedbackVaryings != "function" ? (0, Index_5qXXq_Tx_js_1.w)("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : t.transformFeedbackVaryings(n, i.names, i.bufferMode === "separate" ? t.SEPARATE_ATTRIBS : t.INTERLEAVED_ATTRIBS)), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || ot(t, n, r, s), e._attributeData = nt(n, t, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertex)), e._uniformData = at(n, t), e._uniformBlockData = it(n, t), t.deleteShader(r), t.deleteShader(s); const a = {}; for (const c in e._uniformData) {
    const u = e._uniformData[c];
    a[c] = { location: t.getUniformLocation(n, c), value: he(u.type, u.size) };
} return new tt(n, a); }
const R = { textureCount: 0, blockIndex: 0 };
class de {
    constructor(e) { this._activeProgram = null, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._renderer = e; }
    contextChange(e) { this._gl = e, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._activeProgram = null; }
    bind(e, r) { if (this._setProgram(e.glProgram), r)
        return; R.textureCount = 0, R.blockIndex = 0; let s = this._shaderSyncFunctions[e.glProgram._key]; s || (s = this._shaderSyncFunctions[e.glProgram._key] = this._generateShaderSync(e, this)), this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings), s(this._renderer, e, R); }
    updateUniformGroup(e) { this._renderer.uniformGroup.updateUniformGroup(e, this._activeProgram, R); }
    bindUniformBlock(e, r, s = 0) { const n = this._renderer.buffer, i = this._getProgramData(this._activeProgram), a = e._bufferResource; a || this._renderer.ubo.updateUniformGroup(e); const o = e.buffer, c = n.updateBuffer(o), u = n.freeLocationForBufferBase(c); if (a) {
        const { offset: h, size: l } = e;
        h === 0 && l === o.data.byteLength ? n.bindBufferBase(c, u) : n.bindBufferRange(c, u, h);
    }
    else
        n.getLastBindBaseLocation(c) !== u && n.bindBufferBase(c, u); const _ = this._activeProgram._uniformBlockData[r].index; i.uniformBlockBindings[s] !== u && (i.uniformBlockBindings[s] = u, this._renderer.gl.uniformBlockBinding(i.program, _, u)); }
    _setProgram(e) { if (this._activeProgram === e)
        return; this._activeProgram = e; const r = this._getProgramData(e); this._gl.useProgram(r.program); }
    _getProgramData(e) { return this._programDataHash[e._key] || this._createProgramData(e); }
    _createProgramData(e) { const r = e._key; return this._programDataHash[r] = ct(this._gl, e), this._programDataHash[r]; }
    destroy() { for (const e of Object.keys(this._programDataHash))
        this._programDataHash[e].destroy(); this._programDataHash = null, this._shaderSyncFunctions = null, this._activeProgram = null, this._renderer = null, this._gl = null; }
    _generateShaderSync(e, r) { return et(e, r); }
    resetState() { this._activeProgram = null; }
}
de.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "shader" };
const ut = { f32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`, "vec2<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`, "vec3<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`, "vec4<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`, i32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`, "vec2<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`, "vec3<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`, "vec4<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`, u32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`, "vec2<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`, "vec3<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`, "vec4<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`, bool: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`, "vec2<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`, "vec3<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`, "vec4<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`, "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);", "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);", "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);" }, _t = { f32: "gl.uniform1fv(location, v);", "vec2<f32>": "gl.uniform2fv(location, v);", "vec3<f32>": "gl.uniform3fv(location, v);", "vec4<f32>": "gl.uniform4fv(location, v);", "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);", "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);", "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);", i32: "gl.uniform1iv(location, v);", "vec2<i32>": "gl.uniform2iv(location, v);", "vec3<i32>": "gl.uniform3iv(location, v);", "vec4<i32>": "gl.uniform4iv(location, v);", u32: "gl.uniform1iv(location, v);", "vec2<u32>": "gl.uniform2iv(location, v);", "vec3<u32>": "gl.uniform3iv(location, v);", "vec4<u32>": "gl.uniform4iv(location, v);", bool: "gl.uniform1iv(location, v);", "vec2<bool>": "gl.uniform2iv(location, v);", "vec3<bool>": "gl.uniform3iv(location, v);", "vec4<bool>": "gl.uniform4iv(location, v);" };
function ft(t, e) {
    const r = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `];
    for (const s in t.uniforms) {
        if (!e[s]) {
            t.uniforms[s] instanceof Index_5qXXq_Tx_js_1.l ? t.uniforms[s].ubo ? r.push(`
                        renderer.shader.bindUniformBlock(uv.${s}, "${s}");
                    `) : r.push(`
                        renderer.shader.updateUniformGroup(uv.${s});
                    `) : t.uniforms[s] instanceof SharedSystems_tBvOkzj9_js_1.B && r.push(`
                        renderer.shader.bindBufferResource(uv.${s}, "${s}");
                    `);
            continue;
        }
        const n = t.uniformStructures[s];
        let i = !1;
        for (let a = 0; a < SharedSystems_tBvOkzj9_js_1.d.length; a++) {
            const o = SharedSystems_tBvOkzj9_js_1.d[a];
            if (n.type === o.type && o.test(n)) {
                r.push(`name = "${s}";`, SharedSystems_tBvOkzj9_js_1.d[a].uniform), i = !0;
                break;
            }
        }
        if (!i) {
            const o = (n.size === 1 ? ut : _t)[n.type].replace("location", `ud["${s}"].location`);
            r.push(`
            cu = ud["${s}"];
            cv = cu.value;
            v = uv["${s}"];
            ${o};`);
        }
    }
    return new Function("ud", "uv", "renderer", "syncData", r.join(`
`));
}
class me {
    constructor(e) { this._cache = {}, this._uniformGroupSyncHash = {}, this._renderer = e, this.gl = null, this._cache = {}; }
    contextChange(e) { this.gl = e; }
    updateUniformGroup(e, r, s) { const n = this._renderer.shader._getProgramData(r); (!e.isStatic || e._dirtyId !== n.uniformDirtyGroups[e.uid]) && (n.uniformDirtyGroups[e.uid] = e._dirtyId, this._getUniformSyncFunction(e, r)(n.uniformData, e.uniforms, this._renderer, s)); }
    _getUniformSyncFunction(e, r) { return this._uniformGroupSyncHash[e._signature]?.[r._key] || this._createUniformSyncFunction(e, r); }
    _createUniformSyncFunction(e, r) { const s = this._uniformGroupSyncHash[e._signature] || (this._uniformGroupSyncHash[e._signature] = {}), n = this._getSignature(e, r._uniformData, "u"); return this._cache[n] || (this._cache[n] = this._generateUniformsSync(e, r._uniformData)), s[r._key] = this._cache[n], s[r._key]; }
    _generateUniformsSync(e, r) { return ft(e, r); }
    _getSignature(e, r, s) { const n = e.uniforms, i = [`${s}-`]; for (const a in n)
        i.push(a), r[a] && i.push(r[a].type); return i.join("-"); }
    destroy() { this._renderer = null, this._cache = null; }
}
me.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "uniformGroup" };
function ht(t) { const e = {}; if (e.normal = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.add = [t.ONE, t.ONE], e.multiply = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e.screen = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e.none = [0, 0], e["normal-npm"] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e["add-npm"] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e["screen-npm"] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e.erase = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], !(t instanceof Index_5qXXq_Tx_js_1.D.get().getWebGLRenderingContext()))
    e.min = [t.ONE, t.ONE, t.ONE, t.ONE, t.MIN, t.MIN], e.max = [t.ONE, t.ONE, t.ONE, t.ONE, t.MAX, t.MAX];
else {
    const s = t.getExtension("EXT_blend_minmax");
    s && (e.min = [t.ONE, t.ONE, t.ONE, t.ONE, s.MIN_EXT, s.MIN_EXT], e.max = [t.ONE, t.ONE, t.ONE, t.ONE, s.MAX_EXT, s.MAX_EXT]);
} return e; }
const lt = 0, dt = 1, mt = 2, Et = 3, bt = 4, pt = 5, Ee = class I {
    constructor(e) { this._invertFrontFace = !1, this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = "none", this._blendEq = !1, this.map = [], this.map[lt] = this.setBlend, this.map[dt] = this.setOffset, this.map[mt] = this.setCullFace, this.map[Et] = this.setDepthTest, this.map[bt] = this.setFrontFace, this.map[pt] = this.setDepthMask, this.checks = [], this.defaultState = Index_5qXXq_Tx_js_1.S.for2d(), e.renderTarget.onRenderTargetChange.add(this); }
    onRenderTargetChange(e) { this._invertFrontFace = !e.isRoot, this._cullFace ? this.setFrontFace(this._frontFace) : this._frontFaceDirty = !0; }
    contextChange(e) { this.gl = e, this.blendModesMap = ht(e), this.resetState(); }
    set(e) { if (e || (e = this.defaultState), this.stateId !== e.data) {
        let r = this.stateId ^ e.data, s = 0;
        for (; r;)
            r & 1 && this.map[s].call(this, !!(e.data & 1 << s)), r >>= 1, s++;
        this.stateId = e.data;
    } for (let r = 0; r < this.checks.length; r++)
        this.checks[r](this, e); }
    forceState(e) { e || (e = this.defaultState); for (let r = 0; r < this.map.length; r++)
        this.map[r].call(this, !!(e.data & 1 << r)); for (let r = 0; r < this.checks.length; r++)
        this.checks[r](this, e); this.stateId = e.data; }
    setBlend(e) { this._updateCheck(I._checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND); }
    setOffset(e) { this._updateCheck(I._checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL); }
    setDepthTest(e) { this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST); }
    setDepthMask(e) { this.gl.depthMask(e); }
    setCullFace(e) { this._cullFace = e, this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE), this._cullFace && this._frontFaceDirty && this.setFrontFace(this._frontFace); }
    setFrontFace(e) { this._frontFace = e, this._frontFaceDirty = !1; const r = this._invertFrontFace ? !e : e; this._glFrontFace !== r && (this._glFrontFace = r, this.gl.frontFace(this.gl[r ? "CW" : "CCW"])); }
    setBlendMode(e) { if (this.blendModesMap[e] || (e = "normal"), e === this.blendMode)
        return; this.blendMode = e; const r = this.blendModesMap[e], s = this.gl; r.length === 2 ? s.blendFunc(r[0], r[1]) : s.blendFuncSeparate(r[0], r[1], r[2], r[3]), r.length === 6 ? (this._blendEq = !0, s.blendEquationSeparate(r[4], r[5])) : this._blendEq && (this._blendEq = !1, s.blendEquationSeparate(s.FUNC_ADD, s.FUNC_ADD)); }
    setPolygonOffset(e, r) { this.gl.polygonOffset(e, r); }
    resetState() { this._glFrontFace = !1, this._frontFace = !1, this._cullFace = !1, this._frontFaceDirty = !1, this._invertFrontFace = !1, this.gl.frontFace(this.gl.CCW), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = "", this.setBlendMode("normal"); }
    _updateCheck(e, r) { const s = this.checks.indexOf(e); r && s === -1 ? this.checks.push(e) : !r && s !== -1 && this.checks.splice(s, 1); }
    static _checkBlendMode(e, r) { e.setBlendMode(r.blendMode); }
    static _checkPolygonOffset(e, r) { e.setPolygonOffset(1, r.polygonOffset); }
    destroy() { this.gl = null, this.checks.length = 0; }
};
Ee.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "state" };
let St = Ee;
class gt {
    constructor(e) { this.target = re.TEXTURE_2D, this.texture = e, this.width = -1, this.height = -1, this.type = f.UNSIGNED_BYTE, this.internalFormat = D.RGBA, this.format = D.RGBA, this.samplerType = 0; }
    destroy() { }
}
const Rt = { id: "buffer", upload(t, e, r) { e.width === t.width || e.height === t.height ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, t.width, t.height, e.format, e.type, t.resource) : r.texImage2D(e.target, 0, e.internalFormat, t.width, t.height, 0, e.format, e.type, t.resource), e.width = t.width, e.height = t.height; } }, xt = { "bc1-rgba-unorm": !0, "bc1-rgba-unorm-srgb": !0, "bc2-rgba-unorm": !0, "bc2-rgba-unorm-srgb": !0, "bc3-rgba-unorm": !0, "bc3-rgba-unorm-srgb": !0, "bc4-r-unorm": !0, "bc4-r-snorm": !0, "bc5-rg-unorm": !0, "bc5-rg-snorm": !0, "bc6h-rgb-ufloat": !0, "bc6h-rgb-float": !0, "bc7-rgba-unorm": !0, "bc7-rgba-unorm-srgb": !0, "etc2-rgb8unorm": !0, "etc2-rgb8unorm-srgb": !0, "etc2-rgb8a1unorm": !0, "etc2-rgb8a1unorm-srgb": !0, "etc2-rgba8unorm": !0, "etc2-rgba8unorm-srgb": !0, "eac-r11unorm": !0, "eac-r11snorm": !0, "eac-rg11unorm": !0, "eac-rg11snorm": !0, "astc-4x4-unorm": !0, "astc-4x4-unorm-srgb": !0, "astc-5x4-unorm": !0, "astc-5x4-unorm-srgb": !0, "astc-5x5-unorm": !0, "astc-5x5-unorm-srgb": !0, "astc-6x5-unorm": !0, "astc-6x5-unorm-srgb": !0, "astc-6x6-unorm": !0, "astc-6x6-unorm-srgb": !0, "astc-8x5-unorm": !0, "astc-8x5-unorm-srgb": !0, "astc-8x6-unorm": !0, "astc-8x6-unorm-srgb": !0, "astc-8x8-unorm": !0, "astc-8x8-unorm-srgb": !0, "astc-10x5-unorm": !0, "astc-10x5-unorm-srgb": !0, "astc-10x6-unorm": !0, "astc-10x6-unorm-srgb": !0, "astc-10x8-unorm": !0, "astc-10x8-unorm-srgb": !0, "astc-10x10-unorm": !0, "astc-10x10-unorm-srgb": !0, "astc-12x10-unorm": !0, "astc-12x10-unorm-srgb": !0, "astc-12x12-unorm": !0, "astc-12x12-unorm-srgb": !0 }, vt = { id: "compressed", upload(t, e, r) { r.pixelStorei(r.UNPACK_ALIGNMENT, 4); let s = t.pixelWidth, n = t.pixelHeight; const i = !!xt[t.format]; for (let a = 0; a < t.resource.length; a++) {
        const o = t.resource[a];
        i ? r.compressedTexImage2D(r.TEXTURE_2D, a, e.internalFormat, s, n, 0, o) : r.texImage2D(r.TEXTURE_2D, a, e.internalFormat, s, n, 0, e.format, e.type, o), s = Math.max(s >> 1, 1), n = Math.max(n >> 1, 1);
    } } }, be = { id: "image", upload(t, e, r, s) { const n = e.width, i = e.height, a = t.pixelWidth, o = t.pixelHeight, c = t.resourceWidth, u = t.resourceHeight; c < a || u < o ? ((n !== a || i !== o) && r.texImage2D(e.target, 0, e.internalFormat, a, o, 0, e.format, e.type, null), s === 2 ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, c, u, e.format, e.type, t.resource) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, e.format, e.type, t.resource)) : n === a && i === o ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, e.format, e.type, t.resource) : s === 2 ? r.texImage2D(e.target, 0, e.internalFormat, a, o, 0, e.format, e.type, t.resource) : r.texImage2D(e.target, 0, e.internalFormat, e.format, e.type, t.resource), e.width = a, e.height = o; } }, Tt = { id: "video", upload(t, e, r, s) { if (!t.isValid) {
        r.texImage2D(e.target, 0, e.internalFormat, 1, 1, 0, e.format, e.type, null);
        return;
    } be.upload(t, e, r, s); } }, W = { linear: 9729, nearest: 9728 }, Bt = { linear: { linear: 9987, nearest: 9985 }, nearest: { linear: 9986, nearest: 9984 } }, C = { "clamp-to-edge": 33071, repeat: 10497, "mirror-repeat": 33648 }, At = { never: 512, less: 513, equal: 514, "less-equal": 515, greater: 516, "not-equal": 517, "greater-equal": 518, always: 519 };
function j(t, e, r, s, n, i, a, o) { const c = i; if (!o || t.addressModeU !== "repeat" || t.addressModeV !== "repeat" || t.addressModeW !== "repeat") {
    const u = C[a ? "clamp-to-edge" : t.addressModeU], _ = C[a ? "clamp-to-edge" : t.addressModeV], h = C[a ? "clamp-to-edge" : t.addressModeW];
    e[n](c, e.TEXTURE_WRAP_S, u), e[n](c, e.TEXTURE_WRAP_T, _), e.TEXTURE_WRAP_R && e[n](c, e.TEXTURE_WRAP_R, h);
} if ((!o || t.magFilter !== "linear") && e[n](c, e.TEXTURE_MAG_FILTER, W[t.magFilter]), r) {
    if (!o || t.mipmapFilter !== "linear") {
        const u = Bt[t.minFilter][t.mipmapFilter];
        e[n](c, e.TEXTURE_MIN_FILTER, u);
    }
}
else
    e[n](c, e.TEXTURE_MIN_FILTER, W[t.minFilter]); if (s && t.maxAnisotropy > 1) {
    const u = Math.min(t.maxAnisotropy, e.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
    e[n](c, s.TEXTURE_MAX_ANISOTROPY_EXT, u);
} t.compare && e[n](c, e.TEXTURE_COMPARE_FUNC, At[t.compare]); }
function Nt(t) { return { r8unorm: t.RED, r8snorm: t.RED, r8uint: t.RED, r8sint: t.RED, r16uint: t.RED, r16sint: t.RED, r16float: t.RED, rg8unorm: t.RG, rg8snorm: t.RG, rg8uint: t.RG, rg8sint: t.RG, r32uint: t.RED, r32sint: t.RED, r32float: t.RED, rg16uint: t.RG, rg16sint: t.RG, rg16float: t.RG, rgba8unorm: t.RGBA, "rgba8unorm-srgb": t.RGBA, rgba8snorm: t.RGBA, rgba8uint: t.RGBA, rgba8sint: t.RGBA, bgra8unorm: t.RGBA, "bgra8unorm-srgb": t.RGBA, rgb9e5ufloat: t.RGB, rgb10a2unorm: t.RGBA, rg11b10ufloat: t.RGB, rg32uint: t.RG, rg32sint: t.RG, rg32float: t.RG, rgba16uint: t.RGBA, rgba16sint: t.RGBA, rgba16float: t.RGBA, rgba32uint: t.RGBA, rgba32sint: t.RGBA, rgba32float: t.RGBA, stencil8: t.STENCIL_INDEX8, depth16unorm: t.DEPTH_COMPONENT, depth24plus: t.DEPTH_COMPONENT, "depth24plus-stencil8": t.DEPTH_STENCIL, depth32float: t.DEPTH_COMPONENT, "depth32float-stencil8": t.DEPTH_STENCIL }; }
function yt(t, e) { let r = {}, s = t.RGBA; return t instanceof Index_5qXXq_Tx_js_1.D.get().getWebGLRenderingContext() ? e.srgb && (r = { "rgba8unorm-srgb": e.srgb.SRGB8_ALPHA8_EXT, "bgra8unorm-srgb": e.srgb.SRGB8_ALPHA8_EXT }) : (r = { "rgba8unorm-srgb": t.SRGB8_ALPHA8, "bgra8unorm-srgb": t.SRGB8_ALPHA8 }, s = t.RGBA8), { r8unorm: t.R8, r8snorm: t.R8_SNORM, r8uint: t.R8UI, r8sint: t.R8I, r16uint: t.R16UI, r16sint: t.R16I, r16float: t.R16F, rg8unorm: t.RG8, rg8snorm: t.RG8_SNORM, rg8uint: t.RG8UI, rg8sint: t.RG8I, r32uint: t.R32UI, r32sint: t.R32I, r32float: t.R32F, rg16uint: t.RG16UI, rg16sint: t.RG16I, rg16float: t.RG16F, rgba8unorm: t.RGBA, ...r, rgba8snorm: t.RGBA8_SNORM, rgba8uint: t.RGBA8UI, rgba8sint: t.RGBA8I, bgra8unorm: s, rgb9e5ufloat: t.RGB9_E5, rgb10a2unorm: t.RGB10_A2, rg11b10ufloat: t.R11F_G11F_B10F, rg32uint: t.RG32UI, rg32sint: t.RG32I, rg32float: t.RG32F, rgba16uint: t.RGBA16UI, rgba16sint: t.RGBA16I, rgba16float: t.RGBA16F, rgba32uint: t.RGBA32UI, rgba32sint: t.RGBA32I, rgba32float: t.RGBA32F, stencil8: t.STENCIL_INDEX8, depth16unorm: t.DEPTH_COMPONENT16, depth24plus: t.DEPTH_COMPONENT24, "depth24plus-stencil8": t.DEPTH24_STENCIL8, depth32float: t.DEPTH_COMPONENT32F, "depth32float-stencil8": t.DEPTH32F_STENCIL8, ...e.s3tc ? { "bc1-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT, "bc2-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT, "bc3-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT } : {}, ...e.s3tc_sRGB ? { "bc1-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, "bc2-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, "bc3-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } : {}, ...e.rgtc ? { "bc4-r-unorm": e.rgtc.COMPRESSED_RED_RGTC1_EXT, "bc4-r-snorm": e.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT, "bc5-rg-unorm": e.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT, "bc5-rg-snorm": e.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } : {}, ...e.bptc ? { "bc6h-rgb-float": e.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT, "bc6h-rgb-ufloat": e.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT, "bc7-rgba-unorm": e.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT, "bc7-rgba-unorm-srgb": e.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT } : {}, ...e.etc ? { "etc2-rgb8unorm": e.etc.COMPRESSED_RGB8_ETC2, "etc2-rgb8unorm-srgb": e.etc.COMPRESSED_SRGB8_ETC2, "etc2-rgb8a1unorm": e.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, "etc2-rgb8a1unorm-srgb": e.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, "etc2-rgba8unorm": e.etc.COMPRESSED_RGBA8_ETC2_EAC, "etc2-rgba8unorm-srgb": e.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC, "eac-r11unorm": e.etc.COMPRESSED_R11_EAC, "eac-rg11unorm": e.etc.COMPRESSED_SIGNED_RG11_EAC } : {}, ...e.astc ? { "astc-4x4-unorm": e.astc.COMPRESSED_RGBA_ASTC_4x4_KHR, "astc-4x4-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, "astc-5x4-unorm": e.astc.COMPRESSED_RGBA_ASTC_5x4_KHR, "astc-5x4-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, "astc-5x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_5x5_KHR, "astc-5x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, "astc-6x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_6x5_KHR, "astc-6x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, "astc-6x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_6x6_KHR, "astc-6x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, "astc-8x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x5_KHR, "astc-8x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, "astc-8x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x6_KHR, "astc-8x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, "astc-8x8-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x8_KHR, "astc-8x8-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, "astc-10x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x5_KHR, "astc-10x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, "astc-10x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x6_KHR, "astc-10x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, "astc-10x8-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x8_KHR, "astc-10x8-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, "astc-10x10-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x10_KHR, "astc-10x10-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, "astc-12x10-unorm": e.astc.COMPRESSED_RGBA_ASTC_12x10_KHR, "astc-12x10-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, "astc-12x12-unorm": e.astc.COMPRESSED_RGBA_ASTC_12x12_KHR, "astc-12x12-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR } : {} }; }
function Ct(t) { return { r8unorm: t.UNSIGNED_BYTE, r8snorm: t.BYTE, r8uint: t.UNSIGNED_BYTE, r8sint: t.BYTE, r16uint: t.UNSIGNED_SHORT, r16sint: t.SHORT, r16float: t.HALF_FLOAT, rg8unorm: t.UNSIGNED_BYTE, rg8snorm: t.BYTE, rg8uint: t.UNSIGNED_BYTE, rg8sint: t.BYTE, r32uint: t.UNSIGNED_INT, r32sint: t.INT, r32float: t.FLOAT, rg16uint: t.UNSIGNED_SHORT, rg16sint: t.SHORT, rg16float: t.HALF_FLOAT, rgba8unorm: t.UNSIGNED_BYTE, "rgba8unorm-srgb": t.UNSIGNED_BYTE, rgba8snorm: t.BYTE, rgba8uint: t.UNSIGNED_BYTE, rgba8sint: t.BYTE, bgra8unorm: t.UNSIGNED_BYTE, "bgra8unorm-srgb": t.UNSIGNED_BYTE, rgb9e5ufloat: t.UNSIGNED_INT_5_9_9_9_REV, rgb10a2unorm: t.UNSIGNED_INT_2_10_10_10_REV, rg11b10ufloat: t.UNSIGNED_INT_10F_11F_11F_REV, rg32uint: t.UNSIGNED_INT, rg32sint: t.INT, rg32float: t.FLOAT, rgba16uint: t.UNSIGNED_SHORT, rgba16sint: t.SHORT, rgba16float: t.HALF_FLOAT, rgba32uint: t.UNSIGNED_INT, rgba32sint: t.INT, rgba32float: t.FLOAT, stencil8: t.UNSIGNED_BYTE, depth16unorm: t.UNSIGNED_SHORT, depth24plus: t.UNSIGNED_INT, "depth24plus-stencil8": t.UNSIGNED_INT_24_8, depth32float: t.FLOAT, "depth32float-stencil8": t.FLOAT_32_UNSIGNED_INT_24_8_REV }; }
const Dt = 4;
class pe {
    constructor(e) { this._glSamplers = Object.create(null), this._boundTextures = [], this._activeTextureLocation = -1, this._boundSamplers = Object.create(null), this._uploads = { image: be, buffer: Rt, video: Tt, compressed: vt }, this._premultiplyAlpha = !1, this._useSeparateSamplers = !1, this._renderer = e, this._managedTextures = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "resource", onUnload: this.onSourceUnload.bind(this), name: "glTexture" }); }
    get managedTextures() { return Object.values(this._managedTextures.items); }
    contextChange(e) { this._gl = e, this._mapFormatToInternalFormat || (this._mapFormatToInternalFormat = yt(e, this._renderer.context.extensions), this._mapFormatToType = Ct(e), this._mapFormatToFormat = Nt(e)), this._managedTextures.removeAll(!0), this._glSamplers = Object.create(null), this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1; for (let r = 0; r < 16; r++)
        this.bind(Index_5qXXq_Tx_js_1.t.EMPTY, r); }
    initSource(e) { this.bind(e); }
    bind(e, r = 0) { const s = e.source; e ? (this.bindSource(s, r), this._useSeparateSamplers && this._bindSampler(s.style, r)) : (this.bindSource(null, r), this._useSeparateSamplers && this._bindSampler(null, r)); }
    bindSource(e, r = 0) { const s = this._gl; if (e._gcLastUsed = this._renderer.gc.now, this._boundTextures[r] !== e) {
        this._boundTextures[r] = e, this._activateLocation(r), e || (e = Index_5qXXq_Tx_js_1.t.EMPTY.source);
        const n = this.getGlSource(e);
        s.bindTexture(n.target, n.texture);
    } }
    _bindSampler(e, r = 0) { const s = this._gl; if (!e) {
        this._boundSamplers[r] = null, s.bindSampler(r, null);
        return;
    } const n = this._getGlSampler(e); this._boundSamplers[r] !== n && (this._boundSamplers[r] = n, s.bindSampler(r, n)); }
    unbind(e) { const r = e.source, s = this._boundTextures, n = this._gl; for (let i = 0; i < s.length; i++)
        if (s[i] === r) {
            this._activateLocation(i);
            const a = this.getGlSource(r);
            n.bindTexture(a.target, null), s[i] = null;
        } }
    _activateLocation(e) { this._activeTextureLocation !== e && (this._activeTextureLocation = e, this._gl.activeTexture(this._gl.TEXTURE0 + e)); }
    _initSource(e) { const r = this._gl, s = new gt(r.createTexture()); if (s.type = this._mapFormatToType[e.format], s.internalFormat = this._mapFormatToInternalFormat[e.format], s.format = this._mapFormatToFormat[e.format], e.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || e.isPowerOfTwo)) {
        const i = Math.max(e.width, e.height);
        e.mipLevelCount = Math.floor(Math.log2(i)) + 1;
    } return e._gpuData[this._renderer.uid] = s, this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceUpdate, this), e.on("styleChange", this.onStyleChange, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), this.updateStyle(e, !1), s; }
    onStyleChange(e) { this.updateStyle(e, !1); }
    updateStyle(e, r) { const s = this._gl, n = this.getGlSource(e); s.bindTexture(s.TEXTURE_2D, n.texture), this._boundTextures[this._activeTextureLocation] = e, j(e.style, s, e.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", s.TEXTURE_2D, !this._renderer.context.supports.nonPowOf2wrapping && !e.isPowerOfTwo, r); }
    onSourceUnload(e, r = !1) { const s = e._gpuData[this._renderer.uid]; s && (r || (this.unbind(e), this._gl.deleteTexture(s.texture)), e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceUpdate, this), e.off("styleChange", this.onStyleChange, this), e.off("updateMipmaps", this.onUpdateMipmaps, this)); }
    onSourceUpdate(e) { const r = this._gl, s = this.getGlSource(e); r.bindTexture(r.TEXTURE_2D, s.texture), this._boundTextures[this._activeTextureLocation] = e; const n = e.alphaMode === "premultiply-alpha-on-upload"; this._premultiplyAlpha !== n && (this._premultiplyAlpha = n, r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n)), this._uploads[e.uploadMethodId] ? this._uploads[e.uploadMethodId].upload(e, s, r, this._renderer.context.webGLVersion) : r.texImage2D(r.TEXTURE_2D, 0, s.internalFormat, e.pixelWidth, e.pixelHeight, 0, s.format, s.type, null), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e, !1); }
    onUpdateMipmaps(e, r = !0) { r && this.bindSource(e, 0); const s = this.getGlSource(e); this._gl.generateMipmap(s.target); }
    _initSampler(e) { const r = this._gl, s = this._gl.createSampler(); return this._glSamplers[e._resourceId] = s, j(e, r, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", s, !1, !0), this._glSamplers[e._resourceId]; }
    _getGlSampler(e) { return this._glSamplers[e._resourceId] || this._initSampler(e); }
    getGlSource(e) { return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this._initSource(e); }
    generateCanvas(e) { const { pixels: r, width: s, height: n } = this.getPixels(e), i = Index_5qXXq_Tx_js_1.D.get().createCanvas(); i.width = s, i.height = n; const a = i.getContext("2d"); if (a) {
        const o = a.createImageData(s, n);
        o.data.set(r), a.putImageData(o, 0, 0);
    } return i; }
    getPixels(e) { const r = e.source.resolution, s = e.frame, n = Math.max(Math.round(s.width * r), 1), i = Math.max(Math.round(s.height * r), 1), a = new Uint8Array(Dt * n * i), o = this._renderer, c = o.renderTarget.getRenderTarget(e), u = o.renderTarget.getGpuRenderTarget(c), _ = o.gl; return _.bindFramebuffer(_.FRAMEBUFFER, u.resolveTargetFramebuffer), _.readPixels(Math.round(s.x * r), Math.round(s.y * r), n, i, _.RGBA, _.UNSIGNED_BYTE, a), { pixels: new Uint8ClampedArray(a.buffer), width: n, height: i }; }
    destroy() { this._managedTextures.destroy(), this._glSamplers = null, this._boundTextures = null, this._boundSamplers = null, this._mapFormatToInternalFormat = null, this._mapFormatToType = null, this._mapFormatToFormat = null, this._uploads = null, this._renderer = null; }
    resetState() { this._activeTextureLocation = -1, this._boundTextures.fill(Index_5qXXq_Tx_js_1.t.EMPTY.source), this._boundSamplers = Object.create(null); const e = this._gl; this._premultiplyAlpha = !1, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha); }
}
pe.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem], name: "texture" };
class Se {
    contextChange(e) { const r = new Index_5qXXq_Tx_js_1.l({ uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uTransformMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uRound: { value: 0, type: "f32" } }), s = e.limits.maxBatchableTextures, n = (0, Index_5qXXq_Tx_js_1.ab)({ name: "graphics", bits: [Index_5qXXq_Tx_js_1.ac, (0, Index_5qXXq_Tx_js_1.ad)(s), colorToUniform_3MxHuUz8_js_1.b, Index_5qXXq_Tx_js_1.ae] }); this.shader = new Index_5qXXq_Tx_js_1.s({ glProgram: n, resources: { localUniforms: r, batchSamplers: (0, Index_5qXXq_Tx_js_1.af)(s) } }); }
    execute(e, r) { const s = r.context, n = s.customShader || this.shader, i = e.renderer, a = i.graphicsContext, { batcher: o, instructions: c } = a.getContextRenderData(s); n.groups[0] = i.globalUniforms.bindGroup, i.state.set(e.state), i.shader.bind(n), i.geometry.bind(o.geometry, n.glProgram); const u = c.instructions; for (let _ = 0; _ < c.instructionSize; _++) {
        const h = u[_];
        if (h.size) {
            for (let l = 0; l < h.textures.count; l++)
                i.texture.bind(h.textures.textures[l], l);
            i.geometry.draw(h.topology, h.size, h.start);
        }
    } }
    destroy() { this.shader.destroy(!0), this.shader = null; }
}
Se.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipesAdaptor], name: "graphics" };
class ge {
    init() { const e = (0, Index_5qXXq_Tx_js_1.ab)({ name: "mesh", bits: [colorToUniform_3MxHuUz8_js_1.b, SharedSystems_tBvOkzj9_js_1.f, Index_5qXXq_Tx_js_1.ae] }); this._shader = new Index_5qXXq_Tx_js_1.s({ glProgram: e, resources: { uTexture: Index_5qXXq_Tx_js_1.t.EMPTY.source, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new Index_5qXXq_Tx_js_1.M } } } }); }
    execute(e, r) { const s = e.renderer; let n = r._shader; if (n) {
        if (!n.glProgram) {
            (0, Index_5qXXq_Tx_js_1.w)("Mesh shader has no glProgram", r.shader);
            return;
        }
    }
    else {
        n = this._shader;
        const i = r.texture, a = i.source;
        n.resources.uTexture = a, n.resources.uSampler = a.style, n.resources.textureUniforms.uniforms.uTextureMatrix = i.textureMatrix.mapCoord;
    } n.groups[100] = s.globalUniforms.bindGroup, n.groups[101] = e.localUniformsBindGroup, s.encoder.draw({ geometry: r._geometry, shader: n, state: r.state }); }
    destroy() { this._shader.destroy(!0), this._shader = null; }
}
ge.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipesAdaptor], name: "mesh" };
const It = [...SharedSystems_tBvOkzj9_js_1.S, _e, ze, Xe, oe, ee, pe, fe, se, me, de, ae, St, ce, ie], Gt = [...SharedSystems_tBvOkzj9_js_1.a], Ut = [J, ge, Se], Re = [], xe = [], ve = [];
Index_5qXXq_Tx_js_1.e.handleByNamedList(Index_5qXXq_Tx_js_1.E.WebGLSystem, Re);
Index_5qXXq_Tx_js_1.e.handleByNamedList(Index_5qXXq_Tx_js_1.E.WebGLPipes, xe);
Index_5qXXq_Tx_js_1.e.handleByNamedList(Index_5qXXq_Tx_js_1.E.WebGLPipesAdaptor, ve);
Index_5qXXq_Tx_js_1.e.add(...It, ...Gt, ...Ut);
class mr extends Index_5qXXq_Tx_js_1.A {
    constructor() { const e = { name: "webgl", type: Index_5qXXq_Tx_js_1.R.WEBGL, systems: Re, renderPipes: xe, renderPipeAdaptors: ve }; super(e); }
}
exports.WebGLRenderer = mr;

},
"./colorToUniform-3MxHuUz8.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l = exports.b = exports.a = exports.B = void 0;
exports.c = s;
const l = { name: "local-uniform-bit", vertex: { header: `

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `, main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `, end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        ` } }, e = { ...l, vertex: { ...l.vertex, header: l.vertex.header.replace("group(1)", "group(2)") } }, n = { name: "local-uniform-bit", vertex: { header: `

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `, main: `
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `, end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        ` } };
exports.a = l;
exports.l = e;
exports.b = n;
class a {
    constructor() { this.batcherName = "default", this.topology = "triangle-list", this.attributeSize = 4, this.indexSize = 6, this.packAsQuad = !0, this.roundPixels = 0, this._attributeStart = 0, this._batcher = null, this._batch = null; }
    get blendMode() { return this.renderable.groupBlendMode; }
    get color() { return this.renderable.groupColorAlpha; }
    reset() { this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.bounds = null; }
    destroy() { this.reset(); }
}
exports.B = a;
function s(o, r, t) { const i = (o >> 24 & 255) / 255; r[t++] = (o & 255) / 255 * i, r[t++] = (o >> 8 & 255) / 255 * i, r[t++] = (o >> 16 & 255) / 255 * i, r[t++] = i; }

},
"./init-BM_z7ZKv.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_5qXXq_Tx_js_1 = require("./Index-5qXXq-Tx.js");
const colorToUniform_3MxHuUz8_js_1 = require("./colorToUniform-3MxHuUz8.js");
class Ee {
    static init(e) { Object.defineProperty(this, "resizeTo", { configurable: !0, set(t) { globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (globalThis.addEventListener("resize", this.queueResize), this.resize()); }, get() { return this._resizeTo; } }), this.queueResize = () => { this._resizeTo && (this._cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize())); }, this._cancelResize = () => { this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null); }, this.resize = () => { if (!this._resizeTo)
        return; this._cancelResize(); let t, r; if (this._resizeTo === globalThis.window)
        t = globalThis.innerWidth, r = globalThis.innerHeight;
    else {
        const { clientWidth: n, clientHeight: i } = this._resizeTo;
        t = n, r = i;
    } this.renderer.resize(t, r), this.render(); }, this._resizeId = null, this._resizeTo = null, this.resizeTo = e.resizeTo || null; }
    static destroy() { globalThis.removeEventListener("resize", this.queueResize), this._cancelResize(), this._cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null; }
}
Ee.extension = Index_5qXXq_Tx_js_1.E.Application;
class Ve {
    static init(e) { e = Object.assign({ autoStart: !0, sharedTicker: !1 }, e), Object.defineProperty(this, "ticker", { configurable: !0, set(t) { this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, Index_5qXXq_Tx_js_1.U.LOW); }, get() { return this._ticker; } }), this.stop = () => { this._ticker.stop(); }, this.start = () => { this._ticker.start(); }, this._ticker = null, this.ticker = e.sharedTicker ? Index_5qXXq_Tx_js_1.T.shared : new Index_5qXXq_Tx_js_1.T, e.autoStart && this.start(); }
    static destroy() { if (this._ticker) {
        const e = this._ticker;
        this.ticker = null, e.destroy();
    } }
}
Ve.extension = Index_5qXXq_Tx_js_1.E.Application;
var Rt = `in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`, Ut = `in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
void main() {
    finalColor = texture(uTexture, vTextureCoord);
}
`, me = `struct GlobalFilterUniforms {
  uInputSize: vec4<f32>,
  uInputPixel: vec4<f32>,
  uInputClamp: vec4<f32>,
  uOutputFrame: vec4<f32>,
  uGlobalFrame: vec4<f32>,
  uOutputTexture: vec4<f32>,
};

@group(0) @binding(0) var <uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler: sampler;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>
};

fn filterVertexPosition(aPosition: vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0 * gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord(aPosition: vec2<f32>) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition: vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    return textureSample(uTexture, uSampler, uv);
}
`;
class Bt extends Index_5qXXq_Tx_js_1.F {
    constructor() { const e = Index_5qXXq_Tx_js_1.x.from({ vertex: { source: me, entryPoint: "mainVertex" }, fragment: { source: me, entryPoint: "mainFragment" }, name: "passthrough-filter" }), t = Index_5qXXq_Tx_js_1.y.from({ vertex: Rt, fragment: Ut, name: "passthrough-filter" }); super({ gpuProgram: e, glProgram: t }); }
}
class We {
    constructor(e) { this._renderer = e; }
    push(e, t, r) { this._renderer.renderPipes.batch.break(r), r.add({ renderPipeId: "filter", canBundle: !1, action: "pushFilter", container: t, filterEffect: e }); }
    pop(e, t, r) { this._renderer.renderPipes.batch.break(r), r.add({ renderPipeId: "filter", action: "popFilter", canBundle: !1 }); }
    execute(e) { e.action === "pushFilter" ? this._renderer.filter.push(e) : e.action === "popFilter" && this._renderer.filter.pop(); }
    destroy() { this._renderer = null; }
}
We.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "filter" };
const ge = new Index_5qXXq_Tx_js_1.M;
function Mt(o, e) { e.clear(); const t = e.matrix; for (let r = 0; r < o.length; r++) {
    const n = o[r];
    if (n.globalDisplayStatus < 7)
        continue;
    const i = n.renderGroup ?? n.parentRenderGroup;
    i?.isCachedAsTexture ? e.matrix = ge.copyFrom(i.textureOffsetInverseTransform).append(n.worldTransform) : i?._parentCacheAsTextureRenderGroup ? e.matrix = ge.copyFrom(i._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(n.groupTransform) : e.matrix = n.worldTransform, e.addBounds(n.bounds);
} return e.matrix = t, e; }
const Gt = new Index_5qXXq_Tx_js_1.a9({ attributes: { aPosition: { buffer: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), format: "float32x2", stride: 8, offset: 0 } }, indexBuffer: new Uint32Array([0, 1, 2, 0, 2, 3]) });
class Dt {
    constructor() { this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new Index_5qXXq_Tx_js_1.J, this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.globalFrame = { x: 0, y: 0, width: 0, height: 0 }, this.firstEnabledIndex = -1, this.lastEnabledIndex = -1; }
}
class Le {
    constructor(e) { this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new Index_5qXXq_Tx_js_1.l({ uInputSize: { value: new Float32Array(4), type: "vec4<f32>" }, uInputPixel: { value: new Float32Array(4), type: "vec4<f32>" }, uInputClamp: { value: new Float32Array(4), type: "vec4<f32>" }, uOutputFrame: { value: new Float32Array(4), type: "vec4<f32>" }, uGlobalFrame: { value: new Float32Array(4), type: "vec4<f32>" }, uOutputTexture: { value: new Float32Array(4), type: "vec4<f32>" } }), this._globalFilterBindGroup = new Index_5qXXq_Tx_js_1.d({}), this.renderer = e; }
    get activeBackTexture() { return this._activeFilterData?.backTexture; }
    push(e) { const t = this.renderer, r = e.filterEffect.filters, n = this._pushFilterData(); n.skip = !1, n.filters = r, n.container = e.container, n.outputRenderSurface = t.renderTarget.renderSurface; const i = t.renderTarget.renderTarget.colorTexture.source, s = i.resolution, a = i.antialias; if (r.every(f => !f.enabled)) {
        n.skip = !0;
        return;
    } const l = n.bounds; if (this._calculateFilterArea(e, l), this._calculateFilterBounds(n, t.renderTarget.rootViewPort, a, s, 1), n.skip)
        return; const u = this._getPreviousFilterData(), h = this._findFilterResolution(s); let c = 0, d = 0; u && (c = u.bounds.minX, d = u.bounds.minY), this._calculateGlobalFrame(n, c, d, h, i.width, i.height), this._setupFilterTextures(n, l, t, u); }
    generateFilteredTexture({ texture: e, filters: t }) { const r = this._pushFilterData(); this._activeFilterData = r, r.skip = !1, r.filters = t; const n = e.source, i = n.resolution, s = n.antialias; if (t.every(f => !f.enabled))
        return r.skip = !0, e; const a = r.bounds; if (a.addRect(e.frame), this._calculateFilterBounds(r, a.rectangle, s, i, 0), r.skip)
        return e; const l = i; this._calculateGlobalFrame(r, 0, 0, l, n.width, n.height), r.outputRenderSurface = Index_5qXXq_Tx_js_1.K.getOptimalTexture(a.width, a.height, r.resolution, r.antialias), r.backTexture = Index_5qXXq_Tx_js_1.t.EMPTY, r.inputTexture = e, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(r, !0); const d = r.outputRenderSurface; return d.source.alphaMode = "premultiplied-alpha", d; }
    pop() { const e = this.renderer, t = this._popFilterData(); t.skip || (e.globalUniforms.pop(), e.renderTarget.finishRenderPass(), this._activeFilterData = t, this._applyFiltersToTexture(t, !1), t.blendRequired && Index_5qXXq_Tx_js_1.K.returnTexture(t.backTexture), Index_5qXXq_Tx_js_1.K.returnTexture(t.inputTexture)); }
    getBackTexture(e, t, r) { const n = e.colorTexture.source._resolution, i = Index_5qXXq_Tx_js_1.K.getOptimalTexture(t.width, t.height, n, !1); let s = t.minX, a = t.minY; r && (s -= r.minX, a -= r.minY), s = Math.floor(s * n), a = Math.floor(a * n); const l = Math.ceil(t.width * n), u = Math.ceil(t.height * n); return this.renderer.renderTarget.copyToTexture(e, i, { x: s, y: a }, { width: l, height: u }, { x: 0, y: 0 }), i; }
    applyFilter(e, t, r, n) { const i = this.renderer, s = this._activeFilterData, l = s.outputRenderSurface === r, u = i.renderTarget.rootRenderTarget.colorTexture.source._resolution, h = this._findFilterResolution(u); let c = 0, d = 0; if (l) {
        const m = this._findPreviousFilterOffset();
        c = m.x, d = m.y;
    } this._updateFilterUniforms(t, r, s, c, d, h, l, n); const f = e.enabled ? e : this._getPassthroughFilter(); this._setupBindGroupsAndRender(f, t, i); }
    calculateSpriteMatrix(e, t) { const r = this._activeFilterData, n = e.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY), i = t.worldTransform.copyTo(Index_5qXXq_Tx_js_1.M.shared), s = t.renderGroup || t.parentRenderGroup; return s && s.cacheToLocalTransform && i.prepend(s.cacheToLocalTransform), i.invert(), n.prepend(i), n.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height), n.translate(t.anchor.x, t.anchor.y), n; }
    destroy() { this._passthroughFilter?.destroy(!0), this._passthroughFilter = null; }
    _getPassthroughFilter() { return this._passthroughFilter ?? (this._passthroughFilter = new Bt), this._passthroughFilter; }
    _setupBindGroupsAndRender(e, t, r) { if (r.renderPipes.uniformBatch) {
        const n = r.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
        this._globalFilterBindGroup.setResource(n, 0);
    }
    else
        this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0); this._globalFilterBindGroup.setResource(t.source, 1), this._globalFilterBindGroup.setResource(t.source.style, 2), e.groups[0] = this._globalFilterBindGroup, r.encoder.draw({ geometry: Gt, shader: e, state: e._state, topology: "triangle-list" }), r.type === Index_5qXXq_Tx_js_1.R.WEBGL && r.renderTarget.finishRenderPass(); }
    _setupFilterTextures(e, t, r, n) { if (e.backTexture = Index_5qXXq_Tx_js_1.t.EMPTY, e.inputTexture = Index_5qXXq_Tx_js_1.K.getOptimalTexture(t.width, t.height, e.resolution, e.antialias), e.blendRequired) {
        r.renderTarget.finishRenderPass();
        const i = r.renderTarget.getRenderTarget(e.outputRenderSurface);
        e.backTexture = this.getBackTexture(i, t, n?.bounds);
    } r.renderTarget.bind(e.inputTexture, !0), r.globalUniforms.push({ offset: t }); }
    _calculateGlobalFrame(e, t, r, n, i, s) { const a = e.globalFrame; a.x = t * n, a.y = r * n, a.width = i * n, a.height = s * n; }
    _updateFilterUniforms(e, t, r, n, i, s, a, l) { const u = this._filterGlobalUniforms.uniforms, h = u.uOutputFrame, c = u.uInputSize, d = u.uInputPixel, f = u.uInputClamp, m = u.uGlobalFrame, x = u.uOutputTexture; a ? (h[0] = r.bounds.minX - n, h[1] = r.bounds.minY - i) : (h[0] = 0, h[1] = 0), h[2] = e.frame.width, h[3] = e.frame.height, c[0] = e.source.width, c[1] = e.source.height, c[2] = 1 / c[0], c[3] = 1 / c[1], d[0] = e.source.pixelWidth, d[1] = e.source.pixelHeight, d[2] = 1 / d[0], d[3] = 1 / d[1], f[0] = .5 * d[2], f[1] = .5 * d[3], f[2] = e.frame.width * c[2] - .5 * d[2], f[3] = e.frame.height * c[3] - .5 * d[3]; const g = this.renderer.renderTarget.rootRenderTarget.colorTexture; m[0] = n * s, m[1] = i * s, m[2] = g.source.width * s, m[3] = g.source.height * s, t instanceof Index_5qXXq_Tx_js_1.t && (t.source.resource = null); const _ = this.renderer.renderTarget.getRenderTarget(t); this.renderer.renderTarget.bind(t, !!l), t instanceof Index_5qXXq_Tx_js_1.t ? (x[0] = t.frame.width, x[1] = t.frame.height) : (x[0] = _.width, x[1] = _.height), x[2] = _.isRoot ? -1 : 1, this._filterGlobalUniforms.update(); }
    _findFilterResolution(e) { let t = this._filterStackIndex - 1; for (; t > 0 && this._filterStack[t].skip;)
        --t; return t > 0 && this._filterStack[t].inputTexture ? this._filterStack[t].inputTexture.source._resolution : e; }
    _findPreviousFilterOffset() { let e = 0, t = 0, r = this._filterStackIndex; for (; r > 0;) {
        r--;
        const n = this._filterStack[r];
        if (!n.skip) {
            e = n.bounds.minX, t = n.bounds.minY;
            break;
        }
    } return { x: e, y: t }; }
    _calculateFilterArea(e, t) { if (e.renderables ? Mt(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
        const n = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
        n && t.applyMatrix(n);
    } }
    _applyFiltersToTexture(e, t) { const r = e.inputTexture, n = e.bounds, i = e.filters, s = e.firstEnabledIndex, a = e.lastEnabledIndex; if (this._globalFilterBindGroup.setResource(r.source.style, 2), this._globalFilterBindGroup.setResource(e.backTexture.source, 3), s === a)
        i[s].apply(this, r, e.outputRenderSurface, t);
    else {
        let l = e.inputTexture;
        const u = Index_5qXXq_Tx_js_1.K.getOptimalTexture(n.width, n.height, l.source._resolution, !1);
        let h = u;
        for (let c = s; c < a; c++) {
            const d = i[c];
            if (!d.enabled)
                continue;
            d.apply(this, l, h, !0);
            const f = l;
            l = h, h = f;
        }
        i[a].apply(this, l, e.outputRenderSurface, t), Index_5qXXq_Tx_js_1.K.returnTexture(u);
    } }
    _calculateFilterBounds(e, t, r, n, i) { const s = this.renderer, a = e.bounds, l = e.filters; let u = 1 / 0, h = 0, c = !0, d = !1, f = !1, m = !0, x = -1, g = -1; for (let _ = 0; _ < l.length; _++) {
        const b = l[_];
        if (!b.enabled)
            continue;
        if (x === -1 && (x = _), g = _, u = Math.min(u, b.resolution === "inherit" ? n : b.resolution), h += b.padding, b.antialias === "off" ? c = !1 : b.antialias === "inherit" && c && (c = r), b.clipToViewport || (m = !1), !!!(b.compatibleRenderers & s.type)) {
            f = !1;
            break;
        }
        if (b.blendRequired && !(s.backBuffer?.useBackBuffer ?? !0)) {
            (0, Index_5qXXq_Tx_js_1.w)("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), f = !1;
            break;
        }
        f = !0, d || (d = b.blendRequired);
    } if (!f) {
        e.skip = !0;
        return;
    } if (m && a.fitBounds(0, t.width / n, 0, t.height / n), a.scale(u).ceil().scale(1 / u).pad((h | 0) * i), !a.isPositive) {
        e.skip = !0;
        return;
    } e.antialias = c, e.resolution = u, e.blendRequired = d, e.firstEnabledIndex = x, e.lastEnabledIndex = g; }
    _popFilterData() { return this._filterStackIndex--, this._filterStack[this._filterStackIndex]; }
    _getPreviousFilterData() { let e, t = this._filterStackIndex - 1; for (; t > 0 && (t--, e = this._filterStack[t], !!e.skip);)
        ; return e; }
    _pushFilterData() { let e = this._filterStack[this._filterStackIndex]; return e || (e = this._filterStack[this._filterStackIndex] = new Dt), this._filterStackIndex++, e; }
}
Le.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "filter" };
const Ye = class He extends Index_5qXXq_Tx_js_1.a9 {
    constructor(...e) { let t = e[0] ?? {}; t instanceof Float32Array && ((0, Index_5qXXq_Tx_js_1.a6)(Index_5qXXq_Tx_js_1.a7, "use new MeshGeometry({ positions, uvs, indices }) instead"), t = { positions: t, uvs: e[1], indices: e[2] }), t = { ...He.defaultOptions, ...t }; const r = t.positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]); let n = t.uvs; n || (t.positions ? n = new Float32Array(r.length) : n = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])); const i = t.indices || new Uint32Array([0, 1, 2, 0, 2, 3]), s = t.shrinkBuffersToFit, a = new Index_5qXXq_Tx_js_1.c({ data: r, label: "attribute-mesh-positions", shrinkToFit: s, usage: Index_5qXXq_Tx_js_1.B.VERTEX | Index_5qXXq_Tx_js_1.B.COPY_DST }), l = new Index_5qXXq_Tx_js_1.c({ data: n, label: "attribute-mesh-uvs", shrinkToFit: s, usage: Index_5qXXq_Tx_js_1.B.VERTEX | Index_5qXXq_Tx_js_1.B.COPY_DST }), u = new Index_5qXXq_Tx_js_1.c({ data: i, label: "index-mesh-buffer", shrinkToFit: s, usage: Index_5qXXq_Tx_js_1.B.INDEX | Index_5qXXq_Tx_js_1.B.COPY_DST }); super({ attributes: { aPosition: { buffer: a, format: "float32x2", stride: 8, offset: 0 }, aUV: { buffer: l, format: "float32x2", stride: 8, offset: 0 } }, indexBuffer: u, topology: t.topology }), this.batchMode = "auto"; }
    get positions() { return this.attributes.aPosition.buffer.data; }
    set positions(e) { this.attributes.aPosition.buffer.data = e; }
    get uvs() { return this.attributes.aUV.buffer.data; }
    set uvs(e) { this.attributes.aUV.buffer.data = e; }
    get indices() { return this.indexBuffer.data; }
    set indices(e) { this.indexBuffer.data = e; }
};
Ye.defaultOptions = { topology: "triangle-list", shrinkBuffersToFit: !1 };
let ae = Ye, U = null, S = null;
function At(o, e) { U || (U = Index_5qXXq_Tx_js_1.D.get().createCanvas(256, 128), S = U.getContext("2d", { willReadFrequently: !0 }), S.globalCompositeOperation = "copy", S.globalAlpha = 1), (U.width < o || U.height < e) && (U.width = (0, Index_5qXXq_Tx_js_1.ag)(o), U.height = (0, Index_5qXXq_Tx_js_1.ag)(e)); }
function xe(o, e, t) { for (let r = 0, n = 4 * t * e; r < e; ++r, n += 4)
    if (o[n + 3] !== 0)
        return !1; return !0; }
function _e(o, e, t, r, n) { const i = 4 * e; for (let s = r, a = r * i + 4 * t; s <= n; ++s, a += i)
    if (o[a + 3] !== 0)
        return !1; return !0; }
function zt(...o) { let e = o[0]; e.canvas || (e = { canvas: o[0], resolution: o[1] }); const { canvas: t } = e, r = Math.min(e.resolution ?? 1, 1), n = e.width ?? t.width, i = e.height ?? t.height; let s = e.output; if (At(n, i), !S)
    throw new TypeError("Failed to get canvas 2D context"); S.drawImage(t, 0, 0, n, i, 0, 0, n * r, i * r); const l = S.getImageData(0, 0, n, i).data; let u = 0, h = 0, c = n - 1, d = i - 1; for (; h < i && xe(l, n, h);)
    ++h; if (h === i)
    return Index_5qXXq_Tx_js_1.W.EMPTY; for (; xe(l, n, d);)
    --d; for (; _e(l, n, u, h, d);)
    ++u; for (; _e(l, n, c, h, d);)
    --c; return ++c, ++d, S.globalCompositeOperation = "source-over", S.strokeRect(u, h, c - u, d - h), S.globalCompositeOperation = "copy", s ?? (s = new Index_5qXXq_Tx_js_1.W), s.set(u / r, h / r, (c - u) / r, (d - h) / r), s; }
const be = new Index_5qXXq_Tx_js_1.W;
class kt {
    getCanvasAndContext(e) { const { text: t, style: r, resolution: n = 1 } = e, i = r._getFinalPadding(), s = Index_5qXXq_Tx_js_1.ah.measureText(t || " ", r), a = Math.ceil(Math.ceil(Math.max(1, s.width) + i * 2) * n), l = Math.ceil(Math.ceil(Math.max(1, s.height) + i * 2) * n), u = Index_5qXXq_Tx_js_1.m.getOptimalCanvasAndContext(a, l); this._renderTextToCanvas(t, r, i, n, u); const h = r.trim ? zt({ canvas: u.canvas, width: a, height: l, resolution: 1, output: be }) : be.set(0, 0, a, l); return { canvasAndContext: u, frame: h }; }
    returnCanvasAndContext(e) { Index_5qXXq_Tx_js_1.m.returnCanvasAndContext(e); }
    _renderTextToCanvas(e, t, r, n, i) { const { canvas: s, context: a } = i, l = (0, Index_5qXXq_Tx_js_1.ai)(t), u = Index_5qXXq_Tx_js_1.ah.measureText(e || " ", t), h = u.lines, c = u.lineHeight, d = u.lineWidths, f = u.maxLineWidth, m = u.fontProperties, x = s.height; if (a.resetTransform(), a.scale(n, n), a.textBaseline = t.textBaseline, t._stroke?.width) {
        const T = t._stroke;
        a.lineWidth = T.width, a.miterLimit = T.miterLimit, a.lineJoin = T.join, a.lineCap = T.cap;
    } a.font = l; let g, _; const b = t.dropShadow ? 2 : 1; for (let T = 0; T < b; ++T) {
        const z = t.dropShadow && T === 0, F = z ? Math.ceil(Math.max(1, x) + r * 2) : 0, D = F * n;
        if (z) {
            a.fillStyle = "black", a.strokeStyle = "black";
            const v = t.dropShadow, lt = v.color, ct = v.alpha;
            a.shadowColor = Index_5qXXq_Tx_js_1.a1.shared.setValue(lt).setAlpha(ct).toRgbaString();
            const dt = v.blur * n, ce = v.distance * n;
            a.shadowBlur = dt, a.shadowOffsetX = Math.cos(v.angle) * ce, a.shadowOffsetY = Math.sin(v.angle) * ce + D;
        }
        else {
            if (a.fillStyle = t._fill ? (0, Index_5qXXq_Tx_js_1.aj)(t._fill, a, u, r * 2) : null, t._stroke?.width) {
                const v = t._stroke.width * .5 + r * 2;
                a.strokeStyle = (0, Index_5qXXq_Tx_js_1.aj)(t._stroke, a, u, v);
            }
            a.shadowColor = "black";
        }
        let ue = (c - m.fontSize) / 2;
        c - m.fontSize < 0 && (ue = 0);
        const le = t._stroke?.width ?? 0;
        for (let v = 0; v < h.length; v++)
            g = le / 2, _ = le / 2 + v * c + m.ascent + ue, t.align === "right" ? g += f - d[v] : t.align === "center" && (g += (f - d[v]) / 2), t._stroke?.width && this._drawLetterSpacing(h[v], t, i, g + r, _ + r - F, !0), t._fill !== void 0 && this._drawLetterSpacing(h[v], t, i, g + r, _ + r - F);
    } }
    _drawLetterSpacing(e, t, r, n, i, s = !1) { const { context: a } = r, l = t.letterSpacing; let u = !1; if (Index_5qXXq_Tx_js_1.ah.experimentalLetterSpacingSupported && (Index_5qXXq_Tx_js_1.ah.experimentalLetterSpacing ? (a.letterSpacing = `${l}px`, a.textLetterSpacing = `${l}px`, u = !0) : (a.letterSpacing = "0px", a.textLetterSpacing = "0px")), l === 0 || u) {
        s ? a.strokeText(e, n, i) : a.fillText(e, n, i);
        return;
    } let h = n; const c = Index_5qXXq_Tx_js_1.ah.graphemeSegmenter(e); let d = a.measureText(e).width, f = 0; for (let m = 0; m < c.length; ++m) {
        const x = c[m];
        s ? a.strokeText(x, h, i) : a.fillText(x, h, i);
        let g = "";
        for (let _ = m + 1; _ < c.length; ++_)
            g += c[_];
        f = a.measureText(g).width, h += d - f + l, d = f;
    } }
}
const H = new kt, ve = "http://www.w3.org/2000/svg", ye = "http://www.w3.org/1999/xhtml";
class Xe {
    constructor() { this.svgRoot = document.createElementNS(ve, "svg"), this.foreignObject = document.createElementNS(ve, "foreignObject"), this.domElement = document.createElementNS(ye, "div"), this.styleElement = document.createElementNS(ye, "style"); const { foreignObject: e, svgRoot: t, styleElement: r, domElement: n } = this; e.setAttribute("width", "10000"), e.setAttribute("height", "10000"), e.style.overflow = "hidden", t.appendChild(e), e.appendChild(r), e.appendChild(n), this.image = Index_5qXXq_Tx_js_1.D.get().createImage(); }
    destroy() { this.svgRoot.remove(), this.foreignObject.remove(), this.styleElement.remove(), this.domElement.remove(), this.image.src = "", this.image.remove(), this.svgRoot = null, this.foreignObject = null, this.styleElement = null, this.domElement = null, this.image = null, this.canvasAndContext = null; }
}
let Te;
function Ot(o, e, t, r) { r || (r = Te || (Te = new Xe)); const { domElement: n, styleElement: i, svgRoot: s } = r; n.innerHTML = `<style>${e.cssStyle};</style><div style='padding:0'>${o}</div>`, n.setAttribute("style", "transform-origin: top left; display: inline-block"), t && (i.textContent = t), document.body.appendChild(s); const a = n.getBoundingClientRect(); s.remove(); const l = e.padding * 2; return { width: a.width - l, height: a.height - l }; }
class It {
    constructor() { this.batches = [], this.batched = !1; }
    destroy() { this.batches.forEach(e => { Index_5qXXq_Tx_js_1.H.return(e); }), this.batches.length = 0; }
}
class Ke {
    constructor(e, t) { this.state = Index_5qXXq_Tx_js_1.S.for2d(), this.renderer = e, this._adaptor = t, this.renderer.runners.contextChange.add(this), this._managedGraphics = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", priority: -1, name: "graphics" }); }
    contextChange() { this._adaptor.contextChange(this.renderer); }
    validateRenderable(e) { const t = e.context, r = !!e._gpuData, n = this.renderer.graphicsContext.updateGpuContext(t); return !!(n.isBatchable || r !== n.isBatchable); }
    addRenderable(e, t) { const r = this.renderer.graphicsContext.updateGpuContext(e.context); e.didViewUpdate && this._rebuild(e), r.isBatchable ? this._addToBatcher(e, t) : (this.renderer.renderPipes.batch.break(t), t.add(e)); }
    updateRenderable(e) { const r = this._getGpuDataForRenderable(e).batches; for (let n = 0; n < r.length; n++) {
        const i = r[n];
        i._batcher.updateElement(i);
    } }
    execute(e) { if (!e.isRenderable)
        return; const t = this.renderer, r = e.context; if (!t.graphicsContext.getGpuContext(r).batches.length)
        return; const i = r.customShader || this._adaptor.shader; this.state.blendMode = e.groupBlendMode; const s = i.resources.localUniforms.uniforms; s.uTransformMatrix = e.groupTransform, s.uRound = t._roundPixels | e._roundPixels, (0, colorToUniform_3MxHuUz8_js_1.c)(e.groupColorAlpha, s.uColor, 0), this._adaptor.execute(this, e); }
    _rebuild(e) { const t = this._getGpuDataForRenderable(e), r = this.renderer.graphicsContext.updateGpuContext(e.context); t.destroy(), r.isBatchable && this._updateBatchesForRenderable(e, t); }
    _addToBatcher(e, t) { const r = this.renderer.renderPipes.batch, n = this._getGpuDataForRenderable(e).batches; for (let i = 0; i < n.length; i++) {
        const s = n[i];
        r.addToBatch(s, t);
    } }
    _getGpuDataForRenderable(e) { return e._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(e); }
    _initGpuDataForRenderable(e) { const t = new It; return e._gpuData[this.renderer.uid] = t, this._managedGraphics.add(e), t; }
    _updateBatchesForRenderable(e, t) { const r = e.context, n = this.renderer.graphicsContext.getGpuContext(r), i = this.renderer._roundPixels | e._roundPixels; t.batches = n.batches.map(s => { const a = Index_5qXXq_Tx_js_1.H.get(Index_5qXXq_Tx_js_1.ak); return s.copyTo(a), a.renderable = e, a.roundPixels = i, a; }); }
    destroy() { this._managedGraphics.destroy(), this.renderer = null, this._adaptor.destroy(), this._adaptor = null, this.state = null; }
}
Ke.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "graphics" };
const $e = class je extends ae {
    constructor(...e) { super({}); let t = e[0] ?? {}; typeof t == "number" && ((0, Index_5qXXq_Tx_js_1.a6)(Index_5qXXq_Tx_js_1.a7, "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"), t = { width: t, height: e[1], verticesX: e[2], verticesY: e[3] }), this.build(t); }
    build(e) { e = { ...je.defaultOptions, ...e }, this.verticesX = this.verticesX ?? e.verticesX, this.verticesY = this.verticesY ?? e.verticesY, this.width = this.width ?? e.width, this.height = this.height ?? e.height; const t = this.verticesX * this.verticesY, r = [], n = [], i = [], s = this.verticesX - 1, a = this.verticesY - 1, l = this.width / s, u = this.height / a; for (let c = 0; c < t; c++) {
        const d = c % this.verticesX, f = c / this.verticesX | 0;
        r.push(d * l, f * u), n.push(d / s, f / a);
    } const h = s * a; for (let c = 0; c < h; c++) {
        const d = c % s, f = c / s | 0, m = f * this.verticesX + d, x = f * this.verticesX + d + 1, g = (f + 1) * this.verticesX + d, _ = (f + 1) * this.verticesX + d + 1;
        i.push(m, x, g, x, _, g);
    } this.buffers[0].data = new Float32Array(r), this.buffers[1].data = new Float32Array(n), this.indexBuffer.data = new Uint32Array(i), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update(); }
};
$e.defaultOptions = { width: 100, height: 100, verticesX: 10, verticesY: 10 };
let Et = $e;
class oe {
    constructor() { this.batcherName = "default", this.packAsQuad = !1, this.indexOffset = 0, this.attributeOffset = 0, this.roundPixels = 0, this._batcher = null, this._batch = null, this._textureMatrixUpdateId = -1, this._uvUpdateId = -1; }
    get blendMode() { return this.renderable.groupBlendMode; }
    get topology() { return this._topology || this.geometry.topology; }
    set topology(e) { this._topology = e; }
    reset() { this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.geometry = null, this._uvUpdateId = -1, this._textureMatrixUpdateId = -1; }
    setTexture(e) { this.texture !== e && (this.texture = e, this._textureMatrixUpdateId = -1); }
    get uvs() { const t = this.geometry.getBuffer("aUV"), r = t.data; let n = r; const i = this.texture.textureMatrix; return i.isSimple || (n = this._transformedUvs, (this._textureMatrixUpdateId !== i._updateID || this._uvUpdateId !== t._updateID) && ((!n || n.length < r.length) && (n = this._transformedUvs = new Float32Array(r.length)), this._textureMatrixUpdateId = i._updateID, this._uvUpdateId = t._updateID, i.multiplyUvs(r, n))), n; }
    get positions() { return this.geometry.positions; }
    get indices() { return this.geometry.indices; }
    get color() { return this.renderable.groupColorAlpha; }
    get groupTransform() { return this.renderable.groupTransform; }
    get attributeSize() { return this.geometry.positions.length / 2; }
    get indexSize() { return this.geometry.indices.length; }
}
class we {
    destroy() { }
}
class Ne {
    constructor(e, t) { this.localUniforms = new Index_5qXXq_Tx_js_1.l({ uTransformMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uRound: { value: 0, type: "f32" } }), this.localUniformsBindGroup = new Index_5qXXq_Tx_js_1.d({ 0: this.localUniforms }), this.renderer = e, this._adaptor = t, this._adaptor.init(); }
    validateRenderable(e) { const t = this._getMeshData(e), r = t.batched, n = e.batched; if (t.batched = n, r !== n)
        return !0; if (n) {
        const i = e._geometry;
        if (i.indices.length !== t.indexSize || i.positions.length !== t.vertexSize)
            return t.indexSize = i.indices.length, t.vertexSize = i.positions.length, !0;
        const s = this._getBatchableMesh(e);
        return s.texture.uid !== e._texture.uid && (s._textureMatrixUpdateId = -1), !s._batcher.checkAndUpdateTexture(s, e._texture);
    } return !1; }
    addRenderable(e, t) { const r = this.renderer.renderPipes.batch, n = this._getMeshData(e); if (e.didViewUpdate && (n.indexSize = e._geometry.indices?.length, n.vertexSize = e._geometry.positions?.length), n.batched) {
        const i = this._getBatchableMesh(e);
        i.setTexture(e._texture), i.geometry = e._geometry, r.addToBatch(i, t);
    }
    else
        r.break(t), t.add(e); }
    updateRenderable(e) { if (e.batched) {
        const t = this._getBatchableMesh(e);
        t.setTexture(e._texture), t.geometry = e._geometry, t._batcher.updateElement(t);
    } }
    execute(e) { if (!e.isRenderable)
        return; e.state.blendMode = (0, Index_5qXXq_Tx_js_1.al)(e.groupBlendMode, e.texture._source); const t = this.localUniforms; t.uniforms.uTransformMatrix = e.groupTransform, t.uniforms.uRound = this.renderer._roundPixels | e._roundPixels, t.update(), (0, colorToUniform_3MxHuUz8_js_1.c)(e.groupColorAlpha, t.uniforms.uColor, 0), this._adaptor.execute(this, e); }
    _getMeshData(e) { var t, r; return (t = e._gpuData)[r = this.renderer.uid] || (t[r] = new we), e._gpuData[this.renderer.uid].meshData || this._initMeshData(e); }
    _initMeshData(e) { return e._gpuData[this.renderer.uid].meshData = { batched: e.batched, indexSize: 0, vertexSize: 0 }, e._gpuData[this.renderer.uid].meshData; }
    _getBatchableMesh(e) { var t, r; return (t = e._gpuData)[r = this.renderer.uid] || (t[r] = new we), e._gpuData[this.renderer.uid].batchableMesh || this._initBatchableMesh(e); }
    _initBatchableMesh(e) { const t = new oe; return t.renderable = e, t.setTexture(e._texture), t.transform = e.groupTransform, t.roundPixels = this.renderer._roundPixels | e._roundPixels, e._gpuData[this.renderer.uid].batchableMesh = t, t; }
    destroy() { this.localUniforms = null, this.localUniformsBindGroup = null, this._adaptor.destroy(), this._adaptor = null, this.renderer = null; }
}
Ne.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "mesh" };
class Vt {
    execute(e, t) { const r = e.state, n = e.renderer, i = t.shader || e.defaultShader; i.resources.uTexture = t.texture._source, i.resources.uniforms = e.localUniforms; const s = n.gl, a = e.getBuffers(t); n.shader.bind(i), n.state.set(r), n.geometry.bind(a.geometry, i.glProgram); const u = a.geometry.indexBuffer.data.BYTES_PER_ELEMENT === 2 ? s.UNSIGNED_SHORT : s.UNSIGNED_INT; s.drawElements(s.TRIANGLES, t.particleChildren.length * 6, u, 0); }
}
class Wt {
    execute(e, t) { const r = e.renderer, n = t.shader || e.defaultShader; n.groups[0] = r.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms, !0), n.groups[1] = r.texture.getTextureBindGroup(t.texture); const i = e.state, s = e.getBuffers(t); r.encoder.draw({ geometry: s.geometry, shader: t.shader || e.defaultShader, state: i, size: t.particleChildren.length * 6 }); }
}
function Ce(o, e = null) { const t = o * 6; if (t > 65535 ? e || (e = new Uint32Array(t)) : e || (e = new Uint16Array(t)), e.length !== t)
    throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${t}`); for (let r = 0, n = 0; r < t; r += 6, n += 4)
    e[r + 0] = n + 0, e[r + 1] = n + 1, e[r + 2] = n + 2, e[r + 3] = n + 0, e[r + 4] = n + 2, e[r + 5] = n + 3; return e; }
function Lt(o) { return { dynamicUpdate: Pe(o, !0), staticUpdate: Pe(o, !1) }; }
function Pe(o, e) {
    const t = [];
    t.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);
    let r = 0;
    for (const i in o) {
        const s = o[i];
        if (e !== s.dynamic)
            continue;
        t.push(`offset = index + ${r}`), t.push(s.code);
        const a = (0, Index_5qXXq_Tx_js_1.O)(s.format);
        r += a.stride / 4;
    }
    t.push(`
            index += stride * 4;
        }
    `), t.unshift(`
        var stride = ${r};
    `);
    const n = t.join(`
`);
    return new Function("ps", "f32v", "u32v", n);
}
class Yt {
    constructor(e) { this._size = 0, this._generateParticleUpdateCache = {}; const t = this._size = e.size ?? 1e3, r = e.properties; let n = 0, i = 0; for (const h in r) {
        const c = r[h], d = (0, Index_5qXXq_Tx_js_1.O)(c.format);
        c.dynamic ? i += d.stride : n += d.stride;
    } this._dynamicStride = i / 4, this._staticStride = n / 4, this.staticAttributeBuffer = new Index_5qXXq_Tx_js_1.am(t * 4 * n), this.dynamicAttributeBuffer = new Index_5qXXq_Tx_js_1.am(t * 4 * i), this.indexBuffer = Ce(t); const s = new Index_5qXXq_Tx_js_1.a9; let a = 0, l = 0; this._staticBuffer = new Index_5qXXq_Tx_js_1.c({ data: new Float32Array(1), label: "static-particle-buffer", shrinkToFit: !1, usage: Index_5qXXq_Tx_js_1.B.VERTEX | Index_5qXXq_Tx_js_1.B.COPY_DST }), this._dynamicBuffer = new Index_5qXXq_Tx_js_1.c({ data: new Float32Array(1), label: "dynamic-particle-buffer", shrinkToFit: !1, usage: Index_5qXXq_Tx_js_1.B.VERTEX | Index_5qXXq_Tx_js_1.B.COPY_DST }); for (const h in r) {
        const c = r[h], d = (0, Index_5qXXq_Tx_js_1.O)(c.format);
        c.dynamic ? (s.addAttribute(c.attributeName, { buffer: this._dynamicBuffer, stride: this._dynamicStride * 4, offset: a * 4, format: c.format }), a += d.size) : (s.addAttribute(c.attributeName, { buffer: this._staticBuffer, stride: this._staticStride * 4, offset: l * 4, format: c.format }), l += d.size);
    } s.addIndex(this.indexBuffer); const u = this.getParticleUpdate(r); this._dynamicUpload = u.dynamicUpdate, this._staticUpload = u.staticUpdate, this.geometry = s; }
    getParticleUpdate(e) { const t = Ht(e); return this._generateParticleUpdateCache[t] ? this._generateParticleUpdateCache[t] : (this._generateParticleUpdateCache[t] = this.generateParticleUpdate(e), this._generateParticleUpdateCache[t]); }
    generateParticleUpdate(e) { return Lt(e); }
    update(e, t) { e.length > this._size && (t = !0, this._size = Math.max(e.length, this._size * 1.5 | 0), this.staticAttributeBuffer = new Index_5qXXq_Tx_js_1.am(this._size * this._staticStride * 4 * 4), this.dynamicAttributeBuffer = new Index_5qXXq_Tx_js_1.am(this._size * this._dynamicStride * 4 * 4), this.indexBuffer = Ce(this._size), this.geometry.indexBuffer.setDataWithSize(this.indexBuffer, this.indexBuffer.byteLength, !0)); const r = this.dynamicAttributeBuffer; if (this._dynamicUpload(e, r.float32View, r.uint32View), this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View, e.length * this._dynamicStride * 4, !0), t) {
        const n = this.staticAttributeBuffer;
        this._staticUpload(e, n.float32View, n.uint32View), this._staticBuffer.setDataWithSize(n.float32View, e.length * this._staticStride * 4, !0);
    } }
    destroy() { this._staticBuffer.destroy(), this._dynamicBuffer.destroy(), this.geometry.destroy(); }
}
function Ht(o) { const e = []; for (const t in o) {
    const r = o[t];
    e.push(t, r.code, r.dynamic ? "d" : "s");
} return e.join("_"); }
var Xt = `varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`, Kt = `attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`, Se = `
struct ParticleUniforms {
  uTranslationMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uRound:f32,
  uResolution:vec2<f32>,
};

fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
{
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

   if(uniforms.uRound == 1.0) {
       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);
   }

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`;
class $t extends Index_5qXXq_Tx_js_1.s {
    constructor() { const e = Index_5qXXq_Tx_js_1.y.from({ vertex: Kt, fragment: Xt }), t = Index_5qXXq_Tx_js_1.x.from({ fragment: { source: Se, entryPoint: "mainFragment" }, vertex: { source: Se, entryPoint: "mainVertex" } }); super({ glProgram: e, gpuProgram: t, resources: { uTexture: Index_5qXXq_Tx_js_1.t.WHITE.source, uSampler: new Index_5qXXq_Tx_js_1.a0({}), uniforms: { uTranslationMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uColor: { value: new Index_5qXXq_Tx_js_1.a1(16777215), type: "vec4<f32>" }, uRound: { value: 1, type: "f32" }, uResolution: { value: [0, 0], type: "vec2<f32>" } } } }); }
}
class qe {
    constructor(e, t) { this.state = Index_5qXXq_Tx_js_1.S.for2d(), this.localUniforms = new Index_5qXXq_Tx_js_1.l({ uTranslationMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uColor: { value: new Float32Array(4), type: "vec4<f32>" }, uRound: { value: 1, type: "f32" }, uResolution: { value: [0, 0], type: "vec2<f32>" } }), this.renderer = e, this.adaptor = t, this.defaultShader = new $t, this.state = Index_5qXXq_Tx_js_1.S.for2d(), this._managedContainers = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", name: "particleContainer" }); }
    validateRenderable(e) { return !1; }
    addRenderable(e, t) { this.renderer.renderPipes.batch.break(t), t.add(e); }
    getBuffers(e) { return e._gpuData[this.renderer.uid] || this._initBuffer(e); }
    _initBuffer(e) { return e._gpuData[this.renderer.uid] = new Yt({ size: e.particleChildren.length, properties: e._properties }), this._managedContainers.add(e), e._gpuData[this.renderer.uid]; }
    updateRenderable(e) { }
    execute(e) { const t = e.particleChildren; if (t.length === 0)
        return; const r = this.renderer, n = this.getBuffers(e); e.texture || (e.texture = t[0].texture); const i = this.state; n.update(t, e._childrenDirty), e._childrenDirty = !1, i.blendMode = (0, Index_5qXXq_Tx_js_1.al)(e.blendMode, e.texture._source); const s = this.localUniforms.uniforms, a = s.uTranslationMatrix; e.worldTransform.copyTo(a), a.prepend(r.globalUniforms.globalUniformData.projectionMatrix), s.uResolution = r.globalUniforms.globalUniformData.resolution, s.uRound = r._roundPixels | e._roundPixels, (0, colorToUniform_3MxHuUz8_js_1.c)(e.groupColorAlpha, s.uColor, 0), this.adaptor.execute(this, e); }
    destroy() { this._managedContainers.destroy(), this.renderer = null, this.defaultShader && (this.defaultShader.destroy(), this.defaultShader = null); }
}
class Qe extends qe {
    constructor(e) { super(e, new Vt); }
}
Qe.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes], name: "particle" };
class Je extends qe {
    constructor(e) { super(e, new Wt); }
}
Je.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUPipes], name: "particle" };
const Ze = class et extends Et {
    constructor(e = {}) { e = { ...et.defaultOptions, ...e }, super({ width: e.width, height: e.height, verticesX: 4, verticesY: 4 }), this.update(e); }
    update(e) { this.width = e.width ?? this.width, this.height = e.height ?? this.height, this._originalWidth = e.originalWidth ?? this._originalWidth, this._originalHeight = e.originalHeight ?? this._originalHeight, this._leftWidth = e.leftWidth ?? this._leftWidth, this._rightWidth = e.rightWidth ?? this._rightWidth, this._topHeight = e.topHeight ?? this._topHeight, this._bottomHeight = e.bottomHeight ?? this._bottomHeight, this._anchorX = e.anchor?.x, this._anchorY = e.anchor?.y, this.updateUvs(), this.updatePositions(); }
    updatePositions() { const e = this.positions, { width: t, height: r, _leftWidth: n, _rightWidth: i, _topHeight: s, _bottomHeight: a, _anchorX: l, _anchorY: u } = this, h = n + i, c = t > h ? 1 : t / h, d = s + a, f = r > d ? 1 : r / d, m = Math.min(c, f), x = l * t, g = u * r; e[0] = e[8] = e[16] = e[24] = -x, e[2] = e[10] = e[18] = e[26] = n * m - x, e[4] = e[12] = e[20] = e[28] = t - i * m - x, e[6] = e[14] = e[22] = e[30] = t - x, e[1] = e[3] = e[5] = e[7] = -g, e[9] = e[11] = e[13] = e[15] = s * m - g, e[17] = e[19] = e[21] = e[23] = r - a * m - g, e[25] = e[27] = e[29] = e[31] = r - g, this.getBuffer("aPosition").update(); }
    updateUvs() { const e = this.uvs; e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1; const t = 1 / this._originalWidth, r = 1 / this._originalHeight; e[2] = e[10] = e[18] = e[26] = t * this._leftWidth, e[9] = e[11] = e[13] = e[15] = r * this._topHeight, e[4] = e[12] = e[20] = e[28] = 1 - t * this._rightWidth, e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight, this.getBuffer("aUV").update(); }
};
Ze.defaultOptions = { width: 100, height: 100, leftWidth: 10, topHeight: 10, rightWidth: 10, bottomHeight: 10, originalWidth: 100, originalHeight: 100 };
let jt = Ze;
class Nt extends oe {
    constructor() { super(), this.geometry = new jt; }
    destroy() { this.geometry.destroy(); }
}
class tt {
    constructor(e) { this._renderer = e, this._managedSprites = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", name: "nineSliceSprite" }); }
    addRenderable(e, t) { const r = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, r), this._renderer.renderPipes.batch.addToBatch(r, t); }
    updateRenderable(e) { const t = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t); }
    validateRenderable(e) { const t = this._getGpuSprite(e); return !t._batcher.checkAndUpdateTexture(t, e._texture); }
    _updateBatchableSprite(e, t) { t.geometry.update(e), t.setTexture(e._texture); }
    _getGpuSprite(e) { return e._gpuData[this._renderer.uid] || this._initGPUSprite(e); }
    _initGPUSprite(e) { const t = e._gpuData[this._renderer.uid] = new Nt, r = t; return r.renderable = e, r.transform = e.groupTransform, r.texture = e._texture, r.roundPixels = this._renderer._roundPixels | e._roundPixels, this._managedSprites.add(e), e.didViewUpdate || this._updateBatchableSprite(e, r), t; }
    destroy() { this._managedSprites.destroy(), this._renderer = null; }
}
tt.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "nineSliceSprite" };
const qt = { name: "tiling-bit", vertex: { header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `, main: `
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        ` }, fragment: { header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `, main: `

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            }

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        ` } }, Qt = { name: "tiling-bit", vertex: { header: `
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;

        `, main: `
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        ` }, fragment: { header: `
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `, main: `

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

        ` } };
let X, K;
class Jt extends Index_5qXXq_Tx_js_1.s {
    constructor() { X ?? (X = (0, Index_5qXXq_Tx_js_1.n)({ name: "tiling-sprite-shader", bits: [colorToUniform_3MxHuUz8_js_1.a, qt, Index_5qXXq_Tx_js_1.q] })), K ?? (K = (0, Index_5qXXq_Tx_js_1.ab)({ name: "tiling-sprite-shader", bits: [colorToUniform_3MxHuUz8_js_1.b, Qt, Index_5qXXq_Tx_js_1.ae] })); const e = new Index_5qXXq_Tx_js_1.l({ uMapCoord: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uClampFrame: { value: new Float32Array([0, 0, 1, 1]), type: "vec4<f32>" }, uClampOffset: { value: new Float32Array([0, 0]), type: "vec2<f32>" }, uTextureTransform: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uSizeAnchor: { value: new Float32Array([100, 100, .5, .5]), type: "vec4<f32>" } }); super({ glProgram: K, gpuProgram: X, resources: { localUniforms: new Index_5qXXq_Tx_js_1.l({ uTransformMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uRound: { value: 0, type: "f32" } }), tilingUniforms: e, uTexture: Index_5qXXq_Tx_js_1.t.EMPTY.source, uSampler: Index_5qXXq_Tx_js_1.t.EMPTY.source.style } }); }
    updateUniforms(e, t, r, n, i, s) { const a = this.resources.tilingUniforms, l = s.width, u = s.height, h = s.textureMatrix, c = a.uniforms.uTextureTransform; c.set(r.a * l / e, r.b * l / t, r.c * u / e, r.d * u / t, r.tx / e, r.ty / t), c.invert(), a.uniforms.uMapCoord = h.mapCoord, a.uniforms.uClampFrame = h.uClampFrame, a.uniforms.uClampOffset = h.uClampOffset, a.uniforms.uTextureTransform = c, a.uniforms.uSizeAnchor[0] = e, a.uniforms.uSizeAnchor[1] = t, a.uniforms.uSizeAnchor[2] = n, a.uniforms.uSizeAnchor[3] = i, s && (this.resources.uTexture = s.source, this.resources.uSampler = s.source.style); }
}
class Zt extends ae {
    constructor() { super({ positions: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), indices: new Uint32Array([0, 1, 2, 0, 2, 3]) }); }
}
function er(o, e) { const t = o.anchor.x, r = o.anchor.y; e[0] = -t * o.width, e[1] = -r * o.height, e[2] = (1 - t) * o.width, e[3] = -r * o.height, e[4] = (1 - t) * o.width, e[5] = (1 - r) * o.height, e[6] = -t * o.width, e[7] = (1 - r) * o.height; }
function tr(o, e, t, r) { let n = 0; const i = o.length / e, s = r.a, a = r.b, l = r.c, u = r.d, h = r.tx, c = r.ty; for (t *= e; n < i;) {
    const d = o[t], f = o[t + 1];
    o[t] = s * d + l * f + h, o[t + 1] = a * d + u * f + c, t += e, n++;
} }
function rr(o, e) { const t = o.texture, r = t.frame.width, n = t.frame.height; let i = 0, s = 0; o.applyAnchorToTexture && (i = o.anchor.x, s = o.anchor.y), e[0] = e[6] = -i, e[2] = e[4] = 1 - i, e[1] = e[3] = -s, e[5] = e[7] = 1 - s; const a = Index_5qXXq_Tx_js_1.M.shared; a.copyFrom(o._tileTransform.matrix), a.tx /= o.width, a.ty /= o.height, a.invert(), a.scale(o.width / r, o.height / n), tr(e, 2, 0, a); }
const O = new Zt;
class nr {
    constructor() { this.canBatch = !0, this.geometry = new ae({ indices: O.indices.slice(), positions: O.positions.slice(), uvs: O.uvs.slice() }); }
    destroy() { this.geometry.destroy(), this.shader?.destroy(); }
}
class rt {
    constructor(e) { this._state = Index_5qXXq_Tx_js_1.S.default2d, this._renderer = e, this._managedTilingSprites = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", name: "tilingSprite" }); }
    validateRenderable(e) { const t = this._getTilingSpriteData(e), r = t.canBatch; this._updateCanBatch(e); const n = t.canBatch; if (n && n === r) {
        const { batchableMesh: i } = t;
        return !i._batcher.checkAndUpdateTexture(i, e.texture);
    } return r !== n; }
    addRenderable(e, t) { const r = this._renderer.renderPipes.batch; this._updateCanBatch(e); const n = this._getTilingSpriteData(e), { geometry: i, canBatch: s } = n; if (s) {
        n.batchableMesh || (n.batchableMesh = new oe);
        const a = n.batchableMesh;
        e.didViewUpdate && (this._updateBatchableMesh(e), a.geometry = i, a.renderable = e, a.transform = e.groupTransform, a.setTexture(e._texture)), a.roundPixels = this._renderer._roundPixels | e._roundPixels, r.addToBatch(a, t);
    }
    else
        r.break(t), n.shader || (n.shader = new Jt), this.updateRenderable(e), t.add(e); }
    execute(e) { const { shader: t } = this._getTilingSpriteData(e); t.groups[0] = this._renderer.globalUniforms.bindGroup; const r = t.resources.localUniforms.uniforms; r.uTransformMatrix = e.groupTransform, r.uRound = this._renderer._roundPixels | e._roundPixels, (0, colorToUniform_3MxHuUz8_js_1.c)(e.groupColorAlpha, r.uColor, 0), this._state.blendMode = (0, Index_5qXXq_Tx_js_1.al)(e.groupBlendMode, e.texture._source), this._renderer.encoder.draw({ geometry: O, shader: t, state: this._state }); }
    updateRenderable(e) { const t = this._getTilingSpriteData(e), { canBatch: r } = t; if (r) {
        const { batchableMesh: n } = t;
        e.didViewUpdate && this._updateBatchableMesh(e), n._batcher.updateElement(n);
    }
    else if (e.didViewUpdate) {
        const { shader: n } = t;
        n.updateUniforms(e.width, e.height, e._tileTransform.matrix, e.anchor.x, e.anchor.y, e.texture);
    } }
    _getTilingSpriteData(e) { return e._gpuData[this._renderer.uid] || this._initTilingSpriteData(e); }
    _initTilingSpriteData(e) { const t = new nr; return t.renderable = e, e._gpuData[this._renderer.uid] = t, this._managedTilingSprites.add(e), t; }
    _updateBatchableMesh(e) { const t = this._getTilingSpriteData(e), { geometry: r } = t, n = e.texture.source.style; n.addressMode !== "repeat" && (n.addressMode = "repeat", n.update()), rr(e, r.uvs), er(e, r.positions); }
    destroy() { this._managedTilingSprites.destroy(), this._renderer = null; }
    _updateCanBatch(e) { const t = this._getTilingSpriteData(e), r = e.texture; let n = !0; return this._renderer.type === Index_5qXXq_Tx_js_1.R.WEBGL && (n = this._renderer.context.supports.nonPowOf2wrapping), t.canBatch = r.textureMatrix.isSimple && (n || r.source.isPowerOfTwo), t.canBatch; }
}
rt.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "tilingSprite" };
const ir = { name: "local-uniform-msdf-bit", vertex: { header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `, main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `, end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        ` }, fragment: { header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `, main: `
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
        ` } }, sr = { name: "local-uniform-msdf-bit", vertex: { header: `
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `, main: `
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `, end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        ` }, fragment: { header: `
            uniform float uDistance;
         `, main: `
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        ` } }, ar = { name: "msdf-bit", fragment: { header: `
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {

                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;

            }
        ` } }, or = { name: "msdf-bit", fragment: { header: `
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {

                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);

                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);

                return coverage;
            }
        ` } };
let $, j;
class ur extends Index_5qXXq_Tx_js_1.s {
    constructor(e) { const t = new Index_5qXXq_Tx_js_1.l({ uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uTransformMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uDistance: { value: 4, type: "f32" }, uRound: { value: 0, type: "f32" } }); $ ?? ($ = (0, Index_5qXXq_Tx_js_1.n)({ name: "sdf-shader", bits: [Index_5qXXq_Tx_js_1.o, (0, Index_5qXXq_Tx_js_1.p)(e), ir, ar, Index_5qXXq_Tx_js_1.q] })), j ?? (j = (0, Index_5qXXq_Tx_js_1.ab)({ name: "sdf-shader", bits: [Index_5qXXq_Tx_js_1.ac, (0, Index_5qXXq_Tx_js_1.ad)(e), sr, or, Index_5qXXq_Tx_js_1.ae] })), super({ glProgram: j, gpuProgram: $, resources: { localUniforms: t, batchSamplers: (0, Index_5qXXq_Tx_js_1.af)(e) } }); }
}
class lr extends Index_5qXXq_Tx_js_1.aq {
    destroy() { this.context.customShader && this.context.customShader.destroy(), super.destroy(); }
}
class nt {
    constructor(e) { this._renderer = e, this._managedBitmapTexts = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", priority: -2, name: "bitmapText" }); }
    validateRenderable(e) { const t = this._getGpuBitmapText(e); return this._renderer.renderPipes.graphics.validateRenderable(t); }
    addRenderable(e, t) { const r = this._getGpuBitmapText(e); Fe(e, r), e._didTextUpdate && (e._didTextUpdate = !1, this._updateContext(e, r)), this._renderer.renderPipes.graphics.addRenderable(r, t), r.context.customShader && this._updateDistanceField(e); }
    updateRenderable(e) { const t = this._getGpuBitmapText(e); Fe(e, t), this._renderer.renderPipes.graphics.updateRenderable(t), t.context.customShader && this._updateDistanceField(e); }
    _updateContext(e, t) { const { context: r } = t, n = Index_5qXXq_Tx_js_1.an.getFont(e.text, e._style); r.clear(), n.distanceField.type !== "none" && (r.customShader || (r.customShader = new ur(this._renderer.limits.maxBatchableTextures))); const i = Index_5qXXq_Tx_js_1.ah.graphemeSegmenter(e.text), s = e._style; let a = n.baseLineOffset; const l = (0, Index_5qXXq_Tx_js_1.ao)(i, s, n, !0), u = s.padding, h = l.scale; let c = l.width, d = l.height + l.offsetY; s._stroke && (c += s._stroke.width / h, d += s._stroke.width / h), r.translate(-e._anchor._x * c - u, -e._anchor._y * d - u).scale(h, h); const f = n.applyFillAsTint ? s._fill.color : 16777215; let m = n.fontMetrics.fontSize, x = n.lineHeight; s.lineHeight && (m = s.fontSize / h, x = s.lineHeight / h); let g = (x - m) / 2; g - n.baseLineOffset < 0 && (g = 0); for (let _ = 0; _ < l.lines.length; _++) {
        const b = l.lines[_];
        for (let T = 0; T < b.charPositions.length; T++) {
            const z = b.chars[T], F = n.chars[z];
            if (F?.texture) {
                const D = F.texture;
                r.texture(D, f || "black", Math.round(b.charPositions[T] + F.xOffset), Math.round(a + F.yOffset + g), D.orig.width, D.orig.height);
            }
        }
        a += x;
    } }
    _getGpuBitmapText(e) { return e._gpuData[this._renderer.uid] || this.initGpuText(e); }
    initGpuText(e) { const t = new lr; return e._gpuData[this._renderer.uid] = t, this._updateContext(e, t), this._managedBitmapTexts.add(e), t; }
    _updateDistanceField(e) { const t = this._getGpuBitmapText(e).context, r = e._style.fontFamily, n = Index_5qXXq_Tx_js_1.ap.get(`${r}-bitmap`), { a: i, b: s, c: a, d: l } = e.groupTransform, u = Math.sqrt(i * i + s * s), h = Math.sqrt(a * a + l * l), c = (Math.abs(u) + Math.abs(h)) / 2, d = n.baseRenderedFontSize / e._style.fontSize, f = c * n.distanceField.range * (1 / d); t.customShader.resources.localUniforms.uniforms.uDistance = f; }
    destroy() { this._managedBitmapTexts.destroy(), this._renderer = null, this._managedBitmapTexts = null; }
}
nt.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "bitmapText" };
function Fe(o, e) { e.groupTransform = o.groupTransform, e.groupColorAlpha = o.groupColorAlpha, e.groupColor = o.groupColor, e.groupBlendMode = o.groupBlendMode, e.globalDisplayStatus = o.globalDisplayStatus, e.groupTransform = o.groupTransform, e.localDisplayStatus = o.localDisplayStatus, e.groupAlpha = o.groupAlpha, e._roundPixels = o._roundPixels; }
class cr extends colorToUniform_3MxHuUz8_js_1.B {
    constructor() { super(...arguments), this.generatingTexture = !1, this.currentKey = "--"; }
    destroy() { this.texturePromise = null, this.generatingTexture = !1, this.currentKey = "--", super.destroy(); }
}
function te(o, e) { const { texture: t, bounds: r } = o, n = e._style._getFinalPadding(); (0, Index_5qXXq_Tx_js_1.ar)(r, e._anchor, t); const i = e._anchor._x * n * 2, s = e._anchor._y * n * 2; r.minX -= n - i, r.minY -= n - s, r.maxX -= n - i, r.maxY -= n - s; }
class it {
    constructor(e) { this._renderer = e, e.runners.resolutionChange.add(this), this._managedTexts = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", onUnload: this.onTextUnload.bind(this), name: "htmlText" }); }
    resolutionChange() { for (const e in this._managedTexts.items) {
        const t = this._managedTexts.items[e];
        t?._autoResolution && t.onViewUpdate();
    } }
    validateRenderable(e) { const t = this._getGpuText(e), r = e.styleKey; return t.currentKey !== r; }
    addRenderable(e, t) { const r = this._getGpuText(e); if (e._didTextUpdate) {
        const n = e._autoResolution ? this._renderer.resolution : e.resolution;
        (r.currentKey !== e.styleKey || e.resolution !== n) && this._updateGpuText(e).catch(i => { console.error(i); }), e._didTextUpdate = !1, te(r, e);
    } this._renderer.renderPipes.batch.addToBatch(r, t); }
    updateRenderable(e) { const t = this._getGpuText(e); t._batcher.updateElement(t); }
    async _updateGpuText(e) { e._didTextUpdate = !1; const t = this._getGpuText(e); if (t.generatingTexture)
        return; const r = t.texturePromise; t.texturePromise = null, t.generatingTexture = !0, e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution; let n = this._renderer.htmlText.getTexturePromise(e); r && (n = n.finally(() => { this._renderer.htmlText.decreaseReferenceCount(t.currentKey), this._renderer.htmlText.returnTexturePromise(r); })), t.texturePromise = n, t.currentKey = e.styleKey, t.texture = await n; const i = e.renderGroup || e.parentRenderGroup; i && (i.structureDidChange = !0), t.generatingTexture = !1, te(t, e); }
    _getGpuText(e) { return e._gpuData[this._renderer.uid] || this.initGpuText(e); }
    initGpuText(e) { const t = new cr; return t.renderable = e, t.transform = e.groupTransform, t.texture = Index_5qXXq_Tx_js_1.t.EMPTY, t.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution, e._gpuData[this._renderer.uid] = t, this._managedTexts.add(e), t; }
    onTextUnload(e) { const t = e._gpuData[this._renderer.uid]; if (!t)
        return; const { htmlText: r } = this._renderer; r.getReferenceCount(t.currentKey) === null ? r.returnTexturePromise(t.texturePromise) : r.decreaseReferenceCount(t.currentKey); }
    destroy() { this._managedTexts.destroy(), this._renderer = null; }
}
it.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "htmlText" };
function dr() { const { userAgent: o } = Index_5qXXq_Tx_js_1.D.get().getNavigator(); return /^((?!chrome|android).)*safari/i.test(o); }
const hr = new Index_5qXXq_Tx_js_1.J;
function st(o, e, t, r) { const n = hr; n.minX = 0, n.minY = 0, n.maxX = o.width / r | 0, n.maxY = o.height / r | 0; const i = Index_5qXXq_Tx_js_1.K.getOptimalTexture(n.width, n.height, r, !1); return i.source.uploadMethodId = "image", i.source.resource = o, i.source.alphaMode = "premultiply-alpha-on-upload", i.frame.width = e / r, i.frame.height = t / r, i.source.emit("update", i.source), i.updateUvs(), i; }
function fr(o, e) { const t = e.fontFamily, r = [], n = {}, i = /font-family:([^;"\s]+)/g, s = o.match(i); function a(l) { n[l] || (r.push(l), n[l] = !0); } if (Array.isArray(t))
    for (let l = 0; l < t.length; l++)
        a(t[l]);
else
    a(t); s && s.forEach(l => { const u = l.split(":")[1].trim(); a(u); }); for (const l in e.tagStyles) {
    const u = e.tagStyles[l].fontFamily;
    a(u);
} return r; }
async function pr(o) { const t = await (await Index_5qXXq_Tx_js_1.D.get().fetch(o)).blob(), r = new FileReader; return await new Promise((i, s) => { r.onloadend = () => i(r.result), r.onerror = s, r.readAsDataURL(t); }); }
async function mr(o, e) {
    const t = await pr(e);
    return `@font-face {
        font-family: "${o.fontFamily}";
        font-weight: ${o.fontWeight};
        font-style: ${o.fontStyle};
        src: url('${t}');
    }`;
}
const N = new Map;
async function gr(o) {
    const e = o.filter(t => Index_5qXXq_Tx_js_1.ap.has(`${t}-and-url`)).map(t => {
        if (!N.has(t)) {
            const { entries: r } = Index_5qXXq_Tx_js_1.ap.get(`${t}-and-url`), n = [];
            r.forEach(i => { const s = i.url, l = i.faces.map(u => ({ weight: u.weight, style: u.style })); n.push(...l.map(u => mr({ fontWeight: u.weight, fontStyle: u.style, fontFamily: t }, s))); }), N.set(t, Promise.all(n).then(i => i.join(`
`)));
        }
        return N.get(t);
    });
    return (await Promise.all(e)).join(`
`);
}
function xr(o, e, t, r, n) { const { domElement: i, styleElement: s, svgRoot: a } = n; i.innerHTML = `<style>${e.cssStyle}</style><div style='padding:0;'>${o}</div>`, i.setAttribute("style", `transform: scale(${t});transform-origin: top left; display: inline-block`), s.textContent = r; const { width: l, height: u } = n.image; return a.setAttribute("width", l.toString()), a.setAttribute("height", u.toString()), new XMLSerializer().serializeToString(a); }
function _r(o, e) { const t = Index_5qXXq_Tx_js_1.m.getOptimalCanvasAndContext(o.width, o.height, e), { context: r } = t; return r.clearRect(0, 0, o.width, o.height), r.drawImage(o, 0, 0), t; }
function br(o, e, t) { return new Promise(async (r) => { t && await new Promise(n => setTimeout(n, 100)), o.onload = () => { r(); }, o.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`, o.crossOrigin = "anonymous"; }); }
class at {
    constructor(e) { this._activeTextures = {}, this._renderer = e, this._createCanvas = e.type === Index_5qXXq_Tx_js_1.R.WEBGPU; }
    getTexture(e) { return this.getTexturePromise(e); }
    getManagedTexture(e) { const t = e.styleKey; if (this._activeTextures[t])
        return this._increaseReferenceCount(t), this._activeTextures[t].promise; const r = this._buildTexturePromise(e).then(n => (this._activeTextures[t].texture = n, n)); return this._activeTextures[t] = { texture: null, promise: r, usageCount: 1 }, r; }
    getReferenceCount(e) { return this._activeTextures[e]?.usageCount ?? null; }
    _increaseReferenceCount(e) { this._activeTextures[e].usageCount++; }
    decreaseReferenceCount(e) { const t = this._activeTextures[e]; t && (t.usageCount--, t.usageCount === 0 && (t.texture ? this._cleanUp(t.texture) : t.promise.then(r => { t.texture = r, this._cleanUp(t.texture); }).catch(() => { (0, Index_5qXXq_Tx_js_1.w)("HTMLTextSystem: Failed to clean texture"); }), this._activeTextures[e] = null)); }
    getTexturePromise(e) { return this._buildTexturePromise(e); }
    async _buildTexturePromise(e) { const { text: t, style: r, resolution: n, textureStyle: i } = e, s = Index_5qXXq_Tx_js_1.H.get(Xe), a = fr(t, r), l = await gr(a), u = Ot(t, r, l, s), h = Math.ceil(Math.ceil(Math.max(1, u.width) + r.padding * 2) * n), c = Math.ceil(Math.ceil(Math.max(1, u.height) + r.padding * 2) * n), d = s.image, f = 2; d.width = (h | 0) + f, d.height = (c | 0) + f; const m = xr(t, r, n, l, s); await br(d, m, dr() && a.length > 0); const x = d; let g; this._createCanvas && (g = _r(d, n)); const _ = st(g ? g.canvas : x, d.width - f, d.height - f, n); return i && (_.source.style = i), this._createCanvas && (this._renderer.texture.initSource(_.source), Index_5qXXq_Tx_js_1.m.returnCanvasAndContext(g)), Index_5qXXq_Tx_js_1.H.return(s), _; }
    returnTexturePromise(e) { e.then(t => { this._cleanUp(t); }).catch(() => { (0, Index_5qXXq_Tx_js_1.w)("HTMLTextSystem: Failed to clean texture"); }); }
    _cleanUp(e) { Index_5qXXq_Tx_js_1.K.returnTexture(e, !0), e.source.resource = null, e.source.uploadMethodId = "unknown"; }
    destroy() { this._renderer = null; for (const e in this._activeTextures)
        this._activeTextures[e] && this.returnTexturePromise(this._activeTextures[e].promise); this._activeTextures = null; }
}
at.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "htmlText" };
class vr extends colorToUniform_3MxHuUz8_js_1.B {
}
class ot {
    constructor(e) { this._renderer = e, e.runners.resolutionChange.add(this), this._managedTexts = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "renderable", onUnload: this.onTextUnload.bind(this), name: "canvasText" }); }
    resolutionChange() { for (const e in this._managedTexts.items) {
        const t = this._managedTexts.items[e];
        t?._autoResolution && t.onViewUpdate();
    } }
    validateRenderable(e) { const t = this._getGpuText(e), r = e.styleKey; return t.currentKey !== r ? !0 : e._didTextUpdate; }
    addRenderable(e, t) { const r = this._getGpuText(e); if (e._didTextUpdate) {
        const n = e._autoResolution ? this._renderer.resolution : e.resolution;
        (r.currentKey !== e.styleKey || e.resolution !== n) && this._updateGpuText(e), e._didTextUpdate = !1, te(r, e);
    } this._renderer.renderPipes.batch.addToBatch(r, t); }
    updateRenderable(e) { const t = this._getGpuText(e); t._batcher.updateElement(t); }
    _updateGpuText(e) { const t = this._getGpuText(e); t.texture && this._renderer.canvasText.decreaseReferenceCount(t.currentKey), e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution, t.texture = this._renderer.canvasText.getManagedTexture(e), t.currentKey = e.styleKey; }
    _getGpuText(e) { return e._gpuData[this._renderer.uid] || this.initGpuText(e); }
    initGpuText(e) { const t = new vr; return t.currentKey = "--", t.renderable = e, t.transform = e.groupTransform, t.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, this._managedTexts.add(e), t; }
    onTextUnload(e) { const t = e._gpuData[this._renderer.uid]; if (!t)
        return; const { canvasText: r } = this._renderer; r.getReferenceCount(t.currentKey) > 0 ? r.decreaseReferenceCount(t.currentKey) : t.texture && r.returnTexture(t.texture); }
    destroy() { this._managedTexts.destroy(), this._renderer = null; }
}
ot.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "text" };
class ut {
    constructor(e) { this._activeTextures = {}, this._renderer = e; }
    getTexture(e, t, r, n) { typeof e == "string" && ((0, Index_5qXXq_Tx_js_1.a6)("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"), e = { text: e, style: r, resolution: t }), e.style instanceof Index_5qXXq_Tx_js_1.as || (e.style = new Index_5qXXq_Tx_js_1.as(e.style)), e.textureStyle instanceof Index_5qXXq_Tx_js_1.a0 || (e.textureStyle = new Index_5qXXq_Tx_js_1.a0(e.textureStyle)), typeof e.text != "string" && (e.text = e.text.toString()); const { text: i, style: s, textureStyle: a } = e, l = e.resolution ?? this._renderer.resolution, { frame: u, canvasAndContext: h } = H.getCanvasAndContext({ text: i, style: s, resolution: l }), c = st(h.canvas, u.width, u.height, l); if (a && (c.source.style = a), s.trim && (u.pad(s.padding), c.frame.copyFrom(u), c.frame.scale(1 / l), c.updateUvs()), s.filters) {
        const d = this._applyFilters(c, s.filters);
        return this.returnTexture(c), H.returnCanvasAndContext(h), d;
    } return this._renderer.texture.initSource(c._source), H.returnCanvasAndContext(h), c; }
    returnTexture(e) { const t = e.source; t.resource = null, t.uploadMethodId = "unknown", t.alphaMode = "no-premultiply-alpha", Index_5qXXq_Tx_js_1.K.returnTexture(e, !0); }
    renderTextToCanvas() { (0, Index_5qXXq_Tx_js_1.a6)("8.10.0", "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead"); }
    getManagedTexture(e) { e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution; const t = e.styleKey; if (this._activeTextures[t])
        return this._increaseReferenceCount(t), this._activeTextures[t].texture; const r = this.getTexture({ text: e.text, style: e.style, resolution: e._resolution, textureStyle: e.textureStyle }); return this._activeTextures[t] = { texture: r, usageCount: 1 }, r; }
    decreaseReferenceCount(e) { const t = this._activeTextures[e]; t.usageCount--, t.usageCount === 0 && (this.returnTexture(t.texture), this._activeTextures[e] = null); }
    getReferenceCount(e) { return this._activeTextures[e]?.usageCount ?? 0; }
    _increaseReferenceCount(e) { this._activeTextures[e].usageCount++; }
    _applyFilters(e, t) { const r = this._renderer.renderTarget.renderTarget, n = this._renderer.filter.generateFilteredTexture({ texture: e, filters: t }); return this._renderer.renderTarget.bind(r, !1), n; }
    destroy() { this._renderer = null; for (const e in this._activeTextures)
        this._activeTextures[e] && this.returnTexture(this._activeTextures[e].texture); this._activeTextures = null; }
}
ut.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem], name: "canvasText" };
Index_5qXXq_Tx_js_1.e.add(Ee);
Index_5qXXq_Tx_js_1.e.add(Ve);
Index_5qXXq_Tx_js_1.e.add(Ke);
Index_5qXXq_Tx_js_1.e.add(Index_5qXXq_Tx_js_1.at);
Index_5qXXq_Tx_js_1.e.add(Ne);
Index_5qXXq_Tx_js_1.e.add(Qe);
Index_5qXXq_Tx_js_1.e.add(Je);
Index_5qXXq_Tx_js_1.e.add(ut);
Index_5qXXq_Tx_js_1.e.add(ot);
Index_5qXXq_Tx_js_1.e.add(nt);
Index_5qXXq_Tx_js_1.e.add(at);
Index_5qXXq_Tx_js_1.e.add(it);
Index_5qXXq_Tx_js_1.e.add(rt);
Index_5qXXq_Tx_js_1.e.add(tt);
Index_5qXXq_Tx_js_1.e.add(Le);
Index_5qXXq_Tx_js_1.e.add(We);

},
"./browserAll-D_MQFbOH.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_5qXXq_Tx_js_1 = require("./Index-5qXXq-Tx.js");
require("./init-BM_z7ZKv.js");
require("./colorToUniform-3MxHuUz8.js");
class q {
    constructor(e) { this._lastTransform = "", this._observer = null, this._tickerAttached = !1, this.updateTranslation = () => { if (!this._canvas)
        return; const t = this._canvas.getBoundingClientRect(), i = this._canvas.width, n = this._canvas.height, s = t.width / i * this._renderer.resolution, o = t.height / n * this._renderer.resolution, r = t.left, l = t.top, d = `translate(${r}px, ${l}px) scale(${s}, ${o})`; d !== this._lastTransform && (this._domElement.style.transform = d, this._lastTransform = d); }, this._domElement = e.domElement, this._renderer = e.renderer, !(globalThis.OffscreenCanvas && this._renderer.canvas instanceof OffscreenCanvas) && (this._canvas = this._renderer.canvas, this._attachObserver()); }
    get canvas() { return this._canvas; }
    ensureAttached() { !this._domElement.parentNode && this._canvas.parentNode && (this._canvas.parentNode.appendChild(this._domElement), this.updateTranslation()); }
    _attachObserver() { "ResizeObserver" in globalThis ? (this._observer && (this._observer.disconnect(), this._observer = null), this._observer = new ResizeObserver(e => { for (const t of e) {
        if (t.target !== this._canvas)
            continue;
        const i = this.canvas.width, n = this.canvas.height, s = t.contentRect.width / i * this._renderer.resolution, o = t.contentRect.height / n * this._renderer.resolution;
        (this._lastScaleX !== s || this._lastScaleY !== o) && (this.updateTranslation(), this._lastScaleX = s, this._lastScaleY = o);
    } }), this._observer.observe(this._canvas)) : this._tickerAttached || Index_5qXXq_Tx_js_1.T.shared.add(this.updateTranslation, this, Index_5qXXq_Tx_js_1.U.HIGH); }
    destroy() { this._observer ? (this._observer.disconnect(), this._observer = null) : this._tickerAttached && Index_5qXXq_Tx_js_1.T.shared.remove(this.updateTranslation), this._domElement = null, this._renderer = null, this._canvas = null, this._tickerAttached = !1, this._lastTransform = "", this._lastScaleX = null, this._lastScaleY = null; }
}
class w {
    constructor(e) { this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = w.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new Index_5qXXq_Tx_js_1.P, this.page = new Index_5qXXq_Tx_js_1.P, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = e; }
    get layerX() { return this.layer.x; }
    get layerY() { return this.layer.y; }
    get pageX() { return this.page.x; }
    get pageY() { return this.page.y; }
    get data() { return this; }
    composedPath() { return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path; }
    initEvent(e, t, i) { throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."); }
    initUIEvent(e, t, i, n, s) { throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."); }
    preventDefault() { this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0; }
    stopImmediatePropagation() { this.propagationImmediatelyStopped = !0; }
    stopPropagation() { this.propagationStopped = !0; }
}
var I = /iPhone/i, B = /iPod/i, C = /iPad/i, U = /\biOS-universal(?:.+)Mac\b/i, k = /\bAndroid(?:.+)Mobile\b/i, R = /Android/i, b = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, O = /Silk/i, v = /Windows Phone/i, X = /\bWindows(?:.+)ARM\b/i, Y = /BlackBerry/i, H = /BB10/i, F = /Opera Mini/i, N = /\b(CriOS|Chrome)(?:.+)Mobile/i, $ = /Mobile(?:.+)Firefox\b/i, K = function (a) { return typeof a < "u" && a.platform === "MacIntel" && typeof a.maxTouchPoints == "number" && a.maxTouchPoints > 1 && typeof MSStream > "u"; };
function ne(a) { return function (e) { return e.test(a); }; }
function G(a) { var e = { userAgent: "", platform: "", maxTouchPoints: 0 }; !a && typeof navigator < "u" ? e = { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints || 0 } : typeof a == "string" ? e.userAgent = a : a && a.userAgent && (e = { userAgent: a.userAgent, platform: a.platform, maxTouchPoints: a.maxTouchPoints || 0 }); var t = e.userAgent, i = t.split("[FBAN"); typeof i[1] < "u" && (t = i[0]), i = t.split("Twitter"), typeof i[1] < "u" && (t = i[0]); var n = ne(t), s = { apple: { phone: n(I) && !n(v), ipod: n(B), tablet: !n(I) && (n(C) || K(e)) && !n(v), universal: n(U), device: (n(I) || n(B) || n(C) || n(U) || K(e)) && !n(v) }, amazon: { phone: n(b), tablet: !n(b) && n(O), device: n(b) || n(O) }, android: { phone: !n(v) && n(b) || !n(v) && n(k), tablet: !n(v) && !n(b) && !n(k) && (n(O) || n(R)), device: !n(v) && (n(b) || n(O) || n(k) || n(R)) || n(/\bokhttp\b/i) }, windows: { phone: n(v), tablet: n(X), device: n(v) || n(X) }, other: { blackberry: n(Y), blackberry10: n(H), opera: n(F), firefox: n($), chrome: n(N), device: n(Y) || n(H) || n(F) || n($) || n(N) }, any: !1, phone: !1, tablet: !1 }; return s.any = s.apple.device || s.android.device || s.windows.device || s.other.device, s.phone = s.apple.phone || s.android.phone || s.windows.phone, s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet, s; }
const se = G.default ?? G, oe = se(globalThis.navigator), re = 9, W = 100, ae = 0, le = 0, j = 2, z = 1, he = -1e3, ce = -1e3, de = 2, L = class J {
    constructor(e, t = oe) { this._mobileInfo = t, this.debug = !1, this._activateOnTab = !0, this._deactivateOnMouseMove = !0, this._isActive = !1, this._isMobileAccessibility = !1, this._div = null, this._pools = {}, this._renderId = 0, this._children = [], this._androidUpdateCount = 0, this._androidUpdateFrequency = 500, this._isRunningTests = !1, this._boundOnKeyDown = this._onKeyDown.bind(this), this._boundOnMouseMove = this._onMouseMove.bind(this), this._hookDiv = null, (t.tablet || t.phone) && this._createTouchHook(), this._renderer = e; }
    get isActive() { return this._isActive; }
    get isMobileAccessibility() { return this._isMobileAccessibility; }
    get hookDiv() { return this._hookDiv; }
    get div() { return this._div; }
    _createTouchHook() { const e = document.createElement("button"); e.style.width = `${z}px`, e.style.height = `${z}px`, e.style.position = "absolute", e.style.top = `${he}px`, e.style.left = `${ce}px`, e.style.zIndex = de.toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", () => { this._isMobileAccessibility = !0, this._activate(), this._destroyTouchHook(); }), document.body.appendChild(e), this._hookDiv = e; }
    _destroyTouchHook() { this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null); }
    _activate() { if (this._isActive)
        return; this._isActive = !0, this._div || (this._div = document.createElement("div"), this._div.style.position = "absolute", this._div.style.top = `${ae}px`, this._div.style.left = `${le}px`, this._div.style.pointerEvents = "none", this._div.style.zIndex = j.toString(), this._canvasObserver = new q({ domElement: this._div, renderer: this._renderer })), this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1), this._deactivateOnMouseMove && globalThis.document.addEventListener("mousemove", this._boundOnMouseMove, !0); const e = this._renderer.view.canvas; if (e.parentNode)
        this._canvasObserver.ensureAttached(), this._initAccessibilitySetup();
    else {
        const t = new MutationObserver(() => { e.parentNode && (t.disconnect(), this._canvasObserver.ensureAttached(), this._initAccessibilitySetup()); });
        t.observe(document.body, { childList: !0, subtree: !0 });
    } }
    _initAccessibilitySetup() { this._renderer.runners.postrender.add(this), this._renderer.lastObjectRendered && this._updateAccessibleObjects(this._renderer.lastObjectRendered); }
    _deactivate() { if (!(!this._isActive || this._isMobileAccessibility)) {
        this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0), this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1), this._renderer.runners.postrender.remove(this);
        for (const e of this._children)
            e._accessibleDiv?.parentNode && (e._accessibleDiv.parentNode.removeChild(e._accessibleDiv), e._accessibleDiv = null), e._accessibleActive = !1;
        for (const e in this._pools)
            this._pools[e].forEach(i => { i.parentNode && i.parentNode.removeChild(i); }), delete this._pools[e];
        this._div?.parentNode && this._div.parentNode.removeChild(this._div), this._pools = {}, this._children = [];
    } }
    _updateAccessibleObjects(e) { if (!e.visible || !e.accessibleChildren)
        return; e.accessible && (e._accessibleActive || this._addChild(e), e._renderId = this._renderId); const t = e.children; if (t)
        for (let i = 0; i < t.length; i++)
            this._updateAccessibleObjects(t[i]); }
    init(e) { const i = { accessibilityOptions: { ...J.defaultOptions, ...e?.accessibilityOptions || {} } }; this.debug = i.accessibilityOptions.debug, this._activateOnTab = i.accessibilityOptions.activateOnTab, this._deactivateOnMouseMove = i.accessibilityOptions.deactivateOnMouseMove, i.accessibilityOptions.enabledByDefault && this._activate(), this._renderer.runners.postrender.remove(this); }
    postrender() { const e = performance.now(); if (this._mobileInfo.android.device && e < this._androidUpdateCount || (this._androidUpdateCount = e + this._androidUpdateFrequency, (!this._renderer.renderingToScreen || !this._renderer.view.canvas) && !this._isRunningTests))
        return; const t = new Set; if (this._renderer.lastObjectRendered) {
        this._updateAccessibleObjects(this._renderer.lastObjectRendered);
        for (const i of this._children)
            i._renderId === this._renderId && t.add(this._children.indexOf(i));
    } for (let i = this._children.length - 1; i >= 0; i--) {
        const n = this._children[i];
        t.has(i) || (n._accessibleDiv && n._accessibleDiv.parentNode && (n._accessibleDiv.parentNode.removeChild(n._accessibleDiv), this._getPool(n.accessibleType).push(n._accessibleDiv), n._accessibleDiv = null), n._accessibleActive = !1, (0, Index_5qXXq_Tx_js_1.r)(this._children, i, 1));
    } this._renderer.renderingToScreen && this._canvasObserver.ensureAttached(); for (let i = 0; i < this._children.length; i++) {
        const n = this._children[i];
        if (!n._accessibleActive || !n._accessibleDiv)
            continue;
        const s = n._accessibleDiv, o = n.hitArea || n.getBounds().rectangle;
        if (n.hitArea) {
            const r = n.worldTransform;
            s.style.left = `${r.tx + o.x * r.a}px`, s.style.top = `${r.ty + o.y * r.d}px`, s.style.width = `${o.width * r.a}px`, s.style.height = `${o.height * r.d}px`;
        }
        else
            this._capHitArea(o), s.style.left = `${o.x}px`, s.style.top = `${o.y}px`, s.style.width = `${o.width}px`, s.style.height = `${o.height}px`;
    } this._renderId++; }
    _updateDebugHTML(e) { e.innerHTML = `type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`; }
    _capHitArea(e) { e.x < 0 && (e.width += e.x, e.x = 0), e.y < 0 && (e.height += e.y, e.y = 0); const { width: t, height: i } = this._renderer; e.x + e.width > t && (e.width = t - e.x), e.y + e.height > i && (e.height = i - e.y); }
    _addChild(e) {
        let i = this._getPool(e.accessibleType).pop();
        i ? (i.innerHTML = "", i.removeAttribute("title"), i.removeAttribute("aria-label"), i.tabIndex = 0) : (e.accessibleType === "button" ? i = document.createElement("button") : (i = document.createElement(e.accessibleType), i.style.cssText = `
                        color: transparent;
                        pointer-events: none;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        outline: 0;
                        background: transparent;
                        box-sizing: border-box;
                        user-select: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                    `, e.accessibleText && (i.innerText = e.accessibleText)), i.style.width = `${W}px`, i.style.height = `${W}px`, i.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", i.style.position = "absolute", i.style.zIndex = j.toString(), i.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? i.setAttribute("aria-live", "off") : i.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? i.setAttribute("aria-relevant", "additions") : i.setAttribute("aria-relevant", "text"), i.addEventListener("click", this._onClick.bind(this)), i.addEventListener("focus", this._onFocus.bind(this)), i.addEventListener("focusout", this._onFocusOut.bind(this))), i.style.pointerEvents = e.accessiblePointerEvents, i.type = e.accessibleType, e.accessibleTitle && e.accessibleTitle !== null ? i.title = e.accessibleTitle : (!e.accessibleHint || e.accessibleHint === null) && (i.title = `container ${e.tabIndex}`), e.accessibleHint && e.accessibleHint !== null && i.setAttribute("aria-label", e.accessibleHint), e.interactive ? i.tabIndex = e.tabIndex : i.tabIndex = 0, this.debug && this._updateDebugHTML(i), e._accessibleActive = !0, e._accessibleDiv = i, i.container = e, this._children.push(e), this._div.appendChild(e._accessibleDiv);
    }
    _dispatchEvent(e, t) { const { container: i } = e.target, n = this._renderer.events.rootBoundary, s = Object.assign(new w(n), { target: i }); n.rootTarget = this._renderer.lastObjectRendered, t.forEach(o => n.dispatchEvent(s, o)); }
    _onClick(e) { this._dispatchEvent(e, ["click", "pointertap", "tap"]); }
    _onFocus(e) { e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(e, ["mouseover"]); }
    _onFocusOut(e) { e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite"), this._dispatchEvent(e, ["mouseout"]); }
    _onKeyDown(e) { e.keyCode !== re || !this._activateOnTab || this._activate(); }
    _onMouseMove(e) { e.movementX === 0 && e.movementY === 0 || this._deactivate(); }
    destroy() { this._deactivate(), this._destroyTouchHook(), this._canvasObserver?.destroy(), this._canvasObserver = null, this._div = null, this._pools = null, this._children = null, this._renderer = null, this._hookDiv = null, globalThis.removeEventListener("keydown", this._boundOnKeyDown), this._boundOnKeyDown = null, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0), this._boundOnMouseMove = null; }
    setAccessibilityEnabled(e) { e ? this._activate() : this._deactivate(); }
    _getPool(e) { return this._pools[e] || (this._pools[e] = []), this._pools[e]; }
};
L.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "accessibility" };
L.defaultOptions = { enabledByDefault: !1, debug: !1, activateOnTab: !0, deactivateOnMouseMove: !0 };
let ue = L;
const pe = { accessible: !1, accessibleTitle: null, accessibleHint: null, tabIndex: 0, accessibleType: "button", accessibleText: null, accessiblePointerEvents: "auto", accessibleChildren: !0, _accessibleActive: !1, _accessibleDiv: null, _renderId: -1 };
class Q {
    constructor(e) { this._attachedDomElements = [], this._renderer = e, this._renderer.runners.postrender.add(this), this._renderer.runners.init.add(this), this._domElement = document.createElement("div"), this._domElement.style.position = "absolute", this._domElement.style.top = "0", this._domElement.style.left = "0", this._domElement.style.pointerEvents = "none", this._domElement.style.zIndex = "1000"; }
    init() { this._canvasObserver = new q({ domElement: this._domElement, renderer: this._renderer }); }
    addRenderable(e, t) { this._attachedDomElements.includes(e) || this._attachedDomElements.push(e); }
    updateRenderable(e) { }
    validateRenderable(e) { return !0; }
    postrender() { const e = this._attachedDomElements; if (e.length === 0) {
        this._domElement.remove();
        return;
    } this._canvasObserver.ensureAttached(); for (let t = 0; t < e.length; t++) {
        const i = e[t], n = i.element;
        if (!i.parent || i.globalDisplayStatus < 7)
            n?.remove(), e.splice(t, 1), t--;
        else {
            this._domElement.contains(n) || (n.style.position = "absolute", n.style.pointerEvents = "auto", this._domElement.appendChild(n));
            const s = i.worldTransform, o = i._anchor, r = i.width * o.x, l = i.height * o.y;
            n.style.transformOrigin = `${r}px ${l}px`, n.style.transform = `matrix(${s.a}, ${s.b}, ${s.c}, ${s.d}, ${s.tx - r}, ${s.ty - l})`, n.style.opacity = i.groupAlpha.toString();
        }
    } }
    destroy() { this._renderer.runners.postrender.remove(this); for (let e = 0; e < this._attachedDomElements.length; e++)
        this._attachedDomElements[e].element?.remove(); this._attachedDomElements.length = 0, this._domElement.remove(), this._canvasObserver.destroy(), this._renderer = null; }
}
Q.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGLPipes, Index_5qXXq_Tx_js_1.E.WebGPUPipes, Index_5qXXq_Tx_js_1.E.CanvasPipes], name: "dom" };
class ve {
    constructor() { this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0; }
    init(e) { this.removeTickerListener(), this.events = e, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0; }
    get pauseUpdate() { return this._pauseUpdate; }
    set pauseUpdate(e) { this._pauseUpdate = e; }
    addTickerListener() { this._tickerAdded || !this.domElement || (Index_5qXXq_Tx_js_1.T.system.add(this._tickerUpdate, this, Index_5qXXq_Tx_js_1.U.INTERACTION), this._tickerAdded = !0); }
    removeTickerListener() { this._tickerAdded && (Index_5qXXq_Tx_js_1.T.system.remove(this._tickerUpdate, this), this._tickerAdded = !1); }
    pointerMoved() { this._didMove = !0; }
    _update() { if (!this.domElement || this._pauseUpdate)
        return; if (this._didMove) {
        this._didMove = !1;
        return;
    } const e = this.events._rootPointerEvent; this.events.supportsTouchEvents && e.pointerType === "touch" || globalThis.document.dispatchEvent(this.events.supportsPointerEvents ? new PointerEvent("pointermove", { clientX: e.clientX, clientY: e.clientY, pointerType: e.pointerType, pointerId: e.pointerId }) : new MouseEvent("mousemove", { clientX: e.clientX, clientY: e.clientY })); }
    _tickerUpdate(e) { this._deltaTime += e.deltaTime, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this._update()); }
    destroy() { this.removeTickerListener(), this.events = null, this.domElement = null, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0; }
}
const m = new ve;
class A extends w {
    constructor() { super(...arguments), this.client = new Index_5qXXq_Tx_js_1.P, this.movement = new Index_5qXXq_Tx_js_1.P, this.offset = new Index_5qXXq_Tx_js_1.P, this.global = new Index_5qXXq_Tx_js_1.P, this.screen = new Index_5qXXq_Tx_js_1.P; }
    get clientX() { return this.client.x; }
    get clientY() { return this.client.y; }
    get x() { return this.clientX; }
    get y() { return this.clientY; }
    get movementX() { return this.movement.x; }
    get movementY() { return this.movement.y; }
    get offsetX() { return this.offset.x; }
    get offsetY() { return this.offset.y; }
    get globalX() { return this.global.x; }
    get globalY() { return this.global.y; }
    get screenX() { return this.screen.x; }
    get screenY() { return this.screen.y; }
    getLocalPosition(e, t, i) { return e.worldTransform.applyInverse(i || this.global, t); }
    getModifierState(e) { return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e); }
    initMouseEvent(e, t, i, n, s, o, r, l, d, h, _, c, p, D, Ee) { throw new Error("Method not implemented."); }
}
class u extends A {
    constructor() { super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1; }
    getCoalescedEvents() { return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : []; }
    getPredictedEvents() { throw new Error("getPredictedEvents is not supported!"); }
}
class E extends A {
    constructor() { super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2; }
}
E.DOM_DELTA_PIXEL = 0;
E.DOM_DELTA_LINE = 1;
E.DOM_DELTA_PAGE = 2;
const me = 2048, fe = new Index_5qXXq_Tx_js_1.P, T = new Index_5qXXq_Tx_js_1.P;
class _e {
    constructor(e) { this.dispatch = new Index_5qXXq_Tx_js_1.a, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = { trackingData: {} }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = e, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel); }
    addEventMapping(e, t) { this.mappingTable[e] || (this.mappingTable[e] = []), this.mappingTable[e].push({ fn: t, priority: 0 }), this.mappingTable[e].sort((i, n) => i.priority - n.priority); }
    dispatchEvent(e, t) { e.propagationStopped = !1, e.propagationImmediatelyStopped = !1, this.propagate(e, t), this.dispatch.emit(t || e.type, e); }
    mapEvent(e) { if (!this.rootTarget)
        return; const t = this.mappingTable[e.type]; if (t)
        for (let i = 0, n = t.length; i < n; i++)
            t[i].fn(e);
    else
        (0, Index_5qXXq_Tx_js_1.w)(`[EventBoundary]: Event mapping not defined for ${e.type}`); }
    hitTest(e, t) { m.pauseUpdate = !0; const n = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", s = this[n](this.rootTarget, this.rootTarget.eventMode, fe.set(e, t), this.hitTestFn, this.hitPruneFn); return s && s[0]; }
    propagate(e, t) { if (!e.target)
        return; const i = e.composedPath(); e.eventPhase = e.CAPTURING_PHASE; for (let n = 0, s = i.length - 1; n < s; n++)
        if (e.currentTarget = i[n], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped)
            return; if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, t), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
        e.eventPhase = e.BUBBLING_PHASE;
        for (let n = i.length - 2; n >= 0; n--)
            if (e.currentTarget = i[n], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped)
                return;
    } }
    all(e, t, i = this._allInteractiveElements) { if (i.length === 0)
        return; e.eventPhase = e.BUBBLING_PHASE; const n = Array.isArray(t) ? t : [t]; for (let s = i.length - 1; s >= 0; s--)
        n.forEach(o => { e.currentTarget = i[s], this.notifyTarget(e, o); }); }
    propagationPath(e) { const t = [e]; for (let i = 0; i < me && e !== this.rootTarget && e.parent; i++) {
        if (!e.parent)
            throw new Error("Cannot find propagation path to disconnected target");
        t.push(e.parent), e = e.parent;
    } return t.reverse(), t; }
    hitTestMoveRecursive(e, t, i, n, s, o = !1) { let r = !1; if (this._interactivePrune(e))
        return null; if ((e.eventMode === "dynamic" || t === "dynamic") && (m.pauseUpdate = !1), e.interactiveChildren && e.children) {
        const h = e.children;
        for (let _ = h.length - 1; _ >= 0; _--) {
            const c = h[_], p = this.hitTestMoveRecursive(c, this._isInteractive(t) ? t : c.eventMode, i, n, s, o || s(e, i));
            if (p) {
                if (p.length > 0 && !p[p.length - 1].parent)
                    continue;
                const D = e.isInteractive();
                (p.length > 0 || D) && (D && this._allInteractiveElements.push(e), p.push(e)), this._hitElements.length === 0 && (this._hitElements = p), r = !0;
            }
        }
    } const l = this._isInteractive(t), d = e.isInteractive(); return d && d && this._allInteractiveElements.push(e), o || this._hitElements.length > 0 ? null : r ? this._hitElements : l && !s(e, i) && n(e, i) ? d ? [e] : [] : null; }
    hitTestRecursive(e, t, i, n, s) { if (this._interactivePrune(e) || s(e, i))
        return null; if ((e.eventMode === "dynamic" || t === "dynamic") && (m.pauseUpdate = !1), e.interactiveChildren && e.children) {
        const l = e.children, d = i;
        for (let h = l.length - 1; h >= 0; h--) {
            const _ = l[h], c = this.hitTestRecursive(_, this._isInteractive(t) ? t : _.eventMode, d, n, s);
            if (c) {
                if (c.length > 0 && !c[c.length - 1].parent)
                    continue;
                const p = e.isInteractive();
                return (c.length > 0 || p) && c.push(e), c;
            }
        }
    } const o = this._isInteractive(t), r = e.isInteractive(); return o && n(e, i) ? r ? [e] : [] : null; }
    _isInteractive(e) { return e === "static" || e === "dynamic"; }
    _interactivePrune(e) { return !e || !e.visible || !e.renderable || !e.measurable || e.eventMode === "none" || e.eventMode === "passive" && !e.interactiveChildren; }
    hitPruneFn(e, t) { if (e.hitArea && (e.worldTransform.applyInverse(t, T), !e.hitArea.contains(T.x, T.y)))
        return !0; if (e.effects && e.effects.length)
        for (let i = 0; i < e.effects.length; i++) {
            const n = e.effects[i];
            if (n.containsPoint && !n.containsPoint(t, this.hitTestFn))
                return !0;
        } return !1; }
    hitTestFn(e, t) { return e.hitArea ? !0 : e?.containsPoint ? (e.worldTransform.applyInverse(t, T), e.containsPoint(T)) : !1; }
    notifyTarget(e, t) { if (!e.currentTarget.isInteractive())
        return; t ?? (t = e.type); const i = `on${t}`; e.currentTarget[i]?.(e); const n = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${t}capture` : t; this._notifyListeners(e, n), e.eventPhase === e.AT_TARGET && this._notifyListeners(e, t); }
    mapPointerDown(e) { if (!(e instanceof u)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } const t = this.createPointerEvent(e); if (this.dispatchEvent(t, "pointerdown"), t.pointerType === "touch")
        this.dispatchEvent(t, "touchstart");
    else if (t.pointerType === "mouse" || t.pointerType === "pen") {
        const n = t.button === 2;
        this.dispatchEvent(t, n ? "rightdown" : "mousedown");
    } const i = this.trackingData(e.pointerId); i.pressTargetsByButton[e.button] = t.composedPath(), this.freeEvent(t); }
    mapPointerMove(e) { if (!(e instanceof u)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0; const t = this.createPointerEvent(e); this._isPointerMoveEvent = !1; const i = t.pointerType === "mouse" || t.pointerType === "pen", n = this.trackingData(e.pointerId), s = this.findMountedTarget(n.overTargets); if (n.overTargets?.length > 0 && s !== t.target) {
        const l = e.type === "mousemove" ? "mouseout" : "pointerout", d = this.createPointerEvent(e, l, s);
        if (this.dispatchEvent(d, "pointerout"), i && this.dispatchEvent(d, "mouseout"), !t.composedPath().includes(s)) {
            const h = this.createPointerEvent(e, "pointerleave", s);
            for (h.eventPhase = h.AT_TARGET; h.target && !t.composedPath().includes(h.target);)
                h.currentTarget = h.target, this.notifyTarget(h), i && this.notifyTarget(h, "mouseleave"), h.target = h.target.parent;
            this.freeEvent(h);
        }
        this.freeEvent(d);
    } if (s !== t.target) {
        const l = e.type === "mousemove" ? "mouseover" : "pointerover", d = this.clonePointerEvent(t, l);
        this.dispatchEvent(d, "pointerover"), i && this.dispatchEvent(d, "mouseover");
        let h = s?.parent;
        for (; h && h !== this.rootTarget.parent && h !== t.target;)
            h = h.parent;
        if (!h || h === this.rootTarget.parent) {
            const c = this.clonePointerEvent(t, "pointerenter");
            for (c.eventPhase = c.AT_TARGET; c.target && c.target !== s && c.target !== this.rootTarget.parent;)
                c.currentTarget = c.target, this.notifyTarget(c), i && this.notifyTarget(c, "mouseenter"), c.target = c.target.parent;
            this.freeEvent(c);
        }
        this.freeEvent(d);
    } const o = [], r = this.enableGlobalMoveEvents ?? !0; this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(t, "pointermove"), r && o.push("globalpointermove"), t.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(t, "touchmove"), r && o.push("globaltouchmove")), i && (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(t, "mousemove"), r && o.push("globalmousemove"), this.cursor = t.target?.cursor), o.length > 0 && this.all(t, o), this._allInteractiveElements.length = 0, this._hitElements.length = 0, n.overTargets = t.composedPath(), this.freeEvent(t); }
    mapPointerOver(e) { if (!(e instanceof u)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } const t = this.trackingData(e.pointerId), i = this.createPointerEvent(e), n = i.pointerType === "mouse" || i.pointerType === "pen"; this.dispatchEvent(i, "pointerover"), n && this.dispatchEvent(i, "mouseover"), i.pointerType === "mouse" && (this.cursor = i.target?.cursor); const s = this.clonePointerEvent(i, "pointerenter"); for (s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent;)
        s.currentTarget = s.target, this.notifyTarget(s), n && this.notifyTarget(s, "mouseenter"), s.target = s.target.parent; t.overTargets = i.composedPath(), this.freeEvent(i), this.freeEvent(s); }
    mapPointerOut(e) { if (!(e instanceof u)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } const t = this.trackingData(e.pointerId); if (t.overTargets) {
        const i = e.pointerType === "mouse" || e.pointerType === "pen", n = this.findMountedTarget(t.overTargets), s = this.createPointerEvent(e, "pointerout", n);
        this.dispatchEvent(s), i && this.dispatchEvent(s, "mouseout");
        const o = this.createPointerEvent(e, "pointerleave", n);
        for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)
            o.currentTarget = o.target, this.notifyTarget(o), i && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
        t.overTargets = null, this.freeEvent(s), this.freeEvent(o);
    } this.cursor = null; }
    mapPointerUp(e) { if (!(e instanceof u)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } const t = performance.now(), i = this.createPointerEvent(e); if (this.dispatchEvent(i, "pointerup"), i.pointerType === "touch")
        this.dispatchEvent(i, "touchend");
    else if (i.pointerType === "mouse" || i.pointerType === "pen") {
        const r = i.button === 2;
        this.dispatchEvent(i, r ? "rightup" : "mouseup");
    } const n = this.trackingData(e.pointerId), s = this.findMountedTarget(n.pressTargetsByButton[e.button]); let o = s; if (s && !i.composedPath().includes(s)) {
        let r = s;
        for (; r && !i.composedPath().includes(r);) {
            if (i.currentTarget = r, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch")
                this.notifyTarget(i, "touchendoutside");
            else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                const l = i.button === 2;
                this.notifyTarget(i, l ? "rightupoutside" : "mouseupoutside");
            }
            r = r.parent;
        }
        delete n.pressTargetsByButton[e.button], o = r;
    } if (o) {
        const r = this.clonePointerEvent(i, "click");
        r.target = o, r.path = null, n.clicksByButton[e.button] || (n.clicksByButton[e.button] = { clickCount: 0, target: r.target, timeStamp: t });
        const l = n.clicksByButton[e.button];
        if (l.target === r.target && t - l.timeStamp < 200 ? ++l.clickCount : l.clickCount = 1, l.target = r.target, l.timeStamp = t, r.detail = l.clickCount, r.pointerType === "mouse") {
            const d = r.button === 2;
            this.dispatchEvent(r, d ? "rightclick" : "click");
        }
        else
            r.pointerType === "touch" && this.dispatchEvent(r, "tap");
        this.dispatchEvent(r, "pointertap"), this.freeEvent(r);
    } this.freeEvent(i); }
    mapPointerUpOutside(e) { if (!(e instanceof u)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } const t = this.trackingData(e.pointerId), i = this.findMountedTarget(t.pressTargetsByButton[e.button]), n = this.createPointerEvent(e); if (i) {
        let s = i;
        for (; s;)
            n.currentTarget = s, this.notifyTarget(n, "pointerupoutside"), n.pointerType === "touch" ? this.notifyTarget(n, "touchendoutside") : (n.pointerType === "mouse" || n.pointerType === "pen") && this.notifyTarget(n, n.button === 2 ? "rightupoutside" : "mouseupoutside"), s = s.parent;
        delete t.pressTargetsByButton[e.button];
    } this.freeEvent(n); }
    mapWheel(e) { if (!(e instanceof E)) {
        (0, Index_5qXXq_Tx_js_1.w)("EventBoundary cannot map a non-wheel event as a wheel event");
        return;
    } const t = this.createWheelEvent(e); this.dispatchEvent(t), this.freeEvent(t); }
    findMountedTarget(e) { if (!e)
        return null; let t = e[0]; for (let i = 1; i < e.length && e[i].parent === t; i++)
        t = e[i]; return t; }
    createPointerEvent(e, t, i) { const n = this.allocateEvent(u); return this.copyPointerData(e, n), this.copyMouseData(e, n), this.copyData(e, n), n.nativeEvent = e.nativeEvent, n.originalEvent = e, n.target = i ?? this.hitTest(n.global.x, n.global.y) ?? this._hitElements[0], typeof t == "string" && (n.type = t), n; }
    createWheelEvent(e) { const t = this.allocateEvent(E); return this.copyWheelData(e, t), this.copyMouseData(e, t), this.copyData(e, t), t.nativeEvent = e.nativeEvent, t.originalEvent = e, t.target = this.hitTest(t.global.x, t.global.y), t; }
    clonePointerEvent(e, t) { const i = this.allocateEvent(u); return i.nativeEvent = e.nativeEvent, i.originalEvent = e.originalEvent, this.copyPointerData(e, i), this.copyMouseData(e, i), this.copyData(e, i), i.target = e.target, i.path = e.composedPath().slice(), i.type = t ?? i.type, i; }
    copyWheelData(e, t) { t.deltaMode = e.deltaMode, t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ; }
    copyPointerData(e, t) { e instanceof u && t instanceof u && (t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist); }
    copyMouseData(e, t) { e instanceof A && t instanceof A && (t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.copyFrom(e.client), t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.copyFrom(e.movement), t.screen.copyFrom(e.screen), t.shiftKey = e.shiftKey, t.global.copyFrom(e.global)); }
    copyData(e, t) { t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.detail = e.detail, t.view = e.view, t.which = e.which, t.layer.copyFrom(e.layer), t.page.copyFrom(e.page); }
    trackingData(e) { return this.mappingState.trackingData[e] || (this.mappingState.trackingData[e] = { pressTargetsByButton: {}, clicksByButton: {}, overTarget: null }), this.mappingState.trackingData[e]; }
    allocateEvent(e) { this.eventPool.has(e) || this.eventPool.set(e, []); const t = this.eventPool.get(e).pop() || new e(this); return t.eventPhase = t.NONE, t.currentTarget = null, t.defaultPrevented = !1, t.path = null, t.target = null, t; }
    freeEvent(e) { if (e.manager !== this)
        throw new Error("It is illegal to free an event not managed by this EventBoundary!"); const t = e.constructor; this.eventPool.has(t) || this.eventPool.set(t, []), this.eventPool.get(t).push(e); }
    _notifyListeners(e, t) { const i = e.currentTarget._events[t]; if (i)
        if ("fn" in i)
            i.once && e.currentTarget.removeListener(t, i.fn, void 0, !0), i.fn.call(i.context, e);
        else
            for (let n = 0, s = i.length; n < s && !e.propagationImmediatelyStopped; n++)
                i[n].once && e.currentTarget.removeListener(t, i[n].fn, void 0, !0), i[n].fn.call(i[n].context, e); }
}
const ge = 1, ye = { touchstart: "pointerdown", touchend: "pointerup", touchendoutside: "pointerupoutside", touchmove: "pointermove", touchcancel: "pointercancel" }, S = class x {
    constructor(e) { this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new _e(null), m.init(this), this.autoPreventDefault = !0, this._eventsAdded = !1, this._rootPointerEvent = new u(null), this._rootWheelEvent = new E(null), this.cursorStyles = { default: "inherit", pointer: "pointer" }, this.features = new Proxy({ ...x.defaultEventFeatures }, { set: (t, i, n) => (i === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = n), t[i] = n, !0) }), this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._onPointerOverOut = this._onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this); }
    static get defaultEventMode() { return this._defaultEventMode; }
    init(e) { const { canvas: t, resolution: i } = this.renderer; this.setTargetElement(t), this.resolution = i, x._defaultEventMode = e.eventMode ?? "passive", Object.assign(this.features, e.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove; }
    resolutionChange(e) { this.resolution = e; }
    destroy() { m.destroy(), this.setTargetElement(null), this.renderer = null, this._currentCursor = null; }
    setCursor(e) { e || (e = "default"); let t = !0; if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (t = !1), this._currentCursor === e)
        return; this._currentCursor = e; const i = this.cursorStyles[e]; if (i)
        switch (typeof i) {
            case "string":
                t && (this.domElement.style.cursor = i);
                break;
            case "function":
                i(e);
                break;
            case "object":
                t && Object.assign(this.domElement.style, i);
                break;
        }
    else
        t && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e); }
    get pointer() { return this._rootPointerEvent; }
    _onPointerDown(e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; const t = this._normalizeToPointerData(e); this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault(); for (let i = 0, n = t.length; i < n; i++) {
        const s = t[i], o = this._bootstrapEvent(this._rootPointerEvent, s);
        this.rootBoundary.mapEvent(o);
    } this.setCursor(this.rootBoundary.cursor); }
    _onPointerMove(e) { if (!this.features.move)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, m.pointerMoved(); const t = this._normalizeToPointerData(e); for (let i = 0, n = t.length; i < n; i++) {
        const s = this._bootstrapEvent(this._rootPointerEvent, t[i]);
        this.rootBoundary.mapEvent(s);
    } this.setCursor(this.rootBoundary.cursor); }
    _onPointerUp(e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; let t = e.target; e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]); const i = t !== this.domElement ? "outside" : "", n = this._normalizeToPointerData(e); for (let s = 0, o = n.length; s < o; s++) {
        const r = this._bootstrapEvent(this._rootPointerEvent, n[s]);
        r.type += i, this.rootBoundary.mapEvent(r);
    } this.setCursor(this.rootBoundary.cursor); }
    _onPointerOverOut(e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; const t = this._normalizeToPointerData(e); for (let i = 0, n = t.length; i < n; i++) {
        const s = this._bootstrapEvent(this._rootPointerEvent, t[i]);
        this.rootBoundary.mapEvent(s);
    } this.setCursor(this.rootBoundary.cursor); }
    onWheel(e) { if (!this.features.wheel)
        return; const t = this.normalizeWheelEvent(e); this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(t); }
    setTargetElement(e) { this._removeEvents(), this.domElement = e, m.domElement = e, this._addEvents(); }
    _addEvents() { if (this._eventsAdded || !this.domElement)
        return; m.addTickerListener(); const e = this.domElement.style; e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this._onPointerMove, !0), this.domElement.addEventListener("pointerdown", this._onPointerDown, !0), this.domElement.addEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this._onPointerOverOut, !0), globalThis.addEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this._onPointerMove, !0), this.domElement.addEventListener("mousedown", this._onPointerDown, !0), this.domElement.addEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this._onPointerOverOut, !0), globalThis.addEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this._onPointerDown, !0), this.domElement.addEventListener("touchend", this._onPointerUp, !0), this.domElement.addEventListener("touchmove", this._onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, { passive: !0, capture: !0 }), this._eventsAdded = !0; }
    _removeEvents() { if (!this._eventsAdded || !this.domElement)
        return; m.removeTickerListener(); const e = this.domElement.style; e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = "")), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this._onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this._onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this._onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this._onPointerMove, !0), this.domElement.removeEventListener("mousedown", this._onPointerDown, !0), this.domElement.removeEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this._onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this._onPointerDown, !0), this.domElement.removeEventListener("touchend", this._onPointerUp, !0), this.domElement.removeEventListener("touchmove", this._onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this._eventsAdded = !1; }
    mapPositionToPoint(e, t, i) { const n = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : { width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 }, s = 1 / this.resolution; e.x = (t - n.left) * (this.domElement.width / n.width) * s, e.y = (i - n.top) * (this.domElement.height / n.height) * s; }
    _normalizeToPointerData(e) { const t = []; if (this.supportsTouchEvents && e instanceof TouchEvent)
        for (let i = 0, n = e.changedTouches.length; i < n; i++) {
            const s = e.changedTouches[i];
            typeof s.button > "u" && (s.button = 0), typeof s.buttons > "u" && (s.buttons = 1), typeof s.isPrimary > "u" && (s.isPrimary = e.touches.length === 1 && e.type === "touchstart"), typeof s.width > "u" && (s.width = s.radiusX || 1), typeof s.height > "u" && (s.height = s.radiusY || 1), typeof s.tiltX > "u" && (s.tiltX = 0), typeof s.tiltY > "u" && (s.tiltY = 0), typeof s.pointerType > "u" && (s.pointerType = "touch"), typeof s.pointerId > "u" && (s.pointerId = s.identifier || 0), typeof s.pressure > "u" && (s.pressure = s.force || .5), typeof s.twist > "u" && (s.twist = 0), typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0), typeof s.layerX > "u" && (s.layerX = s.offsetX = s.clientX), typeof s.layerY > "u" && (s.layerY = s.offsetY = s.clientY), s.isNormalized = !0, s.type = e.type, t.push(s);
        }
    else if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
        const i = e;
        typeof i.isPrimary > "u" && (i.isPrimary = !0), typeof i.width > "u" && (i.width = 1), typeof i.height > "u" && (i.height = 1), typeof i.tiltX > "u" && (i.tiltX = 0), typeof i.tiltY > "u" && (i.tiltY = 0), typeof i.pointerType > "u" && (i.pointerType = "mouse"), typeof i.pointerId > "u" && (i.pointerId = ge), typeof i.pressure > "u" && (i.pressure = .5), typeof i.twist > "u" && (i.twist = 0), typeof i.tangentialPressure > "u" && (i.tangentialPressure = 0), i.isNormalized = !0, t.push(i);
    }
    else
        t.push(e); return t; }
    normalizeWheelEvent(e) { const t = this._rootWheelEvent; return this._transferMouseData(t, e), t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ, t.deltaMode = e.deltaMode, this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.nativeEvent = e, t.type = e.type, t; }
    _bootstrapEvent(e, t) { return e.originalEvent = null, e.nativeEvent = t, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this._transferMouseData(e, t), this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = t.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = ye[e.type] || e.type), e; }
    _transferMouseData(e, t) { e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.relatedTarget = null, e.shiftKey = t.shiftKey; }
};
S.extension = { name: "events", type: [Index_5qXXq_Tx_js_1.E.WebGLSystem, Index_5qXXq_Tx_js_1.E.CanvasSystem, Index_5qXXq_Tx_js_1.E.WebGPUSystem], priority: -1 };
S.defaultEventFeatures = { move: !0, globalMove: !0, click: !0, wheel: !0 };
let ee = S;
const be = { onclick: null, onmousedown: null, onmouseenter: null, onmouseleave: null, onmousemove: null, onglobalmousemove: null, onmouseout: null, onmouseover: null, onmouseup: null, onmouseupoutside: null, onpointercancel: null, onpointerdown: null, onpointerenter: null, onpointerleave: null, onpointermove: null, onglobalpointermove: null, onpointerout: null, onpointerover: null, onpointertap: null, onpointerup: null, onpointerupoutside: null, onrightclick: null, onrightdown: null, onrightup: null, onrightupoutside: null, ontap: null, ontouchcancel: null, ontouchend: null, ontouchendoutside: null, ontouchmove: null, onglobaltouchmove: null, ontouchstart: null, onwheel: null, get interactive() { return this.eventMode === "dynamic" || this.eventMode === "static"; }, set interactive(a) { this.eventMode = a ? "static" : "passive"; }, _internalEventMode: void 0, get eventMode() { return this._internalEventMode ?? ee.defaultEventMode; }, set eventMode(a) { this._internalEventMode = a; }, isInteractive() { return this.eventMode === "static" || this.eventMode === "dynamic"; }, interactiveChildren: !0, hitArea: null, addEventListener(a, e, t) { const i = typeof t == "boolean" && t || typeof t == "object" && t.capture, n = typeof t == "object" ? t.signal : void 0, s = typeof t == "object" ? t.once === !0 : !1, o = typeof e == "function" ? void 0 : e; a = i ? `${a}capture` : a; const r = typeof e == "function" ? e : e.handleEvent, l = this; n && n.addEventListener("abort", () => { l.off(a, r, o); }), s ? l.once(a, r, o) : l.on(a, r, o); }, removeEventListener(a, e, t) { const i = typeof t == "boolean" && t || typeof t == "object" && t.capture, n = typeof e == "function" ? void 0 : e; a = i ? `${a}capture` : a, e = typeof e == "function" ? e : e.handleEvent, this.off(a, e, n); }, dispatchEvent(a) { if (!(a instanceof w))
        throw new Error("Container cannot propagate events outside of the Federated Events API"); return a.defaultPrevented = !1, a.path = null, a.target = this, a.manager.dispatchEvent(a), !a.defaultPrevented; } };
Index_5qXXq_Tx_js_1.e.add(ue);
Index_5qXXq_Tx_js_1.e.mixin(Index_5qXXq_Tx_js_1.C, pe);
Index_5qXXq_Tx_js_1.e.add(ee);
Index_5qXXq_Tx_js_1.e.mixin(Index_5qXXq_Tx_js_1.C, be);
Index_5qXXq_Tx_js_1.e.add(Q);

},
"./webworkerAll-DVlzi99H.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./init-BM_z7ZKv.js");
require("./Index-5qXXq-Tx.js");
require("./colorToUniform-3MxHuUz8.js");

},
"./WebGPURenderer-CVAMSaC2.js":function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebGPURenderer = void 0;
const Index_5qXXq_Tx_js_1 = require("./Index-5qXXq-Tx.js");
const colorToUniform_3MxHuUz8_js_1 = require("./colorToUniform-3MxHuUz8.js");
const SharedSystems_tBvOkzj9_js_1 = require("./SharedSystems-tBvOkzj9.js");
const y = Index_5qXXq_Tx_js_1.S.for2d();
class W {
    start(e, t, r) { const s = e.renderer, i = s.encoder, n = r.gpuProgram; this._shader = r, this._geometry = t, i.setGeometry(t, n), y.blendMode = "normal", s.pipeline.getPipeline(t, n, y); const o = s.globalUniforms.bindGroup; i.resetBindGroup(1), i.setBindGroup(0, o, n); }
    execute(e, t) { const r = this._shader.gpuProgram, s = e.renderer, i = s.encoder; if (!t.bindGroup) {
        const u = t.textures;
        t.bindGroup = (0, Index_5qXXq_Tx_js_1.g)(u.textures, u.count, s.limits.maxBatchableTextures);
    } y.blendMode = t.blendMode; const n = s.bindGroup.getBindGroup(t.bindGroup, r, 1), o = s.pipeline.getPipeline(this._geometry, r, y, t.topology); t.bindGroup._touch(s.gc.now, s.tick), i.setPipeline(o), i.renderPassEncoder.setBindGroup(1, n), i.renderPassEncoder.drawIndexed(t.size, 1, t.start); }
}
W.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUPipesAdaptor], name: "batch" };
class H {
    constructor(e) { this._hash = Object.create(null), this._renderer = e; }
    contextChange(e) { this._gpu = e; }
    getBindGroup(e, t, r) { return e._updateKey(), this._hash[e._key] || this._createBindGroup(e, t, r); }
    _createBindGroup(e, t, r) { const s = this._gpu.device, i = t.layout[r], n = [], o = this._renderer; for (const l in i) {
        const p = e.resources[l] ?? e.resources[i[l]];
        let h;
        if (p._resourceType === "uniformGroup") {
            const d = p;
            o.ubo.updateUniformGroup(d);
            const _ = d.buffer;
            h = { buffer: o.buffer.getGPUBuffer(_), offset: 0, size: _.descriptor.size };
        }
        else if (p._resourceType === "buffer") {
            const d = p;
            h = { buffer: o.buffer.getGPUBuffer(d), offset: 0, size: d.descriptor.size };
        }
        else if (p._resourceType === "bufferResource") {
            const d = p;
            h = { buffer: o.buffer.getGPUBuffer(d.buffer), offset: d.offset, size: d.size };
        }
        else if (p._resourceType === "textureSampler") {
            const d = p;
            h = o.texture.getGpuSampler(d);
        }
        else if (p._resourceType === "textureSource") {
            const d = p;
            h = o.texture.getGpuSource(d).createView();
        }
        n.push({ binding: i[l], resource: h });
    } const u = o.shader.getProgramData(t).bindGroups[r], c = s.createBindGroup({ layout: u, entries: n }); return this._hash[e._key] = c, c; }
    destroy() { this._hash = null, this._renderer = null; }
}
H.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "bindGroup" };
class Me {
    constructor(e) { this.gpuBuffer = e; }
    destroy() { this.gpuBuffer.destroy(), this.gpuBuffer = null; }
}
class V {
    constructor(e) { this._renderer = e, this._managedBuffers = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "resource", onUnload: this.onBufferUnload.bind(this), name: "gpuBuffer" }); }
    contextChange(e) { this._gpu = e; }
    getGPUBuffer(e) { return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid]?.gpuBuffer || this.createGPUBuffer(e); }
    updateBuffer(e) { const t = this.getGPUBuffer(e), r = e.data; return e._updateID && r && (e._updateID = 0, this._gpu.device.queue.writeBuffer(t, 0, r.buffer, 0, (e._updateSize || r.byteLength) + 3 & -4)), t; }
    destroyAll() { this._managedBuffers.removeAll(); }
    onBufferUnload(e) { e.off("update", this.updateBuffer, this), e.off("change", this.onBufferChange, this); }
    createGPUBuffer(e) { const t = this._gpu.device.createBuffer(e.descriptor); return e._updateID = 0, e._resourceId = (0, Index_5qXXq_Tx_js_1.u)("resource"), e.data && ((0, Index_5qXXq_Tx_js_1.f)(e.data.buffer, t.getMappedRange()), t.unmap()), e._gpuData[this._renderer.uid] = new Me(t), this._managedBuffers.add(e) && (e.on("update", this.updateBuffer, this), e.on("change", this.onBufferChange, this)), t; }
    onBufferChange(e) { this._managedBuffers.remove(e), e._updateID = 0, this.createGPUBuffer(e); }
    destroy() { this._managedBuffers.destroy(), this._renderer = null, this._gpu = null; }
}
V.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "buffer" };
class we {
    constructor({ minUniformOffsetAlignment: e }) { this._minUniformOffsetAlignment = 256, this.byteIndex = 0, this._minUniformOffsetAlignment = e, this.data = new Float32Array(65535); }
    clear() { this.byteIndex = 0; }
    addEmptyGroup(e) { if (e > this._minUniformOffsetAlignment / 4)
        throw new Error(`UniformBufferBatch: array is too large: ${e * 4}`); const t = this.byteIndex; let r = t + e * 4; if (r = Math.ceil(r / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment, r > this.data.length * 4)
        throw new Error("UniformBufferBatch: ubo batch got too big"); return this.byteIndex = r, t; }
    addGroup(e) { const t = this.addEmptyGroup(e.length); for (let r = 0; r < e.length; r++)
        this.data[t / 4 + r] = e[r]; return t; }
    destroy() { this.data = null; }
}
class N {
    constructor(e) { this._colorMaskCache = 15, this._renderer = e; }
    setMask(e) { this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.pipeline.setColorMask(e)); }
    destroy() { this._renderer = null, this._colorMaskCache = null; }
}
N.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "colorMask" };
class U {
    constructor(e) { this._renderer = e; }
    async init(e) { return this._initPromise ? this._initPromise : (this._initPromise = (e.gpu ? Promise.resolve(e.gpu) : this._createDeviceAndAdaptor(e)).then(t => { this.gpu = t, this._renderer.runners.contextChange.emit(this.gpu); }), this._initPromise); }
    contextChange(e) { this._renderer.gpu = e; }
    async _createDeviceAndAdaptor(e) { const t = await Index_5qXXq_Tx_js_1.D.get().getNavigator().gpu.requestAdapter({ powerPreference: e.powerPreference, forceFallbackAdapter: e.forceFallbackAdapter }), r = ["texture-compression-bc", "texture-compression-astc", "texture-compression-etc2"].filter(i => t.features.has(i)), s = await t.requestDevice({ requiredFeatures: r }); return { adapter: t, device: s }; }
    destroy() { this.gpu = null, this._renderer = null; }
}
U.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "device" };
U.defaultOptions = { powerPreference: void 0, forceFallbackAdapter: !1 };
class j {
    constructor(e) { this._boundBindGroup = Object.create(null), this._boundVertexBuffer = Object.create(null), this._renderer = e; }
    renderStart() { this.commandFinished = new Promise(e => { this._resolveCommandFinished = e; }), this.commandEncoder = this._renderer.gpu.device.createCommandEncoder(); }
    beginRenderPass(e) { this.endRenderPass(), this._clearCache(), this.renderPassEncoder = this.commandEncoder.beginRenderPass(e.descriptor); }
    endRenderPass() { this.renderPassEncoder && this.renderPassEncoder.end(), this.renderPassEncoder = null; }
    setViewport(e) { this.renderPassEncoder.setViewport(e.x, e.y, e.width, e.height, 0, 1); }
    setPipelineFromGeometryProgramAndState(e, t, r, s) { const i = this._renderer.pipeline.getPipeline(e, t, r, s); this.setPipeline(i); }
    setPipeline(e) { this._boundPipeline !== e && (this._boundPipeline = e, this.renderPassEncoder.setPipeline(e)); }
    _setVertexBuffer(e, t) { this._boundVertexBuffer[e] !== t && (this._boundVertexBuffer[e] = t, this.renderPassEncoder.setVertexBuffer(e, this._renderer.buffer.updateBuffer(t))); }
    _setIndexBuffer(e) { if (this._boundIndexBuffer === e)
        return; this._boundIndexBuffer = e; const t = e.data.BYTES_PER_ELEMENT === 2 ? "uint16" : "uint32"; this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e), t); }
    resetBindGroup(e) { this._boundBindGroup[e] = null; }
    setBindGroup(e, t, r) { if (this._boundBindGroup[e] === t)
        return; this._boundBindGroup[e] = t, t._touch(this._renderer.gc.now, this._renderer.tick); const s = this._renderer.bindGroup.getBindGroup(t, r, e); this.renderPassEncoder.setBindGroup(e, s); }
    setGeometry(e, t) { const r = this._renderer.pipeline.getBufferNamesToBind(e, t); for (const s in r)
        this._setVertexBuffer(parseInt(s, 10), e.attributes[r[s]].buffer); e.indexBuffer && this._setIndexBuffer(e.indexBuffer); }
    _setShaderBindGroups(e, t) { for (const r in e.groups) {
        const s = e.groups[r];
        t || this._syncBindGroup(s), this.setBindGroup(r, s, e.gpuProgram);
    } }
    _syncBindGroup(e) { for (const t in e.resources) {
        const r = e.resources[t];
        r.isUniformGroup && this._renderer.ubo.updateUniformGroup(r);
    } }
    draw(e) { const { geometry: t, shader: r, state: s, topology: i, size: n, start: o, instanceCount: u, skipSync: c } = e; this.setPipelineFromGeometryProgramAndState(t, r.gpuProgram, s, i), this.setGeometry(t, r.gpuProgram), this._setShaderBindGroups(r, c), t.indexBuffer ? this.renderPassEncoder.drawIndexed(n || t.indexBuffer.data.length, u ?? t.instanceCount, o || 0) : this.renderPassEncoder.draw(n || t.getSize(), u ?? t.instanceCount, o || 0); }
    finishRenderPass() { this.renderPassEncoder && (this.renderPassEncoder.end(), this.renderPassEncoder = null); }
    postrender() { this.finishRenderPass(), this._gpu.device.queue.submit([this.commandEncoder.finish()]), this._resolveCommandFinished(), this.commandEncoder = null; }
    restoreRenderPass() { const e = this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget, !1, [0, 0, 0, 1]); this.renderPassEncoder = this.commandEncoder.beginRenderPass(e); const t = this._boundPipeline, r = { ...this._boundVertexBuffer }, s = this._boundIndexBuffer, i = { ...this._boundBindGroup }; this._clearCache(); const n = this._renderer.renderTarget.viewport; this.renderPassEncoder.setViewport(n.x, n.y, n.width, n.height, 0, 1), this.setPipeline(t); for (const o in r)
        this._setVertexBuffer(o, r[o]); for (const o in i)
        this.setBindGroup(o, i[o], null); this._setIndexBuffer(s); }
    _clearCache() { for (let e = 0; e < 16; e++)
        this._boundBindGroup[e] = null, this._boundVertexBuffer[e] = null; this._boundIndexBuffer = null, this._boundPipeline = null; }
    destroy() { this._renderer = null, this._gpu = null, this._boundBindGroup = null, this._boundVertexBuffer = null, this._boundIndexBuffer = null, this._boundPipeline = null; }
    contextChange(e) { this._gpu = e; }
}
j.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "encoder", priority: 1 };
class K {
    constructor(e) { this._renderer = e; }
    contextChange() { this.maxTextures = this._renderer.device.gpu.device.limits.maxSampledTexturesPerShaderStage, this.maxBatchableTextures = this.maxTextures; }
    destroy() { }
}
K.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "limits" };
class q {
    constructor(e) { this._renderTargetStencilState = Object.create(null), this._renderer = e, e.renderTarget.onRenderTargetChange.add(this); }
    onRenderTargetChange(e) { let t = this._renderTargetStencilState[e.uid]; t || (t = this._renderTargetStencilState[e.uid] = { stencilMode: Index_5qXXq_Tx_js_1.b.DISABLED, stencilReference: 0 }), this._activeRenderTarget = e, this.setStencilMode(t.stencilMode, t.stencilReference); }
    setStencilMode(e, t) { const r = this._renderTargetStencilState[this._activeRenderTarget.uid]; r.stencilMode = e, r.stencilReference = t; const s = this._renderer; s.pipeline.setStencilMode(e), s.encoder.renderPassEncoder.setStencilReference(t); }
    destroy() { this._renderer.renderTarget.onRenderTargetChange.remove(this), this._renderer = null, this._activeRenderTarget = null, this._renderTargetStencilState = null; }
}
q.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "stencil" };
const G = { i32: { align: 4, size: 4 }, u32: { align: 4, size: 4 }, f32: { align: 4, size: 4 }, f16: { align: 2, size: 2 }, "vec2<i32>": { align: 8, size: 8 }, "vec2<u32>": { align: 8, size: 8 }, "vec2<f32>": { align: 8, size: 8 }, "vec2<f16>": { align: 4, size: 4 }, "vec3<i32>": { align: 16, size: 12 }, "vec3<u32>": { align: 16, size: 12 }, "vec3<f32>": { align: 16, size: 12 }, "vec3<f16>": { align: 8, size: 6 }, "vec4<i32>": { align: 16, size: 16 }, "vec4<u32>": { align: 16, size: 16 }, "vec4<f32>": { align: 16, size: 16 }, "vec4<f16>": { align: 8, size: 8 }, "mat2x2<f32>": { align: 8, size: 16 }, "mat2x2<f16>": { align: 4, size: 8 }, "mat3x2<f32>": { align: 8, size: 24 }, "mat3x2<f16>": { align: 4, size: 12 }, "mat4x2<f32>": { align: 8, size: 32 }, "mat4x2<f16>": { align: 4, size: 16 }, "mat2x3<f32>": { align: 16, size: 32 }, "mat2x3<f16>": { align: 8, size: 16 }, "mat3x3<f32>": { align: 16, size: 48 }, "mat3x3<f16>": { align: 8, size: 24 }, "mat4x3<f32>": { align: 16, size: 64 }, "mat4x3<f16>": { align: 8, size: 32 }, "mat2x4<f32>": { align: 16, size: 32 }, "mat2x4<f16>": { align: 8, size: 16 }, "mat3x4<f32>": { align: 16, size: 48 }, "mat3x4<f16>": { align: 8, size: 24 }, "mat4x4<f32>": { align: 16, size: 64 }, "mat4x4<f16>": { align: 8, size: 32 } };
function Re(a) { const e = a.map(r => ({ data: r, offset: 0, size: 0 })); let t = 0; for (let r = 0; r < e.length; r++) {
    const s = e[r];
    let i = G[s.data.type].size;
    const n = G[s.data.type].align;
    if (!G[s.data.type])
        throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${s.data.type}`);
    s.data.size > 1 && (i = Math.max(i, n) * s.data.size), t = Math.ceil(t / n) * n, s.size = i, s.offset = t, t += i;
} return t = Math.ceil(t / 16) * 16, { uboElements: e, size: t }; }
function Ee(a, e) {
    const { size: t, align: r } = G[a.data.type], s = (r - t) / 4, i = a.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return `
         v = uv.${a.data.name};
         ${e !== 0 ? `offset += ${e};` : ""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${a.data.size * (t / 4)}; i++)
         {
             for(var j = 0; j < ${t / 4}; j++)
             {
                 ${i}[arrayOffset++] = v[t++];
             }
             ${s !== 0 ? `arrayOffset += ${s};` : ""}
         }
     `;
}
function Le(a) { return (0, SharedSystems_tBvOkzj9_js_1.c)(a, "uboWgsl", Ee, SharedSystems_tBvOkzj9_js_1.u); }
class Y extends SharedSystems_tBvOkzj9_js_1.U {
    constructor() { super({ createUboElements: Re, generateUboSync: Le }); }
}
Y.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "ubo" };
const b = 128;
class $ {
    constructor(e) { this._bindGroupHash = Object.create(null), this._buffers = [], this._bindGroups = [], this._bufferResources = [], this._renderer = e, this._batchBuffer = new we({ minUniformOffsetAlignment: b }); const t = 256 / b; for (let r = 0; r < t; r++) {
        let s = Index_5qXXq_Tx_js_1.B.UNIFORM | Index_5qXXq_Tx_js_1.B.COPY_DST;
        r === 0 && (s |= Index_5qXXq_Tx_js_1.B.COPY_SRC), this._buffers.push(new Index_5qXXq_Tx_js_1.c({ data: this._batchBuffer.data, usage: s }));
    } }
    renderEnd() { this._uploadBindGroups(), this._resetBindGroups(); }
    _resetBindGroups() { this._bindGroupHash = Object.create(null), this._batchBuffer.clear(); }
    getUniformBindGroup(e, t) { if (!t && this._bindGroupHash[e.uid])
        return this._bindGroupHash[e.uid]; this._renderer.ubo.ensureUniformGroup(e); const r = e.buffer.data, s = this._batchBuffer.addEmptyGroup(r.length); return this._renderer.ubo.syncUniformGroup(e, this._batchBuffer.data, s / 4), this._bindGroupHash[e.uid] = this._getBindGroup(s / b), this._bindGroupHash[e.uid]; }
    getUboResource(e) { this._renderer.ubo.updateUniformGroup(e); const t = e.buffer.data, r = this._batchBuffer.addGroup(t); return this._getBufferResource(r / b); }
    getArrayBindGroup(e) { const t = this._batchBuffer.addGroup(e); return this._getBindGroup(t / b); }
    getArrayBufferResource(e) { const r = this._batchBuffer.addGroup(e) / b; return this._getBufferResource(r); }
    _getBufferResource(e) { if (!this._bufferResources[e]) {
        const t = this._buffers[e % 2];
        this._bufferResources[e] = new SharedSystems_tBvOkzj9_js_1.B({ buffer: t, offset: (e / 2 | 0) * 256, size: b });
    } return this._bufferResources[e]; }
    _getBindGroup(e) { if (!this._bindGroups[e]) {
        const t = new Index_5qXXq_Tx_js_1.d({ 0: this._getBufferResource(e) });
        this._bindGroups[e] = t;
    } return this._bindGroups[e]; }
    _uploadBindGroups() { const e = this._renderer.buffer, t = this._buffers[0]; t.update(this._batchBuffer.byteIndex), e.updateBuffer(t); const r = this._renderer.gpu.device.createCommandEncoder(); for (let s = 1; s < this._buffers.length; s++) {
        const i = this._buffers[s];
        r.copyBufferToBuffer(e.getGPUBuffer(t), b, e.getGPUBuffer(i), 0, this._batchBuffer.byteIndex);
    } this._renderer.gpu.device.queue.submit([r.finish()]); }
    destroy() { for (let e = 0; e < this._bindGroups.length; e++)
        this._bindGroups[e]?.destroy(); this._bindGroups = null, this._bindGroupHash = null; for (let e = 0; e < this._buffers.length; e++)
        this._buffers[e].destroy(); this._buffers = null; for (let e = 0; e < this._bufferResources.length; e++)
        this._bufferResources[e].destroy(); this._bufferResources = null, this._batchBuffer.destroy(), this._renderer = null; }
}
$.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUPipes], name: "uniformBatch" };
const Ae = { "point-list": 0, "line-list": 1, "line-strip": 2, "triangle-list": 3, "triangle-strip": 4 };
function De(a, e, t, r, s) { return a << 24 | e << 16 | t << 10 | r << 5 | s; }
function ke(a, e, t, r, s) { return t << 8 | a << 5 | r << 3 | s << 1 | e; }
class X {
    constructor(e) { this._moduleCache = Object.create(null), this._bufferLayoutsCache = Object.create(null), this._bindingNamesCache = Object.create(null), this._pipeCache = Object.create(null), this._pipeStateCaches = Object.create(null), this._colorMask = 15, this._multisampleCount = 1, this._colorTargetCount = 1, this._renderer = e; }
    contextChange(e) { this._gpu = e, this.setStencilMode(Index_5qXXq_Tx_js_1.b.DISABLED), this._updatePipeHash(); }
    setMultisampleCount(e) { this._multisampleCount !== e && (this._multisampleCount = e, this._updatePipeHash()); }
    setRenderTarget(e) { this._multisampleCount = e.msaaSamples, this._depthStencilAttachment = e.descriptor.depthStencilAttachment ? 1 : 0, this._colorTargetCount = e.colorTargetCount, this._updatePipeHash(); }
    setColorMask(e) { this._colorMask !== e && (this._colorMask = e, this._updatePipeHash()); }
    setStencilMode(e) { this._stencilMode !== e && (this._stencilMode = e, this._stencilState = SharedSystems_tBvOkzj9_js_1.G[e], this._updatePipeHash()); }
    setPipeline(e, t, r, s) { const i = this.getPipeline(e, t, r); s.setPipeline(i); }
    getPipeline(e, t, r, s) { e._layoutKey || ((0, SharedSystems_tBvOkzj9_js_1.e)(e, t.attributeData), this._generateBufferKey(e)), s || (s = e.topology); const i = De(e._layoutKey, t._layoutKey, r.data, r._blendModeId, Ae[s]); return this._pipeCache[i] ? this._pipeCache[i] : (this._pipeCache[i] = this._createPipeline(e, t, r, s), this._pipeCache[i]); }
    _createPipeline(e, t, r, s) { const i = this._gpu.device, n = this._createVertexBufferLayouts(e, t), o = this._renderer.state.getColorTargets(r, this._colorTargetCount), u = this._stencilMode === Index_5qXXq_Tx_js_1.b.RENDERING_MASK_ADD ? 0 : this._colorMask; for (let h = 0; h < o.length; h++)
        o[h].writeMask = u; const c = this._renderer.shader.getProgramData(t).pipeline, l = { vertex: { module: this._getModule(t.vertex.source), entryPoint: t.vertex.entryPoint, buffers: n }, fragment: { module: this._getModule(t.fragment.source), entryPoint: t.fragment.entryPoint, targets: o }, primitive: { topology: s, cullMode: r.cullMode }, layout: c, multisample: { count: this._multisampleCount }, label: "PIXI Pipeline" }; return this._depthStencilAttachment && (l.depthStencil = { ...this._stencilState, format: "depth24plus-stencil8", depthWriteEnabled: r.depthTest, depthCompare: r.depthTest ? "less" : "always" }), i.createRenderPipeline(l); }
    _getModule(e) { return this._moduleCache[e] || this._createModule(e); }
    _createModule(e) { const t = this._gpu.device; return this._moduleCache[e] = t.createShaderModule({ code: e }), this._moduleCache[e]; }
    _generateBufferKey(e) { const t = []; let r = 0; const s = Object.keys(e.attributes).sort(); for (let n = 0; n < s.length; n++) {
        const o = e.attributes[s[n]];
        t[r++] = o.offset, t[r++] = o.format, t[r++] = o.stride, t[r++] = o.instance;
    } const i = t.join("|"); return e._layoutKey = (0, Index_5qXXq_Tx_js_1.h)(i, "geometry"), e._layoutKey; }
    _generateAttributeLocationsKey(e) { const t = []; let r = 0; const s = Object.keys(e.attributeData).sort(); for (let n = 0; n < s.length; n++) {
        const o = e.attributeData[s[n]];
        t[r++] = o.location;
    } const i = t.join("|"); return e._attributeLocationsKey = (0, Index_5qXXq_Tx_js_1.h)(i, "programAttributes"), e._attributeLocationsKey; }
    getBufferNamesToBind(e, t) { const r = e._layoutKey << 16 | t._attributeLocationsKey; if (this._bindingNamesCache[r])
        return this._bindingNamesCache[r]; const s = this._createVertexBufferLayouts(e, t), i = Object.create(null), n = t.attributeData; for (let o = 0; o < s.length; o++) {
        const c = Object.values(s[o].attributes)[0].shaderLocation;
        for (const l in n)
            if (n[l].location === c) {
                i[o] = l;
                break;
            }
    } return this._bindingNamesCache[r] = i, i; }
    _createVertexBufferLayouts(e, t) { t._attributeLocationsKey || this._generateAttributeLocationsKey(t); const r = e._layoutKey << 16 | t._attributeLocationsKey; if (this._bufferLayoutsCache[r])
        return this._bufferLayoutsCache[r]; const s = []; return e.buffers.forEach(i => { const n = { arrayStride: 0, stepMode: "vertex", attributes: [] }, o = n.attributes; for (const u in t.attributeData) {
        const c = e.attributes[u];
        (c.divisor ?? 1) !== 1 && (0, Index_5qXXq_Tx_js_1.w)(`Attribute ${u} has an invalid divisor value of '${c.divisor}'. WebGPU only supports a divisor value of 1`), c.buffer === i && (n.arrayStride = c.stride, n.stepMode = c.instance ? "instance" : "vertex", o.push({ shaderLocation: t.attributeData[u].location, offset: c.offset, format: c.format }));
    } o.length && s.push(n); }), this._bufferLayoutsCache[r] = s, s; }
    _updatePipeHash() { const e = ke(this._stencilMode, this._multisampleCount, this._colorMask, this._depthStencilAttachment, this._colorTargetCount); this._pipeStateCaches[e] || (this._pipeStateCaches[e] = Object.create(null)), this._pipeCache = this._pipeStateCaches[e]; }
    destroy() { this._renderer = null, this._bufferLayoutsCache = null; }
}
X.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "pipeline" };
class ze {
    constructor() { this.contexts = [], this.msaaTextures = [], this.msaaSamples = 1; }
}
class Fe {
    init(e, t) { this._renderer = e, this._renderTargetSystem = t; }
    copyToTexture(e, t, r, s, i) { const n = this._renderer, o = this._getGpuColorTexture(e), u = n.texture.getGpuSource(t.source); return n.encoder.commandEncoder.copyTextureToTexture({ texture: o, origin: r }, { texture: u, origin: i }, s), t; }
    startRenderPass(e, t = !0, r, s) { const n = this._renderTargetSystem.getGpuRenderTarget(e), o = this.getDescriptor(e, t, r); n.descriptor = o, this._renderer.pipeline.setRenderTarget(n), this._renderer.encoder.beginRenderPass(n), this._renderer.encoder.setViewport(s); }
    finishRenderPass() { this._renderer.encoder.endRenderPass(); }
    _getGpuColorTexture(e) { const t = this._renderTargetSystem.getGpuRenderTarget(e); return t.contexts[0] ? t.contexts[0].getCurrentTexture() : this._renderer.texture.getGpuSource(e.colorTextures[0].source); }
    getDescriptor(e, t, r) { typeof t == "boolean" && (t = t ? Index_5qXXq_Tx_js_1.i.ALL : Index_5qXXq_Tx_js_1.i.NONE); const s = this._renderTargetSystem, i = s.getGpuRenderTarget(e), n = e.colorTextures.map((c, l) => { const p = i.contexts[l]; let h, d; p ? h = p.getCurrentTexture().createView() : h = this._renderer.texture.getGpuSource(c).createView({ mipLevelCount: 1 }), i.msaaTextures[l] && (d = h, h = this._renderer.texture.getTextureView(i.msaaTextures[l])); const _ = t & Index_5qXXq_Tx_js_1.i.COLOR ? "clear" : "load"; return r ?? (r = s.defaultClearColor), { view: h, resolveTarget: d, clearValue: r, storeOp: "store", loadOp: _ }; }); let o; if ((e.stencil || e.depth) && !e.depthStencilTexture && (e.ensureDepthStencilTexture(), e.depthStencilTexture.source.sampleCount = i.msaa ? 4 : 1), e.depthStencilTexture) {
        const c = t & Index_5qXXq_Tx_js_1.i.STENCIL ? "clear" : "load", l = t & Index_5qXXq_Tx_js_1.i.DEPTH ? "clear" : "load";
        o = { view: this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView(), stencilStoreOp: "store", stencilLoadOp: c, depthClearValue: 1, depthLoadOp: l, depthStoreOp: "store" };
    } return { colorAttachments: n, depthStencilAttachment: o }; }
    clear(e, t = !0, r, s) { if (!t)
        return; const { gpu: i, encoder: n } = this._renderer, o = i.device; if (n.commandEncoder === null) {
        const c = o.createCommandEncoder(), l = this.getDescriptor(e, t, r), p = c.beginRenderPass(l);
        p.setViewport(s.x, s.y, s.width, s.height, 0, 1), p.end();
        const h = c.finish();
        o.queue.submit([h]);
    }
    else
        this.startRenderPass(e, t, r, s); }
    initGpuRenderTarget(e) { e.isRoot = !0; const t = new ze; return t.colorTargetCount = e.colorTextures.length, e.colorTextures.forEach((r, s) => { if (r instanceof Index_5qXXq_Tx_js_1.j) {
        const i = r.resource.getContext("webgpu"), n = r.transparent ? "premultiplied" : "opaque";
        try {
            i.configure({ device: this._renderer.gpu.device, usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC, format: "bgra8unorm", alphaMode: n });
        }
        catch (o) {
            console.error(o);
        }
        t.contexts[s] = i;
    } if (t.msaa = r.source.antialias, r.source.antialias) {
        const i = new Index_5qXXq_Tx_js_1.k({ width: 0, height: 0, sampleCount: 4 });
        t.msaaTextures[s] = i;
    } }), t.msaa && (t.msaaSamples = 4, e.depthStencilTexture && (e.depthStencilTexture.source.sampleCount = 4)), t; }
    destroyGpuRenderTarget(e) { e.contexts.forEach(t => { t.unconfigure(); }), e.msaaTextures.forEach(t => { t.destroy(); }), e.msaaTextures.length = 0, e.contexts.length = 0; }
    ensureDepthStencilTexture(e) { const t = this._renderTargetSystem.getGpuRenderTarget(e); e.depthStencilTexture && t.msaa && (e.depthStencilTexture.source.sampleCount = 4); }
    resizeGpuRenderTarget(e) { const t = this._renderTargetSystem.getGpuRenderTarget(e); t.width = e.width, t.height = e.height, t.msaa && e.colorTextures.forEach((r, s) => { t.msaaTextures[s]?.resize(r.source.width, r.source.height, r.source._resolution); }); }
}
class Z extends SharedSystems_tBvOkzj9_js_1.R {
    constructor(e) { super(e), this.adaptor = new Fe, this.adaptor.init(e, this); }
}
Z.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "renderTarget" };
class J {
    constructor() { this._gpuProgramData = Object.create(null); }
    contextChange(e) { this._gpu = e; }
    getProgramData(e) { return this._gpuProgramData[e._layoutKey] || this._createGPUProgramData(e); }
    _createGPUProgramData(e) { const t = this._gpu.device, r = e.gpuLayout.map(i => t.createBindGroupLayout({ entries: i })), s = { bindGroupLayouts: r }; return this._gpuProgramData[e._layoutKey] = { bindGroups: r, pipeline: t.createPipelineLayout(s) }, this._gpuProgramData[e._layoutKey]; }
    destroy() { this._gpu = null, this._gpuProgramData = null; }
}
J.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "shader" };
const m = {};
m.normal = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" } };
m.add = { alpha: { srcFactor: "src-alpha", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "one", dstFactor: "one", operation: "add" } };
m.multiply = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "dst", dstFactor: "one-minus-src-alpha", operation: "add" } };
m.screen = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "one", dstFactor: "one-minus-src", operation: "add" } };
m.overlay = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "one", dstFactor: "one-minus-src", operation: "add" } };
m.none = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "zero", dstFactor: "zero", operation: "add" } };
m["normal-npm"] = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "src-alpha", dstFactor: "one-minus-src-alpha", operation: "add" } };
m["add-npm"] = { alpha: { srcFactor: "one", dstFactor: "one", operation: "add" }, color: { srcFactor: "src-alpha", dstFactor: "one", operation: "add" } };
m["screen-npm"] = { alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "src-alpha", dstFactor: "one-minus-src", operation: "add" } };
m.erase = { alpha: { srcFactor: "zero", dstFactor: "one-minus-src-alpha", operation: "add" }, color: { srcFactor: "zero", dstFactor: "one-minus-src", operation: "add" } };
m.min = { alpha: { srcFactor: "one", dstFactor: "one", operation: "min" }, color: { srcFactor: "one", dstFactor: "one", operation: "min" } };
m.max = { alpha: { srcFactor: "one", dstFactor: "one", operation: "max" }, color: { srcFactor: "one", dstFactor: "one", operation: "max" } };
class Q {
    constructor() { this.defaultState = new Index_5qXXq_Tx_js_1.S, this.defaultState.blend = !0; }
    contextChange(e) { this.gpu = e; }
    getColorTargets(e, t) { const r = m[e.blendMode] || m.normal, s = [], i = { format: "bgra8unorm", writeMask: 0, blend: r }; for (let n = 0; n < t; n++)
        s[n] = i; return s; }
    destroy() { this.gpu = null; }
}
Q.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "state" };
const Ie = { type: "image", upload(a, e, t) { const r = a.resource, s = (a.pixelWidth | 0) * (a.pixelHeight | 0), i = r.byteLength / s; t.device.queue.writeTexture({ texture: e }, r, { offset: 0, rowsPerImage: a.pixelHeight, bytesPerRow: a.pixelWidth * i }, { width: a.pixelWidth, height: a.pixelHeight, depthOrArrayLayers: 1 }); } }, ee = { "bc1-rgba-unorm": { blockBytes: 8, blockWidth: 4, blockHeight: 4 }, "bc2-rgba-unorm": { blockBytes: 16, blockWidth: 4, blockHeight: 4 }, "bc3-rgba-unorm": { blockBytes: 16, blockWidth: 4, blockHeight: 4 }, "bc7-rgba-unorm": { blockBytes: 16, blockWidth: 4, blockHeight: 4 }, "etc1-rgb-unorm": { blockBytes: 8, blockWidth: 4, blockHeight: 4 }, "etc2-rgba8unorm": { blockBytes: 16, blockWidth: 4, blockHeight: 4 }, "astc-4x4-unorm": { blockBytes: 16, blockWidth: 4, blockHeight: 4 } }, Oe = { blockBytes: 4, blockWidth: 1, blockHeight: 1 }, We = { type: "compressed", upload(a, e, t) { let r = a.pixelWidth, s = a.pixelHeight; const i = ee[a.format] || Oe; for (let n = 0; n < a.resource.length; n++) {
        const o = a.resource[n], u = Math.ceil(r / i.blockWidth) * i.blockBytes;
        t.device.queue.writeTexture({ texture: e, mipLevel: n }, o, { offset: 0, bytesPerRow: u }, { width: Math.ceil(r / i.blockWidth) * i.blockWidth, height: Math.ceil(s / i.blockHeight) * i.blockHeight, depthOrArrayLayers: 1 }), r = Math.max(r >> 1, 1), s = Math.max(s >> 1, 1);
    } } }, te = { type: "image", upload(a, e, t) { const r = a.resource; if (!r)
        return; if (globalThis.HTMLImageElement && r instanceof HTMLImageElement) {
        const o = Index_5qXXq_Tx_js_1.D.get().createCanvas(r.width, r.height);
        o.getContext("2d").drawImage(r, 0, 0, r.width, r.height), a.resource = o, (0, Index_5qXXq_Tx_js_1.w)("ImageSource: Image element passed, converting to canvas and replacing resource.");
    } const s = Math.min(e.width, a.resourceWidth || a.pixelWidth), i = Math.min(e.height, a.resourceHeight || a.pixelHeight), n = a.alphaMode === "premultiply-alpha-on-upload"; t.device.queue.copyExternalImageToTexture({ source: r }, { texture: e, premultipliedAlpha: n }, { width: s, height: i }); } }, He = { type: "video", upload(a, e, t) { te.upload(a, e, t); } };
class Ve {
    constructor(e) { this.device = e, this.sampler = e.createSampler({ minFilter: "linear" }), this.pipelines = {}; }
    _getMipmapPipeline(e) {
        let t = this.pipelines[e];
        return t || (this.mipmapShaderModule || (this.mipmapShaderModule = this.device.createShaderModule({ code: `
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    ` })), t = this.device.createRenderPipeline({ layout: "auto", vertex: { module: this.mipmapShaderModule, entryPoint: "vertexMain" }, fragment: { module: this.mipmapShaderModule, entryPoint: "fragmentMain", targets: [{ format: e }] } }), this.pipelines[e] = t), t;
    }
    generateMipmap(e) { const t = this._getMipmapPipeline(e.format); if (e.dimension === "3d" || e.dimension === "1d")
        throw new Error("Generating mipmaps for non-2d textures is currently unsupported!"); let r = e; const s = e.depthOrArrayLayers || 1, i = e.usage & GPUTextureUsage.RENDER_ATTACHMENT; if (!i) {
        const u = { size: { width: Math.ceil(e.width / 2), height: Math.ceil(e.height / 2), depthOrArrayLayers: s }, format: e.format, usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT, mipLevelCount: e.mipLevelCount - 1 };
        r = this.device.createTexture(u);
    } const n = this.device.createCommandEncoder({}), o = t.getBindGroupLayout(0); for (let u = 0; u < s; ++u) {
        let c = e.createView({ baseMipLevel: 0, mipLevelCount: 1, dimension: "2d", baseArrayLayer: u, arrayLayerCount: 1 }), l = i ? 1 : 0;
        for (let p = 1; p < e.mipLevelCount; ++p) {
            const h = r.createView({ baseMipLevel: l++, mipLevelCount: 1, dimension: "2d", baseArrayLayer: u, arrayLayerCount: 1 }), d = n.beginRenderPass({ colorAttachments: [{ view: h, storeOp: "store", loadOp: "clear", clearValue: { r: 0, g: 0, b: 0, a: 0 } }] }), _ = this.device.createBindGroup({ layout: o, entries: [{ binding: 0, resource: this.sampler }, { binding: 1, resource: c }] });
            d.setPipeline(t), d.setBindGroup(0, _), d.draw(3, 1, 0, 0), d.end(), c = h;
        }
    } if (!i) {
        const u = { width: Math.ceil(e.width / 2), height: Math.ceil(e.height / 2), depthOrArrayLayers: s };
        for (let c = 1; c < e.mipLevelCount; ++c)
            n.copyTextureToTexture({ texture: r, mipLevel: c - 1 }, { texture: e, mipLevel: c }, u), u.width = Math.ceil(u.width / 2), u.height = Math.ceil(u.height / 2);
    } return this.device.queue.submit([n.finish()]), i || r.destroy(), e; }
}
class Ne {
    constructor(e) { this.textureView = null, this.gpuTexture = e; }
    destroy() { this.gpuTexture.destroy(), this.textureView = null, this.gpuTexture = null; }
}
class re {
    constructor(e) { this._gpuSamplers = Object.create(null), this._bindGroupHash = Object.create(null), this._uploads = { image: te, buffer: Ie, video: He, compressed: We }, this._renderer = e, e.renderableGC.addManagedHash(this, "_bindGroupHash"), this._managedTextures = new Index_5qXXq_Tx_js_1.G({ renderer: e, type: "resource", onUnload: this.onSourceUnload.bind(this), name: "gpuTextureSource" }); }
    get managedTextures() { return Object.values(this._managedTextures.items); }
    contextChange(e) { this._gpu = e; }
    initSource(e) { return e._gpuData[this._renderer.uid]?.gpuTexture || this._initSource(e); }
    _initSource(e) { if (e.autoGenerateMipmaps) {
        const c = Math.max(e.pixelWidth, e.pixelHeight);
        e.mipLevelCount = Math.floor(Math.log2(c)) + 1;
    } let t = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST; e.uploadMethodId !== "compressed" && (t |= GPUTextureUsage.RENDER_ATTACHMENT, t |= GPUTextureUsage.COPY_SRC); const r = ee[e.format] || { blockWidth: 1, blockHeight: 1 }, s = Math.ceil(e.pixelWidth / r.blockWidth) * r.blockWidth, i = Math.ceil(e.pixelHeight / r.blockHeight) * r.blockHeight, n = { label: e.label, size: { width: s, height: i }, format: e.format, sampleCount: e.sampleCount, mipLevelCount: e.mipLevelCount, dimension: e.dimension, usage: t }, o = this._gpu.device.createTexture(n); return e._gpuData[this._renderer.uid] = new Ne(o), this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceResize, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), o; }
    onSourceUpdate(e) { const t = this.getGpuSource(e); t && (this._uploads[e.uploadMethodId] && this._uploads[e.uploadMethodId].upload(e, t, this._gpu), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e)); }
    onUpdateMipmaps(e) { this._mipmapGenerator || (this._mipmapGenerator = new Ve(this._gpu.device)); const t = this.getGpuSource(e); this._mipmapGenerator.generateMipmap(t); }
    onSourceUnload(e) { e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceResize, this), e.off("updateMipmaps", this.onUpdateMipmaps, this); }
    onSourceResize(e) { e._gcLastUsed = this._renderer.gc.now; const t = e._gpuData[this._renderer.uid], r = t?.gpuTexture; r ? (r.width !== e.pixelWidth || r.height !== e.pixelHeight) && (t.destroy(), this._bindGroupHash[e.uid] = null, e._gpuData[this._renderer.uid] = null, this.initSource(e)) : this.initSource(e); }
    _initSampler(e) { return this._gpuSamplers[e._resourceId] = this._gpu.device.createSampler(e), this._gpuSamplers[e._resourceId]; }
    getGpuSampler(e) { return this._gpuSamplers[e._resourceId] || this._initSampler(e); }
    getGpuSource(e) { return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid]?.gpuTexture || this.initSource(e); }
    getTextureBindGroup(e) { return this._bindGroupHash[e.uid] || this._createTextureBindGroup(e); }
    _createTextureBindGroup(e) { const t = e.source; return this._bindGroupHash[e.uid] = new Index_5qXXq_Tx_js_1.d({ 0: t, 1: t.style, 2: new Index_5qXXq_Tx_js_1.l({ uTextureMatrix: { type: "mat3x3<f32>", value: e.textureMatrix.mapCoord } }) }), this._bindGroupHash[e.uid]; }
    getTextureView(e) { const t = e.source; t._gcLastUsed = this._renderer.gc.now; let r = t._gpuData[this._renderer.uid], s = null; return r || (this.initSource(t), r = t._gpuData[this._renderer.uid]), s = r.textureView || r.gpuTexture.createView(), s; }
    generateCanvas(e) { const t = this._renderer, r = t.gpu.device.createCommandEncoder(), s = Index_5qXXq_Tx_js_1.D.get().createCanvas(); s.width = e.source.pixelWidth, s.height = e.source.pixelHeight; const i = s.getContext("webgpu"); return i.configure({ device: t.gpu.device, usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC, format: Index_5qXXq_Tx_js_1.D.get().getNavigator().gpu.getPreferredCanvasFormat(), alphaMode: "premultiplied" }), r.copyTextureToTexture({ texture: t.texture.getGpuSource(e.source), origin: { x: 0, y: 0 } }, { texture: i.getCurrentTexture() }, { width: s.width, height: s.height }), t.gpu.device.queue.submit([r.finish()]), s; }
    getPixels(e) { const t = this.generateCanvas(e), r = Index_5qXXq_Tx_js_1.m.getOptimalCanvasAndContext(t.width, t.height), s = r.context; s.drawImage(t, 0, 0); const { width: i, height: n } = t, o = s.getImageData(0, 0, i, n), u = new Uint8ClampedArray(o.data.buffer); return Index_5qXXq_Tx_js_1.m.returnCanvasAndContext(r), { pixels: u, width: i, height: n }; }
    destroy() { this._managedTextures.destroy(); for (const e of Object.keys(this._bindGroupHash)) {
        const t = Number(e);
        this._bindGroupHash[t]?.destroy();
    } this._renderer = null, this._gpu = null, this._mipmapGenerator = null, this._gpuSamplers = null, this._bindGroupHash = null; }
}
re.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUSystem], name: "texture" };
class se {
    constructor() { this._maxTextures = 0; }
    contextChange(e) { const t = new Index_5qXXq_Tx_js_1.l({ uTransformMatrix: { value: new Index_5qXXq_Tx_js_1.M, type: "mat3x3<f32>" }, uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uRound: { value: 0, type: "f32" } }); this._maxTextures = e.limits.maxBatchableTextures; const r = (0, Index_5qXXq_Tx_js_1.n)({ name: "graphics", bits: [Index_5qXXq_Tx_js_1.o, (0, Index_5qXXq_Tx_js_1.p)(this._maxTextures), colorToUniform_3MxHuUz8_js_1.l, Index_5qXXq_Tx_js_1.q] }); this.shader = new Index_5qXXq_Tx_js_1.s({ gpuProgram: r, resources: { localUniforms: t } }); }
    execute(e, t) { const r = t.context, s = r.customShader || this.shader, i = e.renderer, n = i.graphicsContext, { batcher: o, instructions: u } = n.getContextRenderData(r), c = i.encoder; c.setGeometry(o.geometry, s.gpuProgram); const l = i.globalUniforms.bindGroup; c.setBindGroup(0, l, s.gpuProgram); const p = i.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms, !0); c.setBindGroup(2, p, s.gpuProgram); const h = u.instructions; let d = null; for (let _ = 0; _ < u.instructionSize; _++) {
        const g = h[_];
        if (g.topology !== d && (d = g.topology, c.setPipelineFromGeometryProgramAndState(o.geometry, s.gpuProgram, e.state, g.topology)), s.groups[1] = g.bindGroup, !g.gpuBindGroup) {
            const S = g.textures;
            g.bindGroup = (0, Index_5qXXq_Tx_js_1.g)(S.textures, S.count, this._maxTextures), g.gpuBindGroup = i.bindGroup.getBindGroup(g.bindGroup, s.gpuProgram, 1);
        }
        c.setBindGroup(1, g.bindGroup, s.gpuProgram), c.renderPassEncoder.drawIndexed(g.size, 1, g.start);
    } }
    destroy() { this.shader.destroy(!0), this.shader = null; }
}
se.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUPipesAdaptor], name: "graphics" };
class ie {
    init() { const e = (0, Index_5qXXq_Tx_js_1.n)({ name: "mesh", bits: [colorToUniform_3MxHuUz8_js_1.a, SharedSystems_tBvOkzj9_js_1.t, Index_5qXXq_Tx_js_1.q] }); this._shader = new Index_5qXXq_Tx_js_1.s({ gpuProgram: e, resources: { uTexture: Index_5qXXq_Tx_js_1.t.EMPTY._source, uSampler: Index_5qXXq_Tx_js_1.t.EMPTY._source.style, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new Index_5qXXq_Tx_js_1.M } } } }); }
    execute(e, t) { const r = e.renderer; let s = t._shader; if (!s)
        s = this._shader, s.groups[2] = r.texture.getTextureBindGroup(t.texture);
    else if (!s.gpuProgram) {
        (0, Index_5qXXq_Tx_js_1.w)("Mesh shader has no gpuProgram", t.shader);
        return;
    } const i = s.gpuProgram; if (i.autoAssignGlobalUniforms && (s.groups[0] = r.globalUniforms.bindGroup), i.autoAssignLocalUniforms) {
        const n = e.localUniforms;
        s.groups[1] = r.renderPipes.uniformBatch.getUniformBindGroup(n, !0);
    } r.encoder.draw({ geometry: t._geometry, shader: s, state: t.state }); }
    destroy() { this._shader.destroy(!0), this._shader = null; }
}
ie.extension = { type: [Index_5qXXq_Tx_js_1.E.WebGPUPipesAdaptor], name: "mesh" };
const je = [...SharedSystems_tBvOkzj9_js_1.S, Y, j, U, K, V, re, Z, J, Q, X, N, q, H], Ke = [...SharedSystems_tBvOkzj9_js_1.a, $], qe = [W, ie, se], ne = [], oe = [], ae = [];
Index_5qXXq_Tx_js_1.e.handleByNamedList(Index_5qXXq_Tx_js_1.E.WebGPUSystem, ne);
Index_5qXXq_Tx_js_1.e.handleByNamedList(Index_5qXXq_Tx_js_1.E.WebGPUPipes, oe);
Index_5qXXq_Tx_js_1.e.handleByNamedList(Index_5qXXq_Tx_js_1.E.WebGPUPipesAdaptor, ae);
Index_5qXXq_Tx_js_1.e.add(...je, ...Ke, ...qe);
class Mt extends Index_5qXXq_Tx_js_1.A {
    constructor() { const e = { name: "webgpu", type: Index_5qXXq_Tx_js_1.R.WEBGPU, systems: ne, renderPipes: oe, renderPipeAdaptors: ae }; super(e); }
}
exports.WebGPURenderer = Mt;

},
};function require(id){if(cache[id])return cache[id].exports;if(!factories[id])throw new Error("Missing PixiJS module: "+id);const m={exports:{}};cache[id]=m;factories[id](m,m.exports,require);return m.exports}window.PIXI=require("./Index-5qXXq-Tx.js");})();
