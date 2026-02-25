import { Briefcase, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    role: "Student",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "fullName") {
      if (value.trim().length < 3)
        errorMsg = "Full name must be at least 3 characters";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value))
        errorMsg = "Enter a valid email address";
    }

    if (name === "password") {
      if (value.length < 6)
        errorMsg = "Password must be at least 6 characters";
    }

    if (name === "age") {
      if (!value) {
        errorMsg = "Age is required";
      } else if (value < 16 || value > 60) {
        errorMsg = "Age must be between 16 and 60";
      }
    }

    if (name === "gender") {
      if (!value)
        errorMsg = "Please select your gender";
    }

    return errorMsg;
  };

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validate(field, formData[field]);
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    // 🔥 Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔥 Check duplicate email
    const emailExists = users.find(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      alert("Email already registered!");
      return;
    }

    // 🔥 Save new user
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful 🎉");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-indigo-600"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Logo */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl text-white">
          <Briefcase size={20} />
        </div>
        <h1 className="text-3xl font-bold text-indigo-600">WorkTrack</h1>
      </div>

      <p className="text-gray-600 mb-8">
        Create your account to get started.
      </p>

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create New Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100"
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">Gender</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 font-medium">I am a:</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={formData.role === "Student"}
                  onChange={handleChange}
                />{" "}
                Student
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  onChange={handleChange}
                />{" "}
                Admin
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-medium">
              Login here
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}