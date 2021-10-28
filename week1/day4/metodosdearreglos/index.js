// Métodos de arreglos

// Métedo .forEach
// Recorrer un arreglo, no nos devuelve nada pos si mismo

const arr1 = [1, 2, 3, 4];

const resultados = [];

arr1.forEach(function (elem) {
	resultados.push(elem * 2);
});
// console.log(resultados)

// Ejemplo
// ES6+
arr1.forEach((elem) => {
	console.log(elem);
});

// Tecnica de retorno implicito
// No puede contener condicionales
// No bucles o varias lineas de código

// Puede confundir
arr1.forEach((elem) => console.log(elem));

// Nosotros podemos usar el método forEach para obtener el mismo resultado de métodos que veremos a continuacion pero con más codigo y por lo tanto los otro nos ahorran tiempo y es más eficiente el código

// a) .map
// Recorrer un arreglo, con cada elemento, lo devulve en un nuevo arreglo y el nuevo arreglo es igual de largo que el original
const array = [1, 2, 3, 4];

// Retorno implicito
const newArray = array.map((numero) => numero * 2);

// tradicional
const nuevoArreglo = array.map((valorIterado) => {
	return valorIterado * 2;
});
// console.log(newArray)

// Ej 3
const personas = ["Sam", "Joss", "K'onhin"];

const nuevasPersnas = personas.map((persona) => `Hola soy ${persona}`);

// console.log(nuevasPersonas)

// Ejercicio
// Teniendo el siguiente arreglo de objetos, iterar todo el arreglo y devolver un arreglo de objetos con dos propiedades, el nombre del alumno y el promedio de sus calificaciones
const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75,
		finalExam: 90,
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65,
		finalExam: 65,
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95,
		finalExam: 99,
	},
	{
		name: "Alvaro Briattore",
		firstProject: 82,
		secondProject: 92,
		finalExam: 70,
	},
	{
		name: "Isabel Ortega",
		firstProject: 90,
		secondProject: 32,
		finalExam: 85,
	},
	{
		name: "Francisco Martinez",
		firstProject: 90,
		secondProject: 55,
		finalExam: 78,
	},
	{
		name: "Jorge Carrillo",
		firstProject: 83,
		secondProject: 77,
		finalExam: 90,
	},
	{
		name: "Miguel López",
		firstProject: 80,
		secondProject: 75,
		finalExam: 75,
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72,
		finalExam: 67,
	},
	{
		name: "Ruben Pardo",
		firstProject: 89,
		secondProject: 72,
		finalExam: 65,
	},
];
const promedios = students.map((elem) => {
	return {
		name: elem.name,
		prom: (elem.firstProject + elem.secondProject + elem.finalExam) / 3,
	};
});
console.log(promedios);

// b) .filter()
// Este método itera un arreglo y crea uno nuevo pero nos devuelve unicamente los valores que pasen una condición
// Un arreglo igual de largo que el original o mas corto

// Utilizar filter para que nos devuelva los numeros pares de un arreglo

const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Retorno implicito
const evenNumbers = num3.filter((numero) => numero % 2 === 0);
// console.log(evenNumbers)

const people = [
	{
		name: "Candice",
		age: 25,
	},
	{
		name: "Tammy",
		age: 30,
	},
	{
		name: "Allen",
		age: 20,
	},
	{
		name: "Nettie",
		age: 21,
	},
	{
		name: "Stuart",
		age: 17,
	},
	{
		name: "Bill",
		age: 19,
	},
];
const mayores = people.filter((mayores) => {
	return mayores.age >= 21;
});

console.log(mayores);

// c) .reduce()
// Es un metodo que nos trasforma una lista de valores en un solo valor

// Ejemplo
const arrayNumbers = [1, 2, 3, 4];

// Reduce comienza con el acumador igual al primer valor del arreglo y el valor actual comienza con el segundo valor del arreglo

const reduced1 = arrayNumbers.reduce((accomulador, valorActual) => {
	return accomulador + valorActual;
});
console.log(reduced1);
// Ejercicio, devolver el promedio de las calorias de un arreglo de objetos

const menu = [
	{
		name: "Carrots",
		calories: 150,
	},
	{
		name: "Steak",
		calories: 350,
	},
	{
		name: "Broccoli",
		calories: 120,
	},
	{
		name: "Chicken",
		calories: 250,
	},
	{
		name: "Pizza",
		calories: 520,
	},
];
// Podemos agregar el valor inicial del acomulador manualmente
const caloriasPromedio = menu.reduce((acc, comida) => {
	return acc + comida.calories;
}, 0);

console.log(caloriasPromedio / menu.length);

// d) .sort()
// Nos ordena un arreglo y nos devuelve un nuevo arreglo

const alumnosJs = ["Xchell", "Sinahú", "Carlos", "Rodrigo", "Javier", "Dulce"];

// Para ordenar un arreglo de strings basta con hacer lo siguiente:
const nombresOrdenados = alumnosJs.sort();

console.log(nombresOrdenados);

// Pero para ordenar un arreglo de números se hace lo siguiente

const numerosOrdenados = [20, 100, 1, 0, 2.2, -1];

// Para odenar de menor a mayor se hace lo siguiente

const numerosMenorAMayor = numerosOrdenados.sort((a, b) => {
	return a - b;
});

console.log(numerosMenorAMayor);
// Para odenar de mayor a menor se hace lo siguiente

const numerosMayorAMenor = numerosOrdenados.sort((a, b) => {
	return b - a;
});

console.log(numerosMayorAMenor);

// .reverse()
// Nos voltea un arreglo

const reversed = alumnosJs.reverse();
console.log(reversed);
