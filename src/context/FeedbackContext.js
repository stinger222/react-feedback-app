import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const FeedbackContext = createContext()

export default function FeedbackProvider({ children }) {
	const [feedbackData, setFeedbackData] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [nowEditingItem, setNowEditingItem] = useState({
		item: null,
		editing: false
	})

	const instance = axios.create({
		baseURL: 'http://localhost:3001/api',
		timeout: 5000,
	});
	
	const fetchData = () => {
		instance.get('user/1').then(response => {
			setFeedbackData(response.data.reverse())
		}).catch(e => {
			console.error(e);
			setErrorMessage(`Data getting is failed!`)
		})

	}

	const handleDelete =  (id) => {
		if (!window.confirm("Are you sure you want to delete this feedback?")) return
		instance.delete(`/feedback/${id}`).catch(e => {
			setErrorMessage('Deleting failed!')
			console.error(e);
		}).then(fetchData)
	}

	const handleAppend = (rating, text) => {
		instance.post(`/feedback`, {
			rating,
			text,
		}).catch(e => {
			setErrorMessage('Appending failed!')
			console.error(e);
		}).then(fetchData)
	}

	const handleUpdate = ({id, rating, text}) => {
		instance.put(`/feedback/${id}`, {
			rating,
			text,
		}).catch(e => {
			setErrorMessage('Updating failed!')
			console.error(e);
		}).then(fetchData)
	}

	useEffect(fetchData, [])

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
