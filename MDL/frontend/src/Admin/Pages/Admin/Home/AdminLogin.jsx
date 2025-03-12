import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AdminLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Admin Login Data:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md text-center animate-fade-in"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Admin Login
                </h1>

                {/* Email Input */}
                <div className="relative mb-6">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        
                        className="peer w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
                    />
                    <label
                        htmlFor="email"
                        className={`absolute left-4 px-1 bg-gray-700 text-gray-400 transition-all duration-300 ease-in-out
                            ${formData.email ? "-top-4 text-blue-400 bg-gray-800 scale-90" : "top-2 peer-focus:-top-4 peer-focus:text-blue-400 peer-focus:bg-gray-800 peer-focus:scale-90"} 
                        text-sm`}
                    >
                        Email
                    </label>
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        
                        className="peer w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-10 transition-all duration-300 ease-in-out"
                    />
                    <label
                        htmlFor="password"
                        className={`absolute left-4 px-1 bg-gray-700 text-gray-400 transition-all duration-300 ease-in-out
                            ${formData.password ? "-top-4 text-pink-400 bg-gray-800 scale-90" : "top-2 peer-focus:-top-4 peer-focus:text-pink-400 peer-focus:bg-gray-800 peer-focus:scale-90"} 
                        text-sm`}
                    >
                        Password
                    </label>
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-3 text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right mb-4">
                    <Link
                        to="/forgotpassword"
                        className="text-blue-400 hover:underline text-sm transition-all duration-200 ease-in-out"
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* Login Button */}
                <Link to={"/adminhome"} >
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold"
                    >
                    Login
                </button>
                    </Link>

                {/* Register Link */}
                <p className="text-gray-400 mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/adminregistration"
                        className="text-pink-400 hover:underline font-semibold transition-all duration-200 ease-in-out"
                    >
                        Register Here
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default AdminLogin;