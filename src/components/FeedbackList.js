import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({feedbackData}) {

	const [averageRating, setAverageRating] = useState(0)

	const computeAverageRating = () => {
		return (feedbackData.reduce((accum, current) => accum + current.rating, 0) / feedbackData.length).toFixed(1)
	}

	useEffect(() => {
		setAverageRating(computeAverageRating())
	})
	console.log(feedbackData)
	return (
		<div className="feedback-list-wrapper">
			<div className="stats">
				<span>{feedbackData.length} {feedbackData.length == 1 ? 'Review' : 'Reviews'}</span>
				<span>Average rating: {averageRating}</span>
			</div>
			<div className="feedback-list">
				{feedbackData.length == 0 && <h2 className="no_feedback">There is no feedback yet.</h2>}

				{feedbackData && feedbackData.map(item => (
					<FeedbackItem 
						rating={item.rating}
						description={item.description}
						key={item.id}
					/>
				))}

			</div>
		</div>
	)
}
