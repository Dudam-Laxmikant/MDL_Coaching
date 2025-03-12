
import React from "react";
import Header from "../Home/Header";
import  Footer  from "../Home/Footer";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen bg-[#454649]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center p-6">
        <div className="w-full max-w-4xl bg-white p-8 sm:p-12 rounded-xl shadow-xl">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
              alt="Admin Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-indigo-500 shadow-md transition-transform transform hover:scale-110"
            />
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-800">
              Admin Profile
            </h1>
            <p className="text-base sm:text-lg text-gray-600">Administrator</p>
          </div>

          {/* Profile Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            {[
              { label: "Name", value: "Laxmikant Dudam" },
              { label: "Date of Birth", value: "21-Jun-2004" },
              { label: "Age", value: "28" },
              { label: "Location", value: "Surat, Gujarat" },
              { label: "Email", value: "example@example.com" },
              { label: "Mobile Number", value: "+91 1234567890" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-indigo-600 font-semibold">{item.label}:</span>
                <p className="text-gray-700">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Edit Profile Button */}
          <div className="mt-10 flex justify-center">
            <button className="px-6 py-2 sm:px-8 sm:py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Profile;