import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export const TeacherUpdateAttendence = () => {
  const [formData, setFormData] = useState({
    selectedClass: '',
    selectedSubject: '',
    selectedDate: new Date().toISOString().split('T')[0],
    students: [
      { id: 1, name: 'Ali Khan', absent: false },
      { id: 2, name: 'Sara Ahmed', absent: false },
      { id: 3, name: 'Mohsin Raza', absent: false },
      { id: 4, name: 'Ayesha Fatima', absent: false },
    ],
  });
  

  const [showPopup, setShowPopup] = useState(false);

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
  const subjects = ['Math', 'Science', 'English', 'History'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleAbsent = (id) => {
    setFormData((prev) => ({
      ...prev,
      students: prev.students.map((student) =>
        student.id === id ? { ...student, absent: !student.absent } : student
      ),
    }));
  };

  const handleUpdate = () => {
    console.log('Updated Attendance Data:', formData);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 flex-col items-center bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 p-5 overflow-auto">
        <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-5 text-center">Update Attendance</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <select 
              name="selectedClass"
              className="p-2 border rounded-lg w-full md:w-auto"
              value={formData.selectedClass} 
              onChange={handleChange}
            >
              <option value="">Select Class</option>
              {classes.map((cls, index) => (
                <option key={index} value={cls}>{cls}</option>
              ))}
            </select>
            
            <select 
              name="selectedSubject"
              className="p-2 border rounded-lg w-full md:w-auto"
              value={formData.selectedSubject} 
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              {subjects.map((subj, index) => (
                <option key={index} value={subj}>{subj}</option>
              ))}
            </select>

            <input 
              type="date" 
              name="selectedDate"
              className="p-2 border rounded-lg w-full md:w-auto" 
              value={formData.selectedDate} 
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-5 bg-white p-5 rounded-lg shadow-lg w-full max-w-3xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Student Name</th>
                <th className="border p-2">Absent</th>
              </tr>
            </thead>
            <tbody>
              {formData.students.map((student) => (
                <tr key={student.id} className="border">
                  <td className="p-2">{student.name}</td>
                  <td className="p-2 text-center">
                    <button 
                      className={`px-4 py-2 rounded-lg ${student.absent ? 'bg-green-500' : 'bg-red-500'} text-white`}
                      onClick={() => toggleAbsent(student.id)}
                    >
                      {student.absent ? 'Present' : 'Absent'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 w-full"
            onClick={handleUpdate}
          >
            Update Attendance
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-3 rounded-lg shadow-lg">
          Attendance Updated Successfully!
        </div>
      )}

      <Footer />
    </div>
  );
};
