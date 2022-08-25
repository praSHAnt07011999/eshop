import React from "react";
import './Product.css';
import productImage from './Images/Bicycle.jpg';

function Product(){
    return (
        <div className="product">
            <div className="product_info">
                <p>Title</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>30</strong>
                </p>
                <div className="product_rating">⭐️⭐️⭐️⭐️⭐️</div>
            </div>
            <img src={productImage} alt="product-image"  />
            <button>Add to basket</button>
        </div>
    );
}

export default Product;