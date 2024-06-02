//importing mongoose
const mongoose = require('mongoose');

//defining schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },  
     username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("User", userSchema);