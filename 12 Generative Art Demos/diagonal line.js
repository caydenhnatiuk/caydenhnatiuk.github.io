//diagonal line art

let GRID_SIZE = 50;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(10000);
}

function diagonal(x,y,s,dir){
  //dir -> 0 is ascending, 1 or anything else -> is descending

  if(dir === 0){//ascending
    line(x - s/2,y + s/2,x + s/2,y - s/2);
  }
  else if(dir=== 1){ //descending
    line(x - s/2,y - s/2,x + s/2,y + s/2);
  }
}

function draw() {
  GRID_SIZE = map(mouseX,0,width,4,100);
  randomSeed(seed);
  background(220);
  border();
  createTiles();
}

function createTiles(){
  for(let x = GRID_SIZE/2; x < width; x += GRID_SIZE){
    for(let y = GRID_SIZE/2; y < height; y += GRID_SIZE){
      diagonal(x,y,GRID_SIZE,int(random(2)));
    }
  }
}

function border(){
  strokeWeight(15);
  rect(0,0,width,height);
  strokeWeight(2);
}