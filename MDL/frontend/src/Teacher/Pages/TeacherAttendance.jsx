
import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const classes = ["Class 1", "Class 2", "Class 3"];
const subjects = ["Math", "Science", "English", "History"];
const students = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, name: `Student ${i + 1}` }));

const TeacherAttendance = () => {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => ({ ...acc, [student.id]: false }), {})
  );

  const handlePresentToggle = (id) => {
    setAttendance({ ...attendance, [id]: !attendance[id] });
  };

  const handleFieldChange = (setter, value) => {
    setter(value);
    setAttendance(students.reduce((acc, student) => ({ ...acc, [student.id]: false }), {}));
  };

  function upload(event) {
    event.preventDefault();
    if (!selectedClass || !selectedSubject || !date) {
      Swal.fire({ title: "All fields are required!", icon: "error", draggable: true });
      return;
    }
    Swal.fire({ title: "Uploaded Successfully", icon: "success", draggable: true });
  }

  function updateAttendance() {
    Swal.fire({ title: "Attendance Updated Successfully", icon: "success", draggable: true });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 h-screen">
        <div className="flex-1 bg-gradient-to-r bg-slate-100 p-4 sm:p-10 flex flex-col items-center">
          <h1 className="text-black text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-pulse text-center">Attendance</h1>
          
          <div className="w-full bg-white shadow-md p-4 rounded-lg mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Select Class:</label>
              <select className="p-2 border rounded-lg bg-blue-300 text-black" value={selectedClass} onChange={(e) => handleFieldChange(setSelectedClass, e.target.value)}>
                {classes.map(cls => (<option key={cls} value={cls}>{cls}</option>))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Select Subject:</label>
              <select className="p-2 border rounded-lg bg-green-300 text-black" value={selectedSubject} onChange={(e) => handleFieldChange(setSelectedSubject, e.target.value)}>
                {subjects.map(subj => (<option key={subj} value={subj}>{subj}</option>))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Select Date:</label>
              <input type="date" className="p-2 border rounded-lg bg-yellow-300 text-black" value={date} onChange={(e) => handleFieldChange(setDate, e.target.value)} />
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 w-full md:w-2/3">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 p-2 text-left">Student Name</th>
                  <th className="border-b-2 p-2 text-center">Present</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id} className="hover:bg-gray-100">
                    <td className="p-2 border-b">{student.name}</td>
                    <td className="p-2 border-b text-center">
                      <button 
                        className={`w-20 h-10 border-2 rounded-lg ${attendance[student.id] ? "bg-green-500 text-white" : "bg-white"}`} 
                        onClick={() => handlePresentToggle(student.id)}>
                        Present
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4 sm:mt-6">
              <button onClick={upload} className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg">Submit</button>
              <Link to={'/techerUpdateAttendence'}>
              <button onClick={updateAttendance} className="bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg">Update Attendance</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherAttendance;