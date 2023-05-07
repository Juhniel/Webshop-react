import Navbar from "./components/common/Navbar";
import MainContent from "./components/main/MainContent";
import Footer from "./components/common/Footer";
import Checkout from "./components/checkout/Checkout";
import OrderConfirm from "./components/checkout/OrderConfirm";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [orderConfirmVisible, setOrderConfirmVisible] = useState(false)
  const [orderStatus, setOrderStatus] = useState(false);

  function getTotalCartItems() {
    return cart.reduce((total, item) => total + item.amount, 0);
  }

  async function handleCheckoutPayment() {
    const url = "https://webshop-6dad9-default-rtdb.europe-west1.firebasedatabase.app/Products.json";
    const response = await fetch(url);
    const data = await response.json();
  
    // Uppdatera lager för varje produkt
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
  
        // Uppdatera firebase lager
        await fetch(`https://webshop-6dad9-default-rtdb.europe-west1.firebasedatabase.app/Products/${productKey}.json`, options);
        setOrderStatus(true);
        emptyCart();
      } else {
        setOrderStatus(false);
      }
    }
    setOrderConfirmVisible(true);
  }

  // Uppdatera antalet i kundvagn
  function updateCartItemAmount(productItem, updatedAmount) {
    const updatedCart = cart.map((item) =>
      item.id === productItem.id ? { ...item, amount: updatedAmount } : item
    );
    setCart(updatedCart);

  }
  // Sortera ut produkt från kundvagn
  function removeFromCart(productItem) {
    const updatedCart = cart.filter((item) => item.id !== productItem.id);
    setCart(updatedCart);
  }

  function emptyCart() {
    setCart([]);
    showCheckout();
  }

  function showCheckout() {
    setCheckoutVisible(true);
  }

  function hideCheckout() {
    setCheckoutVisible(false)
  }

  // Lägg till produkt till kundvagn
  function handleAddToCart(productItem, productAmount) {
    const existingCartItem = cart.find(item => item.id === productItem.id);

    if (existingCartItem) {
      updateCartItemAmount(existingCartItem, existingCartItem.amount + productAmount);
    } else {
      setCart([...cart, { ...productItem, amount: productAmount }]);
    }
  }

  // Håller reda på dark/lightmode
  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Lägger till tar bort class för dark/lightmode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Navbar
        getTotalCartItems={getTotalCartItems}
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
        />
      )}
      <OrderConfirm 
        visible={orderConfirmVisible} 
        orderStatus={orderStatus}
        onClose={() => setOrderConfirmVisible(false)}
      />
      <Footer />
    </>
  );
}
