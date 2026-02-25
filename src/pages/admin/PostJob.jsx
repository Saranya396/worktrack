import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function PostJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    pay: "",
    timing: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = "This field is required";
    }

    if (name === "pay") {
      if (!value || isNaN(value) || value <= 0) {
        error = "Enter valid pay amount";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validate(field, formData[field]);
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    const newJob = {
      id: Date.now(),
      ...formData
    };

    const jobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.push(newJob);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    alert("Job Posted Successfully 🎉");

    navigate("/manage-jobs");
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-2">
        Post New Job
      </h1>

      <p className="text-gray-600 mb-8">
        Create a new part-time job opportunity
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Job Title */}
          <div>
            <label className="block mb-1 font-medium">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">
                {errors.title}
              </p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 font-medium">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100"
            />
          </div>

          {/* Pay & Timing */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">
                Pay Per Hour ($)
              </label>
              <input
                type="number"
                name="pay"
                value={formData.pay}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Work Timing
              </label>
              <input
                type="text"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-100"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">
              Job Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 h-32"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl"
          >
            Post Job
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}