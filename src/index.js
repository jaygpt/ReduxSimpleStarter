
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/vedio_list';
// Create a new Component .
// This component should produce some HTML

const API_KEY = 'AIzaSyBiggbgub9P9NhDE4aETy-FB6SiK1wClGY';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { vedios: [] };

        YTSearch({key: API_KEY, term: 'jay'},(data)=>{
            this.setState({vedios: data})
        });
    }
    render(){
        return (
            <div>
            <SearchBar />
            <VideoList videos = {this.state.vedios} />
            </div>
        );

    }
}


// Take this component's generate HTML and put 
//it on the page

ReactDom.render(<App />, document.querySelector('.container'));