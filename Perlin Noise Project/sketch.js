// Perlin Noise Project
// Cayden Hnatiuk
// March 6th / 2020


//initializing variables
let rectWidth = 1;
let yTime = 10;

let y;

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
  let tallest = height;
  let tallestX = 0;
  for (let x = 0; x < width; x += rectWidth){

    //makes rectangles
    strokeWeight(0);
    fill(49, 158, 9);
    y = map(noise(yTime),0,1,30,height-100);
    rect(x,y,x + rectWidth,height);

    //where is tallest point
    if(y<tallest){
      tallest = y;
      tallestX = x;
    }
    yTime += 0.005;
    strokeWeight(1);
  }
  drawFlag(tallestX,tallest);  
}

function drawFlag(x,y){
  //draws flag at tallest point
  fill(255,0,0);
  line(x,y,x, y-30);
  triangle(x,y-20,x,y-30,x+10,y-25);
}