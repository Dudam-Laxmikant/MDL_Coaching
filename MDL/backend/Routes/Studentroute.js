const router = require("express").Router()
const {StudentLogin, getStudents, studentprofile} = require("../Controllers/StudentController")
router.post("/login",StudentLogin)
router.get("/getstudents/:id",getStudents)
router.get("/getstudentdetails/:id",studentprofile)
module.exports = router