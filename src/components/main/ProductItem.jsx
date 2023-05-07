import React, { useState } from "react";
import { BsCartPlus, BsCheckLg, BsXLg, BsBell, BsBellSlash } from "react-icons/bs";

export default function ProductItem({ productItem, addToCart }) {
  const [productAmount, setProductAmount] = useState(1);
  const [notification, setNotification] = useState(false);

  function toggleNotify() {
    setNotification(!notification);
  }

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
      <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-white mt-2">
        ${productItem.price}
      </p>

      <input
        type="number"
        min={1}
        max={productItem.stock}
        className="mt-2 w-12 text-xl text-center text-slate-500 border-2 shadow rounded block"
        value={productAmount}
        onChange={(e) =>
          setProductAmount((parseInt(e.target.value) || 1))
        }
      />

      {productItem.stock > 0 ? (
        <button
          onClick={() => addToCart(productItem, productAmount)}
          className="text-slate-500 mt-2 text-2xl flex items-center justify-center hover:text-green-600"
        >
          <BsCartPlus />
          <span className="ml-3 text-xl">Add to cart</span>
        </button>
      ) : (
        <button className="text-slate-500 mt-2 text-2xl flex items-center justify-center hover:text-green-600" onClick={toggleNotify}>
          {notification ? <><BsBell /> <span className="ml-2 text-xl">Don't notify me</span></>: <><BsBellSlash /><span className="ml-2 text-xl">Notify me</span></>}
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
}
