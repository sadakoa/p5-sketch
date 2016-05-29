'use strict';

var max_Distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill('#47C6AC');
  max_Distance = dist(0, 0, width, height);
}

function draw() {
  mouseDragg();
}

var mouseDragg = function () {
    background(0);

    for( var i = 0; i <= width; i+= 30 ) {
      for( var j = 0; j <= height; j += 30 ) {
        var size = dist(mouseX, mouseY, i, j+10);
        size = size/max_Distance * 40;
        rect(i,j,size,size);
      }
    }
}
