// can start live server by using control + option + 3

let col = {
  r: 255,
  g: 0,
  b:0
};

let spot = {
  x: 100,
  y: 50,
};

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    background(0);
  }
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 255);
  spot.x = random(0, width);
  spot.y = random(0, height);
  let size = random(40, 150);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, size, size);
}
