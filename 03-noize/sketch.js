var centerX;
var centerY;
var yOff = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
  frameRate(200);
}

function draw() {
  background(0);
  stroke('#7AC14E');
  noFill();
  beginShape();

  var xOff = 0;

  for (var x = 0; x < width; x += 2) {
    var y = map(noise(xOff, yOff), 0, 1, 500, 200);
    vertex(x,y);
    xOff += 0.10;
  }
  yOff += 0.08;
  vertex(width,height);
  vertex(0,height);

  endShape(CLOSE);
}
