import { useNavigate } from "react-router-dom";

export default function BackButton({ to = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back
    </button>
  );
}