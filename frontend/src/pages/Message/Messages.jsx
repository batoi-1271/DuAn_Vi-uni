import React from 'react';
import './message.scss'
const Messages = () => {
    return ( 
        <>
       <div className='message'>
        <div className="message-hearder">
             <div className="message_head">
                <h3>Messages</h3>
                <div className="message_header-icon">
                    <i class="fab fa-facebook-messenger"></i>
                    <i class="fas fa-cog"></i>
                </div>
            </div>
            <div className="message_search">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder='Search for people and groups' />
            </div>
            <div className="message-friend">
                <div className="message-friend-avt">
                    <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-girl-xinh-de-thuong-cute.jpg" alt="" />
                    <div className="message-friend-avt-text">
                    <p>Dương Ngô Tung @DngNgTng1</p>
                    <span>You reacted with</span>
                    </div>
                    <p>mar 20</p>
                </div>
                <div className="message-friend-avt">
                    <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-girl-xinh-de-thuong-cute.jpg" alt="" />
                    <div className="message-friend-avt-text">
                    <p>Dương Ngô Tung @DngNgTng1</p>
                    <span>You reacted with</span>
                    </div>
                    <p>mar 20</p>
                </div>
            </div>
        </div>
        <div className="message-new">
            <h2>You don’t have a message selected</h2>
            <p>Choose one from your existing messages, or start a new one.</p>
            <button>New message</button>
        </div>
       </div>

        </>
     );
}
 
export default Messages;