import {useState} from 'react';
import FeedbackEditor from "./components/FeedbackEditor";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import feedbackData from './data/feedbackData';

export default function App() {

	const [feedback, setFeedback] = useState(feedbackData)

	const deleteFeedback = id => {
		if (!window.confirm('Are you sure you want to delete this feedback?')) return
		setFeedback(feedback.filter(i => i.id != id))
	}

	return (
		<div className="content">
			<Header/>
			<FeedbackEditor/>
			<FeedbackList handleDelete={deleteFeedback} feedbackData={feedback}/>
		</div>
	);
}
