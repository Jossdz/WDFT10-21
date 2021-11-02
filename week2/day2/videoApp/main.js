const $titleInput = document.querySelector("#title");
const $imageInput = document.querySelector("#image");
const $addMovieButton = document.querySelector("#add-movie");

const $moviesContainer = document.querySelector("#movies");
const $favoritesContainer = document.querySelector("#favorites-list");

// 1. agregar el evento al boton para agregar peliculas ✅
// 2. la funcion de agregar peliculas, debe crear el html necesario para la pelicula y agregarlo al contendor de peliculas

function addMovie() {
	const movieTitle = $titleInput.value;
	const movieImage = $imageInput.value;

	const $artitle = document.createElement("article");

	$artitle.classList.add("movie");

	$artitle.innerHTML = `
        <img src="${movieImage}"/>
        <div class="movie-info">
            <h3>${movieTitle}</h3>
            <button onclick="addToFavorite('${movieTitle}')">⭐</button>
        </div>
    `;

	$moviesContainer.appendChild($artitle);

	$titleInput.value = "";
	$imageInput.value = "";
}

function addToFavorite(title) {
	const $li = document.createElement("li");
	$li.innerText = title;

	$favoritesContainer.appendChild($li);
}

$addMovieButton.onclick = addMovie;
