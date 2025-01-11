import './Login.css'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { login } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault();

        login(dispatch, { email, password });

    }

    return (
        <div>
            <Navbar />
            <div className='login-container'>
                <div className='login-wrapper'>
                    <h1>Sign up</h1>
                    {error && (<p className='errorMsg'>Something went wrong...</p>)}
                    <form action="">
                        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                        <button
                            onClick={handleLogin}
                            disabled={isFetching}
                        >Login</button>
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
