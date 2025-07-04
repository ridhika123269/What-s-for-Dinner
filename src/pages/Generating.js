import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Generating() {
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for 2 seconds then go to Results
    const timer = setTimeout(() => {
      navigate("/results");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white text-black p-8 text-2xl font-semibold">
        Generating...
      </div>
    </div>
  );
}
