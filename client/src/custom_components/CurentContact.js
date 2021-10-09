import React, { Component } from 'react';
import Imagecomponent from './Imagecomponent';  
class CurentContact extends Component {

    render() {
        return (

    <div className="setting no-gutters">
         <span className='time small' last_seen={this.props.contact_last_seen}>آنلاین<span className="circle"></span></span>
         <div className="text">
             <h6>{this.props.contact_name}</h6>
             <p>{this.props.contact_discription}</p>
           </div>
         <Imagecomponent className='profile-image' url={this.props.profile_url} alt='profile image' />
    </div>

      
        );
    }
}

export default CurentContact;
