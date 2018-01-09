

var circles = [];

function setup() {
  createCanvas(640,360);

  var protection = 0;
  while(circles.length < 300) {
  //for(var i = 0; i < 2255; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random(12,36)
    }

    fill(255,0,150,100);
    noStroke();
    var notOverLapping = true;
    for(var k = 0; k < circles.length;k++) {
      var d = dist(circles[k].x,circles[k].y, circle.x,circle.y);

      if (d < (circles[k].r+ circle.r)) {
        notOverLapping = false;
      }
    }
    if (notOverLapping) {
      ellipse(circle.x,circle.y,circle.r*2,circle.r*2);
      circles.push(circle);
    }
    protection++;
    if(protection > 50000) break;
  }
}

function draw() {

}
