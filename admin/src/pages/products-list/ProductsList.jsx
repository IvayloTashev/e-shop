import './ProductsList.css'
import React, { useEffect, useState } from 'react'
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
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'product', headerName: 'Product', width: 300, renderCell: (params) => {
                return (
                    <div className='product-list-info'>
                        <img src={params.row.img} alt="productImage" />
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        { field: 'price', headerName: 'Price', width: 200, },
        {
            field: 'action', headerName: 'Action', width: 180, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
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
            <DataGrid
                rows={products}
                disableRowSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </div>
    )
}

export default ProductsList
