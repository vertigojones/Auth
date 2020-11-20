const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
