/* eslint-disable jsx-a11y/label-has-associated-control */
import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../Components/Chart';
import { productData } from '../../DummyData';
import '../Stylesheet/Product.css';

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://img.bleacherreport.net/img/images/photos/003/670/171/hi-res-399b6db2301538002718257403bb41a0_crop_north.jpg?1492526553&w=3072&h=2048"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">WWE Championship Title</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">$123.56</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label> Product Name </label>
            <input type="text" placeholder="WWE Championship Title" />
            <label>In Stock</label>
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
              <img
                src="https://img.bleacherreport.net/img/images/photos/003/670/171/hi-res-399b6db2301538002718257403bb41a0_crop_north.jpg?1492526553&w=3072&h=2048"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: 'none' }}
              />
            </div>
            <button type="submit" className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
