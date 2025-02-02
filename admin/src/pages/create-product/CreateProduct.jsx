import './CreateProduct.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../redux/apiCalls'
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value,
        }));
    };

    const handleCategories = (e) => {
        setCategories(e.target.value.split(','));
    }

    const handleColors = (e) => {
        setColors(e.target.value.split(','));
    }

    const handleClick = (e) => {
        e.preventDefault();
        const product = { ...inputs, categories, colors };
        createProduct(dispatch, product)
        navigate('/products')
        
    };

    return (
        <div className='create-product-container'>
            <h1 className='create-product-title'>Create New Product</h1>
            <form className='create-product-form'>
                <div className='create-form-item'>
                    <label className='create-form-label'>Title</label>
                    <input name='title' className='create-form-input' type="text" onChange={handleChange} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Description</label>
                    <input name='description' className='create-form-input' type="text" onChange={handleChange} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Image URL</label>
                    <input name='img' className='create-form-input' type="text" onChange={handleChange} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Categories</label>
                    <input className='create-form-input' type="text" onChange={handleCategories} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Price</label>
                    <input name='price' className='create-form-input' type="number" onChange={handleChange} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Brand</label>
                    <input name='brand' className='create-form-input' type="text" onChange={handleChange} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Color</label>
                    <input className='create-form-input' type="text" onChange={handleColors} />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Stock</label>
                    <select name='inStock' className='create-form-input' onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <button onClick={handleClick} className='product-form-btn'>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct
