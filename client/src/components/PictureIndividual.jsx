import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PictureIndividualDownloadButton from './PictureIndividualDownloadButton';
import PictureIndividualSignUpLogIn from './PictureIndividualSignUpLogIn';
import PictureIndividualTagBox from './PictureIndividualTagBox';

class PictureIndividual extends Component {
  constructor() {
    super();
    this.state = {
      downloadPermission: false,
      picture: {}, 
      userId: '',
      tags: [],
      createTagText: ''
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
      console.log(response)
      await this.setState({picture: response.data[0]});
      await this.setState({tags: response.data[1]})
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
    await console.log(response.data.data.id)
    let downloadPermission = this.state.downloadPermission
    downloadPermission = response.data.success;
    this.setState({downloadPermission})
    this.setState({userId: response.data.data.id})
    return response.data
  }
  catch (err) {
    await console.log(err)
    return err.message
  }

}
_handleTagChange = (e) => {
  const attributeName = e.target.name;;
  const attributeValue = e.target.value;
  let createTagText = this.state.createTagText
  createTagText = attributeValue;
  this.setState({ createTagText })
}
_addTag = async () => {
  const payload = {
    picture_id: this.state.picture.id,
    tag_name: this.state.createTagText
  }
  try {
    console.log(payload)
    const res = await axios.post(`/api/picture_tags`, payload)
    await console.log(res.data)
    return res.data
  }
  catch (err) {
    await console.log(err)
    return err.message
  }
}
_deleteTag = async (e, id) => {
  const picture_id = this.state.picture.id
  const tag_id = id;
  console.log(picture_id)
  console.log(tag_id)
  const payload = {
    picture_id,
    tag_id
  }
  try {
    // const res = await axios.delete(`/api/picture_tags/1`, {
    //   params: {
    //     picture_id,
    //     tag_id
    //   }
    // })
    console.log(payload)
    const res = await axios.delete(`/api/picture_tags/1`, { data: payload })
    window.location.reload();
  }
  catch (err) {
    await console.log(err)
    return err.message
  }
}

  render() {
    const picture = this.state.picture;
    return (
      <div>
      <div className="row picture-show-edit-row">
      <div className="col-sm-11">
      </div>
      <div className="col-sm-1">
      {this.state.picture.user_id === this.state.userId ? 
      <Link to={`/picture/${this.state.picture.id}/edit`}>Edit</Link>
      : null }
      </div>
      </div>
      <div className="row picture-show-row">
      <div className="col-sm-1">
      </div>
      <div className="col-sm-4">
        <img className="picture-show-image" src={this.state.picture.url} alt={this.state.picture.title} />
      </div>
      <div className="col-sm-7 picture-show-description">
        <h1>{this.state.picture.title}</h1>
        <p>{this.state.picture.description}</p>
        {this.state.downloadPermission ? <PictureIndividualDownloadButton {...picture} /> : <PictureIndividualSignUpLogIn />}
        
        </div>
        <div className="col-sm-1">
        </div>
      </div>
      <div className="row picture-show-row">
      <PictureIndividualTagBox tags={this.state.tags} _deleteTag={this._deleteTag} pictureUserId={this.state.picture.user_id} userId={this.state.userId}/>
      </div>
      <div className="row picture-add-row tagInput">
      {this.state.picture.user_id === this.state.userId ? 
      <form onSubmit={this._addTag}>
      <label htmlFor="createTagText" className="tagLabel">Add a new tag: </label>
            <input 
                type="text" 
                onChange={this._handleTagChange} 
                value={this.state.createTagText} 
                name="createTagText"
                placeholder="Add a new tag here"
                required
                
            />
            <input type="submit" value="Add your tag" className="button button-primary"/>
      </form>
      : null }
      </div>
      </div>
    );
  }
}

export default PictureIndividual; 