"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-4 flex justify-between items-center shadow-xl">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Kritika Bakes & Bliss"
          width={50}
          height={50}
          className="rounded-full shadow-lg"
        />
        <span className="text-white text-2xl font-bold tracking-wider">
          Kritika Bakes & Bliss
        </span>
      </Link>

      <div className="flex gap-8 items-center font-medium text-white">
        <Link href="/signin" className="hover:underline">
          Sign In
        </Link>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
        <Link href="/discount" className="hover:underline">
          Offers
        </Link>
      </div>
    </nav>
  );
}
