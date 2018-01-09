var particles = [];
function setup() {
  createCanvas(400,300);




}

function mousePressed() {
  particles.push(new Particle(mouseX,mouseY));
}

function draw() {
  background(200);
  for (var i =0; i < particles.length;i++) {
    particles[i].update();
    particles[i].show();
  }

  line(frameCount,0, frameCount, height);


}
