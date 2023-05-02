import React, { useEffect, useState, useRef} from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs"
import { BsXLg } from "react-icons/bs";
import { BsBell } from "react-icons/bs"
import SearchForm from "./SearchForm";

export default function Products({ addToCart, updateCartItemAmount, cart}) {
  const [product, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const inputRefs = useRef({});

  useEffect(() => {
    const newInputRefs = {};
  
    product.forEach((productItem) => {
      if (inputRefs.current[productItem.id]) {
        newInputRefs[productItem.id] = inputRefs.current[productItem.id];
      } else {
        newInputRefs[productItem.id] = React.createRef();
      }
    });
  
    inputRefs.current = newInputRefs;
  }, [product]);
  
  // adding to cart
  function handleAddCart(productItem, amount) {
    // Check if product already exists in the cart
    const existingProduct = cart.find(item => item.id === productItem.id);
  
    if (existingProduct) {
      // Update the amount of the existing product
      updateCartItemAmount(existingProduct, existingProduct.amount + amount);
    } else {
      // Add the product as a new item
      const productWithAmount = { ...productItem, amount };
      addToCart(productWithAmount);
    }
  }

  async function getProducts() {
    const url =
      "https://webshop-6dad9-default-rtdb.europe-west1.firebasedatabase.app/Products.json";
    const response = await fetch(url);
    const data = await response.json();
    const products = Object.values(data);
    setProduct(products);
  }

  

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <section id="products" className="p-6 my-12">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Products
      </h2>
      <SearchForm setSearchInput={setSearchInput} />
      <ul className="list-none mx-auto my-12 flex flex-wrap items-center gap-8">
        {product.filter((productItem) =>
         productItem.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((productItem) => {
          const productInputValue = inputRefs.current[productItem.id];

          return (
            <li
              key={productItem.id}
              className=" md:w-1/4 w-2/3 mx-auto flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-teal-50 dark:bg-gray-800 py-6 px-2 rounded-3xl shadow-xl"
            >
              <img
                src={`assets/img/products/${productItem.name}.png`}
                alt={productItem.name}
                className="object-fit:cover h-24 mb-6"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                {productItem.name}
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                ${productItem.price}
              </p>

              <input
                type="number"
                min={1}
                max={productItem.stock}
                className="mt-2 w-12 text-xl text-center text-slate-500 border-2 shadow rounded block"
                defaultValue={1}
                ref={inputRefs.current[productItem.id]}
              />

              {productItem.stock > 0 ? (
                <button
                  onClick={() =>
                    handleAddCart(
                      productItem,
                      parseInt(productInputValue.current.value) || 1
                    )
                  }
                  className="text-slate-500 mt-2 text-2xl flex items-center justify-center hover:text-green-600"
                >
                  <BsCartPlus />
                  <span className="ml-3 text-xl">Add to cart</span>
                </button>
              ) : (
                <button className="text-slate-500 mt-2 text-2xl flex items-center justify-center hover:text-green-600">
                  <BsBell />
                  <span className="ml-2 text-xl">Notify me</span>
                </button>
              )}

              <p className="mb:flex text-center text-slate-500 dark:text-slate-400 mt-2">
                {productItem.stock > 0 ? (
                  <>
                    <BsCheckLg color="green" className="inline-block" size={28} />
                    <span className="ml-2 text-xl">
                      In stock ({productItem.stock})
                    </span>
                  </>
                ) : (
                  <>
                    <BsXLg color="red" className="inline-block" size={28} />
                    <span className="inline text-xl mx-1">Not available</span>
                  </>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
