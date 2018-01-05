function Alien(x,y) {
	this.x = x;
	this.y = y;
	this.r = 30;
	this.toDestroy = false;
	this.toFinish = false;

	this.show = function() {
		fill(255,0,200);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}

	this.move = function() {
		this.y += 1;

		if ((this.y+this.r) > height) {
			this.toFinish = true;
		}
	}

	this.destroy = function() {
		this.toDestroy = true;
	}

}