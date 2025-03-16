const router = require("express").Router()
const {StudentLogin} = require("../Controllers/StudentController")
router.post("/login",StudentLogin)
module.exports = router