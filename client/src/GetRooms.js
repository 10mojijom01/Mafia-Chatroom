import React from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import SideBarFriendsGroup from './custom_components/SideBarFriendsGroup';
import SideBarFriendsPerson from './custom_components/SideBarFriendsPerson';
import db from  "./firebase"
async function GetRooms() {

    const querySnapshot = await getDocs(collection(db, "/rooms"));
                            
                            
    

    return(
        <>
        {
            querySnapshot.forEach((doc) => (
                doc.type_group ? (
                    <SideBarFriendsGroup group_name={doc.data().name} />
                ):(
                    <SideBarFriendsPerson p_name={doc.data().name}/>
                ))
            )
        }
        </>
        
    )
}

export default GetRooms

