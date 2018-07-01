import React, { Component } from 'react'
import ReactDom from 'react-dom'
// {} means Comp[onent = React.com..]
class SearchBar extends Component {
    render() {
        return (
            <input onChange = {this.onInputChange}/>
        );
    }

    onInputChange(event) {
        console.log(event.target.value)
    }
}

export default SearchBar;