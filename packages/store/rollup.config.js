import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs'
  },
  plugins:[
    babel({
      runtimeHelpers: true,
      presets: ["@babel/preset-env"],
      plugins: [
        [
          "@babel/plugin-proposal-decorators",
          {
            legacy: true
          }
        ],
        [
          "@babel/plugin-proposal-class-properties",
          {
            loose: true
          }
        ],
        "@babel/plugin-transform-runtime"
      ]
    })
  ]
}