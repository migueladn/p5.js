let angle = 0;

let kitten;
let cam;

let graphics;


let train;

function preload() {
	kitten = loadImage('img/kitten.jpg');
  train = loadModel('train-corrected.obj');
}
function setup() {
  createCanvas(400, 300, WEBGL);

}

function draw() {
    background(0);
  // graphics.fill(255,0,255);
  // graphics.ellipse(mouseX,mouseY,20);
  ambientLight(255,0,255);
  directionalLight(255,255,255,0,0,1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
 texture(kitten);

  model(train);
  //plane(300,300);

  angle += 0.01;
}