import {useState} from 'react'
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import feedbackData from './data/feedbackData'

export default function App() {

	const [feedback, setFeedback] = useState(feedbackData)

	const deleteFeedback = id => {
		if (!window.confirm('Are you sure you want to delete this feedback?')) return
		setFeedback(feedback.filter(i => i.id != id))
	}

	const handleAppend = (rating, description) => {
		setFeedback([...feedback, {
			id: feedback.slice(-1).id + 1,
			rating,
			description
		}])
	}

	return (
		<div className="content">
			<Header/>
			<FeedbackForm/>
			<FeedbackList handleDelete={deleteFeedback} feedbackData={feedback}/>
		</div>
	)
}
