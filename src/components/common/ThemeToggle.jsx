export default function ThemeToggle({ toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full p-1 bg-white dark:bg-gray-white relative  transition-colors duration-500 ease-in  focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-white focus:border-transparent"
    >
      <div id="toggleTheme" className="rounded-full w-4 h-4 bg-teal-500 dark:bg-teal-800 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out">
      </div>
    </button>
  );
}
