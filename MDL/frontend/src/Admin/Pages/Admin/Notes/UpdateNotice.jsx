import React, { useState } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
export const UpdateNotice = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [signatureName, setSignatureName] = useState('');
    const [signatureDesignation, setSignatureDesignation] = useState('');

    const handleSubmit = () => {
        Swal.fire({
            title: 'Notice Updated!',
            text: 'Your notice has been successfully updated.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#454649]">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-1 p-4 sm:p-10 md:p-16 lg:p-20 w-full mt-10">
                <div className="w-full max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-lg border border-gray-200">
                    {/* Title and Date */}
                    <div className="mb-6 flex flex-col items-center">
                        <input 
                            type="text" 
                            className="text-3xl font-bold text-indigo-700 border-gray-300 outline-none w-full text-center" 
                            placeholder="Enter Title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="w-full flex justify-end">
                        <input 
                            type="date" 
                            className="text-gray-600 border-b border-gray-300 outline-none" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <br />
                    {/* Notes Content */}
                    {/* Rich Text Editor for Notes */}
                    <ReactQuill
                        className="bg-white"
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        placeholder="Write the notice content here..."
                    />
                    
                    {/* Signature */}
                    <div className="mt-8 border-t pt-4 text-right">
                        <input 
                            type="text" 
                            className="text-lg font-semibold text-gray-800 border-b border-gray-300 outline-none" 
                            placeholder="Principal's Name" 
                            value={signatureName} 
                            onChange={(e) => setSignatureName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="text-gray-700 font-medium border-b border-gray-300 outline-none mt-2" 
                            placeholder="Designation" 
                            value={signatureDesignation} 
                            onChange={(e) => setSignatureDesignation(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button 
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handleSubmit}
                        >
                            Update Notice
                        </button>
                    </div>
                </div>
            </div>
            <Link to="/adminhome" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
                <AiOutlineArrowLeft size={24} />
            </Link>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UpdateNotice;