import _feedbackData from "../data/feedbackData"
import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export const FeedbackContext = createContext()

export default function FeedbackProvider({ children }) {
	const [feedbackData, setFeedbackData] = useState(_feedbackData)
	const [errorMessage, setErrorMessage] = useState(null)

	const handleDelete = (id) => {
		if (!window.confirm("Are you sure you want to delete this feedback?"))
			return
		setFeedbackData(feedbackData.filter((i) => i.id != id))
	}

	const handleAppend = (rating, text) => {
		setFeedbackData([
			{
				id: uuidv4(),
				rating,
				text,
			},
			...feedbackData,
		])
	}

	const [nowEditingItem, setNowEditingItem] = useState({
		item: null,
		editing: false
	})

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
				setErrorMessage
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}
