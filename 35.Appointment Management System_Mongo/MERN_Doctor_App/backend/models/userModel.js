const { timeStamp } = require("console");
const { mongoose } = require("mongoose");
const { type } = require("os");

const useSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    imagaePath: { type: String },
    role: { type: String, enum: ["User", "Admin", "Doctor"], default: "User" },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("user", useSchema);
