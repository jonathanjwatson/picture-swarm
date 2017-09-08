import React, { Component } from 'react';
import axios from 'axios';
import PictureIndividualDownloadButton from './PictureIndividualDownloadButton';

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
    const picture = this.state.picture;
    return (
      <div className="row picture-show-row">
      <div className="col-sm-1">
      </div>
      <div className="col-sm-4">
        <img className="picture-show-image" src={this.state.picture.url} alt={this.state.picture.title} />
      </div>
      <div className="col-sm-7 picture-show-description">
        <h1>{this.state.picture.title}</h1>
        <p>{this.state.picture.description}</p>
        <PictureIndividualDownloadButton {...picture} />
        </div>
        <div className="col-sm-1">
        </div>
      </div>
    );
  }
}

export default PictureIndividual; 