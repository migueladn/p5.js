
//module aliases

var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

var engine;
var world;
var particles=[];
var boundaries = [];

var prev = null;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  boundaries.push(new Boundary(200,height,width,33,0));


  for (var x = 200; x < 400; x += 40) {
    var fixed = false;
    if (!prev) {
      fixed = true;
    }
    var p = new Particle(x,100,5, fixed);

    particles.push(p);

    if (prev) {
        var options = {
          bodyA: p.body,
          bodyB: prev.body,
          length: 50,
          stiffness: 0.4
        }
        var constraint = Constraint.create(options);
        World.add(world, constraint);
     }
      prev = p;
   } //endfor

}

function mouseDragged() {

}

function draw() {
  background(51);
  Engine.update(engine);
  fill(255);

  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
  }

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  /*line(particles[0].body.position.x,
       particles[0].body.position.y,
       particles[1].body.position.x,
       particles[1].body.position.y)
       */
}
