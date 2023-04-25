import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState(0)

  // adding to cart
  function handleAddCart(e) {

  }

  // Fetch products

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
        <i className=""></i>
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-wrap items-center gap-8">
        {product.map((productItem) => (
          <li
            key={productItem.id}
            className="w-full md:w-1/4 mx-auto flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
          >
            <img
              src={`../src/media/img/${productItem.name}.png`}
              alt={productItem.name}
              className="w-1/2 mb-6"
            />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              {productItem.name}
            </h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
              ${productItem.price}
            </p>
            <p className="sm:hidden text-2xl text-center text-slate-500 mt-2 dark:text-slate-400">
              {productItem.description}{" "}
            </p>

            <input
              type="number"
              min={1}
              max={100}
              className="mt-2 w-12 text-xl text-center text-slate-500 border-2 shadow rounded block"
              placeholder={1}
            />
            <button onClick={handleAddCart} className="text-slate-500 mt-2 text-2xl flex items-center justify-center hover:text-green-600">
              <BsCartPlus />
              <span className="ml-2">Add to cart</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
