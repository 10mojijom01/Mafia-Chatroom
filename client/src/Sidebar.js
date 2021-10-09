import React from 'react'
import ImageComponent from './custom_components/ImageComponent';
import Side_bar_friends_group from './custom_components/Side_bar_friends_group';
import Side_bar_friends_person from './custom_components/Side_bar_friends_person';
import myimage from './images/index.jpeg'
import CachedIcon from '@mui/icons-material/Cached';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="side-bar">
            <div className="setting">
                <ImageComponent className='profile-image' url={myimage} alt='profile image' />
                {/* <span className="profile"></span> */}
                <span className="setting--right float-right">
                    <abbr title='تازه سازی'><i><CachedIcon /></i></abbr>

                    <abbr title="شروع چت جدید"><i><MessageIcon /></i></abbr>

                    <abbr title="تنظیمات"><i><SettingsIcon /></i></abbr>
                </span>
            </div>
            <div className="search-box">
                <div className="input-warpper">
                    <i><SearchIcon /></i>
                    <input type="text" name="" id="" placeholder='Search' />
                </div>
            </div>
            <div className="friend-list">
                <Side_bar_friends_person last_seen='30:12' p_name='مجتبی باغی بیرق' profile_url={myimage} />
                <Side_bar_friends_group group_name='مجتبی باغی بیرق' profile_url={myimage} discription='گروه بازی مافیا' />
            </div>
        </div>
    )
}

export default Sidebar
