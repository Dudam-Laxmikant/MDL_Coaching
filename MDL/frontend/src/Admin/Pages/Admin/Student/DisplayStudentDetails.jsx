// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Header from "../Home/Header";
// import Footer from "../Home/Footer";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import axios from "axios";
// function DisplayStudentDetails() {
//   const [studentDetails, setStudentDetails] = useState();
//   useEffect(() => {
//     profile();
//   }, []);
//   const profile = async () => {
//     try {
//       const studentid = localStorage.getItem("studentid");
//       const res = await axios.get(
//         `http://localhost:8080/student/showprofile/${studentid}`
//       );
//       console.log(res.data);
//       setStudentDetails(res.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="flex flex-col min-h-screen bg-[#454649] text-gray-900">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex flex-1 items-center justify-center p-6 min-h-screen mt-14">
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
//           <h1 className="text-3xl font-bold text-center mb-6 text-black">
//             Student I-Card
//           </h1>

//           {/* Student Avatar */}
//           {/* <div className="flex justify-center mb-6">
//             <img
//               src={`http://localhost:8080/images/${studentDetails.passphoto}`}
//               alt="Student Avatar"
//               className="w-32 h-32 rounded-full border-4 border-gray-300 bg-gray-200"
//             />
//           </div> */}

//           {/* Student Details */}
//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}

//             {studentDetails.map((detail, index) => (
//               <div key={index} className="student-info">
//                 <p>
//                   <strong>Name:</strong> {detail.fname} {detail.lname}
//                 </p>
//                 <p>
//                   <strong>Roll No:</strong> {detail.s_id}
//                 </p>
//                 <p>
//                   <strong>Gender:</strong> {detail.gender || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Date of Birth:</strong> {detail.dob}
//                 </p>
//                 <p>
//                   <strong>Aadhaar Number:</strong> {detail.aadhaar || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Address:</strong> {detail.address || "N/A"}
//                 </p>
//                 <p>
//                   <strong>City:</strong> {detail.city || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Country:</strong> {detail.country || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Class:</strong> {detail.s_class}
//                 </p>
//                 <p>
//                   <strong>Amount:</strong> N/A
//                 </p>
//               </div>
//             ))}
//           {/* </div> */}
//         </div>
//       </div>
//       <Link
//         to="/addstudents/showstudentdetails"
//         className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
//       >
//         <AiOutlineArrowLeft size={24} />
//       </Link>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default DisplayStudentDetails;
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

function DisplayStudentDetails() {
  const { studentId } = useParams();
  const [studentDetails, setStudentDetails] = useState(); // Initialize as empty array

  useEffect(() => {
    profile();
  }, [studentId]);

  const profile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/student/showprofile/${studentId}`
      );
      console.log(res.data.data);
      setStudentDetails(res.data.data); // Ensure it's an array
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#454649] text-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-6 min-h-screen mt-14">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            Student I-Card
          </h1>

          {/* Check if studentDetails is available before mapping */}
          {studentDetails ? (
            <div key={studentDetails._id} className="student-info">
              <p>
                <strong>Name:</strong> {studentDetails.fname} {studentDetails.mname} {studentDetails.lname}
              </p>
              <p>
                <strong>Roll No:</strong> {studentDetails.s_id}
              </p>
              <p>
                <strong>Gender:</strong> {studentDetails.gender || "N/A"}
              </p>
              <p>
                <strong>Date of Birth:</strong> {studentDetails.dob}
              </p>
              <p>
                <strong>Aadhaar Number:</strong> {studentDetails.aadhaar || "N/A"}
              </p>
              <p>
                <strong>Address:</strong> {studentDetails.address || "N/A"}
              </p>
              <p>
                <strong>City:</strong> {studentDetails.city || "N/A"}
              </p>
              <p>
                <strong>Country:</strong> {studentDetails.country || "N/A"}
              </p>
              <p>
                <strong>Class:</strong> {studentDetails.s_class}
              </p>
              <p>
                <strong>Amount:</strong> N/A
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No student details available.
            </p>
          )}
        </div>
      </div>

      <Link
        to={`/addstudents/showstudentdetails/studentdetails/${localStorage.getItem("studentclass")}`}
        className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
      >
        <AiOutlineArrowLeft size={24} />
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DisplayStudentDetails;
