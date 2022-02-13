import { useState } from 'react';
import Button from './Button';
import '../styles/forms.scss'

interface FormProps {
	title: string,
	handleSubmit: ({login, password}: IhandleSubmit) => any
}

interface IhandleSubmit {
	login: string,
	password: string
}

export default function Form({title, handleSubmit}: FormProps) {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const [ errorMessage, setErrorMessage ] = useState('')

	const handleLogin = e => {
		setErrorMessage('')
		setLogin(e.target.value.trim())
		console.log(login);
	}

	const handlePassword = (e): void => {
		setPassword(e.target.value)
	}

	const onSubmit = async (e) => {
		e.preventDefault()

		if (login.split(' ').length > 1) {
			setErrorMessage('Login shouldn\'t contain spaces!')
			return
		}
		
	
		handleSubmit({login, password})
			.then()
			.catch(err => {
				setErrorMessage(err.response.data.message)
			})
	}
	
	return (
		<form onSubmit={onSubmit} className="auth-form"
		>
			<div className="form-title">
				<h1>{title}</h1>
			</div>
			<div className="form-inputs">
				<input onChange={handleLogin} placeholder="login"/>
				<input onChange={handlePassword} type="password" placeholder="password"/>
				<span className="error-message">
					{errorMessage}
				</span>
				<Button type="submit">Submit</Button>
			</div>
		</form>	
	)
}
