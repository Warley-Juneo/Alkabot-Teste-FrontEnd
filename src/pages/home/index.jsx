import './index.css'
import { useEffect, useState } from 'react';
import { getPosts } from '../../services';
import ReactPaginate from 'react-paginate';

export const Home = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	// Buscar posts
	useEffect(() => {
		const fetchPosts = async () => {
			const data = await getPosts();
			setPosts(data);
		};
		fetchPosts();
	}, []);

		// Paginação
	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	// Posts da página atual
	const displayedPosts = posts.slice(currentPage * 4, currentPage * 4 + 4);

	return (
		<div className='home-container'>
			<h1 className='post-title'>Posts</h1>
			<div className='posts-grid'>
				{displayedPosts.map((post) => (
					<div key={post.id} className='post-container'>
						<h2 className='post-title'>{post.title}</h2>
						<p className='post-body'>{post.body}</p>
					</div>
				))}
				</div>
				<ReactPaginate
					previousLabel={'Anterior'}
					nextLabel={'Próxima'}
					breakLabel={'...'}
					pageCount={Math.ceil(posts.length / 4)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					onPageChange={handlePageChange}
					containerClassName={'pagination'}
					activeClassName={'active'}
				/>
		</div>
	);
}
