// var xoff1 = 0;
// var xoff2 = 10000;

var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400,400);
  fill(255);
}

function draw() {
  background(51);

  stroke(255);
  noFill();
  beginShape();
  var xoff = start;

  for (var x = 0; x < width; x++) {
    stroke(255);
    //var y = noise(xoff) * 100 + height/2 + sin(xoff) * height/2;
    var n = map(noise(xoff), 0, 1, 0, height);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s + n;
    vertex(x,y);
    xoff += inc;
  }
  endShape();
  start += inc;
  //var x= random(width);
  // var x= map(noise(xoff1),0,1,0,width);
  // var y= map(noise(xoff2),0,1,0,width);
  // xoff1 += 0.02;
  //
  // xoff2 += 0.02;
  //
  // ellipse(x,y,24,24);
}
