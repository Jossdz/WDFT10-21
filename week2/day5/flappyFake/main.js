// Traer los elementos del DOM
const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

// Variables globales
let intervalId;
let frames = 0;
const GRAVITY = 0.1;
const obstacles = [];
let isGameOver = false;

// Clases
// Clase generica con lo minimo indispensable para que un elemento del juego sea representado y se logre pintar.
class GameAsset {
	constructor(x, y, width, height, img) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = new Image();
		this.image.src = img;
	}

	draw() {
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}

class Board extends GameAsset {
	constructor(x, y, width, height, img) {
		super(x, y, width, height, img);
	}
	// Hacemos polimorfismo a Draw (Significa que cambiamos el comportamiento de la clase padre, en la clase hija.)
	draw() {
		this.x--;
		// Efecto de fondo infinito
		// Cuando la posicion de x es menor al ancho negatico (cuando la primer imagen sale del canvas, reseteamos x a 0).
		if (this.x < -this.width) this.x = 0;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.drawImage(
			this.image,
			this.x + this.width,
			this.y,
			this.width,
			this.height
		);
	}
}

class Character extends GameAsset {
	constructor(x, y, width, height) {
		super(x, y, width, height);
		this.img1 = new Image();
		this.img2 = new Image();
		this.img3 = new Image();
		this.img4 = new Image();
		this.img1.src = "images/frame-1.png";
		this.img2.src = "images/frame-2.png";
		this.img3.src = "images/frame-3.png";
		this.img4.src = "images/frame-4.png";
		this.animation = 0;
		this.vy = 0;
	}
	draw() {
		this.vy += GRAVITY;
		this.y += this.vy;

		if (frames % 10 === 0) {
			this.animation++;
			if (this.animation === 4) this.animation = 1;
		}

		if (this.animation === 1) {
			ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
		} else if (this.animation === 2) {
			ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
		} else if (this.animation === 3) {
			ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
		} else {
			ctx.drawImage(this.img4, this.x, this.y, this.width, this.height);
		}
	}

	crash() {
		return this.y < 0 || this.y + this.height > $canvas.height;
	}

	jump() {
		this.vy -= 5;
	}

	isTouching(obstacle) {
		return (
			this.x < obstacle.x + obstacle.width &&
			this.x + this.width > obstacle.x &&
			this.y < obstacle.y + obstacle.height &&
			this.y + this.height > obstacle.y
		);
	}
}

class Obstacle extends GameAsset {
	constructor(y, width, height, img) {
		super($canvas.width, y, width, height, img);
	}
	draw() {
		this.x--;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

// Instancias
const boardImage =
	"https://i.pinimg.com/736x/76/26/54/76265438a20f36412e5688522097eee6.jpg";

const flappyImage = "images/frame-1.png";

const board = new Board(0, 0, $canvas.width, $canvas.height, boardImage);
const flappy = new Character(30, $canvas.height / 3, 60, 60);

// funciones principales
function start() {
	if (intervalId) return;
	intervalId = setInterval(() => {
		update();
	}, 1000 / 60);
}

function update() {
	frames++;
	generateObstacles();
	// checkCollitions();
	clearCanvas();
	board.draw();
	flappy.draw();
	drawObstacles();
	gameOver();
}

function gameOver() {
	if (isGameOver) {
		ctx.font = "40px sans-serif";
		ctx.fillText("Game Over", $canvas.width / 3, $canvas.height / 2);
	}
}
// Funciones de apoyo

function clearCanvas() {
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

function generateObstacles() {
	// Si quisieran modificar el periodo de generacion de los obstaculos, habria que colocar los 300 en una variable (obstaclesRate) e incrementarla cada cierto tiempo.
	if (frames % 300 === 0) {
		const limitHeight = 300;
		const window = 200;
		const randomHeight = Math.floor(Math.random() * limitHeight);
		const obstacle1 = new Obstacle(0, 50, randomHeight);
		const obstacle2 = new Obstacle(
			randomHeight + window,
			50,
			$canvas.height - (randomHeight + window)
		);

		obstacles.push(obstacle1);
		obstacles.push(obstacle2);
	}
	// Nos aseguramos de solo tener los obstaculos que se muestran en pantalla
	obstacles.forEach((obs, index) => {
		if (obs.x + obs.width < 0) obstacles.splice(1, index);
	});
}

function checkCollitions() {
	if (flappy.crash()) {
		clearInterval(intervalId);
		isGameOver = true;
	}
	obstacles.forEach((obs) => {
		if (flappy.isTouching(obs)) {
			clearInterval(intervalId);
			isGameOver = true;
		}
	});
}

function drawObstacles() {
	obstacles.forEach((obstacle) => {
		obstacle.draw();
	});
}

// Interaccion de usuarios

document.onkeyup = (event) => {
	switch (event.key) {
		case " ":
			// deberiamos hacer que flappy brinque
			flappy.jump();
			break;
		case "Enter":
			// Inicializar el juego
			start();
			break;
		default:
			break;
	}
};
