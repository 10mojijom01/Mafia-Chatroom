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
import {initializeApp  } from "firebase/app"
import { collection, getDocs ,getFirestore ,  doc, onSnapshot } from "firebase/firestore";
 
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth";

// import GetRooms from './GetRooms';

function Sidebar() {
    

        const databaseRef = collection(database, 'rooms')
        const [RoomsList, setRoomsList] = useState([])
        useEffect(() => {
            const getData = async()=>{
                const data = await getDocs(databaseRef)
                setRoomsList(data.docs.map(doc=>({...doc.data(),id:doc.id})))
            }
            getData()
        }, [])

    //     async function GetRooms(){
            
    //      const querySnapshot = await getDocs(collection(db, "/rooms"));
    //     //  querySnapshot.forEach((doc) => {setRooms(doc)})
        
    //     querySnapshot.forEach((doc)=>(

    //         setRooms(oldRooms=>
    //         [    {JSON.parse(oldRooms)} , {doc.data()}]
            
             
    //         )
            
            
    //         ))
    //    }
    //    useEffect(() => {
    //      GetRooms()
         
    //  }, [ ])
    
     

    return (
        <div className="side-bar">
            <div className="setting">
                <Imagecomponent className='profile-image' url={myimage} alt='profile image' />
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
                {/* 
                 */}
                {RoomsList.map((room)=>{
                    if (room.type_group) {
                        return(<SideBarFriendsGroup group_name={room.name} profile_url={myimage} discription='گروه بازی مافیا' key={room.id}/>)
                    } else {
                        return(
                            <SideBarFriendsPerson last_seen='30:12' p_name='مجتبی باغی بیرق' profile_url={myimage} />
                            )
                    }

                })}
            </div>
        </div>
    )
}

export default Sidebar
