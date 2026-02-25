import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PUBLIC PAGES */
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

/* STUDENT PAGES */
import StudentDashboard from "./pages/student/Dashboard";
import ViewJobs from "./pages/student/ViewJobs";
import AppliedJobs from "./pages/student/AppliedJobs";
import StudentWorkHours from "./pages/student/WorkHours";
import Feedback from "./pages/student/Feedback";

/* ADMIN PAGES */
import AdminDashboard from "./pages/admin/Dashboard";
import PostJob from "./pages/admin/PostJob";
import ManageApplications from "./pages/admin/ManageApplications";
import ApplicationsReview from "./pages/admin/ApplicationsReview";
import AdminWorkHours from "./pages/admin/WorkHours";
import StudentFeedback from "./pages/admin/StudentFeedback";

/* PROTECTED ROUTE */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ========== STUDENT ROUTES ========== */}

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/view-jobs"
          element={
            <ProtectedRoute>
              <ViewJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applied-jobs"
          element={
            <ProtectedRoute>
              <AppliedJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/work-hours"
          element={
            <ProtectedRoute>
              <StudentWorkHours />
            </ProtectedRoute>
          }
        />

        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />

        {/* ========== ADMIN ROUTES ========== */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post-job"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-jobs"
          element={
            <ProtectedRoute>
              <ManageApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications-review"
          element={
            <ProtectedRoute>
              <ApplicationsReview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-work-hours"
          element={
            <ProtectedRoute>
              <AdminWorkHours />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student-feedback"
          element={
            <ProtectedRoute>
              <StudentFeedback />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;