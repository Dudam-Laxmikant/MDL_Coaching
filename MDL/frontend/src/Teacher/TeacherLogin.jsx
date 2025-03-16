import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

const TeacherLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    t_id: '', 
    email: '', 
    password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { t_id,email, password } = formData;

    try {
      const url = "http://localhost:8080/teacher/login";
      const response = await fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      const { message, success, jwttoken,name, email, _id, error } = result;
      // console.log("The logged user data :: " + result);
      console.log(formData);
      if (success) {
        toast.success(message, {
          position: "top-center",
          autoClose: 2000,
        });
        localStorage.setItem("email", result.email);
        localStorage.setItem("token", jwttoken);
        localStorage.setItem("name", name);
        localStorage.setItem("t_id", _id);
        setTimeout(() => {
          navigate("/teacherDashboard");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        toast.error(details, {
          position: "top-center",
          autoClose: 2000,
        });
      } else if (!success) {
        toast.error(message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:shadow-xl">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">Login</h2>
        <p className="text-center text-gray-600 mb-6">Welcome back! Please sign in.</p>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Teacher ID</label>
            <input
              type="text"
              name="t_id"
              placeholder="Enter your Teacher ID"
              value={formData.teacherID}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-lg"
            />
          </div>
          
          <button type="button" onClick={handleSubmit} className="block w-full text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition duration-300">
          {/* <Link to="/teacherDashboard"> */}
            Sign In
          {/* </Link> */}
          </button>
        </form>
        <p className="text-sm text-center text-gray-700 mt-4">
          Don't have an account?{' '}
          <Link to="" className="text-pink-500 font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TeacherLogin;
