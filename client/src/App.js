import React, { useEffect , useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';



function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
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
    <div className="App">
      <Sidebar/>
      <Chat messages={messages}/>
    </div>
  );
}

export default App;
