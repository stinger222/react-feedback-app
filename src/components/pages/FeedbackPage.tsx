import AboutIconLink from "../AboutIconLink";
import FeedbackForm from "../FeedbackForm";
import FeedbackList from "../FeedbackList";

export default function FeedbackPage() {
	return (
		<div className="container">
			<FeedbackForm />
			<FeedbackList />
			<AboutIconLink />
		</div>
	)
}
