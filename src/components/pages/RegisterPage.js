import axios from "axios"
import Button from "../Button"
import {useState} from 'react'
import Form from "../Form"



export default function RegisterPage() {

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = e => {
		setLogin(e.target.value.trim())
	}

	const handlePassword = e => {
		setPassword(e.target.value)
	}

	const handleSubmit = ({password, login}) => {

		axios.post('http://localhost:3001/register', {
			password,
			login
		}, {
			withCredentials: true
		})
	}

	return (
		<div className="auth-form-wrapper">
			<Form title="Register" handleSubmit={handleSubmit}/>
		</div>
	)
}
