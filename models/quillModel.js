const mongoose = require("mongoose");

const quillSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = Quill = mongoose.model("quill", quillSchema);
