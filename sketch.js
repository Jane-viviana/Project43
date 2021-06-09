var hr,hourAngle;
var min,minAngle;
var sec,secAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  //setting a background
  background(0); 

  //translation and rotation
  translate(200,200);
  rotate(-90);

  //pre-defined function 
  hr = hour();
  min = minute();
  sec = second();

  //to create an rotation
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hourAngle = map(hr % 12,0,12,0,360);
  
  //drawing seconds hand
  push();
  rotate(secAngle);
  stroke(220,20,60);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  //drawing minutes hand
  push();
  rotate(minAngle);
  stroke(255,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //drawing hour hand
  push();
  rotate(hourAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  //drawing the arcs
  strokeWeight(10);
  noFill();

  //seconds
  stroke(220,20,60);
  arc(0,0,300,300,0,secAngle);

  //minutes
  stroke(255,255,0);
  arc(0,0,280,280,0,minAngle);
  
  //hours
  stroke(0,0,255);
  arc(0,0,280,280,0,hrAngle);

  drawSprites();
}