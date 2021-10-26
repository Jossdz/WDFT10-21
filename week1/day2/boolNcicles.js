// Manejo de Datos
// Variables(mutables no mutables)
// Inmutabilidad
let city = "miami";
console.log(city[0]); // <== m
city[0] = "M";
console.log(city); // <== miami

// Tipos de datos
// 1.- String(Métodos y propiedades) - siempre van entre comillas "" o '' o ``
// 2.- Number
// Concatenacion
let ejemplo1 = "15" + 50; // => 1550 - string
let ejemplo2 = 15 + 50; // => 65 - number
let ejemplo3 = "Konhin" + 24; // => Konhin24 - string

console.log("1" * 30); // => Si multiplicas un string por un number el tipo de dato que obtines es un number
// NaN - Not a number
let ejemplo4 = "Konhin" / 4; // => Not a number

// Operadores extras
let myAge = 25;
myAge++; // el ++ solo le suma 1
myAge--; // el -- solo le resta 1
myAge = myAge + 5;
myAge += 5;
myAge -= 5;
myAge *= 5;
myAge /= 5;
myAge **= 5;
console.log(myAge);

// 3. Boolean
// Falso o verdadero
/**
 * Nos sirven para dar opciones que tiene el programa para ejecutarse, dependiendo de una expresión
 */

// Operadores logicos
/**
 * mayor que (2 > 1) = true
 * menor que (2 < 1) = false
 * mayor igual (2 >= 2) = true
 * menor igual (2 <= 0) = false
 * igual igual (2 == 2) = true
 * ('2' == 2) = true
 * igual igual me va a comparar unicamente el contenido, sin importar el tipo de dato que tenga
 *
 * identico - ('2' === 2) = false
 * porque identico compara tambien el tipo de dato
 *
 * diferente - (2 != '2') = false no compara el tipo de dato
 * diferente estricto - (2 !== '2') = true compara tambien el tipo de dato
 *
 */
// Condicionales
if (1 < 2) {
	console.log("Si, 1 es menor que 2");
}

if (1 > 2) {
	console.log("Esto nunca se ejecuta");
}

// Al signo de igual se conoce como simbolo de asignación
const teacher = "K'onhin";

if (teacher === "Konhin") {
	console.log(`My teacher is ${teacher}`);
} else {
	console.log(`My teacher is not ${teacher}`);
}
// Boolean Logic operators
/**
 * OR || -> Nos sirve para anidar condiciones
 * Retorna true si una o ambas condiciones se cumplen
 * Retorna falso si ambas condiciones no se cumplen
 */
// Bloque de codigo que me diga si falta algun campo por llenar
let someName = "K'onhin";
let age = 25;
if (!age || !someName) {
	console.log("Por favor llena todos los campos");
} else {
	console.log("Datos enviados");
}

// AND && -> Retorna fal
// Bloque de codigo con condionales que me imprima si puedo entrar o no a un bar
const edad = 12;
if (edad >= 18) {
	console.log("Pase usted");
} else if (edad < 18 && edad >= 0) {
	console.log("No puedes pasar");
} else {
	console.log("inserta una edad valida");
}

// Switch
// Cuando tenemos muchos ifs podemos optar por un switch y todo sea más legible
// La sentencia break termina el caso actual.
const character = prompt("Favorite Game of Thrones main character:");
let house = "";

switch (character) {
	case "Khal Drogo":
		house = "Dothraki Horselord";
		break;
	case "Daenerys":
		house = "Targaryen";
		break;
	case "Jon Snow":
	case "Sansa":
	case "Arya":
		house = "Stark";
		break;
	default:
		house = "other";
}

console.log(`Your favorite character is from the house ${house}.`);

// 4.- Null
// En JavaScript, a menudo se usa null para representar variables de valor desconocido:
// O datos que obtendremos en un futuro
let info = null;
console.log(info); // <== null

// 5.- Undefined
// Es un valor que se asigna automáticamente a las variables cuando se declaran. Sin asignar algun valor.
let name;
console.log(name); // <== undefined

// D. Array

// E. Object

// Cliclos

// nos permiter realizar tareas o repetir codigo mientras una condición se cumpla.

// Ciclos
// Nos permiten realizar tareas o repetir codigo mientras una condicion se cumpla

// For, While
// Una palabra reservada es una palabra que forma parte del lenguaje o sintaxis de JS osea que no podemos usar variebles con palabras reservadas.

// Bloque de codigo que me imprima numeros del 0 al 10
for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
// Imprima las letras de un nombre con un ciclo
const myName = "K'onhin";

for (let index = 0; index < myName.length; index++) {
	console.log(myName[index]);
}

// Switch
// Cuando anidamos muchos if's odemos optar por este y el codigo sera mas legible
// Break termina el caso actual
const character = prompt("Personaje favorito de GOT").toLowerCase();

let house = "";

switch (character) {
	case "daenerys":
		house = "Targeryen";
		break;
	case "khal drogo":
		house = "Dothraki";
		break;
	case "jon snow":
	case "sansa":
	case "arya":
		house = "Stark";
		break;
	default:
		house = "other";
		break;
}
