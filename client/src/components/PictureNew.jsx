import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';


class PictureNew extends Component {
constructor() {
    super();
    this.state = {
        createPermission: false,
        picture:{
        }
    }
}
componentWillMount() {
    this._checkAuth()
    console.log(process.env)
  }

  
  handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", process.env.REACT_APP_UPLOADPRESET); // Replace the preset name with your own
      formData.append("api_key", process.env.REACT_APP_CLOUDINARYAPIKEY); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/pictureswarm/image/upload", formData, {
        transformRequest: [function (data, headers) {
            // Do whatever you want to transform the data
            console.log(headers)
            delete headers['access-token']
            delete headers['uid']
            delete headers['client']
            delete headers['expiry']
            delete headers['token-type']
            delete headers.common
            return data;
          }],
        headers: { "X-Requested-With": "XMLHttpRequest"},
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log(data);
      })
    });
  
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
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
    axios.post(`/api/pictures/`, payload)
    .then((res) => {
        console.log("success")
        console.log(res)
    }).catch(err => console.log(err));
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
      let createPermission = this.state.createPermission
      createPermission = response.data.success;
      let pictureId = this.state.picture.userId;
      pictureId = response.data.data.id;
      this.setState({createPermission})
      this.setState({picture: {user_id: pictureId}});
      return response.data
    }
    catch (err) {
      await console.log(err)
      return err.message
    }
  
  }
    render() {
        return (
            <div className="createPicture">
            <div className="row">
                <h2>Create new picture:</h2>
                <form className="addNewFoodForm" onSubmit={this._handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Picture Title: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.picture.title} 
                            name="title"
                            placeholder="Picture Title"
                        />
                </div>
                <div className="form-field">
                <label htmlFor="description">Picture Description: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.picture.description} 
                            name="description"
                            placeholder="Picture Description"
                        />
                </div>
                <div className="form-field">
                <label htmlFor="url">Picture URL: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.picture.url} 
                            name="url"
                            placeholder="Picture URL"
                        />
                </div>
                <Dropzone 
                onDrop={this.handleDrop} 
                multiple 
                accept="image/*" 
                >
                <p>Drop your files or click here to upload</p>
                </Dropzone>
                <button className="primary">Create New Picture</button>
                </form>
            </div>
            </div>
        );
    }
}

export default PictureNew;