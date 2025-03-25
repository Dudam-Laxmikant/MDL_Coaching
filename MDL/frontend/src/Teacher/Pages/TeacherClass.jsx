import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import axios from "axios";

const TeacherClass = () => {
  
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getclasses();
  }, []);

  const getclasses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/class/getclasses");
      console.log(res.data);
      setClasses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
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
            {classes.map((cls,index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md bg-gray-300 text-center hover:bg-pink-600 transform transition-transform duration-300 hover:scale-105 ${cls.hoverColor}`}
              >
                <h3 className="text-xl font-semibold text-gray-900">{cls.classname}</h3>
                {/* <p className="mt-2 text-gray-800">Students: {cls.students}</p> */}
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