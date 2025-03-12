
import React, { useState, useRef } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
export const AddSubjects = () => {
    const [subjectEntries, setSubjectEntries] = useState([
        { subjectName: '', subjectCode: '', session: '' }
    ]);
    const lastInputRef = useRef(null);

    const handleAddSubject = () => {
        setSubjectEntries(prevEntries => [
            ...prevEntries,
            { subjectName: '', subjectCode: '', session: '' }
        ]);
        
        setTimeout(() => {
            if (lastInputRef.current) {
                lastInputRef.current.focus();
            }
        }, 100);
    };

    const handleChange = (index, field, value) => {
        setSubjectEntries(prevEntries => 
            prevEntries.map((entry, i) => i === index ? { ...entry, [field]: value } : entry)
        );
    };

    const handleRemoveSubject = (index) => {
        setSubjectEntries(prevEntries => prevEntries.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        const isValid = subjectEntries.every(entry => entry.subjectName && entry.subjectCode && entry.session);
        
        if (!isValid) {
            alert("Please fill out all fields before saving.");
            return;
        }
        console.log("Saved Subjects:", subjectEntries);
        // API call or local storage logic here
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 bg-[#454649] p-6 sm:p-10 md:p-24">
                <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Manage Subjects</h2>
                    {subjectEntries.map((entry, index) => (
                        <div key={index} className="space-y-4 mb-6 border p-6 rounded-lg bg-gray-50 shadow-md relative">
                            <button 
                                onClick={() => handleRemoveSubject(index)} 
                                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
                                aria-label="Remove Subject"
                            >
                                ✕
                            </button>
                            <div>
                                <label className="block text-gray-600 font-medium">Subject Name</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                    value={entry.subjectName} 
                                    onChange={(e) => handleChange(index, 'subjectName', e.target.value)} 
                                    required
                                    ref={index === subjectEntries.length - 1 ? lastInputRef : null}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Subject Code</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                    value={entry.subjectCode} 
                                    onChange={(e) => handleChange(index, 'subjectCode', e.target.value)} 
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium">Session</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                    value={entry.session} 
                                    onChange={(e) => handleChange(index, 'session', e.target.value)} 
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={handleAddSubject} 
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition"
                        aria-label="Add Subject"
                    >
                        + Add Subject
                    </button>
                </div>
            </div>
            <div className="fixed bottom-6 right-6">
                <button 
                    onClick={handleSave} 
                    className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-green-700 transition"
                    aria-label="Save Subjects"
                >
                    Save
                </button>
            </div>
            
            <Footer />
        </div>
    );
};

export default AddSubjects;