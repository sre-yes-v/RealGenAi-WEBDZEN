// In a single Button.jsx component
import { Link } from "react-router-dom";

export default function Button({ to, onClick, children, className = "" }) {
  const baseClasses = "cursor-pointer bg-blue-950 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium shadow-xl hover:bg-blue-800 transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300";

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}