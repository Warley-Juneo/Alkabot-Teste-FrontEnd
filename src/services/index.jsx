const URLPost = 'https://jsonplaceholder.typicode.com/posts'
// const URLComentPost = 'https://jsonplaceholder.typicode.com/posts/[ID]/comments'
// const URLUsers = 'https://jsonplaceholder.typicode.com/users'
// const URLDetailsUser = 'https://jsonplaceholder.typicode.com/users/[ID]'

export const getPosts = async () => {
	return await fetch(URLPost)
		.then(response => response.json())
}

