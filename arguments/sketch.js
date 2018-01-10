var particles = [];
function setup() {
  createCanvas(300,300);

  particles[0] = new Particle();
  particles[1] = new Particle(150,50);
  var v = createVector(150,100);
  particles[2] = new Particle(v);
  particles[3] = new Particle("100,150");
}

function Particle(a,b) {
  if(a instanceof p5.Vector) {
    this.x = a.x;
    this.y = a.y;
  } else if (typeof(a) === "string") {
    var nums = a.split(',');
    this.x = Number(nums[0]);
    this.y = Number(nums[1]);
  } else {
    this.x = a || 100;
    this.y = b || 100;
  }

  this.show = function() {
    fill(266);
    ellipse(this.x, this.y, 16,16);
  }
}

function sum(arr)  {
  var val = 0;
  if (arr instanceof Array) {
    for (var i = 0; i < arr.length; i++) {
      val+= arr[i];
    }
  } else {
    for (var i = 0; i < arguments.length; i++) {
      val += arguments[i];
    }
  }
  return val;
}

function draw() {
  background(0);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
  }

}
