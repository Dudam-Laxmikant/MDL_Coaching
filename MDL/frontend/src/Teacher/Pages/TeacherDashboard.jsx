import Footer from "../Footer";
import Header from "../Header";
import { FaChalkboardTeacher, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";
import { useEffect, useState } from "react";

const TeacherDashboard = () => {
  const [testCount, setTestCount] = useState(0);
  const [salary, setSalary] = useState(0);
  const [classCount, setClassCount] = useState(0);

  useEffect(() => {
    let testInterval = setInterval(() => {
      setTestCount((prev) => (prev < 24 ? prev + 1 : 24));
    }, 50);
    let salaryInterval = setInterval(() => {
      setSalary((prev) => (prev < 40000 ? prev + 1000 : 40000));
    }, 50);
    let classInterval = setInterval(() => {
      setClassCount((prev) => (prev < 30 ? prev + 1 : 30));
    }, 50);
    
    return () => {
      clearInterval(testInterval);
      clearInterval(salaryInterval);
      clearInterval(classInterval);
    };
  }, []);

  return (
    <div className="flex flex-col ">
      {/* Header */}
      <Header />
      <div className="flex flex-1 h-screen relative">
        {/* Main Content */}
        <div className={`flex-1 p-6 bg-gray-50 transition-all duration-300`}>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { label: "Total tests taken", value: testCount, icon: <FaFileAlt size={40} />, color: "bg-blue-500" },
              { label: "Total salary earned", value: `₹${salary.toLocaleString()}`, icon: <FaMoneyBillWave size={40} />, color: "bg-green-500" },
              { label: "Total classes taken", value: classCount, icon: <FaChalkboardTeacher size={40} />, color: "bg-purple-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-6 ${stat.color} text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center`}
              >
                <div className="mb-2">{stat.icon}</div>
                <p className="text-lg font-medium">{stat.label}</p>
                <h4 className="text-4xl font-bold mt-2">{stat.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News & Announcements */}
      <div className="p-6 bg-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">News & Announcements</h3>
        <div className="space-y-4">
          {[
            { title: "New Feature Released", date: "2025-03-05", audience: "Public", bg: "bg-green-200" },
            { title: "Scheduled Maintenance", date: "2025-03-04", audience: "Teachers", bg: "bg-gray-200" },
            { title: "Upcoming Webinar", date: "2025-03-02", audience: "Students", bg: "bg-gray-200" },
            { title: "Upcoming Webinar on 03-03-2025", date: "2025-03-01", audience: "Students", bg: "bg-gray-200" },
          ].map((news, index) => (
            <div key={index} className={`p-4 rounded-lg ${news.bg} shadow-md`}> 
              <p className="font-semibold text-gray-800">{news.title}</p>
              <span className="text-sm text-gray-600">{news.date} - {news.audience}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeacherDashboard;
