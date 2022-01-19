import { FeedbackContext } from "../context/FeedbackContext";
import { useContext } from "react";
import { FaTimes } from 'react-icons/fa'
import Card from './Card'

export default function FeedbackItem({item}) {

	const { handleDelete } = useContext(FeedbackContext);

	return (
		<Card className="feedback-item">
			<span className="feedback-item-rating">
				{item.rating}
			</span>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='purple'/>
			</button>
			<span className="review-text">
				{item.description}
			</span>
		</Card>
	)
}
