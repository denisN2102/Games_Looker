const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  id: { type: Number },
  title: { type: String },
  img: { type: String },
  description: { type: String },
  video: { type: String },
  platform: { type: String },
  year: { type: Number },
  category: { type: Array },
  comment: { type: Array },
});

module.exports = model("Games", schema);
