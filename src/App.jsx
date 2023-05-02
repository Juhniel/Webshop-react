import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import OrderConfirm from "./components/OrderConfirm";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [orderConfirmVisible, setOrderConfirmVisible] = useState(false)
  const [orderStatus, setOrderStatus] = useState(false);

  async function handleCheckoutPayment() {
    const url = "https://webshop-6dad9-default-rtdb.europe-west1.firebasedatabase.app/Products.json";
  
    // Fetch the current stock from Firebase
    const response = await fetch(url);
    const data = await response.json();
  
    // Update stock for each product in the cart
    for (const cartItem of cart) {
      const productKey = `Product${cartItem.id}`;
      const productStock = data[productKey]?.stock;
  
      if (productStock !== undefined && productStock >= cartItem.amount) {
        const updatedStock = productStock - cartItem.amount;
  
        const options = {
          method: "PATCH",
          body: JSON.stringify({ stock: updatedStock }),
          headers: {
            "Content-type": "application/json",
          },
        };
  
        // Update the stock in Firebase
        await fetch(`https://webshop-6dad9-default-rtdb.europe-west1.firebasedatabase.app/Products/${productKey}.json`, options);
        setOrderStatus(true);
        emptyCart();
      } else {
        setOrderStatus(false);
      }
    }
    setOrderConfirmVisible(true);
  }

  

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

  const emptyCart = () => {
    setCart([]);
    showCheckout();
  };

  function showCheckout() {
    setCheckoutVisible(true);
  }

  function hideCheckout() {
    setCheckoutVisible(false)
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
        showCheckout={showCheckout}
        hideCheckout={hideCheckout}
        theme={theme}
      />
      {checkoutVisible ? (
        <Checkout
          cart={cart}
          updateCartItemAmount={updateCartItemAmount}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
          hideCheckout={hideCheckout}
          orderConfirm={handleCheckoutPayment}
        />
      ) : (
        <MainContent
          handleAddToCart={handleAddToCart}
          updateCartItemAmount={updateCartItemAmount}
          cart={cart}
        />
      )}
      <OrderConfirm 
        visible={orderConfirmVisible} 
        orderStatus={orderStatus}
        onClose={() => setOrderConfirmVisible(false)}
      />
      <Footer theme={theme} />
    </>
  );
}
