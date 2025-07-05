import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EnterIngredients from "./pages/EnterIngredients";
import UploadImage from "./pages/UploadImage";
import Results from "./pages/Results";
import FridgeResults from "./pages/FridgeResults";
import Generating from "./pages/Generating";
import SpinWheel from "./pages/SpinWheel";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login is public */}
        <Route path="/login" element={<Login />} />

        {/* All other routes are protected */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/enter-ingredients" element={<EnterIngredients />} />
                <Route path="/upload-image" element={<UploadImage />} />
                <Route path="/generating" element={<Generating />} />
                <Route path="/results" element={<Results />} />
                <Route path="/fridge-results" element={<FridgeResults />} />
                <Route path="/spin-wheel" element={<SpinWheel />} />
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
