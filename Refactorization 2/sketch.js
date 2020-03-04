//Chess Board

const GRID_SPACING = 75;

function setup() {
  createCanvas(600, 600);
}


function draw() {
  placeSquares();
}

function placeSquares(){
  for (let x = 0; x < 600; x += GRID_SPACING){
    for (let y = 0; y < 600; y += GRID_SPACING){
      rect(x,y,GRID_SPACING,GRID_SPACING);
      if (y % 2 === 0 || x % 2 === 0 && x !== y){
        fill(0);
      }
      else{
        fill(255);
      }
    }
  }
}