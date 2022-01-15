import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './Card'


export default function FeedbackItem({item, handleDelete}) {

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

FeedbackItem.propTypes = {
	item: PropTypes.shape({
		rating: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]),
		id: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]),
		description: PropTypes.string
	})
}


