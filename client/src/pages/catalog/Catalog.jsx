import './Catalog.css'
import React, { useState } from 'react'

import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom';

const Catalog = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[2];

    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (event) => {
        const value = event.target.value;

        setFilter({
            ...filters,
            [event.target.name]: value
        })
    };

    return (
        <div className='catalog-container'>
            <Navbar />

            <h1>Category: {category}</h1>

            <div className='catalog-filter-container'>
                <div className='filter-holder'>
                    <p>Filter Products:</p>
                    <select name='brand' onChange={handleFilters}>
                        <option value="">Brand:</option>
                        <option value="Logitech">Logitech</option>
                        <option value="Razer">Razer</option>
                        <option value="SteelSeries">Steelseries</option>
                    </select>
                    <select name='color' onChange={handleFilters}>
                        <option value="">Color:</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                    </select>
                </div>
                <div className='filter-holder'>
                    <p>Sort Products:</p>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="newest">Newest:</option>
                        <option value="lowToHigh">Price - low to high</option>
                        <option value="highToLow">Price - high to low</option>
                    </select>
                </div>
            </div>

            <Products category={category} filters={filters} sort={sort} />
            <Footer />
        </div>
    )
}

export default Catalog
