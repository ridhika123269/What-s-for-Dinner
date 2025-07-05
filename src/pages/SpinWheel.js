import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export default function SpinWheel() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar with logout on the right */}
      <div className="w-full flex justify-end p-4">
        <LogoutButton />
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6 p-4">
        <h1 className="text-white text-2xl font-semibold">Spinning the wheel...</h1>
        <div className="w-64 h-64 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Color_wheel_480.png/320px-Color_wheel_480.png"
            alt="Spin the Wheel"
            className="object-contain"
          />
        </div>

        {/* Back to main menu button */}
        <Link
          to="/"
          className="mt-4 bg-white text-black px-4 py-2 font-semibold"
        >
          Back to main menu
        </Link>
      </div>
    </div>
  );
}
