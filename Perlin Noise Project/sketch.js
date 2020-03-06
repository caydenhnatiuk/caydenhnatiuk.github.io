// Perlin Noise Project
// Cayden Hnatiuk
// March 6th / 2020

let rectWidth = 2;
let y;
let yTime = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  strokeWeight(0);
  generateTerrain();
}

function draw() {
  
}

function generateTerrain(){
  for (let x = 0; x < width; x += rectWidth){
    fill(49, 158, 9);
    rect(x,y,x + rectWidth,height);
    y = map(noise(yTime),0,1,30,height-100);
    yTime += 0.005;
  }
}

function drawFlag(){
  let
}