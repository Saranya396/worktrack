import AdminLayout from "../../layouts/AdminLayout";
import BackButton from "../../components/BackButton";
import {
  getApplications,
  updateApplicationStatus,
  updateWorkHours,
} from "../../utils/job";
import { useState } from "react";

export default function ManageApplications() {
  const [applications, setApplications] = useState(getApplications());

  const handleStatus = (id, status) => {
    updateApplicationStatus(id, status);
    setApplications(getApplications());
  };

  const handleHours = (id, hours) => {
    updateWorkHours(id, hours);
    setApplications(getApplications());
  };

  return (
    <AdminLayout>
      <BackButton />

      <h2 className="text-xl font-semibold mb-4">
        Manage Applications
      </h2>

      {applications.map((app) => (
        <div
          key={app.id}
          className="bg-white p-4 rounded-lg shadow mb-4"
        >
          <p><b>Student:</b> {app.student}</p>
          <p><b>Job:</b> {app.job}</p>
          <p><b>Status:</b> {app.status}</p>
          <p><b>Hours Worked:</b> {app.hoursWorked}</p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => handleStatus(app.id, "Accepted")}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Accept
            </button>

            <button
              onClick={() => handleStatus(app.id, "Rejected")}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Reject
            </button>
          </div>

          {app.status === "Accepted" && (
            <div className="mt-3">
              <input
                type="number"
                placeholder="Enter Hours"
                className="border p-2 rounded mr-2"
                onBlur={(e) =>
                  handleHours(app.id, e.target.value)
                }
              />
            </div>
          )}
        </div>
      ))}
    </AdminLayout>
  );
}