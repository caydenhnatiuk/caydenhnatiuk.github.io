// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(r,0,0);
  ellipse(mouseX - 40, mouseY -40, 40, 40)
}

function mousePressed(){
  if (r === 0){
    r=255;
  
  } 
else {
  r=0;
}
}