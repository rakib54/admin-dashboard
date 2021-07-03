import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
import Charts from '../../charts/Charts'

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h2 className="productTitle">Product</h2>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Charts />
                </div>
                <div className="productTopRight"></div>
            </div>
            <div className="productBottom"></div>
        </div>
    );
};

export default Product;