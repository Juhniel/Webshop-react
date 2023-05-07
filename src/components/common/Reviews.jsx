import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../../animationVariants"

export default function Reviews() {
  const [review, setReview] = useState([]);

  async function getReviews() {
    const url =
      "https://webshop-reviews-72901-default-rtdb.europe-west1.firebasedatabase.app/Reviews.json";
    const response = await fetch(url);
    const data = await response.json();
    const reviews = Object.values(data);
    setReview(reviews);
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section id="reviews" className="p-6 my-12">
      <motion.h2 
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Reviews
      </motion.h2>

      {review.map((userReview) => (
        <motion.figure 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        key={userReview.id} className="my-12">
          <blockquote className="bg-teal-500 dark:bg-teal-800 pl-14 pr-8 py-12 rounded-3xl relative">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 
             before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
              {userReview.message}
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            &#8212; {userReview.name}
          </figcaption>
        </motion.figure>
      ))}
    </section>
  );
}
