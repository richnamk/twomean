var mongoose = require('mongoose')

var ApptSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    complaint:{
        type: String,
        required: [true, "Complaint is required."],
        minlength: [10, "Complaint minimum characters is 10."]
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

var Appt = mongoose.model('Appt', ApptSchema); //Registers to mongoose

module.exports = User; //So you can call it elsewhere