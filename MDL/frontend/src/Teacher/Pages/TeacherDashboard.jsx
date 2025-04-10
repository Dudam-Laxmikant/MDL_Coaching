// import Footer from "../Footer";
// import Header from "../Header";
// import {
//   FaChalkboardTeacher,
//   FaFileAlt,
//   FaMoneyBillWave,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import {
//   FaUserGraduate,
//   FaUsers,
// } from "react-icons/fa";
// const CurveLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-[#454649]">
//       <div className="flex space-x-2">
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="w-2 h-10 bg-yellow-500 rounded-full"
//             animate={{
//               scaleY: [1, 1.5, 1],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 0.8,
//               delay: i * 0.1,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TeacherDashboard = () => {
//   const [testCount, setTestCount] = useState(0);
//   const [salary, setSalary] = useState(0);
//   const [classCount, setClassCount] = useState(0);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const [totalclass, settotalclass] = useState(0);
//   const [totalteacher, settotalteacher] = useState(0);
//   const [notice, setnotice] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const gettotals = async () => {
//       const response = await axios.get(
//         "http://localhost:8080/TotalAdminDashboards"
//       );
//       console.log(response.data);
//       settotalclass(response.data.totalclass);
//       settotalteacher(response.data.totalteachers);
//     };
//     gettotals();
//   }, []);

//   useEffect(() => {
//     let testInterval = setInterval(() => {
//       setTestCount((prev) => (prev < 24 ? prev + 1 : 24));
//     }, 50);
//     let salaryInterval = setInterval(() => {
//       setSalary((prev) => (prev < 40000 ? prev + 1000 : 40000));
//     }, 50);
//     let classInterval = setInterval(() => {
//       settotalclass((prev) => (prev < totalclass ? prev + 1 : totalclass));
//     }, 50);

//     return () => {
//       clearInterval(testInterval);
//       clearInterval(salaryInterval);
//       clearInterval(classInterval);
//     };
//   }, [totalclass]);



//   useEffect(() => {
//     fetchNotice();
//   }, []);

//   const fetchNotice = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8080/notice/getnotice"
//       );
//       setnotice(response.data.data); // Store fetched teachers in state
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//     }
//   };


//   const AnimatedCounter = ({ value, speed = 1000 }) => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       let start = 0;
//       const end = Number(value) || 0;
//       if (start === end) return;
//       let step = Math.ceil(end / (speed / 20));
//       let timer = setInterval(() => {
//         start += step;
//         if (start >= end) {
//           start = end;
//           clearInterval(timer);
//         }
//         setCount(start);
//       }, 20);
//       return () => clearInterval(timer);
//     }, [value, speed]);
//     return <motion.span>{count.toLocaleString()}+</motion.span>;
//   };
//   return (
//     <>
//       {loading ? (
//         <CurveLoader />
//       ) : (
//         <div className="flex flex-col">
//           {/* Header */}
//           <Header />
//           <div className="flex flex-1 h-screen">
//             {/* Main Content */}
//             <div className={`flex-1 p-6  bg-gray-50 transition-all duration-300`}>
//               <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 text-center">
//                 {[
//                   {
//                     label: "Total tests taken",
//                     value: testCount,
//                     icon: <FaFileAlt size={40} />,
//                     color: "bg-blue-500",
//                   },
//                   {
//                     label: "Total salary earned",
//                     value: `₹${salary.toLocaleString()}`,
//                     icon: <FaMoneyBillWave size={40} />,
//                     color: "bg-green-500",
//                   },
//                   {
//                     label: "Total classes taken",
//                     value: totalclass,
//                     icon: <FaChalkboardTeacher size={40} />,
//                     color: "bg-purple-500",
//                   },
//                 ].map((stat, index) => (
//                   <div
//                     key={index}
//                     className={`p-6 ${stat.color} text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center`}
//                   >
//                     <div className="mb-2">{stat.icon}</div>
//                     <p className="text-lg font-medium">{stat.label}</p>
//                     <h4 className="text-4xl font-bold mt-2">{stat.value}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* News & Announcements */}
//           <div className="p-6 bg-gray-100 min-h-screen">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               News & Announcements
//             </h3>
//             <div className="space-y-4">
//               {notice.map((news, index) => (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-lg ${news.bg} shadow-md cursor-pointer`}
//                   onClick={() => setSelectedNews(news)}
//                 >
//                   <p className="font-semibold text-gray-800">{news.title}</p>
//                   <span className="text-sm text-gray-600">
//                     {news.date} - {news.audience}
//                   </span>
//                   <p>{news.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Floating News Modal */}
//           {selectedNews && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//                 <h2 className="text-xl font-bold">{selectedNews.title}</h2>
//                 <p className="text-sm text-gray-600 mb-2">
//                   {selectedNews.date} - {selectedNews.audience}
//                 </p>
//                 <p className="text-gray-800">{selectedNews.description}</p>
//                 <button
//                   className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   onClick={() => setSelectedNews(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Footer */}
//           <Footer />
//         </div>
//         )}
//     </>
//   );
// };

// export default TeacherDashboard;
import Footer from "../Footer";
import Header from "../Header";
import {
  FaChalkboardTeacher,
  FaFileAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const CurveLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-10 bg-gray-800 rounded-full"
            animate={{
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const TeacherDashboard = () => {
  const [testCount, setTestCount] = useState(0);
  const [salary, setSalary] = useState(0);
  const [classCount, setClassCount] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);
  const [totalclass, settotalclass] = useState(0);
  const [totalteacher, settotalteacher] = useState(0);
  const [notice, setnotice] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state is true

  // Fetch data
  useEffect(() => {
    const gettotals = async () => {
      try {
        const response = await axios.get("http://localhost:8080/TotalAdminDashboards");
        console.log(response.data);
        settotalclass(response.data.totalclass);
        settotalteacher(response.data.totalteachers);
      } catch (error) {
        console.error("Error fetching dashboard totals:", error);
      }
    };
    
    const fetchNotice = async () => {
      try {
        const response = await axios.get("http://localhost:8080/notice/getnotice");
        setnotice(response.data.data); // Store fetched notice data in state
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    gettotals();
    fetchNotice();
  }, []);

  useEffect(() => {
    // Simulate animated counters for values like testCount, salary, and classCount
    let testInterval = setInterval(() => {
      setTestCount((prev) => (prev < 24 ? prev + 1 : 24));
    }, 50);
    let salaryInterval = setInterval(() => {
      setSalary((prev) => (prev < 40000 ? prev + 1000 : 40000));
    }, 50);
    let classInterval = setInterval(() => {
      settotalclass((prev) => (prev < totalclass ? prev + 1 : totalclass));
    }, 50);

    return () => {
      clearInterval(testInterval);
      clearInterval(salaryInterval);
      clearInterval(classInterval);
    };
  }, [totalclass]);

  useEffect(() => {
    // Set loading to false once all the data is fetched
    if (notice.length && totalclass) {
      setLoading(false); // Set loading to false after fetching the data
    }
  }, [notice, totalclass]); // Trigger when notice and totalclass are updated

  const AnimatedCounter = ({ value, speed = 1000 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = Number(value) || 0;
      if (start === end) return;
      let step = Math.ceil(end / (speed / 20));
      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 20);
      return () => clearInterval(timer);
    }, [value, speed]);
    return <motion.span>{count.toLocaleString()}+</motion.span>;
  };

  return (
    <>
      {loading ? (
        <CurveLoader />
      ) : (
        <div className="flex flex-col">
          {/* Header */}
          <Header />
          <div className="flex flex-1 h-screen">
            {/* Main Content */}
            <div className={`flex-1 p-6 bg-gray-50 transition-all duration-300`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {[ 
                  {
                    label: "Total tests taken",
                    value: testCount,
                    icon: <FaFileAlt size={40} />,
                    color: "bg-blue-500",
                  },
                  {
                    label: "Total salary earned",
                    value: `₹${salary.toLocaleString()}`,
                    icon: <FaMoneyBillWave size={40} />,
                    color: "bg-green-500",
                  },
                  {
                    label: "Total classes taken",
                    value: totalclass,
                    icon: <FaChalkboardTeacher size={40} />,
                    color: "bg-purple-500",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`p-6 ${stat.color} text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center`}
                  >
                    <div className="mb-2">{stat.icon}</div>
                    <p className="text-lg font-medium">{stat.label}</p>
                    <h4 className="text-4xl font-bold mt-2">{stat.value}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News & Announcements */}
          <div className="p-6 bg-gray-100 min-h-screen">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              News & Announcements
            </h3>
            <div className="space-y-4">
              {notice.map((news, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${news.bg} shadow-md cursor-pointer`}
                  onClick={() => setSelectedNews(news)}
                >
                  <p className="font-semibold text-gray-800">{news.title}</p>
                  <span className="text-sm text-gray-600">
                    {news.date} - {news.audience}
                  </span>
                  <p>{news.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating News Modal */}
          {selectedNews && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold">{selectedNews.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  {selectedNews.date} - {selectedNews.audience}
                </p>
                <p className="text-gray-800">{selectedNews.description}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => setSelectedNews(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default TeacherDashboard;
