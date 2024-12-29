import React from 'react'
import './CategoryItem.css'

const CategoryItem = ({ item }) => {

    return (
        <div className='category-item-container'>
            <div className='category-image-holder'>
                <img src={item.image} alt="" />
            </div>

            <div className='category-info-holder'>
                <p>{item.title}</p>
                <button>BUY NOW</button>
            </div>

        </div>
    )
}

export default CategoryItem
