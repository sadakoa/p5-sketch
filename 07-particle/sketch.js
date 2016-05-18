var num;
var agents = [];
var col = [];
var fieldIntensity = 20,
  noiseScale = 2000,
  radius = 400,
  stepSize = 1;
var showText = true;
var a = .15,
  bg = 255,
  c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight-4);
  background(bg);
  num = 1000;
  createStuff();
  initColors(a);
}

function draw() {
  for (var i = 0; i < agents.length; i++) {
    agents[i].update();
    agents[i].paint();
  }
  if (frameCount % 100 === 0) c++;
  noStroke();
  fill(255, 200);
  textAlign(RIGHT);
}

var createStuff = function() {
  agents = [];
  var step = 15;
  for (var x = width /2 - radius; x < width / 2 + radius; x += step) {
    for (var y = height / 2 - radius; y < height / 2 + radius; y += step) {
      var distance = dist(x, y, width / 2, height /2);
      if (distance < radius ) {
        agents.push(new Agent(createVector(x,y)));
      }
    }
  }
}


var Agent = function(position) {
  this.angle = random(TWO_PI);
  this.stepSize = stepSize;
  this.position = position;
  this.outside = false;

  this.update = function() {
    this.angle = noise(this.position.x / noiseScale, this.position.y / noiseScale) * fieldIntensity;
    this.position.x += cos(this.angle) * this.stepSize;
    this.position.y += sin(this.angle) * this.stepSize;
  }

  this.paint = function() {
    fill(col[c % col.length]);
    noStroke();
    ellipse(this.position.x, this.position.y, this.stepSize, this.stepSize);
  }
}

function init() {
  background(bg);
  noSmooth(random(9999));
  c = 0;
  showText = true;
  initColors(a);
  createStuff(col);
}

function initColors(alphaValue) {
  col = [color('rgba(84,121, 128,' + alphaValue + ')'), color('rgba(69,173, 168,' + alphaValue + ')'), color('rgba(157,224,173,' + alphaValue + ')'), color('rgba(229,252,194,' + alphaValue + ')')];
}
