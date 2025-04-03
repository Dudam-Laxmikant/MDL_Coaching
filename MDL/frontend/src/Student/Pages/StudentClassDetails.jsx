
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from "axios";
const StudentClassDetails = () => {


  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Main Content */}
      <div className="flex-grow overflow-auto flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-4 text-blue-600">Class Details</h2>

          {/* Class Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Class Information</h3>
            <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
              <div className="font-medium">Class:</div>
              <div>9 Div-A</div>
              <div className="font-medium">Roll No:</div>
              <div>9</div>
            </div>
          </div>

          {/* Subject Details */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Subjects & Teachers</h3>
            <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
              <div className="font-medium">Maths:</div>
              <div>Mayur</div>
              <div className="font-medium">Science:</div>
              <div>Dipak</div>
              <div className="font-medium">English:</div>
              <div>Laxmikant</div>
              <div className="font-medium">Gujarati:</div>
              <div>Jaydeep</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default StudentClassDetails;
