//Multi coloured grid
//Cayden Hnatiuk
//CS30
//Feb. 27th / 2020

let gridSpacing = 30;

function mouseClicked(){
  if(!gridSpacing === 1){
    gridSpacing -= 1;
  }
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
  if(mouseClicked()){
    rectGrid();
  }
}
