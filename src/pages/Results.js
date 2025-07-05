import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export default function Results() {
  const location = useLocation();

  const recipes = location.state?.recipes || [];
  const detectedIngredients = location.state?.ingredients || [];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="w-full flex justify-end p-4">
        <LogoutButton />
      </div>
      <div className="flex items-center justify-center flex-grow p-4">
        <div className="bg-white text-black w-full max-w-md p-6 space-y-6">
          <h2 className="text-2xl font-bold">
            Bon appétit!
            <br />
            Here are your results
          </h2>

          {recipes.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Recommended Recipes:
              </h3>
              <ul className="space-y-3">
                {recipes.map((recipe) => (
                  <li
                    key={recipe.id}
                    className="border-b border-neutral-300 pb-2"
                  >
                    <p className="font-semibold">{recipe.title}</p>
                    {recipe.image && (
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full mt-2 rounded"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No recipes found.</p>
          )}

          <Link to="/" className="block bg-black text-white text-center py-2">
            Back to main menu
          </Link>
        </div>
      </div>
    </div>
  );
}
