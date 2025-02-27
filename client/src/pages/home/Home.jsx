import React from 'react'
import './Home.css'

import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

export default Home

