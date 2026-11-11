// Lightweight Canvas presentation for the embedded preview. Gameplay and rig
// vertices are supplied by the same modules as the production Pixi runtime.
(() => {
  const probe=document.createElement('canvas');
  let gl;
  try { gl=probe.getContext('webgl2',{stencil:true}) || probe.getContext('webgl',{stencil:true}); } catch {}
  if(gl && gl.getContextAttributes()?.stencil){
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return;
  }
  const color = n => '#'+n.toString(16).padStart(6,'0');
  class Point {
    constructor(x=0,y=x){this.set(x,y)}
    set(x,y=x){this.x=x;this.y=y}
  }
  class Container {
    constructor(){this.position=new Point();this.scale=new Point(1);this.rotation=0;this.children=[];this.visible=true;this.alpha=1}
    get x(){return this.position.x} set x(v){this.position.x=v}
    get y(){return this.position.y} set y(v){this.position.y=v}
    addChild(...nodes){for(const n of nodes){n.parent=this;this.children.push(n)}return nodes[0]}
    addChildAt(n,i){this.children.splice(i,0,n);n.parent=this}
    getChildIndex(n){return this.children.indexOf(n)}
    removeChildren(){return this.children.splice(0)}
    destroy(){if(this.parent){const i=this.parent.children.indexOf(this);if(i>=0)this.parent.children.splice(i,1)}this.children=[]}
    set mask(value){if(this._mask)this._mask.isMask=false;this._mask=value;if(value)value.isMask=true}
    get mask(){return this._mask}
    onViewUpdate(){}
  }
  class Graphics extends Container {
    constructor(){super();this.clear()}
    clear(){this.items=[];this.fresh=true;this.path=new Path2D();return this}
    begin(){if(this.fresh){this.path=new Path2D();this.fresh=false}return this.path}
    ellipse(x,y,w,h){this.begin().ellipse(x,y,w,h,0,0,2*Math.PI);return this}
    circle(x,y,r){return this.ellipse(x,y,r,r)}
    rect(x,y,w,h){this.begin().rect(x,y,w,h);return this}
    roundRect(x,y,w,h,r){this.begin().roundRect(x,y,w,h,r);return this}
    moveTo(...v){this.begin().moveTo(...v);return this}
    lineTo(...v){this.begin().lineTo(...v);return this}
    bezierCurveTo(...v){this.begin().bezierCurveTo(...v);return this}
    poly(a){this.moveTo(a[0],a[1]);for(let i=2;i<a.length;i+=2)this.lineTo(a[i],a[i+1]);this.path.closePath();return this}
    star(x,y,n,r,s){const a=[];for(let i=0;i<n*2;i++){const t=i*Math.PI/n-Math.PI/2;const d=i%2?s:r;a.push(x+Math.cos(t)*d,y+Math.sin(t)*d)}return this.poly(a)}
    fill(style){this.items.push(['fill',this.path,style]);this.fresh=true;return this}
    stroke(style){this.items.push(['stroke',this.path,style]);this.fresh=true;return this}
    draw(ctx){for(const [op,path,s] of this.items){ctx.save();const opt=typeof s==='number'?{color:s}:s;ctx.globalAlpha*=opt.alpha??1;ctx.fillStyle=ctx.strokeStyle=color(opt.color);ctx.lineWidth=opt.width??1;ctx.lineJoin=opt.join??'round';ctx.lineCap=opt.cap??'round';ctx[op](path);ctx.restore()}}
  }
  // Render the same indexed triangles as DeformMesh. Each destination pixel samples
  // the original PNG once, so adjacent triangles cannot introduce a visible seam.
  const sources = new WeakMap(), surfaces = new WeakMap();
  function pixelsFor(image) {
    if (!sources.has(image)) {
      const canvas = document.createElement('canvas');
      canvas.width=image.width; canvas.height=image.height;
      const context=canvas.getContext('2d');
      context.drawImage(image,0,0);
      sources.set(image,context.getImageData(0,0,image.width,image.height).data);
    }
    return sources.get(image);
  }
  function mesh(ctx,node) {
    const im=node.texture.source.resource, pixels=pixelsFor(im), p=node.positions;
    const mat=ctx.getTransform(), scale=Math.max(.2,Math.min(1.2,Math.hypot(mat.a,mat.b)));
    let x0=Infinity,y0=Infinity,x1=-Infinity,y1=-Infinity;
    for(let i=0;i<p.length;i+=2){
      x0=Math.min(x0,p[i]);x1=Math.max(x1,p[i]);
      y0=Math.min(y0,p[i+1]);y1=Math.max(y1,p[i+1]);
    }
    x0=Math.floor(scale*x0)-1;y0=Math.floor(scale*y0)-1;
    const w=Math.ceil(scale*x1)-x0+1,h=Math.ceil(scale*y1)-y0+1;
    let tile=surfaces.get(node);
    if(!tile){
      const canvas=document.createElement('canvas');
      tile={canvas,context:canvas.getContext('2d')};surfaces.set(node,tile);
    }
    if(tile.canvas.width<w||tile.canvas.height<h||!tile.frame){
      tile.canvas.width=Math.ceil(w/32)*32;tile.canvas.height=Math.ceil(h/32)*32;
      tile.frame=tile.context.createImageData(tile.canvas.width,tile.canvas.height);
    }
    const data=tile.frame.data,stride=tile.canvas.width;data.fill(0);
    const du=im.width/(node.nx-1),dv=im.height/(node.ny-1);
    function triangle(a,b,c,u,v,su,sv) {
      const ax=p[a]*scale-x0,ay=p[a+1]*scale-y0;
      const bx=p[b]*scale-x0,by=p[b+1]*scale-y0,cx=p[c]*scale-x0,cy=p[c+1]*scale-y0;
      const ex=bx-ax,ey=by-ay,fx=cx-ax,fy=cy-ay,det=ex*fy-ey*fx;
      if(Math.abs(det)<.00001)return;
      const left=Math.floor(Math.min(ax,bx,cx)), right=Math.ceil(Math.max(ax,bx,cx));
      const top=Math.floor(Math.min(ay,by,cy)), bottom=Math.ceil(Math.max(ay,by,cy));
      for(let y=top;y<bottom;y++){
        const dy=y+.5-ay;
        for(let x=left;x<right;x++){
          const dx=x+.5-ax,s=(dx*fy-dy*fx)/det,t=(dy*ex-dx*ey)/det;
          if(s<-.00001||t<-.00001||s+t>1.00001)continue;
          const ix=Math.max(0,Math.min(im.width-1.00001,u+s*su-.5));
          const iy=Math.max(0,Math.min(im.height-1.00001,v+t*sv-.5));
          const i=ix|0,j=iy|0,k=4*(j*im.width+i),next=k+4*im.width;
          const tx=ix-i,ty=iy-j,to=4*(y*stride+x);
          for(let ch=0;ch<4;ch++)data[to+ch]=(1-ty)*((1-tx)*pixels[k+ch]+tx*pixels[k+4+ch])
            +ty*((1-tx)*pixels[next+ch]+tx*pixels[next+4+ch]);
        }
      }
    }
    for(let j=0;j<node.ny-1;j++)for(let i=0;i<node.nx-1;i++){
      const a=2*(j*node.nx+i),b=a+2,c=a+2*node.nx,d=c+2;
      triangle(a,b,c,i*du,j*dv,du,dv);
      triangle(d,c,b,(i+1)*du,(j+1)*dv,-du,-dv);
    }
    tile.context.putImageData(tile.frame,0,0,0,0,w,h);
    ctx.drawImage(tile.canvas,0,0,w,h,x0/scale,y0/scale,w/scale,h/scale);
  }
  function draw(ctx,n){
    if(!n.visible||n.isMask||n.renderable===false)return;
    ctx.save();
    if(n.mask){const combined=new Path2D();for(const [op,path] of n.mask.items)if(op==='fill')combined.addPath(path);ctx.clip(combined)}
    ctx.translate(n.x,n.y);ctx.rotate(n.rotation);ctx.scale(n.scale.x,n.scale.y);ctx.globalAlpha*=n.alpha;
    if(n.positions)mesh(ctx,n);else n.draw?.(ctx);
    for(const child of n.children)draw(ctx,child);ctx.restore();
  }
  class Sprite extends Container {
    constructor(texture){super();this.texture=texture;this.anchor=new Point()}
    draw(ctx){const im=this.texture.source.resource;ctx.drawImage(im,-this.anchor.x*im.width,-this.anchor.y*im.height)}
  }
  class Application {
    constructor(){this.canvas=document.createElement('canvas');this.stage=new Container()}
    async init(options){
      const ctx=this.canvas.getContext('2d'), scale=Math.min(devicePixelRatio||1,1.5);
      this.renderer={resize:(w,h)=>{this.canvas.width=w*scale;this.canvas.height=h*scale;this.canvas.style.width=w+'px';this.canvas.style.height=h+'px'},render:()=>{
        ctx.setTransform(scale,0,0,scale,0,0);ctx.fillStyle=color(options.background);ctx.fillRect(0,0,this.canvas.width,this.canvas.height);draw(ctx,this.stage);
      }};
      this.ticker={add:fn=>{let last=performance.now();const frame=t=>{fn({deltaMS:t-last});last=t;this.renderer.render();requestAnimationFrame(frame)};requestAnimationFrame(frame)}};
    }
  }
  window.PIXI={VERSION:"offline-canvas",Sprite,Application,Container,Graphics,ViewContainer:Container,State:{for2d:()=>({})},BufferUsage:{},Buffer:class{update(){}},Geometry:class{on(){}},Texture:{from:resource=>({source:{resource}})}};
})();
