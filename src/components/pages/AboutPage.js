import { Link } from "react-router-dom";
import Card from "../Card";

export default function AboutPage() {
	return (
		<Card className={'about'}>
			<h1>
				About this project
			</h1>
			<br/>
			<p>
				This is a simple app where you can send feedback about  products and services.
			</p>
			<br/>
			<p>Version: 0.1.0</p>
			<br/>
			<Link to='/'>Back To Home</Link>
		</Card>
	)
}
