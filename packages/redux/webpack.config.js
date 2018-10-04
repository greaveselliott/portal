const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  SRC: path.join(__dirname, 'src')
};

const webpackConfig = {
  entry: ['./index.jsx'],
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ],
        include: [PATHS.SRC],
        enforce: 'pre'
      },

      {
        test: /\.jsx?$/,

        include: ['/'],
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },

      {
        test: /\.(woff|eot|ttf|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      },

      {
        test: /\.(jpg|gif|png|svg)$/,
        use: {
          loader: 'file-loader?name=[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = webpackConfig;
