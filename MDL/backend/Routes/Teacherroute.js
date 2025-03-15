const router = require("express").Router()
const {Teacherform,Getallteacher, deleteTeacherById, FindTeacherById} = require("../Controllers/TeacherController")

// router.post("/addteacher",Teacherform)
router.get("/getallteacher",Getallteacher)
router.get("/getteacherbyid/:id",deleteTeacherById)
router.get("/findByid/:id",FindTeacherById)

module.exports = router