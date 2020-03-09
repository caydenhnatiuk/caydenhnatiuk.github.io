// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  stroke(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  noStroke();
  fill(0);
  if (mouseX<240&&mouseY<135){//top left
    rect(0,0,width/2,height/2);
  }
  else if (mouseX>240&&mouseY<135){
    rect(width/2,0,width,height/2);
  }
  else if (mouseX<240&&mouseY>135){
    rect(0,135,240,135);
  }
  else if (mouseX>240&&mouseY>135){
    rect(240,135,240,135);
  }
}
