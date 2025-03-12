import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const TeacherClass = () => {
  const [classes] = useState([
    { id: 1, name: "Physics", students: 30, hoverColor: "hover:bg-red-400" },
    { id: 2, name: "Mathematics", students: 25, hoverColor: "hover:bg-blue-400" },
    { id: 3, name: "Chemistry", students: 28, hoverColor: "hover:bg-green-400" },
    { id: 4, name: "Biology", students: 20, hoverColor: "hover:bg-yellow-400" },
    { id: 5, name: "English", students: 22, hoverColor: "hover:bg-purple-400" },
    { id: 6, name: "History", students: 18, hoverColor: "hover:bg-pink-400" },
    { id: 7, name: "Geography", students: 24, hoverColor: "hover:bg-orange-400" },
  ]);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1 ">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-200 p-10 h-screen overflow-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">📚 Available Classes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className={`p-6 rounded-lg shadow-md bg-gray-300 text-center transform transition-transform duration-300 hover:scale-105 ${cls.hoverColor}`}
              >
                <h3 className="text-xl font-semibold text-gray-900">{cls.name}</h3>
                <p className="mt-2 text-gray-800">Students: {cls.students}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeacherClass;