import { createContext, useEffect, useState} from "react"
import { IFeedbackData, IhandleUpdate, InowEditingItem, ProviderProps } from "../types"
import axios from "axios"

export const FeedbackContext = createContext(null)

export default function FeedbackProvider({ children }: ProviderProps) {
	const [feedbacksData, setFeedbacksData] = useState<[IFeedbackData]>(null)
	const [errorMessage, setErrorMessage] = useState<string>(null)
	const [nowEditingItem, setNowEditingItem] = useState<InowEditingItem>({
		item: null,
		editing: false
	})

	const instance = axios.create({
		baseURL: 'http://localhost:3001/api',
		timeout: 5000,
	});
	
	const fetchData = () => {
		console.log(errorMessage);
		
		instance.get('user/1').then(response => {
			setFeedbacksData(response.data.reverse())
		}).catch(e => {
			console.error(e);
			setErrorMessage(`Data getting is failed!`)
		})

	}

	const handleDelete = (id:number): void => {
		if (!window.confirm("Are you sure you want to delete this feedback?")) return
		instance.delete(`/feedback/${id}`).catch(e => {
			setErrorMessage('Deleting failed!')
			console.error(e);
		}).then(fetchData)
	}

	const handleAppend = (rating: number, text: string): void => {
		instance.post(`/feedback`, {
			rating,
			text,
		}).catch(e => {
			setErrorMessage('Appending failed!')
			console.error(e);
		}).then(fetchData)
	}


	const handleUpdate = ({id, rating, text}: IhandleUpdate): void => {
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
				feedbacksData,
				setFeedbacksData,
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
