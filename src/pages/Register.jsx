import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";
import BackButton from "../components/BackButton";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    role: "student", // default role
  });

  const [errors, setErrors] = useState({});

  // Field Validation
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 3) return "Minimum 3 characters required";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "Only letters and spaces allowed";
        return "";

      case "email":
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value))
          return "Invalid email format";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Minimum 8 characters required";
        if (!/[A-Z]/.test(value))
          return "Must contain 1 uppercase letter";
        if (!/[a-z]/.test(value))
          return "Must contain 1 lowercase letter";
        if (!/[0-9]/.test(value))
          return "Must contain 1 number";
        if (!/[!@#$%^&*]/.test(value))
          return "Must contain 1 special character";
        return "";

      case "age":
        if (!value) return "Age is required";
        if (isNaN(value)) return "Age must be a number";
        if (value < 16 || value > 60)
          return "Age must be between 16 and 60";
        return "";

      case "gender":
        if (!value) return "Please select gender";
        return "";

      case "role":
        if (!value) return "Role must be selected";
        return "";

      default:
        return "";
    }
  };

  // On typing
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // On Submit
  const handleSubmit = () => {
    let newErrors = {};

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const result = registerUser(form);

    if (!result.success) {
      setErrors({ email: result.message });
      return;
    }

    alert("Registration Successful!");
    navigate("/login");
  };

  const inputStyle = (field) =>
    `w-full mb-1 p-3 border rounded-lg ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <BackButton to="/" />

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className={inputStyle("name")}
        />
        <p className="text-red-500 text-sm mb-2">{errors.name}</p>

        {/* Email */}
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={inputStyle("email")}
        />
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>

        {/* Password */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className={inputStyle("password")}
        />
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>

        {/* Age */}
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className={inputStyle("age")}
        />
        <p className="text-red-500 text-sm mb-2">{errors.age}</p>

        {/* Gender */}
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className={inputStyle("gender")}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className="text-red-500 text-sm mb-2">{errors.gender}</p>

        {/* Role */}
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className={inputStyle("role")}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <p className="text-red-500 text-sm mb-3">{errors.role}</p>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}