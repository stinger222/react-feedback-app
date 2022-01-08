import { useEffect, useState } from 'react';

export default function FeedbackItem({rating, description, }) {



	return (
		<div className="feedback-item">
			<span className="feedback-item-rating">
				{rating}
			</span>
			<span className="review-text">
				{description}
			</span>
		</div>
	)
}
