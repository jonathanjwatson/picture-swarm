import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }
    _handleChange = (e) => {
        const attributeValue = e.target.value;
        let searchText = this.state.searchText;
        searchText = attributeValue;
        this.setState({ searchText })
    }
    render() {
        return (
            <div className="row search-bar">
            <form onSubmit={(e) => this.props._handleSubmit(e, this.state.searchText)}>
            <div>
            <div className="label">
              <label htmlFor="email"></label>
            </div>
            <div>
                <input 
                    type="text" 
                    onChange={this._handleChange} 
                    value={this.state.searchText} 
                    name="email"
                    placeholder="Search for an image . . ."
                />
                <input type="submit" />
            </div>
          </div>
          </form>
            </div>
        );
    }
}

export default SearchBar;