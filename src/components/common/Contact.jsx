import { motion } from "framer-motion";
import { fadeIn } from "../../animationVariants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
    >
      <motion.h2
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
      >
        Contact Us
      </motion.h2>
      <motion.form
       variants={fadeIn("right", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
        action=""
        className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
      >
        <label htmlFor="name">Full name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength="3"
          maxLength="60"
          placeholder="Name"
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
        />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          minLength="3"
          maxLength="60"
          placeholder="Subject"
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
        ></textarea>

        <button className="m-2 bg-teal-500 hover:opacity-90 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded">
          Submit
        </button>
      </motion.form>
    </section>
  );
}
