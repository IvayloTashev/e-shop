import './CreateProduct.css'
import React from 'react'

const CreateProduct = () => {
    return (
        <div className='create-product-container'>
            <h1 className='create-product-title'>Create New Product</h1>
            <form className='create-product-form'>
                <div className='create-form-item'>
                    <label className='create-form-label'>Image</label>
                    <input type="file" />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Name</label>
                    <input className='create-form-input' type="text" />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Stock</label>
                    <input className='create-form-input' type="text" />
                </div>

                <div className='create-form-item'>
                    <label className='create-form-label'>Active</label>
                    <select className='product-form-input' name="active" id="idActive">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='product-form-btn'>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct
