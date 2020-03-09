//Multi coloured grid
//Cayden Hnatiuk
//CS30
//Feb. 27th / 2020

let gridSpacing = 20;// defining the size of squares

function mouseClicked(){
  //resizes gridSpacing based on mouse click with shift
  windowResized();
  rectGrid();
  if (keyIsDown(SHIFT)){
    gridSpacing += 1;
  }
  else if (gridSpacing !== 8){
    gridSpacing -= 1;
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function keyTyped(){
  //resets grid if a key is typed
  rectGrid();
}

function rectGrid(){
  // Draws grid
  for(let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y < height; y += gridSpacing){
      fill(random(1,255),random(1,255),random(1,255));
      if(x + gridSpacing <= width && y + gridSpacing <= height){
        rect(x,y,gridSpacing,gridSpacing);
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectGrid();
}

function draw() {
  
}
