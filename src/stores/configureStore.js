
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers/index'
import {createLogger} from 'redux-logger'

// router
// import { browserHistory } from 'react-router'
// import { routerMiddleware } from 'react-router-redux'

// fetch api need link to store
import thunk from 'redux-thunk'

const logger = createLogger()
// const router = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

// adding thunk later
const configureStore = (initialState) => {
  return createStoreWithMiddleware(reducers, initialState)
}

export default configureStore
