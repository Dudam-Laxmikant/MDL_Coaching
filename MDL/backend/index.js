const express = require("express");
const bodyparser = require("body-parser")
const cors = require("cors");

// const upload = require("./Middlewares/upload");

const Adminroute = require("./Routes/Adminroute")
const Studentroute = require("./Routes/Studentroute")

const upload = require("./Middlewares/upload.js")
const { signup } = require("./Controllers/AdminController.js");
const { Studentsignup } = require("./Controllers/StudentController.js");
const Teacherroute = require("./Routes/Teacherroute.js");
const { Teacherform } = require("./Controllers/TeacherController.js");
const Subjectroute = require("./Routes/Subjectroute.js")
require("dotenv").config()

require("./Models/db")

const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyparser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static("./public/images"))

app.use("/images", express.static("./public/images"));


app.use("/admin", Adminroute)
app.use("/subject", Subjectroute)
app.post("/student/signup", upload.single("passphoto"), Studentsignup)
app.post("/admin/signup",upload.single("image"), signup)
app.post("/teacher/addteacher",upload.single("photo"), Teacherform)
app.use("/teacher", Teacherroute)

// app.use("/student", Studentroute)
app.get("/", (req, res) => {
    res.send("welcome users")
})

app.listen(PORT, () => {
    console.log(`Server is Started in  http://localhost:${PORT}`);

})