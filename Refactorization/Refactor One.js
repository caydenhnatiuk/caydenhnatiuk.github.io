let rectWidth, rectHeight, speedX, speedY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = 200; rectHeight = 300; speedX = random(3, 8); speedY = random(3, 8);// Places rectangle
}

function draw() {
  move();
  background(80, 80, 80);
  rect(rectWidth, rectHeight, 250, 75);
}

function move() {
  rectWidth += speedX; rectHeight += speedY;
  if (rectHeight >= height - 75 || rectHeight <= 0) {
    speedY = speedY * -1; 
  }

  if (rectWidth >= width - 250 || rectWidth <= 0) {
    speedX = speedX * -1;
  }
}