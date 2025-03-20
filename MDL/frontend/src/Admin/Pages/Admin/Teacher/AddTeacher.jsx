// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaCamera } from "react-icons/fa";
// import { Lock } from "lucide-react";
// import {
//   User,
//   Mail,
//   Calendar,
//   Phone,
//   MapPin,
//   FileText,
//   Book,
//   Heart,
// } from "lucide-react";
// import Footer from "../Home/Footer";
// import Header from "../Home/Header";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";
// import { toast,ToastContainer } from "react-toastify";
// function AddTeacher() {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     t_id: "",
//     s_name: "",
//     name: "",
//     lname: "",
//     gender: "",
//     status: "",
//     email: "",
//     mobilenumber: "",
//     dob: "",
//     qulification: "",
//     course: "",
//     subject: "",
//     password: "",
//     address: "",
//     adharnumber: "",
//     photo: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

  // const submit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const url = "http://localhost:8080/teacher/addteacher";

  //     const response = await axios.post(url,formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //       console.log("this is the response data::: " + response.data);
  //       const { message, success, error } = await response.data;

  //       if (success) {
  //         toast.success(message, {
  //           position: "top-center",
  //           autoClose: 2000,
  //         });
  //         setTimeout(() => {
  //           navigate("/showclassTeacher/showallteacherlist");
  //         }, 1000);
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
  //   } catch (error) {
  //     toast.error(error, {
  //       position: "top-center",
  //       autoClose: 2000,
  //     });
  //   }
  // };

//   function resetForm() {
//     setFormData({
//       t_id: "",
//       s_name: "",
//       name: "",
//       lname: "",
//       gender: "",
//       status: "",
//       email: "",
//       mobilenumber: "",
//       dob: "",
//       qulification: "",
//       course: "",
//       subject: "",
//       password: "",
//       address: "",
//       adharnumber: "",
//       photo: null,
//     });
//   }

//   return (
//     <>
//       <div className="flex flex-col min-h-screen bg-[#454649] text-white">
//         <Header />

//         <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-24">
//           <div className="max-w-5xl mx-auto bg-gray-800 p-10 rounded-lg shadow-md w-full">
//             <h2 className="text-3xl font-semibold mb-6 text-yellow-400 text-center">
//               Add Teacher
//             </h2>

//             <form
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//               onSubmit={submit}
//             >
//               {[
//                 { label: "Teacher ID", name: "t_id", icon: <User /> },
//                 { label: "Surname", name: "s_name", icon: <User /> },
//                 { label: "Name", name: "name", icon: <User /> },
//                 { label: "Last Name", name: "lname", icon: <User /> },
//                 {
//                   label: "Gender",
//                   name: "gender",
//                   icon: <Heart />,
//                   type: "select",
//                   options: ["Male", "Female", "Other"],
//                 },
//                 {
//                   label: "Marital Status",
//                   name: "status",
//                   icon: <Heart />,
//                   type: "select",
//                   options: ["Married", "Unmarried"],
//                 },
//                 {
//                   label: "Email",
//                   name: "email",
//                   type: "email",
//                   icon: <Mail />,
//                 },

//                 {
//                   label: "Mobile Number",
//                   name: "mobilenumber",
//                   type: "number",
//                   icon: <Phone />,
//                 },
//                 {
//                   label: "Date of Birth",
//                   name: "dob",
//                   type: "date",
//                   icon: <Calendar />,
//                 },
//                 {
//                   label: "Qualification",
//                   name: "qulification",
//                   icon: <FileText />,
//                 },
//                 { label: "Course", name: "course", icon: <FileText /> },
//                 {
//                   label: "Subjects",
//                   name: "subject",
//                   icon: <Book />,
//                   type: "select",
//                   options: [
//                     "Mathematics",
//                     "Science",
//                     "English",
//                     "History",
//                     "Geography",
//                   ],
//                 },
//               ].map(({ label, name, type = "text", icon, options }) => (
//                 <div key={name}>
//                   <label className="flex items-center gap-2 mb-2 font-medium">
//                     <span className="w-6 h-6 text-yellow-400">{icon}</span>{" "}
//                     {label}
//                   </label>
//                   {type === "select" ? (
//                     <select
//                       name={name}
//                       className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select {label}</option>
//                       {options.map((option) => (
//                         <option key={option} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   ) : (
//                     <input
//                       type={type}
//                       name={name}
//                       placeholder={`Enter ${label}`}
//                       className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
//                       onChange={handleChange}
//                       required
//                     />
//                   )}
//                 </div>
//               ))}
//               <div className="relative">
//                 <label className="flex items-center gap-2 mb-2 font-medium">
//                   <span className="w-6 h-6 text-yellow-400">
//                     <Lock />
//                   </span>
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter Password"
//                     className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-3 top-3 text-gray-400"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff /> : <Eye />}
//                   </button>
//                 </div>
//               </div>

//               <div className="md:col-span-2">
//                 <label className="flex items-center gap-2 mb-2 font-medium">
//                   <MapPin className="w-6 h-6 text-yellow-400" /> Address
//                 </label>
//                 <textarea
//                   name="address"
//                   placeholder="Enter Address"
//                   className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 mb-2 font-medium">
//                   <FileText className="w-6 h-6 text-yellow-400" /> Aadhar Number
//                 </label>
//                 <input
//                   type="text"
//                   name="adharnumber"
//                   placeholder="Enter Aadhar Number"
//                   className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 mb-2 font-medium">
//                   <FaCamera className="w-6 h-6 text-yellow-400" /> Upload Photo
//                 </label>
//                 <input
//                   type="file"
//                   name="photo"
//                   accept="image/*"
//                   className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-6 mt-8">
//                 <button
//                   type="button"
//                   onClick={submit}
//                   className="px-8 py-3 w-full bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   type="reset"
//                   onClick={resetForm}
//                   className="px-8 py-3 w-full bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
//                 >
//                   Reset
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <Link
//           to="/showclassTeacher/showallteacherlist"
//           className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
//         >
//           <AiOutlineArrowLeft size={24} />
//         </Link>
//         <Footer />
//         <ToastContainer/>
//       </div>
//     </>
//   );
// }

// export default AddTeacher;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { Lock } from "lucide-react";
import {
  User,
  Mail,
  Calendar,
  Phone,
  MapPin,
  FileText,
  Book,
  Heart,
} from "lucide-react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AddTeacher() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    t_id: "",
    s_name: "",
    name: "",
    lname: "",
    gender: "",
    status: "",
    email: "",
    mobilenumber: "",
    dob: "",
    qulification: "",
    course: "",
    subject: "",
    password: "",
    address: "",
    adharnumber: "",
    photo: null,
  });

  // Regular expressions for validation
  const teacherIdRegex = /^T\d{4}$/;
  const nameRegex = /^[A-Za-z]+$/; // Only letters allowed

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Validate Teacher ID format
    if (name === "t_id" && value !== "" && !teacherIdRegex.test(value)) {
      toast.error("Teacher ID must be in the format 'T1234'", {
        position: "top-center",
        autoClose: 2000,
      });
    }

    // Validate Name, Surname, and Last Name (only alphabetic characters)
    if ((name === "s_name" || name === "name" || name === "lname") && value !== "" && !nameRegex.test(value)) {
      toast.error(`${name.replace('_', ' ').toUpperCase()} must contain only letters.`, {
        position: "top-center",
        autoClose: 2000,
      });
    }

    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    // Check if Teacher ID is in the correct format before submitting
    if (!teacherIdRegex.test(formData.t_id)) {
      toast.error("Teacher ID must be in the format 'T1234'", {
        position: "top-center",
        autoClose: 2000,
      });
      return; // Prevent submission if ID is invalid
    }

    // Check if Name, Surname, and Last Name are valid (only alphabetic characters)
    if (!nameRegex.test(formData.s_name) || !nameRegex.test(formData.name) || !nameRegex.test(formData.lname)) {
      toast.error("Surname, Name, and Last Name must contain only letters.", {
        position: "top-center",
        autoClose: 2000,
      });
      return; // Prevent submission if any of these fields are invalid
    }

    try {
      const url = "http://localhost:8080/teacher/addteacher";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("this is the response data::: " + response.data);
      const { message, success, error } = await response.data;

      if (success) {
        toast.success(message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/showclassTeacher/showallteacherlist");
        }, 1000);
      } else if (error) {
        console.log(error);
        const details = error?.details[0].message;
        toast.error(details, {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
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

  function resetForm() {
    setFormData({
      t_id: "",
      s_name: "",
      name: "",
      lname: "",
      gender: "",
      status: "",
      email: "",
      mobilenumber: "",
      dob: "",
      qulification: "",
      course: "",
      subject: "",
      password: "",
      address: "",
      adharnumber: "",
      photo: null,
    });
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#454649] text-white">
        <Header />

        <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-24 min-h-screen">
          <div className="max-w-5xl mx-auto bg-gray-800 p-10 rounded-lg shadow-md w-full">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400 text-center">
              Add Teacher
            </h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={submit}
            >
              {[{ label: "Teacher ID", name: "t_id", icon: <User /> },
                { label: "Surname", name: "s_name", icon: <User /> },
                { label: "Name", name: "name", icon: <User /> },
                { label: "Last Name", name: "lname", icon: <User /> },
                { label: "Gender", name: "gender", icon: <Heart />, type: "select", options: ["Male", "Female", "Other"] },
                { label: "Marital Status", name: "status", icon: <Heart />, type: "select", options: ["Married", "Unmarried"] },
                { label: "Email", name: "email", type: "email", icon: <Mail /> },
                { label: "Mobile Number", name: "mobilenumber", type: "number", icon: <Phone /> },
                { label: "Date of Birth", name: "dob", type: "date", icon: <Calendar /> },
                { label: "Qualification", name: "qulification", icon: <FileText /> },
                { label: "Course", name: "course", icon: <FileText /> },
                { label: "Subjects", name: "subject", icon: <Book />, type: "select", options: ["Mathematics", "Science", "English", "History", "Geography"] }]
                .map(({ label, name, type = "text", icon, options }) => (
                  <div key={name}>
                    <label className="flex items-center gap-2 mb-2 font-medium">
                      <span className="w-6 h-6 text-yellow-400">{icon}</span> {label}
                    </label>
                    {type === "select" ? (
                      <select
                        name={name}
                        className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select {label}</option>
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        name={name}
                        placeholder={`Enter ${label}`}
                        className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                ))}

              {/* Rest of your form */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-6 mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 w-full bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  onClick={resetForm}
                  className="px-8 py-3 w-full bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
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
        <ToastContainer />
      </div>
    </>
  );
}

export default AddTeacher;
