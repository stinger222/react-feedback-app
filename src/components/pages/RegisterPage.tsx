import { IhandleSubmit } from "../../types"
import axios from "axios"
import Form from "../Form"

export default function RegisterPage() {
	
	const handleSubmit = async ({password, login}: IhandleSubmit) => {
		return await axios.post('http://localhost:3001/register', {
			password,
			login
		}, { withCredentials: true })
	}

	return (
		<div className="auth-form-wrapper">
			<Form title="Register" handleSubmit={handleSubmit}/>
		</div>
	)
}
