import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiHash,
  FiBook,
  FiCreditCard,
  FiHome,
  FiCamera,
  FiAward,
  FiPhoneCall,
} from "react-icons/fi";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";

function UpdateTeacherDetails() {
  const { teacherid } = useParams();
  const [formData, setFormData] = useState({
    t_id: "",
    s_name: "",
    name: "",
    lname: "",
    email: "",
    mobilenumber: "",
    aadhaarNumber: "",
    dob: "",
    qualification: "",
    course: "",
    address: "",
    subject: "",
    photo: null,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function resetForm() {
    setFormData({
      t_id: "",
      s_name: "",
      name: "",
      lname: "",
      email: "",
      mobilenumber: "",
      aadhaarNumber: "",
      dob: "",
      qualification: "",
      course: "",
      address: "",
      subject: "",
      photo: null,
    });
  }
  const fieldOrder = [
    "s_name",
    "name",
    "lname",
    "email",
    "mobilenumber",
    "aadhaarNumber",
    "dob",
    "qualification",
    "course",
  ];

  const icons = {
    s_name: (
      <FiUser className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    name: (
      <FiUser className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    lname: (
      <FiUser className="absolute left-1 top-10 w-5 h-5 size transform  text-yellow-400" />
    ),
    email: (
      <FiMail className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    mobilenumber: (
      <FiPhoneCall className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    dob: (
      <FiCalendar className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    qualification: (
      <FiAward className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    course: (
      <FiBook className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ), // Fixed alignment

    address: (
      <FiHome className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),

    subject: (
      <FiBook className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
    photo: (
      <FiCamera className="absolute left-1 top-10 w-5 h-5 transform  text-yellow-400" />
    ),
  };
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
 
  useEffect(() => {
    fetchdata();
  }, [teacherid]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/teacher/displaydata/${teacherid}`
      );
      console.log("Teacher by id :: ", response.data.data);
      setFormData(response.data.data);
    } catch (error) {
      console.log("Not Found Error", error);
    }
  };
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    getsubject();
  }, [teacherid]);
  const handlesubjectChange = (event) => {
    const selectedValue = JSON.parse(event.target.value);
    setFormData({
      ...formData,
      subject: selectedValue.name,
      subject_Id: selectedValue.id,
    });
  };

  const getsubject = async () => {
    try {
      const res = await axios.get("http://localhost:8080/subject/getsubjects");
      console.log(res.data);
      setSubjects(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  //update
  const updateTeachertDetails = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/teacher/UpdateTeacherdetails/${teacherid}`;

      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Error for update:", error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r bg-[#454649]">
      <Header />
      <div className="flex flex-1 p-4 sm:p-6 md:p-10 bg-[#454649] min-h-screen">
        <div className="w-full max-w-4xl mx-auto bg-transparent p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 sm:mb-6 text-center">
            Update Teacher Details
          </h1>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full shadow-md overflow-hidden flex items-center justify-center border-2 border-green-500">
                {preview ? (
                  <img
                    src={preview}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-xs sm:text-sm">
                    No Image
                  </span>
                )}
                <label
                  htmlFor="fileInput"
                  className="absolute bottom-1 right-1 bg-gray-800 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white cursor-pointer shadow"
                >
                  <FaCamera className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </label>
              </div>
              {/* Hidden File Input */}
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <form className="space-y-5">
            {/* Teacher ID */}
            <div className="flex flex-col sm:flex-row justify-center items-center bg-gray-700 px-4 py-3 rounded-lg">
              <FiHash className="text-gray-400 mr-2" size={20} />
              <span className="text-lg font-semibold text-gray-100">
                Teacher ID:{" "}
                <span className="text-yellow-400">{formData.t_id}</span>
              </span>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {fieldOrder
                .filter(
                  (key) =>
                    formData[key] &&
                    !["photo", "t_id", "address", "subject"].includes(key)
                )
                .map((key) => (
                  <div key={key} className="relative">
                    <label className="text-gray-300 block mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      {icons[key]}
                    </div>
                    <input
                      type={
                        key === "email"
                          ? "email"
                          : key === "dob"
                          ? "date"
                          : "text"
                      }
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                      className="w-full pl-12 p-3 border border-gray-500 rounded-lg bg-[#454649] text-white focus:ring-2 focus:ring-blue-400 transition duration-200"
                    />
                  </div>
                ))}

              {/* Address Field */}
              <div className="relative col-span-1 sm:col-span-2">
                <label className="text-gray-300 block mb-1">Address</label>
                <div className="absolute inset-y-0 left-3 flex items-center">
                  {icons.address}
                </div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full pl-12 p-3 border border-gray-500 rounded-lg bg-[#454649] text-white focus:ring-2 focus:ring-blue-400 transition duration-200"
                  rows="3"
                ></textarea>
              </div>

              {/* Subject Dropdown */}
              <div className="relative">
                <label className="text-gray-300 block mb-1">Subject</label>
                <div className="absolute inset-y-0 left-3 flex items-center">
                  {icons.subject}
                </div>
                <select
                  name="subject"
                  onChange={handlesubjectChange}
                  className="w-full pl-12 p-3 border border-gray-500 rounded-lg bg-[#454649] text-white focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">-- Select Class --</option>
                  {subjects.map((sub, index) => (
                    <option
                      value={JSON.stringify({
                        id: sub._id,
                        name: sub.subjectName,
                      })}
                      key={index}
                    >
                      {sub.subjectName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Photo Upload */}
              <div className="relative col-span-1 sm:col-span-2">
                <label className="text-gray-300 block mb-1">Photo</label>
                <div className="absolute inset-y-0 left-3 flex items-center">
                  {icons.photo}
                </div>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className="w-full pl-12 p-3 border border-gray-500 rounded-lg bg-[#454649] text-white focus:ring-2 focus:ring-blue-400 transition duration-200"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={updateTeachertDetails}
              >
                Update
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default UpdateTeacherDetails;
