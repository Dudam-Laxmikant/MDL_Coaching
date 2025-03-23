const router = require("express").Router()
const {StudentLogin, getStudents, studentprofile, getStudentsbyclass} = require("../Controllers/StudentController")
router.post("/login",StudentLogin)
router.get("/getstudents/:id",getStudents)
router.get("/getstudentdetails/:id",studentprofile)
router.get("/getstudentsbyclass/:classname",getStudentsbyclass)
module.exports = router