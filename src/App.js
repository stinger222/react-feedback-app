import {useState} from 'react'
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import feedbackData from './data/feedbackData'
import { v4 as uuidv4} from 'uuid'

export default function App() {

	const [feedback, setFeedback] = useState(feedbackData)

	const deleteFeedback = id => {
		if (!window.confirm('Are you sure you want to delete this feedback?')) return
		setFeedback(feedback.filter(i => i.id != id))
	}

	const handleAppend = (rating, description) => {
		setFeedback([{
			id: uuidv4(),
			rating,
			description
		}, ...feedback])
	}

	return <>
			<Header/>
			<FeedbackForm handleAppend={handleAppend}/>
			<FeedbackList handleDelete={deleteFeedback} feedbackData={feedback}/>
	</>
	}
