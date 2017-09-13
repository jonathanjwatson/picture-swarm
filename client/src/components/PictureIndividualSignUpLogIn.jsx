import React, { Component } from 'react';

class PictureIndividualSignUpLogIn extends Component {
    render() {
        return (
            <div>
            <div>
            You must be signed in to download this picture:
            </div>
            <div>
            <a href="/signUp" className="button button-default">Sign Up</a> <a href="/login" className="button button-primary">Log In</a>
            </div>
            </div>
        );
    }
}

export default PictureIndividualSignUpLogIn;