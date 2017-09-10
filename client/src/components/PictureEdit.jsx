import React, { Component } from 'react';
import axios from 'axios';

class PictureEdit extends Component {
constructor() {
    super();
    this.state = {
        picture:{}
    }
}
componentWillMount() {
    const pictureId = this.props.match.params.id;
    this._fetchpicture(pictureId)
  }
_fetchpicture = async (pictureId) => {
    try {
      const response = await axios.get(`/api/pictures/${pictureId}`)
      await this.setState({picture: response.data});
      console.log(response.data)
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  } 
  _handleChange = (e) => {
    const attributeName = e.target.name;;
    const attributeValue = e.target.value;
    const picture = {...this.state.picture};
    picture[attributeName] = attributeValue;
    this.setState({ picture })
}
_handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state.picture;
    console.log(payload)
    axios.put(`/api/pictures/${this.state.picture.id}`, payload)
    .then((res) => {
        console.log("success")
    }).catch(err => console.log(err));
}
    render() {
        return (
            <div className="editPicture">
            <div className="row">
                <h2>Edit picture:</h2>
                <form className="addNewFoodForm" onSubmit={this._handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Picture Title: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.picture.title} 
                            name="title"
                            placeholder="Edit Picture Title"
                        />
                </div>
                <div className="form-field">
                <label htmlFor="description">Picture Description: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.picture.description} 
                            name="description"
                            placeholder="Edit Picture Description"
                        />
                </div>
                <div className="form-field">
                <label htmlFor="url">Picture URL: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.picture.url} 
                            name="url"
                            placeholder="Edit Picture URL"
                        />
                </div>
                <button className="primary">Update Picture</button>
                </form>
            </div>
            </div>
        );
    }
}

export default PictureEdit;