import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCity,
  FaFlag,
  FaMoneyBillWave,
  FaIdCard,
  FaCalendarAlt,
  FaPlus,
  FaHome,
  FaChalkboardTeacher,
  FaEnvelope,
  FaVenusMars,
  
} from "react-icons/fa";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Swal from "sweetalert2";
import { AiOutlineArrowLeft } from "react-icons/ai";

function StudentForm() {
  const [formData, setFormData] = useState({
    studentId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    fathersName: "",
    dob: "",
    aadharNumber: "",
    address: "",
    city: "",
    country: "",
    feeAmount: "",
    studentClass: "",
    aadharPhoto: null,
    passportPhoto: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "Student added successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleReset = () => {
    setFormData({
      studentId: "",
      firstName: "",
      middleName: "",
      lastName: "",
      fathersName: "",
      dob: "",
      aadharNumber: "",
      address: "",
      city: "",
      country: "",
      feeAmount: "",
      studentClass: "",
      aadharPhoto: null,
      passportPhoto: null,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#454649] text-white">
      <Header />
      <div className="flex flex-1 p-6">
        <div className="flex-1 bg-gray-800 p-10 mt-20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center py-4 rounded-lg bg-gray-700">
            Student Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                label: "Student ID",
                name: "studentId",
                icon: <FaIdCard />,
                type: "number",
                placeholder: "Enter Student ID",
              },
              {
                label: "First Name",
                name: "firstName",
                icon: <FaUser />,
                type: "text",
                placeholder: "Enter First Name",
              },
              {
                label: "Middle Name",
                name: "middleName",
                icon: <FaUser />,
                type: "text",
                placeholder: "Enter Middle Name",
              },
              {
                label: "Last Name",
                name: "lastName",
                icon: <FaUser />,
                type: "text",
                placeholder: "Enter Last Name",
              },
              {
                label: "Email",
                name: "email",
                icon: <FaEnvelope />, 
                type: "email",
                placeholder: "Enter Email",
              },
              {
                label: "Date of Birth",
                name: "dob",
                icon: <FaCalendarAlt />,
                type: "date",
                placeholder: "Select Date of Birth",
              },
              {
                label: "Aadhar Number",
                name: "aadharNumber",
                icon: <FaIdCard />,
                type: "number",
                placeholder: "Enter Aadhar Number",
              },
              {
                label: "City",
                name: "city",
                icon: <FaCity />,
                type: "text",
                placeholder: "Enter City",
              },
              {
                label: "Country",
                name: "country",
                icon: <FaFlag />,
                type: "text",
                placeholder: "Enter Country",
              },
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1">
                  {field.label}
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400">
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full pl-12 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>
              </div>
            ))}
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-300 font-medium mb-1">Address</label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-gray-400">
                  <FaHome />
                </span>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Address"
                  className="w-full pl-12 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                  rows="3"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-300 font-medium mb-1">
                  Fee Amount
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400">
                    <FaMoneyBillWave />
                  </span>
                  <input
                    type="text"
                    name="feeAmount"
                    value={formData.feeAmount}
                    onChange={handleChange}
                    placeholder="Enter Fee Amount"
                    className="w-full pl-12 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="text-gray-300 font-medium mb-1">Class</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400">
                    <FaChalkboardTeacher />
                  </span>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    className="w-full pl-12 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
                            <label className="text-gray-300 font-medium mb-1">Gender</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 text-gray-400"><FaVenusMars /></span>
                                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full pl-12 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition" required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
            <div className="flex flex-col">
              <label className="text-gray-300 font-medium mb-1">
                Aadhar Photo
              </label>
              <input
                type="file"
                name="aadharPhoto"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none file:cursor-pointer hover:file:bg-blue-600 transition"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 font-medium mb-1">
                Pass Photo
              </label>

              <input
                type="file"
                name="passportPhoto"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none file:cursor-pointer hover:file:bg-blue-600 transition"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-700 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <button className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2">
        <FaPlus className="w-5 h-5" />
        Add Student
      </button>
      <Link
        to="/addstudents"
        className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
      >
        <AiOutlineArrowLeft size={24} />
      </Link>
      <Footer />
    </div>
  );
}

export default StudentForm;
