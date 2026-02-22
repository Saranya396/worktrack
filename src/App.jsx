import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/admin/Dashboard";
import PostJob from "./pages/admin/PostJob";
import ManageApplications from "./pages/admin/ManageApplications";

import StudentDashboard from "./pages/student/Dashboard";
import ViewJobs from "./pages/student/ViewJobs";
import AppliedJobs from "./pages/student/AppliedJobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/post-job" element={<PostJob />} />
        <Route path="/admin/manage-applications" element={<ManageApplications />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/view-jobs" element={<ViewJobs />} />
        <Route path="/student/applied-jobs" element={<AppliedJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;