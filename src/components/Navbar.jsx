import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaShoppingCart } from "react-icons/fa";


export default function Navbar({cartItemCount, toggle}) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  function handleMenuClick() {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  return (
    <header className="bg-teal-500 dark:bg-teal-800 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-2 flex justify-between items-center origin-top animate-open-menu">
        <a href="#hero">
          <img
            src="../src/media/img/logo.png"
            alt=""
            className="w-1/3 border-2 rounded-full"
          />
        </a>
        <div className="flex items-center">
          <button
            onClick={handleMenuClick}
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer"
          >
            &#9776;
          </button>
          <nav className="hidden md:flex space-x-8 text-xl items-center" aria-label="main">
            <a href="#products" className="hover:opacity-90">
              Products
            </a>
            <a href="#reviews" className="hover:opacity-90">
              Reviews
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
            <a href="#checkout" className="hover:opacity-90">
              <FaShoppingCart />
            </a>
            {cartItemCount > 0 && (
            <span className="absolute top-5 right-20 transform translate-x-3 bg-red-500
             text-white rounded-full text-xs font-bold px-2 py-1">  
              {cartItemCount}
            </span>
             )}
             <ThemeToggle toggle={toggle}/>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute top-0 bg-black w-full text-5xl flex flex-col justify-center ${
          mobileMenuVisible ? "" : "hidden"
        }`}
      >
        <button onClick={handleMenuClick} className="text-8xl self-end px-6">
          &times;
        </button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          onClick={handleMenuClick}
          aria-label="mobile"
        >
          <a href="#hero" className="w-full text-center py-6 hover: opacity-90">
            Home
          </a>
          <a
            href="#products"
            className="w-full text-center py-6 hover: opacity-90"
          >
            Products
          </a>
          <a
            href="#reviews"
            className="w-full text-center py-6 hover: opacity-90"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="w-full text-center py-6 hover: opacity-90"
          >
            Contact Us
          </a>
          <a
            href="#legal"
            className="w-full text-center py-6 hover: opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
}
