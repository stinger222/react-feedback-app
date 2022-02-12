import { Link } from "react-router-dom"

interface HeaderProps {
	text: string
}

export default function Header({ text }: HeaderProps) {
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