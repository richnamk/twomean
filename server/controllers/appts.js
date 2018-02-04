var session = require('express-session'),
    User = require('../models/user'),
    Appt = require('../models/appt');

module.exports = {

    create: (req, res) => {
        const appt = new Appt(req.body);
        appt._user = session.user_id;
        appt.save( (err) => {
            if (err) {
                return res.json(err);
            }
            return res.json(appt);
        });
    },
    list: (req, res) => {
        Appt.find({})
        .populate('_user')
        .exec((err, appts) => {
            if (err) {
                return res.json(err.errors);
            }
            return res.json(appts);
        });
    },
    delete: ( req, res) => {
        Appt.remove({_id: req.params.id})
        .exec((err, appt) => {
            if (err) {
                console.log(err)
            }
            return res.json(appt)
        })
    }
}