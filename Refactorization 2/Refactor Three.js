//Black and White Target

let ringSize = 400; //initializing ringSize variable

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(240);
  circleSizes();
}

function circleSizes(){//places 10 increasingly smaller circles
  ringSize = 400;
  for (let i = 0; i < 10; i++){
    ellipse(width/2,height/2,ringSize,ringSize);
    ringSize -= 40;
  }
}
