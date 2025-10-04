require("dotenv").config({ path: "./.env" });
const express = require('express');
const app = express();
const errorhandler = require("./utils/errorhandler");
const { generatedError } = require("./middlewares/error");

const connectDb = require('./database/database')
connectDb()

const logger = require("morgan");
app.use(logger("tiny"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes

app.use("/", require("./routes/indexroutes"))



app.all("*name", (req, res, next) => {
    next(new errorhandler(`page not found ${req.url}`, 404))
})
app.use(generatedError)

//server 
app.listen(process.env.PORT, console.log(`server is runing on port ${process.env.PORT}`));