const ClassModel = require("../Models/class")
const addclass = async (req, res) => {

    console.log("body: ", req.body)
    const {
        className
    } = req.body


    try {
        const c = new ClassModel({
            classname: className
        })

        await c.save()

        return res.status(200)
            .json({ message: "Class Added", success: true })

    } catch (error) {
        return res.status(408)
            .json({ message: "Server error" + error, success: false })
    }
}

const getclasses = async (req, res) => {
    try {
        const classes = await ClassModel.find({})
        return res.status(200).json({ message: "Classes fetched", success: true, data: classes })
    } catch (error) {
        return res.status(408).json({ message: "Server error" + error, success: false })
    }
}

module.exports = { addclass , getclasses}