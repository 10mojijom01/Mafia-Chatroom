import React from 'react'
import './profilesetting.css'
import { useUserContext } from '../../../context/userContext'
import profileimage from './../images/anonimus.png'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ProfileSetting() {
    const { user } = useUserContext();

    return (
        <div className="profile-setting-body">
            <div className="profile-setting">
                <img src={profileimage} className="profile-image" alt="profile image" />
                <AddAPhotoIcon className="profile-image-change" sx={{width:"41px", height:"41px" , padding:"30px" , borderRadius:"50px"  , overflow:"visible"}}/>
            </div>
        </div>
    )
}

export default ProfileSetting
