import React from 'react';
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { Delete } from '@material-ui/icons';
import { rows } from '../../FakeData/FakeData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

 const handleClick = (id) => {
    
}
const columns = [

    { field: 'id', headerName: 'ID', width: 110 },
    {
        field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'transaction',
        headerName: 'transaction',
        width: 160,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <Link to={"/users/"+ params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <Delete onClick={()=>handleClick(params.row.id)} className="userListDelete" />
                </>
            )
        }
    }
];

const UserList = () => {
    const [data, setData] = useState(rows)
    
    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection />
        </div>
    );
};

export default UserList;