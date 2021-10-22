import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import SideBarFriendsGroup from './custom_components/SideBarFriendsGroup';
import SideBarFriendsPerson from './custom_components/SideBarFriendsPerson';
import db from  "./firebase"
async function GetRooms() {

    
    const [room, setRooms] = useState([])
    async function GetRooms(){
     const querySnapshot = await getDocs(collection(db, "/rooms"));
     querySnapshot.forEach((doc) => {setRooms(room.push(doc.data()))})
     console.log(room)
   }
   useEffect(() => {
     GetRooms()
     
 }, [ ])
                            
    

    return(
        <>
            
        </>
        
    )
}

export default GetRooms

