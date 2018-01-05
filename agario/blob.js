function Blob(x,y,r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0,0);
  this.show = function() {
    fill(174);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.update = function() {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);

    newvel.setMag(3);
    this.vel.lerp(newvel, 0.2)
    this.pos.add(this.vel);

  }

  this.eats = function(blob) {
    var d = p5.Vector.dist(this.pos, blob.pos);
    if (d < this.r + blob.r) {
      var sum = PI * this.r * this.r + PI * blob.r * blob.r;
      this.r = sqrt(sum/PI);
      //this.r += blob.r*0.2;
      return true;
    }
    else {
      return false;
    }
  }



}
