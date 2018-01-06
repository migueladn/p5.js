
//module aliases

var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events
    MouseConstraint = Matter.MouseConstraint;

var engine;
var world;

var particles=[];
var plinkos=[];
var cols = 11;
var rows = 11;
var bounds = [];

var ding;
function preload() {
    ding = loadSound('ding.mp3');
}

function mousePressed() {
  ding.play();
}



function setup() {
  var canvas = createCanvas(600,720);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;

  function collision(event) {
    var pairs = event.pairs;
    for(var i = 0; i < pairs.length;i++) {
      var labelA = pairs[i].bodyA.label;
      var labelB = pairs[i].bodyB.label;
      if (labelA == "particle" && labelB == "plinko") {
        ding.play();
       }
       if (labelA == "plinko" && labelB == "particle") {
         ding.play();
        }

    }

  }

  Events.on(engine, 'collisionStart', collision);


  Engine.run(engine);
  createParticle();
  var spacing = width/cols;
  for (var j = 0; j < cols; j++) {
    for (var i = 0; i < rows; i++) {
      var x= i * spacing;
      if (j % 2 == 0) {
        x += spacing/2;
      }

      var y = spacing + j * spacing;
        plinkos.push(new Plinko(x,y, 8));
    }
  }

  var b = new Boundary(width/2,height + 50, width, 100);
  bounds.push(b);

  for (var i = 0; i < cols + 1; i++) {
    var x = i * spacing;
    var h = 70;
    var w = 10;
    var y = height - h / 2;
    var b = new Boundary(x,y,w,h);
    bounds.push(b);
  }

}



function mouseDragged() {

}

function createParticle() {
  var p = new Particle(300,50, 10);
  particles.push(p);
}
function draw() {
  if (frameCount % 60 == 0) {
    createParticle();
  }
  background(0,0,0);

  fill(255);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      World.remove(world,particles[i].body);
      particles.splice(i,1);
      i--;
    }
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }

  for(var i = 0; i < bounds.length; i++) {
    bounds[i].show();
  }

}
