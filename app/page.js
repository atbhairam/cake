"use client";

import CakeCard from "../components/CakeCard";
import CupcakeCard from "../components/CupcakeCard";

const cakes = [
  { id: 1, name: "Red Velvet Cake", price: 800, image: "/images/cake1.jpg" },
  { id: 2, name: "Chocolate Truffle", price: 950, image: "/images/cake2.jpg" },
  { id: 3, name: "Strawberry Delight", price: 700, image: "/images/cake3.jpg" },
];

const cupcakes = [
  { id: 4, name: "Vanilla Cupcake", price: 200, image: "/images/cupcake1.jpg" },
  { id: 5, name: "Chocolate Cupcake", price: 250, image: "/images/cupcake2.jpg" },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Welcome to Kritika Bakes & Bliss 🍰
      </h1>

      <h2 className="text-2xl font-semibold mb-6">Cakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Cupcakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cupcakes.map((cupcake) => (
          <CupcakeCard key={cupcake.id} cupcake={cupcake} />
        ))}
      </div>
    </div>
  );
}
