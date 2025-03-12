import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaIdBadge } from "react-icons/fa";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    studentID: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const phoneRegex = /^\d{10}$/;

    if (!formData.studentID) formErrors.studentID = "Student ID is required.";
    if (!formData.username) formErrors.username = "Username is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Please enter a valid email address.";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      formErrors.phone = "Phone number must be 10 digits.";
    if (!formData.password || formData.password.length < 6)
      formErrors.password = "Password must be at least 6 characters.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md"
      >
        <motion.h2 
          className="text-3xl font-extrabold text-center text-gray-800 mb-4 hover:text-purple-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Create Account
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[ 
            { label: "Student ID", name: "studentID", icon: <FaIdBadge /> },
            { label: "Username", name: "username", icon: <FaUser /> },
            { label: "Email", name: "email", icon: <FaEnvelope />, type: "email" },
            { label: "Phone", name: "phone", icon: <FaPhone />, type: "tel" },
            { label: "Password", name: "password", icon: <FaLock />, type: "password" }
          ].map(({ label, name, icon, type = "text" }) => (
            <div key={name} className="relative">
              <label className="block text-gray-700 font-semibold mb-1">{label}</label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-2 focus-within:ring-4 focus-within:ring-purple-400 transition">
                <span className="text-gray-500 mr-2">{icon}</span>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label}`}
                  className="w-full bg-transparent outline-none"
                />
              </div>
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition shadow-md"
          >
            Register
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-3">
          Already have an account?{' '}
          <Link to="/studentLogin" className="text-purple-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default StudentRegistration;
