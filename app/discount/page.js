"use client";

import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart, removeFromCart, getTotal, coupon } = useCart();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // test key
      amount: getTotal() * 100, // in paise
      currency: "INR",
      name: "Kritika Bakes & Bliss",
      description: "Order Payment",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Kritika Patle",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f43f5e",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 shadow-xl">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Checkout</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-3 border-b pb-2"
        >
          <p>{item.name}</p>
          <p>₹{item.price}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 font-bold"
          >
            Remove
          </button>
        </div>
      ))}

      {coupon && (
        <p className="text-green-600 font-semibold mt-2">
          Coupon Applied: {coupon}
        </p>
      )}

      <h2 className="text-xl font-bold mt-4">Total: ₹{getTotal()}</h2>

      <button
        onClick={handlePayment}
        className="mt-4 w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition"
      >
        Pay Now
      </button>
    </div>
  );
}
