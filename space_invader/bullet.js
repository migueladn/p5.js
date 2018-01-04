function Bullet(x,y) {
	this.x = x;
	this.y = y;
	this.r = 4;
	this.toDestroy = false;

	this.show = function() {
		fill(175);
		rectMode(CENTER);
		rect(this.x,this.y, this.r*2, this.r*2);
	}

	this.move = function() {
		this.y = this.y - 5;
		
		if (this.y < 0) {
			this.destroy();
		}
	}

	this.hits = function(alien) {
		var d = dist(this.x,this.y,alien.x,alien.y);

		if (d < this.r + alien.r) {
			return true;
		}
		else {
			return false;
		}
	}

	this.destroy = function() {
		this.toDestroy = true;
	}
}