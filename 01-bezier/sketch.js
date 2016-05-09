function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    stroke(255);
}

function draw() {
  background(0);
  for (var i = 0; i < 400; i += 20) {
    bezier(mouseX-(i/2.0), mouseY-(i/2.0), 410, 20, 440, 300, 300, 300);
  }
}
