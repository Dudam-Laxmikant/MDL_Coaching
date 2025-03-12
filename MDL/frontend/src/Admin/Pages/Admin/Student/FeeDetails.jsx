import React from 'react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const FeeDetails = () => {
    const student = {
        name: "Dudam Laxmikant Shankar",
        rollNo: "101",
        totalFees: 25000,
        paidFees: 15000,
        installments: [
            { id: 1, date: "10-Jan-2024", amount: 5000, receipt: "receipt1.pdf" },
            { id: 2, date: "15-Feb-2024", amount: 7000, receipt: "receipt2.pdf" },
            { id: 3, date: "20-Mar-2024", amount: 3000, receipt: "receipt3.pdf" }
        ]
    };

    const remainingFees = student.totalFees - student.paidFees;

    const downloadReceipt = (receipt) => {
        Swal.fire('Downloading...', `Your receipt (${receipt}) is being downloaded.`, 'info');
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#454649] text-gray-200 mt-10">
            <Header />
            <div className="flex-1 p-6 md:p-10">
                <div className="max-w-4xl mx-auto bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-600 mb-6">Fee Details</h2>
                    <div className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">🎓 Roll No: <span className="font-normal">{student.rollNo}</span></p>
                        <p className="text-lg font-semibold">👤 Student Name: <span className="font-normal">{student.name}</span></p>
                    </div>
                    <div className="overflow-x-auto mt-6">
                        <table className="w-full border border-gray-700 rounded-lg">
                            <thead className="bg-gray-600 text-white">
                                <tr>
                                    <th className="p-3 border">Total Fees</th>
                                    <th className="p-3 border">Paid Fees</th>
                                    <th className="p-3 border">Remaining Fees</th>
                                    <th className="p-3 border">Overall Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center bg-gray-700 hover:bg-gray-600 transition">
                                    <td className="p-3 border font-medium">₹ {student.totalFees}</td>
                                    <td className="p-3 border font-medium text-green-400">₹ {student.paidFees}</td>
                                    <td className={`p-3 border font-medium ${remainingFees > 0 ? "text-red-400" : "text-green-400"}`}>₹ {remainingFees}</td>
                                    <td className="p-3 border">
                                        {student.paidFees > 0 ? (
                                            <button onClick={() => downloadReceipt("Overall_Receipt.pdf")} className="text-blue-400 hover:text-blue-600">
                                                <FaDownload size={20} />
                                            </button>
                                        ) : (
                                            <span className="text-gray-400">N/A</span>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 className="text-xl font-bold mt-6 mb-3">Installment Details</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-700 rounded-lg">
                            <thead className="bg-gray-600 text-white">
                                <tr>
                                    <th className="p-3 border">#</th>
                                    <th className="p-3 border">Date</th>
                                    <th className="p-3 border">Amount</th>
                                    <th className="p-3 border">Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.installments.map((installment, index) => (
                                    <tr key={installment.id} className="text-center bg-gray-700 hover:bg-gray-600 transition">
                                        <td className="p-3 border">{index + 1}</td>
                                        <td className="p-3 border">{installment.date}</td>
                                        <td className="p-3 border font-medium text-green-400">₹ {installment.amount}</td>
                                        <td className="p-3 border">
                                            <button onClick={() => downloadReceipt(installment.receipt)} className="text-blue-400 hover:text-blue-600">
                                                <FaDownload size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-6">
                        <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md transition flex items-center justify-center gap-2 mx-auto w-full sm:w-auto">
                            <FaPlus /> Add Fees
                        </button>
                    </div>
                </div>
            </div>
            <Link to="/addstudents/showstudentdetails/studentdetails" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
                 <AiOutlineArrowLeft size={24} />
             </Link>
            <Footer />
        </div>
    );
};

export default FeeDetails;
