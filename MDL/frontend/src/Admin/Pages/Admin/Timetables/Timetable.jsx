import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { useState } from 'react';

export const Timetable = () => {
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };


    
    const handleSubmit = () => {
        if (file) {
            const newFile = {
                id: uploadedFiles.length + 1,
                name: file.name,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            };
            setUploadedFiles([...uploadedFiles, newFile]);
            setFile(null);
            alert('Timetable added');
        } else {
            alert('Please upload a file.');
        }
    };

    const handleDelete = (id) => {
        setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            <div className="flex flex-col md:flex-row flex-1 p-4 sm:p-6 md:p-10 bg-[#454649]">
                <div className="w-full md:w-1/2 bg-transparent p-6 mt-10">
                    <h1 className="text-white text-2xl mb-4">Upload Timetable</h1>
                    
                    <label className="text-white block mb-2">Upload File:</label>
                    <input 
                        type="file" 
                        className="p-2 rounded-md mb-4 w-full text-white bg-gray-800 border border-gray-600" 
                        onChange={handleFileChange}
                    />
                    
                    {file && <p className="text-white mt-2">Selected File: {file.name}</p>}
                    
                    <button 
                        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full" 
                        onClick={handleSubmit}
                    >
                        Add Timetable
                    </button>
                </div>

                <aside className="w-full md:w-1/2 bg-gray-700 p-6 mt-10 rounded-lg text-center overflow-x-auto">
                    <h2 className="text-white text-xl mb-4">Uploaded Timetables</h2>
                    <div className="mt-4">
                        {uploadedFiles.length > 0 ? (
                            <table className="w-full text-white border-collapse border border-gray-500">
                                <thead>
                                    <tr className="bg-gray-800 text-sm md:text-base">
                                        <th className="border border-gray-500 p-2">Serial No</th>
                                        <th className="border border-gray-500 p-2">File Name</th>
                                        <th className="border border-gray-500 p-2">Date</th>
                                        <th className="border border-gray-500 p-2">Time</th>
                                        <th className="border border-gray-500 p-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uploadedFiles.map((file) => (
                                        <tr key={file.id} className="bg-gray-600 text-sm md:text-base">
                                            <td className="border border-gray-500 p-2">{file.id}</td>
                                            <td className="border border-gray-500 p-2">{file.name}</td>
                                            <td className="border border-gray-500 p-2">{file.date}</td>
                                            <td className="border border-gray-500 p-2">{file.time}</td>
                                            <td className="border border-gray-500 p-2">
                                                <button 
                                                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                                                    onClick={() => handleDelete(file.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-300">No timetables uploaded yet.</p>
                        )}
                    </div>
                </aside>
            </div>
            
            <Footer />
        </div>
    );
};