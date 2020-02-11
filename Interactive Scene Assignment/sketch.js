// Interactive Scene
// Cayden
// Feb 6th/2020
//
// Scene where you can move the character around and interact with

let sunSize = 150;//global variable for sunsize
let back = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  currentBack();
  character();
  textSize(32);
  text("Cayden Hnatiuk",10,windowHeight-30);
}

function mouseWheel(){
  if(back < 3){
    back = back + 1;
  }
  else{
    back = 0;
  } 
  console.log(back);
}

function currentBack(){
  mouseWheel();
}

function sunChange(){// changes the size of the sun
  if(keyCode === RETURN){//stops the sun from expanding or decreasing
    sunSize = 150;
  }
  if(keyCode === UP_ARROW){
    sunSize = sunSize +10;//increases size of sun
  }
  if(keyCode === DOWN_ARROW){//decreases size of sun
    sunSize = sunSize -10;
  }
}

function background1(){
  sunChange();
  background(53,179,204);
  fill(123,252,3);
  rect(0,(windowHeight/4)*3,windowWidth,windowHeight);//grass
  fill(240,252,3);
  ellipse(windowWidth/5,windowHeight/5,sunSize,sunSize);//sun
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