const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Common convention is for a model to start w/ a capital letter
// This pluralizes the model name and that's what it looks for in mongodb (Blog => blogs)
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;