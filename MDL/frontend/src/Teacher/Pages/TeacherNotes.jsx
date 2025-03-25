// import { useState } from "react";
// import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
// import Sidebar from "../Sidebar";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { toast } from "react-toastify";

// const TeacherNotes = () => {
//   const [formData, setFormData] = useState({
//     classname: "",
//     subject: "",
//     notesfille: "",
//   });

//   function resetForm() {
//     setFormData({
//       classname: "",
//       subject: "",
//       notesfile: "",
//     });

//     document.getElementById("notesForm").reset();
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append("classname", formData.classname);
//     formDataToSend.append("subject", formData.subject);
//     formDataToSend.append("notesfille", formData.notesfille); // Use correct field name

//     try {
//       const url = "http://localhost:8080/notes/sendnotes";

//       const response = await axios.post(url, formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log(response);
//       // console.log("this is the response data::: " + response.data);
//       const { message, success, error } = await response.data;

//       if (success) {
//         toast.success(message, {
//           position: "top-center",
//           autoClose: 2000,
//         });

//         // setTimeout(() => {
//         //   navigate("/addstudents");
//         // }, 1000);
//         resetForm();
//       } else if (error) {
//         console.log(error);
//         const details = error?.details[0].message;
//         toast.error(details, {
//           position: "top-center",
//           autoClose: 2000,
//         });
//       } else {
//         toast.error(message, {
//           position: "top-center",
//           autoClose: 2000,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to upload file", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };
//   return (
//     <div className="flex flex-col ">
//       {/* Header */}
//       <Header />

//       <div className="flex flex-1 ">
//         {/* <Sidebar /> */}

//         {/* Main Content */}
//         <div className="flex-1 h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 p-10 overflow-auto">
//           <div className="flex items-center justify-center">
//             <form
//               id="notesForm"
//               className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-5 transition-transform duration-300 hover:scale-105 border border-white/30"
//               onSubmit={handleSubmit}
//             >
//               <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
//                 📚 Upload Notes
//               </h2>

//               {/* Class Selection */}
//               <label
//                 htmlFor="class"
//                 className="block font-medium text-black text-lg"
//               >
//                 Class :
//               </label>
//               <select
//                 name="classname"
//                 id="class"
//                 required
//                 value={formData.classname}
//                 onChange={(e) =>
//                   setFormData({ ...formData, classname: e.target.value })
//                 }
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
//               <label
//                 htmlFor="sub"
//                 className="block font-medium text-black text-lg"
//               >
//                 Subject :
//               </label>
//               <select
//                 name="subject"
//                 id="sub"
//                 required
//                 value={formData.subject}
//                 onChange={(e) =>
//                   setFormData({ ...formData, subject: e.target.value })
//                 }
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
//               <label
//                 htmlFor="notes"
//                 className="block font-medium text-black text-lg"
//               >
//                 Notes :
//               </label>

//               <input
//                 type="file"
//                 name="notesfille" // ✅ Now it matches the backend
//                 id="notes"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md file:bg-blue-600 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer hover:file:bg-blue-700 transition-all duration-200 text-gray-900"
//                 required
//               />
//               {/* <input
//                 type="file"
//                 name="notesfile"
//                 id="notes"
//                 accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif"
//                 onChange={handleFileChange}
//                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md file:bg-blue-600 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer hover:file:bg-blue-700 transition-all duration-200 text-gray-900"
//                 required
//               /> */}

//               {/* Buttons */}
//               <div className="flex space-x-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center space-x-2"
//                   // onClick={handleSubmit}
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

// export default TeacherNotes;
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";

const TeacherNotes = () => {
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
  const getsubject = async () => {
    try {
      const res = await axios.get("http://localhost:8080/subject/getsubjects");
      console.log(res.data);
      setSubjects(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    if (formDataToSend.classname === "") {
      toast.error("Please select a class", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    if (formDataToSend.subject === "") {
      toast.error("Please select a subject", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    formDataToSend.append("classname", formData.classname);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("subject_Id", formData.subject_Id);
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
  
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const getclasses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/class/getclasses");
      console.log(res.data);
      setClasses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getclasses();
    getsubject();
  }, []);
  const handleClassChange = (event) => {
    const selectedValue = JSON.parse(event.target.value);
    setFormData({
      ...formData,
      classname: selectedValue.name,
      s_classId: selectedValue.id,
    });
  };

  const handleFileChange = (e) => {
    const { name, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : e.target.value,
    });
  };
  const handlesubjectChange = (event) => {
    const selectedValue = JSON.parse(event.target.value);
    setFormData({
      ...formData,
      subject: selectedValue.name,
      subject_Id: selectedValue.id,
    });
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="flex-1 h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 p-10 overflow-auto">
          <div className="flex items-center justify-center">
            <form
              id="notesForm"
              className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-5 transition-transform duration-300 hover:scale-105 border border-white/30"
              onSubmit={confirmUpload}
            >
              <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
                📚 Upload Notes
              </h2>

              {/* Class Selection */}
              <label htmlFor="class" className="block font-medium text-black text-lg">
                Class :
              </label>
              <select
                name="classname"
                onChange={handleClassChange}
                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-200 text-gray-900"
                required
              >
                <option value="">-- Select Class --</option>
                {classes.map((cls, index) => (
                  <option
                    value={JSON.stringify({
                      id: cls._id,
                      name: cls.classname,
                    })}
                    key={index}
                  >
                    {cls.classname}
                  </option>
                ))}
              </select>

              {/* Subject Selection */}
              <label htmlFor="sub" className="block font-medium text-black text-lg">
                Subject :
              </label>
              <select
                name="subject"
                onChange={handlesubjectChange}
                 className="w-full p-3 border border-white/30 rounded-lg bg-white/30 backdrop-blur-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-200 text-gray-900"
                required
              >
                <option value="">-- Select Class --</option>
                {subjects.map((sub, index) => (
                  <option
                    value={JSON.stringify({
                      id: sub._id,
                      name: sub.subjectName,
                    })}
                    key={index}
                  >
                    {sub.subjectName}
                  </option>
                ))}
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

export default TeacherNotes;
