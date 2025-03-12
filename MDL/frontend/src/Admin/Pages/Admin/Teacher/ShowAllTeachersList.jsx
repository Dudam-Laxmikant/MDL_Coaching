import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEdit, FiTrash2, FiUser, FiSearch, FiArrowLeft } from "react-icons/fi";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
function ShowAllTeachersList() {
  const teachers = [
    { id: "2001", name: "Laxmikant Dudam" },
    { id: "2002", name: "John Doe" },
  ];

  function delet() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The teacher's record has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14">
          <div className="w-full max-w-6xl mx-auto bg-[#454649] p-6">
            <h1 className="text-3xl font-bold text-yellow-200 mb-6 text-center">
              All Teachers List
            </h1>

            {/* Search Fields with Transparent Inputs */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Name Input with Icon */}
              <div className="relative w-full">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400 shadow-md bg-transparent text-white"
                />
              </div>

              {/* Teacher ID Input with Icon */}
              <div className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
                <input
                  type="text"
                  placeholder="Enter Teacher ID"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400 shadow-md bg-transparent text-white"
                />
              </div>
            </form>

            {/* Teachers Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    <th className="p-4 text-left">Teacher ID</th>
                    <th className="p-4 text-left">Teacher's Name</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 hover:bg-[#454655] transition"
                    >
                      <td className="p-4 text-white">{teacher.id}</td>
                      <td className="p-4 text-white">{teacher.name}</td>
                      <td className="p-4 flex flex-wrap justify-center gap-2">
                        {/* Update Button */}
                        <Link to="/showclassTeacher/showallteacherlist/updateteacherdetails">
                          <button className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">
                            <FiEdit size={18} className="text-white" /> Update
                          </button>
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={delet}
                          className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
                        >
                          <FiTrash2 size={18} className="text-white" /> Delete
                        </button>

                        {/* Show Profile Button */}
                        <Link to={`/showclassTeacher/showallteacherlist/showprofile?id=${teacher.id}`}>
                          <button className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition">
                            <FiUser size={18} className="text-white" /> Show Profile
                          </button>
                        </Link>

                        {/* Salary Button */}
                        <Link to={`/showclassTeacher/showallteacherlist/salarydetails?id=${teacher.id}`}>
                          <button className="flex items-center gap-1 px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition">
                            ₹ Salary
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
          </div>
        </div>
        <Link to="/showclassTeacher" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
          <AiOutlineArrowLeft size={24} />
        </Link>

        <Footer />
      </div>
    </>
  );
}

export default ShowAllTeachersList;