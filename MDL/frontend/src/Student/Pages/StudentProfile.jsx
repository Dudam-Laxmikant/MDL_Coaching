// import React, { useState } from "react";
// import { FaArrowLeft, FaUserCircle, FaEdit, FaEye, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity, FaSignOutAlt, FaUser } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../Footer";
// import Swal from "sweetalert2";

// const StudentProfile = ({ profileImage }) => {
//     const [image, setImage] = useState(profileImage || "https://via.placeholder.com/150");
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setImage(imageUrl);
//         }
//     };

//     const handleLogout = (e) => {
//         e.preventDefault();
//         Swal.fire({
//             title: "Are you sure you want to logout?",
//             text: "You will be logged out of your account!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Logout",
//             cancelButtonText: "Cancel"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.href = "/";
//             }
//         });
//     };

//     return (
//         <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 text-white">
//             {/* Header */}
//             <header className="bg-black text-white py-4 px-6 grid grid-cols-3 items-center shadow-md fixed top-0 left-0 w-full z-50">
//                 {/* Back Button */}
//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="p-2 bg-white text-blue-500 rounded-full shadow-md hover:bg-gray-200 transition flex items-center justify-center w-10 h-10"
//                 >
//                     <FaArrowLeft className="text-xl" />
//                 </button>

//                 {/* Title */}
//                 <h1 className="text-xl font-bold text-center">Student Profile</h1>

//                 {/* Profile Image with Dropdown */}
//                 <div className="relative flex justify-end">
//                     <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
//                         {profileImage ? (
//                             <img
//                                 src={profileImage}
//                                 alt="Profile"
//                                 className="h-10 w-10 rounded-full border-2 border-white object-cover cursor-pointer"
//                             />
//                         ) : (
//                             <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-gray-200 transition" />
//                         )}
//                     </button>

//                     {dropdownOpen && (
//                         <div className="absolute top-full right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md">
//                             <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-gray-200">
//                                 <FaUser className="mr-2" /> Profile
//                             </Link>
//                             <button onClick={handleLogout} className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-200">
//                                 <FaSignOutAlt className="mr-2" /> Logout
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </header>

//             {/* Main Content */}
//             <div className="flex-grow flex items-center justify-center pt-20 px-6">
//                 <div className="bg-white text-gray-900 shadow-xl rounded-2xl w-96 p-10 border-4 border-indigo-500 text-center">
//                     {/* Profile Image Section */}
//                     <div className="relative w-36 h-36 mx-auto border-4 border-indigo-500 rounded-lg overflow-hidden shadow-lg cursor-pointer">
//                         <img className="w-full h-full object-cover" src={image} alt="Student" />
//                         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition space-x-3">
//                             <FaEye className="text-white text-2xl cursor-pointer" title="View" />
//                             <label htmlFor="imageUpload">
//                                 <FaEdit className="text-white text-2xl cursor-pointer" title="Change" />
//                             </label>
//                         </div>
//                     </div>
//                     <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

//                     {/* Student Details */}
//                     <div className="mt-4">
//                         <h2 className="text-2xl font-bold text-indigo-700">John Doe</h2>
//                         <p className="text-indigo-600 font-semibold text-lg">🆔 Student ID: 123456789</p>
//                     </div>

//                     {/* Student Info */}
//                     <div className="mt-4 border-t border-gray-300 pt-4 space-y-3 text-left">
//                         <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> john.doe@example.com</p>
//                         <p className="text-gray-700 flex items-center"><FaPhone className="mr-2" /> +123 456 7890</p>
//                         <p className="text-gray-700 flex items-center"><FaMapMarkerAlt className="mr-2" /> 123 Street, City, State</p>
//                         <p className="text-gray-700 flex items-center"><FaUniversity className="mr-2" /> XYZ Institute</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default StudentProfile;
import React, { useState } from "react";
import { FaArrowLeft, FaUserCircle, FaEdit, FaEye, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity, FaSignOutAlt, FaUser, FaBirthdayCake, FaIdCard, FaRupeeSign, FaSchool } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Swal from "sweetalert2";

const StudentProfile = ({ profileImage }) => {
    const [image, setImage] = useState(profileImage || "https://via.placeholder.com/150");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleLogout = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure you want to logout?",
            text: "You will be logged out of your account!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/";
            }
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 text-white">
            <header className="bg-black text-white py-4 px-6 grid grid-cols-3 items-center shadow-md fixed top-0 left-0 w-full z-50">
                <button onClick={() => navigate(-1)} className="p-2 bg-white text-blue-500 rounded-full shadow-md hover:bg-gray-200 transition flex items-center justify-center w-10 h-10">
                    <FaArrowLeft className="text-xl" />
                </button>
                <h1 className="text-xl font-bold text-center">Student Profile</h1>
                <div className="relative flex justify-end">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className="h-10 w-10 rounded-full border-2 border-white object-cover cursor-pointer" />
                        ) : (
                            <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-gray-200 transition" />
                        )}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md">
                            <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-gray-200">
                                <FaUser className="mr-2" /> Profile
                            </Link>
                            <button onClick={handleLogout} className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-200">
                                <FaSignOutAlt className="mr-2" /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <div className="flex-grow flex items-center justify-center pt-20 px-6 m-3">
                <div className="bg-white text-gray-900 shadow-xl rounded-2xl w-full max-w-4xl p-10 border-4 border-indigo-500 text-center">
                    <div className="relative w-36 h-36 mx-auto border-4 border-indigo-500 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                        <img className="w-full h-full object-cover" src={image} alt="Student" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition space-x-3">
                            <FaEye className="text-white text-2xl cursor-pointer" title="View" />
                            <label htmlFor="imageUpload">
                                <FaEdit className="text-white text-2xl cursor-pointer" title="Change" />
                            </label>
                        </div>
                    </div>
                    <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

                    <div className="mt-4">
                        <h2 className="text-2xl font-bold text-indigo-700">John Doe</h2>
                        <p className="text-indigo-600 font-semibold text-lg">🆔 Student ID: 123456789</p>
                    </div>

                    <div className="mt-4 border-t border-gray-300 pt-4 grid grid-cols-2 gap-6 text-left">
                        <p className="text-gray-700 flex items-center"><FaBirthdayCake className="mr-2" /> DOB: 01 Jan 2000</p>
                        <p className="text-gray-700 flex items-center"><FaIdCard className="mr-2" /> Aadhaar: 1234-5678-9012</p>
                        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> john.doe@example.com</p>
                        <p className="text-gray-700 flex items-center"><FaPhone className="mr-2" /> +123 456 7890</p>
                        <p className="text-gray-700 flex items-center"><FaMapMarkerAlt className="mr-2" /> City: New York</p>
                        <p className="text-gray-700 flex items-center"><FaMapMarkerAlt className="mr-2" /> Country: USA</p>
                        <p className="text-gray-700 flex items-center"><FaMapMarkerAlt className="mr-2" /> Address: 123 Street, NY</p>
                        <p className="text-gray-700 flex items-center"><FaUniversity className="mr-2" /> XYZ Institute</p>
                        <p className="text-gray-700 flex items-center"><FaRupeeSign className="mr-2" /> Fee: ₹50,000</p>
                        <p className="text-gray-700 flex items-center"><FaSchool className="mr-2" /> Class: 12th Grade</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StudentProfile;