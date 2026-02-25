import { useState } from "react";
import AdminLayout from "./AdminLayout";

export default function WorkHours() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      student: "Saranya",
      job: "Library Assistant",
      status: "Approved",
      hours: 0,
    },
    {
      id: 2,
      student: "Rahul",
      job: "Lab Helper",
      status: "Approved",
      hours: 0,
    },
  ]);

  const handleHoursChange = (id, value) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, hours: value } : app
    );
    setApplications(updated);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-2">
        Work Hours Management
      </h1>
      <p className="text-gray-600 mb-8">
        Enter and manage student work hours
      </p>

      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Student Name</th>
              <th className="p-4">Job Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Work Hours</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-4">{app.student}</td>
                <td className="p-4">{app.job}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                    {app.status}
                  </span>
                </td>

                <td className="p-4">
                  <input
                    type="number"
                    min="0"
                    value={app.hours}
                    onChange={(e) =>
                      handleHoursChange(app.id, e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}