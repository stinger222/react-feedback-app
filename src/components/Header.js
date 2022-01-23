import { Link } from "react-router-dom"

export default function Header({ text }) {
	return (
		<>
			<header>
				<Link to='/'>{text}</Link>
			</header>
		</>
	)
}

Header.defaultProps = {
	text: "Feedback App",
}