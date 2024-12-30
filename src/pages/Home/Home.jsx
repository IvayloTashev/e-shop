import React from 'react'
import './Home.css'

import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import Newsletter from '../../components/newsletter/Newsletter'

const Home = () => {
    return (
        <div className='main-container'>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </div>
    )
}

export default Home

