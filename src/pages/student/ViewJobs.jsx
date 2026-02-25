import { useEffect, useState } from "react";
import StudentLayout from "./StudentLayout";

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs =
      JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleApply = (job) => {
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first");
      return;
    }

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const alreadyApplied = applications.find(
      (app) =>
        app.jobId === job.id &&
        app.studentEmail === currentUser.email
    );

    if (alreadyApplied) {
      alert("You already applied!");
      return;
    }

    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      studentEmail: currentUser.email,
      studentName: currentUser.fullName,
      status: "Pending",
      appliedDate: new Date().toISOString().split("T")[0],
    };

    applications.push(newApplication);

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    alert("Application Submitted!");
  };

  return (
    <StudentLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Available Jobs
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {job.title}
                </h2>

                <p className="text-gray-600">
                  {job.department}
                </p>

                <p className="font-medium">
                  ${job.pay}/hr
                </p>

                <p className="text-gray-600">
                  {job.timing}
                </p>

                <p className="text-gray-500 mb-4">
                  {job.description}
                </p>

                <button
                  onClick={() => handleApply(job)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p>No jobs available.</p>
          )}
        </div>
      </div>
    </StudentLayout>
  );
}