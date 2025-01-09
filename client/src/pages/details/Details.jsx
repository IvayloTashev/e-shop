import React, { useState } from 'react'
import './Details.css'

import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { getOneProduct } from '../../hooks/useProducts'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'

const Details = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product] = getOneProduct(id);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(null);
    const dispatch = useDispatch();

    const handleQuality = (type) => {
        if (type === "decrease") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }

        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, quantity, color }));
    }

    return (
        <div className='details-container'>
            <Announcement />
            <Navbar />

            <div className='details-wrapper'>
                <div className='details-image-holder'>
                    <img src={product.img} alt="image" />
                </div>

                <div className='details-info-holder'>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <div className='details-color-selector'>
                        <p>Select Color:</p>
                        {product.color?.map((c) => (
                            <div className='color-selector'
                                key={c}
                                style={{ backgroundColor: c }}
                                onClick={() => setColor(c)}
                            ></div>
                        ))}
                    </div>

                    <div className='details-cart-container'>
                        <div className='amount-container'>
                            <button className='remove' onClick={() => handleQuality('decrease')}>-</button>
                            <p className='amount'>{quantity}</p>
                            <button className='add' onClick={() => handleQuality('increase ')}>+</button>
                        </div>

                        <button onClick={handleAddToCart}>ADD TO CART</button>
                    </div>

                </div>
            </div>

            <Newsletter />
            <Footer />

        </div>
    )
}

export default Details
