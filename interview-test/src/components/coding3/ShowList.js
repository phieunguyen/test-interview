import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ShowList extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;  
    }

    onPlay(event) {
        event.target.pauseVideo();
    }
    
    getVideoId = (videoId) => {
        this.props.getVideoId(videoId);
    }


  render() {
      
    var eleVideo = this.data.map(item => {
        return  <a key={item.id} style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }} onClick={ () => this.getVideoId(item.videoId)}>
                    <YouTube
                        videoId={item.videoId}
                        opts={this.opts}
                        className="video"
                    />
                    <p className="text-name">{item.name}</p>
                </a>
    });
    return (
        <div className="contentList">
            {eleVideo}
        </div>
        
        
    );
  }
}

export default ShowList;
