export default function Header() {

    return(
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12">
                <article className="sm:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
                        Our pastries are made with true <span className="text-red-500"> love ❤️ local</span>  produce, choose with care
                    </h2>
                    <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 italic mt-2">
                        Choosing a delicious pastry supports a small business and our local farmers
                    </p>
                </article>
                <img src="../src/media/img/bakery.png" alt="cake" className="w-1/2" />
            </section>
    )
}