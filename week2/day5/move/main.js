// Traer los elementos del DOM (En especial el canvas)
const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

// Definir variables globales
let frames = 0;
const gravity = 0.98;
const friction = 0.9;
const keys = {};
const bullets = [];

// Definir las clases del juego (propiedades y metodos)

class Character {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 40;
		this.height = 40;
		this.vx = 0;
		this.vy = 0;
		this.jumpStrength = 24;
		this.jumps = 0;
		this.jumping = false;
	}

	draw() {
		this.vy += gravity;
		this.y += this.vy;
		this.x += this.vx;
		this.vx *= friction;
		if (this.y > $canvas.height - this.height) {
			this.y = $canvas.height - this.height;
			this.jumps = 0;
			this.jumping = false;
		}

		ctx.fillStyle = "black";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	jump() {
		if (this.jumps >= 1) {
			this.jumping = true;
		}

		if (!this.jumping) {
			this.jumps++;
			this.vy = -this.jumpStrength;
		}
	}

	moveLeft() {
		this.vx--;
	}
	moveRight() {
		this.vx++;
	}
	stop() {
		this.vx = 0;
	}
}

class Bullet {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.color = "blue";
	}

	draw() {
		this.y--;
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

// Instancias de las clases

const cuadrito = new Character(40, 0);

// Crear las funciones del flujo del juego

function start() {
	setInterval(() => {
		update();
	}, 1000 / 60);
}

function update() {
	// 1. calcular el estado
	frames++;
	checkKeys();
	// if (frames % 60 === 0) {
	// 	console.log(keys);
	// }
	// 2. limpiar el canvas
	clearCanvas();
	// 3. dibujar
	cuadrito.draw();
	printBullets();
}

// Crear las funciones de apoyo

function clearCanvas() {
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

function checkKeys() {
	if (keys.ArrowLeft) cuadrito.moveLeft();
	if (keys.ArrowRight) cuadrito.moveRight();
	if (keys.ArrowUp) cuadrito.jump();
	if (keys.e) {
		const bullet = new Bullet(cuadrito.x + 15, cuadrito.y);
		bullets.push(bullet);
	}
}

function printBullets() {
	bullets.forEach((bullet) => bullet.draw());
}

// Funciones de interaccion con el usuario

document.onkeydown = (event) => {
	// Asignar a la propiedad del objeto keys una llave con el nombre de la tecla
	keys[event.key] = true;

	// if (event.key === "e") {
	// 	const bullet = new Bullet(cuadrito.x + 15, cuadrito.y);
	// 	bullets.push(bullet);
	// }
};

document.onkeyup = (event) => {
	keys[event.key] = false;
	cuadrito.stop();
};

// Iniciar el juego
start();
