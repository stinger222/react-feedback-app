import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
	return (
		<div className="feedback-list-wrapper">
			<div className="stats">
				<span>0 Reviews</span>
				<span>Average rating: 8.5</span>
			</div>
			<div className="feedback-list">
				{/* feedback item here */}
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
			</div>
		</div>
	)
}
