// import React, { useEffect, useState } from "react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaPhone,
//   FaCamera,
//   FaUniversity,
//   FaCalendar,
// } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";

// const AdminRegistration = () => {
//   const [formData, setFormData] = useState({
//     fname: "",
//     mname: "",
//     lname: "",
//     dob: "",
//     email: "",
//     password: "",
//     mobileNumber: "",
//     image: null
//   });

//   const navigate = useNavigate()

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   // Signup in database for using api
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formdata = new FormData()
//     formdata.append("fname",formData.fname)
//     formdata.append("mname",formData.mname)
//     formdata.append("lname",formData.lname)
//     formdata.append("dob",formData.dob)
//     formdata.append("email",formData.email)
//     formdata.append("mobileNumber",formData.mobileNumber)
//     formdata.append("password",formData.password)
//     formdata.append("image",formData.image)

//     try {
//       const url = "http://localhost:8080/admin/signup";

//       const response = await axios.post(url, formdata, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//         console.log("this is the response data::: " + response.data);
//         const { message, success, error } = await response.data;

//         if (success) {
//           toast.success(message, {
//             position: "top-center",
//             autoClose: 2000,
//           });
//           setTimeout(() => {
//             navigate("/adminlogin");
//           }, 1000);
//         } else if (error) {
//           console.log(error);
//           const details = error?.details[0].message;
//           toast.error(details, {
//             position: "top-center",
//             autoClose: 2000,
//           });
//         } else {
//           toast.error(message, {
//             position: "top-center",
//             autoClose: 2000,
//           });
//         }
//     } catch (error) {
//       toast.error(error, {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full p-6 bg-[#454649] shadow-xl rounded-lg text-white">
//         <h2 className="text-3xl font-extrabold mb-6 text-center">
//           Admin Registration
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           {[
//             { name: "fname", placeholder: "First Name", icon: <FaUser /> },
//             { name: "mname", placeholder: "Middle Name", icon: <FaUser /> },
//             { name: "lname", placeholder: "Last Name", icon: <FaUser /> },
//             { name: "dob", type: "date", icon: <FaCalendar /> },
//             {
//               name: "email",
//               type: "email",
//               placeholder: "Email",
//               icon: <FaEnvelope />,
//             },
//             {
//               name: "password",
//               type: "password",
//               placeholder: "Password",
//               icon: <FaLock />,
//             },
//             {
//               name: "mobileNumber",
//               type: "tel",
//               placeholder: "Mobile Number",
//               icon: <FaPhone />,
//             },
//           ].map(({ name, type = "text", placeholder, icon }) => (
//             <div
//               key={name}
//               className="flex items-center border-2 border-white p-3 rounded-lg bg-[#454649]"
//             >
//               <span className="text-white mr-3 text-xl">{icon}</span>
//               <input
//                 className="w-full bg-transparent placeholder-gray-400 text-white outline-none focus:text-white autofill:bg-transparent border-none"
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//                 onChange={handleChange}
//                 required
//                 autoComplete="off"
//                 style={{ backgroundColor: "transparent" }}
//               />
//             </div>
//           ))}
//           <div className="col-span-1 md:col-span-2 flex items-center border-2 border-white p-3 rounded-lg bg-[#454649]">
//             <FaCamera className="text-white mr-3 text-xl" />
//             <input
//               className="w-full text-white outline-none border-none"
//               name="image"
//               type="file"
//               accept="image/*"
//               onChange={handleChange}
//               required
//               style={{ backgroundColor: "transparent" }}
//             />
//           </div>
//           <div className="col-span-1 md:col-span-2">
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="bg-yellow-400 text-black w-full p-3 rounded-lg font-bold hover:bg-yellow-300 transition"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="text-center mt-4">
//           <p className="text-white">
//             Already have an account?{" "}
//             <Link
//               to="/adminlogin"
//               className="text-yellow-400 font-bold hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminRegistration;
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCamera,
  FaCalendar,
} from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    dob: "",
    email: "",
    password: "",
    mobileNumber: "",
    image: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const { fname, mname, lname, dob, email, password, mobileNumber, image } = formData;
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    
    if (!fname) {
      toast.error("First name is required and should contain only letters.");
      return false;
    }
    if (!nameRegex.test(fname)) {
      toast.error("First name should contain only letters.");
      return false;
    }
    if (!mname) {
      toast.error("Middle name is required and should contain only letters.");
      return false;
    }
    if (!nameRegex.test(mname)) {
      toast.error("Middle name should contain only letters.");
      return false;
    }
    if (!lname) {
      toast.error("Last name is required and should contain only letters.");
      return false;
    }
    if (!nameRegex.test(lname)) {
      toast.error("Last name should contain only letters.");
      return false;
    }
    if (!dob || !email || !password || !mobileNumber || !image) {
      toast.error("All fields are required!");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!phoneRegex.test(mobileNumber)) {
      toast.error("Invalid mobile number (must be 10 digits)");
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one number");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formdata = new FormData();
    Object.keys(formData).forEach((key) => {
      formdata.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:8080/admin/signup", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { message, success, error } = response.data;

      if (success) {
        toast.success(message, { autoClose: 2000 });
        setTimeout(() => navigate("/adminlogin"), 1000);
      } else {
        toast.error(error?.details?.[0]?.message || message, { autoClose: 2000 });
      }
    } catch (error) {
      toast.error("Server error! Please try again later.", { autoClose: 2000 });
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full p-6 bg-[#454649] shadow-xl rounded-lg text-white">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Admin Registration</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["fname", "mname", "lname", "dob", "email", "password", "mobileNumber"].map((name) => (
            <div key={name} className="flex items-center border-2 border-white p-3 rounded-lg bg-[#454649]">
              <span className="text-white mr-3 text-xl">
                {name === "email" ? <FaEnvelope /> : name === "password" ? <FaLock /> : name === "dob" ? <FaCalendar /> : name === "mobileNumber" ? <FaPhone /> : <FaUser />}
              </span>
              <input
                className="w-full bg-transparent placeholder-gray-400 text-white outline-none"
                name={name}
                type={name === "dob" ? "date" : name === "password" ? "password" : "text"}
                placeholder={name.charAt(0).toUpperCase() + name.slice(1).replace("Number", " Number")}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="col-span-1 md:col-span-2 flex items-center border-2 border-white p-3 rounded-lg bg-[#454649]">
            <FaCamera className="text-white mr-3 text-xl" />
            <input className="w-full text-white outline-none" name="image" type="file" accept="image/*" onChange={handleChange} required />
          </div>
          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="bg-yellow-400 text-black w-full p-3 rounded-lg font-bold hover:bg-yellow-300 transition">Register</button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-white">Already have an account? <Link to="/adminlogin" className="text-yellow-400 font-bold hover:underline">Login</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminRegistration;