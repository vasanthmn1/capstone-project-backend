const mongoose = require('mongoose');


const transection = mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: [true, 'amount is required'],
    },
    type: {
        type: String,
        required: [true, "type is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    date: {
        type: String,
        required: [true, "data is required"]
    },
    catagory: {
        type: String,
        required: [true, "select one catageruy"]
    }


}, { timestamps: true });

//Export the model
module.exports = mongoose.model(' tran', transection);