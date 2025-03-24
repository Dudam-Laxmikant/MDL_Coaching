const NotesModel = require("../Models/Notes")
const multer = require("multer");
const TeacherNotes= async (req, res) => {
    console.log("body: ", req.body)
    // console.log("file is :", req.file);
    const {
        classname,
        subject
    } = req.body
    
    
    try {
        const { filename } = req.file
        console.log("filename: ", filename)
        const c = new NotesModel({
            classname: classname,
            subject: subject,
            notesfille: filename
        })

        await c.save()

        return res.status(200)
            .json({ message: "Notice Added", success: true })

    } catch (error) {
        return res.status(408)
            .json({ message: "Server error" + error, success: false })
    }
}
const getallnotes = async (req, res) => {

    try {
        const notice = await NotesModel.find({})

        return res.status(200)
            .json({ message: "Notice Founded", success: true, data: notice })
    } catch (error) {
        return res.status(408)
            .json({ message: "Server error" + error, success: false })
    }
}

module.exports = { TeacherNotes, getallnotes }