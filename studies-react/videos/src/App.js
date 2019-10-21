import React, { Component } from 'react';

import { VideoService } from './services/VideoService';

import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import VideoCinema from './Components/VideoCinema';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.selectVideo = this.selectVideo.bind(this);
    
    this.state = {
      videos: [],
      selectedVideo: {}
    }
  }

  async componentDidMount() {
    const videos = await VideoService.list();
    this.setState({videos});

    this.selectVideo(videos[0]);
  }

  selectVideo(video) {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    const {state} = this;

    return (
      <div className="App">
        <VideoPlayer video={state.selectedVideo} />
        <VideoList videos={state.videos} />
        <VideoCinema isActive={false} />
      </div>
    );
  }
}

export default App;
