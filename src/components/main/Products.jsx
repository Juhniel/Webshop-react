import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import SearchForm from "../common/SearchForm";
import { motion } from "framer-motion"
import { fadeIn } from "../../animationVariants"

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
     <motion.h2 
     variants={fadeIn("right", 0.3)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: false, amount: 0.3 }}
     className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Products
      </motion.h2>
    <SearchForm setSearchInput={setSearchInput} />
      <motion.ul 
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="list-none mx-auto my-12 flex flex-wrap items-center gap-8">
        {product.filter((productItem) =>   productItem.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((product) => (
          <ProductItem
            key={product.id}
            productItem={product}
            addToCart={addToCart}
          />
        ))}
      </motion.ul>
      </section>
  );
}

