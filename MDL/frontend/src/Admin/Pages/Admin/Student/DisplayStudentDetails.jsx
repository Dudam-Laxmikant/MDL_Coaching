import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

function DisplayStudentDetails() {


    useEffect(() => {
        profile();
      },[])
      const [students, setstudents] = useState([]);
      const profile = async () => {
        try {
          const studentid = localStorage.getItem("studentid")
          const res = await axios.get(`http://localhost:8080/student/getstudentdetails/${studentid}`)
          console.log(res.data)
          setstudents(res.data.data)
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <div className="flex flex-col min-h-screen bg-[#454649] text-gray-900">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-1 items-center justify-center p-6 min-h-screen mt-14">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                    <h1 className="text-3xl font-bold text-center mb-6 text-black">Student I-Card</h1>

                    {/* Student Avatar */}
                    <div className="flex justify-center mb-6">
                        <img
                           src={`http://localhost:8080/images/${students.passphoto}`}
                            alt="Student Avatar"
                            className="w-32 h-32 rounded-full border-4 border-gray-300 bg-gray-200"
                        />
                    </div>

                    {/* Student Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { label: "Name", value: students.fname + " " + students.mname + " " + students.lname },
                            { label: "Roll No", value: students.s_id },
                            { label: "Gender", value: "Male" },
                            { label: "Date of Birth", value: "29, Jun 2004" },
                            { label: "Aadhaar Number", value: "1233 1254 1254" },
                            { label: "Address", value: "41, Balaji Nagar, Godadara, Surat" },
                            { label: "City", value: "Surat" },
                            { label: "Country", value: "Gujarat" },
                            { label: "Class", value: "4th" },
                            { label: "Amount", value: "$12,000" }
                        ].map((item, index) => (
                            <div key={index}>
                                <label className="text-gray-600 font-medium">{item.label}</label>
                                <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link
                    to="/addstudents/showstudentdetails"
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
