import React, { Component } from 'react';
import ImageComponent from './ImageComponent';  
class Side_bar_friends_group extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="friend-drawer friend-drawer--onhover group">
                    <span className="var small">گروه</span>
                    <div className="text">
                    <h6>{this.props.group_name}</h6>
                    <p className='discription'>{this.props.discription}</p>
                    </div>
                    <ImageComponent className='profile-image' url={this.props.profile_url} alt='profile image' />
                </div>
                <hr />
                

            </>
        );
    }
}

export default Side_bar_friends_group;
