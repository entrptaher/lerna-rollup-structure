import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}