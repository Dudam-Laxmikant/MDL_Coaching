
// // import React, { useEffect, useState } from 'react';
// // import Footer from '../Home/Footer';
// // import Header from '../Home/Header';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { AiOutlineArrowLeft, AiOutlineDelete } from 'react-icons/ai';
// // import Swal from "sweetalert2";
// // export const Showsubjects = () => {
// //   const [subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     getsubject();
// //   }, []);

// //   const getsubject = async () => {
// //     try {
// //       const res = await axios.get("https://mdl-coaching.onrender.com/subject/getsubjects");
// //       setSubjects(res.data.data);
// //     } catch (error) {
// //       console.error("Error fetching subjects:", error);
// //     }
// //   };

// //   function deletesubject(subjectid) {
// //     Swal.fire({
// //       title: "Are you sure?",
// //       text: "You won't be able to revert this!",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "Yes, delete it!",
// //     }).then(async (result) => {
// //       if (result.isConfirmed) {
// //         try {
// //           const url = `https://mdl-coaching.onrender.com/subject/dletesubject/${subjectid}`;

// //           const response = await axios.get(url);

// //           Swal.fire({
// //             title: response.data.message,
// //             text: "Your file has been deleted.",
// //             icon: "success",
// //           });
// //           getsubject();
// //         } catch (error) {
// //           Swal.fire({
// //             title: "Deleted!",
// //             text: "Your file has been deleted.",
// //             icon: "success",
// //           });
// //         }
// //       }
// //     });
// //   }

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Header />
// //       <div className="flex flex-1 bg-[#454649] p-6 sm:p-10 md:p-24 min-h-screen">
// //         <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
// //           <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Subjects List</h2>
// //           <div className="overflow-x-auto">
// //             {subjects.length === 0 ? (
// //               <div className="text-center text-gray-500 py-4">Data Not Found</div>
// //             ) : (
// //               <table className="min-w-full bg-white border border-gray-300 rounded-lg">
// //                 <thead>
// //                   <tr className="bg-gray-200">
// //                     <th className="py-2 px-4 border-b text-left">Code</th>
// //                     <th className="py-2 px-4 border-b text-left">Subject Name</th>
// //                     <th className="py-2 px-4 border-b text-center">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {subjects.map((subject) => (
// //                     <tr key={subject._id} className="hover:bg-gray-100">
// //                       <td className="py-2 px-4 border-b">{subject.subjectCode}</td>
// //                       <td className="py-2 px-4 border-b">{subject.subjectName}</td>
// //                       <td className="py-2 px-4 border-b text-center">
// //                         <button
// //                           onClick={() => deletesubject(subject._id)}
// //                           className="text-red-600 hover:text-red-800 transition duration-300"
// //                         >
// //                           <AiOutlineDelete size={20} />
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             )}
// //           </div>

// //         </div>
// //       </div>
// //       <Link
// //         to="/addsubjects"
// //         className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
// //       >
// //         <AiOutlineArrowLeft size={24} />
// //       </Link>
// //       <Footer />
// //     </div>
// //   );
// // };

import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineDelete } from 'react-icons/ai';
import Swal from "sweetalert2";

export const Showsubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getsubject();
  }, []);

  const getsubject = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://mdl-coaching.onrender.com/subject/getsubjects");
      setSubjects(res.data.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    } finally {
      setLoading(false);
    }
  };

  function deletesubject(subjectid) {
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
          const url = `https://mdl-coaching.onrender.com/subject/dletesubject/${subjectid}`;
          const response = await axios.get(url);

          Swal.fire({
            title: response.data.message,
            text: "Your file has been deleted.",
            icon: "success",
          });
          getsubject();
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
    <div className="flex flex-col min-h-screen relative">
      <Header />

      <div className="flex flex-1 bg-[#454649] p-6 sm:p-10 md:p-24 min-h-screen relative">

        {/* Main Content */}
        {loading && (
          <div className="absolute inset-0 bg-[#454649] bg-opacity-80 flex items-center justify-center rounded-lg z-20">
            <div className="flex gap-4">
              <span
                className="w-5 h-5 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: '0s', animationDuration: '0.6s' }}
              ></span>
              <span
                className="w-5 h-5 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s', animationDuration: '0.6s' }}
              ></span>
              <span
                className="w-5 h-5 bg-black rounded-full animate-bounce"
                style={{ animationDelay: '0.2s', animationDuration: '0.6s' }}
              ></span>
            </div>
          </div>
        )}

        <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200 z-10 relative">

          {/* Loading Spinner Inside Main Content */}


          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Subjects List</h2>
          <div className="overflow-x-auto">
            {subjects.length === 0 ? (
              <div className="text-center text-gray-500 py-4">Data Not Found</div>
            ) : (
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b text-left">Code</th>
                    <th className="py-2 px-4 border-b text-left">Subject Name</th>
                    <th className="py-2 px-4 border-b text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject._id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{subject.subjectCode}</td>
                      <td className="py-2 px-4 border-b">{subject.subjectName}</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          onClick={() => deletesubject(subject._id)}
                          className="text-red-600 hover:text-red-800 transition duration-300"
                        >
                          <AiOutlineDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Link
        to="/addsubjects"
        className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300 z-30"
      >
        <AiOutlineArrowLeft size={24} />
      </Link>

      <Footer />
    </div>
  );
};
