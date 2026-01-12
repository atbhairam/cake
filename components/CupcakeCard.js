"use client";

import { useCart } from "../context/CartContext";

export default function CupcakeCard({ cupcake }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-48 hover:scale-105 transition">
      <img
        src={cupcake.image}
        alt={cupcake.name}
        className="w-full max-h-28 sm:max-h-32 rounded-lg object-cover"
      />
      <h3 className="mt-2 font-semibold">{cupcake.name}</h3>
      <p className="text-pink-600 font-bold">₹{cupcake.price}</p>

      <button
        onClick={() => addToCart(cupcake)}
        className="mt-2 w-full bg-pink-500 text-white py-1 rounded-full hover:bg-pink-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
