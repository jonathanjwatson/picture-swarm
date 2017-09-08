import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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
      loggedIn: false
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
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };

  render() {
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