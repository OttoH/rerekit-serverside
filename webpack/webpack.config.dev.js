var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '../src')
    ],
    vendor: [
      'react', 'react-dom', 'react-redux', 'redux'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../src'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        WEBPACK: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'inline-source-map',

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
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.less', 'css'],
    modules: ['node_modules']
  }
}
