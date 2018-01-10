let graphics;
let x = 50;
let y = 50;

function setup() {
  createCanvas(400,300);
  //pixelDensity();
  graphics = createGraphics(100,100);

  //graphics.background(0);
  graphics.fill(100);
  graphics.ellipse(50,50,100);
}

var angle = 0;

function draw() {
  background(51);
  graphics.fill(255);
  graphics.stroke(255);
  graphics.ellipse(x, y,15);
  x += random(-5,5);
  y += random(-5,5);

  imageMode(CENTER);
  image(graphics,mouseX,mouseY);
  push();
  translate(200,200);
  rotate(angle);

  image(graphics,0,0);
  pop();

  angle += 0.1;


}
