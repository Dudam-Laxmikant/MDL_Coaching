const TimeTableModel = require("../Models/timetable")
const addTimetable = async (req, res) => {
    try {
        const { filename } = req.body;
        if (!filename) {
            return res.status(400).json({
                message: "File is required",
                success: false,
            });
        }

        const currentDate = new Date();
        const date = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD
        const time = currentDate.toTimeString().split(" ")[0]; // HH:MM:SS

        const newTimetable = new TimeTableModel({ filename, date, time });
        await newTimetable.save();

        res.status(201).json({
            message: "Timetable entry added successfully",
            success: true,
            data: newTimetable,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error: " + error,
            success: false,
        });
    }
}

module.exports = { addTimetable }
