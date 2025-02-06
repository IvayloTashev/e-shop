import './User.css'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import NumbersIcon from '@mui/icons-material/Numbers';
import { updateUser } from '../../redux/apiCalls'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const userId = location.pathname.split('/')[2];
    const [inputs, setInputs] = useState({});

    const user = useSelector(state => state.user.users.find(user => user._id === userId));

    const handleChanges = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser(dispatch, inputs, userId);
    }




    return (
        <div className='user-container'>
            <div className='user-title-container'>
                <h1 className='user-title'>Edit User</h1>
            </div>
            <div className='user-info-container'>
                <div className='user-info'>
                    <div className='user-info-top'>
                        <img className='user-image' src={user.image} alt="avatar" />
                        <div className='user-info-top-title'>
                            <p className='user-name'>{user.username}</p>
                        </div>
                    </div>
                    <div className='user-info-bot'>
                        <div className='user-info-section'>
                            <h3 className='user-info-title'>Account Details</h3>
                            <p className='user-single-detail'><NumbersIcon /> User ID: <span>{user._id}</span></p>
                            <p className='user-single-detail'><EmailIcon /> Email address: <span>{user.email}</span></p>
                            <p className='user-single-detail'><CalendarMonthIcon />Account created at: <span>{user.createdAt}</span></p>
                            <p className='user-single-detail'><PersonIcon /> Admin access: <span>{user.isAdmin ? "true" : "false"}</span></p>
                        </div>
                    </div>
                </div>

                <div className='user-update'>
                    <h2 className='user-update-title'>Edit</h2>
                    <form className='user-update-form'>
                        <label htmlFor="" className='user-update-label'>Image URL</label>
                        <input name='image' type="text" placeholder='Image URL' className='user-update-input' onChange={handleChanges} />
                        <label htmlFor="" className='user-update-label'>Username</label>
                        <input name='username' type="text" placeholder={user.username} className='user-update-input' onChange={handleChanges} />
                        <label htmlFor="" className='user-update-label'>Email</label>
                        <input name='email' type="text" placeholder={user.email} className='user-update-input' onChange={handleChanges} />
                        <button className='user-update-btn' onClick={handleUpdate}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
