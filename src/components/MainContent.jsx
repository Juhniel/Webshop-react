import Products from "./Products";

export default function MainContent() {
    return(
        <main className="max-w-4xl mx-auto">
            
            <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12">
                <article className="sm:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
                        Our pastries are made with true <span className="text-red-700 dark:text-indigo-300"> love ❤️ local</span>  produce, choose with care
                    </h2>
                    <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                        Choosing a delicious pastry supports a small business and our local farmers
                    </p>
                </article>
                <img src="../src/media/img/cake.png" alt="cake" className="w-1/2" />
            </section>

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <Products />

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <section id="Reviews" className="p-6 my-12">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Reviews
                </h2>
            </section>

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <section id="contact" className="p-6 my-12">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Contact Us
                </h2>
            </section>
        </main>
    )
}