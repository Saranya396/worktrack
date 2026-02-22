import StudentLayout from "../../layouts/StudentLayout";
import ProfileCard from "../../components/ProfileCard";
import { getCurrentUser } from "../../utils/auth";
import BackButton from "../../components/BackButton";



<StudentLayout>
  <BackButton to="/" />
  ...
</StudentLayout>
export default function Dashboard() {
  const user = getCurrentUser();

  return (
    <StudentLayout>
      <ProfileCard user={user} />

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Student Responsibilities</h3>
        <p>✔ View Jobs</p>
        <p>✔ Apply for Jobs</p>
      </div>
    </StudentLayout>
  );
}