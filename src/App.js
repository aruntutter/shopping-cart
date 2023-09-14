import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />
      <Products />
      <Cart />
    </>
  );
};

export default App;
