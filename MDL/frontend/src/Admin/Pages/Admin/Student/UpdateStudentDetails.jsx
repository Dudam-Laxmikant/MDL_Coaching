import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaUser,
  FaCity,
  FaFlag,
  FaMoneyBillWave,
  FaIdCard,
  FaCalendarAlt,
  FaEye,
  FaEdit,
} from "react-icons/fa";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Swal from "sweetalert2";
import axios from "axios";

function UpdateStudentDetails() {
  

  
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    dob: "",
    adharnumber: "",
    city: "",
    country: "",
    fee: "",
    passphoto: "",
  });
  const { studentId } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const handleReset = () => {
    setFormData({
      fname: "",
      mname: "",
      lname: "",
      dob: "",
      adharnumber: "",
      city: "",
      country: "",
      fee: "",
      passphoto: "",
    });
  };

  const updateStudentDetails = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/student/Updatestudentdetails/${studentId}`;

      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });

      //   Swal.fire({
      //     title: response.data.data,
      //     text: `Your notice has been successfully added for ${result.value}.`,
      //     icon: "success",
      //     confirmButtonText: "OK",
      //   });
    } catch (error) {
      console.log("Error for update:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [studentId]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/student/showprofile/${studentId}`
      );
      console.log("Notice by id :: ", response.data.data);
      setFormData(response.data.data);
    } catch (error) {
      console.log("Not Found Error", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#454649] text-white">
      <Header />
      <div className="flex flex-1 p-6 mt-20">
        <div className="flex-1 bg-gray-800 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
            Update Student Details
          </h2>
          <form
            onSubmit={updateStudentDetails}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="col-span-1 md:col-span-2">
              <label className="text-yellow-200 font-medium mb-1">
                Student ID: {formData.s_id}
              </label>
            </div>
            {[
              {
                label: "First Name",
                name: "fname",
                icon: <FaUser className="text-blue-400" />,
                type: "text",
                placeholder: "Enter Surname",
              },
              {
                label: "Middle Name",
                name: "mname",
                icon: <FaUser className="text-green-400" />,
                type: "text",
                placeholder: "Enter Name",
              },
              {
                label: "Last Name",
                name: "lname",
                icon: <FaUser className="text-red-400" />,
                type: "text",
                placeholder: "Enter Father's Name",
              },
              {
                label: "Date of Birth",
                name: "dob",
                icon: <FaCalendarAlt className="text-yellow-400" />,
                type: "date",
                placeholder: "Select Date of Birth",
              },
              {
                label: "Aadhar Number",
                name: "adharnumber",
                icon: <FaIdCard className="text-purple-400" />,
                type: "number",
                placeholder: "Enter Aadhar Number",
              },
              {
                label: "City",
                name: "city",
                icon: <FaCity className="text-orange-400" />,
                type: "text",
                placeholder: "Enter City",
              },
              {
                label: "Country",
                name: "country",
                icon: <FaFlag className="text-pink-400" />,
                type: "text",
                placeholder: "Enter Country",
              },
              {
                label: "Fee Amount",
                name: "fee",
                icon: <FaMoneyBillWave className="text-teal-400" />,
                type: "text",
                placeholder: "Enter Fee Amount",
              },
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-gray-300 font-medium mb-1">
                  {field.label}
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3">{field.icon}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full pl-12 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              </div>
            ))}

            <div style={{ textAlign: "center" }}>
              <img
                src={`http://localhost:8080/images/${formData.passphoto}`}
                alt="Profile"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <br />
              <input
                type="file"
                accept="image/*"
                // onChange={handleImageChange}
              />
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
              >
                Reset
              </button>
            </div>
          </form>
          <Link
            to={"/addstudents"}
            className="block text-center mt-4 text-blue-400 hover:underline"
          >
            Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateStudentDetails;
