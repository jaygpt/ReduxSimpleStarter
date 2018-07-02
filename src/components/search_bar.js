import React, { Component } from 'react'
import ReactDom from 'react-dom'
// {} means Comp[onent = React.com..]
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <div className ="search-bar">
            <input 
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    onInputChange(term) {
        console.log(term);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;