//Multi coloured grid
//Cayden Hnatiuk
//CS30
//Feb. 27th / 2020

let gridSpacing = 20;// defining the size of squares

function mouseClicked(){
  rectGrid();
  if (keyIsDown(SHIFT)){
    gridSpacing += 1;
  }
  else if (gridSpacing !== 8){
    gridSpacing -= 1;
  }
}

function keyTyped(){
  rectGrid();
}

function rectGrid(){
  for(let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y < height; y += gridSpacing){
      fill(random(1,255),random(1,255),random(1,255));
      rect(x,y,gridSpacing,gridSpacing);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectGrid();
}

function draw() {
  
}
