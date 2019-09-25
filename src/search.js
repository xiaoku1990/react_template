import React, { Component } from 'react';
import ReactDom from 'react-dom';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>test react!</div> );
    }
}
 
export default Search;
ReactDom.render(<Search></Search>,document.getElementById('root'));