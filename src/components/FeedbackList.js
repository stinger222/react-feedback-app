import { useEffect, useState } from "react"
import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

export default function FeedbackList({feedbackData, handleDelete}) {


	const noFeedback = !feedbackData || feedbackData.length == 0
	const [averageRating, setAverageRating] = useState(0)

	const calculateAverageRating = () => {
		if (noFeedback) return 0
		let average = (feedbackData.reduce((acc, cur) => acc + cur.rating, 0) / feedbackData.length)
		return average.toFixed(1).replace(/[.,]0$/, '')
	}

	useEffect(() => {
		setAverageRating(calculateAverageRating())
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

FeedbackList.propTypes = {
	feedbackData: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired
}