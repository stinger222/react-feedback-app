import {useState} from 'react';
import FeedbackEditor from "./components/FeedbackEditor";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import feedbackData from './data/feedbackData';

export default function App() {

	const [feedback, setFeedback] = useState(feedbackData)

	return (
		<div className="content">
			<Header/>
			<FeedbackEditor/>
			<FeedbackList feedbackData={feedback}/>
		</div>
	);
}
