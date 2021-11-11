import React, { useEffect } from "react";
import { useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [match, setMatch] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
        setMatch(data);
      });
  }, []);
  useEffect(() => {
    console.log("Local Storage cart called");
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    //save to local storage for now
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setMatch(matchProduct);
    console.log(matchProduct.length);
  };
  return (
    <div>
      <div className="search-product">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Give your product name"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {match.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
