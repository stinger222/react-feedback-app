import axios from "axios"
import Button from "../Button"
import {useState} from 'react'
import Form from "../Form"


export default function LoginPage() {

	const handleSubmit = async ({login, password}) => {
		return await axios.post('http://localhost:3001/login', {
			password,
			login
		}, {withCredentials: true	})
	}

	return (
		<div className="auth-form-wrapper">
			<Form title="Login" handleSubmit={handleSubmit}/>
		</div>
	)
}
