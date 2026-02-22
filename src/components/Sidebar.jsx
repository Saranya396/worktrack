import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

export default function Sidebar({ role }) {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-8 text-indigo-600">
          💼 WorkTrack
        </h2>

        {role === "admin" && (
          <>
            <button onClick={() => navigate("/admin/dashboard")} className="block mb-3">Dashboard</button>
            <button onClick={() => navigate("/admin/post-job")} className="block mb-3">Post Job</button>
            <button onClick={() => navigate("/admin/manage-applications")} className="block mb-3">Manage Applications</button>
          </>
        )}

        {role === "student" && (
          <>
            <button onClick={() => navigate("/student/dashboard")} className="block mb-3">Dashboard</button>
            <button onClick={() => navigate("/student/view-jobs")} className="block mb-3">View Jobs</button>
            <button onClick={() => navigate("/student/applied-jobs")} className="block mb-3">Applied Jobs</button>
          </>
        )}
      </div>

      <button
        onClick={() => {
          logoutUser();
          navigate("/");
        }}
        className="text-red-500"
      >
        Logout
      </button>
    </div>
  );
}