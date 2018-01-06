
//module aliases

var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var particles=[];
var boundaries = [];

var prev = null;
var mConstraint;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);


  for (var x = 200; x < 400; x += 20) {
    var fixed = false;
    if (!prev) {
      fixed = true;
    }
    var p = new Particle(x, 100, 10, fixed);

    particles.push(p);

    if (prev) {
        var options = {
          bodyA: p.body,
          bodyB: prev.body,
          length: 20,
          stiffness: 0.4
        }
        var constraint = Constraint.create(options);
        World.add(world, constraint);
     }
      prev = p;
   } //endfor

   boundaries.push(new Boundary(200,height,width,33,0));

   var canvasmouse = Mouse.create(canvas.elt);
   canvasmouse.pixelRatio=pixelDensity();

   console.log(canvasmouse.pixelRatio);
   var options2 = {
     mouse: canvasmouse
   }

   mConstraint = MouseConstraint.create(engine,options2);
   World.add(world,mConstraint);
   console.log(mConstraint);

}

function mouseDragged() {

}

function draw() {
  background(51);
  Engine.update(engine);
  fill(255);

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
  }


  if(mConstraint.body) {
    var pos = mConstraint.body.position;
    var offset = mConstraint.constraint.pointB;
    var m = mConstraint.mouse.position;
    stroke(0,255,0);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y );
    //fill(0,255,0);
    //ellipse(pos.x,pos.y,20,20);
  }
}
