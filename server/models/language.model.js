const mongoose = require("mongoose");
const imageSchema = require("./image.model").schema;
const { Schema } = mongoose;

const languageSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name can't be empty",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Language = mongoose.model("Language", languageSchema);

module.exports = Language;
// logo: imageSchema,
