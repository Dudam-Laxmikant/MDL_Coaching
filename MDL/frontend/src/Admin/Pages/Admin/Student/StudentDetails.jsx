import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { FiUser, FiSearch } from "react-icons/fi";

import Header from "../Home/Header";
import Footer from "../Home/Footer";
import axios from "axios";
import Swal from "sweetalert2";

function StudentDetails() {
  const { classId } = useParams();
  const [students, setStudents] = useState([]);



  // const { classId } = useParams();
  // const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [studentIdFilter, setStudentIdFilter] = useState("");
  const [studentNameFilter, setStudentNameFilter] = useState("");


  const filterStudents = () => {
    let filtered = students;
    if (studentIdFilter) {
      filtered = filtered.filter(student => student.s_id.toString().includes(studentIdFilter));
    }
    if (studentNameFilter) {
      filtered = filtered.filter(student => 
        (student.fname + " " + student.mname + " " + student.lname)
          .toLowerCase()
          .includes(studentNameFilter.toLowerCase())
      );
    }
    setFilteredStudents(filtered);
  };



  useEffect(() => {
    filterStudents();
  }, [studentIdFilter, studentNameFilter, students]);




  useEffect(() => {
    getStudents();
    console.log(classId);
  }, [classId]);

  const getStudents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/student/getstudents/${classId}`
      );
      console.log(res.data);
      
      setStudents(res.data?.students || []); // Ensure students is always an array
    } catch (error) {
      console.log(error);
      setStudents([]); // Prevent undefined errors by setting an empty array
    }
  };
  
  function delet(studetId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const url = `http://localhost:8080/student/deletestudent/${studetId}`;

          const response = await axios.get(url);

          Swal.fire({
            title: response.data.message,
            text: "Your file has been deleted.",
            icon: "success",
          });
          getStudents();
        } catch (error) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-[#454649] p-5 sm:p-7 md:p-20 mt-4 min-h-screen">
        <div className="w-full max-w-6xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg text-yellow-50">
          <h1 className="text-3xl font-bold text-gray-200 mb-6">
            Student Details
          </h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* <div className="relative w-full">
              <FiUser
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              />
            </div>
            <div className="relative w-full">
              <FiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Enter Teacher ID"
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              />
            </div> */}
            <div className="relative w-full">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Enter Name"
                value={studentNameFilter}
                onChange={(e) => setStudentNameFilter(e.target.value.replace(/[^a-zA-Z ]/g, ""))}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              />
            </div>
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Enter Student ID"
                value={studentIdFilter}
                onChange={(e) => setStudentIdFilter(e.target.value.replace(/\D/g, ""))}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              />
            </div>
          </form>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 shadow-md rounded-lg">
              <thead className="bg-indigo-600 text-white">
                <tr className="text-center">
                  <th className="p-3 border border-gray-700">Roll No</th>
                  <th className="p-3 border border-gray-700">Student ID</th>
                  <th className="p-3 border border-gray-700">Student Name</th>
                  <th className="p-3 border border-gray-700">
                    Paid Fees / Total Fees
                  </th>
                  <th className="p-3 border border-gray-700">Fee Details</th>
                  <th className="p-3 border border-gray-700">Update</th>
                  <th className="p-3 border border-gray-700">Delete</th>
                  <th className="p-3 border border-gray-700">Show</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr className="hover:bg-gray-700 text-center" key={index}>
                    <td className="p-3 border border-gray-700">{index + 1}</td>
                    <td className="p-3 border border-gray-700">{student.s_id}</td>
                    <td className="p-3 border border-gray-700">
                      {student.fname + " " + student.mname + " " + student.lname}
                    </td>
                    <td className="p-3 border border-gray-700">
                      ₹ 15,000 / ₹ {student.fee}
                    </td>
                    <td className="p-3 border border-gray-700">
                      <Link
                        to={
                          `/addstudents/showstudentdetails/studentdetails/feedetails/${student._id}`
                        }
                        className="text-yellow-500 hover:text-yellow-600 transition"
                      >
                        <MdOutlinePayments className="text-2xl" />
                      </Link>
                    </td>
                    <td className="p-3 border border-gray-700">
                      <Link
                        to={
                          `/addstudents/showstudentdetails/studentdetails/updatestudentdetails/${student._id}`
                        }
                        className="text-blue-500 hover:text-blue-600 transition"
                      >
                        <AiOutlineEdit className="text-2xl" />
                      </Link>
                    </td>
                    <td className="p-3 border border-gray-700">
                      <button
                        onClick={() => delet(student._id)}
                        
                        className="text-red-500 hover:text-red-600 transition"
                      >
                        <AiOutlineDelete className="text-2xl" />
                      </button>
                    </td>
                    <td className="p-3 border border-gray-700">
                      <Link
                        to={
                          `/addstudents/showstudentdetails/studentdetails/displaystudentdetails/${student._id}`
                        }
                        className="text-green-500 hover:text-green-600 transition"
                      >
                        <AiOutlineEye className="text-2xl" />
                      </Link>
                    </td>
                  </tr>
                ))}
             
              </tbody>
              
            </table>
          </div>
        </div>
      </div>

      <Link
        to="/addstudents/showstudentdetails"
        className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
      >
        <AiOutlineArrowLeft size={24} />
      </Link>
      <Footer />
    </div>
  );
}

export default StudentDetails;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   AiOutlineEdit,
//   AiOutlineDelete,
//   AiOutlineEye,
//   AiOutlineArrowLeft,
// } from "react-icons/ai";
// import { MdOutlinePayments } from "react-icons/md";
// import { FiUser, FiSearch } from "react-icons/fi";
// import Header from "../Home/Header";
// import Footer from "../Home/Footer";
// import axios from "axios";
// import Swal from "sweetalert2";

// function StudentDetails() {
  // const { classId } = useParams();
  // const [students, setStudents] = useState([]);
  // const [filteredStudents, setFilteredStudents] = useState([]);
  // const [studentIdFilter, setStudentIdFilter] = useState("");
  // const [studentNameFilter, setStudentNameFilter] = useState("");

//   useEffect(() => {
//     getStudents();
//   }, [classId]);

//   useEffect(() => {
//     filterStudents();
//   }, [studentIdFilter, studentNameFilter, students]);

//   const getStudents = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:8080/student/getstudents/${classId}`
//       );
//       setStudents(res.data?.students || []);
//     } catch (error) {
//       console.error(error);
//       setStudents([]);
//     }
//   };

  // const filterStudents = () => {
  //   let filtered = students;
  //   if (studentIdFilter) {
  //     filtered = filtered.filter(student => student.s_id.toString().includes(studentIdFilter));
  //   }
  //   if (studentNameFilter) {
  //     filtered = filtered.filter(student => 
  //       (student.fname + " " + student.mname + " " + student.lname)
  //         .toLowerCase()
  //         .includes(studentNameFilter.toLowerCase())
  //     );
  //   }
  //   setFilteredStudents(filtered);
  // };

//   const handleDelete = (studentId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.get(`http://localhost:8080/student/deletestudent/${studentId}`);
//           Swal.fire("Deleted!", "Your file has been deleted.", "success");
//           getStudents();
//         } catch (error) {
//           Swal.fire("Error!", "Could not delete the student.", "error");
//         }
//       }
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex-1 bg-[#454649] p-5 sm:p-7 md:p-20 mt-4 min-h-screen">
//         <div className="w-full max-w-6xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg text-yellow-50">
//           <h1 className="text-3xl font-bold text-gray-200 mb-6">Student Details</h1>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            // <div className="relative w-full">
            //   <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            //   <input
            //     type="text"
            //     placeholder="Enter Name"
            //     value={studentNameFilter}
            //     onChange={(e) => setStudentNameFilter(e.target.value.replace(/[^a-zA-Z ]/g, ""))}
            //     className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
            //   />
            // </div>
            // <div className="relative w-full">
            //   <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            //   <input
            //     type="text"
            //     placeholder="Enter Student ID"
            //     value={studentIdFilter}
            //     onChange={(e) => setStudentIdFilter(e.target.value.replace(/\D/g, ""))}
            //     className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
            //   />
            // </div>
//           </form>
//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-700 shadow-md rounded-lg">
//               <thead className="bg-indigo-600 text-white">
//                 <tr className="text-center">
//                   <th className="p-3 border border-gray-700">Roll No</th>
//                   <th className="p-3 border border-gray-700">Student ID</th>
//                   <th className="p-3 border border-gray-700">Student Name</th>
//                   <th className="p-3 border border-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredStudents.map((student, index) => (
//                   <tr className="hover:bg-gray-700 text-center" key={student._id}>
//                     <td className="p-3 border border-gray-700">{index + 1}</td>
//                     <td className="p-3 border border-gray-700">{student.s_id}</td>
//                     <td className="p-3 border border-gray-700">{student.fname + " " + student.mname + " " + student.lname}</td>
//                     <td className="p-3 border border-gray-700">
//                       <button onClick={() => handleDelete(student._id)} className="text-red-500 hover:text-red-600 transition">
//                         <AiOutlineDelete className="text-2xl" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <Link to="/addstudents/showstudentdetails" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
//         <AiOutlineArrowLeft size={24} />
//       </Link>
//       <Footer />
//     </div>
//   );
// }

// export default StudentDetails;