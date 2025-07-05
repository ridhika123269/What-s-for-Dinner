import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import axios from "axios";

export default function UploadImage() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detectedIngredients, setDetectedIngredients] = useState([]);
  const [extraInput, setExtraInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/detect",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setDetectedIngredients(response.data.detectedIngredients || []);
    } catch (err) {
      console.error(err);
      alert("Error analyzing image.");
    } finally {
      setLoading(false);
    }
  };

  const handleGetRecipes = async () => {
    const extra = extraInput
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x);

    const finalIngredients = [...detectedIngredients, ...extra];

    try {
      const response = await axios.post("http://localhost:5001/recipes", {
        ingredients: finalIngredients,
      });

      navigate("/results", {
        state: {
          ingredients: finalIngredients,
          recipes: response.data.recipes || [],
        },
      });
    } catch (err) {
      console.error(err);
      alert("Error fetching recipes.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="w-full flex justify-end p-4">
        <LogoutButton />
      </div>
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white text-black p-6 space-y-4">
          <h2 className="text-xl font-bold">Upload your fridge image</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 w-full"
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>
          </form>

          {detectedIngredients.length > 0 && (
            <>
              <h3 className="font-semibold">Detected Ingredients:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {detectedIngredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>

              <input
                type="text"
                placeholder="Add more ingredients, comma-separated"
                value={extraInput}
                onChange={(e) => setExtraInput(e.target.value)}
                className="w-full border px-3 py-2"
              />

              <button
                onClick={handleGetRecipes}
                className="bg-black text-white px-4 py-2 w-full"
              >
                Get Recipes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
