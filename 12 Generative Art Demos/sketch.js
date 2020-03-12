//Color Demo

const RECT_WIDTH = 10;
const RECT_HEIGHT = 50;
let colors = []; //fill with HEX codes as strings

function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  randomSeed(0);
  drawRowRGB(height*0.2);
  drawRowHSB(height/2);
}

function customColor(yPos){
  colorMode(HSB,360,100,100);
  for (let x = 0; x<width; x+=RECT_WIDTH){
    fill();
    rect(x,yPos,RECT_WIDTH,RECT_HEIGHT);
  }
}

function drawRowRGB(yPos){
  colorMode(RGB,255);
  for (let x = 0; x<width; x+=RECT_WIDTH){
    fill(random(255),random(255),random(255));
    rect(x,yPos,RECT_WIDTH,RECT_HEIGHT);
  }
}

function drawRowHSB(yPos){
  colorMode(HSB,360,100,100);
  for (let x = 0; x<width; x+=RECT_WIDTH){
    fill(x/2 % 360,map(mouseY,0,height,0,300),300);
    rect(x,yPos,RECT_WIDTH,RECT_HEIGHT);
  }
}

function border(){
  strokeWeight(15);
  rect(width/2,height/2,width,height);
  strokeWeight(2);
}