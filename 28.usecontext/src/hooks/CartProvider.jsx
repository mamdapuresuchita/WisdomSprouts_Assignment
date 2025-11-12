import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  // Initialize cart from localStorage

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart63");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //   Save cart in localStorage on change

  useEffect(() => {
    localStorage.setItem("cart63", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartLength = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, cartLength, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
