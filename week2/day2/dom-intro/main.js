// // const $cat = document.getElementById("cat");
// const $cat = document.querySelector("#cat");
// // const $title = document.querySelectorAll("h1");

// // console.log($title);

// $cat.innerHTML = "Cat Div";

// $cat.style.backgroundColor = "blue";
// $cat.style.color = "white";
// $cat.style.fontSize = "20px";

// // HTMLCollection - parece arreglo pero solo tiene indices y length
// // const mice = document.getElementsByClassName("mouse");

// // NodeList - Se comporta mas como un arreglo
// const miceCollection = document.querySelectorAll(".mouse");

// console.log(miceCollection);

// miceCollection.forEach(() => {});

// // const allDivsCollection = document.getElementsByTagName("div");

// // Obtenemos todas las coincidencias de nodos de cierta etiqueta (div)
// // Usamos querySelector para poder hacer uso de forEach, si usaramos getElementsbyTagName tendriamos que usar un for tradicional
// const allDivsCollection = document.querySelectorAll("div");

// console.log(allDivsCollection);

// function generateRandomColor() {
// 	return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// // setInterval(() => {
// // 	// Iteramos todos los elementos dentro de la coleccion de Divs que es un NodeList
// // 	allDivsCollection.forEach(($element) => {
// // 		$element.innerHTML = "Hey, soy un div";
// // 		$element.style.backgroundColor = generateRandomColor();
// // 		$element.style.fontWeight = "bold";
// // 		$element.style.color = "white";
// // 	});
// // }, 300);

// // console.log($cat.id);

// // console.log(miceCollection[0].className);

// // miceCollection[0].className += " active";

// // console.log(miceCollection[0].className);

// console.log(miceCollection[0].classList.value);

// miceCollection[0].classList.add("active");

// miceCollection[0].classList.remove("mouse");

// console.log(miceCollection[0].classList.value);

// const $emailInput = document.querySelector("#email");

// console.log($emailInput.getAttribute("type"));
// console.log($emailInput.setAttribute("dsjkhsad", "asehjjkhe"));

// console.log($emailInput.parentNode);

// ------------- Manipulacion ----------------------

const $title = document.createElement("h1"); // <h1></h1>
const $body = document.querySelector("body");

// Forma 1
$title.innerHTML = 'Fui creado a partir de <b style="color:red">JS</b>'; // <h1>Fui creado a partir de JS</h1>
// Forma 2
// const titleContent = document.createTextNode("Fui creado a partir de JS");

// $title.appendChild(titleContent);

// Ambas formas consiguen el mismo objetivo que es agregar texto a un elemento, pero la forma 2 requiere que hagamos append del nodo de texto.

console.log($title);

// Una vez creado el elemento nuevo, le hacemos append(agregamos) como hijo a una etiqueta ya existente en el html.

$body.appendChild($title);

const $button = document.createElement("button");

$button.innerText = 'Enviar <b style="color:red">JS</b>';

$body.insertBefore($button, $title);

$body.removeChild($button);

const $unnecesaryLink = document.querySelector("a");

$body.removeChild($unnecesaryLink);

//-------------------------------------------------------------------
const $list = document.querySelector("#list");
const $AddElementButton = document.querySelector("#add-element");
const $itemInput = document.querySelector("#item-input");

let counter = 1;

function addElement() {
	// if (counter > 3) return;
	const $li = document.createElement("li");
	$li.innerText = $itemInput.value;
	$list.appendChild($li);
	counter++;
}

// Agregar al evento del click en el boton un funcion que debe invocar cuando dicho evento pase. Por tanto no usamos parentesis.
$AddElementButton.onclick = addElement;

function sayHi() {
	console.log("Hi");
}
