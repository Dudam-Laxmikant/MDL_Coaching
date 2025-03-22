
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const StudentNotice = () => {
  const [newNotice, setNewNotice] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/t_notice/teachernotice/getallnotice"
      );
      setNewNotice(response.data.data);
    } catch (error) {
      console.error("Error fetching Notices:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Main Content */}
      <div className="flex-grow overflow-auto p-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📢 Latest Notices
        </h1>

        {newNotice.length === 0 ? (
          <p className="text-center text-gray-500">No notices available</p>
        ) : (
          <div className="grid gap-6 max-w-3xl mx-auto">
            {newNotice.map((notice, index) => (
              <div
                key={notice.id || index}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {notice.title || "Untitled Notice"}
                </h2>
                <p className="text-gray-700 mt-2">{notice.noticedescription}</p>
                <p className="text-sm text-gray-500 mt-3">
                  📅 {notice.date || "No date provided"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default StudentNotice;
