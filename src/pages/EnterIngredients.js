import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import axios from "axios";

export default function EnterIngredients() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            ingredients: input,
            number: 5,
            apiKey: "1a61b0965c3e4d81bc29f00b3eab277f"
          }
        }
      );

      navigate("/results", { state: { recipes: response.data } });
    } catch (err) {
      console.error(err);
      navigate("/results", { state: { recipes: [] } });
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="w-full flex justify-end p-4">
        <LogoutButton />
      </div>
      <div className="flex-grow flex items-center justify-center px-4">
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
            <button type="submit" className="bg-black text-white px-4 py-2">
              ➤
            </button>
          </form>

          {/* Back to main menu button */}
          <Link
            to="/"
            className="block bg-black text-white text-center py-2 mt-4"
          >
            Back to main menu
          </Link>
        </div>
      </div>
    </div>
  );
}
