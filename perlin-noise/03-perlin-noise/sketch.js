// var xoff1 = 0;
// var xoff2 = 10000;

var inc = 0.01;

var scl = 20;
var cols, rows;

function setup() {
  createCanvas(200,200);
  background(0);
  cols = floor(width/scl);
  rows = floor(height/scl);

}

function draw() {

  var yoff = 0;

  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff,yoff) * 255;

      xoff += 0.02;
      fill(random(255));
      rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;

  }

}
