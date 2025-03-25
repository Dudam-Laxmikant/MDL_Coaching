const router = require("express").Router()
const { getStudentsbyclass } = require("../Controllers/StudentController")
const {Teacherform,Getallteacher, deleteTeacherById, FindTeacherById, login} = require("../Controllers/TeacherController")

// router.post("/addteacher",Teacherform)
router.get("/getallteacher",Getallteacher)
router.get("/getteacherbyid/:id",deleteTeacherById)
router.get("/findByid/:id",FindTeacherById)
router.get("/getstudentsbyclass/:classname",getStudentsbyclass)
router.post("/login",login)

module.exports = router