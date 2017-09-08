import React, { Component } from 'react';
import axios from 'axios';
import PictureIndividualDownloadButton from './PictureIndividualDownloadButton';

class PictureIndividual extends Component {
  constructor() {
    super();
    this.state = {
      downloadPermission: false,
      picture: {}
    };
  }

  componentWillMount() {
    const pictureId = this.props.match.params.id;
    this._fetchpictures(pictureId)
    this._checkAuth();
  }

  _fetchpictures = async (pictureId) => {
    try {
      const response = await axios.get(`/api/pictures/${pictureId}`)
      await this.setState({picture: response.data});
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  } 
_checkAuth = async () => {
  const accessToken = localStorage.getItem("access-token")
  const client = localStorage.getItem("client")
  const uid = localStorage.getItem("uid")
  const validateTokenPayload = {
    accessToken,
    client,
    uid
  }
  try {
    const response = await axios.get(`/auth/validate_token`, {
      params: {
        accessToken,
        client,
        uid
      }
    })
    await console.log(response.data.success)
    let downloadPermission = this.state.downloadPermission
    downloadPermission = response.data.success;
    this.setState({downloadPermission})
    return response.data
  }
  catch (err) {
    await console.log(err)
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