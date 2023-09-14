import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ size }) => {
  return (
    <nav>
      <div className="navbar">
        <span className="title">Shopping cart</span>
        <div className="cart">
          <span>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
