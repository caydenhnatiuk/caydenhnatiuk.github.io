//Chess Board

const GRID_SPACING = 75;

function setup() {
  createCanvas(600, 600);
}


function draw() {
  placeSquares();
}

function placeSquares(){//places and fills squares into a chessboard
  for (let x = 0; x < 600; x += GRID_SPACING){
    for (let y = 0; y < 600; y += GRID_SPACING){
      if(x % 2 === 1 && y % 2 === 1){//if x and y are odd fill white
        fill(255);
      }
      else if(x % 2 === 0 && y % 2 === 0){//if x and y are even fill white
        fill(255);
      }
      else{//colors non white rectangles into black
        fill(0);
      }
      rect(x,y,GRID_SPACING,GRID_SPACING);
    }
  }
}