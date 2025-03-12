
// import Header from '../Header';
// import Footer from '../Footer';
// import React, { useState } from "react";
// import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, subMonths, addMonths } from "date-fns";

// export const StudentAttendance = () => {
//     const [currentMonth, setCurrentMonth] = useState(new Date());

//     const attendanceRecords = {
//         "2025-02-01": "Present",
//         "2025-02-05": "Present",
//         "2025-02-07": "Absent",
//         "2025-02-10": "Late",
//         "2025-02-14": "Present",
//         "2025-02-18": "Absent",
//         "2025-02-22": "Late",
//         "2025-02-25": "Present",
//     };

//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const weekStart = startOfWeek(monthStart);
//     const weekEnd = endOfWeek(monthEnd);

//     const days = [];
//     let day = weekStart;
//     while (day <= weekEnd) {
//         days.push(day);
//         day = addDays(day, 1);
//     }

//     const getStatusColor = (date) => {
//         const formattedDate = format(date, "yyyy-MM-dd");
//         if (attendanceRecords[formattedDate] === "Present") return "bg-green-500 text-white";
//         if (attendanceRecords[formattedDate] === "Absent") return "bg-red-500 text-white";
//         if (attendanceRecords[formattedDate] === "Late") return "bg-yellow-500 text-black";
//         return "bg-gray-200 text-gray-800";
//     };

//     return (
//         <div className="flex flex-col min-h-screen">
//             {/* Header */}
//             <Header />

//             {/* Main Content */}
//             <div className="flex-grow overflow-auto">
//                 <div className="max-w-3xl mx-auto p-4 sm:p-6">
//                     <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">📅 Attendance Calendar</h2>

//                     {/* Navigation Buttons */}
//                     <div className="flex items-center justify-between max-w-xs mx-auto mb-4 space-x-2">
//                         <button
//                             onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
//                             className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
//                         >
//                             ⬅️ Prev
//                         </button>
//                         <h3 className="text-lg sm:text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h3>
//                         <button
//                             onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
//                             className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
//                         >
//                             Next ➡️
//                         </button>
//                     </div>

//                     {/* Calendar Grid */}
//                     <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 sm:gap-4">
//                         {/* Weekday Headers */}
//                         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                             <div key={day} className="text-center font-extrabold text-md sm:text-lg">{day}</div>
//                         ))}
//                         {/* Days */}
//                         {days.map((date, index) => (
//                             <div
//                                 key={index}
//                                 className={`w-12 sm:w-16 h-12 sm:h-14 flex items-center justify-center rounded-full font-semibold 
//                                 ${getStatusColor(date)} 
//                                 ${!isSameMonth(date, monthStart) ? "opacity-30" : ""}
//                                 ${isSameDay(date, new Date()) ? "ring-2 ring-white" : ""}`}
//                             >
//                                 {format(date, "d")}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Footer (Stays at the bottom) */}
//             <Footer />
//         </div>
//     );
// };


import Header from '../Header';
import Footer from '../Footer';
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, subMonths, addMonths } from "date-fns";

export const StudentAttendance = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const attendanceRecords = {
        "2025-02-01": "Present",
        "2025-02-05": "Present",
        "2025-02-07": "Absent",
        "2025-02-10": "Present",
        "2025-02-14": "Present",
        "2025-02-18": "Absent",
        "2025-02-22": "Present",
        "2025-02-25": "Present",
    };

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);

    const days = [];
    let day = weekStart;
    while (day <= weekEnd) {
        days.push(day);
        day = addDays(day, 1);
    }

    const getStatusColor = (date) => {
        const formattedDate = format(date, "yyyy-MM-dd");
        if (attendanceRecords[formattedDate] === "Present") return "bg-green-500 text-white";
        if (attendanceRecords[formattedDate] === "Absent") return "bg-red-500 text-white";
        return "bg-gray-200 text-gray-800";
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow overflow-auto">
                <div className="max-w-3xl mx-auto p-4 sm:p-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">📅 Attendance Calendar</h2>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between max-w-xs mx-auto mb-4 space-x-2">
                        <button
                            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
                        >
                            ⬅️ Prev
                        </button>
                        <h3 className="text-lg sm:text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h3>
                        <button
                            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
                        >
                            Next ➡️
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 sm:gap-4">
                        {/* Weekday Headers */}
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="text-center font-extrabold text-md sm:text-lg">{day}</div>
                        ))}
                        {/* Days */}
                        {days.map((date, index) => (
                            <div
                                key={index}
                                className={`w-12 sm:w-16 h-12 sm:h-14 flex items-center justify-center rounded-full font-semibold 
                                ${getStatusColor(date)} 
                                ${!isSameMonth(date, monthStart) ? "opacity-30" : ""}
                                ${isSameDay(date, new Date()) ? "ring-2 ring-white" : ""}`}
                            >
                                {format(date, "d")}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer (Stays at the bottom) */}
            <Footer />
        </div>
    );
};
