import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [generating, setGenerating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data to backend
    navigate("/generating");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white text-black w-full max-w-md p-6 space-y-6">
        <h1 className="text-sm">What’s for dinner?</h1>
        <h2 className="text-2xl font-bold">Upload your fridge image</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border border-gray-300 px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2"
          >
            Submit
          </button>
          <Link
            to="/"
            className="block bg-black text-white text-center py-2"
          >
            Back to main menu
          </Link>
        </form>
      </div>
    </div>
  );
}
