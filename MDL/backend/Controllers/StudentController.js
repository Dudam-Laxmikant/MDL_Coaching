const StudentModel = require("../Models/student")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Studentsignup = async (req, res) => {
    console.log(req.body);
    console.log("file is :", req.file);
    const {
        s_id,
        fname,
        mname,
        lname,
        email,
        password,
        dob,
        adharnumber,
        city,
        country,
        adress,
        fee,
        gender,
        s_class } = req.body

    try {
        const { filename } = req.file
        // Check if the user already exists
        const user = await StudentModel.findOne({ s_id, email });
        if (user) {
            return res.status(200).json({
                message: "Student already exists",
                success: false,
            });
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new StudentModel({
            s_id,
            fname,
            mname,
            lname,
            email,
            password: hashedPassword,
            dob,
            adharnumber,
            city,
            country,
            adress,
            fee,
            gender,
            passphoto:filename,
            s_class
        });
        console.log("New Student: ", newUser)

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

module.exports = { Studentsignup } 
