import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <h1>Sign up</h1>
                <form action="">
                    <input type="text" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Login</button>
                </form>
                <div className='login-links'>
                    <a href="">Create an new account.</a>
                    <a href="">Forget password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login
