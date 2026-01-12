"use client";

import { useCart } from "../context/CartContext";

export default function CakeCard({ cake }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-5 rounded-3xl shadow-xl w-60 hover:scale-105 transition">
      <img
        src={cake.image}
        alt={cake.name}
        className="w-full max-h-40 sm:max-h-48 md:max-h-52 rounded-xl object-cover"
      />

      <h3 className="mt-3 font-semibold">{cake.name}</h3>
      <p className="text-pink-600 font-bold">₹{cake.price}</p>

      <select className="border w-full mt-2 p-1 rounded">
        <option>No Greeting Card</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Congratulations</option>
      </select>

      <button
        onClick={() => addToCart(cake)}
        className="mt-3 w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
