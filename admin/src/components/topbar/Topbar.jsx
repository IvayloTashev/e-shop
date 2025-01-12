import './Topbar.css'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';



const Topbar = () => {
    return (
        <div className='topbar-container'>
            <div className='topbar-wrapper'>

                <div className='topbar-left'>
                    <p className='topbar-logo'>Admin Panel</p>
                </div>

                <div className='topbar-right'>
                    <div className='topbar-right-icon-container'>
                        <NotificationsIcon />
                        <span className='topbar-icon-badge'>2</span>
                    </div>
                    <div className='topbar-right-icon-container'>
                        <LanguageIcon />
                        <span className='topbar-icon-badge'>2</span>
                    </div>
                    <div className='topbar-right-icon-container'>
                        <SettingsIcon />
                    </div>
                    <div className='topbar-avater-holder'>
                        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Topbar
