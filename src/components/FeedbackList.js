import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({feedbackData, handleDelete}) {


	const noFeedback = !feedbackData || feedbackData.length == 0
	const [averageRating, setAverageRating] = useState(0)

	const computeAverageRating = () => {
		if (noFeedback) return 0

		return (feedbackData.reduce((accum, current) => accum + current.rating, 0) / feedbackData.length).toFixed(1)
	}

	useEffect(() => {
		setAverageRating(computeAverageRating())
	})
	
	return (
		<div className="feedback-list-wrapper">
			<div className="stats">
				<span>{feedbackData.length} {feedbackData.length == 1 ? 'Review' : 'Reviews'}</span>
				<span>Average rating: {averageRating || 0}</span>
			</div>
			<div className="feedback-list">
				{noFeedback && <h2 className="no_feedback">There is no feedback yet.</h2>}

				{!noFeedback && feedbackData.map(item => (
					<FeedbackItem
						handleDelete={handleDelete}
						item={item}
						key={item.id}
					/>
				))}
			</div>
		</div>
	)
}
