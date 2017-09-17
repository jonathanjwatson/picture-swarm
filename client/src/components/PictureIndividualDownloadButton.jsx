import React, { Component } from 'react';

class PictureIndividualDownloadButton extends Component {
    render() {
        return (
            <div>
                <a href={`${this.props.url}`} download className="button button-default">Download Image</a>
            </div>
        );
    }
}
PictureIndividualDownloadButton.defaultProps = {
    url: ''
 }
export default PictureIndividualDownloadButton;