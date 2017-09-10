import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';


class PictureList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      pictures: []
    }
  }

  componentWillMount(){
    this._fetchPictures();
  }

  _fetchPictures = async () => {
    try {
      const res = await axios.get('/api/pictures');
      await this.setState({pictures: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }
  _handleSubmit = (e, searchText) => {
      e.preventDefault();
      console.log("Hit the search button")
      const payload = searchText;
      console.log(payload);
      axios.get(`/api/pictures/?search=${searchText}`, payload)
      .then((res) => {
          console.log(res.data);
          const pictures = res.data
          this.setState({pictures})
      }).catch(err => console.log(err));
      
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
      <div className="row">
        <SearchBar _handleSubmit={this._handleSubmit}/>
        </div>
      <div className="row">
        <div className="row">
        {this.state.pictures.map((picture, i) => (
          <div className="card" key={i}>
            <img className="cardImage" src={`${picture.url}`} alt={`${picture.title}`}/>
          <div className="card-block">
          <h4 className="card-title">{picture.title}</h4>

            <Link to={`/picture/${picture.id}`} className="button button-default">See More</Link> 
          </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    );
  }
}

export default PictureList;