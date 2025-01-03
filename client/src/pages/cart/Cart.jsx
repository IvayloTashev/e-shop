import React from 'react'
import './Cart.css'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Footer from '../../components/footer/Footer'

const Cart = () => {
    return (
        <div className='cart-container'>
            <Announcement />
            <Navbar />
            <div className='cart-wrapper'>

                <h1>Your products</h1>

                <div className='top-cart-section'>
                    <button className='top-cart-btn'>Continue shoping</button>
                    <div className='top-cart-description'>
                        <p>Shoopping Bag(2)</p>
                        <p>Your wishlist(1)</p>
                    </div>
                    <button className='top-cart-btn'>Chekout now</button>
                </div>

                <div className='bot-cart-section'>
                    <div className='cart-info-section'>
                        <div className='cart-product-info-container'>
                            <img src="https://desktop.bg/system/images/189888/normal/RZ0102540100R3M1.jpg" alt="" />
                            <div className='cart-product-info'>
                                <p><b>Product:</b> Razer - DeathAdder Essential</p>
                                <p><b>ID:</b> 123123123</p>
                                <div></div>
                                <p><b>Brand:</b> Razer</p>
                            </div>

                            <div className='cart-product-price'>
                                <div className='amount-container'>
                                    <p className='remove'>-</p>
                                    <p className='amount'>1</p>
                                    <p className='add'>+</p>
                                </div>
                                <p>$ 70.00</p>
                            </div>
                        </div>

                        <div className='separator'></div>

                        <div className='cart-product-info-container'>
                            <img src="https://desktop.bg/system/images/189888/normal/RZ0102540100R3M1.jpg" alt="" />
                            <div className='cart-product-info'>
                                <p><b>Product:</b> Razer - DeathAdder Essential</p>
                                <p><b>ID:</b> 123123123</p>
                                <div></div>
                                <p><b>Brand:</b> Razer</p>
                            </div>

                            <div className='cart-product-price'>
                                <div className='amount-container'>
                                    <p className='remove'>-</p>
                                    <p className='amount'>1</p>
                                    <p className='add'>+</p>
                                </div>
                                <p>$ 70.00</p>
                            </div>
                        </div>

                        <div className='separator'></div>

                        <div className='cart-product-info-container'>
                            <img src="https://desktop.bg/system/images/189888/normal/RZ0102540100R3M1.jpg" alt="" />
                            <div className='cart-product-info'>
                                <p><b>Product:</b> Razer - DeathAdder Essential</p>
                                <p><b>ID:</b> 123123123</p>
                                <div></div>
                                <p><b>Brand:</b> Razer</p>
                            </div>

                            <div className='cart-product-price'>
                                <div className='amount-container'>
                                    <p className='remove'>-</p>
                                    <p className='amount'>1</p>
                                    <p className='add'>+</p>
                                </div>
                                <p>$ 70.00</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='cart-summary-section'>
                        <h1>Order summary</h1>
                        <div className='cart-summary-info'>
                            <p>Subtotal</p>
                            <p>$ 80</p>
                        </div>
                        <div className='cart-summary-info'>
                            <p>Estemated shipping</p>
                            <p>$ 6.90</p>
                        </div>
                        <div className='cart-summary-info'>
                            <p>Shipping discount</p>
                            <p>$ -6.90</p>
                        </div>
                        <div className='cart-summary-info'>
                            <p><b>Total</b></p>
                            <p><b>$ 80</b></p>
                        </div>
                        <button>Chekout now</button>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart
