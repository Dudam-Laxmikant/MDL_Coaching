
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Swal from "sweetalert2";

const TeacherAssignment = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [AssignmentData, setAssignmentData] = useState({
        class: "",
        subject: "",
        Assignment: null,
    });
    console.log(AssignmentData.class)
    console.log(AssignmentData.subject)
    console.log(AssignmentData.Assignment)
    
  function upload(event) { 
    event.preventDefault();
    Swal.fire({
      title: "Uploaded Successfully",
      icon: "success",
      draggable: true
    });
  }

  function resetForm() {
    setAssignmentData({
      class: "",
      subject: "",
      Assignment: null,
    });

    document.getElementById("AssignmentForm").reset();
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 h-screen bg-gradient-to-r from-indigo-400 via-green-400 to-pink-400 p-10 overflow-auto">
          <div className="flex items-center justify-center">
            <form
              id="AssignmentForm"
              className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-5 transition-transform duration-300 hover:scale-105 border border-white/30"
              onSubmit={upload}
            >
              <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
              📜 Upload Assignment
              </h2>

              {/* Class Selection */}
              <label htmlFor="class" className="block font-medium text-black text-lg">
                Class :
              </label>
              <select
                name="class"
                id="class"
                required
                value={AssignmentData.class}
                onChange={(e) => setAssignmentData({ ...AssignmentData, class: e.target.value })}
                className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 text-gray-900"
              >
                <option value="" disabled>
                  -- Select Class --
                </option>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </select>

              {/* Subject Selection */}
              <label htmlFor="sub" className="block font-medium text-black text-lg">
                Subject :
              </label>
              <select
                name="subject"
                id="sub"
                required
                value={AssignmentData.subject}
                onChange={(e) => setAssignmentData({ ...AssignmentData, subject: e.target.value })}
                className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-200 text-gray-900"
              >
                <option value="" disabled>
                  -- Select Subject --
                </option>
                <option value="science">Science</option>
                <option value="maths">Maths</option>
                <option value="english">English</option>
              </select>

              {/* File Input */}
              <label htmlFor="AssignmentFile" className="block font-medium text-black text-lg">
              Assignment File :
              </label>
              <input
                type="file"
                name="Assignment"
                id="Assignment"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) => setAssignmentData({ ...AssignmentData, Assignment: e.target.files[0] })}
                className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md file:bg-blue-600 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer hover:file:bg-blue-700 transition-all duration-200 text-gray-900"
              />

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center space-x-2"
                >
                  🚀 <span>Upload</span>
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full bg-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300"
                >
                  🔄 Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeacherAssignment;
