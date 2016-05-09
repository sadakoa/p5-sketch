// 配列作成
var border = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  // 配列個数分Borderオブジェクト初期化して生成
  for (var i = 0; i < 800; i++) {
    border[i] = new Border();
  }
}

function draw() {
  background(0);
  // 配列分表示
  for (var i = 0; i < 800; i++) {
    border[i].display();
    border[i].move();
  }
}

function Border() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.speed = random(4.0);

  // 移動
  this.move = function() {
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  };

  // 表示
  this.display = function() {
    stroke(200);
    strokeWeight(0.5);
    noFill();
    noFill();
    ellipse(this.x, this.y , 5, 5);
  };
}
