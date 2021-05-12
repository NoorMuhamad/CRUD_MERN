const mongoose = require("mongoose")
const StudentSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Department:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
})
const Student= mongoose.model("Student",StudentSchema)
module.exports = Student 