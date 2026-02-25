import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Clock,
  BarChart3,
  LogOut,
  Home,
  ClipboardList
} from "lucide-react";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const baseLink =
    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200";

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl flex flex-col justify-between p-6">

        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-indigo-600 mb-1">
            WorkTrack
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Admin Portal
          </p>

          <nav className="space-y-3">

            {/* Dashboard */}
            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            {/* Post Job */}
            <NavLink
              to="/post-job"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <Briefcase size={18} />
              Post Job
            </NavLink>

            {/* Manage Jobs */}
            <NavLink
              to="/manage-jobs"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <ClipboardList size={18} />
              Manage Jobs
            </NavLink>

            {/* Applications Review */}
            <NavLink
              to="/applications-review"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <FileText size={18} />
              Applications Review
            </NavLink>

            {/* Work Hours */}
            <NavLink
              to="/admin-work-hours"
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

            {/* Student Feedback */}
            <NavLink
              to="/student-feedback"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              <BarChart3 size={18} />
              Student Feedback
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

          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            <Home size={18} />
            Home
          </button>

          {/* Logout */}
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