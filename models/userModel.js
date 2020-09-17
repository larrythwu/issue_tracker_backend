const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  teamNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5, //minimum length for password
  },
  displayName: {
    type: String, //its optional, if not specified email is displayed
  },
});

module.exports = User = mongoose.model("user", userSchema);
