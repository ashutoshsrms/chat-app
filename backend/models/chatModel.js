const mongoose = require("mongoose");

const chatModle = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGruoupChat: {
      type: Boolean,
      default: false,
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Meaasge" },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModle);

module.exports=Chat;