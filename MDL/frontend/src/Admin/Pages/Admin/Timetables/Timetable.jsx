
import React, { useState } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export const Timetable = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        if (file) {
            console.log('Selected File:', file);
            alert('Timetable added');
        } else {
            alert('Please upload a file.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-1 p-4 sm:p-6 md:p-10 bg-[#454649]">
                <div className="w-full bg-transparent p-6 mt-10">
                    <h1 className="text-white text-2xl mb-4">Upload Timetable</h1>
                    
                    {/* File Upload */}
                    <label className="text-white block mb-2">Upload File:</label>
                    <input 
                        type="file" 
                        className="p-2 rounded-md mb-4 w-full text-white bg-gray-800 border border-gray-600" 
                        onChange={handleFileChange}
                    />
                    
                    {file && <p className="text-white mt-2">Selected File: {file.name}</p>}
                    
                    {/* Submit Button */}
                    <button 
                        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full" 
                        onClick={handleSubmit}
                    >
                        Add Timetable
                    </button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};
