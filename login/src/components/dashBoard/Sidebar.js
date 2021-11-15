import React, { useEffect, useState } from 'react'
import Imagecomponent from './custom_components/Imagecomponent';
import SideBarFriendsGroup from './custom_components/SideBarFriendsGroup';
import SideBarFriendsPerson from './custom_components/SideBarFriendsPerson';
import myimage from './images/index.jpeg'
import CachedIcon from '@mui/icons-material/Cached';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css'
import { database } from './firebase';

import { collection, getDocs  } from "firebase/firestore";
 import ProfileSetting from './custom_components/ProfileSetting';
// import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth";


function Sidebar() {
    


        const [MainRoomsList, setMainRoomsList] = useState([])
        const [PersonalRoomsList, setPersonalRoomsList] = useState([])
        const [GetRooms, setGetRooms] = useState(false)
        

         useEffect(() => {
            
            
            const getData = async()=>{
                document.querySelector('div.Dashboard div.side-bar').classList.add('side-bar-loading')
                const databaseRef_main_rooms = collection(database, 'main_rooms')
                const databaseRef_personal_rooms = collection(database, 'personal_rooms')
                const main_rooms_data = await getDocs(databaseRef_main_rooms)
                const personal_rooms_data = await getDocs(databaseRef_personal_rooms)
                setMainRoomsList(main_rooms_data.docs.map(doc=>({...doc.data(),id:doc.id})))
                setPersonalRoomsList(personal_rooms_data.docs.map(doc=>({...doc.data(),id:doc.id})))
            }
            getData().then(()=>{document.querySelector('div.Dashboard div.side-bar').classList.remove('side-bar-loading')})
            setGetRooms(false)
            
        }, [GetRooms])
        
        

        
    return (
        <div className="side-bar">
            <ProfileSetting/>
            <div className="setting">
                <Imagecomponent className='profile-image' url={myimage} alt='profile image' />
                {/* <span className="profile"></span> */}
                <span className="setting--right float-right">
                    <abbr title='تازه سازی'><i  onClick={()=>setGetRooms(true)}><CachedIcon /></i></abbr>

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
                
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <div className="friend-list" >
                
                

                {MainRoomsList.map((room)=>{
                    if (room.type_group) {
                        return(<SideBarFriendsGroup group_name={room.title} profile_url={myimage} discription={room.description} div_key={room.id}/>)
                    } else {
                        return(
                            <SideBarFriendsPerson last_seen='30:12' p_name='مجتبی باغی بیرق' profile_url={myimage} div_key={room.id}/>
                            )
                    }

                })}
                {PersonalRoomsList.map((room)=>{
                    if (room.type_group) {
                        return(<SideBarFriendsGroup group_name={room.title} profile_url={myimage} discription={room.description} div_key={room.id}/>)
                    } else {
                        return(
                            <SideBarFriendsPerson last_seen='30:12' p_name={room.title} profile_url={myimage} div_key={room.id}/>
                            )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default Sidebar
