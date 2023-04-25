import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import { useState } from "react";

export default function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };


  return (
    <>
      <Navbar cartItemCount={cartItemCount}/>
      <MainContent cartItemCount={cartItemCount} handleAddToCart={handleAddToCart} />
      <Footer />
    </>
  )
}