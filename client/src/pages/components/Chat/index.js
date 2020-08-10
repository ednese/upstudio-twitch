import React from 'react'
import './index.css'

const Chat = () => {
    return (
        <div className='twitch-chat-container'>
            <iframe 
                frameborder="0"
                scrolling="no"
                id="skyyart"
                src="https://twitch.tv/embed/up_studio/chat?darkpopout"
            />
        </div>
    )
}

export default Chat;
