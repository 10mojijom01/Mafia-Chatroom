import React, { Component } from 'react';
import ImageComponent from './ImageComponent';  
class Side_bar_friends_person extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="friend-drawer friend-drawer--onhover">
                    <span className="time small">{this.props.last_seen}</span>            
                    <div className="text">
                    <h6>{this.props.p_name}</h6>
                    </div>
                    <ImageComponent className='profile-image' url={this.props.profile_url} alt='profile image' />
                </div>
                <hr />
                

            </>
        );
    }
}

export default Side_bar_friends_person;
