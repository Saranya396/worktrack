import StudentLayout from "./StudentLayout";
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  User,
} from "lucide-react";

export default function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return null;

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const myApplications = applications.filter(
    (app) => app.studentEmail === currentUser.email
  );

  const total = myApplications.length;
  const approved = myApplications.filter(
    (a) => a.status === "Approved"
  ).length;
  const pending = myApplications.filter(
    (a) => a.status === "Pending"
  ).length;
  const rejected = myApplications.filter(
    (a) => a.status === "Rejected"
  ).length;

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* PROFILE */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <div className="flex items-center gap-2 mb-4">
          <User className="text-indigo-500" />
          <h2 className="text-lg font-semibold">
            Student Profile
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-semibold">
              {currentUser.fullName}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-semibold">
              {currentUser.email}
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Total Applications
          </p>
          <h2 className="text-3xl font-bold">
            {total}
          </h2>
          <FileText className="text-indigo-500 mt-2" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Approved</p>
          <h2 className="text-3xl font-bold text-green-600">
            {approved}
          </h2>
          <CheckCircle className="text-green-500 mt-2" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-600">
            {pending}
          </h2>
          <Clock className="text-yellow-500 mt-2" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Rejected</p>
          <h2 className="text-3xl font-bold text-red-600">
            {rejected}
          </h2>
          <XCircle className="text-red-500 mt-2" />
        </div>

      </div>
    </StudentLayout>
  );
}