import React from 'react'
import './ProductsItem.css'
import { Link } from 'react-router-dom'

const ProductsItem = ({ item }) => {
    return (
        <Link className='producs-item-container' to={`/product/${item._id}`}>
            <div className='product-image-holder'>
                <img src={item.img} alt="" />
            </div>

            <div className='producs-info-container'>
                <h3 className='product-title'>{item.title}</h3>
                <p className='product-price'>${item.price}</p>
            </div>
        </Link>

    )
}

export default ProductsItem
