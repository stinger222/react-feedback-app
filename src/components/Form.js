import '../styles/forms.scss'
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './Button';

export default function Form({title, handleSubmit}) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = e => {
		setLogin(e.target.value.trim())
		console.log(login);
	}

	const handlePassword = e => {
		setPassword(e.target.value)
	}

	const onSubmit = e => {
		e.preventDefault()
		handleSubmit({login, password})
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
				<Button type="submit">Submit</Button>
			</div>
		</form>
	)
}

Form.propTypes = {
	title: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired
}

