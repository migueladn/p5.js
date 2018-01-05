function Ship() {

	this.x = width/2;
	this.speed = 20;
	this.height = height-20;


	this.show = function() {
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.height,20,20);

	}

	this.move = function(keyCode) {
		if (keyCode === LEFT_ARROW) {
			this.x -= this.speed;
		}

		if (keyCode === RIGHT_ARROW) {
			this.x += this.speed;
		}

		if (this.x < 0) {
			this.x = 0;
		}
		if (this.x > (width-this.speed)) {
			this.x = width-this.speed;
		}
	}

	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.height;
	}

}