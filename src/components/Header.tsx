import { Link } from "react-router-dom"
import { HeaderProps } from "../types"
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