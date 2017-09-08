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
        let searchText = {...this.state.searchText};
        searchText = attributeValue;
        this.setState({ searchText })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state;
        console.log(payload);
        axios.get(`/api/pictures/?search=${this.state.searchText}`, payload)
        .then((res) => {
            console.log("Thanks!");
        }).catch(err => console.log(err));
        
    }
    render() {
        return (
            <div className="row search-bar">
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
            </div>
        );
    }
}

export default SearchBar;