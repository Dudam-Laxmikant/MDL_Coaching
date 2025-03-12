import React from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus, FiUsers } from 'react-icons/fi'; // Icons Import
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function ShowClassTeacher() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14">
                    <div className="w-full max-w-4xl mx-auto mt-20 bg-transparent p-6">
                        
                        {/* Show All Teachers Button (Placed at the top) */}
                        <div className="mb-6 flex">
                            <Link to={'/showclassTeacher/showallteacherlist'}>
                                <button className="flex items-center gap-2 px-6 py-2 bg-yellow-700 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <FiUsers className="text-xl" /> Show All Teachers
                                </button>
                            </Link>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6 text-center">Add Teacher</h1>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full bg-[#454649] rounded-lg shadow-md border-collapse border border-gray-200">
                                <tbody>
                                    <tr className="hover:bg-[#454650]">
                                        {/* Class Name */}
                                        <td className="p-4 border border-gray-300 text-gray-700 text-lg font-semibold">
                                            <span className="block text-white">Eight</span>
                                        </td>

                                        {/* Add Teacher Button */}
                                        <td className="p-4 border border-gray-300">
                                            <Link to={'/showclassTeacher/addteacher'}
                                                className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                            >
                                                <FiUserPlus className="text-lg" /> Add Teacher
                                            </Link>
                                        </td>

                                        {/* Show Teachers Button */}
                                        <td className="p-4 border border-gray-300">
                                            <Link to={'/showclassTeacher/showteacherslist'}
                                                className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                            >
                                                <FiUsers className="text-lg" /> Show Teachers
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
                
            </div>
        </>
    );
}

export default ShowClassTeacher;