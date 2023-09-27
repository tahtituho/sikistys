precision lowp float;
uniform float t;

float d;
float mt;
float k;

vec3 n;
vec3 as;
vec3 ac;

vec2 uv;
vec2 e;
vec2 resolution = vec2(1280, 720);
vec3 rot(vec3 zp, vec3 a) {
    as = sin(a);
    ac = cos(a);
    zp = vec3(
        ac.z*zp.x-as.z*zp.y,
        as.z*zp.x+ac.z*zp.y,
        zp.z);
    return vec3(
        ac.y*zp.x+as.y*zp.z,
        zp.y,
        -as.y*zp.x+ac.y*zp.z
    );
}

float scene(vec3 path) {    
    path = rot(path, vec3(-t)) + sin(rot(path, vec3(t)) * 2.0) * 0.15;
    mt = length(tan(path * 20.0 + t * 20.0)) * smoothstep(22.5, 20.0, t);
    return abs(dot(sin(path), cos(path.zxy)) - 3.0) - 2.0;
}

void main() {
    uv = (2.0 * gl_FragCoord.xy - resolution) / resolution.y;
    for(int i = 0; i <= 64; i++) {
        n = vec3(t / 6.2) + normalize(vec3(0.0, -0.5145, -0.8575) + uv.x * vec3(-0.75, 0.0, 0.0) + uv.y * vec3(0.0, 0.6443, -0.3859)) * d;
        k = scene(n);
        d += k;
        e = vec2(0.15, 0.0);
        n = normalize(
            vec3(scene(n + e.xyy) - k,
                 scene(n + e.yxy) - k,
                 scene(n + e.yyx) - k
        ));
       
    }

    gl_FragColor = vec4(vec3(step(d, 20.0)) * (mt * n * max(dot(n, vec3(0.0, 1.0, 0.5)), 0.0)), 1.0); 
}