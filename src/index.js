
import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
// Create a new Component .
// This component should produce some HTML
const API_KEY = 'AIzaSyBiggbgub9P9NhDE4aETy-FB6SiK1wClGY';
const App = () =>{
    return (
        <div>
        <SearchBar />
        </div>
    );
}


// Take this component's generate HTML and put 
//it on the page

ReactDom.render(<App />, document.querySelector('.container'));