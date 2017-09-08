import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";


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

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
      <div className="row">
        <div className="row">
        {this.state.pictures.map((picture, i) => (
          <div className="card">
            <img className="cardImage" src={`${picture.url}`} />
          <div className="card-block">
          <h4 className="card-title">{picture.title}</h4>

            <Link to={`/picture/${picture.id}`} className="button button-default">Download</Link> 
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