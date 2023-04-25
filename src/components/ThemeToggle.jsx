export default function ThemeToggle({ toggle }) {


  return (
    <button
      onClick={toggle}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <span>Toggle Theme</span>
    </button>
  );
}
