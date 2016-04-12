var io = require('socket.io')();

io.on('connection', function(socket) {
  console.log('A user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

module.exports = io;
