import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
import Charts from '../../charts/Charts'
import { ProductData } from '../../FakeData/FakeData';
import { Publish } from '@material-ui/icons';

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
                    <Charts data={ProductData} dataKey='sales' title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className="productInfoTopImg" src="https://images.samsung.com/levant/smartphones/galaxy-s20/models/images/galaxy-s20_models_360_kv_s.jpg" alt="" />
                        <span className="productName">Samsung S20</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">11</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">43220</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Samsung s20" />
                        <label>In stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img className="productFormImg" src="https://images.samsung.com/levant/smartphones/galaxy-s20/models/images/galaxy-s20_models_360_kv_s.jpg" alt="" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:'none'}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;