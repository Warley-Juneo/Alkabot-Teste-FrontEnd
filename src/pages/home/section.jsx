import './section.css'
import ReactPaginate from 'react-paginate';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { getPosts } from '../../services';
import { FaUser } from 'react-icons/fa';
import { useModalStore } from '../../zustand/hooks/modais/modalContext.tsx';
import { PostModal } from './home-modais/postModal';

export const Section = () => {
	const [currentPost, setCurrentPost] = useState(null);
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const { isOpen, setIsOpen } = useModalStore();

	useEffect(() => {
		async function fetchPosts() {
			const data = await getPosts();
			setPosts(data);
		}; fetchPosts();
	}, [])

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const displayedPosts = useMemo(
		() => posts.slice(currentPage * 4, currentPage * 4 + 4),
		[currentPage, posts]
	);

	console.log("Linha 33")
	return (
		<div className='section'>
			<div className='home-container'>
				<div className='posts-grid'>
					{displayedPosts.map((post) => (
						<div key={post.id} className='post-container'>
							<h2 className='post-title'>{post.title}</h2>
							<p className='post-body'>{post.body}</p>
							<ul className='end-grid'>
								<li><p>Autor: <FaUser /> {post.userId}</p></li>
								<li><p>
									<a className='openModal' onClick={() => {
										setCurrentPost(post);
										openModal()
									}}>Ver Mais</a>
								</p></li>
							</ul>
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

			<div className='title-second-section'>
				<h1>Posts mais comentados</h1>
			</div>
			{isOpen && <PostModal post={currentPost} />}
		</div>
	);
}

//osh
