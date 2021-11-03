const metagram = new Metagram();

// Todo esto deberia ser acceso al DOM usando nuestra instancia

const $postForm = document.querySelector("#post-form");
const $postImageInput = document.querySelector("#post-image");
const $postTitleInput = document.querySelector("#post-title");
const $postDescriptionInput = document.querySelector("#post-description");
const $postsContainer = document.querySelector("#posts-container");

// Para poder prevenir que el form refresque la pagina cuando se envia el formulario, vamos a tener que acceder al evento submit del form y prevenir el comportamiento por defecto

// $postForm.addEventListener('submit', () => {

// })

$postForm.onsubmit = (event) => {
	event.preventDefault(); // De elevento que haya pasado (en este caso submit) evita el comportamiento por defecto del navegador

	const title = $postTitleInput.value;
	const description = $postDescriptionInput.value;
	const imageUrl = $postImageInput.value;

	metagram.addPost(title, description, imageUrl);

	$postTitleInput.value = "";
	$postDescriptionInput.value = "";
	$postImageInput.value = "";

	printPosts();
};

function printPosts() {
	$postsContainer.innerHTML = "";
	metagram.posts.forEach((post, index) => {
		$postsContainer.innerHTML += `
        <div class="col-xs-12 col-lg-5">
        <div class="card" style="width: 100%;">
        <img src="${post.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.description}</p>
        <p onclick='like(${index})'>${post.likes} <i class="bi-heart"></i></p>
        </div>
        </div>
        </div>
        `;
	});
}

function like(postIndex) {
	metagram.likePost(postIndex);
	printPosts();
}
