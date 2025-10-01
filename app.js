require("dotenv").config({path:"./.env"});
const express = require('express');
const app = express();

//logger
const logger= require("morgan");
app.use(logger("tiny"));


//routes

app.get("/",require("./routes/indexroutes"))



//server 
app.listen(process.env.PORT, console.log(`server is runing on port ${process.env.PORT}`));