import './User.css'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className='user-container'>
            <div className='user-title-container'>
                <h1 className='user-title'>Edit User</h1>
                <Link to={'/createUser'}>
                    <button className='user-add-button'>Create</button>
                </Link>
            </div>
            <div className='user-info-container'>
                <div className='user-info'>
                    <div className='user-info-top'>
                        <img className='user-image' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <div className='user-info-top-title'>
                            <p className='user-name'>Brut Cosmos</p>
                            <p className='user-title'>Fullstak Developer</p>
                        </div>
                    </div>
                    <div className='user-info-bot'>
                        <div className='user-info-section'>
                            <h3 className='user-info-title'>Account Details</h3>
                            <p className='user-single-detail'><PersonIcon />brutcosmos90</p>
                            <p className='user-single-detail'><CalendarMonthIcon />14.05.2021</p>
                        </div>
                        <div className='user-info-section'>
                            <h3 className='user-info-title'>Contacts</h3>
                            <p className='user-single-detail'><PhoneAndroidIcon />+2 123 442 665</p>
                            <p className='user-single-detail'><EmailIcon />brutcosmos@abv.bg</p>
                            <p className='user-single-detail'><LocationOnIcon />Asenovgrad | BG</p>
                        </div>
                    </div>
                </div>

                <div className='user-update'>
                    <h2 className='user-update-title'>Edit</h2>
                    <form className='user-update-form'>
                        <div className='user-form-left'>
                            <label htmlFor="" className='user-update-label'>Username</label>
                            <input type="text" placeholder='Username' className='user-update-input' />
                            <label htmlFor="" className='user-update-label'>Full name</label>
                            <input type="text" placeholder='First and last name' className='user-update-input' />
                            <label htmlFor="" className='user-update-label'>Email</label>
                            <input type="text" placeholder='Email' className='user-update-input' />
                            <label htmlFor="" className='user-update-label'>Phone</label>
                            <input type="text" placeholder='Phone' className='user-update-input' />
                            <label htmlFor="" className='user-update-label'>Address</label>
                            <input type="text" placeholder='Address' className='user-update-input' />
                        </div>

                        <div className='user-form-right'>
                            <div className='user-update-image'>
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                                <input type="file" id='file' />
                            </div>
                            <button className='user-form-button'>Update</button>
                        </div>

                    </form>
                </div>



            </div>
        </div>
    )
}

export default User
