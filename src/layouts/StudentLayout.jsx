import { Outlet, Link } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-white/5 border-r border-white/10 p-5">
        <h2 className="text-2xl font-bold mb-6">WorkTrack</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/student">Dashboard</Link>
          <Link to="/student/jobs">View Jobs</Link>
          <Link to="/student/applications">My Applications</Link>
          <Link to="/student/hours">Work Hours</Link>
          <Link to="/student/feedback">Feedback</Link>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}