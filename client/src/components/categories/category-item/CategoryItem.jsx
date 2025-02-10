import React from 'react'
import './CategoryItem.css'
import { Link } from "react-router-dom"

const CategoryItem = ({ item }) => {

    return (

        <div className='category-item-container'>
            <Link to={`/products/${item.categories}`}>
                <div className='category-image-holder'>
                    <img src={item.image} alt="" />
                </div>

                <div className='category-info-holder'>
                    <p>{item.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem
