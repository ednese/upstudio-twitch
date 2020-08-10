import React from 'react'
import './index.css'

const TwitchPlayer = () => {
    return (
        <div className='twitch-player-container'>
            <iframe
                src="https://player.twitch.tv/?channel=up_studio&parent=localhost&muted=false&autoplay=true"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true"
            >
            </iframe>
        </div>
    )
}

export default TwitchPlayer;
