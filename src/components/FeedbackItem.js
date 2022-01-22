import { FeedbackContext } from "../context/FeedbackContext";
import { useContext } from "react";
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './Card'

export default function FeedbackItem({item}) {

	const { handleDelete, setNowEditingItem } = useContext(FeedbackContext);

	return (
		<Card className="feedback-item">
			<span className="feedback-item-rating">
				{item.rating}
			</span>
			<button onClick={() => setNowEditingItem({item, editing: true})} className='edit'>
				<FaEdit color='purple'/>
			</button>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='purple'/>
			</button>
			<span className="review-text">
				{item.text}
			</span>
		</Card>
	)
}
