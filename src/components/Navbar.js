import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <span className="title">Shopping cart</span>
        <div className="cart">
          <span>
            <i class="fa-solid fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;