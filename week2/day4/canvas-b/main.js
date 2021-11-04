const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

// ctx.fillStyle = "#31daFB";

// ctx.strokeStyle = "blue";

// ctx.fillRect(10, 10, 50, 50);
// ctx.strokeRect(100, 10, 50, 50);
// ctx.clearRect(20, 40, 60, 60);

// // ---- PATHS -----
// ctx.lineJoin = "bevel";
// ctx.strokeStyle = "black";
// ctx.lineWidth = "10";
// // 1. comenzamos el trazo
// ctx.beginPath();
// // 2. movemos la pluma al punto inferior izquerdo
// ctx.moveTo(10, $canvas.height - 10);
// // 3. trazamos nuestra primer linea hacia la parte inf derecha
// ctx.lineTo($canvas.width - 10, $canvas.height - 10);
// // 4. trazamos la segunda linea para conseguir el resultado que buscamos
// ctx.lineTo($canvas.width - 10, 10);
// // 5. Dibujamos el contorno de la figura que generamos
// ctx.stroke(); // Podemos dibujar el contorno
// // ctx.fill(); // Podemos rellenar la figura que generamos
// // 6. cerrar el trazo o terminar el trazo
// ctx.closePath();

// // Arc
// ctx.fillStyle = "yellow";
// ctx.beginPath();

// ctx.arc(200, 200, 130, 0, Math.PI * 1.9, false);
// ctx.lineTo(200, 200);

// // ctx.stroke();

// ctx.fill();

// ctx.fillStyle = "black";
// ctx.font = "40px sans-serif";

// ctx.fillText("Score: 0", 130, 50);
let x = 0;
let y = 0;
const $button = document.querySelector("button");

let intervalId;

const image = new Image();

image.src =
	"https://static.wikia.nocookie.net/esmegaman/images/3/30/MM11-MegaMan.png";

console.log(image);

$button.onclick = () => {
	if (intervalId) return;
	intervalId = setInterval(() => {
		ctx.clearRect(0, 0, $canvas.width, $canvas.height);
		ctx.drawImage(image, x, y, 30, 50);
		x++;
		y++;
	}, 100);
};
