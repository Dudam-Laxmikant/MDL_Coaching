const NoticeModel = require("../Models/notice.js")

const router = require("express").Router()

router.post("/addnotice", NoticeModel)

module.exports = router