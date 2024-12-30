import React from 'react'
import './Catalog.css'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Products from '../../components/products/Products'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

const Catalog = () => {
    return (
        <div className='catalog-container'>
            <Announcement />
            <Navbar />

            <h1>Products</h1>

            <div className='catalog-filter-container'>
                <div className='filter-holder'>
                    <p>Filter Products:</p>
                    <select>
                        <option value="0">Brand:</option>
                        <option value="1">Logitech</option>
                        <option value="2">Razer</option>
                        <option value="3">Steelseries</option>
                    </select>
                    <select>
                        <option value="0">Color:</option>
                        <option value="1">Black</option>
                        <option value="2">White</option>
                        <option value="3">Blue</option>
                    </select>
                </div>
                <div className='filter-holder'>
                    <p>Sort Products:</p>
                    <select>
                        <option value="0">Newest:</option>
                        <option value="1">Price - low to high</option>
                        <option value="2">Price - high to low</option>
                    </select>
                </div>
            </div>

            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Catalog
