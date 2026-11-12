// Coordinates for facial features are registered to the same nose as the original rig.
// Transform each Bézier control point so that lips, cheek and fish follow the skin together.
const INK = 0x192b4c;
const THROAT = 0x562039;
const TONGUE = 0xff8992;

function curve(g, point, start, segments, fill, width = 0) {
    const coords = (x, y) => { const p = point(x, y); return [p.x, p.y]; };
    g.moveTo(...coords(...start));
    for (const [x1,y1,x2,y2,x3,y3] of segments)
        g.bezierCurveTo(...coords(x1,y1), ...coords(x2,y2), ...coords(x3,y3));
    if (fill !== null) g.fill(fill);
    if (width) g.stroke({color:INK, width, cap:'round', join:'round'});
}

function nose(g, point) {
    curve(g, point, [-18,-2], [
        [-19,-13, 12,-13, 19,-4], [24,8, 8,16, -3,12], [-12,10, -17,5, -18,-2]
    ], INK);
}

function drawOpening(g, point, amount) {
    // Start from a closed oval with matching tangents at each join. As the jaw
    // opens, the top edge moves up into the two lobes under the nose.
    const mix = (rest, open) => rest + (open-rest)*amount;
    const half=mix(15,60), side=mix(38,27), bottom=mix(55,148);
    const rightSide=mix(38,37);
    const outline = [
        [-half,mix(29,37), mix(-8,-15),mix(21,32), 0,mix(21,13)],
        [mix(8,13),mix(21,41), half,mix(29,50), half,rightSide],
        [half,mix(48,95), mix(8,50),bottom, 0,bottom],
        [mix(-8,-56),bottom, -half,mix(48,92), -half,side]
    ];
    curve(g,point,[-half,side],outline,THROAT);
    const tongueY=mix(44,120);
    curve(g,point,[-half*.71,tongueY],[
        [-half*.31,mix(38,99),half*.34,mix(39,95),half*.67,tongueY+2],
        [half*.42,bottom-1,-half*.39,bottom+1,-half*.71,tongueY]
    ],TONGUE);
    curve(g,point,[-half,side],outline,null,7);
    if (amount>.01) {
        curve(g,point,[-half,side],[
            [-half-amount,side+amount,-half-3*amount,side-amount,-half-4*amount,side-4*amount]
        ],null,7*amount);
        curve(g,point,[half,rightSide],[
            [half+amount,rightSide+amount,half+3*amount,rightSide-amount,half+4*amount,rightSide-4*amount]
        ],null,7*amount);
    }
    nose(g,point);
}

function drawChewing(g, point, face) {
    // Landmarks from the approved chewing pose, with the nose at (260,170).
    const ref = (x,y) => point((x-260)*1.79,(y-170)*1.79);
    curve(g,ref,[190,150],[[200,140,216,145,222,159]],null,11);
    curve(g,ref,[301,170],[[313,159,328,161,334,175]],null,11);

    const size = face.tail, angle = face.tailBend;
    const tail = (x,y) => {
        const u = (x-260)*size, v = (y-186)*size;
        return ref(260 + u*Math.cos(angle)-v*Math.sin(angle),186+u*Math.sin(angle)+v*Math.cos(angle));
    };
    if (size > .01) {
        curve(g,tail,[260,186],[
            [269,194,275,197,282,190], [292,184,304,179,313,185],
            [312,191,305,198,299,201], [306,207,311,215,310,220],
            [297,222,284,215,279,205], [273,203,263,198,260,186]
        ],0x31c7d6,6*size);
        curve(g,tail,[263,190],[[270,195,274,196,280,194],
            [277,197,276,199,276,201],[270,199,266,195,263,190]],0xfff8ee);
    }
    curve(g,ref,[230,175],[[245,181,253,201,237,214],
        [246,198,241,185,230,175]],INK);
    curve(g,ref,[244,193],[[249,193,255,193,260,185],[265,191,272,196,279,192]],null,6.8);
    nose(g,point);
}

function drawBurp(g, point, hiccup) {
    // Short happy squints and a rounded side-pursed mouth on exhalation.
    curve(g,point,[-132,-44],[[-123,-54,-111,-59,-99,-59]],null,7);
    curve(g,point,[87,-22],[[102,-21,113,-15,120,-8]],null,7);
    curve(g,point,[-128,-13],[[-118,-16,-104,-18,-95,-17]],null,9);
    curve(g,point,[83,10],[[93,9,106,13,115,16]],null,9);
    const depth=14+7*hiccup, width=35+5*hiccup;
    const lip = [[-3,31-depth,-width,30-depth,-width,36],
        [-width,42+depth, -5,40+depth, 9,40+depth*.6],
        [3,42,3,32,9,27-depth*.2]];
    curve(g,point,[9,27-depth*.2],lip,TONGUE,7);
    curve(g,point,[14,21-depth*.15],[[4,24,1,42,12,48+depth*.3]],null,7);
    nose(g,point);
}

export function drawFeedFace(g, warp, face) {
    const point = (x,y) => warp(775+x,472+y);
    if (face.burp) drawBurp(g,point,face.hiccup);
    else if (face.grip) drawChewing(g,point,face);
    else if (face.mood==='eager' || face.open) drawOpening(g,point,face.aperture);
}
