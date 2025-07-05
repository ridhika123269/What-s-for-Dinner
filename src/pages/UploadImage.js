import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically upload the image
    navigate("/generating");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar with logout on the right */}
      <div className="w-full flex justify-end p-4">
        <LogoutButton />
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center p-4">
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
    </div>
  );
}
