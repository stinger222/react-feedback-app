import {useState} from 'react'
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import feedbackData from './data/feedbackData'
import { v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

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

	return (
		<Router>
			<Header />

				<Routes>
					<Route
						exact path="/" element={
							<>
								<div className="container">
									<FeedbackForm handleAppend={handleAppend} />
									<FeedbackList	handleDelete={deleteFeedback} feedbackData={feedback} />
									<AboutIconLink/>
								</div>
							</>
						}
						/>

					<Route exact path="/about" element={<AboutPage/>}/>
				
				</Routes>
		</Router>
	);
	}
