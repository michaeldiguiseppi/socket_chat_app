// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});


$('form').on('submit', function() {
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('chat message', function(msg) {
  $('#messages').append($('<li>').text(msg));
});
