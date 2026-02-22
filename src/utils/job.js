export const addJob = (job) => {
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const newJob = { id: Date.now(), ...job };
  jobs.push(newJob);
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

export const getJobs = () => {
  return JSON.parse(localStorage.getItem("jobs")) || [];
};

export const applyJob = (application) => {
  const apps = JSON.parse(localStorage.getItem("applications")) || [];

  const newApplication = {
    id: Date.now(),
    ...application,
    status: "Pending",
    hoursWorked: 0,
  };

  apps.push(newApplication);
  localStorage.setItem("applications", JSON.stringify(apps));
};

export const getApplications = () => {
  return JSON.parse(localStorage.getItem("applications")) || [];
};

export const updateApplicationStatus = (id, status) => {
  const apps = getApplications();
  const updated = apps.map((app) =>
    app.id === id ? { ...app, status } : app
  );
  localStorage.setItem("applications", JSON.stringify(updated));
};

export const updateWorkHours = (id, hours) => {
  const apps = getApplications();
  const updated = apps.map((app) =>
    app.id === id ? { ...app, hoursWorked: hours } : app
  );
  localStorage.setItem("applications", JSON.stringify(updated));
};