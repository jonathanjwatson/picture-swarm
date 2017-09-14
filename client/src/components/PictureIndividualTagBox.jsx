import React, { Component } from 'react';
import PictureIndividualTagBoxItem from './PictureIndividualTagBoxItem';

class PictureIndividualTagBox extends Component {

    render() {
        const tags = this.props.tags;
        return (
            <div>
                This is a list of all tags. 
                {tags.map((tag, i) => (
                    <p>{tag.name}</p>
                )
                )}
            </div>
        );
    }
}

PictureIndividualTagBox.defaultProps = {
    tags: []
}

export default PictureIndividualTagBox;