import React from 'react';
import { Link } from 'react-router-dom';

const TeacherLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:shadow-xl">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">Login</h2>
        <p className="text-center text-gray-600 mb-6">Welcome back! Please sign in.</p>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-lg"
            />
          </div>
          <Link
            to="/teacherDashboard"
            className="block w-full text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            Sign In
          </Link>
        </form>
        <p className="text-sm text-center text-gray-700 mt-4">
          Don't have an account?{' '}
          <Link to="/teacherRegistration" className="text-pink-500 font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default TeacherLogin;
