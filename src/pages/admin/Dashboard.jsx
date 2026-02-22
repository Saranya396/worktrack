import AdminLayout from "../../layouts/AdminLayout";
import ProfileCard from "../../components/ProfileCard";
import { getCurrentUser } from "../../utils/auth";
import BackButton from "../../components/BackButton";


<AdminLayout>
  <BackButton to="/" />
  ...
</AdminLayout>
export default function Dashboard() {
  const user = getCurrentUser();

  return (
    <AdminLayout>
      <ProfileCard user={user} />

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Admin Responsibilities</h3>
        <p>✔ Post Jobs</p>
        <p>✔ Manage Applications (Coming Next)</p>
      </div>
    </AdminLayout>
  );
}