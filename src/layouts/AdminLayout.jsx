import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-white/5 border-r border-white/10 p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Portal</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/post-job">Post Job</Link>
          <Link to="/admin/manage-jobs">Manage Jobs</Link>
          <Link to="/admin/applications">Applications</Link>
          <Link to="/admin/reports">Reports</Link>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}