let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let applications = JSON.parse(localStorage.getItem("applications")) || [];
let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
let hours = JSON.parse(localStorage.getItem("hours")) || [];

export const getJobs = () => jobs;

export const addJob = (job) => {
  jobs.push({ id: Date.now(), ...job });
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

export const deleteJob = (id) => {
  jobs = jobs.filter((j) => j.id !== id);
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

export const applyJob = (data) => {
  applications.push({ id: Date.now(), status: "Pending", ...data });
  localStorage.setItem("applications", JSON.stringify(applications));
};

export const getApplications = () => applications;

export const updateApplicationStatus = (id, status) => {
  applications = applications.map((a) =>
    a.id === id ? { ...a, status } : a
  );
  localStorage.setItem("applications", JSON.stringify(applications));
};

export const addWorkHours = (data) => {
  hours.push({ id: Date.now(), ...data });
  localStorage.setItem("hours", JSON.stringify(hours));
};

export const getWorkHours = () => hours;

export const addFeedback = (data) => {
  feedbacks.push({ id: Date.now(), ...data });
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
};

export const getFeedback = () => feedbacks;