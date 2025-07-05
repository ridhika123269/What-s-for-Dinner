import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("google_token");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition border border-gray-300"
    >
      Log out
    </button>
  );
}
