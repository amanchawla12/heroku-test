/**
 * Created by amanchawla on 27/12/18.
 */

var amqp = require('amqplib/callback_api');

exports.publish = function publish(req, res) {
    amqp.connect('amqp://xbqpeznb:MBDwn3EZmgxvsKgdFd7HhkIb6s3Xq0Ht@bear.rmq.cloudamqp.com/xbqpeznb', function(err, conn) {

        if(err) {
            console.error(JSON.stringify(err));
            return res.send(err);
        }
        conn.createChannel(function(err, ch) {
            var q = 'hello';
            ch.sendToQueue('EnablePAD', new Buffer('Hello World!'));
            console.log(" [x] Sent 'Hello World!'");
            return res.send("done");
        });
        setTimeout(function() { conn.close(); }, 6000);
    });
}

exports.listen = function listen(counter) {
    amqp.connect('amqp://xbqpeznb:MBDwn3EZmgxvsKgdFd7HhkIb6s3Xq0Ht@bear.rmq.cloudamqp.com/xbqpeznb', function(err, conn) {
        if(err) {
            console.error(JSON.stringify(err));
            if(counter < 5) {
                listen(counter + 1);
            }
            return;
        }
        conn.createChannel(function(err, ch) {
            ch.consume('EnablePAD', function(msg) {
                console.error("message from rabbit: " + msg.content.toString());
                ch.ack(msg);
            })
        })
    })
}