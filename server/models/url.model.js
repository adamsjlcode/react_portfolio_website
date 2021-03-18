const mongoose = require("mongoose");
// const imageSchema = require("./image.model").schema;
const { Schema } = mongoose;

const urlSchema = new Schema(
  {
    url: {
      type: String,
      required: "URL can't be empty",
      unique: true,
    },
    site: {
      type: String,
      required: "Site can't be empty",
    },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
// logo: imageSchema,
// validate: {
//     validator: (value) =>
//       validator.isURL(value, {
//         protocols: ["http", "https", "ftp"],
//         require_tld: true,
//         require_protocol: true,
//       }),
//     message: "Must be a Valid URL",
