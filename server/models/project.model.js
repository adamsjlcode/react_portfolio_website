const mongoose = require("mongoose");
const languageSchema = require("./language.model").schema;
const urlSchema = require("./url.model").schema;

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    languages: [languageSchema],
    date: { type: Date, required: true },
    description: { type: String, required: true },
    urls: [urlSchema],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
