import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

const Card = styled.div`
width:30%;
text-align:center;
margin:auto;
display:block;
`

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
        <div className="row">
        {this.state.pictures.map((picture, i) => (
          <Card key={i}>
          <div>
            <img className="cardImage" src={`${picture.url}`} />
          </div>
          <div>
            <Link to={`/picture/${picture.id}`}>{picture.title}</Link> 
          </div>
          </Card>
        ))}
        </div>
      </div>
    );
  }
}

export default PictureList;