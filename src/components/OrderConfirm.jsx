import {BsHeartbreakFill, BsHeartFill} from "react-icons/bs"

export default function OrderConfirm({ visible, orderStatus, onClose }) {
  if (!visible) {
    return null;
  }

  return (
    <div
      id="staticModal"
      className="fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 flex items-center justify-center"
    >
      <div className="text-center relative w-full max-w-2xl max-h-full">
        <div className="text-center relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex flex-col items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
              {orderStatus ? "Your order has successfully been placed!" : "Your order has not been completed"}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {orderStatus ? "Thank you for ordering at k-pastries!" : "It seems like your order is out of stock..." }
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {orderStatus ? ` We hope you enjoy your pastries! We will start baking your pastries and we will be 
                sending them on your way shortly... ` : "Please try again or contact us at k-pastries@bakery.com"}
            </p>
            <p className="flex justify-center">
              {orderStatus ? <><BsHeartFill color="red" /> <BsHeartFill color="red" /> <BsHeartFill color="red" /> </> : <BsHeartbreakFill color="red"/>}
            </p>
          </div>
          <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button onClick={onClose} className="m-2 bg-teal-500 hover:opacity-90 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
}
