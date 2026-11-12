// Folded left outline in body-image coordinates. Switch the edge and mask together.
const outline = [
    [165.5, 119.6],
    [160, 127],
    [154.7, 134.5],
    [149.5, 142.2],
    [144.5, 150],
    [139.7, 157.8],
    [135.1, 165.8],
    [130.5, 173.8],
    [126.2, 182],
    [122, 190.2],
    [118, 198.5],
    [114.1, 206.9],
    [110.4, 215.4],
    [106.9, 223.9],
    [103.6, 232.5],
    [100.5, 241.2],
    [97.7, 250],
    [95, 258.8],
    [92.7, 267.8],
    [90.6, 276.7],
    [88.7, 285.8],
    [87.2, 294.9],
    [86.1, 304.1],
    [85.3, 313.3],
    [84.8, 322.5],
    [84.4, 331.7],
    [84.2, 340.9],
    [84.2, 350.2],
    [84.5, 359.4],
    [85, 368.6],
    [85.7, 377.8],
    [86.8, 387],
    [88.1, 396.1],
    [89.8, 405.2],
    [91.8, 414.2],
    [94.2, 423.1],
    [97, 431.9],
    [100.2, 440.5],
    [104, 449],
    [108.2, 457.2],
    [112.9, 465.1],
    [118.2, 472.7],
    [124.1, 479.8],
    [130.5, 486.4],
];

// Clip only the old side seam. The narrow band behind it supplies a smooth ink edge
// while the same body, hat, and face meshes continue breathing through the gesture.
export function drawFold(edge, clip, warp) {
    edge.clear();
    clip.clear();
    const pts=outline.map(([x,y])=>[380+x,302+y]);
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
    const seam=pts.map(([x,y],i)=>[x-8+24*margin[i],y]);
    const top=seam[0][1],bottom=seam[seam.length-1][1];
    trace(clip,[[0,0],[1700,0],[1700,1000],[0,1000],[0,bottom],...seam.reverse(),[0,top],[0,0]]);
    clip.fill(0xffffff);
}
