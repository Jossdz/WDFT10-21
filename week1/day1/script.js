console.log("Hola Mundo");

// Esto es codigo visible para el programador, pero que no se interpreta 3+3

/*

    Esto es un comentario multi linea

    -----
    */

//    var a = 18

//    var asistentes = 18

// Declaracion + asignacion
let a = 2;

// Declaracion
let valorEnElFuturo;

valorEnElFuturo = prompt("Ingresa un valor");

console.log(valorEnElFuturo);

// Multiple declaracion
let b, c;

// Multiple declaracion + multiple asignacion
let d = 1,
	e = 2;

// Problema del tipado dinamico

let multiplicador = 8;

let deuda = 10;

deuda = "12";

console.log("resultado", multiplicador + deuda);

const MULTIPLICADOR = 10;

//MULTIPLICADOR = 5

// Tipos de datos: NUMEROS Y STRINGS

let number = 5;

number = number + 10; // Esto es esquivalente a:
// number += 10

// Si solo se quiere aumentar en uno podemos hacer:

number++;

// STRINGS

// Hay 3 formas diferentes de declarar un string:

// 1. ""
// Dato: Debemos escapar comillas dobles con \ (backslash)
const teacherName = 'joss \n "el profe"';
const dogs = 2;

// 2. ''

const samName = "Sam 'Nuestra TA' \"due~a de lilu\"";

// 3. `` (backticks)
// Ventajas:
// Podemos usar ', "" dentro de los backticks (sin necesidad del \)
// Podemos interpolar expresiones o variables dentro de nuestro string
// Los saltos de linea se respetan a la hora de usar string

const konhin = `k'onhin ${3 + 3}`;
// TODO: Recapitular concatenacion.
// console.log(teacherName + " tiene " + (1 + 1) + " perritos");
console.log(`joss

tiene ${1 + 1} perritos`);

// Propiedades de los string

console.log(samName.length);

// Metodos de los string
//Esto devuelve el caracter en cierta posicion de nuestro string
console.log(samName.charAt(0));
console.log(samName[0]);
// Este metodo, recibe un extracto del string y devuelve la posicion incial del mismo.
console.log("->", samName.indexOf("lilu"));

console.log("hola ".repeat(5));

// Extraer lilu, del string samName

console.log(samName.substring(27, 31)); // <---|
console.log(samName.substr(27, 4)); // | Se comportan igual
console.log(samName.slice(27, 31)); // <---|

console.log(samName.slice(0, -3));
