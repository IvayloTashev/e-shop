import './Product.css'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../../redux/apiCalls'

const Product = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productId = location.pathname.split('/')[2];
    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);

    const product = useSelector((state) => state.product.products.find((product) => product._id === productId));

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCategories = (e) => {
        setCategories(e.target.value.split(','));
    }

    const handleColors = (e) => {
        setColors(e.target.value.split(','));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const product = { ...inputs, categories, colors };
        updateProduct(dispatch, product, productId)
    }


    return (
        <div className='product-container'>
            <div className='product-title-container'>
                <h1 className='product-title'>Product details</h1>
            </div>

            <div className='product-top-container'>
                <div className='product-top-image'>
                    <img src={product.img} alt="productImage" />
                </div>

                <div className='product-top-info'>
                    <p className='product-top-info-item'><span>Id:</span> {product._id}</p>
                    <p className='product-top-info-item'><span>Title:</span> {product.title}</p>
                    <p className='product-top-info-item'><span>Description:</span> {product.description}</p>
                    <p className='product-top-info-item'><span>Price:</span> ${product.price}</p>
                    <p className='product-top-info-item'><span>Categories:</span> {product.categories.join(', ')}</p>
                    <p className='product-top-info-item'><span>Brand:</span> {product.brand}</p>
                    <p className='product-top-info-item'><span>Colors:</span> {product.color.join(', ')}</p>
                    <p className='product-top-info-item'><span>In stock: {product.inStock ? 'Yes' : 'No'}</span></p>
                </div>
            </div>

            <div className='product-bot-container'>
                <form className='product-bot-form'>
                    <div className='product-bot-form-pears'>
                        <label className='product-form-title'>Title</label>
                        <input name='title' className='product-form-input' type="text" placeholder={product.title} onChange={handleChange} />

                        <label className='product-form-title'>Description</label>
                        <input name='description' className='product-form-input' type="text" placeholder={product.description} onChange={handleChange} />
                    </div>

                    <div className='product-bot-form-pears'>
                        <label className='product-form-title'>Price</label>
                        <input name='price' className='product-form-input' type="text" placeholder={product.price} onChange={handleChange} />

                        <label className='product-form-title'>Brand</label>
                        <input name='brand' className='product-form-input' type="text" placeholder={product.brand} onChange={handleChange} />
                    </div>

                    <div className='product-bot-form-pears'>
                        <label className='product-form-title'>Categories</label>
                        <input name='categories' className='product-form-input' type="text" placeholder={product.categories} onChange={handleCategories} />

                        <label className='product-form-title'>Colors</label>
                        <input name='color' className='product-form-input' type="text" placeholder={product.color} onChange={handleColors} />
                    </div>

                    <div className='product-bot-form-pears'>
                        <label className='product-form-title'>Image</label>
                        <input name='img' className='product-form-input' type="text" placeholder={product.img} onChange={handleChange} />

                        <label className='product-form-title'>In Stock</label>
                        <select className='product-form-input' name="instock" id="idStock" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className='product-upload-btn' onClick={handleUpdate}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Product
