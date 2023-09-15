import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.img} alt="Image" />
            <p>{item.title}</p>
          </div>
          <div className="cart-actions">
            <div className="cart-buttons">
              <button onClick={() => handleChange(item, +1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div className="cart-price-delete-btn">
              <p>$ {item.price}</p>
              <button onClick={() => handleRemove(item.id)}>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span className="total-label">Total</span>
        <span className="total-amount">$ {price}</span>
      </div>
    </article>
  );
};

export default Cart;
