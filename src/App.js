import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EnterIngredients from "./pages/EnterIngredients";
import UploadImage from "./pages/UploadImage";
import Results from "./pages/Results";
import FridgeResults from "./pages/FridgeResults";
import Generating from "./pages/Generating";
import SpinWheel from "./pages/SpinWheel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Enter Ingredients */}
        <Route path="/enter-ingredients" element={<EnterIngredients />} />

        {/* Upload Image */}
        <Route path="/upload-image" element={<UploadImage />} />

        {/* Generating */}
        <Route path="/generating" element={<Generating />} />

        {/* Results */}
        <Route path="/results" element={<Results />} />

        {/* Fridge Results */}
        <Route path="/fridge-results" element={<FridgeResults />} />

        {/* Spin Wheel */}
        <Route path="/spin-wheel" element={<SpinWheel />} />
      </Routes>
    </BrowserRouter>
  );
}
