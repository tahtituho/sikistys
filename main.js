d = document;
c = d.body.appendChild(d.createElement("canvas"));
c.width = 1280;
c.height = 720;

g = c.getContext("webgl");

for (i in g) {
    g[i[0] + i[6]] = g[i];
}

a = new AudioContext();
for (i in a) {
    a[i[6]] = a[i];
}

f = requestAnimationFrame;

cs = (src, type, shader = g.cS(type)) => {
    g.sS(shader, src);
    g.compileShader(shader);
    return shader;
}

d = () => {  
    g.uniform1f(g.gf(p, "t"), a.currentTime);
    g.dr(6, 0, 3);
    f(d);
}

c.onclick = _ => {
    c.requestFullscreen();
    k = a.B();
    k.buffer = a.createBuffer(1, q = 8000 * 45, 8000)
    for (t = q; t--;) {
        //Write tune here
        k.buffer.getChannelData(0)[t] = (
            ("34"[t>>8&t])*70.0|((t^(t>>50))-(t&(t>>5))-(t^(2*t>>3)))
        & 255) / 127 - 1;
    }
    k.connect(a.a);
    k.start();


    g.aS(p = g.cP(), cs(`attribute vec4 p;void main(){gl_Position=p;}`, 35633));
    g.aS(p, cs(shader_frag, 35632));

    g.lo(p);

    g.vA(g.ug(p), 2, 5120, g.bf(34962, g.cB()), 1, g.bD(34962, new Int8Array(m = [1, -3, 1, 1]), 35044));
    g.eV(0);
    f(d);
}
