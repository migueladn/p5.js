function Plinko(x,y,r) {
  this.r = r;

  var options = {
    isStatic: true,
    restitution: 1,
    friction: 0
  }
  this.body = Bodies.circle(x,y,r, options);
  this.body.label = "plinko";
  World.add(world, this.body);

}

//prototype method adds to th eobject Particle
Plinko.prototype.show = function() {
  fill(127);
  noStroke();
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  ellipse(0,0,this.r * 2);
  pop();

}
