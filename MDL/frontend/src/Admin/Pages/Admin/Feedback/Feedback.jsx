import React, { useEffect, useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function Feedback() {
 
  const [feedbackdata, setFeedback] = useState([]);


  useEffect(() => {
    profile();
  }, []);

  const profile = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/feedback/getfeedback`);
      console.log(res.data.data);
      setFeedback(res.data.data.reverse()); // Ensure it's an array
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 bg-[#454649] p-4 sm:p-6 md:p-6 min-h-screen">
        <div className="w-full bg-white p-6 mt-20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>

          <h2 className="text-2xl font-bold mb-4">Feedback Received</h2>
          <div className="space-y-4">
            {feedbackdata.map((feedback, index) => (
              <div key={index} className="p-4 border rounded bg-gray-50">
                <p className="font-bold">
                  ID: {feedback.s_id} | Name: {feedback.name} | Class:{" "}
                  {feedback.s_class} ({feedback.role})
                </p>
                <p>{feedback.feedback}</p>{" "}
                {/* Assuming feedback has a feedback message */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;