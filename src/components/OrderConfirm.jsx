export default function OrderConfirm({ visible, onClose }) {
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
              Your order has successfully been placed!
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
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
