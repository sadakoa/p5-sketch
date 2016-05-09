var border;

function setup() {
  createCanvas(windowWidth,windowHeight);
  border = 30;
  background(0);
  stroke(255);
  for (var y = 0; y < height; y += border) {
    for (var x = 0; x < width; x += border) {
      if (random([1],[5]) > 1) {
        line(x, y, x+border, y);
      } else {
        line(x, y, x+border, y+border);
      }
    }
  }
}


function draw() {
}
