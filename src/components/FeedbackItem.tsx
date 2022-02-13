import { FeedbackContext } from "../context/FeedbackContext";
import { useContext } from "react";
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './Card'

export default function FeedbackItem({item}) {

	const { handleDelete, setNowEditingItem, nowEditingItem, setErrorMessage} = useContext(FeedbackContext);

	const handleEdit = (): void => {
		if (!nowEditingItem.editing) {
			setNowEditingItem({item, editing: true})
		} else if (nowEditingItem.editing && nowEditingItem.item.id === item.id) {
			setErrorMessage('You already editing this feedback!')
			console.error('You already editing this feedback!')
		} else {
			setErrorMessage('You already editing another feedback!')
			console.error('You already editing another feedback!')
		}
	}

	return (
		<Card className="feedback-item">
			<span className="feedback-item-rating">
				{item.rating}
			</span>
			<button onClick={handleEdit} className='edit'>
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
