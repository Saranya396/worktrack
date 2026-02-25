import { useState } from "react";
import AdminLayout from "./AdminLayout";

export default function StudentFeedback() {
  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      student: "Saranya",
      job: "Library Assistant",
      hours: 12,
      rating: "",
      comment: "",
    },
    {
      id: 2,
      student: "Rahul",
      job: "Lab Helper",
      hours: 8,
      rating: "",
      comment: "",
    },
  ]);

  const handleChange = (id, field, value) => {
    const updated = feedbackData.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setFeedbackData(updated);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-2">
        Student Feedback
      </h1>
      <p className="text-gray-600 mb-8">
        Provide ratings and comments for students
      </p>

      <div className="space-y-6">
        {feedbackData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-2">
              {item.student}
            </h2>
            <p className="text-gray-600 mb-1">
              Job: {item.job}
            </p>
            <p className="text-gray-600 mb-4">
              Hours Worked: {item.hours}
            </p>

            {/* Rating */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Rating:
              </label>
              <select
                value={item.rating}
                onChange={(e) =>
                  handleChange(item.id, "rating", e.target.value)
                }
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select Rating</option>
                <option value="1">⭐ 1</option>
                <option value="2">⭐⭐ 2</option>
                <option value="3">⭐⭐⭐ 3</option>
                <option value="4">⭐⭐⭐⭐ 4</option>
                <option value="5">⭐⭐⭐⭐⭐ 5</option>
              </select>
            </div>

            {/* Comment */}
            <div>
              <label className="block mb-2 font-medium">
                Comment:
              </label>
              <textarea
                value={item.comment}
                onChange={(e) =>
                  handleChange(item.id, "comment", e.target.value)
                }
                placeholder="Enter feedback..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}