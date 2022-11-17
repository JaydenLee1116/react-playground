const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // 배포의 경우, hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: { browsers: ['> 1% in KR'] } }], // browserslist 참고
            '@babel/preset-react',
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};
