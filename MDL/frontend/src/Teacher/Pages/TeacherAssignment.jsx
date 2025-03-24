
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../Footer";
// import Header from "../Header";
// import Sidebar from "../Sidebar";
// import Swal from "sweetalert2";

// const TeacherAssignment = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [AssignmentData, setAssignmentData] = useState({
//         class: "",
//         subject: "",
//         Assignment: null,
//     });
//     console.log(AssignmentData.class)
//     console.log(AssignmentData.subject)
//     console.log(AssignmentData.Assignment)
    
//   function upload(event) { 
//     event.preventDefault();
//     Swal.fire({
//       title: "Uploaded Successfully",
//       icon: "success",
//       draggable: true
//     });
//   }

//   function resetForm() {
//     setAssignmentData({
//       class: "",
//       subject: "",
//       Assignment: null,
//     });

//     document.getElementById("AssignmentForm").reset();
//   }

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <Header />

//       <div className="flex flex-1">
//         <Sidebar />

//         {/* Main Content */}
//         <div className="flex-1 h-screen bg-gradient-to-r from-indigo-400 via-green-400 to-pink-400 p-10 overflow-auto">
//           <div className="flex items-center justify-center">
//             <form
//               id="AssignmentForm"
//               className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-5 transition-transform duration-300 hover:scale-105 border border-white/30"
//               onSubmit={upload}
//             >
//               <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
//               📜 Upload Assignment
//               </h2>

//               {/* Class Selection */}
//               <label htmlFor="class" className="block font-medium text-black text-lg">
//                 Class :
//               </label>
//               <select
//                 name="class"
//                 id="class"
//                 required
//                 value={AssignmentData.class}
//                 onChange={(e) => setAssignmentData({ ...AssignmentData, class: e.target.value })}
//                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 text-gray-900"
//               >
//                 <option value="" disabled>
//                   -- Select Class --
//                 </option>
//                 <option value="first">First</option>
//                 <option value="second">Second</option>
//                 <option value="third">Third</option>
//               </select>

//               {/* Subject Selection */}
//               <label htmlFor="sub" className="block font-medium text-black text-lg">
//                 Subject :
//               </label>
//               <select
//                 name="subject"
//                 id="sub"
//                 required
//                 value={AssignmentData.subject}
//                 onChange={(e) => setAssignmentData({ ...AssignmentData, subject: e.target.value })}
//                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-200 text-gray-900"
//               >
//                 <option value="" disabled>
//                   -- Select Subject --
//                 </option>
//                 <option value="science">Science</option>
//                 <option value="maths">Maths</option>
//                 <option value="english">English</option>
//               </select>

//               {/* File Input */}
//               <label htmlFor="AssignmentFile" className="block font-medium text-black text-lg">
//               Assignment File :
//               </label>
//               <input
//                 type="file"
//                 name="Assignment"
//                 id="Assignment"
//                 accept=".pdf,.doc,.docx"
//                 required
//                 onChange={(e) => setAssignmentData({ ...AssignmentData, Assignment: e.target.files[0] })}
//                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md file:bg-blue-600 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer hover:file:bg-blue-700 transition-all duration-200 text-gray-900"
//               />

//               {/* Buttons */}
//               <div className="flex space-x-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center space-x-2"
//                 >
//                   🚀 <span>Upload</span>
//                 </button>

//                 <button
//                   type="button"
//                   onClick={resetForm}
//                   className="w-full bg-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300"
//                 >
//                   🔄 Reset
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default TeacherAssignment;
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";

const TeacherAssignment = () => {
  const [formData, setFormData] = useState({
    classname: "",
    subject: "",
    notesfille: "",
  });

  function resetForm() {
    setFormData({
      classname: "",
      subject: "",
      notesfille: "",
    });

    document.getElementById("notesForm").reset();
  }

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("classname", formData.classname);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("notesfille", formData.notesfille);

    try {
      const url = "http://localhost:8080/notes";

      const response = await axios.post(url, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      const { message, success, error } = response.data;

      if (success) {
        toast.success(message, {
          position: "top-center",
          autoClose: 2000,
        });

        resetForm();
      } else {
        toast.error(error || message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload file", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const confirmUpload = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to upload these notes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Upload Notes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit();
        Swal.fire("Uploaded!", "Your notes have been uploaded.", "success");
      }
    });
  };

  const handleFileChange = (e) => {
    const { name, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="flex-1 h-screen bg-gradient-to-r from-indigo-400 via-green-400 to-pink-400 p-10 overflow-auto">
          <div className="flex items-center justify-center">
            <form
              id="notesForm"
              className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-5 transition-transform duration-300 hover:scale-105 border border-white/30"
              onSubmit={confirmUpload}
            >
              <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
              📜 Upload Assignment
              </h2>

              {/* Class Selection */}
              <label htmlFor="class" className="block font-medium text-black text-lg">
                Class :
              </label>
              <select
                name="classname"
                id="class"
                required
                value={formData.classname}
                onChange={(e) => setFormData({ ...formData, classname: e.target.value })}
                className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 text-gray-900"
              >
                <option value="" disabled>-- Select Class --</option>
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
                <option value="" disabled>-- Select Subject --</option>
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
                name="notesfille"
                id="notes"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md file:bg-blue-600 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer hover:file:bg-blue-700 transition-all duration-200 text-gray-900"
                required
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
      <Footer />
    </div>
  );
};

export default TeacherAssignment;
