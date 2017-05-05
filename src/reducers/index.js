
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from '../ducks/auth'
import tracks from '../ducks/tracks'

export default combineReducers({
    auth,
    tracks,
    routing: routerReducer
})
