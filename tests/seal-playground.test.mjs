import test from 'node:test';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { createRouter, sceneFromHash } from '../public/seal-playground/shared/router.js';
import { Spring } from '../public/seal-playground/shared/spring.js';
import { createFeedScene } from '../public/seal-playground/scenes/feed.js';
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
 constructor() { this.children=[]; this.scale={set(){}}; this.position={set:(x,y)=>{this.x=x;this.y=y}}; }
 addChild(...children) { this.children.push(...children); } addChildAt(child,i) { this.children.splice(i,0,child); }
 removeChildren() { return this.children.splice(0); } getChildIndex(child) { return this.children.indexOf(child); }
 onViewUpdate() {} destroy() { this.destroyed=true; }
}
class Graphics extends Container {}
for(const name of ['rect','ellipse','circle','fill','roundRect','stroke','poly','moveTo','lineTo','bezierCurveTo','star','clear']) Graphics.prototype[name]=function(){return this;};
let textureId=0;
class Sprite extends Container { constructor(texture){ super(); this.texture=texture; this.anchor={set(){}}; } }
globalThis.PIXI={Sprite,VERSION:'test-double',Container,ViewContainer:Container,Graphics,
 Application:class { constructor(){this.canvas=new Element();this.stage=new Container();this.ticker={add(){}};this.renderer={resize(){},render(){}};} async init(){} },
 Texture:{from:image=>({uid:textureId++,source:{resource:image}})},State:{for2d:()=>({})},
 Buffer:class{constructor(o){Object.assign(this,o);}update(){}},BufferUsage:{VERTEX:1,COPY_DST:2,INDEX:4},
 Geometry:class{constructor(o){Object.assign(this,o);this.bounds={containsPoint:()=>true};}on(){}}
};
function context(){return{state:{time:0,drag:null},game:new Container(),sound:{tone(){},stop(){},unlock(){}},bump(){},endPointer(){}};}
const makeDrag=(kind,start,local,e)=>({kind,start,local,last:start,moved:false,id:e.pointerId});
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
 d.mode('feed');pointer('pointerdown',700,560);pointer('pointermove',430,640);pointer('pointerup',430,640);
 assert.equal(d.state.pendingDizzy,true);
 pointer('pointerdown',1500,830);pointer('pointermove',1260,430);pointer('pointerup',1260,430);
 d.step(.7);assert.equal(d.state.expression,'disappointed');assert.equal(d.state.pendingDizzy,false);
 assert.equal(d.state.dizzyUntil,0);assert.equal(d.state.dizzyCount,0);
 // Test doubles verify logic, not WebGL pixels or audible playback.
});

test('production path without a trailing slash resolves all HTML resources inside the game',()=>{
 const html=readFileSync(new URL('../public/seal-playground/index.html',import.meta.url),'utf8');
 const base=html.match(/<base href="([^"]+)"/)[1];
 for(const entry of ['https://example.com/seal-playground','https://example.com/seal-playground/','https://example.com/seal-playground/index.html']){
  const resourceBase=new URL(base,entry);
  for(const[,path]of html.matchAll(/(?:src|href)="(\.\/[^"]+)"/g))assert.ok(new URL(path,resourceBase).pathname.startsWith('/seal-playground/'));
 }
});

test('a fixed basket lends one fish, returns misses and refills only after the full meal', t => {
 const values = new Map();
 const browser = new EventTarget();
 browser.localStorage = {getItem:key=>values.get(key)??null, setItem:(key,v)=>values.set(key,v)};
 const previousWindow = globalThis.window;
 globalThis.window = browser;
 t.after(()=>{globalThis.window=previousWindow;});
 let now=1000;
 t.mock.method(Date,'now',()=>now);
 const c={...context(),world:new Container(),viewport:{maxX:1648,maxY:928},warp:(x,y)=>({x,y}),gaze:{x:0,y:0}};
 const makeScene=()=>createFeedScene(c);
 let scene=makeScene();
 scene.enter();
 const origin={x:1530,y:850}, target={x:813,y:551}, outside={x:1050,y:390};
 const event={pointerId:9};
 const basket=()=>c.world.children.at(-1).children[1];
 const count=()=>basket().children.slice(1,4).filter(n=>n.visible).length;
 function down(){scene.pointerDown(origin,origin,event,makeDrag);}
 function move(p){const d=c.state.drag; d.moved=true; scene.pointerMove(d,p); d.last=p;}
 function up(cancel=false){const d=c.state.drag; c.state.drag=null; scene.pointerEnd(d,cancel);}
 function advance(ms){now+=ms;scene.update();}
 const anchor=[basket().x,basket().y];
 const stockedFish=basket().children[1], seatedY=stockedFish.y;
 advance(1000);assert.ok(stockedFish.y<seatedY);assert.ok(Math.abs(basket().rotation)>.005);
 assert.deepEqual([basket().x,basket().y],anchor);
 down();up();assert.equal(count(),3);
 down();move(target);assert.equal(count(),2);assert.equal(scene.face.open,true);
 // This point was outside the old 104-unit radius and is inside the new mouth zone.
 move({x:950,y:548});assert.equal(scene.face.open,true);
 const held=c.world.children.at(-1).children[2];advance(20);
 const tail=held.children[0].rotation;advance(90);assert.notEqual(held.children[0].rotation,tail);
 move(outside);assert.equal(scene.face.open,false);assert.deepEqual([basket().x,basket().y],anchor);
 up();assert.equal(count(),2);assert.equal(scene.face.gazeAt,null);
 assert.equal(scene.face.mood,'sad');const releaseY=held.y;
 advance(50);assert.ok(held.y<releaseY);
 advance(950);assert.equal(count(),2);assert.equal(scene.face.mood,'sad');
 advance(350);assert.equal(count(),3);assert.equal(scene.face.mood,'sad');
 advance(1999);assert.equal(scene.face.mood,'sad');
 advance(1);assert.equal(scene.face.mood,'idle');
 down();move(outside);up();advance(1350);
 down();move(outside);assert.equal(scene.face.mood,'eager');up(true);
 down();move(target);up(true);assert.equal(count(),3);
 for(let left=2;left>=0;left--){
   const held=c.world.children.at(-1).children[2];
   down();move(outside);up();advance(620);
   const catchAt={x:held.x+36,y:held.y+4};
   scene.pointerDown({x:catchAt.x-205,y:catchAt.y},{},event,makeDrag);
   assert.equal(c.state.drag,null);assert.equal(scene.face.mood,'sad');
   const fishX=held.x,fishY=held.y;
   scene.pointerDown(catchAt,catchAt,event,makeDrag);
   assert.equal(scene.face.mood,'eager');assert.equal(scene.face.open,false);
   assert.equal(held.x,fishX);assert.equal(held.y,fishY);
   advance(1600);assert.equal(count(),left);assert.equal(held.y,fishY);
   if(left===2){
     up();advance(260);
     scene.pointerDown({x:held.x,y:held.y},{},event,makeDrag);
     assert.equal(scene.face.mood,'eager');up(true);assert.equal(count(),3);
     down();
   }
   move(target);up();
   assert.equal(count(),left);
   advance(220);assert.ok(held.mask);assert.equal(scene.face.open,true);
   advance(190);assert.equal(scene.face.aperture,0);
   for(const [index,duration] of [520,570,510,570,530].entries()){
     advance(duration*.45);
     assert.equal(Math.sign(scene.face.chew),index%2 ? -1 : 1);
     scene.drawDetails();assert.ok(!held.visible && scene.face.grip);assert.equal(scene.face.tail,1);
     assert.equal(scene.face.pat,0);
     advance(duration*.55);
   }
   advance(120);assert.equal(held.visible,false);assert.ok(scene.face.swallow>0);
   advance(439);assert.equal(scene.face.tuck,false);advance(1);
   if(!left){
     assert.equal(scene.face.tuck,true);
     advance(600);assert.ok(scene.face.pat>.9);
     advance(440);assert.ok(scene.face.pat<.15);
     advance(450);assert.ok(scene.face.pat>.7);
     advance(309);assert.ok(scene.face.inhale>.99);assert.equal(scene.face.burp,false);
     advance(1);assert.equal(scene.face.burp,true);
     advance(140);scene.drawDetails();assert.ok(scene.face.hiccup>.9);
     assert.equal(c.world.children.at(-1).children[4].visible,true);
     advance(1979);assert.equal(scene.face.tuck,true);
     advance(1);assert.equal(scene.face.tuck,false);assert.equal(scene.face.burp,false);
     advance(1520);
   }
   assert.equal(scene.face.mood,'idle');
   scene.exit();scene=makeScene();scene.enter();
   assert.equal(count(),left);
 }
 down();assert.equal(c.state.drag,null);assert.equal(scene.face.full,true);
 advance(29_999);assert.equal(count(),0);
 advance(1);assert.equal(count(),3);assert.equal(scene.face.full,false);
});
