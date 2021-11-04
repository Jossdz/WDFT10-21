const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const ctx = $canvas.getContext("2d");

let frames = 0;
const cows = [];

function getRandomColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// // 1. Forma 1: setInterval
// function start() {
// 	setInterval(() => {
// 		update();
// 	}, 1000 / 60);
// }

// function update() {
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(250, 150, 100, 100);
// }

// 2. Forma 2: SetTimeout
// function start() {
// 	setTimeout(() => {
// 		update();
// 	}, 300);
// }

// function update() {
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(250, 150, 100, 100);
// 	setTimeout(() => update(), 300);
// }

// 3. Forma 3: requestAnimationFrame
// function start() {
// 	update();
// }

// function update() {
// 	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(250, 150, 100, 100);
// 	requestAnimationFrame(update);
// }

class Board {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = $canvas.width;
		this.height = $canvas.height;
		this.image = new Image();
		this.image.src =
			"https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png";
	}

	draw() {
		this.x--;
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

class Character {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 50;
		this.image = new Image();
		this.move = 8;
		this.jump = 20;
		this.image.src =
			"https://static.wikia.nocookie.net/esmegaman/images/3/30/MM11-MegaMan.png";
	}

	draw() {
		this.y++;
		if (this.y > $canvas.height - this.height - 84)
			this.y = $canvas.height - this.height - 84;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	moveUp() {
		this.y -= this.jump;
	}
	moveDown() {
		this.y += this.move;
	}
	moveLeft() {
		this.x -= this.move;
	}
	moveRight() {
		this.x += this.move;
	}

	isTouching(obj) {
		return (
			this.x < obj.x + obj.width &&
			this.x + this.width > obj.x &&
			this.y < obj.y + obj.height &&
			this.y + this.height > obj.y
		);
	}
}

class Enemy extends Character {
	constructor(x, y) {
		super(x, y);
		this.image.src =
			"https://www.pngkey.com/png/full/73-731722_cow-png-transparent-image-cow-png.png";
	}
	draw() {
		this.x--;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}

const p1 = new Character(0, 0);
const board = new Board();

function start() {
	// setInterval(() => {
	update();
	// }, 1000 / 60);
}

function update() {
	// 1. calcular o recalcular el estado de nuestro programa
	frames++;
	checkKeys();
	generateCows();
	checkCollitions();

	// 2. Limpiar el canvas
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
	// 3. Dibujar los elementos
	board.draw();
	p1.draw();
	drawCows();
	requestAnimationFrame(update);
}

// Funciones de apoyo

function checkCollitions() {
	cows.forEach((cow) => {
		if (p1.isTouching(cow)) {
			alert("Moriste");
		}
	});
}

function generateCows() {
	if (frames % 200 === 0) {
		const y = Math.floor(Math.random() * 380);
		const cow = new Enemy(500, y);
		cows.push(cow);
	}
}

function drawCows() {
	cows.forEach((cow) => cow.draw());
}

function checkKeys() {
	document.onkeydown = (event) => {
		switch (event.key) {
			case "ArrowUp":
				p1.moveUp();
				break;
			case "ArrowDown":
				p1.moveDown();
				break;
			case "ArrowLeft":
				p1.moveLeft();
				break;
			case "ArrowRight":
				p1.moveRight();
				break;

			default:
				break;
		}
	};
}

$button.onclick = start;
