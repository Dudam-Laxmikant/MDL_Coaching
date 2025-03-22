const mongoose = require("mongoose")

const teachernoticeschema = new mongoose.Schema({
    
    noticedescription:{
        type: String,
        required: true
    },
})

const TeacherNoticeModel = mongoose.model("TeacherNotice", teachernoticeschema)

module.exports = TeacherNoticeModel