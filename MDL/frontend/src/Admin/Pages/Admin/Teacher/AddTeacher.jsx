import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import {
  User,
  Mail,
  Calendar,
  Phone,
  MapPin,
  FileText,
  PlusCircle,
  Book,
  Heart,
} from "lucide-react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AddTeacher() {
  const [formData, setFormData] = useState({
    teacherId: "",
    surname: "",
    lastName: "",
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    address: "",
    qualification: "",
    course: "",
    subject: "",
    aadharNumber: "",
    photo: null,
    qualificationCertificate: null,
    aadharCard: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  function submit(e) {
    e.preventDefault();
    alert("Teacher Added Successfully");
  }

  function resetForm() {
    setFormData({
      teacherId: "",
      surname: "",
      lastName: "",
      name: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      address: "",
      qualification: "",
      course: "",
      subject: "",
      aadharNumber: "",
      photo: null,
      qualificationCertificate: null,
      aadharCard: null,
    });
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#454649] text-white">
        <Header />

        <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-24">
          <div className="max-w-5xl mx-auto bg-gray-800 p-10 rounded-lg shadow-md w-full">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400 text-center">
              Add Teacher
            </h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={submit}
            >
              {[
                { label: "Teacher ID", name: "teacherId", icon: <User /> },
                { label: "Surname", name: "surname", icon: <User /> },
                { label: "Name", name: "name", icon: <User /> },
                { label: "Last Name", name: "lastName", icon: <User /> },
                {
                  label: "Gender",
                  name: "gender",
                  icon: <Heart />,
                  type: "select",
                  options: ["Male", "Female", "Other"],
                },
                {
                  label: "Marital Status",
                  name: "maritalStatus",
                  icon: <Heart />,
                  type: "select",
                  options: ["Married", "Unmarried"],
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  icon: <Mail />,
                },
                {
                  label: "Mobile Number",
                  name: "mobile",
                  type: "number",
                  icon: <Phone />,
                },
                {
                  label: "Date of Birth",
                  name: "dob",
                  type: "date",
                  icon: <Calendar />,
                },
                {
                  label: "Qualification",
                  name: "qualification",
                  icon: <FileText />,
                },
                { label: "Course", name: "course", icon: <FileText /> },
                {
                  label: "Subjects",
                  name: "subject",
                  icon: <Book />,
                  type: "select",
                  options: [
                    "Mathematics",
                    "Science",
                    "English",
                    "History",
                    "Geography",
                  ],
                },
              ].map(({ label, name, type = "text", icon, options }) => (
                <div key={name}>
                  <label className="flex items-center gap-2 mb-2 font-medium">
                    <span className="w-6 h-6 text-yellow-400">{icon}</span>{" "}
                    {label}
                  </label>
                  {type === "select" ? (
                    <select
                      name={name}
                      className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select {label}</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={type}
                      name={name}
                      placeholder={`Enter ${label}`}
                      className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="flex items-center gap-2 mb-2 font-medium">
                  <MapPin className="w-6 h-6 text-yellow-400" /> Address
                </label>
                <textarea
                  name="address"
                  placeholder="Enter Address"
                  className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2 font-medium">
                  <FileText className="w-6 h-6 text-yellow-400" /> Aadhar Number
                </label>
                <input
                  type="text"
                  name="aadharNumber"
                  placeholder="Enter Aadhar Number"
                  className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2 font-medium">
                  <FaCamera className="w-6 h-6 text-yellow-400" /> Upload Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="w-full p-3 border rounded bg-gray-700 text-white focus:ring focus:ring-yellow-300"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-6 mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 w-full bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  onClick={resetForm}
                  className="px-8 py-3 w-full bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
<Link to="/showclassTeacher/showallteacherlist" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
          <AiOutlineArrowLeft size={24} />
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default AddTeacher;
