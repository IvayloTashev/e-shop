import './Cart.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import DeleteIcon from '@mui/icons-material/Delete';
import { removeQuality, addQuality } from '../../redux/cartRedux'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    return (
        <>
            <Navbar />
            <div className='cart-container'>

                <div className='cart-wrapper'>

                    <h1>Your products</h1>

                    <div className='top-cart-section'>
                        <Link to={'/'}>
                            <button className='top-cart-btn'>Continue shoping</button>
                        </Link>
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
                                            <p className='remove' onClick={() => dispatch(removeQuality(product._id))}>-</p>
                                            <p className='amount'>{product.quantity}</p>
                                            <p className='add' onClick={() => dispatch(addQuality(product._id))}>+</p>
                                        </div>
                                        <p>$ {product.price * product.quantity}</p>
                                        <button><DeleteIcon /></button>
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
        </>

    )
}

export default Cart
