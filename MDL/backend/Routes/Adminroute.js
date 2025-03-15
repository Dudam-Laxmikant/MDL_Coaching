const { signup, login } = require("../Controllers/AdminController")

const router = require("express").Router()

router.post("/login", login)

module.exports = router