import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Dummy data
// const classes = [
//   {
//     className: 'Class 1',
//     attendance: [
//       { date: '2025-04-25', students: [{ name: 'John Doe', status: 'Present' }, { name: 'Jane Smith', status: 'Absent' }] },
//       { date: '2025-04-26', students: [{ name: 'John Doe', status: 'Absent' }, { name: 'Jane Smith', status: 'Present' }] },
//     ],
//   },
//   {
//     className: 'Class 2',
//     attendance: [
//       { date: '2025-04-25', students: [{ name: 'Alice Johnson', status: 'Present' }, { name: 'Bob Brown', status: 'Present' }] },
//       { date: '2025-04-26', students: [{ name: 'Alice Johnson', status: 'Absent' }, { name: 'Bob Brown', status: 'Absent' }] },
//     ],
//   },
// ];

const StudentAttendencedisplay = () => {
  const [activeClass, setActiveClass] = useState(null);
  const [activeDateIndex, setActiveDateIndex] = useState(null);
  const [cls,classes] = useState([]);
  const handleClassClick = (index) => {
    setActiveClass(prevState => (prevState === index ? null : index));
    setActiveDateIndex(null); // reset date selection when class is toggled
  };

  const handleDateClick = (index) => {
    setActiveDateIndex(prevState => (prevState === index ? null : index));
  };
  // const id = useParams();
  useEffect(() => {
    getclasses();
    getattedence();
  }, []);

  const getclasses = async () => {
    try {
      const res = await axios.get("https://mdl-coaching.onrender.com/class/getclasses");
      console.log(res.data);
      classes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [attedence,setAttendance] = useState([]);
  const getattedence = async () => {
    try {
      const res = await axios.get("https://mdl-coaching.onrender.com/attendance/getattendence");

      console.log(res.data);
      setAttendance(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [activeclass,setactiveclass] = useState();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-col mt-32 flex-1 items-center justify-start p-4">
        {/* Classes Horizontal */}
        <div className="flex overflow-x-auto space-x-4 w-full max-w-5xl p-4">
          {cls.map((classItem, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white p-6 rounded-xl shadow-md cursor-pointer hover:bg-blue-100 transition"
              onClick={() => handleClassClick(index)}
            >
              <h2 className="text-xl font-bold text-center">{classItem.classname}</h2>
            </div>
          ))}
        </div>

        {/* Dates List */}
        {activeClass !== null && (
          <div className="w-full max-w-5xl mt-8 p-6 bg-white rounded-xl shadow-lg">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">{classes[activeClass].classname} - Dates</h2> */}

            <div className="flex flex-col space-y-4">
              {attedence[activeClass].records.map((day, idx) => (
                <div key={idx}>
                  <div
                    className="bg-gray-100 p-4 rounded-md shadow cursor-pointer hover:bg-gray-200"
                    onClick={() => handleDateClick(idx)}
                  >
                    <h3 className="text-lg font-semibold">{day.date}</h3>
                  </div>

                  {/* Students Attendance under the date */}
                  {activeDateIndex === idx && (
                    <div className="mt-2 bg-white p-4 rounded-md shadow">
                      <table className="w-full table-auto">
                        <thead>
                          <tr>
                            <th className="border px-4 py-2">Student Name</th>
                            <th className="border px-4 py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {day.students.map((student, studentIdx) => (
                            <tr key={studentIdx}>
                              <td className="border px-4 py-2">{student.data.classname}</td>
                              <td className="border px-4 py-2">{student.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default StudentAttendencedisplay;
