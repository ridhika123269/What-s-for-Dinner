import React from "react";
import { Link } from "react-router-dom";

export default function FridgeResults() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white text-black w-full max-w-md p-6 space-y-6">
        <h1 className="text-sm">What’s for dinner?</h1>

        <div>
          <h2 className="text-xl font-bold mb-2">Ingredients identified</h2>
          <div className="bg-black h-10 w-full"></div>
        </div>

        <Link
          to="/"
          className="block bg-neutral-900 text-white text-center py-2"
        >
          Rethinking? Edit again.
        </Link>

        <div>
          <h2 className="text-lg font-semibold mb-2">Choose your mood</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-neutral-900 h-20"></div>
            <div className="bg-black h-20"></div>
            <div className="bg-black h-20"></div>
            <div className="bg-neutral-950 h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
