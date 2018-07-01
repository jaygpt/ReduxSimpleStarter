
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
            vedios: [],
            selectedVideo: null
         };

        YTSearch({key: API_KEY, term: 'saanju'},(vedios)=>{
            this.setState({
                vedios: vedios,
                selectedVideo: vedios[0]
            });
        });
    }
    render(){
        return (
            <div>
            <SearchBar />
            <VedioDetail video = {this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}            
            videos = {this.state.vedios} />
            </div>
        );

    }
}


// Take this component's generate HTML and put 
//it on the page

ReactDom.render(<App />, document.querySelector('.container'));