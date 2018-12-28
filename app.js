

const express           = require('express');
const app               = express();

const bodyParser        = require('body-parser');

const postgres          = require('./postgres');
const rabbit            = require('./rabbitMQ');
const user              = require('./user');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '100mb'}));



app.get('/ping', function(req, res) {
    return res.send('pong');
});

app.get('/heartbeat', function(req, res) {
    connection.query('SELECT 1 ', [], function (error, result) {
        if(error) {
            console.error(error.message);
            return res.send("NOT CONNECTED");
        }
        return res.send("CONNECTED");
    })
});

app.post('/register_user', user.registerUser);

app.listen(process.env.PORT || 9100, function() {
    console.log('server listening on ' + process.env.PORT || 9100);
});

app.post('/rabbit_pub', rabbit.publish);
rabbit.listen(1);