import React from "react";
import "../styles/Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;

  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>$ {price}</p>
        <button type="button" onClick={() => handleClick(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
