precision highp float;
uniform float time;
uniform vec2 resolution;

void main() {
  float vmin = min(resolution.y, resolution.x);

  vec2 p0 = (gl_FragCoord.xy - .5 * resolution) / vmin;
  vec2 p = abs(p0 * sin(log(length(p0)) + time * .1)) * sin(time * .1) * 4.;
  float checkers = 10. / p.y * sin(time * .7 + sin(p.x * 20.)) * cos(time * 1. + sin(p.y * 20.));
  float r = checkers * sin(p.x - time * 1.2);
  float g = checkers * sin(p.x - time * .1);  
  float b = checkers * sin(p.x - time * .3);
  gl_FragColor = vec4(r, g, b, 1.);
}
