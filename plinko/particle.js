function Particle(x,y,r) {
  this.hue = random(360);
  this.r = r;

  var options = {
    restitution: 0.5,
    friction: 0,
    density: 1
  }
  x += random(-1,1);

  this.body = Bodies.circle(x,y,r, options);

  World.add(world, this.body);

}

Particle.prototype.isOffScreen = function() {
  var x = this.body.position.x;
  var y = this.body.position.y;
  return ( x < -50 || x > width + 50 );

}
//prototype method adds to th eobject Particle
Particle.prototype.show = function() {
  fill(this.hue,255,255);
  stroke(2559);
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  ellipse(0,0,this.r * 2);
  pop();

}
