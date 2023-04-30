export default function SearchForm() {
  return (
    <form className="ml-6">
      <label
        for="filter-search"
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
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="filter-search"
          className="block w-half p-4 pl-10 text-sm text-gray-900 border border-gray-400 outline-0 rounded-xl focus:opacity-100 bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Filter cupcakes, macarons, croissants"
          required
        />
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-teal-500 hover:opacity-90 font-bold py-1 px-4 border-b-4 border-teal-700 rounded">Search</button> */}
      </div>
    </form>
  );
}
