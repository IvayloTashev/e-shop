import React from 'react'
import './Footer.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='footer-left'>
                <h2>GGWP</h2>
                <p>© 2024 GGWP. All rights reserved. | Privacy Policy | Terms of Service</p>
                <div className='social-icons-container'>
                    <a href="https://www.facebook.com/" className='facebook-icon'><FacebookIcon /></a>
                    <a href="https://www.instagram.com/" className='instagram-icon'><InstagramIcon /></a>
                    <a href="https://x.com/" className='x-icon'><XIcon /></a>
                </div>
            </div>

            <div className='footer-center'>
                <h3>Useful Links</h3>
                <ul>
                    <a href=""><li>My Account</li></a>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Cart</li></a>
                    <a href=""><li>Whishlist</li></a>
                    <a href=""><li>Order Tracking</li></a>
                    <a href=""><li>Products</li></a>
                </ul>
            </div>

            <div className='footer-right'>
                <h2>Contacts:</h2>
                <p><LocationOnIcon /> 123 Aleksandrovska Street, <br />
                    Plovdiv, 4000, Bulgaria</p>
                <p><LocalPhoneIcon />+359 32 123 456</p>
                <p><EmailIcon />ggwp@gmail.com</p>
            </div>

        </div>
    )
}

export default Footer
