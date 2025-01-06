import React from 'react'
import './ProductsItem.css'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const ProductsItem = ({ item }) => {
    return (
        <div className='producs-item-container'>

            <div className='product-image-holder'>
                <img src={item.img} alt="" />
            </div>

            <div className='product-info-container'>
                <button><ShoppingCartOutlined /></button>
                <Link to={`/product/${item._id}`}><button><SearchOutlined /></button></Link>
                <button><FavoriteBorderOutlined /></button>
            </div>
        </div>
    )
}

export default ProductsItem
