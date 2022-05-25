const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const config = {
  entry: ['regenerator-runtime/runtime.js', path.join(SRC_DIR, 'index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, DIST_DIR),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/i,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
