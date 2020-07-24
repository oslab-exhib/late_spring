window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = 500,
		height = canvas.height = 500;
	context.imageSmoothingEnabled = true;

		context.globalCompositeOperation = 'lighter';
	var count = 0;
	const img = new Image();
	img.src = "KYE_background.png"
	var pmx = 0;
	var pmy = 0;
	var mx = 0;
	var my = 0;
	let mouse = false;
	let v = 0;
	let y=500;
	var points = [],
		sticks = [];
	gravity = 0.5,
		bounce = 0.6,
		friction = 0.999;

	points.push({
		x: 9 * 5,
		y: 10 * 5,
		oldx: 9 * 5 + Math.random() * 20 * 5 - 10 * 5,
		oldy: 10 * 5
	});
	points.push({
		x: 21 * 5,
		y: 10 * 5,
		oldx: 21 * 5,
		oldy: 10 * 5
	});
	points.push({
		x: 21 * 5,
		y: 30 * 5,
		oldx: 21 * 5,
		oldy: 30 * 5
	});
	points.push({
		x: 9 * 5,
		y: 30 * 5,
		oldx: 9 * 5,
		oldy: 30 * 5
	});
	// arms
	points.push({
		x: 1 * 5,
		y: 17 * 5,
		oldx: 1 * 5,
		oldy: 10 * 5
	});
	points.push({
		x: 29 * 5,
		y: 17 * 5,
		oldx: 29 * 5,
		oldy: 17 * 5
	});

	// legs
	points.push({
		x: 9 * 5,
		y: 45 * 5,
		oldx: 6 * 5,
		oldy: 45 * 5
	});
	points.push({
		x: 20 * 5,
		y: 45 * 5,
		oldx: 25 * 5,
		oldy: 45 * 5
	});
	// hands
	points.push({
		x: 1 * 5,
		y: 23 * 5,
		oldx: 1 * 5,
		oldy: 23 * 5
	});
	points.push({
		x: 29 * 5,
		y: 23 * 5,
		oldx: 29 * 5,
		oldy: 23 * 5
	});

	//head
	points.push({
		x: 9 * 5,
		y: -3 * 5,
		oldx: 9 * 5,
		oldy: -3 * 5
	});
	points.push({
		x: 21 * 5,
		y: -3 * 5,
		oldx: 21 * 5,
		oldy: -3 * 5
	});

	sticks.push({
		p0: points[0],
		p1: points[1],
		length: distance(points[0], points[1]),
		visible: true
	});
	sticks.push({
		p0: points[1],
		p1: points[2],
		length: distance(points[1], points[2]),
		visible: true
	});
	sticks.push({
		p0: points[2],
		p1: points[3],
		length: distance(points[2], points[3]),
		visible: true
	});
	sticks.push({
		p0: points[3],
		p1: points[0],
		length: distance(points[3], points[0]),
		visible: true
	});
	sticks.push({
		p0: points[0],
		p1: points[2],
		length: distance(points[0], points[2]),
		visible: false
	});
	// arms
	sticks.push({
		p0: points[0],
		p1: points[4],
		length: distance(points[0], points[4]),
		visible: true
	});
	// sticks.push({
	// 	p0: points[4],
	// 	p1: points[1],
	// 	length: distance(points[4], points[1]),
	// 	visible: false
	// });
	sticks.push({
		p0: points[1],
		p1: points[5],
		length: distance(points[1], points[5]),
		visible: true
	});
	// sticks.push({
	// 	p0: points[5],
	// 	p1: points[0],
	// 	length: distance(points[5], points[0]),
	// 	visible: false
	// });
	// legs
	sticks.push({
		p0: points[3],
		p1: points[6],
		length: distance(points[3], points[6]),
		visible: true
	});
	sticks.push({
		p0: points[6],
		p1: points[2],
		length: distance(points[6], points[2]),
		visible: false
	});
	sticks.push({
		p0: points[2],
		p1: points[7],
		length: distance(points[2], points[7]),
		visible: true
	});
	sticks.push({
		p0: points[7],
		p1: points[3],
		length: distance(points[7], points[3]),
		visible: false
	});
	// arms
	sticks.push({
		p0: points[4],
		p1: points[8],
		length: distance(points[4], points[8]),
		visible: true
	});
	sticks.push({
		p0: points[5],
		p1: points[9],
		length: distance(points[5], points[9]),
		visible: true
	});


	sticks.push({
		p0: points[10],
		p1: points[11],
		length: distance(points[10], points[11]),
		visible: true
	});
	sticks.push({
		p0: points[11],
		p1: points[1],
		length: distance(points[11], points[1]),
		visible: true
	});
	sticks.push({
		p0: points[1],
		p1: points[0],
		length: distance(points[1], points[0]),
		visible: true
	});
	sticks.push({
		p0: points[0],
		p1: points[10],
		length: distance(points[0], points[10]),
		visible: true
	});
	sticks.push({
		p0: points[10],
		p1: points[1],
		length: distance(points[10], points[1]),
		visible: false
	});

	function distance(p0, p1) {
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y;
		return Math.sqrt(dx * dx + dy * dy);
	}


	update();

	function update() {
		updatePoints();

		for (var i = 0; i < 3; i++) {
			updateSticks();
			constrainPoints();
		}
		render();
		requestAnimationFrame(update);
	}

	function updatePoints() {
		for (var i = 0; i < points.length; i++) {
			var p = points[i],
				vx = (p.x - p.oldx) * friction;
			vy = (p.y - p.oldy) * friction;
			p.oldx = p.x;
			p.oldy = p.y;
			p.x += vx;
			p.y += vy;
			p.y += gravity;
		}
	}

	function constrainPoints() {

		for (var i = 0; i < points.length; i++) {
			var p = points[i];
			if (p.x > width) {
				p.x = width;
				p.oldx = p.x + (p.x - p.oldx) * bounce + mx * 0.1;
			} else if (p.x < 0) {
				p.x = 0;
				p.oldx = p.x + (p.x - p.oldx) * bounce + mx * 0.1;
			}
			if (p.y > height) {
				p.y = height;
				p.oldy = p.y + (p.y - p.oldy) * bounce + my * 0.1;
			}
			if (p.y < 0) {
				p.y = 0;
				p.oldy = p.y + (p.y - p.oldy) * bounce + my * 0.1;
			}
		}
	}

	function updateSticks() {
		for (var i = 0; i < sticks.length; i++) {
			var s = sticks[i],
				dx = s.p1.x - s.p0.x,
				dy = s.p1.y - s.p0.y,
				dist = Math.sqrt(dx * dx + dy * dy);
			ratio = s.length / dist,
				midx = s.p0.x + dx / 2,
				midy = s.p0.y + dy / 2,
				offsetx = dx / 2 * ratio,
				offsety = dy / 2 * ratio;

			s.p0.x = midx - offsetx;
			s.p0.y = midy - offsety;
			s.p1.x = midx + offsetx;
			s.p1.y = midy + offsety;
		}
	}
	canvas.addEventListener("click", function (e) {
		getMousePosition(canvas, e);

	});
	canvas.addEventListener("mouseup", function (e) {
		mouseCh(true);
	});

	canvas.addEventListener("mousedown", function (e) {
		mouseCh(false);
	});

	function mouseCh(n) {
		if (n == true) {
			mx = pmx;
			my = pmy;
		} else {
			mx = 0;
			my = 0;
		}
		return mx, my;
	}

	function getMousePosition(canvas, event) {
		let rect = canvas.getBoundingClientRect();
		let x = event.clientX - rect.left;
		let y = event.clientY - rect.top;
		console.log("Coordinate x: " + x,
			"Coordinate y: " + y);
		pmx = x;
		pmy = y;
		return pmx, pmy;

	}

	function render() {
		context.clearRect(0, 0, width, height);
		context.drawImage(img, 0, 0, 500, 500);
		context.beginPath();
		context.strokeStyle = 'white';
		context.lineWidth = 1.5;

		for (var i = 0; i < sticks.length; i++) {
			var s = sticks[i];
			if (s.visible) {
				context.save();
				context.moveTo(s.p0.x, s.p0.y);
				context.lineTo(s.p1.x, s.p1.y);
				context.restore();

			}
		}
		context.stroke();

		v += mx;

		if (v > 0) {

			for (var i = 50; i < 500; i += 100) {
				let r = Math.floor(Math.random()*30);
				context.fillStyle = "rgba(255, 255, 0, 1)";
				context.beginPath();
				context.arc(i+Math.floor(Math.random()*10)-10, y, r, 0, 2 * Math.PI, false);
				context.fill();
				y = Math.floor(Math.random()*500);
//				x += Math.random();
				if(y <-25){
					y = 500;
				}
			}
		}

	}

};


