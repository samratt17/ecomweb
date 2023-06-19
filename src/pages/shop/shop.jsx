import React, { createContext, useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "../../products";
import "./shop.css";
import { EcomContext } from "../../context/Shop_context";

function Shop() {
  const { cartItem, increasecart } = useContext(EcomContext);

  return (
    <div className="shop">
      <div className="shoptitle">Sam shop</div>
      <div className="products">
        <ul className="product-grid">
          {products.map((item) => (
            <li key={item.id} className="product-item">
              <img src={item.productImage} alt="Description" />
              <div className="productName">{item.productName}</div>
              <div className="price">${item.price}</div>
              <Link to="/cart">
                <button
                  className="add-to-cart"
                  onClick={() => increasecart(item.id)}
                >
                  Add to cart
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shop;