import React from 'react'
import './Cart.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart);

    return (
        <div className='cart-container'>
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
                        {cart.products.map(product => (
                            <div className='cart-product-info-container' key={product._id}>
                                <img src={product.img} alt="" />
                                <div className='cart-product-info'>
                                    <p><b>Product:</b> {product.title}</p>
                                    <p><b>ID:</b> {product._id}</p>
                                    <p><b>Color:</b> {product.color}</p>
                                    <p><b>Brand:</b> {product.brand}</p>
                                </div>

                                <div className='cart-product-price'>
                                    <div className='amount-container'>
                                        <p className='remove'>-</p>
                                        <p className='amount'>{product.quantity}</p>
                                        <p className='add'>+</p>
                                    </div>
                                    <p>$ {product.price * product.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='cart-summary-section'>
                        <h1>Order summary</h1>
                        <div className='cart-summary-info'>
                            <p>Subtotal</p>
                            <p>$ {cart.total}</p>
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
                            <p><b>$ {cart.total}</b></p>
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
