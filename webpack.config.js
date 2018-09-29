const path = require('path');

module.exports = {
  "target": "node",
  watch: true,
  watchOptions: {
    ignored: ['files/**/*.js', 'node_modules']
  },
  entry: path.resolve(__dirname, './src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/ | dev'
      }
    ]
  },
  resolve: {

    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    library: 'library',
    libraryTarget: 'umd'
  },
  node:{
    __dirname:false
  }
};

