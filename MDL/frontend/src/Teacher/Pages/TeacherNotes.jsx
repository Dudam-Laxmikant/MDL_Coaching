import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Swal from "sweetalert2";

const TeacherNotes = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [formData, setFormData] = useState({
        class: "",
        subject: "",
        notes: null,
    });
    console.log(formData.class)
    console.log(formData.subject)
    console.log(formData.notes)
    
  function upload(event) { 
    event.preventDefault();
    Swal.fire({
      title: "Uploaded Successfully",
      icon: "success",
      draggable: true
    });
  }

  function resetForm() {
    setFormData({
      class: "",
      subject: "",
      notes: null,
    });

    document.getElementById("notesForm").reset();
  }

  return (
    <div className="flex flex-col ">
      {/* Header */}
      <Header />

      <div className="flex flex-1 ">
        {/* <Sidebar /> */}

        {/* Main Content */}
        <div className="flex-1 h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 p-10 overflow-auto">
          <div className="flex items-center justify-center">
            <form
              id="notesForm"
              className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-5 transition-transform duration-300 hover:scale-105 border border-white/30"
              onSubmit={upload}
            >
              <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
                📚 Upload Notes
              </h2>

              {/* Class Selection */}
              <label htmlFor="class" className="block font-medium text-black text-lg">
                Class :
              </label>
              <select
                name="class"
                id="class"
                required
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
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
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
              <label htmlFor="notes" className="block font-medium text-black text-lg">
                Notes :
              </label>
              <input
                type="file"
                name="notes"
                id="notes"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) => setFormData({ ...formData, notes: e.target.files[0] })}
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

export default TeacherNotes;
