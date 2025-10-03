const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    email: {
        Type: String,
        unique: true,
        require: [true, "email is require"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password: {
        Type: String,
        select: false,
        require: [true, "email is require"],
        match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password One capital letter One special word']
        maxLenght:[15,"maximun lenght is 15"],
        minLenght:[6,"minimum lenght is 6"]
    }
}, { timestamps: true })


const student = mongoose.model( "student",studentSchema);
module.exports=student