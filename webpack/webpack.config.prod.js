var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin')
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
var WebpackChunkHash = require('webpack-chunk-hash')

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry:
  {
    vender: [
      'react', 'react-dom', 'redux', 'react-redux', 'redux-thunk'
    ],
    main: [
      './src/index'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../dist/bundle'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'core'],
      minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
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
      filename: '[name].[contenthash].css',
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
