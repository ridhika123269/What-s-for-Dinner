import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">What’s for dinner?</h1>
      <div className="h-1 w-24 bg-gray-400"></div>

      <div className="w-full bg-neutral-900 h-48"></div>

      <div className="bg-white text-black py-3 px-6 text-center w-full max-w-2xl">
        <span className="text-lg font-medium">WHAT YOU CAN DO</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        <button
          onClick={() =>
            navigate("/enter-ingredients")
          }
          className="bg-neutral-900 hover:bg-neutral-800 h-60 flex items-center justify-center text-lg font-semibold"
        >
          Choose groceries manually
        </button>

        <button
          onClick={() =>
            navigate("/upload-image")
          }
          className="bg-neutral-900 hover:bg-neutral-800 h-60 flex items-center justify-center text-lg font-semibold"
        >
          Show me your fridge
        </button>

        <button
          onClick={() =>
            navigate("/spin-wheel")
          }
          className="bg-neutral-900 hover:bg-neutral-800 h-60 flex items-center justify-center text-lg font-semibold"
        >
          Spin a wheel
        </button>
      </div>
    </div>
  );
}
