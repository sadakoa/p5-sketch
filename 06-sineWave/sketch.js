// http://p5js.org/examples/examples/Math_Sine_Wave.php

var xspacing = 16;
var w;
var theta = 0.0;
var amplitude = 100.0;
var period = 300.0;
var dx;
var yvalues;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width+20;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x += dx;
  }
}

function renderWave() {
  fill(255);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 10,10);
  }
}
