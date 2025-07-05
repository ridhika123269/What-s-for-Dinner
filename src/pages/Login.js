import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="bg-white text-black p-8 rounded space-y-4 text-center">
        <h1 className="text-2xl font-semibold">Login</h1>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            localStorage.setItem("google_token", credentialResponse.credential);
            navigate("/"); // Go to Home after login
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
