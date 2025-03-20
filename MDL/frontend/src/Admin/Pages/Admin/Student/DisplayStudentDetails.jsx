import React from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

function DisplayStudentDetails() {
    return (
        <div className="flex flex-col min-h-screen bg-[#454649] text-gray-900">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-1 items-center justify-center p-6 min-h-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                    <h1 className="text-3xl font-bold text-center mb-6 text-black">Student I-Card</h1>

                    {/* Student Avatar */}
                    <div className="flex justify-center mb-6">
                        <img
                            src=""
                            alt="Student Avatar"
                            className="w-32 h-32 rounded-full border-4 border-gray-300 bg-gray-200"
                        />
                    </div>

                    {/* Student Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { label: "Name", value: "Dudam Laxmikant" },
                            { label: "Roll No", value: "1" },
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

                    {/* Back Button */}
                    <div className="mt-8 text-center">
                        <Link
                            to="/studentdetails"
                            className="px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
                        >
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
            <Link
                    to="/addstudents/showstudentdetails/studentdetails"
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
