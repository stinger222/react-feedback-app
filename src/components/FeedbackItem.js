import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'


export default function FeedbackItem({item, handleDelete}) {

	return (
		<div className="feedback-item">
			<span className="feedback-item-rating">
				{item.rating}
			</span>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='purple'/>
			</button>
			<span className="review-text">
				{item.description}
			</span>
		</div>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.shape({
		rating: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]),
		id: PropTypes.number,
		description: PropTypes.string
	})
}


