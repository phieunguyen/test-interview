import React, { Component } from 'react';
import '../../css/common.css';
import ShowList from '../coding3/ShowList';
import Main from '../coding3/Main';
import Search from '../coding3/Search';

class CodingLevel3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listVideo : '',
            videoId : '',
            resultSearch : []
        };
    }

    componentWillMount() {
        this.getListVideo();
    }

    getListVideo = () => {
        this.setState({
            listVideo : listVideo
        });
    }

    getVideoId = (data) => {
        // console.log(data);
        this.setState({
            videoId: data
        })
    }

    searchVideo = (data) => {
        this.setState({
            resultSearch : data
        });
    }

  render() {
    return (
        <div className="body">
            <div align="center">
                <Search item={this.state.listVideo} resultSearch={this.searchVideo}/>
            </div>
            <div className="videoMain">
                <div className="videoPlay">
                    <Main videoId={this.state.videoId} resultSearch={this.state.resultSearch} getVideoId={this.getVideoId}/>
                </div>
                <div className="videoList">
                    <ShowList data={ this.state.listVideo } getVideoId={this.getVideoId} />
                </div>
            </div>
            
        </div>
        
        
    );
  }
}

const listVideo = [
    {
        id: 1,
        name: 'Tình đơn phương ACOUSTIC COVER',
        videoId: 'lGbzyKWkiio',
    },
    {
        id: 2,
        name: 'Vì anh thương em (vô cùng)',
        videoId: 'iJKV5miglAg',
    },
    {
        id: 3,
        name: 'Ngắm hoa lệ rơi',
        videoId: 'SItFPrgEITM',
    },
    {
        id: 4,
        name: 'Đơn coi tình tôi',
        videoId: 'lDowG6GnEfM',
    }
]

export default CodingLevel3;
