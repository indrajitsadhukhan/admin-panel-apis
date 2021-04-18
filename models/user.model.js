const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    phone: {
      type: Number,
      required: true,
      unique: true,
      length: 10,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    coins: {
      type: Number,
      required: true,
      maxlength: 4,
    },
    refercode: {
      type: String,
      required: true,
      maxlength: 6,
    },
    referredby: {
      type: String,
      required: false,
      maxlength: 6,
    },
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
