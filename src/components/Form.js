import { FeedbackContext } from '../context/FeedbackContext';
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/forms.scss'

export default function Form({title, handleSubmit}) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const [ errorMessage, setErrorMessage ] = useState('')

	const handleLogin = e => {
		setErrorMessage('')
		setLogin(e.target.value.trim())
		console.log(login);
	}

	const handlePassword = e => {
		setPassword(e.target.value)
	}

	const onSubmit = async e => {
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

Form.propTypes = {
	title: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired
}

