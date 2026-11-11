// Each fish uses the same drawing. The nose sits at (-52, 0) in local space.
const ink = 0x375474;
const outline = { color: ink, width: 4, join: 'round', cap: 'round' };

export function drawFish() {
    const fish = new PIXI.Container();
    const tail = new PIXI.Graphics();
    const g = new PIXI.Graphics();
    tail.position.set(25,0);
    tail.moveTo(0, -3).bezierCurveTo(18, -7, 27, -21, 32, -17)
        .bezierCurveTo(38, -13, 31, -2, 28, 1).bezierCurveTo(35, 12, 36, 19, 31, 19)
        .bezierCurveTo(22, 18, 8, 8, 0, 6).fill(0x549cae).stroke(outline);
    g.moveTo(-12, -19).bezierCurveTo(-7, -32, 5, -36, 13, -29)
        .lineTo(19, -18).fill(0x4598ac).stroke(outline);
    g.moveTo(-52, 0).bezierCurveTo(-48, -22, -14, -31, 12, -20)
        .bezierCurveTo(28, -14, 34, -6, 38, 0).bezierCurveTo(21, 21, -7, 29, -33, 17)
        .bezierCurveTo(-43, 13, -51, 7, -52, 0).fill(0x8cd2cf).stroke(outline);
    g.moveTo(-43, 8).bezierCurveTo(-25, 22, 1, 24, 22, 10)
        .bezierCurveTo(5, 15, -23, 8, -43, 8).fill(0xd7eee2);
    g.circle(-29, -4, 4.6).fill(ink);
    g.moveTo(-8, -2).bezierCurveTo(-2, -7, 4, -8, 8, -8)
        .bezierCurveTo(7, -1, 4, 5, -3, 7).stroke({color:0x4d959e,width:3,cap:'round'});
    fish.addChild(tail,g);
    fish.flex = bend => {
        tail.rotation = .42*bend;
        tail.scale.set(1-.19*Math.abs(bend),1);
        g.rotation = -.055*bend;
    };
    return fish;
}

export function drawBasket() {
    const basket = new PIXI.Container();
    const back = new PIXI.Graphics();
    back.ellipse(3, 57, 121, 14).fill({color:0x4eaae3,alpha:.36});
    back.moveTo(-74,-27).bezierCurveTo(-72,-136,71,-136,75,-27)
        .stroke({color:ink,width:17,cap:'round'});
    back.moveTo(-74,-27).bezierCurveTo(-72,-136,71,-136,75,-27)
        .stroke({color:0xe9a366,width:9,cap:'round'});
    back.ellipse(0,-25,119,28).fill(0xac6844).stroke(outline);
    basket.addChild(back);
    const seats = [
        {x:-65, y:-38, angle:.83}, {x:2, y:-50, angle:1.13}, {x:69, y:-38, angle:1.36}
    ];
    const fish = seats.map(({x,y,angle}) => {
        const sprite = drawFish();
        sprite.position.set(x,y);
        sprite.rotation = angle;
        sprite.scale.set(1.42);
        basket.addChild(sprite);
        return sprite;
    });
    const front = new PIXI.Graphics();
    front.moveTo(-118,-24).bezierCurveTo(-81,-4,82,-4,118,-24)
        .lineTo(101,38).bezierCurveTo(84,64,-82,64,-101,38)
        .lineTo(-118,-24).fill(0xefad69).stroke(outline);
    // Short split-reed bands follow the rounded basket.
    for (const y of [8,29]) {
        front.moveTo(-104,y-8).bezierCurveTo(-58,y+9,60,y+9,104,y-8)
            .stroke({color:0xc88249,width:5,cap:'round'});
    }
    for(const x of [-74,-40,0,40,74]) {
        front.moveTo(x,4).lineTo(x*.89,42).stroke({color:0xffcd86,width:5,cap:'round'});
    }
    front.moveTo(-118,-24).bezierCurveTo(-81,-3,81,-3,118,-24)
        .stroke({color:ink,width:15,cap:'round'});
    front.moveTo(-118,-24).bezierCurveTo(-81,-3,81,-3,118,-24)
        .stroke({color:0xffcc82,width:8,cap:'round'});
    basket.addChild(front);
    function animate(seconds) {
        const count = fish.filter(sprite => sprite.visible).length;
        const cycle = Math.floor(seconds / 2.45);
        const active = count ? cycle % count : -1;
        const beat = seconds % 2.45 - .65;
        const wave = (from,duration) => Math.sin(Math.PI*Math.max(0,Math.min(1,(beat-from)/duration)));
        const crouch = wave(0,.14), jump = wave(.14,.46), land = wave(.60,.16);
        const settle = wave(.76,.25);
        basket.rotation = active < 0 ? 0 : (active===0?-1:1)*(.018*crouch-.022*jump+.045*land-.012*settle);
        fish.forEach((sprite,i) => {
            const seat=seats[i], hopping=i===active;
            sprite.y=seat.y+(hopping?5*crouch-33*jump+5*land:0);
            sprite.rotation=seat.angle+(hopping?.19*jump-.075*land:0);
            sprite.flex(hopping ? jump*Math.sin(beat*17) + .3*land : 0);
        });
    }
    return {basket, fish, animate};
}
