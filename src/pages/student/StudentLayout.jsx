import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Clock,
  MessageSquare,
  LogOut,
  Home,
} from "lucide-react";

export default function StudentLayout({ children }) {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const baseLink =
    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition";

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl flex flex-col justify-between p-6">

        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-indigo-600 mb-10">
            WorkTrack
          </h1>

          <nav className="space-y-3">

            <NavLink
              to="/student-dashboard"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink
              to="/view-jobs"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <Briefcase size={18} />
              View Jobs
            </NavLink>

            <NavLink
              to="/applied-jobs"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <FileText size={18} />
              My Applications
            </NavLink>

<NavLink
  to="/work-hours"
  className={({ isActive }) =>
    `${baseLink} ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        : "text-gray-700 hover:bg-indigo-50"
    }`
  }
>
  <Clock size={18} />
  Work Hours
</NavLink>

<NavLink
  to="/feedback"
  className={({ isActive }) =>
    `${baseLink} ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        : "text-gray-700 hover:bg-indigo-50"
    }`
  }
>
  <MessageSquare size={18} />
  Feedback
</NavLink>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 space-y-4">

          <div>
            <p className="text-sm text-gray-500">Logged in as</p>
            <p className="font-semibold text-gray-700">
              {currentUser?.fullName}
            </p>
          </div>

          {/* 🔥 BACK TO HOME BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            <Home size={18} />
            Back to Home
          </button>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}