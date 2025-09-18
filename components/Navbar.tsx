"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500  shadow-lg">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 cursor-pointer">
        Blog
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-white hover:scale-105 transition duration-200 cursor-pointer">Home</li>
        <li className="hover:text-white hover:scale-105 transition duration-200 cursor-pointer">Blog</li>
        <li className="hover:text-white hover:scale-105 transition duration-200 cursor-pointer">About</li>
      </ul>

      {/* Mobile Hamburger */}
      <button 
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 md:hidden">
          <a className="hover:text-black text-gray-700">Home</a>
          <a className="hover:text-black text-gray-700">Blog</a>
          <a className="hover:text-black text-gray-700">About</a>
        </div>
      )}
    </nav>
  );
}
