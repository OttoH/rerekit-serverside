/**
 * find a way to change the header for SEO...
 *
 **/

import React from 'react'
import { renderToString } from 'react-dom/server'
// import { renderToStaticMarkup } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import reducers from '../reducers'
import routes from '../routes'

// core main vender
const manifest = require('../../dist/bundle/manifest.json')
const coreFile = 'bundle/' + manifest['core.js']
const mainFile = 'bundle/' + manifest['main.js']
const venderFile = 'bundle/' + manifest['vender.js']
const cssFile = 'bundle/' + manifest['main.css']

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      if (process.env.NODE_ENV === 'development') {
        res.status(200).send(`
          <!doctype html>
          <html>
            <header>
            <title>Little Universal App</title>
            </header>
            <body>
              <div id='app'></div>
              <script src='main.js'></script>
              <script src='vendor.js'></script>
            </body>
          </html>
        `)
      } else if (process.env.NODE_ENV === 'production') {
        res.status(200).send(`
          <!doctype html>
          <html>
            <header>
              <title>Little Universal App</title>
              <link rel='stylesheet' href='${cssFile}'>
              </header>
              <body>
                <div id='app'>${renderToString(
                  <Provider store={createStore(reducers)}>
                    <RouterContext {...renderProps} />
                  </Provider>
                )}</div>
                <script src='${coreFile}'></script>
                <script src='${venderFile}'></script>
                <script src='${mainFile}'></script>
              </body>
          </html>
        `)
      }
    } else {
      res.status(404).send('Not found')
    }
  })
}
