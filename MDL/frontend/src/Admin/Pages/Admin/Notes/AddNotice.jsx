import React, { useState } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';

export const AddNotice = () => {
    const [fordata, setforData] = useState({
        title: '',
        date: '',
        description: '',
        name: ''
    });
    

    // const handleSubmit = () => {
    //     Swal.fire({
    //         title: 'Select Option',
    //         input: 'select',
    //         inputOptions: { 
    //             Student: 'Student',
    //             Teacher: 'Teacher',
    //             Mix: 'Both'
    //         },
    //         inputPlaceholder: 'Select one',
    //         showCancelButton: true,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire({
    //                 title: 'Notice Added!',
    //                 text: `Your notice has been successfully added for ${result.value}.`,
    //                 icon: 'success',
    //                 confirmButtonText: 'OK'
    //             });
    //         }
    //     });
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const url = "http://localhost:8080/notice";
    
          const response = await axios.post(url,fordata, {
            headers: {
              "Content-Type": "form-data",
            },
          });
    
            console.log("this is the response data::: " + response.data);
            const { message, success, error } = await response.data;
    
            // if (success) {
            //   toast.success(message, {
            //     position: "top-center",
            //     autoClose: 2000,
            //   });
            //   setTimeout(() => {
            //     navigate("/showclassTeacher/showallteacherlist");
            //   }, 1000);
            // } else if (error) {
            //   console.log(error);
            //   const details = error?.details[0].message;
            //   toast.error(details, {
            //     position: "top-center",
            //     autoClose: 2000,
            //   });
            // } else {
            //   toast.error(message, {
            //     position: "top-center",
            //     autoClose: 2000,
            //   });
            // }
        } catch (error) {
          toast.error(error, {
            position: "top-center",
            autoClose: 2000,
          });
        }
      };

    return (
        <div className="flex flex-col min-h-screen bg-[#454649]">
            <Header />

            <div className="flex flex-1 p-4 sm:p-10 md:p-16 lg:p-20 w-full bg-[#454649] mt-10">
                <div className="w-full max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-lg border border-gray-200">
                    <div className="mb-6 flex flex-col items-center">
                        <input 
                            type="text" 
                            className="text-3xl font-bold text-indigo-700 border-gray-300 outline-none w-full text-center" 
                            placeholder="Enter Title" 
                            name="title"
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="w-full flex justify-end">
                        <input 
                            type="date" 
                            className="text-gray-600 border-b border-gray-300 outline-none" 
                            value={date} 
                            name="date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <br />
                    
                    <ReactQuill
                        className="bg-white"
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        placeholder="Write the notice content here..."
                    />
                    
                    <div className="mt-8 border-t pt-4 text-right">
                        <input 
                            type="text" 
                            className="text-lg font-semibold text-gray-800 border-b border-gray-300 outline-none" 
                            placeholder="Principal's Name" 
                            value={signatureName} 
                            name="name"
                            onChange={(e) => setSignatureName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="text-gray-700 font-medium border-b border-gray-300 outline-none mt-2" 
                            placeholder="Designation" 
                            name="description"
                            value={signatureDesignation} 
                            onChange={(e) => setSignatureDesignation(e.target.value)}
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <button 
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                            onClick={handleSubmit}
                        >
                            Add Notice
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddNotice;