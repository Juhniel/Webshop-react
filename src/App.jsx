import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  const updateCartItemAmount = (productItem, updatedAmount) => {
    const updatedCart = cart.map((item) =>
      item.id === productItem.id ? { ...item, amount: updatedAmount } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productItem) => {
    const updatedCart = cart.filter((item) => item.id !== productItem.id);
    setCart(updatedCart);
  };

  function toggleCheckout() {
    setCheckoutVisible(!checkoutVisible);
  }

  const handleAddToCart = (productItem) => {
    setCart([...cart, productItem]);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Navbar
        cartItemCount={cart.length}
        toggleTheme={handleThemeSwitch}
        toggleCheckout={toggleCheckout}
      />
      {checkoutVisible ? (
        <Checkout
          cart={cart}
          updateCartItemAmount={updateCartItemAmount}
          removeFromCart={removeFromCart}
          toggleCheckout={toggleCheckout}
        />
      ) : (
        <MainContent
          handleAddToCart={handleAddToCart}
          updateCartItemAmount={updateCartItemAmount}
          cart={cart}
        />
      )}
      <Footer />
    </>
  );
}
