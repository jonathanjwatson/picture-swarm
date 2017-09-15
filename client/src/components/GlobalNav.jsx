import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {Redirect} from 'react-router-dom';

const CustomNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2.5%;
  margin-bottom:1em;
  background-color: rgba(0, 51, 82, 1);
  box-shadow: 0px 1px 6px black;
  a {
    text-decoration: none;
    margin: 0 5px;
    color:white;
    &:visited {
      color: white;
    }
  }
  span {
    color: #3AA9EA;
  }
`;

class GlobalNav extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false,
      redirect: false,
      createPermission: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
    let createPermission = this.state.createPermission
    createPermission = response.data.data.uploader;
    this.setState({createPermission})
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    // win
    const redirect = !this.state.redirect
    this.setState({redirect})
    window.location.reload();
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    if (this.state.loggedIn && this.state.createPermission) {
      return (
        <CustomNav>
          <Link to="/">
            <h1>Picture Swarm</h1>
          </Link>
          <div>
            <span>Signed In As: {this.state.user.email}</span>
            <a href="/new/picture">Upload New</a>
            <a href="#" onClick={this._logOut}> Log Out </a>
          </div>
        </CustomNav>
      );
    }
    if (this.state.loggedIn) {
      return (
        <CustomNav>
          <Link to="/">
            <h1>Picture Swarm</h1>
          </Link>
          <div>
            <span>Signed In As: {this.state.user.email}</span>
            <a href="#" onClick={this._logOut}> Log Out </a>
          </div>
        </CustomNav>
      );
    }
    return (
      <CustomNav>
        <Link to="/">
          <h1>Picture Swarm</h1>
        </Link>
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Log In</Link>
        </div>
      </CustomNav>
    );
  }
}

export default GlobalNav;