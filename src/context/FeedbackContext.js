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

	const instance = axios.create({
		baseURL: 'http://localhost:5000',
		timeout: 1000,
	});

	const fetchData = () => {
		instance.get('/feedback').then(response => {
			setFeedbackData(response.data.reverse())
		}).catch(e => {
			console.error(e);
			setErrorMessage(`Data getting is failed!`)
		})

		
	}

	useEffect(fetchData, [])

	const handleDelete =  (id) => {
		if (!window.confirm("Are you sure you want to delete this feedback?")) return
		instance.delete(`/feedback/${id}`).catch(() => {
			setErrorMessage('Deleting failed!' )
		}).then(fetchData)
	}

	const handleAppend = (rating, text) => {
		instance.post(`/feedback`, {
			rating,
			text,
		}).catch(e => {
			setErrorMessage('Appending failed!')
		}).then(fetchData)
	}

	const handleUpdate = ({id, rating, text}) => {
		instance.put(`/feedback/${id}`, {
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
