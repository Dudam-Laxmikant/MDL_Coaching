import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCity, FaFlag, FaMoneyBillWave, FaIdCard, FaCalendarAlt } from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import Swal from 'sweetalert2';

function UpdateStudentDetails() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        fathersName: '',
        dob: '',
        aadharNumber: '',
        city: '',
        country: '',
        feeAmount: '',
        aadharPhoto: null,
        passportPhoto: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Success!',
            text: 'Student details updated successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            fathersName: '',
            dob: '',
            aadharNumber: '',
            city: '',
            country: '',
            feeAmount: '',
            aadharPhoto: null,
            passportPhoto: null
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#454649] text-white">
            <Header />
            <div className="flex flex-1 p-6 mt-20">
                <div className="flex-1 bg-gray-800 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Update Student Details</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1 md:col-span-2">
                            <label className="text-yellow-200 font-medium mb-1">Student ID: 1234</label>
                        </div>
                        {[
                            { label: "First Name", name: "firstName", icon: <FaUser className="text-blue-400" />, type: "text", placeholder: "Enter Surname" },
                            { label: "Middle Name", name: "MiddleName", icon: <FaUser className="text-green-400" />, type: "text", placeholder: "Enter Name" },
                            { label: "Last Name", name: "fathersName", icon: <FaUser className="text-red-400" />, type: "text", placeholder: "Enter Father's Name" },
                            { label: "Date of Birth", name: "dob", icon: <FaCalendarAlt className="text-yellow-400" />, type: "date", placeholder: "Select Date of Birth" },
                            { label: "Aadhar Number", name: "aadharNumber", icon: <FaIdCard className="text-purple-400" />, type: "number", placeholder: "Enter Aadhar Number" },
                            { label: "City", name: "city", icon: <FaCity className="text-orange-400" />, type: "text", placeholder: "Enter City" },
                            { label: "Country", name: "country", icon: <FaFlag className="text-pink-400" />, type: "text", placeholder: "Enter Country" },
                            { label: "Fee Amount", name: "feeAmount", icon: <FaMoneyBillWave className="text-teal-400" />, type: "text", placeholder: "Enter Fee Amount" }
                        ].map((field, index) => (
                            <div key={index} className="flex flex-col">
                                <label className="text-gray-300 font-medium mb-1">{field.label}</label>
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
                        <div className="flex flex-col">
                            <label className="text-gray-300 font-medium mb-1">Aadhar Photo</label>
                            <input type="file" name="aadharPhoto" onChange={handleFileChange} className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 file:bg-blue-500 file:text-white file:px-3 file:py-1 file:rounded-lg file:border-none file:cursor-pointer hover:file:bg-blue-600 transition" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-300 font-medium mb-1">Passport Photo</label>
                            <input type="file" name="passportPhoto" onChange={handleFileChange} className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 file:bg-blue-500 file:text-white file:px-3 file:py-1 file:rounded-lg file:border-none file:cursor-pointer hover:file:bg-blue-600 transition" />
                        </div>
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">Update</button>
                            <button type="button" onClick={handleReset} className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition">Reset</button>
                        </div>
                    </form>
                    <Link to={'/addstudents'} className="block text-center mt-4 text-blue-400 hover:underline">Go Back</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UpdateStudentDetails;
