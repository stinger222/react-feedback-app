import { useState, useRef } from 'react';
import { FormProps } from '../types';
import Button from './Button';
import '../styles/forms.scss'
import { Redirect } from 'react-router-dom';

export default function Form({title, handleSubmit}: FormProps) {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [ errorMessage, setErrorMessage ] = useState<string>('')
	const [isLogged, setIsLogged] = useState<boolean>(false)

	const handleLogin = (e):void => {
		setErrorMessage('')
		setLogin(e.target.value.trim())
	}

	const handlePassword = (e):void => {
		setPassword(e.target.value)
	}

	const onSubmit = async (e) => {
		e.preventDefault()

		if (login.split(' ').length > 1) {
			setErrorMessage('Login shouldn\'t contain spaces!')
			return
		}

		handleSubmit({login, password})
			.then(() => {
				setErrorMessage('')
				setIsLogged(true)
			})
			.catch(err => {
				setErrorMessage(err.response.data.message)
			})
	}

	if (isLogged) return <Redirect to="/"/>
	return (
		<form onSubmit={onSubmit} className="auth-form">
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
