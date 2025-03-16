import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiEye } from "react-icons/fi";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

function AddClasses() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content Container */}
                <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14 justify-center items-center">
                    <div className="bg-transparent p-10 w-full max-w-3xl flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-white mb-6">Manage Classes</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {/* Add Class */}
                            <Link
                                to="/addclasses/class"
                                className="flex flex-col items-center justify-center text-center bg-yellow-700 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[180px] h-[180px] sm:max-w-[200px] sm:h-[200px] hover:bg-yellow-800 transition duration-300 transform hover:scale-105"
                            >
                                <FiPlusCircle className="text-white text-4xl sm:text-5xl transition duration-300 transform hover:rotate-180" />
                                <span className="text-white text-lg sm:text-xl font-semibold mt-3">
                                    Add Class
                                </span>
                            </Link>


                            {/* Show Class */}
                            <Link
                                to="/addclasses/showclasses"
                                className="flex flex-col items-center justify-center text-center bg-green-700 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[180px] h-[180px] sm:max-w-[200px] sm:h-[200px] hover:bg-green-800 transition duration-300 transform hover:scale-105 "
                            >
                                <FiEye className="text-white text-4xl sm:text-5xl transition duration-300 transform hover:rotate-180" />
                                <span className="text-white text-lg sm:text-xl font-semibold mt-3">
                                    Show Class
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default AddClasses;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiPlusCircle, FiEye } from "react-icons/fi";
// import Header from "../Home/Header";
// import Footer from "../Home/Footer";

// function AddClasses() {
//     const [state, setState] = useState({ classes: [], className: "" }); // State to store classes and input value

//     const handleAddClass = () => {
//         if (state.className.trim()) {
//             setState({
//                 ...state,
//                 classes: [...state.classes, state.className],
//                 className: ""
//             });
//         }
//     };

//     return (
//         <>
//             <div className="flex flex-col min-h-screen">
//                 {/* Header */}
//                 <Header />

//                 {/* Main Content Container */}
//                 <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14 justify-center items-center">
//                     <div className="bg-transparent p-10 w-full max-w-3xl flex flex-col items-center">
//                         <h1 className="text-2xl font-bold text-white mb-6">Manage Classes</h1>

//                         <input 
//                             type="text" 
//                             value={state.className} 
//                             onChange={(e) => setState({ ...state, className: e.target.value })} 
//                             placeholder="Enter class name" 
//                             className="p-2 rounded mb-4 w-full max-w-md"
//                         />
//                         <button 
//                             onClick={handleAddClass} 
//                             className="bg-blue-500 text-white p-2 rounded mb-6 hover:bg-blue-700 transition"
//                         >
//                             Add Class
//                         </button>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//                             {/* Add Class */}
//                             <Link
//                                 to="/addclasses/class"
//                                 className="flex flex-col items-center justify-center text-center bg-yellow-700 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[180px] h-[180px] sm:max-w-[200px] sm:h-[200px] hover:bg-yellow-800 transition duration-300 transform hover:scale-105"
//                             >
//                                 <FiPlusCircle className="text-white text-4xl sm:text-5xl transition duration-300 transform hover:rotate-180" />
//                                 <span className="text-white text-lg sm:text-xl font-semibold mt-3">
//                                     Add Class
//                                 </span>
//                             </Link>

//                             {/* Show Class */}
//                             <Link
//                                 to="/addclasses/showclasses"
//                                 className="flex flex-col items-center justify-center text-center bg-green-700 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[180px] h-[180px] sm:max-w-[200px] sm:h-[200px] hover:bg-green-800 transition duration-300 transform hover:scale-105 "
//                             >
//                                 <FiEye className="text-white text-4xl sm:text-5xl transition duration-300 transform hover:rotate-180" />
//                                 <span className="text-white text-lg sm:text-xl font-semibold mt-3">
//                                     Show Class ({state.classes.length})
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default AddClasses;
