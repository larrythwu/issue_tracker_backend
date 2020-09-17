const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  teamNumber: { type: Number, required: true },
  assignment: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = Todo = mongoose.model("todo", todoSchema);
