import React from 'react'
import './index.css'

import Logo from './imgs/logo.png'

const LoginTwitch = ({ onClick }) => {
    return (
        <div className='button login-twitch' onClick={() => onClick}>
            <div className='twitch-logo'>
                <img src={Logo} alt='twitch' />
            </div>
            <div className='twitch-text-container'>
                Login with Twitch
            </div>
        </div>
    )
}

LoginTwitch.defaultProps = {
    onClick: () => null
}

export default LoginTwitch;
