import './CreateUser.css'
import React, { useState } from 'react'
import { createUser } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'


const CreateUser = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    const [adminAccess, setAdminAccess] = useState({});


    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    };

    const handleAdmin = (e) => {
        if (e.target.value === 'yes') {
            setAdminAccess({ [e.target.name]: true });
        } else {
            setAdminAccess({ [e.target.name]: false });
        }
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const user = { ...inputs, ...adminAccess };
        createUser(dispatch, user);
    }





    return (
        <div className='create-user-container'>
            <h2 className='create-user-title'>Create New User</h2>
            <form className='create-user-form'>
                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Image URL</label>
                    <input name='image' type="text" className='create-user-form-input' placeholder='Image URL' onChange={handleChange} />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Username</label>
                    <input name='username' type="text" className='create-user-form-input' placeholder='Username' onChange={handleChange} />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Email</label>
                    <input name='email' type="text" className='create-user-form-input' placeholder='Email' onChange={handleChange} />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Passworld</label>
                    <input name='password' type="password" className='create-user-form-input' placeholder='Passworld' onChange={handleChange} />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Admin access</label>
                    <select name="isAdmin" id="isAdmin" className='create-user-form-input' onChange={handleAdmin}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                <button className='create-user-form-btn' onClick={handleCreate}>Create</button>
            </form>
        </div>
    )
}

export default CreateUser
