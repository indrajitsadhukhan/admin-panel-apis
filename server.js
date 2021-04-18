const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established");
});

const quizesRouter = require("./routes/quiz");
const usersRouter = require("./routes/users");

app.use("/quiz", quizesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("listening on port: " + port);
});
