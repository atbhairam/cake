"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-pink-50 to-white min-h-screen flex flex-col font-serif">
        <CartProvider>
          <Navbar />
          <main className="flex-grow py-10 px-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
