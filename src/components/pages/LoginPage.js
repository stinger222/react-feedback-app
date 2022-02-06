import axios from "axios"
import Button from "../Button"
import {useState} from 'react'



export default function LoginPage() {

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = e => {
		setLogin(e.target.value.trim())
	}

	const handlePassword = e => {
		setPassword(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		axios.post('http://localhost:3001/login', {
			password,
			login
		}, {
			withCredentials: true
		})
	}

	return (
		<form onSubmit={handleSubmit} className="auth-form register">
			<input onChange={handleLogin} placeholder="login"/>
			<input onChange={handlePassword} type="password" placeholder="password"/>
			<Button type="submit">DICK</Button>
		</form>
	)
}
