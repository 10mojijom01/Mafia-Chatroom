import React, { Component } from 'react';
import Imagecomponent from './Imagecomponent';  
class SideBarFriendsPerson extends Component {

    render() {
        return (
            <>
                <div className="friend-drawer friend-drawer--onhover" key={this.props.div_key}>
                    <span className="time small" key={`time${this.props.div_key}`}>{this.props.last_seen}</span>            
                    <div className="text" key={`info${this.props.div_key}`}>
                    <h6 key={`name${this.props.div_key}`}>{this.props.p_name}</h6>
                    </div>
                    <Imagecomponent className='profile-image' url={this.props.profile_url} alt='profile image' key={`profileimage${this.props.div_key}`}/>
                </div>
                <hr key={`underline${this.props.div_key}`}/>
                

            </>
        );
    }
}

export default SideBarFriendsPerson;
