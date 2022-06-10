const path = require('path');
const webpack = require('webpack');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
// const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  entry: ['regenerator-runtime/runtime.js', path.join(SRC_DIR, 'index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, DIST_DIR),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.jsx?$/i,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        sideEffects: true,
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src', 'client')],
        sideEffects: true,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'import',
                { libraryName: 'antd', style: true },
                'antd',
              ],
            ],
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
  stats: {
    errorDetails: true,
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  // mode: 'development',
  // optimization: {
  //   usedExports: true,
  // },
  mode: 'production',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  // plugins: [
  //   new CompressionPlugin({
  //     algorithm: 'gzip',
  //     test: /.js$|.css$|.jsx$/,
  //     threshold: 10240,
  //     minRatio: 0.8,
  //     exclude: /.map$/,
  //     deleteOriginalAssets: "keep-source-map",
  //   })],
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new DuplicatePackageCheckerPlugin(), // dedupe similar code
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /.js$|.css$|.jsx$/,
      threshold: 10240,
      minRatio: 0.8,
      exclude: /.map$/,
      deleteOriginalAssets: 'keep-source-map',
    }),
  ],
};
// module.exports = {
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
// };

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  return config;
};
