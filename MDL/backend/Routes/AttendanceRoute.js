const router = require("express").Router()
const { markAttendance, getAttendance, updateAttendance } = require("../Controllers/AttendanceController.js")

router.post("/addattendance", markAttendance)
router.get("/getattendance/:classname/:date", getAttendance)

router.put("/updateattendance", updateAttendance)
module.exports = router