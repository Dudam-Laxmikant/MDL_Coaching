const { Addsubject, getSubjects } = require("../Controllers/SubjectController")

const router = require("express").Router()

router.post("/addsubject", Addsubject)
router.get("/getsubjects", getSubjects)

module.exports = router