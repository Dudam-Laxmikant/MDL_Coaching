const StudentModel = require("../Models/student")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const TeacherModel = require("../Models/teacher");

const Teacherform = async (req, res) => {
    console.log(req.body);
    console.log("file is :", req.file);
    const {
        t_id,
        s_name,
        name,
        lname,
        gender,
        status,
        email,
        mobilenumber,
        dob,
        qulification,
        course,
        subject,
        password,
        address,
        adharnumber
    } = req.body

    try {
        const { filename } = req.file
        // Check if the user already exists
        const user = await TeacherModel.findOne({ email });
        if (user) {
            return res.status(200).json({
                message: "Teacher already exists",
                success: false,
            });
        }

        const users = await TeacherModel.findOne({ t_id });
        if (users) {
            return res.status(200).json({
                message: "Techer Id already exists",
                success: false,
            });
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new TeacherModel({
            t_id,
            s_name,
            name,
            lname,
            gender,
            status,
            email,
            mobilenumber,
            dob,
            qualification: qulification,
            course,
            subject,
            password: hashedPassword,
            address,
            adharnumber,
            photo: filename
        });
        console.log("New Teacher: ", newUser)

        // Save the user to the database
        await newUser.save()
        return res.status(201).json({
            message: "Signup successful",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error: " + error.message,
            success: false,
        });
    }
}
const deleteTeacherById = async (req, res) => {
    const { id } = req.params;
    try {
        const teacher = await TeacherModel.findByIdAndDelete(id);
        if (!teacher) {
            return res.status(404).json({
                message: "Teacher not found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Teacher deleted successfully",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error: " + error.message,
            success: false,
        });
    }
}
const FindTeacherById = async (req, res) => {
    const { id } = req.params;
    try {
        const teacher = await TeacherModel.findById(id);
        if (!teacher) {
            return res.status(404).json({
                message: "Teacher not found",
                success: false,
            });
        }
        res.status(200).json({
            success: true,
            data: teacher
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error: " + error.message,
            success: false,
        });
    }
}


async function Getallteacher(req, res) {
    try {

        // Check if the user already exists
        const user = await TeacherModel.find({});
        res.status(200).json({
            message: "Teacher fetched successfully",
            success: true,
            data: user
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error: " + error.message,
            success: false,
        });
    }
}
module.exports = { Teacherform, Getallteacher, deleteTeacherById, FindTeacherById } 
