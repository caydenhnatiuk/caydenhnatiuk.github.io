// Rollover Assignment
// Cayden Hnatiuk
// Feb 12th

x=mouseX;
y=mouseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(0,0, width/2,height/2);//Top Left
  rect(width/2,0,width/2,height/2);//Top Right
  rect(0,height/2,width/2,height/2);//Bottom Left
  rect(width/2,height/2,width/2,height/2);//Bottom Right
}

function cursorLocation(){
  if(x < width/2 && y < height/2){
    topLeft = true;
  }
}