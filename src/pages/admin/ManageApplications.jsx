import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Briefcase, DollarSign, Clock } from "lucide-react";
import AdminLayout from "./AdminLayout";

export default function ManageApplications() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const deleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    // Also remove from student applications
    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const updatedApplications = applications.filter(
      (app) => app.jobId !== id
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  const saveEdit = () => {
    const updatedJobs = jobs.map((job) =>
      job.id === editingJob.id ? editingJob : job
    );

    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    // Update job title in student applications if changed
    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const updatedApplications = applications.map((app) =>
      app.jobId === editingJob.id
        ? { ...app, jobTitle: editingJob.title }
        : app
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setEditingJob(null);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Manage Jobs</h1>
          <p className="text-gray-600">
            View and manage all job postings
          </p>
        </div>

        <button
          onClick={() => navigate("/post-job")}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl"
        >
          + Post New Job
        </button>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-md p-6 relative"
          >
            <div className="flex justify-between items-center">
              {editingJob?.id === job.id ? (
                <input
                  type="text"
                  value={editingJob.title}
                  onChange={(e) =>
                    setEditingJob({
                      ...editingJob,
                      title: e.target.value,
                    })
                  }
                  className="border p-2 rounded"
                />
              ) : (
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">
                    {job.title}
                  </h2>
                  <span className="bg-green-100 text-green-600 px-3 py-1 text-sm rounded-full">
                    Active
                  </span>
                </div>
              )}

              <div className="flex gap-3">
                {editingJob?.id === job.id ? (
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setEditingJob(job)}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <Pencil size={18} />
                  </button>
                )}

                <button
                  onClick={() => deleteJob(job.id)}
                  className="p-2 bg-red-100 rounded-lg hover:bg-red-200 text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-3">
                <Briefcase size={20} />
                <div>
                  <p className="text-sm text-gray-500">
                    Department
                  </p>
                  <p className="font-medium">
                    {job.department}
                  </p>
                </div>
              </div>

              <div className="bg-green-100 rounded-xl p-4 flex items-center gap-3">
                <DollarSign size={20} />
                <div>
                  <p className="text-sm text-gray-500">
                    Pay Rate
                  </p>
                  <p className="font-medium text-green-600">
                    ${job.pay}/hour
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-3">
                <Clock size={20} />
                <div>
                  <p className="text-sm text-gray-500">
                    Work Timing
                  </p>
                  <p className="font-medium text-blue-600">
                    {job.timing}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-gray-700">
              {job.description}
            </p>

            <p className="text-sm text-gray-400 mt-3">
              Posted on {job.date}
            </p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}