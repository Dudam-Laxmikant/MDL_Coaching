import React, { useState } from "react";
import Header from "../Home/Header";
import Footer  from "../Home/Footer";

function Feedback() {
    const [feedbackList, setFeedbackList] = useState([]);
    const [feedback, setFeedback] = useState({ studentId: "", name: "", className: "", role: "Student", message: "" });

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.studentId && feedback.name && feedback.className && feedback.message) {
            setFeedbackList([...feedbackList, feedback]);
            setFeedback({ studentId: "", name: "", className: "", role: "Student", message: "" });
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 bg-[#454649] p-4 sm:p-6 md:p-10">
                <div className="w-full bg-white p-6 mt-20 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <input 
                            type="text" 
                            name="studentId" 
                            value={feedback.studentId} 
                            onChange={handleChange} 
                            placeholder="Enter your Student ID" 
                            className="w-full p-3 border rounded mb-3" 
                            required
                        />
                        <input 
                            type="text" 
                            name="name" 
                            value={feedback.name} 
                            onChange={handleChange} 
                            placeholder="Enter your Name" 
                            className="w-full p-3 border rounded mb-3" 
                            required
                        />
                        <input 
                            type="text" 
                            name="className" 
                            value={feedback.className} 
                            onChange={handleChange} 
                            placeholder="Enter your Class" 
                            className="w-full p-3 border rounded mb-3" 
                            required
                        />
                        <select 
                            name="role" 
                            value={feedback.role} 
                            onChange={handleChange} 
                            className="w-full p-3 border rounded mb-3"
                        >
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                        </select>
                        <textarea 
                            name="message" 
                            value={feedback.message} 
                            onChange={handleChange} 
                            placeholder="Enter your feedback" 
                            className="w-full p-3 border rounded mb-3" 
                            required
                        ></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">Submit</button>
                    </form>

                    <h2 className="text-2xl font-bold mb-4">Feedback Received</h2>
                    <div className="space-y-4">
                        {feedbackList.length > 0 ? (
                            feedbackList.map((fb, index) => (
                                <div key={index} className="p-4 border rounded bg-gray-50">
                                    <p className="font-bold">ID: {fb.studentId} | Name: {fb.name} | Class: {fb.className} ({fb.role})</p>
                                    <p>{fb.message}</p>
                                </div>
                            ))
                        ) : (
                            <p>No feedback received yet.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Feedback;