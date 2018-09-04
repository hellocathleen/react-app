var path = require('path');
var webpack = require('webpack');
const dotenv = require('dotenv');
 
const env = dotenv.config().parsed;

// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

module.exports = env => {
  const env = dotenv.config().parsed;
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true
return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      './src/index.jsx'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/build/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }
};

 
