// New. Needs to be on top of babel-register
if (process.env.NODE_ENV === 'development') {
  require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  })
}

require('babel-register')({
  presets: ['es2015', 'react'],
  ignore: /node_modules/
})

require('./server.js')
