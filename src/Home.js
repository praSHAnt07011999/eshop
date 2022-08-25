import React from "react";
import './Home.css';
import Product from './Product';
import productImage from './Images/Bicycle.jpg';

function Home(){
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
                    <div className="home_row">
                        <Product 
                            id="12321341"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                            price={11.96}
                            rating={5}
                            image={productImage}
                        />
                        <Product 
                            id="49538094"
                            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                            price={239.0}
                            rating={4}
                            image={productImage}
                        />
                    </div>
                    <div className="home_row">
                        <Product 
                             id="4903850"
                             title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                             price={199.99}
                             rating={3}
                            image={productImage}
                        />
                        <Product 
                             id="23445930"
                             title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                             price={98.99}
                             rating={5}
                            image={productImage}
                        />
                        <Product 
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image={productImage}
                        />
                    </div>
                    <div className="home_row">
                        <Product 
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image={productImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;