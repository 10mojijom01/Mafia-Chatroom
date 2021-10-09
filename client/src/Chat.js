import React from 'react'
import CurentContact from './custom_components/CurentContact'
import myimage from './images/index.jpeg'
import Imagecomponent from './custom_components/Imagecomponent'
import senderimage from './images/H_P.jpg'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SendIcon from '@mui/icons-material/Send';
import './Chat.css'

function Chat() {
    return (
        <div className="main-section">
            <CurentContact contact_last_seen='online' contact_name='نام مخاطب' contact_discription='چت روم مافیا' profile_url={myimage} />
            <div className="chat_panel">
                <div className='display'>
                    <div className="chatbubble bubble_left">
                        <Imagecomponent className='profile_image' url={senderimage} alt='left side profile' />
                        <div className="shape"></div>
                        <div className="text">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            </p>
                            <span className="timestamp small">
                                {new Date().toUTCString()}
                            </span>
                        </div>
                    </div>
                    <div className="chatbubble bubble_right">


                        <div className="text">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                            </p>
                            <span className="timestamp small">
                                {new Date().toUTCString()}
                            </span>
                        </div>
                        <div className="shape"></div>
                    </div>
                </div>
            </div>
            {/* <div className="input_box">
                <IconButton onClick={() => { document.querySelector('div.main-section div.sticker_box').classList.toggle('shown') }}>
                    <TagFacesIcon />
                </IconButton>
                <input type="text" name="" id="" placeholder='... متن خود را اینجا وارد کنید' className='text_input' />
                          
          <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />

                <IconButton className='record' color='error'>
                    <MicNoneIcon />
                </IconButton>
                <IconButton>
                    <SendIcon />
                </IconButton>

            </div>
            <div className="sticker_box">
                <Picker className="sticker_list" onEmojiClick={onEmojiClick}/>
            </div> */}

            <div className="chat__footer">
                <i>
                <TagFacesIcon/>
                </i>
                <form>
                    <input type="text" placeholder='... متن خود را وارد کنید' />
                    <button type='submit'><i><SendIcon/></i></button>
                </form>
                <i>
                <MicNoneIcon />
                </i>
            </div>

        </div>
    )
}

export default Chat
