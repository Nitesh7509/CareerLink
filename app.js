require("dotenv").config({ path: "./.env" });
const express = require('express');
const app = express();
const errorhandler = require("./utils/errorhandler");
const { generatedError } = require("./middlewares/error");


const logger = require("morgan");
app.use(logger("tiny"));

const connectDb = require('./database/database')
connectDb()


//routes

app.get("/", require("./routes/indexroutes"))



app.all("*name", (req, res, next) => {
    next(new errorhandler(`page not found ${req.url}`, 404))
})
app.use(generatedError)

//server 
app.listen(process.env.PORT, console.log(`server is runing on port ${process.env.PORT}`));