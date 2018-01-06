
//module aliases

var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var circles=[];
var boundaries = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  boundaries.push(new Boundary(150,100,width*0.6,20,0.4));
  boundaries.push(new Boundary(250,300,width*0.6,20,-0.3));


  // var options = {
  //   isStatic: true,
  // }
  //ground = Bodies.rectangle(200,height -50,width,10, options);
  //ground = new Boundary(200,height -50,width,3);
  //World.add(world);
}

function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY,random(5,10)));
}

function draw() {
  background(51);
  fill(255);
  console.log(circles.length,world.bodies.length);

  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i,1);

      i--;
    }
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  //ground.show();
}
