import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

export default function ApplicationsReview() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(stored);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );

    setApplications(updated);
    localStorage.setItem("applications", JSON.stringify(updated));
  };

  const total = applications.length;
  const approved = applications.filter(
    (a) => a.status === "Approved"
  ).length;
  const rejected = applications.filter(
    (a) => a.status === "Rejected"
  ).length;

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-2">
        Applications Review
      </h1>
      <p className="text-gray-600 mb-8">
        Review and manage student applications
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-100 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">{total}</h2>
          <p>Total Applications</p>
        </div>

        <div className="bg-green-100 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">{approved}</h2>
          <p>Approved</p>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">{rejected}</h2>
          <p>Rejected</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Student Name</th>
              <th className="p-4">Job Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-4">{app.studentName}</td>
                <td className="p-4">{app.jobTitle}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : app.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="p-4 space-x-2">
                  {app.status === "Pending" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(app.id, "Approved")
                        }
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(app.id, "Rejected")
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}