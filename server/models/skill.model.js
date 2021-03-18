const mongoose = require("mongoose");
const languageSchema = require("./language.model").schema;
const { Schema } = mongoose;

const skillSchema = new Schema(
  {
    amount_time: mongoose.Decimal128,
    language: [languageSchema],
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
