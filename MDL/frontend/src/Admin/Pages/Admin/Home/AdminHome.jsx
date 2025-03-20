import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineDelete, AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaRupeeSign,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminHome() {
  const [notice, setnotice] = useState([]);
  function delet(noticeId) {
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
          const url = `http://localhost:8080/notice/delete/${noticeId}`;

          const response = await axios.get(url);

          Swal.fire({
            title: response.data.message,
            text: "Your file has been deleted.",
            icon: "success",
          });
          getnotice();
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

  useEffect(() => {
    getnotice();
  }, []);

  // Animated Counter Hook
  const AnimatedCounter = ({ value, speed = 1000 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalDuration = speed; // Dynamic speed
      let step = Math.ceil(end / (speed / 20)); // Bigger steps for faster counting

      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 20); // Updates every 20ms

      return () => clearInterval(timer);
    }, [value, speed]);

    return <motion.span>{count.toLocaleString()}+</motion.span>;
  };

  function formatDate(dateString) {
    if (!dateString) return "Invalid Date"; // Handle undefined/null cases

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const parts = dateString.split("-");
    if (parts.length !== 3) return "Invalid Date"; // Handle incorrect formats

    const [year, month, day] = parts;
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  }

  const getnotice = async () => {
    try {
      const url = "http://localhost:8080/notice/getnotice";

      const response = await axios.get(url);
      setnotice(response.data.data);
    } catch (error) {
      console.log("Notice fetch error ::", error);
    }
  };

  const statData = [
    {
      id: 1,
      title: "Total Classes",
      value: 12,
      icon: <FaChalkboardTeacher className="text-4xl text-white" />,
      bg: "bg-blue-500",
    },
    {
      id: 2,
      title: "Total Teachers",
      value: 24,
      icon: <FaUserGraduate className="text-4xl text-white" />,
      bg: "bg-green-500",
    },
    {
      id: 3,
      title: "Total Fees Collection",
      value: 50000,
      icon: <FaRupeeSign className="text-4xl text-white" />,
      bg: "bg-purple-500",
      speed: 5000,
    }, // 5 sec speed
  ];

  return (
    <>
      <div className="flex flex-col bg-[#454649] min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 p-4 sm:p-6 md:p-10 bg-[#454649] min-h-screen">
          {/* bg-[#454649] */}
          <div className="w-full bg-transparent p-6  mt-10">
            {/* <h1 className="text-2xl font-bold text-white mb-6 text-center">Dashboard</h1> */}

            {/* Cards Section with Counting Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {statData.map((item) => (
                <div
                  key={item.id}
                  className={`${item.bg} p-6 rounded-lg shadow-md text-center text-white`}
                >
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  {/* Animated Number Count */}
                  <motion.p
                    className="text-2xl font-bold mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <AnimatedCounter value={item.value} />
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Notes Section */}
            <div>
              <h1 className="text-xl font-bold text-white mb-4">Notes</h1>

              <div className="overflow-x-auto">
                <table className="w-full bg-[#454649] border border-gray-300 rounded-lg shadow-md">
                  <thead className="bg-gray-200">
                    <tr className="bg-[#252629] text-white">
                      <th className="px-4 py-3 text-left text-yellow-500">
                        Title
                      </th>
                      <th className="px-4 py-3 text-left text-yellow-500">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-yellow-500">
                        Role
                      </th>
                      <th className="px-4 py-3 text-left text-yellow-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {notice &&
                      notice.map((data, index) => (
                        <tr
                          key={index}
                          className="even:bg-[#454649] odd:bg-[#454649] text-white"
                        >
                          <td className="px-4 py-3 text-white">{data.title}</td>
                          <td className="px-4 py-3 text-white">
                            {formatDate(data.date)}
                          </td>
                          <td className="px-4 py-3 text-white">{data.role}</td>
                          <td className="px-4 py-3 flex gap-2">
                            {/* Show Button */}
                            <Link to={`/adminhome/viewnotes/${data._id}`}>
                              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                                <AiOutlineEye className="text-lg" />
                                <span>View</span>
                              </button>
                            </Link>

                            {/* Update Button */}
                            <Link to={`/adminhome/updatenotice/${data._id}`}>
                              <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 shadow-md">
                                <AiOutlineEdit className="text-lg" /> Edit
                              </button>
                            </Link>
                            {/* Delete Button */}
                            <button
                              onClick={() => delet(data._id)}
                              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
                            >
                              <AiOutlineDelete className="text-lg" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default AdminHome;
