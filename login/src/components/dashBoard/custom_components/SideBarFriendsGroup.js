import React, { Component } from 'react';
import Imagecomponent from './Imagecomponent';  
class SideBarFriendsGroup extends Component {
    render() {
        return (
            <>
                <div className="friend-drawer friend-drawer--onhover group" >
                    <span className="var small">گروه</span>
                    <div className="text" >
                    <h6 >{this.props.group_name}</h6>
                    <p className='discription' >{this.props.discription}</p>
                    </div>
                    <Imagecomponent className='profile-image' url={this.props.profile_url} alt='profile image' />
                </div>
                <hr />
                

            </>
        );
    }
}

export default SideBarFriendsGroup;
