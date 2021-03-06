import { React, useState ,useEffect , } from "react";
import CurentContact from "./custom_components/CurentContact";
import myimage from "./images/index.jpeg";
import Imagecomponent from "./custom_components/Imagecomponent";
import senderimage from "./images/H_P.jpg";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SendIcon from "@mui/icons-material/Send";
import "./Chat.css";
import axios from "./axios";


function Chat({ messages }) {
  useEffect(() => {
    document.querySelector('.chat_panel').scrollTo(0 , document.querySelector('.chat_panel').scrollHeight)

  }, [messages])
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("./messages/new", {
      message: input,
      name: "mojtaba",
      timestamp: new Date().toUTCString(),
      received: false,
      text_align_right: true,
    });
    setInput("");
  };

  return (
    <div className="main-section" >
      <CurentContact
        contact_last_seen="online"
        contact_name="نام مخاطب"
        contact_discription="چت روم مافیا"
        profile_url={myimage}
      />
      <div className="chat_panel"  id="chat_panel" >
        <div className="display" >
          


          {messages.map((message) => {
            
            return (
            
            <>
              {message.received ? (
                <div
                  className={`chatbubble bubble_left ${
                    message.text_align_right
                      ? "text_align_right"
                      : "text_align_left"
                  }`}
                  onLoad={()=>{console.log()}}
                  // ={()=>{document.querySelector('.chat_panel').scrollTo(0,document.body.scrollHeight);}}
                >
                  <Imagecomponent
                    className="profile_image"
                    url={senderimage}
                    alt="left side profile"
                  />
                  <div className="shape"></div>
                  <div className="text">
                    <span className="name small">{message.name}</span>
                    <p>{message.message}</p>
                    <span className="timestamp small">{message.timestamp}</span>
                  </div>
                </div>
              ) : (
                <div className="chatbubble bubble_right" onLoad={()=>{console.log()}}>
                  <div className="text">
                    <span className="name small">{message.name}</span>
                    <p>{message.message}</p>
                    <span className="timestamp small">{message.timestamp}</span>
                  </div>
                  <div className="shape"></div>
                </div>
              )}
            </>
            
          )
          })}
        </div>
      </div>
      

      <div className="chat__footer">
        <i >
          <TagFacesIcon />
        </i>
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="... متن خود را وارد کنید"
          />
          <button onClick={sendMessage} type="submit">
            <i>
              <SendIcon />
            </i>
          </button>
        </form>
        <i className="record" >
          <MicNoneIcon />
        </i>
      </div>
    </div>
  );
}

export default Chat;
