import { motion } from "framer-motion"
import { fadeIn } from "../../animationVariants"

export default function SearchForm({setSearchInput}) {
  return (
    <motion.form 
    variants={fadeIn("right", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className="flex justify-center my-12">
      <label
        htmlFor="filter-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="filter-search"
          className="block w-72 p-2 px-12 text-sm text-gray-900 border border-gray-400 outline-0 rounded-xl focus:opacity-100 bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search cupcakes, macarons.."
          onChange={(e) => setSearchInput(e.target.value)}
          required
        />
      </div>
    </motion.form>
  );
}
