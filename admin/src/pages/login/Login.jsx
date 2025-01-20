import './Login.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginHandle = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
    }

    return (
        <div className='login-container'>
            <form className='login-form'>
                <label className='login-form-label'>Email</label>
                <input className='login-form-input' type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <label className='login-form-label'>Password</label>
                <input className='login-form-input' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <button className='login-form-btn' onClick={loginHandle}>Login</button>
            </form>
        </div>
    )
}

export default Login
