
// types
const TRACKS_SET = 'tracks/TRACKS_SET'

// actions
const doSetTracks = (tracks) => {
  return {
    type: TRACKS_SET,
    payload: tracks
  }
}

// reducers
const initialState = {}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_SET:
      return applySetTracks(state, action)

    default:
      return state
  }
}

const applySetTracks = (state, action) => {
  const { payload } = action
  return (
  {
    ...state,
    tracks: payload
  }
  )
}

// index
export const actionCreators = {
  doSetTracks
}

export const actionTypes = {
  TRACKS_SET
}

export default reducer
