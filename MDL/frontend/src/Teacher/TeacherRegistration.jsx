import React from 'react';
import { Link } from 'react-router-dom';

const TeacherRegistration = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">Register</h2>
        <p className="text-center text-gray-600 mb-6">Create an account to get started.</p>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-lg"
            />
          </div>
          <Link
            to="/login"
            className="block w-full text-center bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold py-2 rounded-lg shadow-md hover:from-yellow-600 hover:to-red-600 transition duration-500 hover:shadow-xl"
          >
            Sign Up
          </Link>
        </form>
        <p className="text-sm text-center text-gray-700 mt-4">
          Already have an account?{' '}
          <Link to="/teacherLogin" className="text-yellow-500 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TeacherRegistration;