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

	return (
		<div className="feedback-list-wrapper">
			<div className="stats">
				<span>0 Reviews</span>
				<span>Average rating: {averageRating}</span>
			</div>
			<div className="feedback-list">
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
