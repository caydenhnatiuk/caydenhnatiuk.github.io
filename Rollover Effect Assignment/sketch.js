// Rollover Assignment
// Cayden Hnatiuk
// Feb 12th

let onLeft,onRight,inTop,inBottom;
let q1 = 255;
let q2 = 255;
let q3 = 255;
let q4 = 255;
let q1Fill=0;
let q2Fill=0;
let q3Fill=0;
let q4Fill = 0;
let quadrant = 0;
const FADE_SPEED = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  cursorLocation();
  makeRectangles();
}

function makeRectangles(){
  if (quadrant === 1){
    q1Fill = 0;
  }
  else q1Fill += 10;
  fill(q1Fill);
  rect(0,0, width/2,height/2);//Top Left
  if (quadrant === 2){
    q2Fill = 0;
  }
  else q2Fill += 10;
  fill(q2Fill);
  rect(width/2,0,width/2,height/2);//Top Right
  if (quadrant === 3){
    q3Fill = 0;
  }
  else q3Fill += 10;
  fill(q3Fill);
  rect(0,height/2,width/2,height/2);//Bottom Left
  if (quadrant === 4){
    q4Fill = 0;
  }
  else q4Fill += 10;
  fill(q4Fill);
  rect(width/2,height/2,width/2,height/2);//Bottom Right
}

function cursorLocation(){
  if(mouseX < width/2 && mouseY < height/2){//Top Left
    quadrant = 1;
  }
  else if(mouseX>width/2 && mouseY < height/2){//Top Right
    quadrant = 2;
  }
  else if(mouseX < width/2 && mouseY > height/2){//Bottom Left
    quadrant = 3;
  }
  else if(mouseX > width/2 && mouseY > height/2){// Bottom Right
    quadrant = 4;
  } 
}