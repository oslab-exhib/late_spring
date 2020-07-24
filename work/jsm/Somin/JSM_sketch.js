
let b1, b2, b3, b4, b5;
let m1, m2, m3, m4, m5;
let c1, c2, c3, c4, c5;
var angle;

function preload() {
	b1 = loadImage('data/box1.png');
	b2 = loadImage('data/box2.png');
	b3 = loadImage('data/box3.png');
	b4 = loadImage('data/box4.png');
	b5 = loadImage('data/box5.png');

	m1 = loadImage('data/gongcha.png');
	m2 = loadImage('data/school.png');
	m3 = loadImage('data/park.png');
	m4 = loadImage('data/sea.png');
	m5 = loadImage('data/movie.png');
}

function setup() {
	createCanvas(900, 567);

	c1 = b1;
	c2 = b2;
	c3 = b3;
	c4 = b4;
	c5 = b5;

	angle = 0;
}

function draw() {
	background(255, 245, 148);
	image(c1, 0, 20 * cos(angle) + 50);
	image(c5, 0, 20 * cos(angle + 10) + 50);
	image(c3, 0, 20 * cos(angle + 20) + 20);
	image(c2, 0, 20 * cos(angle + 30) + 20);
	image(c4, 0, 20 * cos(angle + 40) + 20);

	angle = angle + PI / 100;
	//1
	if (((mouseX >= 55) && (mouseX <= 350)) && ((mouseY >= 175) && (mouseY <= 360))) {
		c1 = m1;
	} else {
		c1 = b1;
	}
	//2
	if (((mouseX >= 125) && (mouseX <= 490)) && ((mouseY >= 455) && (mouseY <= 567))) {
		c2 = m2;
	} else {
		c2 = b2;
	}

	//3
	if (((mouseX >= 375) && (mouseX <= 600)) && ((mouseY >= 333) && (mouseY <= 475))) {
		c3 = m3;
	} else {
		c3 = b3;
	}

	//4
	if (((mouseX >= 565) && (mouseX <= 800)) && ((mouseY >= 170) && (mouseY <= 310))) {
		c5 = m5;
	} else {
		c5 = b5;
	}

	//5
	if (((mouseX >= 660) && (mouseX <= 825)) && ((mouseY >= 400) && (mouseY <= 515))) {
		c4 = m4;
	} else {
		c4 = b4;
	}

}
