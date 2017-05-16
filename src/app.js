// development mode
if (process.env.NODE_ENV === 'development') {
  require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  })
}

require('./server.js')
