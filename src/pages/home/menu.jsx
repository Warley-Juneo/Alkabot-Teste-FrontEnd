import "./menu.css"


export const Menu = () => {
	return (
		<div className='header'>
			<div className='brand'>
				<h1>Postify</h1>
			</div>
			<div className='search'>
				<ul>
					<li><a href="#">Procurar posts</a></li>
					<li><a href="#">Procurar user</a></li>
					<li><a href="#">Faça seu post</a></li>
				</ul>
			</div>
		</div>
	);
}
