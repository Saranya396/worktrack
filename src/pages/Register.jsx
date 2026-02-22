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
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.age ||
      !form.gender
    ) {
      alert("Please fill all fields");
      return;
    }

    const result = registerUser(form);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        
        <BackButton to="/" />

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <input name="name" onChange={handleChange} placeholder="Name" className="w-full mb-3 p-3 border rounded-lg" />
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full mb-3 p-3 border rounded-lg" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full mb-3 p-3 border rounded-lg" />
        <input name="age" type="number" onChange={handleChange} placeholder="Age" className="w-full mb-3 p-3 border rounded-lg" />

        <select name="gender" onChange={handleChange} className="w-full mb-3 p-3 border rounded-lg">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select name="role" onChange={handleChange} className="w-full mb-6 p-3 border rounded-lg">
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}