import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiHash,
  FiBook,
  FiCreditCard,
  FiHome,
  FiCamera,
  FiAward,
} from "react-icons/fi";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

function UpdateTeacherDetails() {
  const initialFormState = {
    surname: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    aadhaarNumber: "",
    dob: "",
    Qulification:"",
    course: "",
    address: "",
    subject: "",
    photo: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  function update() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#2563eb",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "", "success");
      }
    });
  }

  function resetForm() {
    setFormData(initialFormState);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFileChange(e) {
    setFormData({ ...formData, photo: e.target.files[0] });
  }

  const icons = {
    surname: (
      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    middleName: (
      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    lastName: (
      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    email: (
      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    mobileNumber: (
      <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    aadhaarNumber: (
      <FiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    dob: (
      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    Qulification: (
      <FiAward className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
     
    course: (
      <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    ),
    
    address: <FiHome className="absolute left-3 top-3 text-gray-400" />,
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r bg-[#454649]">
        <Header />
        <div className="flex flex-1 p-6 sm:p-10 bg-[#454649] ">
          <div className="w-full max-w-4xl mx-auto mt-12 bg-transparent p-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
              Update Teacher Details
            </h1>
            <form className="space-y-6">
              <div className="flex items-center space-x-2 px-4 py-3 rounded-lg">
                <FiHash className="text-gray-400" size={20} />
                <span className="text-lg font-semibold text-gray-100">
                  Teacher ID: 2004
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(initialFormState)
                  .filter(
                    (key) =>
                      key !== "subject" && key !== "photo" && key !== "address"
                  )
                  .map((key, index) => (
                    <div key={index} className="relative">
                      {icons[key]}
                      <input
                        type={
                          key === "email"
                            ? "email"
                            : key === "dob"
                            ? "date"
                            : "text"
                        }
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        className="w-full pl-12 p-3 border-2 border-gray-500 rounded-lg bg-[#454649] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                      />
                    </div>
                  ))}

                <div className="relative col-span-2">
                  {icons.address}
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full pl-12 p-3 border-2 border-gray-500 rounded-lg bg-[#454649] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                    rows="3"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-6 col-span-2">
                  <div className="relative col-span-1">
                    <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 p-3 border-2 border-gray-500 rounded-lg bg-[#454649] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                    >
                      <option value="">Select Subject</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>

                  <div className="relative col-span-1">
                    <FiCamera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      className="w-full pl-12 p-3 border-2 border-gray-500 rounded-lg bg-[#454649] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={update}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <Link
          to="/showclassTeacher/showallteacherlist"
          className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
        >
          <AiOutlineArrowLeft size={24} />
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default UpdateTeacherDetails;
