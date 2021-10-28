const taza = {
	volumen: 70,
	unidad: "ml",
	color: "gray",
};

// const obj_trad = {

// };

//const obj_trad = new Object();

// console.log(obj_trad, obj_constructor);

// console.log(taza.volumen);
// console.log(taza["volumen"]);

function askForAProperty() {
	const prop = prompt(`
    Que propiedad de la taza deseas conocer ?
    1. volumen 2.unidad 3.color
`);
	// para saber si una propiedad existe en un objeto lo consultamos con el operador in 👇
	if (prop in taza) {
		alert(taza[prop]);
	} else {
		alert("Propiedad desconocida");
	}
}

// askForAProperty();

// Agregando una propiedad nueva
// taza.contenido = Math.random() * 100;
taza["contenido"] = Math.random() * 100;

console.log(taza);

// Actualizacion de una propiedad

taza.volumen = 120;
// taza["volumen"] = 120;

console.log(taza);

// Borrar una propiedad

// delete taza.color;
delete taza["color"];

// console.log(taza);

// Iterando un objeto

// Object.key les genera un arreglo con las llaves de un objeto
console.log(Object.keys(taza));
// Object.entries genera un arreglo con los elemento llave-valor, dentro de otro arreglo
// Object.entries(taza)
Object.entries(taza).forEach(function (propiedades) {
	// console.log(propiedades);
	console.log(`la taza tiene: ${propiedades[0]} que es ${propiedades[1]}`);
});

// Esto es una alternativa Object.keys(taza)
for (let key in taza) {
	console.log(`la taza tiene: ${key} que es ${taza[key]}`);
}
