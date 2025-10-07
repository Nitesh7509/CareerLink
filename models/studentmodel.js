const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is require"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true,
    },
    password: {
        type: String,
        select: false,
        required: [true, "email is require"],
        // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password One capital letter One special word'],
        maxLenght: [15, "maximun lenght is 15"],
        minLenght: [6, "minimum lenght is 6"],
        linkexpiretoken: {
            type: String,
            default: "0"
        }
    }
}, { timestamps: true });

studentSchema.pre("save", function () {
    if (!this.isModified("password")) {
        return;
    }
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);


});

studentSchema.methods.matchpassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

studentSchema.methods.jwtwebtoken = function () {
    return jwt.sign({ id: this._id }, process.env.WEBTOKEN_SECRET, { expiresIn: process.env.EXPIRE_TIME })
};


const student = mongoose.model("student", studentSchema);
module.exports = student