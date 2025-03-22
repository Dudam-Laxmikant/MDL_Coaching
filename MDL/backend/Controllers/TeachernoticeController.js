const TeacherNoticeModel = require("../Models/teachernotice")

const Teachernotice = async (req, res) => {
    console.log("body: ", req.body)
    const {
        noticedescription
    } = req.body


    try {
        const c = new TeacherNoticeModel({
            noticedescription: noticedescription
        })

        await c.save()

        return res.status(200)
            .json({ message: "Notice Added", success: true })

    } catch (error) {
        return res.status(408)
            .json({ message: "Server error" + error, success: false })
    }
}

async function GetallNotice(req, res) {
    try {
       // Check if the user already exists
        const user = await TeacherNoticeModel.find({});
        console.log(user);
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
module.exports = { Teachernotice , GetallNotice}