const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const studentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "firstname is required"],
      minlength: [4, "minimum length is 4"],
    },
    lastname: {
      type: String,
      required: [true, "lastname is required"],
      minlength: [4, "minimum length is 4"],
    },
contact: {
  type: String,
  required: [true, "contact is required"],
  minlength: [10, "Contact number must be 10 digits"],
  maxlength: [10, "Contact number must be 10 digits"],
},
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      unique: true,
    },
    password: {
      type: String,
      select: false,
      required: [true, "password is required"],
      // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain one capital letter, one number, and special character'],
      maxlength: [15, "maximum length is 15"],
      minlength: [4, "minimum length is 4"],
    },
    linkexpiretoken: {
      type: String,
      default: "0",
    },
    avatar:{
      type:Object,
      default:{
        fileId:"",
        url:"https://i.pinimg.com/736x/c3/76/13/c37613cb20f7d18e4497439318e3694d.jpg"
      }
    },
    resume:{
      education:[],
      jobs:[],
      internships:[],
      responsibilities:[],
      courses:[],
      project:[],
      skills:[],
      accomplishments:[],
    }
  },
  { timestamps: true }
);

studentSchema.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }
  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

studentSchema.methods.matchpassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

studentSchema.methods.jwtwebtoken = function () {
  return jwt.sign({ id: this._id }, process.env.WEBTOKEN_SECRET, {
    expiresIn: process.env.EXPIRE_TIME,
  });
};

const student = mongoose.model("student", studentSchema);
module.exports = student;
