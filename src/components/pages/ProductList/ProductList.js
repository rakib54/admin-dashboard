import React from 'react';
import './ProductList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Delete } from '@material-ui/icons';
import { ProductRows } from '../../FakeData/FakeData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
    const [data, setData] = useState(ProductRows)

    const columns = [

        { field: 'id', headerName: 'ID', width: 110 },
        {
            field: 'productName', headerName: 'ProductName', width: 200, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.ProductName}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },

        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <Delete onClick={() => handleClick(params.row.id)} className="userListDelete" />
                    </>
                )
            }
        }
    ];
    const handleClick = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection />
        </div>
    );
};

export default ProductList;