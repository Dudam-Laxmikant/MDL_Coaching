const router = require("express").Router()
const {StudentLogin, getStudents, getStudentsbyclass, showprofile,studentprofile, updatestudentdetails} = require("../Controllers/StudentController")
router.post("/login",StudentLogin)
router.get("/getstudents/:id",getStudents)
router.get("/getstudentsbyclass/:classname",getStudentsbyclass)
router.get("/getstudentdetails/:id",studentprofile)
router.get("/showprofile/:id",showprofile)
router.post("/Updatestudentdetails/:id", updatestudentdetails)
module.exports = router