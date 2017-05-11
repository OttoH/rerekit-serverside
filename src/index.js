import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import { actionCreators as tracksActionCreator } from './ducks/tracks'
import Routes from './routes'
// import { CLIENT_ID, REDIRECT_URI } from './constants/auth'

import './style/index.css'

// soundcloud  initialize
/*
import SoundCloud from 'soundcloud'
SoundCloud.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI })
*/

const tracks = [
  {
    title: 'coldplay'
  },
  {
    title: 'green days'
  }
]

const store = configureStore()

// router
const history = syncHistoryWithStore(browserHistory, store)

// demostrate initial
store.dispatch(tracksActionCreator.doSetTracks(tracks))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
    document.getElementById('app')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
