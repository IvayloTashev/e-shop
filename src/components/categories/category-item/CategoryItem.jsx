import React from 'react'
import './CategoryItem.css'

const CategoryItem = ({ item }) => {

    return (
        <div className='category-item-container' key={item.id}>
            <div className='image-holder'>
                <img src={item.image} alt="" />
            </div>

            <div className='info-holder'>
                <p>{item.title}</p>
                <button>BUY NOW</button>
            </div>

        </div>
    )
}

export default CategoryItem
