const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '..'),

    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
		path.resolve(__dirname, '../src')
    ],

    output: {
        path: path.resolve(__dirname, '../src'),
		filename: 'bundle.js',
		publicPath: '/'
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		}),
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'cheap-module-source-map',

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
                ],

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
        extensions: ['*', '.js', '.jsx', '.less'],
        modules: ['node_modules']
    }
}
