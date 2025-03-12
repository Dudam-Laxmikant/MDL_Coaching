import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

const subjects = [
  { name: "Mathematics", color: "bg-blue-500", description: "Algebra, Geometry, Trigonometry", pdf: "/pdfs/math.pdf" },
  { name: "Science", color: "bg-green-500", description: "Physics, Chemistry, Biology", pdf: "/pdfs/science.pdf" },
  { name: "English", color: "bg-purple-500", description: "Grammar, Literature, Writing Skills", pdf: "/pdfs/english.pdf" },
  { name: "History", color: "bg-red-500", description: "Ancient, Medieval, Modern History", pdf: "/pdfs/history.pdf" },
  { name: "Geography", color: "bg-yellow-500", description: "Maps, Climate, Environment", pdf: "/pdfs/geography.pdf" },
  { name: "Computer Science", color: "bg-pink-500", description: "Programming, Databases, AI", pdf: "/pdfs/computer_science.pdf" },
];

const StudentLearningMaterial = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center  p-20">
        <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">📚 Learning Material</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              className={`w-52 h-64 flex flex-col items-center justify-center rounded-2xl shadow-lg text-white ${subject.color} text-center p-4`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="text-5xl">📖</span>
              <h2 className="text-xl font-bold mt-3">{subject.name}</h2>
              <p className="text-sm mt-2">{subject.description}</p>

              {/* Download Button */}
              <a
                href={subject.pdf}
                download
                className="mt-4 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300"
              >
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentLearningMaterial;

