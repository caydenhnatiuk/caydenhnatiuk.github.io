// Rollover Assignment
// Cayden Hnatiuk
// Feb 12th

let onLeft,onRight,inTop,inBottom;
let q1 = 255;
let q2 = 255;
let q3 = 255;
let q4 = 255;
let q1Fill,q2Fill,q3Fill,q4Fill = 0;
let quadrant = 1;
const FADE_SPEED = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  makeRectangles();
}

function makeRectangles(){
  if (quadrant === 1){
    q1Fill = 255;
  }
  else {
    q1Fill -= 10;
  }
  fill(q1Fill);
  rect(0,0, width/2,height/2);//Top Left
  rect(width/2,0,width/2,height/2);//Top Right
  rect(0,height/2,width/2,height/2);//Bottom Left
  rect(width/2,height/2,width/2,height/2);//Bottom Right
}

function cursorLocation(){
  if(mouseX < width/2 && mouseY < height/2){//Top Left
    quadrant = 1;
  }
  else if(mouseX>width/2 && mouseY < height/2){//Top Right
    quadrant = 2;
  }
}