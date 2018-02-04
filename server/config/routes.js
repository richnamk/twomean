var path = require('path'),
    users = require('../controllers/users'),
    sessions = require('../controllers/sessions'),
    appts = require('../controllers/appts') ;

module.exports = (app) => {
    app.post('/users', users.create);
    
    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    app.post('/appts', appts.create);
    app.get('/appts', appts.list);
    app.delete('/appts/:id', appts.delete);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}
