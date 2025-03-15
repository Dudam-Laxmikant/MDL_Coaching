const { Addsubject } = require("../Controllers/SubjectController")

const router = require("express").Router()

router.post("/addsubject",Addsubject)

module.exports = router