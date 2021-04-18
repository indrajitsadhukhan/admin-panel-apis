const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const quizSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  Question: {
    type: String,
    required: true,
  },
  OptionA: {
    type: String,
    required: true,
  },
  OptionB: {
    type: String,
    required: true,
  },
  OptionC: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
