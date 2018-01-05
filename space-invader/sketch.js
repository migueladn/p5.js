
function preload() {

}

var ship;
var aliens = [];
var bullets = [];

var finish = false;
var msg = "YOU WON!";

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for (let i = 0; i < 6; i++) {
    aliens.push(new Alien((i*80+80),60));
  }
}

function keyPressed() {
    ship.move(keyCode);
    if (keyCode ===  32) {
      bullets.push(new Bullet(ship.getX(), ship.getY()));
    }
}

function draw() {
  background(0);
  if (!finish) {

    ship.show();
    for (let i = 0; i < aliens.length; i++) {
        aliens[i].show();
        aliens[i].move();
    }

    for (let i = 0; i < bullets.length; i++) {
      bullets[i].show();
      bullets[i].move();

      for (let j = 0; j < aliens.length; j++) {
        if (bullets[i].hits(aliens[j])) {
          aliens[j].destroy();
          bullets[i].destroy();

        }
      }

    }

    /* destruction */
    for (let i = 0; i < aliens.length; i++) {
      if (aliens[i].toDestroy) {
          aliens.splice(i,1);
        }

      else {
        if (aliens[i].toFinish) {
          finish = true;
          msg = "GAMEOVER";

        }
      }
    }
    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].toDestroy) {
        bullets.splice(i,1);
      }

    }

    if(aliens.length < 1) {
      finish = true;
    }
  }
  else {
    fill(255);
    textSize(100);
    text(msg,  width/2 - 300, height/2);
  }

}