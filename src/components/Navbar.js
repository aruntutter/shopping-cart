import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="navbar">
        <span className="title" onClick={() => setShow(true)}>
          Shopping cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
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
