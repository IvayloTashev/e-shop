import React from 'react'
import './Categories.css'
import { categories } from '../../dummyData.js'
import CategoryItem from './category-item/CategoryItem.jsx'

const Categories = () => {
    return (
        <div className='categories-container'>

            {categories.map((item) => (
                < CategoryItem item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Categories
