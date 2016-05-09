function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
  background(0);
  push();
  noFill();
  stroke('#4BB20D');
  strokeWeight(5);
  translate(width*0.5, height*0.5);
  rotate(frameCount / 80);
  polygon(0, 0, 150, 8);
  pop();
}

var polygon = function(x, y, radius, points) {
  var angle = TWO_PI / points;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx,sy);
  }
  endShape(CLOSE);
}
