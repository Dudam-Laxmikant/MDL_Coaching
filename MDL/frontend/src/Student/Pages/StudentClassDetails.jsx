// import React, { useEffect, useState } from 'react';
// import Header from '../Header';
// import Footer from '../Footer';
// import axios from "axios";
// const StudentClassDetails = () => {
//   // const { classname } = useParams();

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Fixed Header */}
//       <Header />

//       {/* Scrollable Main Content */}
//       <div className="flex-grow overflow-auto flex items-center justify-center p-4">
//         <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-bold text-center mb-4 text-blue-600">Class Details</h2>

//           {/* Class Info */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2 text-gray-700">Class Information</h3>
//             <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
//               <div className="font-medium">Class:</div>
//               <div>9 Div-A</div>
//               <div className="font-medium">Roll No:</div>
//               <div>9</div>
//             </div>
//           </div>

//           {/* Subject Details */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2 text-gray-700">Subjects & Teachers</h3>
//             <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
//               <div className="font-medium">Maths:</div>
//               <div></div>
//               <div className="font-medium">Science:</div>
//               <div>Dipak</div>
//               <div className="font-medium">English:</div>
//               <div>Laxmikant</div>
//               <div className="font-medium">Gujarati:</div>
//               <div>Jaydeep</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Fixed Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default StudentClassDetails;
// import React, { useEffect, useState } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import axios from "axios";

// const StudentClassDetails = () => {
//   const [classDetails, setClassDetails] = useState([]);
//   // const data = localStorage.getItem("s_class");
//   useEffect(() => {
//     handleAddClick();
//   }, []);

//   const handleAddClick = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/teacherclass/getteachercls/${localStorage.getItem(
//           "studentclass"
//         )}`
//       );
//       setClassDetails(response.data.data);
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//   <Header />
//   <div className="flex-grow overflow-auto flex items-center justify-center p-4 min-h-screen">
//     <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-xl font-bold text-center mb-4 text-blue-600">
//         Class Details
//       </h2>

//       {classDetails.length > 0 ? (
//         classDetails.map((classItem, index) => {
//           return (
//             <div key={index} className="mb-6 border-b pb-4">
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">
//                 Class Information
//               </h3>
//               <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
//                 <div className="font-medium">Class:</div>
//                 <div>{classItem.className || "N/A"}</div>
//                 <div className="font-medium">Roll No:</div>
//                 <div>{classItem.SubjectName || "N/A"}</div>
//               </div>

//               <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">
//                 Subjects & Teachers
//               </h3>
//               <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
//                 {classItem.subjects && classItem.subjects.length > 0 ? (
//                   classItem.subjects.map((subject, subIndex) => {
//                     return (
//                       <div key={subIndex} className="flex justify-between">
//                         <span className="font-medium">
//                           {subject.TeacherId?.t_id}:
//                         </span>
//                         <span>{subject.SubjectName || "N/A"}</span>
//                       </div>
//                     );
//                   })
//                 ) : (
//                   <div className="col-span-2 text-gray-500">
//                     No subjects available.
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div className="text-center text-gray-500">
//           Loading class details...
//         </div>
//       )}
//     </div>
//   </div>
//   <Footer />
// </div>

//   );
// };

// export default StudentClassDetails;
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const StudentClassDetails = () => {
  const [classDetails, setClassDetails] = useState([]);

  useEffect(() => {
    fetchClassDetails();
  }, []);

  const fetchClassDetails = async () => {
    try {
      const studentClass = localStorage.getItem("studentclass");

      if (!studentClass) {
        console.error("No student class found in localStorage");
        return;
      }

      const response = await axios.get(
        `http://localhost:8080/teacherclass/getteachercls/${studentClass}`
      );

      console.log("API Response:", response.data.data); // Debugging

      if (Array.isArray(response.data.data)) {
        setClassDetails(response.data.data);
      } else {
        console.error("Invalid response format", response.data);
        setClassDetails([]);
      }
    } catch (error) {
      console.error("Error fetching class details:", error);
    }
  };
  // const classDetails = [
  //   { id: 1, name: "Class 10", section: "A", students: 40 },
  //   { id: 2, name: "Class 9", section: "B", students: 35 },
  //   { id: 3, name: "Class 8", section: "C", students: 30 },
  // ];
  return (
    // <div className="flex flex-col min-h-screen">
    //   <Header />
    //   <div>
    //     <h1>Vlass details</h1>
    //     <div className="p-4">
    //     <h1 className="text-2xl font-bold mb-4">Class Details</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {classDetails.map((cls) => (
    //         <div key={cls.id} className="p-4 border rounded-lg shadow-md">
    //           <h2 className="text-xl font-semibold">{cls.TeacherId.t_id} - {cls.TeacherId.lname}</h2>
    //           <p className="text-gray-600">Students: {cls.students}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   </div>
    //   <Footer />
    // </div>
    <div className="flex flex-col min-h-screen">
  <Header />
  <div className="p-4 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Class Details</h1>

    {/* First Section: Class & Student Details */}
    <div className="mb-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Class Information</h2>
      {classDetails.map((cls) => (
        <div key={cls.id} className="p-2 border-b">
          <p><span className="font-semibold">Class:</span> {cls.className} ({cls.classId})</p>
          <p><span className="font-semibold">Students:</span> {cls.students}</p>
        </div>
      ))}
    </div>

    {/* Second Section: Teacher & Subject Details */}
    <div className="grid grid-cols-2 gap-4">
        {/* Column for Teachers */}
        <div>
          <h3 className="text-lg font-medium mb-2">Teachers</h3>
          {classDetails.map((cls) => (
            <div key={cls.id} className="p-2 border-b">
              <p>{cls.TeacherId.s_name+" "+cls.TeacherId.name+" "+cls.TeacherId.lname}</p>
            </div>
          ))}
        </div>
        {/* Column for Subjects */}
        <div>
          <h3 className="text-lg font-medium mb-2">Subjects</h3>
          {classDetails.map((cls) => (
            <div key={cls.id} className="p-2 border-b">
              <p>{cls.SubjectName}</p>
            </div>
          ))}
        </div>
      </div>
  </div>
  <Footer />
</div>

  );
};

export default StudentClassDetails;
