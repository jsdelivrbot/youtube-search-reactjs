import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD22OHhwEywJMMDaZr8ceUk41YbK9XIMmo';


// Create a new component to produce html
 class App extends Component {
   constructor(props) {
     super(props);

     this.state = { 
       videos: [],
       selectedVideo: null 
      };

      this.videoSearch('deep learning')
   }

   videoSearch(term){
     YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos }) ES6 syntaxtic sugar
    });
   }

   // in the time, it waits for data from Youtube, it still run render
   // so in VideoList we want to get the videos array --> using: props.videos
   render() {
     const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

     return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos}/>  
      </div>
     );
   }
 }

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));