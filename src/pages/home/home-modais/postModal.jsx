import { getComentPost } from "../../../services";
import { useState, useContext } from "react";
import Modal from 'react-modal';
import { useModalStore } from "../../../zustand/hooks/modais/modalContext.tsx";
import { FaUser } from 'react-icons/fa';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

export const PostModal = (props) => {
	const { post } = props;
	let subtitle;
	const  isOpen = useModalStore(state => state.isOpen);
	const setIsOpen  = useModalStore(state => state.setIsOpen);
	const [comments, setComments] = useState([]);

	async function fetchComentPosts () {
		const data = await getComentPost();
		setComments(data);
	};
	fetchComentPosts();

	console.log("2", props)

	function closeModal() {
		setIsOpen(false);
	}

	function afterOpenModal() {
		subtitle.style.color = '#f00';
	}

	return (
		<div>
			<Modal
				isOpen={isOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<h1>Fabio é gay</h1>
				{/* <div key={post.id} className='post-container'>
					<h2 className='post-title'>{post.title}</h2>
					<p className='post-body'>{post.body}</p>
					<ul className='end-grid'>
						<li><p>Autor: <FaUser /> {post.userId}</p></li>
						<li><p><a className='openModal'>Ver Mais</a></p></li>
					</ul>
				</div> */}
			</Modal>
		</div>
	);
}

