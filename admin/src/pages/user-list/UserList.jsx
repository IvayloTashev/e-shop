import './UserList.css'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'

const UserList = () => {
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
                        <Link to={'/user/' + params.row.id}>
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
            <DataGrid
                rows={data}
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

export default UserList
