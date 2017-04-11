var path = require('path');

const config = {
  context:path.resolve(__dirname, 'src'),
  entry:{
    app:['main.js']
  },

  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'[name].js'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.vue'],
  },

  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.resolve(__dirname, 'src')
      },
      {
        test:/\.vue$/,
        loader:'vue-loader',
        include:path.resolve(__dirname, 'src/components')
      }]
  }
}

module.exports = config;
