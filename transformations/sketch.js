let angle = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);


  push();
  translate(200,200);
  rotate(angle);
  scale(4);
  stroke(255);
  fill(100);
  rect(0,0,100,50);

  pop();



  x = x + 2;
  angle = angle + 5;

}
