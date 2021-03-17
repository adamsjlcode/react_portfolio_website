const mongoose = require('mongoose');
require('mongoose-type-url');


const Schema = mongoose.Schema;

const projectSchema = new Schema({
    username: { type: String, required: true, },
    title: { type: String, required: true },
    languages: [String],
    date: { type: Date, required: true, },
    description: { type: String, required: true, },
    url: { github: mongoose.SchemaTypes.Url },
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;