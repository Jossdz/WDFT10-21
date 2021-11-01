// const globalVariable = "Variable global";

// // console.log(globalVariable);

// function returnGlobalVariable() {
// 	return globalVariable;
// }

// function addNumbers(n1, n2 = n1) {
// 	const n3 = 3;
// 	return n1 + n2 + n3;
// }

// // console.log(n3);
// // console.log(addNumbers(2, 2));
// // console.log(addNumbers(4));

// {
// 	const blockVariable = 3;

// 	console.log(blockVariable);
// }

// // console.log(blockVariable);

// class Obj {
// 	constructor(name) {
// 		const a = "a";
// 		this.name = name + a;
// 	}
// }

// let i = 0;

// console.log(`Before Iteration: ${i}`);

// for (let i = 1; i <= 10; i++) {
// 	console.log(`Iteration number: ${i}`);
// 	// if (i === 10) {
// 	// 	let i = 40;
// 	// 	console.log(globalVariable);
// 	// 	console.log(i);
// 	// }
// }

// console.log(`Iteration finished: ${i}`);

// // let a = 3;

// console.log(window.a);

// const obj = {};

// obj.prop = "prop";

// console.log(obj);

// const arr = [];

// arr.push("el");

// console.log(arr);

// console.log(withVar);

// var withVar = 1;

// // console.log(withLet);

// // let withLet = 0;

// myFn();

// function myFn() {
// 	console.log("mi funcion ");
// }

// let a = 1;

// let b = 2;

// function inner() {
// 	a = 4; // reassigned

// 	let b = 3; // declared in an inner scope
// }

// inner();

// console.log(a); // => 4

// console.log(b); // => 2

// Debbuging

// function add(n1, n2) {
// 	return n1 + n2;
// }
// function subtract(n1, n2) {
// 	return n1 - n2;
// }
// function multiply(n1, n2) {
// 	return n1 * n2;
// }
// function divide(n1, n2) {
// 	return n1 / n2;
// }

// function make_calc(n1, n2, operation) {
// 	if (operation == "add") {
// 		return add(n1, n2);
// 	}
// 	if (operation == "subtract") {
// 		return subtract(n1, n2);
// 	}
// 	if (operation == "multiply") {
// 		return multiply(n1, n2);
// 	}
// 	if (operation == "divide") {
// 		return divide(n1, n2);
// 	}
// }

// function init() {
// 	var result = 0;

// 	var sum = make_calc(2, 3, "add");
// 	var subs = make_calc(2, 3, "subtract");
// 	var mult = make_calc(2, 3, "multiply");
// 	var div = make_calc(2, 3, "divide");

// 	result = sum + subs + mult + div;

// 	console.log(result);
// }

// init();

// ------------- Async ------------

// Set inteval ejecuta el callback cada tanto tiempo definido por el segundo argumento
const intervalId = setInterval(() => {
	console.log("Hola");
}, 1000);

console.log("IntervaId:", intervalId);
// SetTimeout ejecuta el callback una vez pasado el tiempo pasado como segundo argumento
setTimeout(() => {
	// Clear interval es la forma de pausar y/o deter un invervalo
	clearInterval(intervalId);
	console.log("han pasado 5 segundos ya");
}, 5000);
