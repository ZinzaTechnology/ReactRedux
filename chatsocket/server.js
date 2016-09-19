var express = require("express")
var app = express();
var connections = [];
var users = [];

app.use(express.static('./public'));
var server = app.listen(1411);
io = require("socket.io").listen(server);

io.sockets.on('connection', function(socket){
  socket.once('disconnect', function(){
    for(var i = 0; i < users.length; i++){
      if(users[i].id = this.id){
        users.splice(i, 1);
      }
    }
    connections.splice(connections.indexOf(socket), 1)
    socket.disconnect();
    console.log('Disconnected: %s sockets connecteds', connections.length)

    io.emit('disconnect', users);
  })

  socket.on('sentMessage', function(payload){
    var newMessage = {
      timeStamp: payload.timeStamp,
      text: payload.text,
      user: payload.user
    }

    io.emit('sentMessage', newMessage);
  })

  socket.on('userJoined', function(payload){
    var newUser = {
      id: this.id,
      name: payload.name
    }

    users.push(newUser);
    console.log('User joined: %s', payload.name);
    io.emit('userJoined', users);
  })

  connections.push(socket);
  console.log('Connected: %s sockets connecteds', connections.length)
})

console.log('Server is running on port 1411')
