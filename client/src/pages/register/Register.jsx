import React from 'react'
import './Register.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className='register-container'>
                <div className='register-wrapper'>
                    <h1>Create an account</h1>
                    <form action="">
                        <input type="text" placeholder='username' />
                        <input type="text" placeholder='email' />
                        <input type="password" placeholder='password' />
                        <input type="password" placeholder='repeat password' />
                        <p>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></p>
                        <button>Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
