import './UserList.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, deleteUser } from '../../redux/apiCalls';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users)

    useEffect(() => {
        (async () => {
            getUsers(dispatch);
        })();
    }, [dispatch])

    const handleDelete = (userId) => {
        deleteUser(dispatch, userId)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },
        {
            field: 'user', headerName: 'User', width: 450, renderCell: (params) => {
                return (
                    <div className='user-list-info'>
                        <div className='user-list-info-img'>
                            <img src={params.row.image} alt="avatar" />
                        </div>
                        <div className='user-list-info-title'>
                            <p>{params.row.username}</p>
                        </div>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 450 },
        { field: 'isAdmin', headerName: 'Admin access', width: 250, },
        {
            field: 'action', headerName: 'Action', width: 300, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row._id}>
                            <button className='user-list-edit'>Edit</button>
                        </Link>
                        <button className='user-list-delete' onClick={() => handleDelete(params.row._id)}>Delete</button>
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
                rows={users}
                disableRowSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                rowHeight={65}
                sx={{ border: 0 }}
            />
        </div>
    )
}

export default UserList
