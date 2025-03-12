
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';


const lectures = [
    "Mathematics - Algebra",
    "Science - Physics",
    "English - Grammar",
    "History - Ancient Civilizations",
    "Geography - World Maps"
];

const StudentFeedback = () => {
    const [selectedLecture, setSelectedLecture] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Feedback Submitted for ${selectedLecture}: ${feedback}`);
    };

    return (
        <>
   
        <div className="flex flex-col min-h-screen">
            Header
            <Header />
            {/* Main Content */}
            <div className="flex-grow overflow-auto">
                <div className="max-w-3xl mx-auto p-20">
                <h3 className="text-4xl font-bold text-blue-600 mb-6 text-center">Student Feedback</h3>
                <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="block text-lg font-semibold text-gray-700">Select Lecture:</label>
                        <select
                            value={selectedLecture}
                            onChange={(e) => setSelectedLecture(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Select a Lecture</option>
                            {lectures.map((lecture, index) => (
                                <option key={index} value={lecture}>{lecture}</option>
                            ))}
                        </select>

                        <label className="block text-lg font-semibold text-gray-700">Your Feedback:</label>
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Write your feedback here..."
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
                </div>
            </div>
            {/* Footer (Stays at the bottom) */}
            <Footer />
        </div>
        </>
    );
};

export default StudentFeedback;