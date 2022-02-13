import { useEffect, useState, useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"
import Loader from "./Loader"

export default function FeedbackList() {
	const { feedbacksData } = useContext(FeedbackContext)

	const noFeedback = !feedbacksData || feedbacksData.length === 0
	const [averageRating, setAverageRating] = useState(0)

	const calculateAverageRating = (): number => {
		if (noFeedback) return 0
		const average =
			feedbacksData.reduce((acc, cur) => acc + cur.rating, 0) /
			feedbacksData.length
		return +average.toFixed(1).replace(/[.,]0$/, "")
	}

	useEffect(() => {
		setAverageRating(calculateAverageRating())
	})

	if (noFeedback) return <Loader/>

	return (
		<div className="feedback-list-wrapper">
			<div className="stats">
				<span>
					{feedbacksData.length}{" "}
					{feedbacksData.length === 1 ? "Review" : "Reviews"}
				</span>
				<span>Average rating: {averageRating || 0}</span>
			</div>
			<div className="feedback-list">
				{noFeedback && (
					<h2 className="no_feedback">There is no feedback yet.</h2>
				)}

				{!noFeedback &&
					feedbacksData.map((item) => (
						<FeedbackItem
							item={item}
							key={item.id}
						/>
					))}
			</div>
		</div>
	)
}
