

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  stroke(0);//dividing screen into quarters
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  noStroke();
  fill(0);
  cursorLocation();
}

function cursorLocation(){
  if (mouseX < width/2 && mouseY < height/2){//top left
    rect(0,0,width/2,height/2);
  }
  else if (mouseX > width/2 && mouseY < height/2){//top right
    rect(width/2,0,width,height/2);
  }
  else if (mouseX < width/2 && mouseY > height/2){//bottom left
    rect(0,height/2,width/2,height/2);
  }
  else if (mouseX > width/2 && mouseY > height/2){//bottom right
    rect(width/2,height/2,width,height);
  }
}