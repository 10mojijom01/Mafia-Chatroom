import React, { Component } from 'react';
import Imagecomponent from './Imagecomponent';  
class SideBarFriendsPerson extends Component {

    render() {
        return (
            <>
                <div className="friend-drawer friend-drawer--onhover">
                    <span className="time small">{this.props.last_seen}</span>            
                    <div className="text">
                    <h6>{this.props.p_name}</h6>
                    </div>
                    <Imagecomponent className='profile-image' url={this.props.profile_url} alt='profile image' />
                </div>
                <hr />
                

            </>
        );
    }
}

export default SideBarFriendsPerson;
