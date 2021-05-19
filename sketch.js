var hour;
var min;
var sec;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hour = hour();
  min = minute();
  sec = second();
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}