import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import BackButton from "../components/BackButton";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value))
          return "Invalid email format";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 8)
          return "Minimum 8 characters required";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleLogin = () => {
    let newErrors = {};

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const user = loginUser(form.email, form.password);

    if (!user) {
      setErrors({ password: "Invalid credentials" });
      return;
    }

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  const inputStyle = (field) =>
    `w-full mb-1 p-3 border rounded-lg ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <BackButton to="/" />

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className={inputStyle("email")}
        />
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className={inputStyle("password")}
        />
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 mt-3"
        >
          Login
        </button>
      </div>
    </div>
  );
}