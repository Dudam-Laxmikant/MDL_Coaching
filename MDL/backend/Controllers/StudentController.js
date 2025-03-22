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
        s_class,
        s_classId } = req.body

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
            passphoto: filename,
            s_class,
            s_classId
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
const StudentLogin = async (req, res) => {
    try {
        const { s_id, email } = req.body;
        const userid = await StudentModel.findOne({ s_id })
        if (!userid) {
            return res.status(200)
                .json({ message: "StudentID is not exist", success: false })
        }
        const useremail = await StudentModel.findOne({ s_id, email })
        if (!useremail) {
            return res.status(200)
                .json({ message: "Email is not exist", success: false })
        }
        // const result = await bcrypt.compare(password, useremail.password)
        // if (!result) {
        //     return res.status(200)
        //         .json({ message: "Auth failed password is wrong", success: false })
        // }

        const jwttoken = jwt.sign(
            { email: useremail.email, _id: useremail._id },
            process.env.JWT_TOKEN
        )

        const fullname = useremail.fname + " " + useremail.mname + " " + useremail.lname

        res.status(201)
            .json({ message: "login successfully", success: true, jwttoken, s_id, email, _id: useremail._id, name: fullname })


    } catch (error) {
        res.status(408)
            .json({ message: "Server error" + error, success: false })
    }
}

const getStudents = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const students = await StudentModel.find({ s_classId: id })
        res.status(200).json({ students })
    } catch (error) {
        res.status(500).json({ message: "Server error" + error, success: false })
    }
}
async function studentprofile(req, res) {
    try {
        const { id } = req.params
        console.log(id)
        // Check if the user already exists
        const student = await StudentModel.findById(id);
        res.status(200).json({
            message: "Student fetched successfully",
            success: true,
            data: student
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error: " + error.message,
            success: false,
        });
    }
}
module.exports = { Studentsignup, StudentLogin, getStudents, studentprofile } 
