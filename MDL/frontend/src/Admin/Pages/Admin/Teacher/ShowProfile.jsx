import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

function ShowProfile() {
  const [teacher, setTeacher] = useState([]);
  const { teacherId } = useParams();

  useEffect(() => {
    const fetchTeacher = async () => {
      const response = await axios.get(
        `http://localhost:8080/teacher/findByid/${teacherId}`
      );
      console.log(response.data.data);
      setTeacher(response.data.data);
    };
    fetchTeacher();
  }, [teacherId]);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  function formatDate(dateString) {
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

    const [year, month, day] = dateString.split("-");
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 min-h-screen">
          {/* Sidebar */}
          {/* <Sidebar /> */}
          {teacher.name ? (
            <div className="flex-1 bg-[#454649] p-5 sm:p-7 md:p-14">
              <h1 className="text-3xl font-bold text-center mt-10 text-yellow-300 mb-5">
                Teacher's Profile
              </h1>
              <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                <div className="flex items-center gap-6">
                  <img
                    src={`http://localhost:8080/images/${teacher.photo}`}
                    // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rNuFRQJ0m9EkNrwaJtyxCSEfY7Rz35rC_g&s
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">
                      {teacher.s_name} {teacher.name} {teacher.lname}
                    </h2>
                    <p className="text-gray-500">
                      Teacher ID:{" "}
                      <span className="font-medium">{teacher.t_id}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Date of Birth:</span>
                    <span className="font-medium text-gray-800">
                      {formatDate(teacher.dob)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Qualification:</span>
                    <span className="font-medium text-gray-800">
                      {teacher.qualification}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Course:</span>
                    <span className="font-medium text-gray-800">
                      English Literature
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Mobile Number:</span>
                    <span className="font-medium text-gray-800">
                      {teacher.mobilenumber}
                    </span>
                  </div>
                </div>
              </div>{" "}
              <br />
            </div>
          ) : (
            <div className="flex justify-center items-center">Loading...</div>
          )}
        </div>
        <Link
          to="/showclassTeacher/showallteacherlist"
          className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300"
        >
          <AiOutlineArrowLeft size={24} />
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default ShowProfile;
