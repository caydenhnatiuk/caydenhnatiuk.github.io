// generative art warmup
// cayden
// march 13th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let radius = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
}

function generateRects(){
  translate(width/2,height/2);
  for (let i = 0; i < radius; i++){
    let 
  }
}

function verticalRandomRect(x,y){
  rect(x,y,5,random(5,25));
}

function horizontalRandomRect(x,y){
  rect(x,y,random(5,25),5);
}