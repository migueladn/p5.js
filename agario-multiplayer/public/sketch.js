
function preload() {

}


var blobs = [];
var blob;
var zoom = 1;
var newzoom = 1;
var socket;


function setup() {

  socket = io.connect('http://localhost:3000');

  createCanvas(600,600);
  blob = new Blob(random(width), random(height), random(8,24));

  var data = {
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r
  }
  socket.emit('start', data);


  // for (var i = 0; i < 100; i++){
  //   var x = random(-width, width);
  //   var y = random(-height, height);
  //   blobs.push(new Blob(x, y, 16));
  // }

  socket.on('hearbeat',function(data) {
    //console.log("RECIBIDO: "+listofblobs);
    //blobs.push(new Blob)
    blobs = data;
    console.log(data);
  });

}

function keyPressed() {

}

function draw() {
  background(0);

  //translate(width/2-blob.pos.x, height/2-blob.pos.y);
  translate(width/2, height/2);
  newzoom = 64 / blob.r;
  zoom= lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);


  for (var i = blobs.length-1; i >= 0; i--){
    var id = blobs[i].id;
    //if (id.substring(2,id.length) != socket.id) {
    if (id !== socket.id) {
      fill(255,0,255);
      ellipse(blobs[i].x, blobs[i].y, blobs[i].r * 2, blobs[i].r*2);
      fill(255);
      textAlign(CENTER);
      textSize(4);
      text(blobs[i].id, blobs[i].x,blobs[i].y + blobs[i].r);

      // blobs[i].show();
      // if (blob.eats(blobs[i])) {
      //   blobs.splice(i,1);
      // }
    }
  }

  blob.show();
  blob.update();
  blob.constrain();

  var data = {
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r
  }
  socket.emit('update', data);
}
