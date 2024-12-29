import React from 'react'
import './ProductsItem.css'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const ProductsItem = ({ item }) => {
    return (
        <div className='producs-item-container'>

            <div className='product-image-holder'>
                <img src={item.image} alt="" />
            </div>

            <div className='product-info-container'>
                <ShoppingCartOutlined />
                <SearchOutlined />
                <FavoriteBorderOutlined />
            </div>
        </div>
    )
}

export default ProductsItem
