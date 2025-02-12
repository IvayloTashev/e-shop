import React, { useState } from 'react'
import './Register.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/apiCalls'

const Register = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        register(dispatch, inputs)
    }

    return (
        <div>
            <Navbar />
            <div className='register-container'>
                <div className='register-wrapper'>
                    <h1>Create an account</h1>
                    <form action="">
                        <input name='username' type="text" placeholder='username' onChange={handleChange} />
                        <input name='email' type="text" placeholder='email' onChange={handleChange} />
                        <input name='password' type="password" placeholder='password' onChange={handleChange} />
                        <p>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></p>
                        <button onClick={handleRegister}>Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
