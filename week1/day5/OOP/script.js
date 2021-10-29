// // console.log("OOP");

// // const objLiteral = {
// // 	prop: "value",
// // };

// // const edgarCar = {
// // 	color: "rojo",
// // 	gas: 20,
// // 	status: false,
// // 	owner: "Edgar",
// // 	showMesage: function () {
// // 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// // 	},
// // };

// // const jorgeCar = {
// // 	color: "blanco",
// // 	gas: 20,
// // 	status: false,
// // 	owner: "Jorge",
// // 	showMesage: function () {
// // 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// // 	},
// // };

// // const abrilCar = {
// // 	color: "azul",
// // 	gas: 20,
// // 	status: false,
// // 	owner: "Abril",
// // 	// funcion tradicional anonima
// // 	showMesage: function () {
// // 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// // 	},
// // };

// // const hectorCar = {
// // 	color: "rojo",
// // 	gas: 20,
// // 	status: false,
// // 	owner: "Hector",
// // 	// Formato de metodo de un objeto literal ES6
// // 	showMesage() {
// // 		console.log(`${this.owner} tiene un coche color ${this.color}`);
// // 	},
// // };
// // //         👇 Metodo
// // edgarCar.showMesage();
// // jorgeCar.showMesage();
// // abrilCar.showMesage();
// // hectorCar.showMesage();

// class Car {
// 	// El constructor define los valores iniciales para nuestros objetos nuevos
// 	constructor(color, gas, owner) {
// 		this.color = color;
// 		this.gas = gas;
// 		this.status = false;
// 		this.owner = owner;
// 		this.showMessage = function () {
// 			console.log(`${this.owner} tiene un coche color ${this.color}`);
// 		};
// 		this.toggleStatus = function () {
// 			this.status = !this.status;
// 		};
// 	}
// 	// Metodos
// 	// showMessage() {
// 	// 	console.log(`${this.owner} tiene un coche color ${this.color}`);
// 	// }
// }
// // Almaceno en edgarCar un nuevo carro a partir de la fabrica de carros.
// const edgarCar = new Car("rojo", 30, "Edgar");
// const jorgeCar = new Car("blanco", 20, "Jorge");
// const abrilCar = new Car("azul", 40, "Abril");
// const hectorCar = new Car("rojo", 60, "Hector");

// // edgarCar.showMessage();
// // jorgeCar.showMessage();
// // abrilCar.showMessage();
// // hectorCar.showMessage();

// const cars = [edgarCar, jorgeCar, abrilCar, hectorCar];

// console.log(cars);

// cars.forEach((car) => car.showMessage());

// POKEMON 😺

class Pokemon {
	constructor(name, hp, damage, nickname, number) {
		this.name = name;
		this.nickname = nickname;
		this.number = number;
		this.hp = hp;
		this.damage = damage;
	}

	getInfo() {
		console.log(
			`Hola soy ${this.name} mejor conocido como ${this.nickname} y mi numero es ${this.number}`
		);
	}
	// Este pokemon reduce la vida de su enemigo en funcion de su ataque
	attack(enemyPokemon) {
		enemyPokemon.hp -= this.damage;
	}
}
// La nueva clase 👇   Hereda de 👇
class WaterTypePokemon extends Pokemon {
	constructor(name, hp, attack, nickname, number) {
		super(name, hp, attack, nickname, number); // Super, manda los argumentos que recibe la clase hija, a la clase padre para su correcto funcionamiento.
		this.type = "water";
	}

	// Polimorfismo, modificar el comportamiento de una clase heredada.
	getInfo() {
		console.log(
			`Hola soy ${this.name} mejor conocido como ${this.nickname} y mi numero es ${this.number} y soy de tipo ${this.type}`
		);
	}
}

const squirtle = new WaterTypePokemon("Squirtle", 50, 6, "vamoa calmarno", 2);
const rattata = new Pokemon("Rattata", 80, 5, "ratita", 4);

// Comienza la batalla

console.log(
	squirtle,
	`
    `,
	rattata
);

console.log("Lamalamita: ", squirtle.hp, "vs", rattata.hp);

squirtle.attack(rattata);

console.log("Lamalamita: ", squirtle.hp, "vs", rattata.hp);
rattata.attack(squirtle);

console.log("Lamalamita: ", squirtle.hp, "vs", rattata.hp);
