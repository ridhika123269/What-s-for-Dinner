import React from "react";
import { Link } from "react-router-dom";

export default function Results() {
  const recipes = [
    "Paneer Butter Masala",
    "Aloo Gobi",
    "Veg Biryani"
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white text-black w-full max-w-md p-6 space-y-6">
        <h2 className="text-2xl font-bold">
          Bon appetite!
          <br />
          Here are your results
        </h2>
        <div className="bg-neutral-900 text-white p-4 space-y-2">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="border-b border-neutral-700 py-2 text-lg"
            >
              {recipe}
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="block bg-black text-white text-center py-2"
        >
          Back to main menu
        </Link>
      </div>
    </div>
  );
}
