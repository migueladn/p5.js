var imgs = [];
var song1;
var song2;
var songs = [];

var angle = 0;
var loading = true;
var counter = 0;
var totalSongs = 10;

function preload() {

}
function progress(percent) {
  console.log(floor(percent*100));
}
function error(err) {
  console.log(err);
}
function soundLoaded(song) {
  //song.play();
  loading = true;
}
function rainbowSongLoad(filename) {
  loadSound(filename,soundLoaded, error, progress);
  function soundLoaded(sound) {
    console.log(filename);
    songs.push(sound);
//    songs[index] = sound;
    //songs[index].play();
    counter++;
    if (counter == totalSongs ) {
      loading = false;
    }
  }
}

function setup() {
  createCanvas(300,300);
  console.log(floor(millis()) + ' milliseconds');
  for(var i = 0; i < totalSongs; i++) {
    //songs.push('rainbow'+ i +'.mp3');
    rainbowSongLoad('rainbow'+ i +'.mp3');
  }
}

function draw() {
  background(51);
  if (loading) {
    stroke(255);
    noFill();
    rect(10,10,200,20);

    noStroke();
    fill(255,100);
    var w = 200 * counter/totalSongs;
    rect(10,10,w,20);

    translate(width/2, height/2);
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    line(0,0,100,0);
    angle += 0.1;
  } else {
    background(0,255,0);
  }

}
