import StudentLayout from "./StudentLayout";
import { CalendarDays, Briefcase } from "lucide-react";

export default function AppliedJobs() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) return null;

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  // Filter only this student applications
  const myApplications = applications.filter(
    (app) => app.studentEmail === currentUser.email
  );

  const total = myApplications.length;
  const approved = myApplications.filter(
    (app) => app.status === "Approved"
  ).length;
  const pending = myApplications.filter(
    (app) => app.status === "Pending"
  ).length;
  const rejected = myApplications.filter(
    (app) => app.status === "Rejected"
  ).length;

  const getStatusStyle = (status) => {
    if (status === "Approved")
      return "bg-green-100 text-green-600";
    if (status === "Rejected")
      return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold text-gray-800">
        My Applications
      </h1>

      <p className="text-gray-600 mt-2 mb-8">
        Track the status of your job applications
      </p>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Total Applications</p>
          <h2 className="text-2xl font-bold">{total}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Approved</p>
          <h2 className="text-2xl font-bold text-green-600">
            {approved}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold text-yellow-600">
            {pending}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Rejected</p>
          <h2 className="text-2xl font-bold text-red-600">
            {rejected}
          </h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Job Name</th>
              <th className="p-4">Department</th>
              <th className="p-4">Applied Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {myApplications.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-gray-500">
                  No applications yet.
                </td>
              </tr>
            ) : (
              myApplications.map((app, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 flex items-center gap-2 font-medium">
                    <Briefcase size={16} />
                    {app.jobTitle}
                  </td>

                  <td className="p-4">
                    {app.department}
                  </td>

                  <td className="p-4 flex items-center gap-2 text-gray-600">
                    <CalendarDays size={16} />
                    {app.appliedDate}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
}