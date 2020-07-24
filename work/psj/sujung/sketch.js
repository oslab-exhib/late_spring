var x, y;
let w; //color variables
let img, flower, f, bf, spring; //image variables
let pic = [];
let font; //font variables

function preload() {
  font = loadFont('data/BaskervilleMTStd-Italic.otf');
  img = loadImage('data/movie.png');
  flower = loadImage('data/flower3.jpg');
  spring = loadImage('data/spring.jpg');
  bf = loadImage('data/d.png');
  f = loadImage('data/f2.png');
  for (let i = 0; i < 5; i++){
    pic[i] = loadImage('data/'+i + '.jpg');
  }
}

function setup() {
  createCanvas(900, 1000);
  background(0);
  x = 200;
  y = 200;
  w = color(255, 255, 255);
}

function draw() {
  textFont(font, 20);
  image(flower, 0, 0, 900, 1500);
  image(spring, 50, 50, 800, 500);
  noStroke();
  if ((mouseX > 0) && (mouseX < 900)) {
    if ((mouseY > 0) && (mouseY < 350)) {
      let r = int(random(0, 5));
      image(pic[r], 50, 50, 800, 500);
    }
  }
  image(img, 50, 50, 800, 900);
  image(f, -150, 600, 500, 500);
  image(bf, 730, 430, 270, 250);
  fill(230, 220, 200, 200);
  rect(720, 640, 160, 30);
  fill(0);
  text('Spring', 780, 660);
}