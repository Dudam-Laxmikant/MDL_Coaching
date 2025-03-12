import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { FiDownload } from "react-icons/fi";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

function SalaryDetails() {
  const teacher = { id: "2001", name: "Laxmikant Dudam", monthlySalary: 31000 };
  const [selectedMonth, setSelectedMonth] = useState("");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [salaries, setSalaries] = useState([
    { month: "January", amount: 31000, receipt: "receipt_jan.pdf", paid: true },
    { month: "February", amount: 31000, receipt: "receipt_feb.pdf", paid: false },
  ]);

  function paySalary() {
    if (!selectedMonth) {
      Swal.fire("Error", "Please select a month", "error");
      return;
    }
    Swal.fire({
      title: "Confirm Payment?",
      text: `Are you sure you want to pay salary for ${selectedMonth}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pay Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        setSalaries((prevSalaries) => {
          const updatedSalaries = [...prevSalaries, { month: selectedMonth, amount: teacher.monthlySalary, receipt: `receipt_${selectedMonth.toLowerCase()}.pdf`, paid: true }];
          return updatedSalaries;
        });
        Swal.fire("Success!", "Salary has been paid.", "success");
      }
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-10 mt-1">
        <div className="w-full mt-20 max-w-4xl mx-auto  p-6 overflow-x-auto mb-10">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Teacher Salary Details</h1>
          <div className="mb-6 border-b pb-4">
            <p className="text-lg text-slate-300"><strong>Teacher ID:</strong> {teacher.id}</p>
            <p className="text-lg text-slate-300"><strong>Name:</strong> {teacher.name}</p>
            <p className="text-lg text-slate-300"><strong>Monthly Salary:</strong> ₹{teacher.monthlySalary}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 shadow-md bg-[#454649] text-white text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-4 border">Month</th>
                  <th className="p-4 border">Monthly Salary</th>
                  <th className="p-4 border">Receipt</th>
                  <th className="p-4 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map((salary, index) => (
                  <tr key={index} className="border-b border-gray-500 hover:bg-gray-600 transition">
                    <td className="p-4 border">{salary.month}</td>
                    <td className="p-4 border">₹{teacher.monthlySalary}</td>
                    <td className="p-4 border">
                      {salary.paid ? (
                        <a href={salary.receipt} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline flex items-center justify-center gap-1">
                          <FiDownload size={18} /> Download
                        </a>
                      ) : "-"}
                    </td>
                    <td className="p-4 border">
                      {salary.paid ? <FaCheckCircle className="text-green-400 text-xl" /> : <FaTimesCircle className="text-red-400 text-xl" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <select className="p-2 border rounded mr-4" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <button onClick={paySalary} className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 shadow transition">Pay Salary</button>
          </div>
          {/* <div className="mt-6 text-center">
            <Link to="/showallteacherlist" className="inline-block px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 shadow transition">Go Back</Link>
          </div> */}
        </div>
      </div>

      <Link to="/showclassTeacher/showallteacherlist" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
                          <AiOutlineArrowLeft size={24} />
                        </Link>
                <Footer />
      <Footer />
    </div>
  );
}

export default SalaryDetails;
