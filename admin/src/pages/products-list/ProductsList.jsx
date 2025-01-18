import './ProductsList.css'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom'

const ProductsList = () => {
    const [products, setProducts] = useState(productRows);

    const handleDelete = (id) => {
        setProducts(products.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='product-list-info'>
                        <img src={params.row.image} alt="productImage" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 130, },
        { field: 'price', headerName: 'Price', width: 200, },
        {
            field: 'action', headerName: 'Action', width: 180, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className='product-list-edit'>Edit</button>
                        </Link>
                        <button className='product-list-delete' onClick={() => handleDelete(params.row.id)}>Delete</button>
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
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </div>
    )
}

export default ProductsList
