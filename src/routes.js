import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/presenter'
// import Callback from './components/Callback'
import Stream from './components/Stream'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Stream}/>
        <Route compoment={Stream}/>
        <Route path="/callback" getComponet={(location, callback) => {
            require.ensure([], require => {
                callback(null, require('./components/Callback'))
            }, 'Callback')
        }}/>
    </Route>
)
