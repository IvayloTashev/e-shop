import './Product.css'
import React from 'react'
import Chart from '../../components/chart/Chart'
import { productDummyData } from '../../dummyData'
import { Link } from 'react-router-dom'


const Product = () => {
    return (
        <div className='product-container'>
            <div className='product-title-container'>
                <h2 className='product-title'>Product</h2>
                <Link to={'/createProduct'}>
                    <button className='product-create-btn'>Create</button>
                </Link>
            </div>

            <div className='product-top-container'>
                <div className='product-top-left'>
                    <Chart data={productDummyData} title={"Sales Performance"} dataKey={"Sales"} />
                </div>

                <div className='product-top-right'>
                    <div className='product-top-info'>
                        <img className='product-top-image' src="https://www.csl-computer.com/en/media/catalog/product/cache/4/image/3000x/9df78eab33525d08d6e5fb8d27136e95/r/a/razer_deathadder_v2_usb_maus-83519_01_3000px.png" alt="productImage" />
                        <p className='product-top-name'>Razer Deathadder</p>
                    </div>

                    <div className='product-bot-info'>
                        <div className='product-info-item'>
                            <p className='product-info-key'>Id: 1</p>
                            <p className='product-info-value'>$150.00</p>
                        </div>
                        <div className='product-info-item'>
                            <p className='product-info-key'>Sales:</p>
                            <p className='product-info-value'>$3000.00</p>
                        </div>
                        <div className='product-info-item'>
                            <p className='product-info-key'>Active:</p>
                            <p className='product-info-value'>Yes</p>
                        </div>
                        <div className='product-info-item'>
                            <p className='product-info-key'>In stock:</p>
                            <p className='product-info-value'>No</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='product-bot-container'>
                <form className='product-bot-form'>
                    <div className='product-form-left'>
                        <label className='product-form-title'>Product Name</label>
                        <input className='product-form-input' type="text" placeholder='Product Name' />

                        <label className='product-form-title'>In Stock</label>
                        <select className='product-form-input' name="instock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label className='product-form-title'>Active</label>
                        <select className='product-form-input' name="active" id="idActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className='product-form-right'>
                        <div className='product-upload'>
                            <img className='product-bot-image' src="https://www.csl-computer.com/en/media/catalog/product/cache/4/image/3000x/9df78eab33525d08d6e5fb8d27136e95/r/a/razer_deathadder_v2_usb_maus-83519_01_3000px.png" alt="productImage" />
                            <label for="file"></label>
                            <input type="file" id='file' />
                        </div>
                        <button className='product-upload-btn'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
