import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";

export default function EnterIngredients() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data to backend
    navigate("/generating");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar with logout on the right */}
      <div className="w-full flex justify-end p-4">
        <LogoutButton />
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 space-y-6">
        <div className="w-full max-w-md bg-white text-black p-6 space-y-4">
          <h2 className="text-xl font-bold text-center">Enter your ingredients</h2>
          <p className="text-center text-sm">Format: xyz, abc</p>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              placeholder="e.g., tomato, onion"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border border-gray-300 px-3 py-2"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2"
            >
              ➤
            </button>
          </form>
          <Link
            to="/"
            className="block bg-black text-white text-center py-2 mt-4"
          >
            Go back to main menu
          </Link>
        </div>
      </div>
    </div>
  );
}
