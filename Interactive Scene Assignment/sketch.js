// Interactive Scene
// Cayden
// Feb 6th/2020
//
// Scene where you can move the character around


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  background1();
  character();
}

function keyPressed(){
  
}

function background1(){
  let sunSize = 150;
  if(keyCode === UP_ARROW){
    sunSize = sunSize +1;
    return sunSize;
  }
  background(53,179,204);
  fill(123,252,3);
  rect(0,(windowHeight/4)*3,windowWidth,windowHeight);
  fill(240,252,3);
  ellipse(windowWidth/5,windowHeight/5,sunSize,sunSize);
}

function character(){
  fill(250,220,150);
  rect(mouseX-5,mouseY-30,10,20);//neck
  ellipse(mouseX,mouseY-40,40,40);//head
  fill(255,255,255);
  ellipse(mouseX-10,mouseY-45,10,10);//left eye
  ellipse(mouseX+10,mouseY-45,10,10);//right eye
  fill(52,158,235);
  rect(mouseX-20,mouseY+105,10,50);//left leg
  rect(mouseX+10,mouseY+105,10,50);//right leg
  fill(235,85,52);
  rect(mouseX-40,mouseY-15,80,120);//body
}