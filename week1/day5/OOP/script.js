// console.log("OOP");

// const objLiteral = {
// 	prop: "value",
// };

// const edgarCar = {
// 	color: "rojo",
// 	gas: 20,
// 	status: false,
// 	owner: "Edgar",
// 	showMesage: function () {
// 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// 	},
// };

// const jorgeCar = {
// 	color: "blanco",
// 	gas: 20,
// 	status: false,
// 	owner: "Jorge",
// 	showMesage: function () {
// 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// 	},
// };

// const abrilCar = {
// 	color: "azul",
// 	gas: 20,
// 	status: false,
// 	owner: "Abril",
// 	// funcion tradicional anonima
// 	showMesage: function () {
// 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// 	},
// };

// const hectorCar = {
// 	color: "rojo",
// 	gas: 20,
// 	status: false,
// 	owner: "Hector",
// 	// Formato de metodo de un objeto literal ES6
// 	showMesage() {
// 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// 	},
// };
// //         👇 Metodo
// edgarCar.showMesage();
// jorgeCar.showMesage();
// abrilCar.showMesage();
// hectorCar.showMesage();

class Car {
	// El constructor define los valores iniciales para nuestros objetos nuevos
	constructor(color, gas, owner) {
		this.color = color;
		this.gas = gas;
		this.status = false;
		this.owner = owner;
		this.showMessage = function () {
			console.log(`${this.owner} tiene un coche color ${this.color}`);
		};
		this.toggleStatus = function () {
			this.status = !this.status;
		};
	}
	// Metodos
	// showMessage() {
	// 	console.log(`${this.owner} tiene un coche color ${this.color}`);
	// }
}
// Almaceno en edgarCar un nuevo carro a partir de la fabrica de carros.
const edgarCar = new Car("rojo", 30, "Edgar");
const jorgeCar = new Car("blanco", 20, "Jorge");
const abrilCar = new Car("azul", 40, "Abril");
const hectorCar = new Car("rojo", 60, "Hector");

// edgarCar.showMessage();
// jorgeCar.showMessage();
// abrilCar.showMessage();
// hectorCar.showMessage();

console.log(edgarCar.status);

edgarCar.toggleStatus();

console.log(edgarCar.status);
