const express           = require('express');
const postgres          = require('./postgres');
const app               = express();

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

app.listen(process.env.PORT || 9100, function() {
    console.log('server listening on ' + process.env.PORT || 9100);
});