import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PictureIndividualSignUpLogIn extends Component {
    render() {
        return (
            <div>
            <div>
            You must be signed in to download this picture:
            </div>
            <div>
            <Link to="/signUp" className="button button-default">Sign Up</Link> <Link to="/signin" className="button button-primary">Log In</Link>
            </div>
            </div>
        );
    }
}

export default PictureIndividualSignUpLogIn;