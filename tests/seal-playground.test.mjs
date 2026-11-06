import test from 'node:test';
import assert from 'node:assert/strict';
import { createRouter, sceneFromHash } from '../public/seal-playground/shared/router.js';
import { Spring } from '../public/seal-playground/shared/spring.js';
import { createDrawScene } from '../public/seal-playground/scenes/draw.js';
import { createPuzzleScene } from '../public/seal-playground/scenes/puzzle.js';
import { createMusicScene } from '../public/seal-playground/scenes/music.js';
class Element extends EventTarget {
 constructor() { super(); this.style={setProperty(){}}; this.classList={toggle(){}}; this.dataset={}; }
 setAttribute() {} removeAttribute() {} appendChild() {} setPointerCapture() {}
 getBoundingClientRect() { return {left:0,top:0}; }
 getContext() { return {drawImage(){},getImageData:()=>({data:new Uint8ClampedArray(868*584*4).fill(255)})}; }
}
class Container {
 constructor() { this.children=[]; this.scale={set(){}}; this.position={set(){}}; }
 addChild(...children) { this.children.push(...children); } addChildAt(child,i) { this.children.splice(i,0,child); }
 removeChildren() { return this.children.splice(0); } getChildIndex(child) { return this.children.indexOf(child); }
 onViewUpdate() {} destroy() { this.destroyed=true; }
}
class Graphics extends Container {}
for(const name of ['ellipse','circle','fill','roundRect','stroke','poly','moveTo','lineTo','bezierCurveTo','star','clear']) Graphics.prototype[name]=function(){return this;};
let textureId=0;
globalThis.PIXI={VERSION:'test-double',Container,ViewContainer:Container,Graphics,
 Application:class { constructor(){this.canvas=new Element();this.stage=new Container();this.ticker={add(){}};this.renderer={resize(){},render(){}};} async init(){} },
 Texture:{from:image=>({uid:textureId++,source:{resource:image}})},State:{for2d:()=>({})},
 Buffer:class{constructor(o){Object.assign(this,o);}update(){}},BufferUsage:{VERTEX:1,COPY_DST:2,INDEX:4},
 Geometry:class{constructor(o){Object.assign(this,o);this.bounds={containsPoint:()=>true};}on(){}}
};
function context(){return{state:{time:0,drag:null},game:new Container(),sound:{tone(){},stop(){},unlock(){}},bump(){},endPointer(){}};}
const makeDrag=(kind,start,local,e)=>({kind,start,local,last:start,id:e.pointerId});
function fakeBrowser(hash){const b=new EventTarget();b.location={hash};b.entries=[];b.history={replaceState:(_,__,h)=>{b.location.hash=h;},pushState:(_,__,h)=>{b.entries.push(h);b.location.hash=h;}};return b;}

test('router deep links, history, invalid routes and replay',()=>{
 const b=fakeBrowser('#/puzzle'),calls=[],r=createRouter(n=>calls.push(n),b);r.start();r.navigate('draw');r.navigate('draw');r.restart();
 assert.deepEqual(calls,['puzzle','draw','draw']);assert.deepEqual(b.entries,['#/draw']);
 b.location.hash='#/puzzle';b.dispatchEvent(new Event('popstate'));b.dispatchEvent(new Event('hashchange'));assert.equal(calls.length,4);
 b.location.hash='#/unknown';b.dispatchEvent(new Event('hashchange'));assert.equal(b.location.hash,'#/home');assert.equal(sceneFromHash('#/music/'),'music');r.destroy();
});
test('draw rejects skipping, completes continuous trace and resets',()=>{
 const c=context(),s=createDrawScene(c);s.enter();const{path,progress}=s.debug;s.pointerDown(path[120],{},{pointerId:1},makeDrag);assert.equal(progress.traceIndex,0);
 for(let i=0;i<path.length;i++)s.pointerMove({kind:'trace',last:path[Math.max(0,i-1)]},path[i]);
 assert.equal(progress.traceDone,true);s.update(2);assert.equal(progress.traceCelebrated,true);s.enter();assert.equal(progress.traceIndex,0);assert.equal(progress.traceDone,false);assert.equal('traceIndex'in c.state,false);
});
test('puzzle cancellation never scores and replay resets pieces',()=>{
 const c=context(),s=createPuzzleScene(c);s.enter();const{pieces,progress}=s.debug;
 s.pointerDown(pieces[0].pos,{},{pointerId:1},makeDrag);s.pointerMove(c.state.drag,pieces[0].target);s.pointerEnd(c.state.drag,true);assert.equal(progress.locks,0);assert.deepEqual(pieces[0].pos,pieces[0].origin);
 for(const piece of pieces){s.pointerDown(piece.pos,{},{pointerId:1},makeDrag);s.pointerMove(c.state.drag,piece.target);s.pointerEnd(c.state.drag,false);}assert.equal(progress.locks,3);
 s.enter();assert.equal(progress.locks,0);assert.ok(pieces.every(p=>!p.locked));
});
test('music stops on pause/exit and resets the highlighted note',()=>{
 const s=createMusicScene(context());s.enter();assert.equal(s.pointerDown({x:470,y:755}),true);assert.equal(s.debug.activeNote,0);
 s.toggle();s.update();assert.equal(s.debug.progress.noteStep,1);s.exit();assert.equal(s.debug.progress.music,false);s.enter();assert.equal(s.debug.activeNote,-1);s.toggle();s.pause();assert.equal(s.debug.progress.music,false);
});
test('spring settles with production substeps',()=>{const s=new Spring(170,8.2);s.x=.34;for(let i=0;i<1200;i++)s.step(1/120);assert.equal(s.x,0);assert.equal(s.v,0);});
test('runtime initialization, repeated navigation and interrupted input',async()=>{
 const b=fakeBrowser('#/music'),elements=new Map(),doc=new EventTarget();doc.body=new Element();doc.createElement=()=>new Element();doc.getElementById=id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id);};
 Object.assign(globalThis,{window:b,document:doc,devicePixelRatio:1,innerWidth:1648,innerHeight:928,matchMedia:()=>({matches:false}),addEventListener:b.addEventListener.bind(b),Image:class{constructor(){this.width=868;this.height=584;}async decode(){}}});
 const{startPlayground}=await import('../public/seal-playground/runtime.js');await startPlayground();const d=b.sealDebug,canvas=b.sealApp.canvas;assert.equal(d.ready,true);assert.equal(d.state.mode,'music');
 for(let i=0;i<3;i++)for(const mode of ['home','draw','puzzle','music']){d.mode(mode);d.step(.05);assert.equal(d.state.mode,mode);assert.equal(b.location.hash,'#/'+mode);assert.equal(b.sealApp.canvas,canvas);assert.equal(d.bodyTextureStable,true);assert.equal(d.hatBehindBody,true);}
 function pointer(type,x,y){const e=new Event(type,{cancelable:true});Object.assign(e,{clientX:x,clientY:y,pointerId:1,button:0});canvas.dispatchEvent(e);}
 d.mode('puzzle');pointer('pointerdown',730,729);pointer('pointermove',730,420);assert.equal(d.state.drag.kind,'piece');d.home();assert.equal(d.state.drag,null);assert.equal(d.scenes.puzzle.debug.progress.locks,0);pointer('pointerup',730,420);assert.equal(d.scenes.puzzle.debug.progress.locks,0);
 d.mode('puzzle');pointer('pointerdown',730,729);pointer('pointermove',730,420);pointer('pointerup',730,420);assert.equal(d.scenes.puzzle.debug.progress.locks,1);d.router.restart();assert.equal(d.scenes.puzzle.debug.progress.locks,0);
 pointer('pointerdown',730,729);pointer('pointermove',730,420);pointer('pointercancel',730,420);assert.equal(d.state.drag,null);assert.equal(d.scenes.puzzle.debug.progress.locks,0);
 d.mode('music');d.scenes.music.toggle();b.dispatchEvent(new Event('blur'));assert.equal(d.scenes.music.debug.progress.music,false);
 // Test doubles verify logic, not WebGL pixels or audible playback.
});
