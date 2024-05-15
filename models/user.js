const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  profilePicture: { type: String },
  pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
});

module.exports = mongoose.model("User", userSchema);
