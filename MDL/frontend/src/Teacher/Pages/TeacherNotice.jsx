import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TeacherNotice = () => {
  const todayDate = new Date().toISOString().split("T")[0];

  const [notices, setNotices] = useState([
    { id: 1, date: todayDate, text: "Meeting at 10 AM in Room 301." },
    { id: 2, date: "2025-03-02", text: "Submit assignm ents before 5 PM." },
    { id: 3, date: "2025-03-01", text: "Holiday notice for March 1st." },
  ]);

  const [newNotice, setNewNotice] = useState();

  // const [noticedescription, setNoticedescription] = useState({noticedescription: ""});
  console.log(newNotice);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/t_notice/teachernotice";

      const response = await axios.post(
        url,
        { noticedescription: newNotice },
        {
          headers: {
            "Content-Type": "application/json", // Fixed typo here
          },
        }
      );
      console.log(response);

      const { message, success, error } = await response.data;
      const navigate = useNavigate();
      if (success) {
        toast.success(message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/teacherNotice");
        }, 1000);
      } else if (error) {
        console.log(error);
        const details = error?.details[0].message;
        toast.error(details, {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.error(message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  

  // Add a new notice (Always today's date)
  // const addNotice = () => {
  //   if (!newNotice.trim()) {
  //     Swal.fire("Error", "Please enter notice text!", "error");
  //     return;
  //   }

  //   const newEntry = {
  //     id: notices.length + 1,
  //     date: todayDate,
  //     text: newNotice,
  //   };

  //   setNotices([newEntry, ...notices]); // Adds new notice at the top
  //   setNewNotice("");
  //   Swal.fire("Added!", "Notice added successfully.", "success");
  // };

  // // Update a notice (Only for today's notices)
  // const updateNotice = (id) => {
  //   const noticeText = notices.find((n) => n.id === id).text;

  //   Swal.fire({
  //     title: "Edit Notice",
  //     input: "text",
  //     inputValue: noticeText,
  //     showCancelButton: true,
  //     confirmButtonText: "Update",
  //   }).then((result) => {
  //     if (result.isConfirmed && result.value.trim()) {
  //       setNotices(
  //         notices.map((n) =>
  //           n.id === id ? { ...n, text: result.value } : n
  //         )
  //       );
  //       Swal.fire("Updated!", "Notice updated successfully.", "success");
  //     }
  //   });
  // };

  // // Delete a notice (Only for today's notices)
  // const deleteNotice = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //     cancelButtonText: "Cancel",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setNotices(notices.filter((n) => n.id !== id));
  //       Swal.fire("Deleted!", "Your notice has been deleted.", "success");
  //     }
  //   });
  // };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        {/* <Sidebar /> */}

        {/* Main Content */}
        <div className="flex-1 p-10 h-screen overflow-auto">
          <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
            📌 Notices
          </h1>
          <div className="flex items-center gap-4 p-4">
      <input
        type="text"
        placeholder="Enter notice title..."
        className="border p-2 rounded-md w-60"
      />
      <select className="border p-2 rounded-md">
        <option value="">Select Class</option>
        <option value="General">fiveth</option>
        <option value="Homework">nineth</option>
        <option value="Holiday">Tenth</option>
      </select>
      <input type="date" className="border p-2 rounded-md" />
    </div>

          {/* Add Notice Section */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              name="noticedescription"
              className="border p-2 flex-1 rounded-md"
              placeholder="Enter new notice..."
              // value={newNotice}
              onChange={(e) => setNewNotice(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
              // onClick={addNotice}
              onClick={handleClick}
            >
              <FaPlus /> Add
            </button>
          </div>
         
          {/* Notice List */}
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`p-4 rounded-md shadow-md flex justify-between items-center ${
                  notice.date === todayDate
                    ? "bg-green-100 border-green-400"
                    : "border-gray-300"
                } border`}
              >
                <div>
                  <p className="text-gray-500 text-sm">
                    {notice.date === todayDate ? "Today" : notice.date}
                  </p>
                  
                  <p className="text-lg">{setNewNotice.noticedescription }</p>
                </div>
                {notice.date === todayDate && (
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                      onClick={() => updateNotice(notice.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                      onClick={() => deleteNotice(notice.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                )}
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

export default TeacherNotice;
