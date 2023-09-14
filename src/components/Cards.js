import React from "react";

const Cards = ({ item }) => {
  const { title, price, img } = item;

  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
