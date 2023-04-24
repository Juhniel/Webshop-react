import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function handleMenuClick() {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  return (
    <header className="bg-emerald-400 dark:bg-emerald-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-2 flex justify-between items-center origin-top animate-open-menu">
        <a href="#hero">
          {" "}
          <img
            src="../src/media/img/logo.png"
            alt=""
            className="w-1/3 border-2 rounded-full"
          />{" "}
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
            <a href="#rockets" className="hover:opacity-90">
              Products
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Reviews
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
            <a href="#checkout" className="hover:opacity-90">
              <FaShoppingCart />
            </a>
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
          aria-label="mobile"
        >
          <a href="#hero" className="w-full text-center py-6 hover: opacity-90">
            Home
          </a>
          <a
            href="#rockets"
            className="w-full text-center py-6 hover: opacity-90"
          >
            Our Rockets
          </a>
          <a
            href="#testimonials"
            className="w-full text-center py-6 hover: opacity-90"
          >
            Testimonials
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
