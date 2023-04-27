export default function Checkout() {

    return(
        <section id="checkout" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
             <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Checkout
        </h2>

        <table class="w-full min-w-max">
            <thead>
                <tr>
                    <th className="bg-gray-200 p-3 border border-solid border-gray-300 text-center font-medium text-sm capitalize">
                        Img
                    </th>
                    <th className="bg-gray-200 p-3 border border-solid border-gray-300 text-center font-medium text-sm capitalize">
                        Product
                    </th>
                    <th className="bg-gray-200 p-3 border border-solid border-gray-300 text-center font-medium text-sm capitalize">
                        Price
                    </th>
                    <th className="bg-gray-200 p-3 border border-solid border-gray-300 text-center font-medium text-sm capitalize">
                        Amount
                    </th>
                    <th className="bg-gray-200 p-3 border border-solid border-gray-300 text-center font-medium text-sm capitalize">
                        Total price
                    </th>
                    <th className="bg-gray-200 p-3 border border-solid border-gray-300 text-center font-medium text-sm capitalize">
                        Edit/Remove
                    </th>
                </tr>
            </thead>

            <tbody>
                <td className="w-32 p-3 border border-solid border-gray-300 text-center image">
                    Img
                </td>
                <td className="w-32 p-3 border border-solid border-gray-300 text-center image">
                    Product
                </td>
                <td className="w-32 p-3 border border-solid border-gray-300 text-center image">
                    Price
                </td>
                <td className="w-32 p-3 border border-solid border-gray-300 text-center image">
                    Amount
                </td>
                <td className="w-32 p-3 border border-solid border-gray-300 text-center image">
                    Total Price
                </td>
                <td className="w-32 p-3 border border-solid border-gray-300 text-center image">
                    Remove
                </td>
                
                
            </tbody>


        </table>
        </section>
    )
}