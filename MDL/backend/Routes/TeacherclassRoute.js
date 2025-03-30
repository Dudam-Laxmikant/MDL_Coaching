// const { Addsubject, getSubjects, DeleteSubject } = require("../Controllers/SubjectController")

const { Teacherclass, displayteacherclasses, updatesubject } = require("../Controllers/TeacherclassController")

const router = require("express").Router()

router.post("/teachercls", Teacherclass)
router.get("/getteachercls/:classname", displayteacherclasses)
router.post("/updateteachercls/:id", updatesubject)

module.exports = router