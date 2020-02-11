// State variables demo

let onLeft,onRight;//Boolean state variables
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function renderRectangles(){
  if (onLeft){//onLeft === true
    fill(255,0,0,leftFade);
    leftFade += FADE_SPEED;
  }
  else {
    fill(255);
    leftFade = 0;
  }
  //draw two rectangles of varying fill values on the screen
  rect(0,0,width/2,height);
  if(onRight){
    fill(0,0,255,rightFade);
    rightFade += FADE_SPEED;
  }
  else {
    fill(255);
    rightFade = 0;
  }
  rect(width/2,0,width/2,height);
}

function updateCurrentSide(){
  // updates variables to represent which side the mouse is currently on
  if (mouseX<width/2){
    //mouse on left
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse on right
    onLeft = false;
    onRight = true;
  }
}

function draw() {
  background(220);
  updateCurrentSide();
  //print("Left: "+ onLeft,"Right: "+onRight);
  renderRectangles();
  if(mouseX > width*.25 && mouseX<width*.75 && mouseY>height*.25 && mouseY< height*75){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  rect(width*.25,height*.25,width/2,height/2);
}

