import AdminLayout from "./AdminLayout";
import {
  FileText,
  CheckCircle,
  Clock,
  User,
} from "lucide-react";

export default function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const totalApplications = applications.length;
  const approvedApplications = applications.filter(
    (a) => a.status === "Approved"
  ).length;
  const pendingApplications = applications.filter(
    (a) => a.status === "Pending"
  ).length;

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* PROFILE */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <div className="flex items-center gap-2 mb-4">
          <User className="text-indigo-500" />
          <h2 className="text-lg font-semibold">
            Admin Profile
          </h2>
        </div>

        <p className="font-semibold">
          {currentUser?.fullName}
        </p>
        <p className="text-gray-600">
          {currentUser?.email}
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Total Applications
          </p>
          <h2 className="text-3xl font-bold">
            {totalApplications}
          </h2>
          <FileText className="text-indigo-500 mt-2" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Approved Applications
          </p>
          <h2 className="text-3xl font-bold text-green-600">
            {approvedApplications}
          </h2>
          <CheckCircle className="text-green-500 mt-2" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Pending Applications
          </p>
          <h2 className="text-3xl font-bold text-yellow-600">
            {pendingApplications}
          </h2>
          <Clock className="text-yellow-500 mt-2" />
        </div>

      </div>
    </AdminLayout>
  );
}