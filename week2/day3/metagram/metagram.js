class Metagram {
	constructor() {
		this.posts = [];
	}

	addPost(title, description, imageUrl) {
		const post = {
			title,
			description,
			imageUrl,
			likes: 0,
		};
		this.posts.push(post);
	}

	deletePost(postIndex) {
		this.posts.splice(postIndex, 1);
	}

	likePost(postIndex) {
		this.posts[postIndex].likes++;
	}
}
