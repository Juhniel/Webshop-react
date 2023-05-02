// import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";

export default function Checkout({
  cart,
  updateCartItemAmount,
  removeFromCart,
  hideCheckout,
  emptyCart,
  orderConfirm,
}) {

  // Hanterar uppdatering av produktantal i kundvagn
  function handleAmountChange(e, productItem) {
    const updatedAmount = parseInt(e.target.value) || 1;
    updateCartItemAmount(productItem, updatedAmount);
  }

  // Räknar ut totala summa av produkter i kundvagn
  function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.amount * item.price, 0);
  }

  return (
    <section
      id="checkout"
      className="pt-2 pb-96 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-14 text-slate-900 dark:text-white">
        Checkout
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
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
                  <img src={`assets/img/products/${productItem.name}.png`} />
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
                    min={1}
                    max={productItem.stock}
                    required
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${productItem.price}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${productItem.amount * productItem.price}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => removeFromCart(productItem)}
                  >
                    <BsTrash3 className="text-xl"/>
                  </a>
                </td>
              </tr>
            ))}
            <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
              <td
                colSpan="5"
                className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-right text-xl"
              >
                {cart.length > 0 ? "Total Price:" : "Your cart is empty"}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">
                {cart.length > 0 ? `$${calculateTotalPrice()}` : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-end py-2">
        {cart.length > 0 ? (
          <>
            <button
              onClick={hideCheckout}
              className="m-2 bg-teal-500 hover:opacity-90 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded"
            >
              Continue Shopping
            </button>
            <button
              onClick={emptyCart}
              className="m-2 bg-teal-500 hover:opacity-90 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded"
            >
              Empty Cart
            </button>
            <button
              onClick={orderConfirm}
              className="m-2 bg-teal-500 hover:opacity-90 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded"
            >
              Checkout
            </button>{" "}
          </>
        ) : (
          <button
            onClick={hideCheckout}
            className="m-2 bg-teal-500 hover:opacity-90 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded"
          >
            Continue Shopping
          </button>
        )}
      </div>
    </section>
  );
}