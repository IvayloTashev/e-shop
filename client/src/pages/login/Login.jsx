import React from 'react'
import './Login.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Login = () => {
    return (
        <div>
            <Navbar />
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
            <Footer />
        </div>

    )
}

export default Login
