const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reveiwSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", reveiwSchema);