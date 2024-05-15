const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  maxMembers: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);
