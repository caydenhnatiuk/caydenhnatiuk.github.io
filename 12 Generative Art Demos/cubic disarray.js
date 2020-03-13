//Offset Demo

let gridSpacing = 20;
const PADDING = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
}

function draw() {
  randomSeed(10);
  background(220);
  border();
  drawGrid();
}

function drawGrid(){
  for(let x = gridSpacing/2 + PADDING; x < width - PADDING; x += gridSpacing){
    for(let y = gridSpacing/2 + PADDING; y < height - PADDING; y += gridSpacing){
      let amp = map(y, gridSpacing/2 + PADDING, height - PADDING,0,45);
      push();
      noFill();
      translate(x,y);
      translate(random(-amp/10,amp/10),0);
      translate(0,random(-amp/5,amp/2));
      rotate(radians(random(-amp,amp)));
      rect(0,0,gridSpacing,gridSpacing);
      pop();
    }
  }
}

function border(){
  strokeWeight(15);
  rect(width/2,height/2,width,height);
  strokeWeight(2);
}