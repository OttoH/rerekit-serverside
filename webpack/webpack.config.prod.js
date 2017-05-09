const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry:
  {
    main: [
      './src/index'
    ],
    vender: [
      'react', 'react-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['core'],
      minChunks: Infinity
    }),
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        WEBPACK: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ],

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react', 'stage-3'] }
          }
        ]

      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
    modules: ['node_modules']
  }
}
