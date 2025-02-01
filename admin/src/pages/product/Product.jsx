import './Product.css'
import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import { productDummyData } from '../../dummyData'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest } from '../../constants/requestMethods'
import { updateProduct  } from '../../redux/apiCalls'


const Product = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productId = location.pathname.split('/')[2];
    const [productStats, setProductStats] = useState([]);
    const [inputs, setInputs] = useState({});

    const product = useSelector((state) => state.product.products.find((product) => product._id === productId));
    //TODO FIX IT LATER
    // const months = useMemo(
    //     () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // );

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await userRequest.get(`orders/income?pid=${productId}`);

    //             const list = res.data.sort((a, b) => {
    //                 return a._id - b._id
    //             });
    //             list.map((item) =>
    //                 setProductStats((prev) => [
    //                     ...prev,
    //                     { name: months[item._id - 1], Sales: item.total }
    //                 ]))
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     })();
    // }, [productId, months])

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateProduct (dispatch, inputs, productId)
    }

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
                    <Chart data={productStats} title={"Sales Performance"} dataKey={"Sales"} />
                </div>

                <div className='product-top-right'>
                    <div className='product-top-info'>
                        <img className='product-top-image' src={product.img} alt="productImage" />
                        <p className='product-top-name'>{product.title}</p>
                    </div>

                    <div className='product-bot-info'>
                        <div className='product-info-item'>
                            <p className='product-info-key'>Id: {product._id}</p>
                            <p className='product-info-value'>${product.price}</p>
                        </div>
                        <div className='product-info-item'>
                            <p className='product-info-key'>Sales:</p>
                            <p className='product-info-value'>$3000.00</p>
                        </div>
                        <div className='product-info-item'>
                            <p className='product-info-key'>In stock:</p>
                            <p className='product-info-value'>{product.inStock ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='product-bot-container'>
                <form className='product-bot-form'>
                    <div className='product-form-left'>
                        <label className='product-form-title'>Product Name</label>
                        <input name='title' className='product-form-input' type="text" placeholder={product.title} onChange={handleChange} />

                        <label className='product-form-title'>Product Description</label>
                        <input name='description' className='product-form-input' type="text" placeholder={product.description} onChange={handleChange} />

                        <label className='product-form-title'>Product Price</label>
                        <input name='price' className='product-form-input' type="text" placeholder={product.price} onChange={handleChange} />

                        <label className='product-form-title'>Color</label>
                        <input name='color' className='product-form-input' type="text" placeholder={product.color} onChange={handleChange} />

                        <label className='product-form-title'>In Stock</label>
                        <select className='product-form-input' name="instock" id="idStock" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className='product-form-right'>
                        <div className='product-upload'>
                            <img className='product-bot-image' src={product.img} />
                            <label for="file"></label>
                            <input type="file" id='file' />
                        </div>
                        <button className='product-upload-btn' onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
