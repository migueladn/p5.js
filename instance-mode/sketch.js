
var sketch = function(p) {
  p.x = 100;
  p.y = 100;

  p.setup = function() {
    p.createCanvas(200,200);
    p.background(51);
  }
  p.draw = function() {
    p.fill(255,0,200,25);
    p.noStroke();
    p.ellipse(p.x,p.y,48,48);

    p.x = p.x + p.random(-10,10);
    p.y = p.y + p.random(-10,10);
  }
}

var myp51 = new p5(sketch);
var myp52 = new p5(sketch);

function resetBackground() {
  myp51.x = myp51.width/2;
  myp51.y = myp51.height/2;
  myp51.background(51);
}

setInterval(resetBackground, 3000);
