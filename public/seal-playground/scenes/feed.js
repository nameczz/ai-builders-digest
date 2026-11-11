import { drawBasket, drawFish } from './fish-art.js';

const PORTION = 3;
const TEST_REFILL_MS = 30_000;
const REFILL_MS = TEST_REFILL_MS; // 正式时长为 2 * 60 * 60 * 1000。
const DROP_MS = 1350;
const HELD_SCALE = 1.52;
// Milliseconds from a successful release; the child controls all anticipation time.
const REACH = 180;
const CATCH = REACH + 230;
const CHEWS = [860, 920, 850, 940, 930];
const TAIL_IN = CATCH + CHEWS.reduce((total, duration) => total + duration, 0);
const MEAL_MS = TAIL_IN + 560;
const FULL_MEAL_MS = MEAL_MS + 5440;
const unit = value => Math.max(0, Math.min(1, value));
const ease = value => { const t=unit(value); return t*t*(3-2*t); };
const KEY = 'seal-playground.meal.v1';
const pulse = (value) => Math.sin(Math.PI * Math.max(0,Math.min(1,value)));

function readMeal(previous) {
    try {
        const raw = JSON.parse(window.localStorage.getItem(KEY));
        if (Number.isInteger(raw?.left) && raw.left >= 0 && raw.left <= PORTION &&
            Number.isFinite(raw.readyAt) && (raw.left > 0 || raw.readyAt > 0)) return raw;
    } catch { /* Storage may be unavailable in an embedded preview. */ }
    return previous;
}

export function createFeedScene({ state, world, viewport, warp, sound, puffTexture }) {
    let meal = {left:PORTION,readyAt:0};
    let phase = 'idle', started = 0, entered = 0, lastMeal = false, burped = false;
    let release = {x:0,y:0,rotation:0};
    let updated = 0, caughtAperture = 0;
    let layer, basket, stock, animateBasket, fish, biteMask, details, puff;
    const neutral = { mood:'idle', gazeAt:null, open:false, aperture:0, chew:0, swallow:0,
        pat:0, tuck:0, inhale:0, hiccup:0, burp:false, cloud:0, full:false, fullness:0 };
    const face = { ...neutral };
    const mouth = () => warp(775,533);
    function save(left, readyAt=0) {
        meal = { left, readyAt };
        try { window.localStorage.setItem(KEY,JSON.stringify(meal)); } catch { /* Use in-memory meal. */ }
    }
    function refresh() {
        if (!meal.left && Date.now() >= meal.readyAt) save(PORTION);
    }
    function syncMeal() { meal=readMeal(meal); refresh(); }
    function resetFace() {
        Object.assign(face, neutral, {full:!meal.left, fullness:face.fullness});
    }
    function layout() {
        basket.position.set(viewport.maxX-193,viewport.maxY-108);
    }
    function paintStock() {
        const reserved = phase==='carry'||phase==='drop' ? 1 : 0;
        stock.forEach((f,i)=>{ f.visible=i<meal.left-reserved; });
    }
    function carry(p) {
        const tilt = .075*Math.sin((Date.now()-entered)/130);
        fish.rotation=tilt;
        fish.position.set(p.x+36,p.y-15);
        const nose={x:fish.x-52*HELD_SCALE*Math.cos(tilt),y:fish.y-52*HELD_SCALE*Math.sin(tilt)};
        const target=mouth();
        face.mood='eager';
        face.gazeAt=nose;
        face.open=((nose.x-target.x)/156)**2+((nose.y-target.y)/118)**2<=1;
    }
    function setIdle() {
        phase='idle';
        fish.visible=false;
        fish.mask=null;
        biteMask.visible=false;
        puff.visible=false;
        resetFace();
        paintStock();
    }
    function eat() {
        caughtAperture=face.aperture;
        lastMeal = meal.left===1;
        phase='eat';
        started=Date.now();
        burped=false;
        save(meal.left-1,lastMeal ? started+FULL_MEAL_MS+REFILL_MS : 0);
        animateMeal(0);
        paintStock();
        sound.tone(275,.12,true);
    }
    function animateMeal(ms) {
        const reach=ease(ms/REACH);
        const bite=ease((ms-REACH)/(CATCH-REACH));
        const close=ease((ms-CATCH+80)/80);
        const suck=ease((ms-TAIL_IN)/120);
        face.mood='content';
        face.gazeAt=null;
        face.open=ms<CATCH;
        face.aperture=(caughtAperture+(1-caughtAperture)*reach)*(1-close);

        let elapsed=ms-CATCH;
        face.chew=0;
        for (const [i, duration] of CHEWS.entries()) {
            if (elapsed>=0 && elapsed<duration) {
                const t=elapsed/duration;
                face.chew=(i%2 ? -1 : 1)*ease(t/.40)*(1-ease((t-.48)/.52));
                break;
            }
            elapsed-=duration;
        }
        face.swallow=pulse((ms-TAIL_IN-100)/420);
        face.full=lastMeal && ms>=TAIL_IN;
        face.fullness=lastMeal ? ease((ms-TAIL_IN)/550) : 0;
        const belly=ms-MEAL_MS;
        if (lastMeal) {
            face.tuck=ease((belly+280)/560)*(1-ease((belly-4260)/950));
            face.pat=pulse((belly-290)/670)+pulse((belly-1020)/670);
            face.inhale=ease((belly-1480)/320)*(1-ease((belly-1800)/360));
            face.hiccup=pulse((belly-1800)/300);
            face.burp=belly>=1800 && belly<3920;
            face.cloud=unit((belly-1800)/2360);
            if (belly>=1800 && !burped) { sound.tone(162,.20,true); burped=true; }
        }

        fish.visible=ms<TAIL_IN+120;
        if (fish.visible) {
            const lip=warp(775+24*bite,533-36*bite+3*Math.abs(face.chew));
            const targetX=lip.x+HELD_SCALE*(52-87*bite-35*suck);
            fish.position.set(release.x+(targetX-release.x)*reach,release.y+(lip.y-release.y)*reach);
            fish.rotation=release.rotation*(1-reach);
            let flick=0;
            for (const offset of [290,2160,3790]) {
                const t=unit((ms-CATCH-offset)/500);
                flick+=Math.sin(2*Math.PI*t)*Math.sin(Math.PI*t);
            }
            fish.flex((1-bite)*.45*Math.sin(ms/90)+flick*(1-suck));
            if (ms>=REACH) {
                biteMask.visible=true;
                biteMask.clear().rect(lip.x,lip.y-90,245,180).fill(0xffffff);
                fish.mask=biteMask;
            }
        } else if (biteMask.visible) {
            fish.mask=null;
            biteMask.visible=false;
        }
        if (ms>=(lastMeal ? FULL_MEAL_MS : MEAL_MS)) setIdle();
    }
    // Cubic centre lines in body-image coordinates, from the side pose to the approved belly pose.
    // The source and destination share stroke endpoints throughout each pat.
    const fins = [
        {
            side:1, rest:[[64,207],[53,222],[43,237],[45,252],[46,265],[53,274],[61,279]],
            folded:[[228,342],[252,352],[277,383],[263,403],[245,424],[210,415],[195,394]]
        },
        {
            side:-1, rest:[[596,353],[647,335],[716,363],[721,413],[728,458],[673,492],[620,494]],
            folded:[[551,346],[527,359],[502,386],[514,404],[530,426],[567,416],[587,396]]
        }
    ];
    function drawFins() {
        const tuck=face.tuck;
        for (const fin of fins) {
            const pts=fin.rest.map(([x,y],index)=>{
                const [tx,ty]=fin.folded[index];
                const tip=Math.sin(Math.PI*index/6);
                return warp(380+x+(tx-x)*tuck+fin.side*15*face.pat*tip,
                    302+y+(ty-y)*tuck+tuck*face.pat*(12+17*tip));
            });
            const [a,b,c,d,e,f,g]=pts;
            details.moveTo(a.x,a.y).bezierCurveTo(b.x,b.y,c.x,c.y,d.x,d.y)
                .bezierCurveTo(e.x,e.y,f.x,f.y,g.x,g.y)
                .stroke({width:11-2*tuck,color:0x202f50,cap:'round',join:'round',
                    alpha:fin.side===1 ? ease((tuck-.10)/.80) : Math.min(1,tuck*7)});
        }
    }
    function drawDetails() {
        details.clear();
        if (face.tuck) drawFins();
        if (face.mood==='sad') {
            const ink=0x243751, nose=warp(775,472);
            details.ellipse(nose.x,nose.y,17,9).fill(ink);
            details.moveTo(nose.x-20,nose.y+39).bezierCurveTo(nose.x-8,nose.y+21,nose.x+8,nose.y+22,nose.x+17,nose.y+41)
                .stroke({color:ink,width:7,cap:'round'});
            for (const [x,y,dir] of [[681,455,1],[885,495,-1]]) {
                const b=warp(x,y);
                details.moveTo(b.x-17*dir,b.y-24).bezierCurveTo(b.x-4*dir,b.y-25,b.x+5*dir,b.y-31,b.x+13*dir,b.y-35)
                    .stroke({color:ink,width:5,cap:'round'});
            }
        }
        const t=face.cloud;
        puff.visible=t>0 && t<1;
        if (puff.visible) {
            const lip=warp(755,505), travel=1-(1-t)**1.35;
            puff.position.set(lip.x-192*travel,lip.y-42*travel-91*travel*travel);
            puff.scale.set(.09+.52*ease(t/.72));
            puff.alpha=1-ease((t-.65)/.35);
        }
    }
    return {
        face, drawDetails,
        enter() {
            state.scale=1; state.ox=state.oy=0;
            syncMeal();
            layer=new PIXI.Container();
            const art=drawBasket(); basket=art.basket; stock=art.fish; animateBasket=art.animate;
            basket.scale.set(1.33); entered=Date.now();
            fish=drawFish(); details=new PIXI.Graphics(); biteMask=new PIXI.Graphics();
            puff=new PIXI.Sprite(puffTexture);
            puff.anchor.set(.86,.84);
            layer.addChild(details,basket,fish,biteMask,puff); world.addChild(layer);
            layout(); setIdle(); face.fullness=meal.left ? 0 : 1; updated=Date.now();
            window.addEventListener('storage',syncMeal);
        },
        exit() {
            window.removeEventListener('storage',syncMeal);
            layer.destroy({children:true});
            phase='idle'; resetFace();
        },
        pointerDown(p,l,event,makeDrag) {
            if (phase==='eat' || phase==='drop') return true;
            const inBasket=Math.abs(p.x-basket.x)<=172 && p.y>=basket.y-177 && p.y<=basket.y+88;
            if (!inBasket) return false;
            syncMeal();
            if (phase==='idle' && meal.left) state.drag=makeDrag('fish',p,l,event);
            return true;
        },
        pointerMove(d,p) {
            if(d.kind!=='fish' || !d.moved) return;
            if(phase==='idle') {
                phase='carry'; fish.visible=true; fish.scale.set(HELD_SCALE); fish.rotation=0;
                paintStock();
            }
            carry(p);
        },
        pointerEnd(d,cancel) {
            if(d.kind!=='fish' || phase!=='carry') return;
            syncMeal();
            if(cancel || !meal.left) { setIdle(); return; }
            carry(d.last);
            release={x:fish.x,y:fish.y,rotation:fish.rotation};
            if(face.open) eat();
            else { phase='drop'; started=Date.now(); resetFace(); face.mood='sad'; }
        },
        update() {
            refresh(); layout();
            const now=Date.now(), ms=now-started;
            const dt=Math.max(0,now-updated);
            updated=now;
            if(phase==='carry') {
                carry(state.drag.last);
                face.aperture+=(Number(face.open)-face.aperture)*(1-Math.exp(-dt/36));
                fish.flex(Math.sin((Date.now()-entered)/86));
            }
            if(phase==='eat') animateMeal(ms);
            if(phase==='drop') {
                const t=unit(ms/DROP_MS);
                fish.position.set(release.x+24*t, release.y+(viewport.maxY+120-release.y)*t*t-36*Math.sin(Math.PI*t));
                fish.rotation=.58*ease(t);
                fish.flex(.5*(1-t)*Math.sin(ms/93));
                if(t>=1) setIdle();
            }
            if(phase==='idle') {
                face.full=!meal.left;
                face.fullness+=(Number(face.full)-face.fullness)*(1-Math.exp(-dt/160));
            }
            paintStock(); animateBasket((Date.now()-entered)/1000);
        }
    };
}
