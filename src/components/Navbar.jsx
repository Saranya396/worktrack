import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-indigo-600">
        💼 WorkTrack
      </h1>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>
      </div>
    </nav>
  );
}