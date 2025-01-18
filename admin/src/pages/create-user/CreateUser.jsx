import './CreateUser.css'
import React from 'react'


const CreateUser = () => {
    return (
        <div className='create-user-container'>
            <h2 className='create-user-title'>Create New User</h2>
            <form className='create-user-form'>
                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Username</label>
                    <input type="text" className='create-user-form-input' placeholder='Username' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Full Name</label>
                    <input type="text" className='create-user-form-input' placeholder='Full Name' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Email</label>
                    <input type="text" className='create-user-form-input' placeholder='Email' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Passworld</label>
                    <input type="password" className='create-user-form-input' placeholder='Passworld' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Phone</label>
                    <input type="text" className='create-user-form-input' placeholder='Phone' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Address</label>
                    <input type="text" className='create-user-form-input' placeholder='Address' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Gender</label>
                    <div className='create-user-form-gender'>
                        <input type="radio" className='create-user-form-radio' name='gender' id='male' value='male' />
                        <label for="male">Male</label>
                        <input type="radio" className='create-user-form-radio' name='gender' id='female' value='female' />
                        <label for="female">Female</label>
                    </div>
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Active</label>
                    <select name="active" id="active" className='create-user-form-input'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className='create-user-form-btn'>Create</button>
            </form>
        </div>
    )
}

export default CreateUser
