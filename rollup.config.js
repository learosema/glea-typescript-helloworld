import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import glsl from 'rollup-plugin-glsl';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'public/bundle.js',
      format: 'iife',
      name: 'App',
    },
  ],
  plugins: [
    resolve(),
    glsl({
      // By default, everything gets included
      include: 'src/**/*.glsl',

      // Source maps are on by default
      sourceMap: false,
    }),
    typescript(),
  ],
};
