
const amqp = require('amqplib/callback_api');

const CONN_URL = "amqp://rvhumzay:gf42i3-GMkIMN4iWzsT87FqdvPhk4S_C@puffin.rmq2.cloudamqp.com/rvhumzay";

let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});

const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data));
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});

module.exports = { publishToQueue }