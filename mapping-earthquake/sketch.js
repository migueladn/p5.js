
var accessToken = 'pk.eyJ1IjoibWlndWVsYWRuIiwiYSI6ImNqYzQ5N3VzNTBpbmQyeG1zZzhhNmpnbWoifQ.qPzt0a7fpQlQ3kHO-YTHsw';

var mapimag;

var clat = 0;
var clon = 0;

var lat = 49.2827;
var lon = -123.1207;

var zoom = 1;
var earthquakes;

function preload() {
    mapimage = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token='+accessToken)
    //earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
    earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}


function mercX(lon) {
  lon = radians(lon);
  var a = (256/PI) * pow(2,zoom);
  var b = (lon + PI);
  return a * b;
}
function mercY(lat) {
  lat = radians(lat);
  var a = (256/PI) * pow(2,zoom);
  var b = tan(PI/4 + lat/2)
  var c = PI - log(b);

  return a * c;
}

function setup() {
  createCanvas(1024,512);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimage,0,0);

  for (var i = 0; i < earthquakes.length;i++) {
    var data = earthquakes[i].split(/,/);

    var lat = data[1];
    var lon = data[2];

    var mag = data[4];

    mag = pow(10, mag)
    mag = sqrt(mag);
    var magmax = sqrt(pow(10,10));
    stroke(255,0,255);
    var d = map(mag, 0 , magmax , 0, 180);
    var cx = mercX(clon);
    var cy = mercY(clat);

    var x = mercX(lon) - cx;
    var y = mercY(lat) -cy;

    fill(255,0,255,200);
    ellipse(x,y,d,d);

  }


}
