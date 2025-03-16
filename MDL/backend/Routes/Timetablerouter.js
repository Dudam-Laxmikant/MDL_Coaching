const { addTimetable } = require("../Controllers/TimetableController")

const router = require("express").Router()

router.post("/addTimetable", addTimetable)

module.exports = router