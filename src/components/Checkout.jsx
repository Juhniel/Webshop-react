// import { useState } from "react";
// import { BsTrash3 } from "react-icons/bs";

export default function Checkout({ cart }) {

  function handleAmountChange(e, productItem) {
    const updatedAmount = parseInt(e.target.value) || 1;
    updateCartItemAmount(productItem, updatedAmount);
  }

  return (
    <section
      id="checkout"
      className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Checkout
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((productItem) => (
              <tr
                key={productItem.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img src={`../src/media/img/${productItem.name}.png`} />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {productItem.name}
                </td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={productItem.amount}
                    onChange={(e) => handleAmountChange(e, productItem)}
                    required
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {productItem.price}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {1}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
            <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
              <td
                colSpan="5"
                className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-right"
              >
                Total Price:
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {1}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-end">
        <button className="m-2 bg-teal-500 hover:opacity-90 active:bg-teal-500 text-white p-3 w-48 border border-solid rounded-xl border-slate-900  dark:bg-teal-800 dark:border-none">Continue Shopping</button>
        <button className="m-2 bg-teal-500 hover:opacity-90 active:bg-teal-500 text-white p-3 w-40 border border-solid rounded-xl border-slate-900  dark:bg-teal-800 dark:border-none">Checkout</button>
        </div>

    </section>
  );
}
