import { useEffect, useState } from "react";

export default function Products() {
    const [product, setProduct] = useState([])

    async function getProducts() {
        const url = "https://webshop-6dad9-default-rtdb.europe-west1.firebasedatabase.app/Products.json";
        const response = await fetch(url);
        const data = await response.json();
        const products = Object.values(data);
        setProduct(products);

        console.log(product)

    }

    useEffect(() => {
        getProducts();
    }, []);

    return(
        <section id="rockets" className="p-6 my-12">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Our Pastries
                </h2>
                <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                    {product.map((productItem) => (
                    <li key={productItem.id} className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <img src={`../src/media/img/${productItem.name}.png`} alt={productItem.name} className="w-1/2 mb-6"/>
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">{productItem.name}</h3>
                    <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">${productItem.price}</p>
                    <p className="sm:hidden text-2xl text-center text-slate-500 mt-2 dark:text-slate-400">{productItem.description}</p>
                 
                    <input type="number" step={1} min={1} max={100} className="mt-2 w-12 text-2xl text-center text-slate-500 border-2"/>
                    <button className="text-slate-500 mt-2 text-2xl">🛒 Add to Cart </button>
                    </li>
                    ))}
                </ul>
            </section>
    )
}