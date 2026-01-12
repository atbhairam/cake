"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(""); // store applied coupon

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = (code) => {
    const validCoupons = { WELCOME10: 10, SWEET20: 20, LUXURY50: 50 };
    if (validCoupons[code.toUpperCase()]) {
      setCoupon(code.toUpperCase());
      return validCoupons[code.toUpperCase()];
    }
    return 0;
  };

  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    const discount = coupon ? applyCoupon(coupon) : 0;
    return total - (total * discount) / 100;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        coupon,
        setCoupon,
        applyCoupon,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
