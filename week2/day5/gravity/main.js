const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

const $fast = document.querySelector("#fast");
const $slow = document.querySelector("#slow");

let frames = 0;
const gravity = 0.31;

// ---- Clases ----

class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.radius = 30;
		this.vx = 7;
		this.vy = 7;
	}

	draw() {
		if (this.y + this.radius > $canvas.height) {
			this.vy = 0;
		} else {
			this.vy += gravity;
			this.y += this.vy;
		}

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}

// --- Instancias ---

const ball1 = new Ball(60, 40);
const ball2 = new Ball(4, 145);
const ball3 = new Ball(145, 64);
const ball4 = new Ball(64, 235);
const ball5 = new Ball(87, 165);

const balls = [ball1, ball2, ball3, ball4, ball5];

// ------ Flujo del juego -----

function start() {
	setInterval(() => {
		update();
	}, 1000 / 60);
}

function update() {
	// 1. calcular o recalcular el estado
	frames++;
	// balls.forEach((ball) => {
	// 	ball.x += ball.vx;
	// 	ball.y += ball.vy;
	// 	if (ball.y + ball.vy > $canvas.height || ball.y + ball.vy < 0) {
	// 		ball.vy *= -1;
	// 	}
	// 	if (ball.x + ball.vx > $canvas.width || ball.x + ball.vx < 0) {
	// 		ball.vx *= -1;
	// 	}
	// });
	// 2. limpiar el canvas
	clearCanvas();
	// 3. dibujar
	balls.forEach((ball) => ball.draw());
	// ball1.draw();
	// ball2.draw();
}

// ------ funciones de apoyo -------

function clearCanvas() {
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

// Interacciones del usuario
$fast.onclick = () => {
	balls.forEach((ball) => {
		ball.vx *= 1.1;
		ball.vy *= 1.1;
	});
};

$slow.onclick = () => {
	balls.forEach((ball) => {
		ball.vx *= 0.9;
		ball.vy *= 0.9;
	});
};

// Iniciamos el juego
start();
