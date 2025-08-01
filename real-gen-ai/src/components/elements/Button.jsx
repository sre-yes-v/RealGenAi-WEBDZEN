export default function Button({ onClick, value, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer bg-blue-950 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium shadow-xl hover:bg-blue-800 transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
    >
      {value}
    </button>
  );
}