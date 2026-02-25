import StudentLayout from "./StudentLayout";
import { Star, Briefcase, CalendarDays } from "lucide-react";

export default function Feedback() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return null;

  // 🔥 Dummy Feedback Data (Later connect with Admin)
  const feedbackData = [
    {
      jobTitle: "Library Assistant",
      supervisor: "Dr. Patricia Moore",
      date: "Feb 22, 2026",
      rating: 5,
      comment:
        "Exceptional work ethic and attention to detail. Always punctual and willing to help.",
    },
    {
      jobTitle: "IT Support Technician",
      supervisor: "Mark Stevens",
      date: "Feb 18, 2026",
      rating: 4,
      comment:
        "Strong technical skills and quick problem solving. Can improve communication slightly.",
    },
    {
      jobTitle: "Lab Research Assistant",
      supervisor: "Dr. Allen Brooks",
      date: "Feb 15, 2026",
      rating: 5,
      comment:
        "Excellent analytical skills and highly dependable team member.",
    },
  ];

  const totalReviews = feedbackData.length;

  const averageRating =
    feedbackData.reduce((sum, item) => sum + item.rating, 0) /
    totalReviews;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={18}
        className={
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold text-gray-800">
        Performance Feedback
      </h1>

      <p className="text-gray-600 mt-2 mb-8">
        View feedback from your supervisors
      </p>

      {/* TOP SUMMARY CARD */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Overall Performance
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex">
              {renderStars(Math.round(averageRating))}
            </div>

            <span className="text-xl font-bold">
              {averageRating.toFixed(1)}
            </span>

            <span className="text-gray-500">
              out of 5
            </span>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-3xl font-bold text-indigo-600">
            {totalReviews}
          </h2>
          <p className="text-gray-500">Total Reviews</p>
        </div>
      </div>

      {/* FEEDBACK LIST */}
      <div className="space-y-8">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <div className="flex justify-between items-start mb-4">

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={18} className="text-indigo-500" />
                  <h3 className="font-semibold text-lg">
                    {item.jobTitle}
                  </h3>
                </div>

                <p className="text-gray-500">
                  Supervisor: {item.supervisor}
                </p>

                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <CalendarDays size={14} />
                  {item.date}
                </div>
              </div>

              <div className="flex">
                {renderStars(item.rating)}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl text-gray-700">
              {item.comment}
            </div>
          </div>
        ))}
      </div>

    </StudentLayout>
  );
}