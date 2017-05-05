
import React from 'react';
import style from './style.css';

class Stream extends React.Component{

    render () {
        const { user, tracks = [], onAuth } = this.props;
        return (
            <div>
                <div>
                {
                  user ?
                    <div>{user.username}</div> :
                    <button onClick={onAuth} type="button">Login</button>
                }
                </div>
                <div>
                {
                    tracks.map((track, key) => {
                      return (
                        <div className={'track ' + style.trackitem}
                         key={key}>
                          {track.title}
                        </div>
                      );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Stream
