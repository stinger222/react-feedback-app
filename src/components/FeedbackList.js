import { useEffect, useState, useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
	const { handleDelete, feedbackData } = useContext(FeedbackContext);

	const noFeedback = !feedbackData || feedbackData.length == 0;
	const [averageRating, setAverageRating] = useState(0);

	const calculateAverageRating = () => {
		if (noFeedback) return 0;
		let average =
			feedbackData.reduce((acc, cur) => acc + cur.rating, 0) /
			feedbackData.length;
		return average.toFixed(1).replace(/[.,]0$/, "");
	};

	useEffect(() => {
		setAverageRating(calculateAverageRating());
	});

	return (
		<div className="feedback-list-wrapper">
			<div className="stats">
				<span>
					{feedbackData.length}{" "}
					{feedbackData.length == 1 ? "Review" : "Reviews"}
				</span>
				<span>Average rating: {averageRating || 0}</span>
			</div>
			<div className="feedback-list">
				{noFeedback && (
					<h2 className="no_feedback">There is no feedback yet.</h2>
				)}

				{!noFeedback &&
					feedbackData.map((item) => (
						<FeedbackItem
							item={item}
							key={item.id}
						/>
					))}
			</div>
		</div>
	);
}
