import StudentLayout from "../../layouts/StudentLayout";
import BackButton from "../../components/BackButton";
import { getApplications } from "../../utils/job";
import { getCurrentUser } from "../../utils/auth";

export default function AppliedJobs() {
  const user = getCurrentUser();
  const applications = getApplications().filter(
    (app) => app.student === user.name
  );
  

  return (
    <StudentLayout>
      <BackButton />

      <h2 className="text-xl font-semibold mb-4">
        My Applications
      </h2>

      {applications.length === 0 && (
        <p>No applications yet.</p>
      )}

      {applications.map((app) => (
        <div
          key={app.id}
          className="bg-white p-4 rounded-lg shadow mb-4"
        >
          <p><b>Job:</b> {app.job}</p>
          <p><b>Status:</b> {app.status}</p>
          <p><b>Hours Worked:</b> {app.hoursWorked}</p>
        </div>
      ))}
    </StudentLayout>
  );
}