const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petName: { type: String, required: true },
  breed: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ["male", "female", "other"] },
  profilePicture: { type: String },
});

module.exports = mongoose.model("Pet", petSchema);
