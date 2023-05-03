import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import SearchForm from "./SearchForm";


export default function Products({ addToCart }) {
  const [product, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
        {product.filter((productItem) =>   productItem.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((product) => (
          <ProductItem
            key={product.id}
            productItem={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
      </section>
  );
}

