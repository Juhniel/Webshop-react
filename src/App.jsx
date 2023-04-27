import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
// import ThemeToggle from "./components/ThemeToggle"
import Checkout from "./components/Checkout"

import { useState, useEffect } from "react";


export default function App() {
  const[theme, setTheme] = useState("light");
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
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
      <Navbar cartItemCount={cartItemCount} toggle={handleThemeSwitch}/>
      <MainContent cartItemCount={cartItemCount} handleAddToCart={handleAddToCart} />
      <Checkout />
      <Footer />
    </>
  )
}