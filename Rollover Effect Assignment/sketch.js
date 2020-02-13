// Rollover Assignment
// Cayden Hnatiuk
// Feb 12th

let onLeft,onRight,inTop,inBottom;
let leftFade = 255
let rightFade = 255
let topFade = 255
let bottomFade = 255
const FADE_SPEED = 3

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft= 
}

function draw() {
  background(220);
  makeRectangles();
}

function makeRectangles(){
  if (onLeft && inTop){
    fill(0,0,0,leftFade)
  }
  else {
    fill(0);
    leftFade = 255
  }
  rect(0,0, width/2,height/2);//Top Left
  rect(width/2,0,width/2,height/2);//Top Right
  rect(0,height/2,width/2,height/2);//Bottom Left
  rect(width/2,height/2,width/2,height/2);//Bottom Right
}

function cursorLocation(){
  if(mouseX < width/2 && mouseY < height/2){//Top Left
    onLeft = true;
    inTop = true;
    inBottom = false;
    onRight = false;
  }
}