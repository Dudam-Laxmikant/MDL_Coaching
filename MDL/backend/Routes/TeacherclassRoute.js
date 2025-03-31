// const { Addsubject, getSubjects, DeleteSubject } = require("../Controllers/SubjectController")

const { Teacherclass, displayteacherclasses, updatesubject, DeleteTeacher } = require("../Controllers/TeacherclassController")

const router = require("express").Router()

router.post("/teachercls", Teacherclass)
router.get("/getteachercls/:classname", displayteacherclasses)
router.post("/updateteachercls/:id", updatesubject)
router.get("/deleteteachercls/:teacherId",DeleteTeacher)
module.exports = router