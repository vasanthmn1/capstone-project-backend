const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "eamil is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
},
    { timestamps: true }

);

//Export the model
module.exports = mongoose.model('User', userSchema);