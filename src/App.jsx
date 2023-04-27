import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Checkout from "./components/Checkout"

import { useState, useEffect } from "react";


export default function App() {
  const[theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  

  const handleAddToCart = (productItem) => {
    setCart([...cart, productItem]);
  };

  useEffect(() => {
      if(theme === "dark") {
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
      <Navbar cartItemCount={cart.length} toggle={handleThemeSwitch} />
      <MainContent handleAddToCart={handleAddToCart} />
      {cart.length > 0 && <Checkout cart={cart} />}
      <Footer />
    </>
  )
}