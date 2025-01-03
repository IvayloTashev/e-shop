import React from 'react'
import './Details.css'

import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

const Details = () => {
    return (
        <div className='details-container'>
            <Announcement />
            <Navbar />

            <div className='details-wrapper'>
                <div className='details-image-holder'>
                    <img src="https://desktop.bg/system/images/437733/normal/920012159.jpg" alt="" />
                </div>

                <div className='details-info-holder'>
                    <h1>PRO X TKL LIGHTSPEED</h1>
                    <p>A championship-trusted wireless gaming keyboard designed for the highest levels of competitive play. Designed with pros and engineered to win.</p>
                    <p>$134.99</p>
                    <div className='details-color-selector'>
                        <p>Select Color:</p>
                        <div className='color-selector'></div>
                        <div className='color-selector'></div>
                        <div className='color-selector'></div>
                    </div>

                    <div className='details-cart-container'>
                        <div className='amount-container'>
                            <p className='remove'>-</p>
                            <p className='amount'>1</p>
                            <p className='add'>+</p>
                        </div>

                        <button>ADD TO CART</button>
                    </div>

                </div>
            </div>

            <Newsletter />
            <Footer />

        </div>
    )
}

export default Details
