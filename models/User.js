const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);