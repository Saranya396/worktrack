import {
  getJobs,
  applyJob,
} from "../../utils/job";
import StudentLayout from "../../layouts/StudentLayout";
import BackButton from "../../components/BackButton";
import { getCurrentUser } from "../../utils/auth";

export default function ViewJobs() {
  const jobs = getJobs();
  const user = getCurrentUser();

  const handleApply = (job) => {
    applyJob({
      job: job.title,
      student: user.name,
    });
    alert("Applied Successfully!");
  };

  return (
    <StudentLayout>
      <BackButton />

      <h2 className="text-xl font-semibold mb-4">
        Available Jobs
      </h2>

      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white p-4 rounded-lg shadow mb-4"
        >
          <h4 className="font-semibold">{job.title}</h4>

          <button
            onClick={() => handleApply(job)}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Apply
          </button>
        </div>
      ))}
    </StudentLayout>
  );
}