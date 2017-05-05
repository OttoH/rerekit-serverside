
import React from 'react';
import { connect } from 'react-redux';
import Stream from './presenter'

// bind actions
import { bindActionCreators } from 'redux'
import { actionCreators as authActionCreators } from '../../ducks/auth';

const mapStateToProps = (state) => {
    return {
        ...state.auth,
        ...state.tracks
    }
}

const mapDispathToProps = (dispatch) => {
    return (
        {
            onAuth: bindActionCreators(authActionCreators.doAuth, dispatch)
        }
    )
}

export default connect(mapStateToProps, mapDispathToProps)(Stream)
