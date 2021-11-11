import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  // console.log(props.product);
  const { name, img, price, stock, seller, star } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by:{seller}</small>
        </p>
        <p>Price:{price}</p>
        <p>
          <small>only {stock} left in stock-order soon</small>
        </p>

        <Rating
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          initialRating={star}
          readonly
        ></Rating>
        <br />
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular mt-2"
        >
          {element} add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
