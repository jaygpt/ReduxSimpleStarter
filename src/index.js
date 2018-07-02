
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/vedio_list';
import VedioDetail from './components/vedio-detail';

// Create a new Component .
// This component should produce some HTML

const API_KEY = 'AIzaSyBiggbgub9P9NhDE4aETy-FB6SiK1wClGY';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
         };
         this.videoSearch("surfboards");
    }

    /* videoSearch(term) {
        YTSearch({key: API_KEY, term: 'saanju'},vedios=>{
            this.setState({
                vedios: vedios,
                selectedVideo: vedios[0]
            });
        });
} */
videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
}
    render(){
        return (
            <div>
            <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
            <VedioDetail video = {this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}            
            videos = {this.state.videos} />
            </div>
        );

    }
}


// Take this component's generate HTML and put 
//it on the page

ReactDom.render(<App />, document.querySelector('.container'));