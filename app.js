require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const errorhandler = require("./utils/errorhandler");
const { generatedError } = require("./middlewares/error");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const connectDb = require("./database/database");
connectDb();

app.use(logger("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);
app.use(cookieParser());

//routes

app.use("/", require("./routes/indexroutes"));

app.all("*name", (req, res, next) => {
  next(new errorhandler(`page not found ${req.url}`, 404));
});
app.use(generatedError);

//server
app.listen(
  process.env.PORT,
  console.log(`server is runing on port ${process.env.PORT}`)
);
