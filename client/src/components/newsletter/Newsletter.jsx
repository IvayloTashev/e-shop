import React from 'react'
import './Newsletter.css'

import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className='newsletter-container'>
            <h2>Newsletter</h2>
            <p>Get timely updates for your favorite products and our discounts.</p>

            <div className='newsletter-info-container'>
                <input type="text" placeholder='Your email...'/>
                <button><SendIcon /></button>
            </div>

        </div>
    )
}

export default Newsletter
