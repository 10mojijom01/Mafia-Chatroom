import React, { Component } from 'react';

class Imagecomponent extends Component {

    render() {
        return (
            <>
                <img className={this.props.className} src={this.props.url} alt={this.props.alt} />
                

            </>
        );
    }
}

export default Imagecomponent;
