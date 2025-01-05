import './Products.css'
import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../hooks/useProducts.js'
import ProductsItem from './products-item/ProductsItem.jsx'

const Products = ({ category, filters, sort }) => {
    const [products] = getAllProducts(category);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (category) {
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)))
            )
        }
    }, [products, category, filters]);

    useEffect(() => {
        const sortFunctions = {
            newest: (a, b) => a.createdAt - b.createdAt,
            lowToHigh: (a, b) => a.price - b.price,
            highToLow: (a, b) => b.price - a.price,
        };
    
        setFilteredProducts((prev) => [...prev].sort(sortFunctions[sort]));
    }, [sort]);

    return (
        <div className='products-container'>
            {category
                ? filteredProducts.map((item) => <ProductsItem item={item} key={item._id} />)
                : products.slice(0, 8).map((item) => <ProductsItem item={item} key={item._id} />)
            }
        </div>
    )
}

export default Products
