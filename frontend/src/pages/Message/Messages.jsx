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
        </div>
        <div className="message-new">
            
        </div>
       </div>

        </>
     );
}
 
export default Messages;