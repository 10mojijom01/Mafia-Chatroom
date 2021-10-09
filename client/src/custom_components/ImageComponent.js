import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <img className={this.props.className} src={this.props.url} alt={this.props.alt} />
                

            </>
        );
    }
}

export default ImageComponent;
