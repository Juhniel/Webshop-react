import { motion } from "framer-motion"
import { fadeIn } from "../../animationVariants"

export default function Header() {

    return(
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-80 mt-20">
                <article className="sm:w-1/2">
                    <motion.h2 
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
                        Our pastries are made with <span className="text-red-500"> love ❤️</span> Only the best <span className="text-green-500"> local 👨‍🌾</span> produce  
                    </motion.h2>
                    <motion.p 
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-md text-2xl-mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 italic mt-2">
                        "We support fair wages for our employees and local farmers" - Juhn Kim, CEO & Founder of k-pastries
                    </motion.p>
                </article>
                <motion.img 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                src="assets/img/header/bakery.png"  
                alt="bakery" 
                className="w-1/2" />
            </section>
    )
}