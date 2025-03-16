const ClassModel = require("../Models/class.js")

const router = require("express").Router()

router.post("/addclass", ClassModel)

module.exports = router