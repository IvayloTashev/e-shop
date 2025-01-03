import React from 'react'
import './Products.css'

import { popularProducts } from '../../dummyData.js'
import ProductsItem from './products-item/ProductsItem.jsx'

const Products = () => {
    return (
        <div className='products-container'>
            {popularProducts.map((item) => (
                <ProductsItem item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Products
