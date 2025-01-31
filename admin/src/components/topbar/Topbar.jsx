import './Topbar.css'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';



const Topbar = () => {
    return (
        <div className='topbar-container'>
            <div className='topbar-wrapper'>

                <div className='topbar-left'>
                    <Link to={'/'}>
                        <p className='topbar-logo'>Admin Panel</p>
                    </Link>
                </div>

                <div className='topbar-center'>
                    <ul className='topbar-list'>
                        <Link to={'/'}><li className='topbar-list-item'>Home</li></Link>
                        <Link to={'/users'}><li className='topbar-list-item'>Users</li></Link>
                        <Link to={'/products'}><li className='topbar-list-item'>Products</li></Link>
                    </ul>
                </div>

                <div className='topbar-right'>
                    <div className='topbar-avater-holder'>
                        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Topbar
