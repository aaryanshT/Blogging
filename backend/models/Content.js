const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },   
    published: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Content", contentSchema);