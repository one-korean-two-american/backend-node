const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  userId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  likes: [{ type: String, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Photo", photoSchema);
