const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        require: true
    },
    ID:{
        type: Number,
        require: true
    },
    Birthday:{
        type: Date,
        require: true
    }
});

module.exports = mongoose.model("user", userSchema);