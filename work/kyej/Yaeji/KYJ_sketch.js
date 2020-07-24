let back, ch, s, s1, mo, I;
let ff;
//PImage
var trans = 255;
var trans1 = 255;
//int
let show_1 = false;
//boolean
let stars;
//stars particle
let value = 50;

function preload() {
	back = loadImage('data/i.png');
	ch = loadImage('data/ch.png');
	I = loadImage('data/l.png');
	s = loadImage('data/s.png');
	s1 = loadImage('data/s1.png');
	mo = loadImage('data/mo.png');
}

function setup() {
	createCanvas(600, 600);
	stroke(242, 213, 105);
	text("pressed Button L", 270, 30);
	stars = createGraphics(600, 600);
	ff =s;
}

function mousePressed() {
	if (mouseIsPressed && (mouseX > width / 2 + 85 && mouseX < width / 2 + 230 &&
			mouseY > width / 2 - 250 && mouseY < width / 2 - 180)) {
		trans1 -= 255;

	}

	if (mouseIsPressed && (mouseX > width / 2 + 65 && mouseX < width / 2 + 180 &&
			mouseY > width / 2 - 100 && mouseY < width / 2 - 50)) {
		trans -= 255;
	}
}

function draw() {
	image(back, 0, 0);
	push();
	tint(255, trans1);
	image(ff, 0, 0);
	pop();
	push();
	tint(255, trans);
	image(ch, 15, 150);
	pop();
	image(mo, mouseX - 250, mouseY - 250);
	stars.fill(242, 213, 105);
	stars.noStroke();
	stars.rect(230, 300, 5, 5);
	stars.rect(280, 310, 5, 4);
	stars.rect(265, 350, 2, 2);
	stars.rect(200, 400, 2, 1);
	stars.rect(310, 300, 2, 3);
	stars.rect(280, 270, 2, 1);
	stars.rect(240, 290, 2, 3);
	stars.rect(170, 290, 5, 5);
	stars.rect(150, 320, 3, 3);
	if (value == 100) {
		image(stars, 0, 0);
	} else if (
		value == 0) {
		ff = s1;
	}
}

function keyTyped() {
	if (key === 'l') {
		value = 100;
	} else if (key === 'f') {
		value = 0;
	}
	// uncomment to prevent any default behavior
	// return false;
}
