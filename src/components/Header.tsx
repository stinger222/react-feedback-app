import { Link } from "react-router-dom"
import { HeaderProps } from "../types"
import HeaderNav from "./HeaderNav"
export default function Header({ text }: HeaderProps) {
	return (
		<header>
			<Link to='/' className="app-header">
				{text}
			</Link>
			<HeaderNav/>
		</header>
	)
}

Header.defaultProps = {
	text: "Feedback App",
}