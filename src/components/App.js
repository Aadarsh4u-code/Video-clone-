import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YoutubeApi';
import VideoList from './VideosList';
import VideoDetails from './VideoDetails';

 export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('god');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search',{
      params: {
        q: term
      }
    });
     this.setState({
       videos: response.data.items,
       selectedVideo: response.data.items[0]
      });
  };

  //callback function to communicate from child to parent
  //video contain video fetch from youtube api 
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render() {

    return (
      <div className=" ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect}
              />
          </div>
          </div>
        </div>
      </div>
    );
  }
}