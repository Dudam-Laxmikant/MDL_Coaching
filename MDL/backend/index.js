const express = require("express");
const bodyparser = require("body-parser")
const cors = require("cors");

// const upload = require("./Middlewares/upload");

const Adminroute = require("./Routes/Adminroute")
const upload = require("./Middlewares/upload.js")
const { signup } = require("./Controllers/AdminController.js")
require("dotenv").config()

require("./Models/db")

const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyparser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static("./public/images"))


app.use("/admin", Adminroute)

app.post("/admin/signup",upload.single("image"), signup)

app.get("/", (req, res) => {
    res.send("welcome users")
})

app.listen(PORT, () => {
    console.log(`Server is Started in  http://localhost:${PORT}`);

})