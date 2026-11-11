// Matched points on the original and folded left outline, in body-image coordinates.
const outline = [
    [165.5, 119.6, 165.5, 119.6],
    [158.2, 128.9, 160, 127],
    [151.5, 138.7, 154.7, 134.5],
    [145.2, 148.8, 149.5, 142.2],
    [139.2, 159, 144.5, 150],
    [133.9, 169.6, 139.7, 157.8],
    [129, 180.4, 135.1, 165.8],
    [121.3, 188.4, 130.5, 173.8],
    [110.5, 184, 126.2, 182],
    [99.5, 179.6, 122, 190.2],
    [88, 176.6, 118, 198.5],
    [76.2, 175.6, 114.1, 206.9],
    [64.6, 177.7, 110.4, 215.4],
    [53.4, 181.5, 106.9, 223.9],
    [43, 187.2, 103.6, 232.5],
    [34.1, 195, 100.5, 241.2],
    [26.8, 204.3, 97.7, 250],
    [21.2, 214.7, 95, 258.8],
    [17.6, 226, 92.7, 267.8],
    [15.7, 237.7, 90.6, 276.7],
    [16.5, 249.4, 88.7, 285.8],
    [18.4, 261.1, 87.2, 294.9],
    [21.9, 272.4, 86.1, 304.1],
    [26.8, 283.2, 85.3, 313.3],
    [32.2, 293.8, 84.8, 322.5],
    [38.8, 303.6, 84.4, 331.7],
    [46.1, 313, 84.2, 340.9],
    [54, 321.8, 84.2, 350.2],
    [62.8, 329.7, 84.5, 359.4],
    [71.7, 337.5, 85, 368.6],
    [74.2, 348.5, 85.7, 377.8],
    [73.5, 360.3, 86.8, 387],
    [73.6, 372.2, 88.1, 396.1],
    [75.3, 383.9, 89.8, 405.2],
    [77.5, 395.5, 91.8, 414.2],
    [80.5, 407, 94.2, 423.1],
    [84.4, 418.2, 97, 431.9],
    [88.9, 429.2, 100.2, 440.5],
    [94.5, 439.6, 104, 449],
    [100.6, 449.8, 108.2, 457.2],
    [107.4, 459.5, 112.9, 465.1],
    [114.6, 468.9, 118.2, 472.7],
    [122.2, 478, 124.1, 479.8],
    [130.5, 486.4, 130.5, 486.4],
];

// Clip only the old side seam. The narrow band behind it supplies a smooth ink edge
// while the same body, hat, and face meshes continue breathing through the gesture.
export function drawFold(edge, clip, warp, amount) {
    edge.clear();
    clip.clear();
    const pts=outline.map(([x,y,tx,ty])=>[380+x+(tx-x)*amount,302+y+(ty-y)*amount]);
    const transform=points=>points.map(([x,y])=>warp(x,y));
    const trace=(g,points)=>{
        const [first,...rest]=transform(points);
        g.moveTo(first.x,first.y);
        for (const p of rest) g.lineTo(p.x,p.y);
    };
    const margin=pts.map((_,i)=>Math.min(1,i/3,(pts.length-1-i)/3));
    const strip=pts.map(([x,y],i)=>[x+34*margin[i],y]);
    trace(edge,[...pts,...strip.reverse(),pts[0]]);
    edge.fill(0xfcf8f7);
    trace(edge,pts);
    edge.stroke({color:0x203157,width:12,join:'round',cap:'round'});
    const k=Math.min(1,amount*8);
    const seam=pts.map(([x,y],i)=>[x-8+24*k*margin[i],y]);
    const top=seam[0][1],bottom=seam[seam.length-1][1];
    trace(clip,[[0,0],[1700,0],[1700,1000],[0,1000],[0,bottom],...seam.reverse(),[0,top],[0,0]]);
    clip.fill(0xffffff);
}
