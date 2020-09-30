var mosca = require('mosca')
var settings = {
    port: 1883,
    http: {
        port: 8883
    }    
}
var server = new mosca.Server(settings)
// server.on('ready',setup)

server.on('clientConnected', function(){
    console.log('Conn')
})

server.on('clientDisconnected', function(){
    console.log('Disconn')
})

server.on('published', function(packet,client){
    console.log(packet)
    console.log('Pub')
})

// var ascoltatore = {
//   //using ascoltatore
//   type: 'mongo',        
//   url: 'mongodb://localhost:27017/mqtt',
//   pubsubCollection: 'ascoltatori',
//   mongo: {}
// };

// var moscaSettings = {
//   port: 1884,
//   backend: ascoltatore,
//   persistence: {
//     factory: mosca.persistence.Mongo,
//     url: 'mongodb://localhost:27017/mqtt'
//   }
// };

// var server = new mosca.Server(moscaSettings);
// server.on('ready', setup);

// server.on('clientConnected', function(client) {
//     console.log('client connected', client.id);     
// });

// // fired when a message is received
// server.on('published', function(packet, client) {
//   console.log('Published', packet.payload);
// });

// // fired when the mqtt server is ready
// function setup() {
//   console.log('Mosca server is up and running')
// }