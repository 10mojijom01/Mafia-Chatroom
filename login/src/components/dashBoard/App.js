import React, { useEffect , useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';
import {auth , database} from "./../../firebase/firebase"
import { doc, setDoc } from "firebase/firestore"; 
import { useUserContext } from "../../context/userContext";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import Varification from '../auth/Verification'
function Dashboard() {
  const { loading, error, user } = useUserContext();
  
  const [messages, setMessages] = useState([]);
  async function setuserprofile(){
    await setDoc(doc(database , "/users" , auth.currentUser.uid),{
      name : auth.currentUser.displayName,

    })
  }
  useEffect(()=>{

    setuserprofile()
    axios.get('/messages/sync').then(response =>{
      setMessages(response.data)
    })
  },[])
  

  useEffect(() => {
    
    const pusher = new Pusher('00497ef6125b21ef38b1', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage)=>{
      setMessages([...messages, newMessage])
    });

    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])


  return (
    <If condition={user.emailVerified}>
      <Then>
        <div className="Dashboard">
          <Sidebar/>
          <Chat messages={messages}/>
        </div>
      </Then>
      <Else>
        <Varification/>
      </Else>

    </If>
  );
}

export default Dashboard;
