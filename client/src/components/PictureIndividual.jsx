import React, { Component } from 'react';
import axios from 'axios';

class PictureIndividual extends Component {
  constructor() {
    super();
    this.state = {
      picture: {}
    };
  }

  componentWillMount() {
    const pictureId = this.props.match.params.id;
    this._fetchpictures(pictureId)
  }

  _fetchpictures = async (pictureId) => {
    try {
      const response = await axios.get(`/api/pictures/${pictureId}`)
      console.log(response.data);
      await this.setState({picture: response.data});
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  } 

  render() {
    return (
      <div>
        <img src={this.state.picture.url} alt="" />
        <h1>{this.state.picture.title}</h1>
        <p>{this.state.picture.description}</p>
      </div>
    );
  }
}

export default PictureIndividual; 