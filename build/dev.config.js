const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: {
    editor: resolve('src/pages/editor/index.tsx'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss', '.css'],
    alias: {
      src: resolve('src'),
    },
  },

  output: {
    filename: '[name].[hash].js',
    path: resolve('dist'),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.pug$/,
        use: 'pug-loader',
      },

      {
        test: /\.(png|jpg|gif|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/templates/index.pug'),
    }),
  ],

  devServer: {
    port: 3000,
    contentBase: resolve('dist'),
    hot: true,
  },
};
