
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEdit, FiTrash2, FiUser, FiSearch, FiPlusCircle } from "react-icons/fi";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ShowAllTeachersList() {
  const [teachers, setTeachers] = useState([
    { id: "2001", name: "Laxmikant Dudam", class: "10th", subject: "Mathematics" },
    { id: "2002", name: "John Doe", class: "12th", subject: "Physics" },
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    class: "",
    subject: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTeachers([...teachers, formData]);
    setShowForm(false);
    Swal.fire("Success", "Teacher Added Successfully", "success");
    setFormData({ id: "", name: "", class: "", subject: "" });
  }

  function delet(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
        Swal.fire({ title: "Deleted!", text: "The teacher's record has been deleted.", icon: "success" });
      }
    });
  }
  

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14">
          <div className="w-full max-w-6xl mx-auto bg-[#454649] p-6">
            <h1 className="text-3xl font-bold text-yellow-200 mb-6 text-center">All Teachers List</h1>

            <div className="mb-4 text-right">
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "Close Form" : "+ Add Teacher"}
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-4 text-yellow-400">Add Teacher</h2>
                <input
                  type="text"
                  name="id"
                  placeholder="Teacher ID"
                  value={formData.id}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Teacher's Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  required
                />
                <input
                  type="text"
                  name="class"
                  placeholder="Class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
                  required
                />
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">Submit</button>
              </form>
            )}

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    <th className="p-4 text-left">Teacher ID</th>
                    <th className="p-4 text-left">Teacher's Name</th>
                    <th className="p-4 text-left">Class</th>
                    <th className="p-4 text-left">Subject</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={index} className="border-b border-gray-300 hover:bg-[#454655] transition">
                      <td className="p-4 text-white">{teacher.id}</td>
                      <td className="p-4 text-white">{teacher.name}</td>
                      <td className="p-4 text-white">{teacher.class}</td>
                      <td className="p-4 text-white">{teacher.subject}</td>
                      <td className="p-4 flex flex-wrap justify-center gap-2">
                      <button onClick={() => delet(teacher.id)} className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition">
  <FiTrash2 size={18} className="text-white" /> Delete
</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Link to="/showclassTeacher" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
          <AiOutlineArrowLeft size={24} />
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default ShowAllTeachersList;
