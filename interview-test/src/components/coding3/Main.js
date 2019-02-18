import React, { Component } from 'react';
import '../../css/common.css';
import YouTube from 'react-youtube';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    opts = {
        height: '420',
        width: '800',
        playerVars: {
            autoplay: 1
        }
    };

    onPlay(event) {
        event.target.pauseVideo();
    }

    getVideoId = (videoId) => {
        this.props.getVideoId(videoId);
    }

  render() {
    var { videoId, resultSearch } = this.props;
    return (
        <div className="contentList">
            {
                videoId ?
                <YouTube 
                    videoId={ videoId }
                    opts={this.opts}
                /> :
                ""
            }
            {
                resultSearch ?
                resultSearch.map(item => 
                    <a key={item.id} style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }} onClick={ () => this.getVideoId(item.videoId)}>
                        <div key={item.id}>
                            <YouTube
                                videoId={item.videoId}
                                opts={this.opts}
                                className="video"
                                onPlay={this.onPlay}
                            />
                            <p className="text-name">{item.name}</p>
                        </div>
                    </a>
                )
                : <p>No video</p>
            }
        </div>
    );
  }
}

export default Main;
