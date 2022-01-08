import { useEffect } from 'react';

export default function FeedbackItem({rating, description, setAverageRating}) {

	const averageComputer = (values = []) => (nextValue) => {
		values.push(nextValue)
		return (values.reduce((prev, current) => prev + current) / values.length).toFixed(1)
	}
	
	const getAverage = averageComputer()

	useEffect(() => {
		setAverageRating(rating)
	}, [])

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
