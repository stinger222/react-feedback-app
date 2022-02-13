import { IhandleSubmit } from "../../types"
import Form from "../Form"
import axios from "axios"

export default function LoginPage() {
	const handleSubmit = async ({login, password}: IhandleSubmit) => {
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
