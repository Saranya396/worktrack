import { Briefcase, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value))
        errorMsg = "Enter a valid email address";
    }

    if (name === "password") {
      if (value.length < 6)
        errorMsg = "Password must be at least 6 characters";
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value)
    });

    setLoginError("");
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

    // 🔥 Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      setLoginError("No registered users found. Please register first.");
      return;
    }

    // 🔥 Find matching user
    const matchedUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!matchedUser) {
      setLoginError("Invalid email or password");
      return;
    }

    // 🔥 Save logged-in user
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));

    // 🔥 Role-based redirect
    if (matchedUser.role === "Admin") {
      navigate("/admin-dashboard");
    } else if (matchedUser.role === "Student") {
      navigate("/student-dashboard");
    } else {
      setLoginError("User role not defined properly.");
    }
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
        Welcome back! Please login to continue.
      </p>

      {/* Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="student@university.edu"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login Error */}
          {loginError && (
            <p className="text-red-500 text-sm">{loginError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 font-medium">
              Register here
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}