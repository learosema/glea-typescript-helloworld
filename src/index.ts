import GLea from 'glea';

const vert = `
precision highp float;
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0, 1.0);
}
`;

const frag = `
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
`;

const glea = new GLea({
  shaders: [GLea.fragmentShader(frag), GLea.vertexShader(vert)],
  buffers: {
    // create a position attribute bound
    // to a buffer with 4 2D coordinates
    // this is what GLea provides by default if you omit buffers in the constructor
    position: GLea.buffer(2, [1, 1, -1, 1, 1, -1, -1, -1]),
  },
}).create();

function loop(time: number): void {
  const { gl, width, height } = glea;
  glea.clear();
  glea.uniV('resolution', [width, height]);
  glea.uni('time', time * 1e-3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(loop);
}

function setup(): void {
  window.addEventListener('resize', () => {
    glea.resize();
  });
  loop(0);
}

setup();
