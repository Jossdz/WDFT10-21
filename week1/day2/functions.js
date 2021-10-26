// parametros sera esas "variables" que defino en la declaracion de la funcion - 👇
function sayHi(username) {
	console.log("Hola", username);
}

// console.log(username);

// argumento es el dato que se usa como valor para el parametro de la funcion
// -- 👇
sayHi("Abril"); // Invocacion de la funcion sayHi
// |
// |
// // |
// function sayHi("Abril"){
//     console.log("hola", "Abril")
// }
sayHi("xchell"); // Invocacion de la funcion sayHi

// function addNumbers(n1, n2) {
// 	return `${n1 + n2}`;
// }

// console.log(typeof addNumbers(4, 4));
// // console.log(`Hola soy pepito y tengo ${addNumbers(4, 1)} a~os`);

// function getRandomNumbers(quantity) {
// 	let numbers = "";
// 	for (let index = 0; index < quantity; index++) {
// 		numbers += `User ${index + 1} - ${Math.random()}`;
// 	}
// 	return numbers; // "0.76253871-0.12341234-0.3243523"
// }

// console.log(getRandomNumbers(3));

// const users = ["xchell", "pablo", "sam", "Hector"];
// const users2 = ["Martin", "k'onhin", "Sinuhe"];

// function countUsers(usersList) {
// 	let count = 0;

// 	for (let index = 0; index < usersList.length; index++) {
// 		count++;
// 	}

// 	return count;
// }

// function countUsers(usersList) {
// 	return usersList.length;
// }

// console.log(countUsers(users));
// console.log(countUsers(users2));

// function addNumbers(n1, n2, n3){
//     return n1 + n2 + n3
// }

// function isNameOddOrEven(name) {
// 	if (name.length % 2 === 0) {
// 		return `${name} has an even number or letters`;
// 	} else {
// 		return `${name} has an odd number or letters`;
// 	}
// }

function isNameOddOrEven(name) {
	if (name.length % 2 === 0) {
		// El return rompe la ejecucion del codigo posterior
		return `${name} has an even number or letters`;
		// Este codigo nunca se lee por javascript
		console.log("algo");
	}
	return `${name} has an odd number or letters`;
}

console.log(isNameOddOrEven("Martin"));

function getAverage(list) {
	if (!list.length) return `Necesito un arreglo`;

	let count = 0;
	for (let index = 0; index < list.length; index++) {
		count += list[index];
	}

	return count / list.length;
}

console.log(getAverage([1, 2, 3]));

/// Arrays
// index:      0       1     2   3
// const list = [true, " asdf", 3, []];

// console.log(list[1]);

const students = ["xchell", "pablo", "sam", "Hector"];
console.log("initial", students);

// Push agrega el elemento pasado como argumento al arreglo objetivo
students.push("Martin");

console.log("agregamos a martin al final de la lista", students);

// unshift agrega el elemento pasado como arg al arreglo objetivo
students.unshift("Sandy");

console.log("agregamos elemento al inicio", students);

// Remover a sam al no ser estudiante
console.log(students.indexOf("sam"));

// splice nos permite remover un elemento dado el indice de donde comenzamos a borrar y la cantidad que deseamos eliminar
students.splice(3, 1);

console.log("final", students);

function isNameOddOrEven(name) {
	if (name.length % 2 === 0) {
		return `${name} has an even number or letters`;
	} else {
		return `${name} has an odd number or letters`;
	}
}

// for (let index = 0; index < students.length; index++) {
// 	console.log(isNameOddOrEven(students[index]));
// }

// Al no tener nombre la funcion, se considera una funcion anonima
// students.forEach(function (student) {
// 	console.log(isNameOddOrEven(student));
// });

// Esto es imposible
// "asdfas".forEach(function (el) {
// 	console.log(el);
// });

let phrase = "This is long enough for a string to count it words";
// Split nos ayuda a volver un string a arreglo dado un separador
// split separa el string en un arreglo a partir del caracter que usemos como splitter/separador
let words = phrase.split(" ");

console.log(words);
// Devolver el arreglo a string
let phraseAgain = words.join(" ");

console.log(phraseAgain);
