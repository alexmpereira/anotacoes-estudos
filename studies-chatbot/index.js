let MessagingHub = require('messaginghub-client');
let WebSocketTransport = require('lime-transport-websocket');
let Lime = require('lime-js');

let client = new MessagingHub.ClientBuilder()
    .withIdentifier('gazinatacado')
    .withAccessKey('OUo0TW9iZURZREtCaDJPZnNGa0E=')
    .withTransportFactory(() => new WebSocketTransport())
    .build();

/*
client.addMessageReceiver(true, function (message) {
    console.log(message);
});
*/

client.addMessageReceiver(function(message){
    return message.content == "Olá";
}, function (message) {
    var msg = { type: "text/plain", content: "Ola, tudo bem?", to: message.from, id: Lime.Guid()};
    client.sendMessage(msg);
});

client.connect()
    .then(function (session) {
        console.log('Connectado');
    })
    .catch(function (err) {
        console.log(err);
    });