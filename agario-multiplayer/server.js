var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("hello");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

var blobs = [];

function Blob(id,x,y,r) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = r;
}

setInterval(hearbeat, 33);

function hearbeat() {
  io.sockets.emit('hearbeat',blobs);
}

function newConnection(socket) {
    console.log("new connection: "+ socket.id);



    socket.on('start', function(data){
      console.log(socket.id + " " + data.x + " " + data.y + " " + data.r);
      blobs.push(new Blob(socket.id, data.x, data.y));
    });

    socket.on('update', function(data){
      console.log(socket.id + " " + data.x + " " + data.y + " " + data.r);
      var blob;
      for ( var i = 0; i < blobs.length; i++) {
        if (socket.id == blobs[i].id) {
          blob = blobs[i];
        }
      }

      blob.x = data.x;
      blob.y = data.y;
      blob.r = data.r;


    });


    // socket.on('mouse', mouseMsg);
    //
    // function mouseMsg(data) {
    //   socket.broadcast.emit('mouse', data)
    //   //io.sockets.emit('mouse',data);
    // }

}
