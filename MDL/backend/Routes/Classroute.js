const { addclass, getclasses } = require("../Controllers/AddclassController")
const router = require("express").Router()

router.post("/addclass", addclass)
router.get("/getclasses", getclasses)

module.exports = router