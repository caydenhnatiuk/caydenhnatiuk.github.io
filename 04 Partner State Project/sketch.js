// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
let state;
let SPEED = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0
  x=0
  x=0
}

function draw() {
  background(220);
  rect(x,y,40,40);
  state();
}

function moveRect(){
  if (state ===0){
    x+= SPEED;
    if (x>= width-40) {
      state =1;
    }
  }
  else if(x === width-40 && height-40>y && y>=0){
    y+=SPEED;
  }
  else if (x>0 && y === height -40){
    x-=SPEED;
  }
  else{
    y-= SPEED;
    if (y<= 0) {
      state = 0;
    }
  }
}