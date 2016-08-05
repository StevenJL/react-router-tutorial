/* webpack takes modules with dependencies and generates static assets representing those modules. */
/* you know, like, duh. */

module.exports = {
  /* which file to start with when compiling */
  entry: './index.js',

  output: {
    /* webpack compiles javascript into a single bundle.js file */
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
