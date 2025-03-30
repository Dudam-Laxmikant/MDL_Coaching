// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../Home/Header";
// import Footer from "../Home/Footer";

// function Classes() {
//     const navigate = useNavigate();
//     const [isFocused, setIsFocused] = useState(false);
//     const [inputValue, setInputValue] = useState("");
//     const [cookiesAccepted, setCookiesAccepted] = useState(false);
//     // Function to handle the "Create" button click
//     const handleClick = () => {
//         alert("Class added successfully!");
//         navigate("/addclasses"); // Proper navigation to the Add Classes page
//     };

//     return (
//         <>
//             <div className="flex flex-col min-h-screen">
//                 {/* Header */}
//                 <Header />

//                 {/* Main Content */}
//                 <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14 justify-center items-center mt-10">
//                     <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//                         <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
//                             Add a New Class
//                         </h1>

//                         {/* Image Display */}
//                         <div className="flex justify-center mb-6">
//                             <img
//                                 src="https://media.istockphoto.com/id/1457355344/video/animated-spanish-language-lesson.jpg?s=640x640&k=20&c=ZkQUk7638k3G__1ApQ3zWQ7DVHi2gi5k-yg2WapJFhA="
//                                 alt="Add Class"
//                                 className="w-full h-56 object-cover rounded-lg shadow-md"
//                             />
//                         </div>

//                         {/* Class Name Input with Floating Label */}
//                         <div className="relative mb-6">
//                             <input
//                                 type="text"
//                                 id="className"
//                                 value={inputValue}
//                                 onChange={(e) => setInputValue(e.target.value)}
//                                 onFocus={() => setIsFocused(true)}
//                                 onBlur={() => setIsFocused(inputValue !== "")}
//                                 // className="w-full px-3 pt-4 pb-2 border border-gray-300 bg-white rounded-lg shadow-sm transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:scale-105 peer"
//                                 className={`w-full px-3 pt-4 pb-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:scale-105 peer ${cookiesAccepted ? "bg-white" : "bg-black text-white"
//                                     }`}

//                             />

//                             <label
//                                 htmlFor="className"
//                                 className={`absolute left-3 text-white transition-all duration-300 bg-black px-1 ${isFocused || inputValue
//                                     ? "top-0 transform -translate-y-1/2 text-sm text-blue-500"
//                                     : "top-1/2 transform -translate-y-1/2 text-base text-gray-500"
//                                     }`}

//                             >
//                                 Class Name
//                             </label>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex flex-col gap-4">
//                             <button
//                                 onClick={handleClick}
//                                 className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
//                             >
//                                 Create
//                             </button>
//                             <Link
//                                 to="/addclasses"
//                                 className="w-full text-center bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
//                             >
//                                 Go Back
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

// export default Classes;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import axios from "axios";
import { toast } from "react-toastify";

function Classes() {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
const handleClick = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/class/addclass";

      const response = await axios.post(url, { "className": inputValue }, {
        headers: {
          "Content-Type": "application/json", // Fixed typo here
        },
      });
      console.log(response);
      const { message, success, error } = await response.data;
      if (success) {
        toast.success(message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/addclasses/showclasses");
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

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 bg-[#454649] p-5 sm:p-7 md:p-14 justify-center items-center mt-10 min-h-screen">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
              Add a New Class
            </h1>

            {/* Image Display */}
            <div className="flex justify-center mb-6">
              <img
                src="https://media.istockphoto.com/id/1457355344/video/animated-spanish-language-lesson.jpg?s=640x640&k=20&c=ZkQUk7638k3G__1ApQ3zWQ7DVHi2gi5k-yg2WapJFhA="
                alt="Add Class"
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Class Name Input with Floating Label */}
            <div className="relative mb-6">
           
              <input
                type="text"
                id="className"
                value={inputValue} // Correct binding
                onChange={(e) => setInputValue(e.target.value)} // Update state when the user types
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(inputValue !== "")}
                className={`w-full px-3 pt-4 pb-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:scale-105 peer ${
                  cookiesAccepted ? "bg-white" : "bg-black text-white"
                }`}
              />

              <label
                htmlFor="className"
                className={`absolute left-3 text-white transition-all duration-300 bg-black px-1 ${
                  isFocused || inputValue
                    ? "top-0 transform -translate-y-1/2 text-sm text-blue-500"
                    : "top-1/2 transform -translate-y-1/2 text-base text-gray-500"
                }`}
              >
                Class Name
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onClick={handleClick}
                className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Create
              </button>
              <Link
                to="/addclasses"
                className="w-full text-center bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
              >
                Go Back
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

export default Classes;
