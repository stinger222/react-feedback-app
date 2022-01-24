import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export const FeedbackContext = createContext()

export default function FeedbackProvider({ children }) {
	const [feedbackData, setFeedbackData] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [nowEditingItem, setNowEditingItem] = useState({
		item: null,
		editing: false
	})

	const fetchData = async () => {
		const response = await axios.get('http://localhost:5000/feedback')
		setFeedbackData(response.data.reverse())
	}

	useEffect(fetchData, [])

	const handleDelete =  (id) => {
		if (!window.confirm("Are you sure you want to delete this feedback?")) return
		axios.delete(`http://localhost:5000/feedback/${id}`).catch(() => {
			setErrorMessage('Deleting failed!' )
		}).then(fetchData)
	}

	const handleAppend = (rating, text) => {
		axios.post(`http://localhost:5000/feedback`, {
			rating,
			text,
		}).catch(e => {
			setErrorMessage('Appending failed!')
		}).then(fetchData)
	}

	const handleUpdate = ({id, rating, text}) => {
		axios.put(`http://localhost:5000/feedback/${id}`, {
			rating,
			text,
		}).catch(e => {
			setErrorMessage('Updating failed!')
		}).then(fetchData)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedbackData,
				setFeedbackData,
				handleAppend,
				handleDelete,
				nowEditingItem,
				setNowEditingItem,
				errorMessage,
				setErrorMessage,
				handleUpdate
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}
