import React, { Component } from 'react';
import PictureIndividualTagBoxItem from './PictureIndividualTagBoxItem';

class PictureIndividualTagBox extends Component {

    render() {
        const tags = this.props.tags;
        return (
            <div className="tagBox">
            Tags: 
                {tags.map((tag, i) => (
                    <div className="tagRow" key={i}>
                    {this.props.pictureUserId === this.props.userId ? <div className="button button-tag-delete" onClick={(e) => this.props._deleteTag(e, tag.id)}>x</div> : null}
                    
                    <div className="button button-tag">{tag.name}</div> 
                    </div>
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