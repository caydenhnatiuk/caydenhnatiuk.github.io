// Perlin Noise Project
// Cayden Hnatiuk
// March 6th / 2020

let rectWidth = 1;
let y;
let yTime = 10;

let curY;
let lastY;
let greatestY;
let greatestX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  strokeWeight(0);
}

function draw() {
  generateTerrain();
}

function generateTerrain(){
  yTime = 10;

  for (let x = 0; x < width; x += rectWidth){
    fill(49, 158, 9);
    rect(x,y,x + rectWidth,height);
    y = map(noise(yTime),0,1,30,height-100);
    curY = y;
    yTime += 0.005;
    drawFlag();
    if(x===0){
      lastY=curY;
      greatestY = curY;
    
    }
    else if(curY < lastY){
      greatestY = curY;
      lastY = curY;
    
    }
    else if(curY >= lastY){
      lastY = curY;
    }
  }
  print(greatestY);
  //print(curY);
  //print(lastY);
  //print(y);
}

function drawFlag(){
  strokeWeight(2);
  line(greatestX,greatestY,greatestX,greatestY - 15);
}