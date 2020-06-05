import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'public/bundle.js',
      format: 'iife',
      name: 'App',
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};
