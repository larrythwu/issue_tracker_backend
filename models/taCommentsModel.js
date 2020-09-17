const mongoose = require("mongoose");

const taSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = TA = mongoose.model("ta", taSchema);
