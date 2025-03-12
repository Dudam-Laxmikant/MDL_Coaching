import React from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiFillDelete, AiOutlineArrowLeft } from "react-icons/ai";
import Swal from "sweetalert2";

function ShowClasses() {
    function deleteClass() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "The class has been deleted.", "success");
            }
        });
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#454649] text-gray-200 relative">
            <Header />
            <div className="flex flex-1 p-6 md:p-10">
                <div className="flex-1 p-5 w-full mt-14">
                    <h2 className="text-xl font-bold mb-6 text-yellow-400">Class Details</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-600 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-700 text-white">
                                    <th className="border border-gray-600 px-4 py-2 text-left">Class</th>
                                    <th className="border border-gray-600 px-4 py-2 text-left">Total Students</th>
                                    <th className="border border-gray-600 px-4 py-2 text-left">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-600 text-white">
                                    <td className="border border-gray-500 px-4 py-2">Eighth</td>
                                    <td className="border border-gray-500 px-4 py-2">50</td>
                                    <td className="border border-gray-500 px-4 py-2 flex">
                                        <AiFillDelete className="text-red-500 hover:text-red-700 cursor-pointer transition" size={24} onClick={deleteClass} />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Link to="/addclasses" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
                <AiOutlineArrowLeft size={24} />
            </Link>

            <Footer />
        </div>
    );
}

export default ShowClasses;
