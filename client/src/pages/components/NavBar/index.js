import React from 'react'
import './index.css'
import LoginTwitch from '../Buttons/Twitch'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='nav-logo-container gray uppercase'>
                <h4>Up Studio</h4>
            </div>
            <div className='nav-actions-container'>
                <LoginTwitch />
            </div>
        </div>
    )
}

export default NavBar;
