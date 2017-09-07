import React, { Component } from 'react';

class PictureIndividualDownloadButton extends Component {
    render() {
        return (
            <div>
            <a href={`${this.props.url}`} download >Download Image</a>
            </div>
        );
    }
}
PictureIndividualDownloadButton.defaultProps = {
    url: ''
 }
export default PictureIndividualDownloadButton;