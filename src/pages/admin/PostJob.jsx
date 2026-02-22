import { useState } from "react";
import { addJob } from "../../utils/job";
import AdminLayout from "../../layouts/AdminLayout";
import BackButton from "../../components/BackButton";

export default function PostJob() {
  const [title, setTitle] = useState("");

  const handlePost = () => {
    if (!title) return alert("Enter job title");

    addJob({ title });
    alert("Job Posted!");
    setTitle("");
  };

  return (
    <AdminLayout>
      <BackButton />

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Post Job</h3>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Job Title"
        />

        <button
          onClick={handlePost}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          Post
        </button>
      </div>
    </AdminLayout>
  );
}