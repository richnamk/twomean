var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required,"],
        minlength: [2, "Minimum length is 2,"]
    },
    appts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appt'
    }]
}, {timestamps: true});


var User = mongoose.model('User', UserSchema);

module.exports = User; 