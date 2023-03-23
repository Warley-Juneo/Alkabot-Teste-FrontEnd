import { getComentPost } from "../../../services";
import { useState, useContext, useEffect } from "react";
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
	const { isOpen, setIsOpen } = useModalStore();
	const [comments, setComments] = useState([]);

	async function fetchComentPosts () {
		const data = await getComentPost(post.id);
		setComments(data);
	};

	useEffect(() => {
		fetchComentPosts();
	}, [post.id]);

	function closeModal() {
		setIsOpen(false);
	}
	useEffect(() => {
		if (!isOpen) {
			closeModal();
		}
	}, [isOpen])

	console.log("Daqui")
	Modal.setAppElement('#root');
	return (
		<div>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div key={post.id} className='post-container'>
					<h2 className='post-title'>{post.title}</h2>
					<p className='post-body'>{post.body}</p>
					<ul className='end-grid'>
						<li><p>Autor: <FaUser /> {post.userId}</p></li>
					</ul>
				</div>
			</Modal>
		</div>
	);
}

