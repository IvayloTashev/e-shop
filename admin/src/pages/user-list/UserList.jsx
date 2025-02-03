import './UserList.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/apiCalls';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'

const UserList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.user.users)

    useEffect(() => {
        (async () => {
            getUsers(dispatch);
        })();
    }, [dispatch])

    console.log(products);
    

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='user-list-info'>
                        <img src={params.row.avatar} alt="avatar" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 130, },
        { field: 'transaction', headerName: 'Transaction volume', width: 200, },
        {
            field: 'action', headerName: 'Action', width: 180, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row._id}>
                            <button className='user-list-edit'>Edit</button>
                        </Link>
                        <button className='user-list-delete' onClick={() => handleDelete(params.row.id)}>Delete</button>
                    </>
                )
            }
        },
    ];

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <div className='user-list-container'>
            <div className='user-list-top'>
                <h1>User list</h1>
                <Link to={'/createUser'}>
                    <button className='user-list-create-btn'>Create user</button>
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
                sx={{ border: 0 }}
            />
        </div>
    )
}

export default UserList
