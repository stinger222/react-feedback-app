import _feedbackData from "../data/feedbackData"
import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export const FeedbackContext = createContext()

export default function FeedbackProvider({ children }) {
	const [feedbackData, setFeedbackData] = useState(_feedbackData)

	const handleDelete = (id) => {
		if (!window.confirm("Are you sure you want to delete this feedback?"))
			return
		setFeedbackData(feedbackData.filter((i) => i.id != id))
	}

	const handleAppend = (rating, description) => {
		setFeedbackData([
			{
				id: uuidv4(),
				rating,
				description,
			},
			...feedbackData,
		])
	}

	return (
		<FeedbackContext.Provider
			value={{ feedbackData, handleAppend, handleDelete }}
		>
			{children}
		</FeedbackContext.Provider>
	)
}
