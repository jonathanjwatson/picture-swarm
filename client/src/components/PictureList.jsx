import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <h1>All Pictures</h1>
        {this.state.pictures.map(picture => (
          <div>
            <Link to={`/picture/${picture.id}`} >{picture.title}</Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default PictureList;