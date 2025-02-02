import './ProductsList.css'
import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, deleteProduct } from '../../redux/apiCalls';

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
        (async () => {
            getProducts(dispatch);
        })();
    }, [dispatch])


    const handleDelete = (id) => {
        deleteProduct(dispatch, id)
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        {
            field: 'product', headerName: 'Product', width: 450, renderCell: (params) => {
                return (
                    <div className='product-list-info'>
                        <div className='product-list-info-img'>
                            <img src={params.row.img} alt="productImage" />
                        </div>
                        <div className='product-list-info-title'>
                            {params.row.title}
                        </div>
                    </div>
                )
            }
        },
        { field: 'description', headerName: 'Description', width: 800 },
        { field: 'price', headerName: 'Price', width: 100, },
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row._id}>
                            <button className='product-list-edit'>Edit</button>
                        </Link>
                        <button className='product-list-delete' onClick={() => handleDelete(params.row._id)}>Delete</button>
                    </>
                )
            }
        },
    ];

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <div className='products-list-container'>
            <div className='products-list-top'>
                <h1>Product list</h1>
                <Link to={'/createProduct'}>
                    <button className='products-list-create-btn'>Create product</button>
                </Link>
            </div>
            <DataGrid
                rows={products}
                disableRowSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                rowHeight={60}
                sx={{ border: 0 }}
            />
        </div>
    )
}

export default ProductsList
