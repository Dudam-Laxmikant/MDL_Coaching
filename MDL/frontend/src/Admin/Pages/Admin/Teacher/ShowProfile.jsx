import React from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ShowProfile() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <div className="flex flex-1">
                    {/* Sidebar */}
                    {/* <Sidebar /> */}
                    <div className="flex-1 bg-[#454649] p-5 sm:p-7 md:p-14">
                        <h1 className="text-3xl font-bold text-center mt-10 text-yellow-300 mb-5">Teacher's Profile</h1>
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                            <div className="flex items-center gap-6">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"
                                    // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rNuFRQJ0m9EkNrwaJtyxCSEfY7Rz35rC_g&s
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full border-2 border-gray-300"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700">Dudam Laxmikant</h2>
                                    <p className="text-gray-500">Teacher ID: <span className="font-medium">2004</span></p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Date of Birth:</span>
                                    <span className="font-medium text-gray-800">01 Jan 1980</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Qualification:</span>
                                    <span className="font-medium text-gray-800">Master's in English</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Course:</span>
                                    <span className="font-medium text-gray-800">English Literature</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Mobile Number:</span>
                                    <span className="font-medium text-gray-800">+91 9876543210</span>
                                </div>
                            </div>
                        </div> <br />
                        

                    </div>
                </div>
                <Link to="/showclassTeacher/showallteacherlist" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
                          <AiOutlineArrowLeft size={24} />
                        </Link>
                <Footer />
            </div>
        </>
    );
}

export default ShowProfile;
